# Ontario Covid-19 tracker

Scripts to fetch Covid-19 data for Ontario and Canada and store in a MongoDB database,
and source code for the website hosting the dashboard visualizing the data.

[See live demo](https://russell-pollari.github.io/ontario-covid19/)

Demo built with Next.js and hosted with GituHub pages. Plots created with Metabase.

## Syncing data

#### 1. Install requirements
`$ pip install -r requirements.text`

#### 2. Setup environment
Create a text file named `.env` and
add `MONGO_URI=<mongo_uri>`  

#### 3. Sync data
`$ python src/sync_all`  
Fetch data from all sources and sync in MongoDB


## Building static site
`$ npm install`

`$ npm run build`
Outputs static html files to `/docs` for GitHub pages

#### Running locally
`$ echo "NODE_ENV=development" >> .env`  

`$ npm run dev`
