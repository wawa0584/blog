(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{712:function(t,s,n){"use strict";n.r(s);var a=n(30),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Github推出了自己的CI服务，叫"),n("a",{attrs:{href:"https://docs.github.com/en/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Actions"),n("OutboundLink")],1),t._v("\n对于个人或小的，部署需求也非常简单的项目，非常推荐使用Github Actions。")]),t._v(" "),n("h2",{attrs:{id:"比起jenkins的优势"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#比起jenkins的优势"}},[t._v("#")]),t._v(" 比起Jenkins的优势：")]),t._v(" "),n("ol",[n("li",[t._v("比起自己搞服务器，安装部署Jenkins省事多了")]),t._v(" "),n("li",[t._v("免费提供了每月2000分钟构建时长，和2核7G内存硬件配额，算是非常大方了。")]),t._v(" "),n("li",[t._v("Actions workflow 语法简单，如果你懂Jenkins pipeline几分钟就可以转移过去。")])]),t._v(" "),n("p",[t._v("关于Jenkins pipeline和Action的语法区别。官方文档有"),n("a",{attrs:{href:"https://docs.github.com/cn/actions/learn-github-actions/migrating-from-jenkins-to-github-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("表格"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("Github Action 使用非常简单，我专门录制了[视频-Github Action 实现SSH登录部署和Slack通知]https://www.bilibili.com/video/BV1wt4y1X7sY")]),t._v(" "),n("p",[t._v("这里贴下我正在使用的workflow脚本。\n流程非常简单 本地提交代码 -> SSH登录到远程服务器 -> 执行构建命令 -> 执行成功发送Slack通知")]),t._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is a basic workflow to help you get started with Actions")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CI\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Controls when the action will run. Triggers the workflow on push or pull request")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# events but only for the master branch")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull_request")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A workflow run is made up of one or more jobs that can run sequentially or in parallel")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# This workflow contains a single job called "build"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The type of runner that the job will run on")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Steps represent a sequence of tasks that will be executed as part of the job")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Runs a single command using the runners shell")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Run a one"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("line script\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" echo Hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" world"),n("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Runs a set of commands using the runners shell")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SSH Remote Commands\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" appleboy/ssh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@v0.1.2\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.HOST "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.USERNAME "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.PRIVATE_KEY "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.PORT "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cd /var/www/vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("press "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" git pull "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" npm i "),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" npm run build\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Slack Notification")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Slack Notification\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 8398a7/action"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("slack@v3\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("status")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" job.status "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fields")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" repo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("commit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("author"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("action"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("eventName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ref"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("workflow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("job"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("took "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# selectable (default: repo,message)")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_TOKEN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITHUB_TOKEN "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# optional")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SLACK_WEBHOOK_URL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.SLACK_WEBHOOK_URL "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# required")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always() "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pick up events even if the job fails or is canceled.")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br")])]),n("p",[t._v("更多信息见官方文档，这是个好习惯")]),t._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("p",[t._v("https://docs.github.com/en/actions/learn-github-actions")])])}),[],!1,null,null,null);s.default=e.exports}}]);