# Ontario covid-19 tracker

Scripts to scrape Covd-19 data from https://www.ontario.ca/page/2019-novel-coronavirus and store in mongodb database.

See Metabase dashboard with latest numbers here: https://ontario-covid-dash-metabaase.herokuapp.com/public/dashboard/79ada541-f780-4ced-96e4-fe2ba8429941?fbclid=IwAR1RV_iPUt0ftcjsRrzTq23PDKeQ3V6kjS2FQf00KAj8gBwXoOo_agXQMag

## Install requirements
```
# pip install -r requirements.text
```


## HTML to json
Will fetch latest version of Ontario's corona page ans store in `data/raw`
then scrape html documents in `data/raw` and ouput json files to
`data/processed`
```
$ python get_ontario_corona_html.py
```

## Sync json data with mongodb
```
$ export MONGO_URI=<mongo_uri>
$ python sync_with_db.py
```
