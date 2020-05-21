import pymongo
from datetime import datetime

import os
from pprint import pprint


def log(message, collection, data_url, new_records=0, updated_records=0):
    mongo_uri = os.getenv('MONGO_URI', '')
    client = pymongo.MongoClient(mongo_uri)
    db = client.get_default_database()

    log = {
        'date': datetime.utcnow(),
        'message': message,
        'collection': collection,
        'data_url': data_url,
        'updated_records': updated_records,
        'new_records': new_records
    }

    db.logs.insert(log)

    pprint(log)
