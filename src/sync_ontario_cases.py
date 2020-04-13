import pymongo
from dotenv import load_dotenv

import os
import csv
import tempfile
from datetime import datetime

from utils import download_data


def read_csv(filename):
    cases = []
    with open(filename) as csv_file:
        reader = csv.reader(csv_file)
        column_names = next(reader)
        for row in reader:
            tmp = {
                '_id': row[0],
                'episode_date': datetime.strptime(row[1], '%Y-%m-%d'),
            }

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
    bulk_write_result = db.ontario_cases.bulk_write(db_updates)

    print('\n')
    print('Matched', bulk_write_result.matched_count)
    print('Inserted', bulk_write_result.inserted_count)
    print('Upserted', bulk_write_result.upserted_count)
    print('Modified', bulk_write_result.modified_count)


def sync_ontario_cases():
    data_url = 'https://data.ontario.ca/dataset/f4112442-bdc8-45d2-be3c-12efae72fb27/resource/455fd63b-603d-4608-8216-7d8647f43350/download/conposcovidloc.csv' # noqas

    with tempfile.TemporaryDirectory() as tmp_dir:
        temp_file = '{}/ontario_cases.csv'.format(tmp_dir)
        filename = download_data(data_url, temp_file)
        cases = read_csv(filename)

    sync_with_db(cases)


if __name__ == '__main__':
    load_dotenv()
    sync_ontario_cases()
