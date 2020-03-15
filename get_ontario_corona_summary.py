import os
import requests
import re
import json
from datetime import datetime
from bs4 import BeautifulSoup

SUMMARY_LABEL_MAP = {
    'Negative1': 'negative',
    'Currently under investigation2': 'pending',
    'Currently under investigation3': 'pending',
    'Confirmed positive3': 'positive',
    'Confirmed positive4': 'positive',
    'Confirmed positive5': 'positive',
    'Resolved4': 'resolved',
    'Resolved5': 'resolved',
}

NEW_CASES_COLUMNS = [
    'number',
    'age_and_gender',
    'public_health_unit',
    'hospital',
    'transmission',
    'status'
]


def get_city(public_health_unit):
    # http://www.health.gov.on.ca/en/common/system/services/phu/locations.aspx
    if 'Toronto' in public_health_unit:
        return 'Toronto'
    if 'Hamilton' in public_health_unit:
        return 'Hamilton'
    if 'Peel' in public_health_unit:
        return 'Peel'
    if 'Ottawa' in public_health_unit:
        return 'Ottawa'
    if 'Halton' in public_health_unit:
        return 'Halton'
    if 'Waterloo' in public_health_unit:
        return 'Waterloo'
    if 'Haliburton' in public_health_unit:
        return 'Haliburton'
    if 'Simcoe' in public_health_unit:
        return 'Simcoe'
    if 'York' in public_health_unit:
        return 'York'
    if 'London' in public_health_unit:
        return 'London'
    if 'Sudbury' in public_health_unit:
        return 'Sudbury'
    if 'Northwestern' in public_health_unit:
        return 'Kenora'
    if 'Eastern Ontario' in public_health_unit:
        return 'Cornwall'
    if 'Niagra' in public_health_unit:
        return 'Niagra'
    if 'Huron Perth' in public_health_unit:
        return 'Stratford'

    return public_health_unit


def get_date_from_html(html):
    date_regex = re.compile('Last updated: (.+) at (\d\d?):(\d\d) ([a|p].m.)')
    date_match = re.search(date_regex, html)
    date = date_match[1]
    hour = date_match[2]
    minute = date_match[3]
    is_pm = date_match[4] == 'p.m.'
    if is_pm and hour is not '12':
        hour = int(hour) + 12
    return datetime.strptime(date+str(hour)+':'+minute, '%B %d, %Y%H:%M')


def get_ontario_corona_html():
    request_url = 'https://www.ontario.ca/page/2019-novel-coronavirus'
    response = requests.get(request_url,
        headers={ # noqa
        'User-Agent': 'googlebot',
        }
    )

    return response.text


def save_latest_html():
    html = get_ontario_corona_html()
    date = get_date_from_html(html)
    with open('data/raw/{}.html'.format(date), 'w') as f:
        f.write(html)


def get_case_summary_from_html(html):
    soup = BeautifulSoup(html, features='html.parser')

    summary_soup = soup.find('table')
    summary_data = {}
    for row in summary_soup.find_all('tr'):
        items = [item.text for item in row.find_all('td')]
        try:
            label = SUMMARY_LABEL_MAP[items[0]]
        except:
            label = items[0]
            continue
        summary_data[label] = int(items[1])

    return summary_data


def get_cases_from_html(html):
    soup = BeautifulSoup(html, features='html.parser')

    try:
        table_soup = soup.find_all('table')
    except:
        return []

    new_cases = []
    for table in table_soup[1:]:
        for row in table.find_all('tr'):
            new_case = {}
            for index, item in enumerate(row.find_all('td')):
                label = NEW_CASES_COLUMNS[index]
                new_case[label] = item.text

            if len(new_case.keys()) > 0:
                new_case['city'] = get_city(new_case['public_health_unit'])
                new_cases.append(new_case)

    return new_cases


def get_all_cases():
    cases = []
    for filename in os.listdir('data/raw'):
        with open('data/raw/' + filename) as f:
            html = f.read()
            date = get_date_from_html(html)
            new_cases = get_cases_from_html(html)
            for case in new_cases:
                case.update({'date': date.isoformat()})
                cases.append(case)

    return cases


def get_all_updates():
    updates = []
    for filename in os.listdir('data/raw'):
        with open('data/raw/' + filename) as f:
            html = f.read()
            date = get_date_from_html(html)
            summary = get_case_summary_from_html(html)
            if len(summary.keys()) > 0:
                summary.update({'date': date.isoformat()})
                updates.append(summary)

    return updates


if __name__ == '__main__':
    save_latest_html()
    cases = get_all_cases()
    updates = get_all_updates()

    with open('data/processed/all_cases.json', 'w') as f:
        json.dump(cases, f, indent=2)

    with open('data/processed/all_updates.json', 'w') as f:
        json.dump(updates, f, indent=2)
