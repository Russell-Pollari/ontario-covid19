import os
import requests
import re
import json
from datetime import datetime
from bs4 import BeautifulSoup


HTML_DIR = 'data/raw/canada'


def get_date_from_html(html):
    try:
        date_regex = re.compile('as of (.+) (\d?\d), (\d\d\d\d), (\d?\d):(\d\d) ([p|a]m)') # noqa
        date_match = re.search(date_regex, html)
        month = date_match[1]
        day = date_match[2]
        year = date_match[3]
        hour = date_match[4]
        minute = date_match[5]
        is_pm = date_match[6] == 'pm'
        if is_pm and '12' not in hour:
            hour = int(hour) + 12
        return datetime.strptime(month + day + year + str(hour)+':'+minute, '%B%d%Y%H:%M') # noqa
    except:
        date_regex = re.compile('(A|a)s of (.+) (\d?\d), (\d\d\d\d)') # noqa
        date_match = re.search(date_regex, html)
        month = date_match[2]
        day = date_match[3]
        year = date_match[4]
        return datetime.strptime(month + day + year, '%B%d%Y') # noqa


def get_canada_html():
    request_url = 'https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html'  # noqa
    response = requests.get(request_url,
        headers={ # noqa
        'User-Agent': 'googlebot',
        }
    )

    return response.text


def save_latest_html():
    html = get_canada_html()
    date = get_date_from_html(html)
    print(date)
    with open('{}/{}.html'.format(HTML_DIR, date), 'w') as f:  # noqa
        f.write(html)


def get_updates_from_html(html):
    updates = []
    soup = BeautifulSoup(html, features='html.parser')
    date = get_date_from_html(html)

    try:
        table_soup = soup.find('table')
    except:
        return []

    rows = table_soup.find_all('tr')
    header = rows[0]
    confirmed_index = 1
    for index, item in enumerate(header.find_all('th')):
        if 'confirmed' in item.text:
            confirmed_index = index

    for row in rows[1:]:
        items = row.find_all('td')

        total_cases = items[confirmed_index].text

        update = {
            'date': date.isoformat(),
            'province': items[0].text,
            'total_cases': total_cases,
        }
        updates.append(update)
    return updates


def get_all_updates():
    updates = []
    for filename in os.listdir(HTML_DIR):
        with open(HTML_DIR + '/' + filename) as f:
            html = f.read()
            updates.extend(get_updates_from_html(html))

    return updates


if __name__ == '__main__':
    save_latest_html()
    updates = get_all_updates()

    with open('data/processed/province_updates.json', 'w') as f:
        json.dump(updates, f, indent=2)
