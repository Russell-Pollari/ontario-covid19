# Ontario Covid-19 tracker

Scripts to scrape Covid-19 data from https://www.ontario.ca/page/2019-novel-coronavirus and store in mongodb database.

See Metabase dashboard with latest numbers here: https://ontario-covid-dash-metabaase.herokuapp.com/public/dashboard/79ada541-f780-4ced-96e4-fe2ba8429941

## Install requirements
```
$ pip install -r requirements.text
```

## Compile Ontario's data
Will fetch html from https://www.ontario.ca/page/2019-novel-coronavirus and store in `data/raw`
then scrape html documents in `data/raw` and ouput json files to `data/processed`
```
$ python src/update_ontario_data.py
```

## Download WHO country data and save as json
```
$ python src/update_who_data.py
```

## Sync json data with mongodb
```
$ export MONGO_URI=<mongo_uri>
$ python src/sync_with_db.py
```
