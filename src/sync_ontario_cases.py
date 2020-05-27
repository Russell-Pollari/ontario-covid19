import pymongo
from dotenv import load_dotenv

import os
import csv
import tempfile
from datetime import datetime

from utils import download_data
from logger import log


DATA_URL = 'https://data.ontario.ca/dataset/f4112442-bdc8-45d2-be3c-12efae72fb27/resource/455fd63b-603d-4608-8216-7d8647f43350/download/conposcovidloc.csv' # noqas
COLLECTION_NAME = 'ontario_cases'


def read_csv(filename):
    cases = []
    with open(filename) as csv_file:
        reader = csv.reader(csv_file)
        column_names = next(reader)
        for row in reader:
            try:
                tmp = {
                    '_id': row[0],
                    'episode_date': datetime.strptime(row[1], '%Y-%m-%d'),
                }
            except: # noqa
                pass

            for index, column in enumerate(row):
                field_name = column_names[index].lower()
                if 'latitude' in field_name or 'longitude' in field_name:
                    tmp[field_name] = float(column)
                else:
                    tmp[field_name] = column

            cases.append(tmp)

    return cases


def sync_with_db(cases):
    mongo_uri = os.getenv('MONGO_URI', None)
    client = pymongo.MongoClient(mongo_uri)
    db = client.get_default_database()

    db_updates = [
        pymongo.UpdateOne({
            '_id': case['_id'],
        }, {
            '$set': case
        }, upsert=True) for case in cases
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


def sync_ontario_cases():
    log('Checking for updates', COLLECTION_NAME, DATA_URL)

    with tempfile.TemporaryDirectory() as tmp_dir:
        temp_file = '{}/ontario_cases.csv'.format(tmp_dir)
        filename = download_data(DATA_URL, temp_file)
        cases = read_csv(filename)

    sync_with_db(cases)


if __name__ == '__main__':
    load_dotenv()
    sync_ontario_cases()
