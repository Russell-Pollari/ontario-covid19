from bs4 import BeautifulSoup as bs
import requests
import json


def get_latest_news():
    # website to get latest news
    newsroom_ontario = 'https://news.ontario.ca/archive/en'
    urls = [newsroom_ontario]
    # Format used in website
    formats = ['html.parser']
    # Tags used for heading
    tags = ['h3']

    news_dict = []
    for url in urls:
        response = requests.get(url)
        soup = bs(response.content, formats[0])

        for link in soup.find_all(tags[0]):
            if(len(link.text.split(" ")) > 3):
                news_dict.append({'url': url, 'headline': link.text})

    news_dict.pop()
    return news_dict


if __name__ == '__main__':
    news = get_latest_news()
    with open('data/processed/latest_news.json', 'w') as json_file:
        json_file.write(json.dumps(json.loads(news), indent=2))
