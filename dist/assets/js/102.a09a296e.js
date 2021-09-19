(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{539:function(t,v,a){"use strict";a.r(v);var _=a(30),r=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"virtual-host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-host"}},[t._v("#")]),t._v(" Virtual Host")]),t._v(" "),a("p",[t._v("RabbitMQ服务端可建立多个虚拟主机（vhost），不同虚拟主机之间是隔离的，拥有自己独立的交换机、队列、绑定关系、用户权限等。\n如此不同的系统或业务可使用不同的虚拟主机，方便解决用户权限管理、交换机和队列命名冲突等问题。")]),t._v(" "),a("p",[t._v("在RabbitMQ服务端安装完毕后，已默认配有名为“/”的虚拟主机。\n虚拟主机相关的操作可使用rabbitmqctl工具进行。常用命令如下。")]),t._v(" "),a("p",[t._v("查看当前已建立的虚拟主机列表：\n"),a("code",[t._v("sudo rabbitmqctl list_vhosts")])]),t._v(" "),a("p",[t._v("添加虚拟主机：\n"),a("code",[t._v("sudo rabbitmqctl add_vhost vhostname")])]),t._v(" "),a("p",[t._v("删除虚拟主机：\n"),a("code",[t._v("sudo rabbitmqctl delete_vhost vhostname")])]),t._v(" "),a("h2",{attrs:{id:"绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定"}},[t._v("#")]),t._v(" 绑定")]),t._v(" "),a("p",[t._v("绑定是交换机将消息路由给队列所遵循的规则")]),t._v(" "),a("h2",{attrs:{id:"消息确认"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息确认"}},[t._v("#")]),t._v(" 消息确认")]),t._v(" "),a("p",[t._v("当队列接到consumer的消息确认时将删除消息，消息确认分为两种：\n1.consumer获取消息后自动确认\n2.consumer获取消息后手动确认，或处理完成后手动确认")]),t._v(" "),a("h2",{attrs:{id:"拒绝消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拒绝消息"}},[t._v("#")]),t._v(" 拒绝消息")]),t._v(" "),a("p",[t._v("consumer获取消息后如果处理失败，应该通知队列此消息被拒绝，并通知队列该消息是删除还是继续存放在队列，当队列只有一个consumer时，继续存放队列可能会造成队列和消费者间的死循环")]),t._v(" "),a("h2",{attrs:{id:"预读取消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预读取消息"}},[t._v("#")]),t._v(" 预读取消息")]),t._v(" "),a("p",[t._v("对于存在多个consumer的队列，在consumer确认消息之前，设置可以向consumer分发消息的数量，可以简单的实现类似复杂均衡")]),t._v(" "),a("h2",{attrs:{id:"消息属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息属性"}},[t._v("#")]),t._v(" 消息属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Content type")]),t._v(" "),a("td",[t._v("内容类型")])]),t._v(" "),a("tr",[a("td",[t._v("Content encoding")]),t._v(" "),a("td",[t._v("编码")])]),t._v(" "),a("tr",[a("td",[t._v("Routing key")]),t._v(" "),a("td",[t._v("路由键")])]),t._v(" "),a("tr",[a("td",[t._v("Delivery mode")]),t._v(" "),a("td",[t._v("投递模式（持久化 或 非持久化）")])]),t._v(" "),a("tr",[a("td",[t._v("Message priority")]),t._v(" "),a("td",[t._v("消息优先级")])]),t._v(" "),a("tr",[a("td",[t._v("Message publishing timestamp")]),t._v(" "),a("td",[t._v("发布时间戳")])]),t._v(" "),a("tr",[a("td",[t._v("Expiration period")]),t._v(" "),a("td",[t._v("消息有效期")])]),t._v(" "),a("tr",[a("td",[t._v("Publisher application id")]),t._v(" "),a("td",[t._v("Publisher的ID")])])])]),t._v(" "),a("h2",{attrs:{id:"交换机类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交换机类型"}},[t._v("#")]),t._v(" 交换机类型")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("交换机类型")]),t._v(" "),a("th",[t._v("预声明的默认名称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Direct exchange（直连交换机）")]),t._v(" "),a("td",[t._v("(Empty string) and amq.direct")])]),t._v(" "),a("tr",[a("td",[t._v("Fanout exchange（扇型交换机）")]),t._v(" "),a("td",[t._v("amq.fanout")])]),t._v(" "),a("tr",[a("td",[t._v("Topic exchange（主题交换机）")]),t._v(" "),a("td",[t._v("amq.topic")])]),t._v(" "),a("tr",[a("td",[t._v("Headers exchange（头交换机）")]),t._v(" "),a("td",[t._v("amq.match (and amq.headers in RabbitMQ)")])])])]),t._v(" "),a("h2",{attrs:{id:"交换机属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交换机属性"}},[t._v("#")]),t._v(" 交换机属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Name(名称)")]),t._v(" "),a("td",[t._v("交换机名称")])]),t._v(" "),a("tr",[a("td",[t._v("Durability(持久)")]),t._v(" "),a("td",[t._v("Broker重启后，交换机是否还存在")])]),t._v(" "),a("tr",[a("td",[t._v("Auto-delete(自动删除)")]),t._v(" "),a("td",[t._v("当所有与之绑定的消息队列都完成了对此交换机的使用后，删掉它")])]),t._v(" "),a("tr",[a("td",[t._v("Arguments(参数)")]),t._v(" "),a("td",[t._v("可选，由插件和特定于代理的功能使用")])])])]),t._v(" "),a("h2",{attrs:{id:"直连交换-单播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直连交换-单播"}},[t._v("#")]),t._v(" 直连交换(单播)")]),t._v(" "),a("p",[t._v("队列通过路由键routing key(如k=R)绑定到交换机\n当有新消息投递到直接交换时，如果k=R，交换机将其投递到使用k=R绑定的队列")]),t._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://www.jmsite.cn/wp-content/uploads/2019/01/exchange-direct.png",alt:"image.png"}})])]),t._v(" "),a("h2",{attrs:{id:"扇形交换-广播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扇形交换-广播"}},[t._v("#")]),t._v(" 扇形交换(广播)")]),t._v(" "),a("p",[t._v("扇形交换将消息路由到绑定到它的所有队列，并忽略routing key")]),t._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://www.jmsite.cn/wp-content/uploads/2019/01/exchange-fanout.png",alt:"image.png"}})])]),t._v(" "),a("h2",{attrs:{id:"主题交换-多播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题交换-多播"}},[t._v("#")]),t._v(" 主题交换(多播)")]),t._v(" "),a("p",[t._v("主题交换基于消息路由键routing key，与交换机和队列间的绑定routing key进行匹配，将消息路由到一个或多个队列，主题交换通常用于实现类似各种发布/订阅模式。主题交换通常用于消息的多播路由")]),t._v(" "),a("h2",{attrs:{id:"头交换机-多播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头交换机-多播"}},[t._v("#")]),t._v(" 头交换机(多播)")]),t._v(" "),a("p",[t._v('头交换机通过消息的headers属性和与交换机绑定的routing key进行匹配，将消息路由到一个或多个队列，当"x-match"设置为“any”时，消息头的任意一个值被匹配就可以满足条件，而当"x-match"设置为“all”的时候，就需要消息头的所有值都匹配成功。')])])}),[],!1,null,null,null);v.default=r.exports}}]);