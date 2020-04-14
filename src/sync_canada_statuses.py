import pymongo
from dotenv import load_dotenv

import os
import csv
import tempfile
from datetime import datetime

from utils import string_to_int, download_data
from logger import log


DATA_URL = 'https://health-infobase.canada.ca/src/data/covidLive/covid19.csv' # noqa
COLLECTION_NAME = 'canada_statuses'


def get_field_name_from_column_name(column_name):
    if 'prname' == column_name:
        return 'province'
    if 'numconf' in column_name:
        return 'total_cases'
    if 'numprob' in column_name:
        return 'probable_cases'
    if 'numdeaths' in column_name:
        return 'total_deaths'
    if 'numtested' in column_name:
        return 'total_tested'
    if 'numrecover' in column_name:
        return 'total_recovered'
    if 'numtoday' in column_name:
        return 'new_cases'

    return None


def read_csv(filename):
    updates = []
    with open(filename) as csv_file:
        reader = csv.reader(csv_file)
        column_names = next(reader)
        for row in reader:
            tmp = {
                'reported_date': datetime.strptime(row[3], '%d-%m-%Y')
            }

            for index, value in enumerate(row):
                column_name = column_names[index]
                field_name = get_field_name_from_column_name(column_name)
                if field_name:
                    if 'province' in field_name:
                        tmp[field_name] = value
                    else:
                        tmp[field_name] = string_to_int(value)

            updates.append(tmp)

    return updates


def sync_with_db(statuses):
    mongo_uri = os.getenv('MONGO_URI', None)
    client = pymongo.MongoClient(mongo_uri)
    db = client.get_default_database()

    db_updates = [
        pymongo.UpdateOne({
            'reported_date': status['reported_date'],
            'province': status['province'],
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


def sync_canada_statuses():
    log('Checking for updates', COLLECTION_NAME, DATA_URL)

    with tempfile.TemporaryDirectory() as tmp_dir:
        temp_file = '{}/canada.csv'.format(tmp_dir)
        filename = download_data(DATA_URL, temp_file)
        statuses = read_csv(filename)

    sync_with_db(statuses)


if __name__ == '__main__':
    load_dotenv()
    sync_canada_statuses()
