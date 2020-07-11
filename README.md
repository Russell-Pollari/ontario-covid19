# Ontario Covid-19 tracker

Scripts to fetch Covid-19 data for Ontario and store in MongoDB database,
and source code for the website hosting the dashboard visualizing the data.

[See live demo](https://russell-pollari.github.io/ontario-covid19/)

Demo built with Next.js and hosted with GituHub pages. Plots created with Metabase.

## Development and usage

#### 1. Install requirements
`$ pip install -r requirements.text`

#### 2. Setup environment
Create a text file named `.env` and
add `MONGO_URI=<mongo_uri>`  

#### 3. Sync data
`$ python src/sync_all`


## Bulding static site
`$ npm install`

`$ npm run build`
