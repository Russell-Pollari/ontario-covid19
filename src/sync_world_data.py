import wget
import pymongo
from dotenv import load_dotenv

import os
import csv
from datetime import datetime

from utils import string_to_int, download_data


DATA_URL = 'https://covid.ourworldindata.org/data/ecdc/full_data.csv'


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


def sync_with_db(statuses, mongo_uri):
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
    bulk_write_result = db.world_statuses.bulk_write(db_updates)

    print('Matched', bulk_write_result.matched_count)
    print('Inserted', bulk_write_result.inserted_count)
    print('Upserted', bulk_write_result.upserted_count)
    print('Modified', bulk_write_result.modified_count)


if __name__ == '__main__':
    load_dotenv()
    mongo_uri = os.getenv('MONGO_URI', 'mongodb://localhost.com:27071')
    save_as = 'data/raw/world/world_statuses_{}.csv'.format(datetime.now())
    filename = download_data(DATA_URL, save_as)
    statuses = read_csv(filename)
    sync_with_db(statuses, mongo_uri)
