import os
import requests
import re
import json
from datetime import datetime
from bs4 import BeautifulSoup


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
    'Resolved2': 'resolved',
    'Deceased': 'deceased',
    'Deceased3': 'deceased',
    'Number of cases1': 'total_cases',
    'Total Tested4': 'total_tests_reported',
    'Total number of patients approved for COVID-19 testing to date': 'total_tests_conducted',  # noqa
}


def get_date_from_html(html):
    try:
        date_regex = re.compile('Last updated: (.+) at (\d\d?):(\d\d) ([a|p].m.)') # noqa
        date_match = re.search(date_regex, html)
        date = date_match[1]
        hour = date_match[2]
        minute = date_match[3]
        is_pm = date_match[4] == 'p.m.'
        if is_pm and hour is not '12':
            hour = int(hour) + 12
        return datetime.strptime(date+str(hour)+':'+minute, '%B %d, %Y%H:%M')  # noqa
    except:
        time = '16:00'  # updated daily at 10:30am
        date_regex = re.compile('Summary of.* to (.+) (\d+), (\d{4})')
        date_match = re.search(date_regex, html)
        month = date_match[1]
        date = date_match[2]
        year = date_match[3]
        return datetime.strptime(month + date + year + time, '%B%d%Y%H:%M') # noqa


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

    summary_data = {}
    summary_data['deceased'] = 0

    rows = soup.find('table').find_all('tr')
    for row in rows:
        items = [item.text for item in row.find_all('td')]
        if len(items) == 0:
            continue

        try:
            label = SUMMARY_LABEL_MAP[items[0]]
        except:
            continue

        try:
            summary_data[label] = int(items[1].replace(',', '').replace('*', '')) # noqa
        except:
            continue

    if 'total_tests_reported' not in summary_data.keys():
        summary_data['total_tests_reported'] = summary_data['positive'] + summary_data['negative'] # noqa
    if 'total_cases' not in summary_data.keys():
        summary_data['total_cases'] = summary_data['positive'] + summary_data['resolved'] + summary_data['deceased'] # noqa
    return summary_data


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


def update_ontario_data():
    save_latest_html()
    updates = get_all_updates()

    with open('data/processed/all_updates.json', 'w') as f:
        json.dump(updates, f, indent=2)


if __name__ == '__main__':
    update_ontario_data()
