import os
import json
from datetime import datetime

from dotenv import load_dotenv
import pymongo


def sync_health_region_updates(db):
    print('Syncing health region updates')
    db.ontario_health_regions.drop()
    updates = json.load(open('data/processed/ontario_regions.json'))
    for update in updates:
        total_cases = update['total_cases']
        try:
            value = int(total_cases.replace(',', ''))
        except: # noqa
            value = None

        update['total_cases'] = value
        update['reportedAt'] = datetime.strptime(update['date'], '%Y-%m-%dT%H:%M:%S') # noqa

    db.ontario_health_regions.insert_many(updates)


def sync_with_db():
    load_dotenv()
    mongo_uri = os.getenv('MONGO_URI', None)
    client = pymongo.MongoClient(mongo_uri)
    db = client.get_default_database()

    sync_health_region_updates(db)


if __name__ == '__main__':
    sync_with_db()
