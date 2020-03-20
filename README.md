# Ontario Covid-19 tracker

Scripts to scrape Covid-19 data from https://www.ontario.ca/page/2019-novel-coronavirus and store in mongodb database.

See Metabase dashboard with latest numbers here: https://russell-pollari.github.io/ontario-covid19/

## Install requirements
```
$ pip install -r requirements.text
```

## Compile Ontario's data
Will fetch html from https://www.ontario.ca/page/2019-novel-coronavirus and store in `data/raw/ontario`
then scrape html documents in `data/raw/onatrio` and ouput json files to `data/processed/`
```
$ python src/update_ontario_data.py
```

## Download Canada data and save as json
Fetch https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html and store in `data/raw/canda`.
Scrape all html cosuments and saves in json format in `data/processed/province_updates.json`
```
$ python src/update_canada_data.py
```

## Download country data and save as json
Fetch csv of country data from Our world in Data and store as json in `data/processed/all_countries_data/json`
```
$ python src/update_country_data.py
```

## Sync json data with mongodb
Create a file named `.env` and
add `MONGO_URI=<mongo_uri>`  
or  
`$ export MONGO_URI=<mongo_uri>`

Store all json in mongodb database   
`$ python src/sync_with_db.py`
