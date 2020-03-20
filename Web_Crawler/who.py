# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class WhoSpider(CrawlSpider):
    name = 'who'
    allowed_domains = ['who.int']
    start_urls = ['https://www.who.int/news-room/releases/']

    rules = (
        Rule(LinkExtractor(allow='news-room\/.*'), callback='parse_item', follow=True),
    )

    def parse_item(self, response):
        item = {}
        #item['domain_id'] = response.xpath('//input[@id="sid"]/@value').get()
        #item['name'] = response.xpath('//div[@id="name"]').get()
        #item['description'] = response.xpath('//div[@id="description"]').get()

        item['title'] = response.xpath('//div[@id="name"]').get()
        item['url'] = response.url

        return item
