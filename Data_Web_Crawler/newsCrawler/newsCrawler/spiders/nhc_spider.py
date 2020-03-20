from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class WhoSpider(CrawlSpider):
    name = 'nhc'
    allowed_domains = ['nhc.gov.cn']
    start_urls = ['http://www.nhc.gov.cn/wjw/xwdt/202003/fdd1952f999e46469a3cd93160b0d83b.shtml']


    def parse_item(self, response):
        item = {}
        #item['domain_id'] = response.xpath('//input[@id="sid"]/@value').get()
        #item['name'] = response.xpath('m//div[@id="name"]').get()
        #item['description'] = response.xpath('//div[@id="description"]').get()

        item['title'] = response.xpath('/html/body/div[2]/div[2]/div[2]').get()
        item['url'] = response.url
        item['text'] = response.xpath('/html/body/div[2]/div[2]/div[4]/p').get()

        return item