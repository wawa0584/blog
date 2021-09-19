(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{596:function(e,n,s){"use strict";s.r(n);var t=s(30),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("本节通过学习 docker 的 nginx 镜像，容器的使用。以及如何映射文件。")]),e._v(" "),s("ol",[s("li",[e._v("运行容器\n"),s("code",[e._v("docker run --name my-nginx -d -p 8088:80 --rm nginx:1.15")])])]),e._v(" "),s("ul",[s("li",[e._v("-d：在后台运行")]),e._v(" "),s("li",[e._v("-p：容器的80端口映射到 宿主机的 8088 端口")]),e._v(" "),s("li",[e._v("--rm：容器停止运行后，自动删除容器文件")]),e._v(" "),s("li",[e._v("--name：容器的名字为 my-nginx")])]),e._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-e508e54965926b10.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),s("p",[e._v("docker run 其实等于 docker create + start\n因为tag为 1.15 的 nginx 镜像并不在本地，会先下载再运行")]),e._v(" "),s("p",[e._v("浏览器打开 locahost:8088 就能看到默认页面了")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("官方推荐通过 Dockerfile 的方式制作镜像并运行容器")])]),e._v(" "),s("p",[e._v("新建static-pages目录，结构如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("static-pages\n   -- index.html\n   -- Dockerfile\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("index.html")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<h1>Hello World</h1>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Dockerfile")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("FROM nginx:1.15\nCOPY . /usr/share/nginx/html\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("切换到Dockerfile所在路径")]),e._v(" "),s("p",[e._v("制作镜像 "),s("code",[e._v("docker build -t my-nginx .")]),e._v("，名称为 my-nginx，完整镜像名格式是：name:tag\n参见 "),s("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/build/#tag-an-image--t",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),s("OutboundLink")],1)]),e._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-62d5bde15f851d61.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),e._v(" "),s("p",[e._v("根据镜像运行一个容器\n"),s("code",[e._v("docker run --name my-nginx -d -p 8088:80 my-nginx:latest")]),e._v("\n浏览器打开 locahost:8088 就能看到 hello-world 了")]),e._v(" "),s("p",[e._v("3.如果要修改nginx配置文件，我们把容器里面的 Nginx 配置文件拷贝到本地的当前目录。\n执行 "),s("code",[e._v("docker container cp my-nginx:/etc/nginx .")]),e._v("\n不要漏掉最后那个点。执行完成后，当前目录应该多出一个nginx子目录。\n修改Dockerfile")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("FROM nginx:1.15\nCOPY index.html /usr/share/nginx/html\nCOPY nginx /etc/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("然后修改 static-pages\\nginx\\conf.d\\default.conf")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server {\n  listen       80;\n  server_name  ng.test;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("C:\\Windows\\System32\\drivers\\etc\\HOSTS\n需要添加  "),s("code",[e._v("127.0.0.10 ng.test")]),e._v(" 保持和localhost一致即可\n重新制作镜像 "),s("code",[e._v("docker build -t my-nginx:ng-test .")]),e._v("\n运行容器 "),s("code",[e._v("docker run -d -p 80:80 my-nginx:ng-test")]),e._v(" 注意我映射的端口不再是8088，这样\n本地浏览器就能访问 ng.test 了")]),e._v(" "),s("h4",{attrs:{id:"细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#细节"}},[e._v("#")]),e._v(" 细节")]),e._v(" "),s("ul",[s("li",[e._v("停止容器：\n先 docker ps 获取容器ID，比如是 934f93002018\n然后 docker stop 934f93002018")]),e._v(" "),s("li",[e._v("重启容器"),s("code",[e._v("docker exec -it <mycontainer> kill -USR2 1")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);