import os
import json
from datetime import datetime

from dotenv import load_dotenv
import pymongo


def sync_ontario_cases(db):
    print('Syncing ontario cases')
    cases = json.load(open('data/processed/all_cases.json'))

    for case in cases:
        case['patient'] = int(case['number'])
        case['reportedAt'] = datetime.strptime(case['date'], '%Y-%m-%dT%H:%M:%S') # noqa

        db.cases.update_one({
            'number': case['number'],
        }, {
            '$set': case,
        }, upsert=True)


def sync_ontario_updates(db):
    print('Syncing ontario updates')
    updates = json.load(open('data/processed/all_updates.json'))
    for update in updates:
        for key in update.keys():
            if 'date' not in key:
                value = update[key]
                try:
                    value = value.replace(',', '')
                except:
                    value = value

                update[key] = int(value)
        update['reportedAt'] = datetime.strptime(update['date'], '%Y-%m-%dT%H:%M:%S') # noqa

        db.updates.update_one({
            'date': update['date'],
        }, {
            '$set': update,
        }, upsert=True)


def sync_country_data(db):
    print('Syncing country data')
    db.countries.drop()
    updates = json.load(open('data/processed/all_countries_data.json'))
    for update in updates:
        for key in update.keys():
            if 'date' not in key and 'country' not in key:
                try:
                    update[key] = int(update[key])
                except:
                    update[key] = 0
        update['reportedAt'] = datetime.strptime(update['date'], '%Y-%m-%dT%H:%M:%S') # noqa

    db.countries.insert_many(updates)


def sync_province_updates(db):
    print('Syncing province updates')
    db.provinces.drop()
    updates = json.load(open('data/processed/province_updates.json'))
    for update in updates:
        for key in update.keys():
            if 'date' not in key and 'province' not in key:
                value = update[key]
                try:
                    value = value.replace(',', '')
                except:
                    value = value
                update[key] = int(value)
        update['reportedAt'] = datetime.strptime(update['date'], '%Y-%m-%dT%H:%M:%S') # noqa

    db.provinces.insert_many(updates)


def sync_with_db():
    load_dotenv()
    mongo_uri = os.getenv('MONGO_URI', None)
    client = pymongo.MongoClient(mongo_uri)
    db = client.get_default_database()

    sync_ontario_cases(db)
    sync_ontario_updates(db)
    sync_province_updates(db)
    sync_country_data(db)


if __name__ == '__main__':
    sync_with_db()
