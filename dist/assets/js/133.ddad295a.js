(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{571:function(s,e,a){"use strict";a.r(e);var t=a(30),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[s._v("#")]),s._v(" 模块")]),s._v(" "),a("p",[s._v("ansible 中的模块可以用在ansible命令行或后面要讲的playbook中。不同的模块提供不同的功能，官方提供的非常多，几千种，常用的有几十种，这里只介绍常见的几种模块。\n模块是Ansible基本的可复用的单元。模块的功能范围很小，可能只针对某操作系统。")]),s._v(" "),a("h3",{attrs:{id:"模块的幂等性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块的幂等性"}},[s._v("#")]),s._v(" 模块的幂等性")]),s._v(" "),a("p",[s._v("ansible绝大多数模块都天然具有 "),a("strong",[s._v("幂等")]),s._v(" 特性，只有极少数模块如"),a("code",[s._v("shell")]),s._v("和"),a("code",[s._v("command")]),s._v("模块不具备幂等性。所谓的幂等性是指多次执行同一个操作不会影响最终结果。例如，ansible的yum模块安装rpm包时，如果待安装的包已经安装过了，则再次或多次执行安装操作都不会真正的执行下去。再例如，copy模块拷贝文件时，如果目标主机上已经有了完全相同的文件，则多次执行copy模块不会真正的拷贝。ansible具有幂等性的模块在执行时，都会自动判断是否要执行。")]),s._v(" "),a("p",[s._v("自己编写的脚本有可能执行第二次的时候有可能带来不一样的意外或影响，而模块的幂等性可以降低一定的风险。")]),s._v(" "),a("h3",{attrs:{id:"ansible-doc-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible-doc-命令"}},[s._v("#")]),s._v(" ansible-doc 命令")]),s._v(" "),a("p",[s._v("学习ansible模块时，可以先用ansible-doc命令，阅读相关模块的说明文档\n比如我想通过ansible执行拷贝文件操作，先用"),a("code",[s._v("ansible-doc -l | grep 'copy'")]),s._v("过滤出所有包含copy的模块名。")]),s._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-543f9d30fefcc6f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),s._v(" "),a("p",[a("code",[s._v("ansible-doc copy")]),s._v(" 查看copy模块的使用详情")]),s._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-0de2d6d2b6002cb9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),s._v(" "),a("p",[a("code",[s._v("ansible-doc -s copy")]),s._v(" 查看copy模块的精简信息")]),s._v(" "),a("h3",{attrs:{id:"shell-和-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell-和-command"}},[s._v("#")]),s._v(" shell 和 command")]),s._v(" "),a("p",[s._v("查看某服务器的内存使用情况\n"),a("code",[s._v('ansible myserver -m command -a "free -m"')]),s._v("\n可简写, 因为 -m command 是默认\n"),a("code",[s._v('ansible myserver -a "free -m"')]),s._v('\n模块包括 command, script(在远程主机执行主控端的shell脚本), shell (执行远程主机的shell脚本文件)\n例子\nansible myserver -m command -a "free -m"\nansible myserver -m script -a "/home/local.sh"\nansible myserver -m shell -a "/home/server.sh"')]),s._v(" "),a("blockquote",[a("p",[s._v("实际上shell模块执行命令的方式是在远程使用/bin/sh来执行的")])]),s._v(" "),a("p",[s._v("在批量服务器上完成同一操作\n"),a("code",[s._v('ansible merch -m shell -a "touch demo.txt"')])]),s._v(" "),a("p",[s._v("查看 shell 模块提供的参数\n"),a("code",[s._v("ansible-doc -s shell")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('- name: Execute commands in nodes.\n  shell:\n      chdir:                 # cd into this directory before running the command \n                             # 执行命令前，先cd到指定目录\n      creates:               # a filename, when it already exists, this step will *not* be run. \n                             # 用于判断命令是否要执行。如果指定的文件(可以使用通配符)存在，则不执行。\n      executable:            # change the shell used to execute the command. Should be an absolute path to the executable.\n                             # 不再使用默认的/bin/sh解析并执行命令，而是使用此处指定的命令解析。例如使用expect解析expect脚本。必须为绝对路径。\n      free_form:             # (required) The shell module takes a free form command to run, as a string.  There\'s not an actual option\n                               named "free form".  See the examples!\n      removes:               # a filename, when it does not exist, this step will *not* be run. \n                               # 用于判断命令是否要执行。如果指定的文件(可以使用通配符)不存在，则不执行。\n      stdin:                 # Set the stdin of the command directly to the specified value.\n      warn:                  # if command warnings are on in ansible.cfg, do not warn about this particular line if set to no/false.\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tasks:\n   - shell: touch helloworld.txt creates=/tmp/hello.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("但建议，在参数可能产生歧义的情况下，使用args来传递ansible的参数。如:")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("shell")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" touch helloworld.txt\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("creates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /tmp/hello.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"copy-复制模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-复制模块"}},[s._v("#")]),s._v(" COPY 复制模块")]),s._v(" "),a("p",[s._v("实现主控端向目标主机拷贝文件，类似于scp的功能。\n拷贝当前目录的 demo.png 到远程服务器的/home/ubuntu目录下，并修改文件权限\n"),a("code",[s._v('ansible cloud -m copy -a "src=demo.png dest=/home/ubuntu mode=755"')])]),s._v(" "),a("h3",{attrs:{id:"template-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-模块"}},[s._v("#")]),s._v(" template 模块")]),s._v(" "),a("p",[s._v("template模块用法和copy模块用法基本一致，它主要用于复制配置文件。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ansible-doc -s template\n - name: Templates a file out to a remote server.\n   action: template\n      dest  # 必填，拷贝到远程机器的目标路径\n      src # 必填，Ansible控制机模板文件所在位置\n      force # 是否覆盖同名文件\n      group # 设置远程文件的所属组\n      owner # 设置远程文件的所有者\n      mode  # 设置远程文件权限，如 0644，'u+rw', 'u=rw,g=r,o=r' 等方式\n      backup # 拷贝的同时也创建一个包含时间戳信息的备份文件，默认为no\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("类似的模块\nfile # 文件处理模块，可以递归创建目录\nfetch # 拉取文件模块，从远程主机将文件拉取到本地端\nrsync # 实现rsync部分功能的模块")]),s._v(" "),a("h3",{attrs:{id:"debug-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug-模块"}},[s._v("#")]),s._v(" debug 模块")]),s._v(" "),a("p",[s._v("用于输出自定义的信息，类似于echo、print等输出命令。ansible中的debug主要用于输出变量值、表达式值，以及用于when条件判断时。使用方式非常简单。\n"),a("code",[s._v("ansible-doc -s debug")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("- name: Print statements during execution\n  debug:\n      msg:                   # The customized message that is printed. If omitted, prints a generic message.\n                             # 输出自定义信息。如果省略，则输出普通字符。\n      var:                   # A variable name to debug.  Mutually exclusive with the 'msg' option.\n                             # 指定待调试的变量。只能指定变量，不能指定自定义信息，且变量不能加{{}}包围，而是直接的变量名。\n      verbosity:             # A number that controls when the debug is run, if you set to 3 it will only run debug when -vvv or above\n                             # 控制debug运行的调试级别，有效值为一个数值N。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"script-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script-模块"}},[s._v("#")]),s._v(" script 模块")]),s._v(" "),a("p",[s._v("script模块用于控制远程主机执行脚本。在执行脚本前，ansible会将本地脚本传输到远程主机，然后再执行。在执行脚本的时候，其采用的是远程主机上的shell环境。")]),s._v(" "),a("p",[s._v("例如，将ansible端/tmp/a.sh发送到各被控节点上执行，但如果被控节点的/tmp下有hello.t xt ，则不执行。")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" centos\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("remote_user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" execute /tmp/a.sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("but only /tmp/hello.txt is not yet created\n           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /tmp/a.sh hello\n           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("creates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /tmp/hello.txt\n \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[s._v("模块非常多，有什么需求先去官网查，然后看文档\n"),a("a",{attrs:{href:"https://docs.ansible.com/ansible/2.8/modules/list_of_all_modules.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方模块说明"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);