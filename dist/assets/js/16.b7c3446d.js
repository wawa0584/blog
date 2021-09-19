(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{455:function(r,e,t){"use strict";t.r(e);var i=t(30),_=Object(i.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("p",[r._v("MQTT 的全称为 Message Queue Telemetry Transport（消息队列遥测传输协议）是在 1999 年由 IBM 的 Andy Stanford-Clark 和 Arcom 的 Arlen Nipper 为了一个通过卫星网络连接输油管道的项目开发的。为了满足低电量消耗和低网络带宽的需求，MQTT 协议在设计之初就包含了以下一些特点：")]),r._v(" "),t("ul",[t("li",[r._v("实现简单")]),r._v(" "),t("li",[r._v("提供数据传输的 QoS")]),r._v(" "),t("li",[r._v("轻量、占用带宽低")]),r._v(" "),t("li",[r._v("可传输任意类型的数据")]),r._v(" "),t("li",[r._v("可保持的会话（session）")])]),r._v(" "),t("p",[r._v("之后 IBM 一直将 MQTT 作为一个内部协议在其产品中使用，直到 2010 年，IBM 公开发布了 MQTT 3.1 版本。\n在 2014 年，MQTT 协议正式成为了 OASIS（结构化信息标准促进组织）的标准协议。简单地来说MQTT协议具有以下特性：")]),r._v(" "),t("p",[r._v("基于 TCP 协议的应用层协议；")]),r._v(" "),t("ul",[t("li",[r._v("采用 C/S 架构；")]),r._v(" "),t("li",[r._v("使用订阅/发布模式，将消息的发送方和接受方解耦；")]),r._v(" "),t("li",[r._v("提供 3 种消息的 QoS（Quality of Service）: 至多一次，最少一次，只有一次；")]),r._v(" "),t("li",[r._v("收发消息都是异步的，发送方不需要等待接收方应答。")])]),r._v(" "),t("p",[r._v("下文将从以下四个方面对MQTT的基础概念进行介绍：")]),r._v(" "),t("ul",[t("li",[r._v("MQTT 协议的通信模型")]),r._v(" "),t("li",[r._v("MQTT Client")]),r._v(" "),t("li",[r._v("MQTT Broker")]),r._v(" "),t("li",[r._v("MQTT协议数据包")])]),r._v(" "),t("h2",{attrs:{id:"_1-mqtt-协议的通信模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-mqtt-协议的通信模型"}},[r._v("#")]),r._v(" 1. MQTT 协议的通信模型")]),r._v(" "),t("p",[r._v("MQTT 的通信是通过发布/订阅的方式来实现的，订阅和发布又是基于主题（Topic）的。\n发布方和订阅方通过这种方式来进行解耦，它们没有直接地连接，它们需要一个中间方。\n在 MQTT 里面我们称之为 Broker，用来进行消息的存储和转发。一次典型的 MQTT 消息通信流程如下所示：")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://pek3b.qingstor.com/hexo-blog/hexo-blog/20210630174211.png",alt:""}})]),r._v(" "),t("ol",[t("li",[r._v("发布方（Publisher）连接到Broker；")]),r._v(" "),t("li",[r._v("订阅方（Subscriber）连接到Broker，并订阅主题Topic1；")]),r._v(" "),t("li",[r._v("发布方（Publisher）发送给Broker一条消息，主题为Topic1；")]),r._v(" "),t("li",[r._v("Broker收到了发布方的消息，发现订阅方（Subscriber）订阅了Topic1，然后将消息转发给订阅方（Subscriber）；")]),r._v(" "),t("li",[r._v("订阅方从Broker接收该消息；")])]),r._v(" "),t("p",[r._v("MQTT通过订阅与发布模型对消息的发布方和订阅方进行解耦后，发布方在发布消息时并不需要订阅方也连接到Broker，只要订阅方之前订阅过相应主题，那么它在连接到Broker之后就可以收到发布方在它离线期间发布的消息。我们可以称这种消息为离线消息。")]),r._v(" "),t("p",[r._v("在该通信模型中，有两组身份需要区别：")]),r._v(" "),t("ul",[t("li",[r._v("一组是发布方Publisher和订阅方Subscriber")]),r._v(" "),t("li",[r._v("另一组是发送方Sender和接收方Receiver")])]),r._v(" "),t("h3",{attrs:{id:"_1-1-publisher和subscriber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-publisher和subscriber"}},[r._v("#")]),r._v(" 1.1. Publisher和Subscriber")]),r._v(" "),t("p",[r._v("publisher和subscriber是相对于Topic来说的身份，如果一个Client向某个Topic发布消息，那么这个Client就是publisher；\n如果一个Client订阅了某个Topic，那么它就是Subscriber。")]),r._v(" "),t("h3",{attrs:{id:"_1-2-sender和receiver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-sender和receiver"}},[r._v("#")]),r._v(" 1.2. Sender和Receiver")]),r._v(" "),t("p",[r._v("Sender和Receiver则是相对于消息传输方向的身份。当publisher向Broker发送消息时，那么此时publisher是sender，Broker是receiver；\n当Broker转发消息给subscriber时，此时Broker是sender，subscriber是receiver。")]),r._v(" "),t("h2",{attrs:{id:"_2-mqtt-client"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-mqtt-client"}},[r._v("#")]),r._v(" 2. MQTT Client")]),r._v(" "),t("p",[r._v("Publisher 和 Subscriber 都属于 Client，Publisher 或者 Subscriber 只取决于该 Client 当前的状态——是在发布消息还是在订阅消息。\n当然，一个 Client 可以同时是 Publisher 和 Subscriber。\nclient的范围很广，任何终端、嵌入式设备、服务器只要运行了MQTT的库或者代码，都可以称为MQTT Client。\nMQTT Client库很多语言都有实现，可以在这个网址中找到："),t("a",{attrs:{href:"https://github.com/mqtt/mqtt.org/wiki/libraries",target:"_blank",rel:"noopener noreferrer"}},[r._v("MQTT Client库大全"),t("OutboundLink")],1)]),r._v(" "),t("h2",{attrs:{id:"_3-mqtt-broker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-mqtt-broker"}},[r._v("#")]),r._v(" 3. MQTT Broker")]),r._v(" "),t("p",[r._v("MQTT Broker负责接收Publisher的消息，并发送给相应的Subscriber，是整个MQTT 订阅/发布的核心。\n现在很多云服务器提供商都有提供MQTT 服务，比如阿里云、腾讯云等。\n当然我们自己也可以搭建一个MQTT Broker")]),r._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[r._v("TIP")]),r._v(" "),t("p",[r._v("常见的MQTT Broker有"),t("a",{attrs:{href:"https://mosquitto.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Eclipse Mosquitto"),t("OutboundLink")],1),r._v(" , "),t("a",{attrs:{href:"https://www.emqx.cn/products/broker",target:"_blank",rel:"noopener noreferrer"}},[r._v("EMQ X Broker"),t("OutboundLink")],1),r._v("和 HiveMQ等\n个人推荐EMQ X Broker，国人开发，开源，自带一个web管理界面，非常方便。\n更多客户端和服务端参见：https://github.com/mqtt/mqtt.org/wiki/libraries")])]),r._v(" "),t("h2",{attrs:{id:"_4-mqtt协议数据包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-mqtt协议数据包"}},[r._v("#")]),r._v(" 4. MQTT协议数据包")]),r._v(" "),t("p",[r._v("MQTT 协议数据包的消息格式为：固定头|可变头|消息体")]),r._v(" "),t("p",[r._v("由下面三个部分组成：")]),r._v(" "),t("ul",[t("li",[r._v("固定头（Fixed header）: "),t("strong",[r._v("存在于所有的MQTT数据包中")]),r._v("，用于表示数据包类型及对应标志、数据包大小等；")]),r._v(" "),t("li",[r._v("可变头（Variable header）: 存在于部分类型的MQTT数据包中，具体内容是由相应类型的数据包决定的；")]),r._v(" "),t("li",[r._v("消息体（Payload）: 存在于部分的MQTT数据包中，存储消息的具体数据。")])]),r._v(" "),t("h3",{attrs:{id:"_4-1-固定头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-固定头"}},[r._v("#")]),r._v(" 4.1. 固定头")]),r._v(" "),t("p",[r._v("固定头格式：")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://pek3b.qingstor.com/hexo-blog/hexo-blog/20210630175231.png",alt:""}})]),r._v(" "),t("p",[r._v("固定头的第一个字节的高4位Bit用于表示该数据包的类型，MQTT的数据包有以下一些类型：")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://pek3b.qingstor.com/hexo-blog/hexo-blog/20210630175303.png",alt:""}})]),r._v(" "),t("h3",{attrs:{id:"_4-2-可变头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-可变头"}},[r._v("#")]),r._v(" 4.2. 可变头")]),r._v(" "),t("p",[r._v("可变报文头主要包含协议名、协议版本、连接标志（Connect Flags）、心跳间隔时间（Keep Alive timer）、连接返回码（Connect Return Code）、主题名（Topic Name）等，后面会针对此部分进行具体讲解。")]),r._v(" "),t("h3",{attrs:{id:"_4-3-消息体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-消息体"}},[r._v("#")]),r._v(" 4.3. 消息体")]),r._v(" "),t("p",[r._v("当MQTT发送的消息类型是CONNECT（连接）、PUBLISH（发布）、SUBSCRIBE（订阅）、SUBACK（订阅确认）、UNSUBSCRIBE（取消订阅）时，则会带有负荷。")]),r._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[r._v("#")]),r._v(" 参考")]),r._v(" "),t("p",[r._v("https://blog.csdn.net/programguo/article/details/100035935")]),r._v(" "),t("p",[r._v("https://github.com/mqtt/mqtt.org/wiki/libraries")])])}),[],!1,null,null,null);e.default=_.exports}}]);