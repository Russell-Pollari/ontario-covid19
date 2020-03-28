import os
import json
import csv
from datetime import datetime
import subprocess


HTML_DIR = 'data/raw/ontario-health-regions'
OUT_DIR = 'data/processed'


def save_latest():
    bashCommand = "bash " + HTML_DIR + '/scrape.sh'
    process = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)
    output, error = process.communicate()

    # datetime object containing current date and time
    now = datetime.now()
    date = now.strftime("%Y-%m-%d_%H:%M:%S")

    with open('{}/health-regions_{}.txt'.format(HTML_DIR, date), 'w') as f:
        f.write(output.decode("utf8"))


def get_date_from_filename(filename):
    return datetime.strptime(filename, "health-regions_%Y-%m-%d_%H:%M:%S.txt")


def get_cases_from_data(data):
    return [d.strip().split() for d in data]


def get_all_cases(HTML_DIR):
    cases = []
    for filename in os.listdir(HTML_DIR):
        if not filename.endswith("txt"):
            continue
        with open(HTML_DIR + '/' + filename) as f:
            data = f.readlines()
            date = get_date_from_filename(filename)
            cum_cases = get_cases_from_data(data)
            cases.append([date, cum_cases])

    return cases


def save_to_json(data, filename):
    json_cases = []
    for d in data:
        date = d[0]
        for row in d[1]:
            tmp = {
                'date': date.isoformat(),
                'ontario_health_region': row[0],
            }
            if len(row) > 1:
                tmp['total_cases'] = row[1]
            else:
                tmp['total_cases'] = 'NA'
            json_cases.append(tmp)
    with open(filename, 'w') as f:
        json.dump(json_cases, f, indent=2)


def save_to_csv(data, filename):
    with open(filename, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter='\t')
        writer.writerow(["Date", "Health_Region", "Cases"])
        for d in data:
            date = d[0]
            str_date = date.strftime("%Y-%m-%d %H:%M:%S")
            for row in d[1]:
                writer.writerow([str_date] + row)


def update_ontario_data():
    save_latest()
    all_data = get_all_cases(HTML_DIR)
    save_to_csv(all_data, OUT_DIR + "/ontario_regions.csv")
    save_to_json(all_data, OUT_DIR + "/ontario_regions.json")


if __name__ == '__main__':
    update_ontario_data()
