import os
import shutil
import wget
import csv
import json
from datetime import datetime

DATA_URL = 'https://covid.ourworldindata.org/data/full_data.csv'
FILEPATH = 'data/raw/who_full_data.csv'


def update_WHO_country_data():
    file = wget.download(DATA_URL, FILEPATH)
    if os.path.exists(FILEPATH):
        shutil.move(file, FILEPATH)

    updates = []
    with open(FILEPATH) as f:
        reader = csv.reader(f)
        next(reader)  # skip header
        for row in reader:
            updates.append({
                'country': row[1],
                'date': datetime.strptime(row[0], '%Y-%m-%d').isoformat(), # noqa
                'new_cases': row[2],
                'new_deaths': row[3],
                'total_cases': row[4],
                'total_deaths': row[5]
            })

    return updates


if __name__ == '__main__':
    updates = update_WHO_country_data()

    with open('data/processed/WHO_country_data.json', 'w') as f:
        json.dump(updates, f, indent=2)
