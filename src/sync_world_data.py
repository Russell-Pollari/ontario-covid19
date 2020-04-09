import wget
import pymongo
from dotenv import load_dotenv

import os
import csv
from datetime import datetime

from utils import string_to_int


DATA_URL = 'https://covid.ourworldindata.org/data/ecdc/full_data.csv'


def download_data(url):
    filename = 'data/raw/world/world_statuses_{}.csv'.format(datetime.now())
    return wget.download(url, filename)


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
                if field_name is 'date' or field_name is 'location':
                    tmp[field_name] = value
                else:
                    tmp[field_name] = string_to_int(value)

            statuses.append(tmp)

    return statuses


def sync_with_db(updates, mongo_uri):
    client = pymongo.MongoClient(mongo_uri)
    db = client.get_default_database()
    db.world_statuses.drop()
    db.world_statuses.insert_many(updates)


if __name__ == '__main__':
    load_dotenv()
    mongo_uri = os.getenv('MONGO_URI', 'mongodb://localhost.com:27071')

    filename = download_data(DATA_URL)
    updates = read_csv(filename)
    sync_with_db(updates, mongo_uri)
