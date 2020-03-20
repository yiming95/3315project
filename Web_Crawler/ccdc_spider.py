from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class WhoSpider(CrawlSpider):
    name = 'ccdc'
    allowed_domains = ['weekly.chinacdc.cn']
    start_urls = ['http://weekly.chinacdc.cn/en/article/id/4eeb7b51-a9fa-4732-9680-0747759b87d9']


    def parse_item(self, response):
        item = {}
        #item['domain_id'] = response.xpath('//input[@id="sid"]/@value').get()
        #item['name'] = response.xpath('//div[@id="name"]').get()
        #item['description'] = response.xpath('//div[@id="description"]').get()

        item['title'] = response.xpath('//h1[@id="panel"]/text()"]').get()
        item['url'] = response.url

        return item

      # // *[ @ id = "panel"] / section[1] / h2