import os
import shutil
import wget
import csv
import json
from datetime import datetime

DATA_URL = 'https://health-infobase.canada.ca/src/data/covidLive/covid19.csv'
FILEPATH = 'data/raw/canada_data.csv'


def update_canada_data():
    file = wget.download(DATA_URL, FILEPATH)
    if os.path.exists(FILEPATH):
        shutil.move(file, FILEPATH)

    updates = []
    with open(FILEPATH) as f:
        reader = csv.reader(f)
        next(reader)  # skip header
        for row in reader:
            updates.append({
                'province': row[1],
                'date': datetime.strptime(row[3], '%d-%m-%Y').isoformat(), # noqa
                'new_cases': row[8],
                'total_cases': row[7],
                'total_deaths': row[6]
            })

    return updates


if __name__ == '__main__':
    updates = update_canada_data()

    with open('data/processed/canada_data.json', 'w') as f:
        json.dump(updates, f, indent=2)
