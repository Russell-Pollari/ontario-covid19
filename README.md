# Ontario Covid-19 tracker

Scripts to scrape Covid-19 data from Onntario and Canadian Government websites

https://www.ontario.ca/page/2019-novel-coronavirus and store in MongoDB database.

Dashboard to view data and plots: https://russell-pollari.github.io/ontario-covid19/

## Install requirements
`$ pip install -r requirements.text`

## Compile Ontario's data
`$ python src/update_ontario_data.py`  
Saves html from [Ontario Ministry of Health](https://www.ontario.ca/page/2019-novel-coronavirus) in `data/raw/ontario`
Then compile json from all html documents in `data/raw/ontario` and saves in
`data/processed/all_updates`



## Download Canada data and save as json
Fetch csv of updates by rovince and `data/processed/canada_data.json`
```
$ python src/update_canada_data.py
```

## Download country data and save as json
Fetch csv of country data from Our World in Data and store as json in `data/processed/all_countries_data.json`
```
$ python src/update_country_data.py
```

## Sync json data with MongoDB database
Create a file named `.env` and
add `MONGO_URI=<mongo_uri>`  
or  
`$ export MONGO_URI=<mongo_uri>`

Store all json in mongodb database   
`$ python src/sync_with_db.py`
