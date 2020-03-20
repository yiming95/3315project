import scrapy
from bs4 import BeautifulSoup 
from newsCrawler.items import NewscrawlerItem

#!  中国疾控中心网站ccdc 爬虫部分核心代码

#Todo: 从主网页作为起始URL,然后对每个超链接里的下一层的网页进行爬取


class cdcSpider(scrapy.Spider):
    # * 爬虫名字为: ccdc
    name = "ccdc"

    start_urls = [
        #中国疾控中心一篇英文报道的网址URL作为爬虫的起始URL
         'http://weekly.chinacdc.cn/en/article/id/4eeb7b51-a9fa-4732-9680-0747759b87d9'
    ]

    # * 从爬取到的网页数据中提取数据
    def parse(self, response):
       
        response = BeautifulSoup(response.body)

        newscrawlerItem = NewscrawlerItem()
        
        # * 正文内容在article-abstract class
        newscrawlerItem['content'] = response.select('.article-abstract')[0].text

        #! 提取新闻中的Abstract内容, 该内容在网页 article-abstract class下
        # print(response.select('.article-abstract')[0].text)
        return newscrawlerItem