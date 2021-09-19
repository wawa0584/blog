(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{647:function(t,e,n){"use strict";n.r(e);var r=n(30),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Jenkins的所有数据文件都存在文件中，Jenkins备份就是备份JENKINS_HOME目录。默认路径是"),n("code",[t._v("/var/lib/jenkins")]),t._v("，或者到Jenkins的配置文件中查看"),n("code",[t._v('cat /etc/default/jenkins | grep "home"')]),t._v("。")]),t._v(" "),n("p",[t._v("JENKINS_HOME目录 结构如下：")]),t._v(" "),n("blockquote",[n("p",[n("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-445eaff1e931e26a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),t._v(" "),n("blockquote",[n("p",[t._v("其中 workspace, builds 和 fingerprints目录是不需要备份的")])]),t._v(" "),n("p",[t._v("定期备份是个好习惯，备份功能通过安装插件实现。")]),t._v(" "),n("h5",{attrs:{id:"thin-backup-备份插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#thin-backup-备份插件"}},[t._v("#")]),t._v(" thin-backup 备份插件")]),t._v(" "),n("p",[t._v("比较流行的插件有 "),n("a",{attrs:{href:"https://github.com/jenkinsci/periodicbackup-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("periodicbacku"),n("OutboundLink")],1),t._v(" 和 "),n("a",{attrs:{href:"https://github.com/jenkinsci/thin-backup-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("thin-backup"),n("OutboundLink")],1),t._v(" ，发现无论是Github中更新时间还是star数量 thin-backup都更好些，所以选择了 thin-backup")]),t._v(" "),n("p",[t._v("thin-backup 安装好后，管理页面会多出一个菜单项，进入后是 thin-backup 设置页面，\n非常简答，立即备份，恢复和配置")]),t._v(" "),n("blockquote",[n("p",[n("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-b704a1e3ac8f043b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),t._v(" "),n("p",[t._v("配置页面中可以设置备份路径，备份周期，最大备份数量等等")]),t._v(" "),n("blockquote",[n("p",[n("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-49ac95452fb906ff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),t._v(" "),n("p",[t._v("备份周期的填写要符合Jenkins trigger cron语法，我填写的是 "),n("code",[t._v("H 23 * * 6")]),t._v(" 即每周6的23点任意分钟执行")]),t._v(" "),n("h4",{attrs:{id:"关于-jenkins-trigger-cron"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于-jenkins-trigger-cron"}},[t._v("#")]),t._v(" 关于 Jenkins trigger cron")]),t._v(" "),n("p",[t._v("类似"),n("a",{attrs:{href:"%5Bhttps://en.wikipedia.org/wiki/Cron%5D(https://en.wikipedia.org/wiki/Cron)"}},[t._v("UNIX cron")]),t._v("语法，一段 cron 包含5个字段。使用空格或tab分隔")]),t._v(" "),n("p",[t._v("格式为：\n分钟：0~59\n小时：0~23\n一月某一天：1~31\n月份：1~12\n星期几：0~7\n还可以使用以下字符，一次性指定多个值\n*：匹配所有值\nM-N：匹配M到N之间的值\nM-N/X：指定M到N范围内，以X值为步长\nA,B,C：逗号分隔枚举多个值")]),t._v(" "),n("p",[t._v("有时候存在大量同一时刻执行的定时任务，比如N个半夜零点(0 0 * * *)执行的任务，这样会产生负载不均衡，Jenkins提供了H字符来解决这一问题，H表示hash，(0 0 * * *)表示零点0分至0点59分之间任何一个时间点")]),t._v(" "),n("p",[t._v("Jenkins trigger cron 提供了更便捷的写法 @yearly， @monthly，@weekly， @daily，@hourly")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("缩写")]),t._v(" "),n("th",[t._v("等价写法")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("@daily 或 @midnight")]),t._v(" "),n("td",[t._v("0 0 * * *")]),t._v(" "),n("td",[t._v("每天午夜0点执行")])]),t._v(" "),n("tr",[n("td",[t._v("@hourly")]),t._v(" "),n("td",[t._v("0 * * * *")]),t._v(" "),n("td",[t._v("每个整点0分执行")])]),t._v(" "),n("tr",[n("td",[t._v("@monthly")]),t._v(" "),n("td",[t._v("0 0 1 * *")]),t._v(" "),n("td",[t._v("每月1号的午夜执行")])]),t._v(" "),n("tr",[n("td",[t._v("@weekly")]),t._v(" "),n("td",[t._v("0 0 * * 0")]),t._v(" "),n("td",[t._v("每周日午夜执行")])]),t._v(" "),n("tr",[n("td",[t._v("@yearly 或 @annually")]),t._v(" "),n("td",[t._v("0 0 1 1 *")]),t._v(" "),n("td",[t._v("每年1月1日的午夜执行")])])])]),t._v(" "),n("h4",{attrs:{id:"进阶"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进阶"}},[t._v("#")]),t._v(" 进阶")]),t._v(" "),n("p",[t._v("无意看到一篇"),n("a",{attrs:{href:"%5Bhttps://www.coveros.com/auto-commit-jenkins-configuration-changes-with-git/%5D(https://www.coveros.com/auto-commit-jenkins-configuration-changes-with-git/)"}},[t._v("文章")]),t._v("，把 JENKINS_HOME 放到Git版本控制中管理，这样省去了频繁备份的烦恼。")]),t._v(" "),n("h4",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cron",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://en.wikipedia.org/wiki/Cron"),n("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);