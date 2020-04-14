import pymongo
from dotenv import load_dotenv

import os
import csv
import tempfile
from datetime import datetime

from utils import string_to_int, download_data
from logger import log


DATA_URL = 'https://covid.ourworldindata.org/data/ecdc/full_data.csv'
COLLECTION_NAME = 'world_statuses'


def read_csv(filename):
    statuses = []
    with open(filename) as f:
        reader = csv.reader(f)
        column_names = next(reader)
        for row in reader:
            tmp = {
                'reported_date': datetime.strptime(row[0], '%Y-%m-%d')
            }

            for index, value in enumerate(row):
                field_name = column_names[index]
                if field_name == 'date' or field_name == 'location':
                    tmp[field_name] = value
                else:
                    tmp[field_name] = string_to_int(value)

            statuses.append(tmp)

    return statuses


def sync_with_db(statuses):
    mongo_uri = os.getenv('MONGO_URI', '')
    client = pymongo.MongoClient(mongo_uri)
    db = client.get_default_database()

    db_updates = [
        pymongo.UpdateOne({
            'location': status['location'],
            'reported_date': status['reported_date'],
        }, {
            '$set': status
        }, upsert=True) for status in statuses
    ]
    result = db[COLLECTION_NAME].bulk_write(db_updates)

    if result.upserted_count > 0 or result.modified_count > 0:
        log(
            'Updating data',
            COLLECTION_NAME,
            DATA_URL,
            result.upserted_count,
            result.modified_count
        )


def sync_world_statuses():
    log('Checking for updates', COLLECTION_NAME, DATA_URL)

    with tempfile.TemporaryDirectory() as tmp_dir:
        temp_file = '{}/{}'.format(tmp_dir, 'world.csv')
        filename = download_data(DATA_URL, temp_file)
        statuses = read_csv(filename)

    sync_with_db(statuses)


if __name__ == '__main__':
    load_dotenv()
    sync_world_statuses()
