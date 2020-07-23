from dotenv import load_dotenv

import json
import argparse
import os
import csv
import tempfile
import time
from datetime import datetime

from utils import string_to_int, download_data


DATA_URL = 'https://data.ontario.ca/dataset/f4f86e54-872d-43f8-8a86-3892fd3cb5e6/resource/ed270bb8-340b-41f9-a7c6-e8ef587e6d11/download/covidtesting.csv' # noqa


def get_field_name_from_column_name(column_name):
    if 'Resolved' in column_name:
        return 'total_resolved'
    if 'Under Investigation' in column_name:
        return 'total_pending_tests'
    if 'Deaths' == column_name:
        return 'total_deaths'
    if 'LTC Resident Deaths' in column_name:
        return 'total_LTC_resident_deaths'
    if 'LTC HCW Deaths' in column_name:
        return 'total_LTC_HCW_deaths'
    if 'LTC Resident Cases' in column_name:
        return 'total_LTC_resident_cases'
    if 'LTC HCW Cases' in column_name:
        return 'total_LTC_HCW_cases'
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


def read_csv(filename):
    statuses = []
    with open(filename) as csv_file:
        reader = csv.reader(csv_file)
        column_names = next(reader)

        prev_total_cases = 0
        prev_total_deaths = 0
        prev_total_tests = 0
        for row in reader:
            try:
                date = datetime.strptime(row[0], '%Y-%m-%d')
                tmp = {
                    'reported_date': date.isoformat(),
                }
            except: # noqa
                continue

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

            tmp['active_cases'] = tmp['total_cases'] - tmp['total_deaths'] - tmp['total_resolved']
            tmp['active_not_hospitalized'] = tmp['active_cases'] - tmp['num_hospitalized']

            statuses.append(tmp)

    return statuses



def sync_ontario_statuses():
    with tempfile.TemporaryDirectory() as tmp_dir:
        temp_file = '{}/ontario_statuses.csv'.format(tmp_dir)
        filename = download_data(DATA_URL, temp_file)
        statuses = read_csv(filename)

        with open('public/ontario_statuses.json', 'w') as f:
            json.dump(statuses, f, indent=2)

    # return sync_with_db(statuses)
    return True


if __name__ == '__main__':
    load_dotenv()

    parser = argparse.ArgumentParser()
    parser.add_argument('--check-until-update', action='count', default=0)
    args = parser.parse_args()

    if args.check_until_update:
        did_update = False
        while not did_update:
            did_update = sync_ontario_statuses()
            time.sleep(120)
    else:
        sync_ontario_statuses()
