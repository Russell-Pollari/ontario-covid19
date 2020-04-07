# Ontario Covid-19 tracker

## Data sources

See code in [GitHub repo](https://github.com/Russell-Pollari/ontario-covid19)

Visualizations of data [here](https://russell-pollari.github.io/ontario-covid19/) built with MongoDB and Metabase


### Ontario
Status updates pulled daily from here [https://data.ontario.ca/dataset/status-of-covid-19-cases-in-ontario](https://data.ontario.ca/dataset/status-of-covid-19-cases-in-ontario)

Case data pulled daily from here [https://data.ontario.ca/en/dataset/confirmed-positive-cases-of-covid-19-in-ontario](https://data.ontario.ca/en/dataset/confirmed-positive-cases-of-covid-19-in-ontario)

### Canada
Total cases for Canada and other provinces pulled daily from here:
[https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html](https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html)


### The world
CSV of world data from [Our World in Data](https://ourworldindata.org/coronavirus-source-data)


## Development

### Install requirements
`$ pip install -r requirements.text`

### Setup environment
Create a text file named `.env` and
add `MONGO_URI=<mongo_uri>`  
or  
`$ export MONGO_URI=<mongo_uri>`


### Sync Ontario's data with db
##### Sync status updates  
`$ python src/sync_ontario_statuses.py`  
stores updates in `ontario_statuses` collection

##### Sync case data  
`$ python src/sync_ontario_cases.py`  
stores updates in `ontario_cases` collection


### Download Canada data
Fetch csv of updates and store as json
```
$ python src/update_canada_data.py
```

### Download world data
Fetch csv from Our World in Data and store as json
```
$ python src/update_country_data.py
```

### Download PHU data
Scrape various Ontario PHUs and store as json and csv
```
$ python src/update_ontario_region_data.py
```

## Sync with db
Store various jso files in db  
`$ python src/sync_with_db.py`
