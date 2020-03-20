import scrapy
from scrapy import Request

class whoSpider(scrapy.Spider):
    name = "who"

    start_urls = [
      #  'https://www.who.int/news-room/releases/1',
      #  'https://www.who.int/news-room/releases/2',
      #  'https://blog.scrapinghub.com/page/1',
      #  'https://www.news.gov.hk/eng/index.html'
      'https://www.nejm.org/'
    ]

    def parse(self, response):
        page = response.url.split('/')[-1]
        filename = 'hkNews-%s.html' % page
        with open(filename, 'wb') as f:
            f.write(response.body)


    def start_requests(self):
        headers= {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0'}
        for url in self.start_urls:
            yield Request(url, headers=headers)


