import os
import requests
import re
import json
import csv
from datetime import datetime
from bs4 import BeautifulSoup

from get_city_from_public_health_unit import get_city_from_public_health_unit

HTML_DIR = 'data/raw/ontario'

SUMMARY_LABEL_MAP = {
    'Negative1': 'negative',
    'Currently under investigation2': 'pending',
    'Currently under investigation3': 'pending',
    'Confirmed positive3': 'positive',
    'Confirmed positive4': 'positive',
    'Confirmed positive5': 'positive',
    'Resolved4': 'resolved',
    'Resolved5': 'resolved',
    'Deceased': 'deceased',
}

NEW_CASES_LABEL_MAP = {
    'Case number': 'number',
    'Patient(age and gender)': 'age_and_gender',
    'Public Health Unit': 'public_health_unit',
    'Hospital(if applicable)': 'hospital',
    'Transmission(community,travel or close contact)': 'transmission',
    'Transmission(community,travel or home)': 'transmission',
    'Status': 'status',
    'Status(self-isolating or hospitalized)': 'status'
}


def add_age_and_gender(case):
    if '< 18' in case['age_and_gender'] or '<18' in case['age_and_gender']:
        case['age'] = 10
        case['gender'] = case['age_and_gender'].split(' ')[-1]
        return case

    if 'pending' in case['age_and_gender'] or case['age_and_gender'] == '':
        case['age'] = 'pending'
        case['gender'] = 'pending'
        return case

    age_and_gender = case['age_and_gender'].split(' ')
    try:
        age = int(age_and_gender[0].replace('s', ''))
        case['age'] = age - (age % 10)
    except:
        case['age'] = 'pending'
    case['gender'] = age_and_gender[1]

    return case


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
    print('Fetching latest Ontario data')
    html = get_ontario_corona_html()
    date = get_date_from_html(html)
    with open('{}/{}.html'.format(HTML_DIR, date), 'w') as f:
        f.write(html)


def get_case_summary_from_html(html):
    soup = BeautifulSoup(html, features='html.parser')

    summary_soup = soup.find('table')
    summary_data = {}
    summary_data['deceased'] = 0
    for row in summary_soup.find_all('tr'):
        items = [item.text for item in row.find_all('td')]
        try:
            label = SUMMARY_LABEL_MAP[items[0]]
        except:
            label = items[0]

        summary_data[label] = int(items[1].replace(',', '').replace('*', ''))

    return summary_data


def get_cases_from_html(html):
    soup = BeautifulSoup(html, features='html.parser')

    try:
        table_soup = soup.find_all('table')
    except:
        return []

    new_cases = []

    for table in table_soup[1:]:
        columns = [NEW_CASES_LABEL_MAP[item.text.replace('\n', '').replace('\t', '').replace('\xa0','')] for item in table.find_all('th')]  # noqa
        for row in table.find_all('tr'):
            new_case = {}
            for index, item in enumerate(row.find_all('td')):
                label = columns[index]
                new_case[label] = item.text.strip()

            if len(new_case.keys()) > 0:
                new_case['city'] = get_city_from_public_health_unit(new_case['public_health_unit']) # noqa
                new_case = add_age_and_gender(new_case)
                new_cases.append(new_case)

    return new_cases


def get_all_cases():
    cases = []
    for filename in os.listdir(HTML_DIR):
        with open(HTML_DIR + '/' + filename) as f:
            html = f.read()
            date = get_date_from_html(html)
            new_cases = get_cases_from_html(html)
            for case in new_cases:
                case.update({'date': date.isoformat()})
                cases.append(case)

    return cases


def get_all_updates():
    updates = []
    for filename in os.listdir(HTML_DIR):
        with open(HTML_DIR + '/' + filename) as f:
            html = f.read()
            date = get_date_from_html(html)
            summary = get_case_summary_from_html(html)
            if len(summary.keys()) > 0:
                summary.update({'date': date.isoformat()})
                updates.append(summary)

    return updates


def get_legacy_cases():
    cases = []
    with open('data/raw/first_31_cases.csv', 'r') as f:
        reader = csv.reader(f)
        for number, row in enumerate(reader):
            if number > 0:
                case = {}
                case['number'] = str(number)
                case['age_and_gender'] = row[3] + ' ' + row[4]
                case['public_health_unit'] = row[6]
                case['status'] = row[9].strip()
                case['city'] = get_city_from_public_health_unit(row[6])
                case = add_age_and_gender(case)
                try:
                    case['date'] = datetime.strptime('2020'+row[10], '%Y%b %d').isoformat() # noqa
                except:
                    case['date'] = datetime.strptime('2020'+row[10], '%Y%B %d').isoformat() # noqa

                cases.append(case)
    return cases


def update_ontario_data():
    save_latest_html()
    cases = get_legacy_cases()
    cases.extend(get_all_cases())
    updates = get_all_updates()

    with open('data/processed/all_cases.json', 'w') as f:
        json.dump(cases, f, indent=2)

    with open('data/processed/all_updates.json', 'w') as f:
        json.dump(updates, f, indent=2)


if __name__ == '__main__':
    update_ontario_data()
