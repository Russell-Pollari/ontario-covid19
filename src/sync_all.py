from dotenv import load_dotenv

from sync_canada_statuses import sync_canada_statuses
from sync_ontario_cases import sync_ontario_cases
from sync_ontario_statuses import sync_ontario_statuses
from sync_world_statuses import sync_world_statuses


def sync_all():
    sync_ontario_statuses()
    sync_ontario_cases()
    sync_world_statuses()
    sync_canada_statuses()


if __name__ == '__main__':
    load_dotenv()
    sync_all()
