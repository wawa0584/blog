(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{557:function(s,e,n){"use strict";n.r(e);var t=n(30),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("网络爬虫：是一种自动爬取网站内容信息的程序，被广泛运用于搜索引擎和数据挖掘等领域。\n网络爬虫的基本执行流程：下载页面 - 提取页面中的数据 - 提取页面中的链接\nScrapy：是一个由Python语言编写的开源的网络爬虫框架，特点：使用简单，跨平台，灵活易拓展等。")]),s._v(" "),n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("p",[s._v("本机环境 Mac 10.14, Python3\n"),n("code",[s._v("pip3 install scrapy")]),s._v("\n安装成功后 "),n("code",[s._v("scrapy -h")]),s._v(" 查看包含的命令")]),s._v(" "),n("p",[s._v("安装过程中出现了一堆"),n("code",[s._v("error: unknown type name 'uint64_t'")]),s._v(" 错误\n网上搜索 "),n("code",[s._v("sudo mv /usr/local/include /usr/local/include_old")]),s._v("\n重新执行安装命令，安装成功后再恢复即可")]),s._v(" "),n("blockquote",[n("p",[n("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-720c7aa0691241f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),s._v(" "),n("p",[s._v("创建一个项目\n"),n("code",[s._v("scrapy startproject tutorial")])]),s._v(" "),n("p",[s._v("会生成以下文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("tutorial/\n    scrapy.cfg            # deploy configuration file\n    tutorial/             # project's Python module, you'll import your code from here\n        __init__.py\n        items.py          # project items definition file\n        middlewares.py    # project middlewares file\n        pipelines.py      # project pipelines file\n        settings.py       # project settings file\n        spiders/          # a directory where you'll later put your spiders\n            __init__.py\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"编写第一个爬虫"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编写第一个爬虫"}},[s._v("#")]),s._v(" 编写第一个爬虫")]),s._v(" "),n("p",[s._v("其实就是写一个类\n创建文件 "),n("code",[s._v("quotes_spider.py")]),s._v(" 放到 "),n("code",[s._v("tutorial/spiders")]),s._v(" 目录")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import scrapy\n\nclass QuotesSpider(scrapy.Spider):\n   # 爬虫名，唯一标示，会在命令行中用到\n    name = \"quotes\"\n\n    def start_requests(self):\n        urls = [\n            'http://quotes.toscrape.com/page/1/',\n            'http://quotes.toscrape.com/page/2/',\n        ]\n        for url in urls:\n            yield scrapy.Request(url=url, callback=self.parse)\n\n    def parse(self, response):\n        page = response.url.split(\"/\")[-2]\n        filename = 'quotes-%s.html' % page\n        with open(filename, 'wb') as f:\n            f.write(response.body)\n        self.log('Saved file %s' % filename)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("来到项目的根目录，执行"),n("code",[s._v("scrapy crawl quotes")]),s._v("\n显示过程")]),s._v(" "),n("blockquote",[n("p",[n("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-5993574519d08165.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),s._v(" "),n("p",[s._v("结果：发现多出了两个 html 文件，等于我们把网页抓取下来了。")]),s._v(" "),n("p",[s._v("参考："),n("a",{attrs:{href:"https://docs.scrapy.org/en/1.6/intro/tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.scrapy.org/en/1.6/intro/tutorial.html"),n("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);