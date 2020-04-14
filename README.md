# Ontario Covid-19 tracker

[Dashboard built with Metabase](https://russell-pollari.github.io/ontario-covid19/)

## Data sources

### Ontario
Daily status updates [https://data.ontario.ca/dataset/status-of-covid-19-cases-in-ontario](https://data.ontario.ca/dataset/status-of-covid-19-cases-in-ontario)

Case-by-case data [https://data.ontario.ca/en/dataset/confirmed-positive-cases-of-covid-19-in-ontario](https://data.ontario.ca/en/dataset/confirmed-positive-cases-of-covid-19-in-ontario)

### Canada
Total cases for Canada and other provinces:
[https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html](https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html)

### The world
Compiled by [Our World in Data](https://ourworldindata.org/coronavirus-source-data)

#### The world
CSV of world data from [Our World in Data](https://ourworldindata.org/coronavirus-source-data)


## Development and usage

### Install requirements
`$ pip install -r requirements.text`

### Setup environment
Create a text file named `.env` and
add `MONGO_URI=<mongo_uri>`  
or  
`$ export MONGO_URI=<mongo_uri>`


#### Sync data
`python src/sync_all`
