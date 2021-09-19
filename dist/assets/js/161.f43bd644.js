(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{599:function(s,a,t){"use strict";t.r(a);var n=t(30),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("学习技能光看不做是不行的，强烈推荐按照教程敲一遍\nhttps://docs.docker.com/compose/gettingstarted/")]),s._v(" "),t("p",[s._v("Compose项目由 Python编写 ，实现上调用了 Docker服务提供的 API来对容器进行管理。 因此只要所操作的平台支持 Docker，就可以在其上利用 Compose来进行编排管理。")]),s._v(" "),t("p",[s._v("本人提炼出了几点技巧：")]),s._v(" "),t("ol",[t("li",[s._v("多用 "),t("code",[s._v("docker-compose config")]),s._v("\n命令校验和查看配置信息，\n当修改了"),t("code",[s._v("docker-compose.yml")]),s._v("文件，不要急于执行"),t("code",[s._v("docker-compose up")]),s._v("启动，可以先检查下配置。很多时候是yml格式不规范导致的。")]),s._v(" "),t("li",[s._v("docker-compose up\n"),t("code",[s._v("docker-compose up")]),s._v(" 包含了构建镜像，创建服务，启动服务等一系列操作。一般配好文件执行这个命令就可以了。")]),s._v(" "),t("li",[s._v("使用"),t("code",[s._v(".env")]),s._v("环境变量配置文件\n一些敏感信息如，数据库密码等不建议写死到"),t("code",[s._v("docker-compose.yml")]),s._v("中，可以写在"),t("code",[s._v(".env")]),s._v("环境配置文件中(使用Laravel的同学对这个文件肯定不陌生)。")])]),s._v(" "),t("p",[s._v("因为"),t("code",[s._v("docker-compose.yml")]),s._v("一般跟随项目受版本控制，"),t("code",[s._v(".env")]),s._v("可以不受版本控制。\n优化前：\ndocker-compose.yml")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mysql")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("build/mysql\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"33060:3306"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("build/mysql/data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/mysql\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("优化后：\n同级目录建立"),t("code",[s._v(".env")]),s._v("文件")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mysql")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("build/mysql\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"33060:3306"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("build/mysql/data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/mysql\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先从.env找DOCKER_MYSQL_PASSPORD，找不到使用后面的默认值")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DOCKER_MYSQL_PASSPORD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v(".env")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# define env var default value.\nDOCKER_MYSQL_PASSPORD=root\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("使用"),t("code",[s._v("docker-compose.yml")]),s._v("中的env_file语法")])]),s._v(" "),t("p",[s._v("service节点下支持 env_file属性，即环境变量从额外的文件中读取。\n如下面的例子，如果local.env和common.env有相同key。则下面的优先级高。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("php")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("context")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("build/php\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("args")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" INSTALL_COMPOSER=$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("PHP_INSTALL_COMPOSER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" INSTALL_MONGO=$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("PHP_INSTALL_MONGO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" INSTALL_REDIS=$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("PHP_INSTALL_REDIS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" INSTALL_XDEBUG=$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("PHP_INSTALL_XDEBUG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9001:9000"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("links")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/www\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env_file")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./common.env\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./local.env\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("假设 "),t("code",[s._v("local.env")]),s._v(" 中内容是"),t("code",[s._v("A:1")]),s._v("，"),t("code",[s._v("common.env")]),s._v(" 是 "),t("code",[s._v("A:2")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env_file")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./common.env\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./local.env\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("最终生效的是 "),t("code",[s._v("A:3")])]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("配置不同场景下的环境变量\n我们可以把不同场景下的环境变量定义在不同的 shell 脚本中并导出，\n然后在执行 "),t("code",[s._v("docker-compose")]),s._v(" 命令前先执行 source 命令把 shell 脚本中定义的环境变量导出到当前的 shell 中。\n通过这样的方式可以减少维护环境变量的地方，下面的例子中我们分别在 "),t("code",[s._v("docker-compose.yml")]),s._v(" 文件所在的目录创建 "),t("code",[s._v("test.sh")]),s._v(" 和 "),t("code",[s._v("prod.sh")]),s._v("。")])]),s._v(" "),t("p",[t("code",[s._v("test.sh")]),s._v(" 的内容如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# define env var default value.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IMAGETAG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("web:v1\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APPNAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("HelloWorld\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUTHOR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Nick Li\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("code",[s._v("prod.sh")]),s._v(" 的内容如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# define env var default value.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IMAGETAG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("webpord:v1\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APPNAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("HelloWorldProd\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUTHOR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Nick Li\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".0LTS\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("在测试环境下，执行下面的命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" test.sh\n$ docker-compose config\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[t("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-32568b72759201b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),s._v(" "),t("p",[s._v("此时 docker-compose.yml 中的环境变量应用的都是测试环境相关的设置。\n而在生产环境下，执行下面的命令：")]),s._v(" "),t("blockquote",[t("p",[t("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-eae5c194a7265e94.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),s._v(" "),t("p",[s._v("此时 docker-compose.yml 中的环境变量应用的都是生产环境相关的设置。")]),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[s._v("环境变量的优先级\ndocker-compose.yml 文件中引用的环境变量，它们的优先级如下：")])]),s._v(" "),t("ul",[t("li",[s._v("Compose file")]),s._v(" "),t("li",[s._v("Shell environment variables")]),s._v(" "),t("li",[s._v("Environment file")]),s._v(" "),t("li",[s._v("Dockerfile")]),s._v(" "),t("li",[s._v("Variable is not defined")])]),s._v(" "),t("p",[s._v("首先，在 docker-compose.yml 文件中直接设置的值优先级是最高的。\n然后是在当前 shell 中 export 的环境变量值。\n接下来是在环境变量文件中定义的值。\n再接下来是在 Dockerfile 中定义的值。\n最后还没有找到相关的环境变量就认为该环境变量没有被定义。")]),s._v(" "),t("p",[s._v("额外内容，使用 extends 继承扩展docker-compose.yml\n基于其他模板文件进行扩展 。 例如，我们已经有了一个 webapp 服务，定义一个基础模板文件为 common.yml，如下所示:\n"),t("code",[s._v("common.yml")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("webapp\n  build : . /webapp \n  environment:\n    - DEBUG=false\n    - SEND EMAILS=false\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("再编写一个新的 development .yml 文件，使用 common.yml 中的 webapp 服务进行扩展:")]),s._v(" "),t("p",[t("code",[s._v("development .yml")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('web:\n  extends:\n    file: common .yml\n    service: webapp \n    ports :\n      - "8000:8000" \n    links:\n      - db environment:\n      - DEBUG=true \n  db:\n    image : postgres\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("后者会自动继承common.yml中的webapp服务及环境变量定义。 使用extends需要注意以下两点:")]),s._v(" "),t("ul",[t("li",[s._v("要避免出现循环依赖，例如 A 依赖 B, B 依赖 C, C 反过来依赖 A 的情况 。")]),s._v(" "),t("li",[s._v("extends 不会继承 links 和 volumes_from 中定义的容器和数据卷资源 。 一般情况下，推荐在基础模板中只定义一些可以共享的镜像和环境变量，在扩展模板中\n具体指定应用变量、链接、数据卷等信息 。")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/CloudMan6/p/6875834.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("RUN vs CMD vs ENTRYPOINT"),t("OutboundLink")],1),s._v(" 的区别")]),s._v(" "),t("ol",[t("li",[s._v("Dockerfile中，在基础镜像上安装软件使用 RUN")]),s._v(" "),t("li",[s._v("CMD命令是当Docker镜像被启动后Docker容器将会默认执行的命令。一个Dockerfile中只能有一个CMD命令。通过执行"),t("code",[s._v("docker run $image $other_command")]),s._v("启动镜像可以重载CMD命令。")]),s._v(" "),t("li",[s._v("使用 docker-compose run 命令可以在服务上运行一次性命令，如 "),t("code",[s._v("docker-compose run web env")]),s._v(" 查看服务为web的环境变量")])])]),s._v(" "),t("blockquote",[t("p",[t("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-6592bccf4e94da2c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),s._v(" "),t("h3",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考：")]),s._v(" "),t("ul",[t("li",[s._v("https://www.cnblogs.com/sparkdev/p/9826520.html")]),s._v(" "),t("li",[s._v("https://docs.docker.com/compose/reference/envvars/")]),s._v(" "),t("li",[s._v("https://docs.docker.com/compose/environment-variables/")])])])}),[],!1,null,null,null);a.default=e.exports}}]);