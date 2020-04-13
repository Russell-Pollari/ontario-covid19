import pymongo
from dotenv import load_dotenv

import os
import csv
from datetime import datetime

from utils import string_to_int, download_data


DATA_URL = 'https://health-infobase.canada.ca/src/data/covidLive/covid19.csv'


def get_field_name_from_column_name(column_name):
    if 'prname' == column_name:
        return 'province'
    if 'numconf' in column_name:
        return 'total_cases'
    if 'numprob' in column_name:
        return 'probable_cases'
    if 'numdeaths' in column_name:
        return 'total_deaths'
    if 'numtested' in  column_name:
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
                'reported_date': datetime.strptime(row[3], '%d-%m-%Y').isoformat()
            }
            for index, value in enumerate(row):
                field_name = get_field_name_from_column_name(column_names[index])
                if field_name:
                    if 'province' in field_name:
                        tmp[field_name] = value
                    else:
                        tmp[field_name] = string_to_int(value)

            updates.append(tmp)

    return updates


def sync_with_db(updates, mongo_uri):
    client = pymongo.MongoClient(mongo_uri)
    db = client.get_default_database()
    db.canada_statuses.drop()
    db.canada_statuses.insert_many(updates)


if __name__ == '__main__':
    load_dotenv()
    mongo_uri = os.getenv('MONGO_URI', 'mongodb://localhost.com:27071')
    save_as = 'data/raw/canada/canada_statuses_{}.csv'.format(datetime.now())
    filename = download_data(DATA_URL, save_as)
    updates = read_csv(filename)
    sync_with_db(updates, mongo_uri)
