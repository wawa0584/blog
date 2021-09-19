(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{604:function(e,t,s){"use strict";s.r(t);var a=s(30),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Docker 为 Client/Server 架构。")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("服务端为 docker daemon (daemon是守护进程的意思，进程名叫dockerd)。\ndocker daemon 支持三种方式的连接(unix，tcp 和 fd)。默认只使用第一种，监听"),s("code",[e._v("/var/run/docker.sock")]),e._v(" unix套接字文件。")])]),e._v(" "),s("li",[s("p",[e._v("客户端为docker.service。\n一般情况下客户端和服务端运行在同一主机上，但有时候我们需要连接远程某服务器的Docker，其实和mysql有点类似。比如mysql的守护进程叫mysqld。监听3306端口，跑在一台服务器上，我们本地客户端通过IP及3306端口连接mysqld服务端，就可以操作他了。\n类似的，这就需要docker daemon开放tcp，要做如下设置。")])])]),e._v(" "),s("blockquote",[s("p",[e._v("注意，这样会不安全，如果你的docker daemon运行在公网上面，一旦开了监听端口，任何人都可以远程连接到docker daemon服务器进行操作）")])]),e._v(" "),s("p",[e._v("配置远程访问Docker官方文档有详细教程 "),s("a",{attrs:{href:"https://docs.docker.com/install/linux/linux-postinstall/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/install/linux/linux-postinstall/"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("有两种方法一种是修改系统的 systemd 另一种是修改 Docker 的 daemon.json\n两种方式选择一种即可，都修改会有冲突，官方建议使用第二种方式。")]),e._v(" "),s("h4",{attrs:{id:"修改-systemd-unit-文件允许远程访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改-systemd-unit-文件允许远程访问"}},[e._v("#")]),e._v(" 修改 systemd unit 文件允许远程访问")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("sudo systemctl edit docker.service")]),e._v(" 打开文件")]),e._v(" "),s("li",[e._v("添加或修改下面的")])]),e._v(" "),s("div",{staticClass:"language-ini line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[e._v("Service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("/usr/bin/dockerd -H fd:// -H tcp://127.0.0.1:2375")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("保存，重启Docker "),s("code",[e._v("sudo systemctl daemon-reload")]),e._v(" "),s("code",[e._v("sudo systemctl restart docker.service")])]),e._v(" "),s("li",[e._v("检查 "),s("code",[e._v("sudo netstat -lntp | grep dockerd")]),e._v(" 会发现 Dockerd正在监听 2375 端口")])]),e._v(" "),s("h4",{attrs:{id:"修改-daemon-json-允许远程访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改-daemon-json-允许远程访问"}},[e._v("#")]),e._v(" 修改 daemon.json 允许远程访问")]),e._v(" "),s("ol",[s("li",[e._v("打开Docker守护端的配置文件 "),s("code",[e._v("sudo vi /etc/docker/daemon.json")]),e._v("，检查host配置")]),e._v(" "),s("li",[e._v("讲host部分内容修改如下")])]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hosts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"unix:///var/run/docker.sock"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tcp://127.0.0.1:2375"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("同上，重启，然后检查端口")])]),e._v(" "),s("blockquote",[s("p",[e._v("在 daemon.json 中设置 hosts 并不支持Windows和Mac Docker 桌面版")])]),e._v(" "),s("p",[e._v("关于daemon.json 的具体配置，见"),s("a",{attrs:{href:"%5Bhttps://docs.docker.com/engine/reference/commandline/dockerd/%5D(https://docs.docker.com/engine/reference/commandline/dockerd/)"}},[e._v("官方文档")])]),e._v(" "),s("p",[e._v("在任何装了docker客户端的机器上，测试 "),s("code",[e._v("docker -H tcp://192.168.3.201:2375 ps")])]),e._v(" "),s("p",[e._v("192.168.3.201 是刚才运行docker daemon的机器，如果连不上，检查防火墙是否开放了2375端口")]),e._v(" "),s("h4",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[e._v("#")]),e._v(" 注意")]),e._v(" "),s("p",[e._v("如果你修改了"),s("code",[e._v("daemon.json")]),e._v("，手动重启dockerd进程时也带了参数，比如"),s("code",[e._v("dockerd --debug \\ --host tcp://192.168.59.3:2376")]),e._v(" 可能会报错，即配置冲突，这时就需要用上面提到的方法，即创建"),s("code",[e._v("docker.conf")]),e._v("文件\n另外查看日志分析错误的命令:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo dockerd --debug \nsudo journalctl -r -u docker\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h4",{attrs:{id:"错误记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误记录"}},[e._v("#")]),e._v(" 错误记录")]),e._v(" "),s("h5",{attrs:{id:"failed-to-start-daemon-error-while-opening-volume-store-metadata-database-timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#failed-to-start-daemon-error-while-opening-volume-store-metadata-database-timeout"}},[e._v("#")]),e._v(" failed to start daemon: error while opening volume store metadata database: timeout")]),e._v(" "),s("p",[s("code",[e._v("ps axf | grep docker | grep -v grep | awk '{print \"kill -9 \" $1}' | sudo sh")]),e._v("\nsudo dockerd --debug")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 其他方法\nsudo systemctl start docker\nsudo kill -SIGHUP $(pidof dockerd)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("你会发现dockerd其实暴露了很多API接口，比如获取和操作images，container的，还暴露了一个_ping接口，用于测试连通性，直接使用")]),e._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-bd3c144478b66781.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),s("p",[s("code",[e._v("curl http://ip:2375/_ping")]),e._v(" 如果连通正常，返回OK")]),e._v(" "),s("p",[e._v("具体API参见："),s("a",{attrs:{href:"https://docs.docker.com/engine/api/v1.40",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/engine/api/v1.40"),s("OutboundLink")],1)]),e._v(" "),s("h4",{attrs:{id:"安全性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全性"}},[e._v("#")]),e._v(" 安全性")]),e._v(" "),s("p",[e._v("允许Docker远程访问后一定要设置好防火墙或者用nignx加一层反向代理，也可以开启https访问，不过要生成证书，具体见下面参考中的链接。")]),e._v(" "),s("h4",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.docker.com/config/daemon/",target:"_blank",rel:"noopener noreferrer"}},[e._v("daemon"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file",target:"_blank",rel:"noopener noreferrer"}},[e._v("dockerd"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://tankeryang.github.io/posts/docker%E9%85%8D%E7%BD%AETLS%E8%AE%A4%E8%AF%81%E5%BC%80%E5%90%AF%E8%BF%9C%E7%A8%8B%E8%AE%BF%E9%97%AE/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker配置TLS认证开启远程访问"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://docs.docker.com/engine/security/https/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/engine/security/https/"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);