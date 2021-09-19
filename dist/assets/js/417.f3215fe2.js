(window.webpackJsonp=window.webpackJsonp||[]).push([[417],{855:function(e,s,a){"use strict";a.r(s);var n=a(30),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("版本\nprometheus-2.11.1\nnode_exporter-0.18.1")]),e._v(" "),a("h4",{attrs:{id:"安装略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装略"}},[e._v("#")]),e._v(" 安装略")]),e._v(" "),a("p",[e._v("不用安装，因为下载的是二进制包，直接启动 Prometheus 和 node_exporter")]),e._v(" "),a("p",[e._v("修改配置文件")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Prometheus server's global configuration\nglobal:\n  scrape_interval:     15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.\n  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.\n  # scrape_timeout is set to the global default (10s).\n\n# Alertmanager configuration\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      # - alertmanager:9093\n\n# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.\nrule_files:\n  # - \"first_rules.yml\"\n  # - \"second_rules.yml\"\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n\n    static_configs:\n    - targets: ['localhost:9090']\n\n  - job_name: 'node'\n    static_configs:\n    - targets: ['localhost:9100']\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br")])]),a("p",[e._v("先来到监控界面\n"),a("a",{attrs:{href:"http://localhost:9090/targets",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:9090/targets"),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-33b36eea65b6db4a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}}),e._v("\n这里只是抓取本机的数据")])]),e._v(" "),a("p",[e._v("还可以查看当前配置")]),e._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-726ea269bdcf9639.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),a("p",[e._v("<relabel_config> 配置是通过修改 label 来控制某些 target 不被抓取")]),e._v(" "),a("p",[e._v("<metric_relabel_configs> 配置是通过修改 label 来控制某些时间序列不被抓取")]),e._v(" "),a("p",[e._v("<relabel_config> 配置是通过修改 label 来控制某些 alert 不被发送给Alertmanager")]),e._v(" "),a("p",[e._v("<relabel_config> 配置是通过修改 label 来控制某些时间序列不被写入远端\nrelabel行为中，drop and keep行为(特殊)类似与过滤器，如果label不匹配，相应数据会被丢弃；而其它的relabel行为，会继续处理数据(不论匹配与否)")])])}),[],!1,null,null,null);s.default=t.exports}}]);