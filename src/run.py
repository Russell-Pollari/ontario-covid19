import schedule

import time

from sync_canada_statuses import sync_canada_statuses


def sync_all():
    sync_canada_statuses()

    schedule.every().hour.do(sync_canada_statuses)
