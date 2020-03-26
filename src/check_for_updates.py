import os
import time
import schedule

from update_canada_data import update_canada_data
from update_ontario_data import update_ontario_data
from sync_with_db import sync_with_db


def check_for_updates():
    ontario_updates = len(os.listdir('data/raw/ontario'))
    canada_updates = len(os.listdir('data/raw/canada'))

    update_ontario_data()
    update_canada_data()

    if len(os.listdir('data/raw/ontario')) > ontario_updates or len(os.listdir('data/raw/canada')) > canada_updates:
        sync_with_db()


if __name__ == '__main__':
    check_for_updates()
    schedule.every(5).minutes.do(check_for_updates)
    while True:
        schedule.run_pending()
        time.sleep(1)
