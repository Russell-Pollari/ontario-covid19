import wget
import pymongo
from dotenv import load_dotenv

import os
import csv
from datetime import datetime

from utils import string_to_int


DATA_URL = 'https://data.ontario.ca/dataset/f4f86e54-872d-43f8-8a86-3892fd3cb5e6/resource/ed270bb8-340b-41f9-a7c6-e8ef587e6d11/download/covidtesting.csv' # noqa
DATA_PATH = 'data/raw/ontario'


def get_field_name_from_column_name(column_name):
    if 'Resolved' in column_name:
        return 'total_resolved'
    if 'Under Investigation' in column_name:
        return 'total_pending_tests'
    if 'Deaths' in column_name:
        return 'total_deaths'
    if 'Total Cases' in column_name:
        return 'total_cases'
    if 'testing' in column_name:
        return 'total_tested'
    if 'hospitalized' in column_name:
        return 'num_hospitalized'
    if 'ventilator' in column_name:
        return 'num_ventilator'
    if 'ICU' in column_name:
        return 'num_icu'
    if 'Confirmed Negative' in column_name:
        return 'negative'

    return None


def download_data(url):
    filename = '{}/ontario_statuses_{}.csv'.format(DATA_PATH, datetime.now())
    return wget.download(url, filename)


def read_csv(filename):
    statuses = []
    with open(filename) as csv_file:
        reader = csv.reader(csv_file)
        column_names = next(reader)

        prev_total_cases = 0
        prev_total_deaths = 0
        prev_total_tests = 0

        for row in reader:
            tmp = {
                'reported_date': datetime.strptime(row[0], '%Y-%m-%d'),
            }

            for index, column in enumerate(row):
                column_name = column_names[index]
                field_name = get_field_name_from_column_name(column_name)
                if field_name:
                    tmp[field_name] = string_to_int(column)

            # Handle change in test reporting
            tmp['total_tests_reported'] = tmp['total_tested']
            if tmp['negative'] > 0:
                total_tests_reported = tmp['negative'] + tmp['total_cases']
                tmp['total_tests_reported'] = total_tests_reported

            tmp['new_cases'] = tmp['total_cases'] - prev_total_cases
            prev_total_cases = tmp['total_cases']

            tmp['new_deaths'] = tmp['total_deaths'] - prev_total_deaths
            prev_total_deaths = tmp['total_deaths']

            tmp['new_tests'] = tmp['total_tests_reported'] - prev_total_tests
            prev_total_tests = tmp['total_tests_reported']

            statuses.append(tmp)

    return statuses


def sync_with_db(statuses, mongo_uri):
    client = pymongo.MongoClient(mongo_uri)
    db = client.get_default_database()
    db.ontario_statuses.drop()
    db.ontario_statuses.insert_many(statuses)


if __name__ == '__main__':
    load_dotenv()
    mongo_uri = os.getenv('MONGO_URI', 'mongodb://localhost.com:27071')

    filename = download_data(DATA_URL)
    statuses = read_csv(filename)
    sync_with_db(statuses, mongo_uri)
