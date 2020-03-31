import os
import time
import schedule

from update_canada_data import update_canada_data
from update_ontario_data import update_ontario_data
from update_country_data import update_country_data
from update_ontario_region_data import update_ontario_region_data
from sync_with_db import sync_with_db


def check_for_updates():
    ontario_updates = len(os.listdir('data/raw/ontario'))

    update_ontario_data()

    if len(os.listdir('data/raw/ontario')) > ontario_updates:
        update_canada_data()
        update_country_data()
        update_ontario_region_data()
        sync_with_db()


if __name__ == '__main__':
    check_for_updates()
    schedule.every(5).minutes.do(check_for_updates)
    while True:
        schedule.run_pending()
        time.sleep(1)
