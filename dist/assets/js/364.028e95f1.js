(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{802:function(e,r,t){"use strict";t.r(r);var n=t(30),o=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("先梳理一些概念：\n"),t("strong",[e._v("Rx")]),e._v("：ReactiveX是Reactive Extensions的缩写，一般简写为Rx，最初是LINQ的一个扩展，由微软的架构师Erik Meijer领导的团队开发，在2012年11月开源，Rx是一个编程模型，目标是提供一致的编程接口，帮助开发者更方便的处理异步数据流，Rx库支持.NET、JavaScript和C++，Rx近几年越来越流行了，现在已经支持几乎全部的流行编程语言了，Rx的大部分语言库由ReactiveX这个组织负责维护，比较流行的有RxJava/RxJS/Rx.NET，社区网站是 "),t("a",{attrs:{href:"http://reactivex.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("reactivex.io"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[t("strong",[e._v("Observer 和 Observable")]),e._v("： 在ReactiveX中，一个观察者(Observer)订阅一个可观察对象(Observable)。观察者对Observable发射的数据或数据序列作出响应。这种模式可以极大地简化并发操作，因为它创建了一个处于待命状态的观察者哨兵，在未来某个时刻响应Observable的通知，不需要阻塞等待Observable发射数据。")]),e._v(" "),t("p",[t("strong",[e._v("RxJS")]),e._v("： 刚才说了Rx是抽象的东西，RxJS 就是使用JavaScript语言实现rx接口的类库。\n它通过使用 observable 序列来编写异步和基于事件的程序。它提供了一个核心类型 "),t("a",{attrs:{href:"https://cn.rx.js.org/manual/overview.html#observable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Observable"),t("OutboundLink")],1),e._v("，附属类型 (Observer、 Schedulers、 Subjects) 和受 [Array#extras] 启发的操作符 (map、filter、reduce、every, 等等)，这些数组操作符可以把异步事件作为集合来处理。")]),e._v(" "),t("blockquote",[t("p",[e._v("可以把 "),t("a",{attrs:{href:"https://cn.rx.js.org/manual/overview.html#",target:"_blank",rel:"noopener noreferrer"}},[e._v("RxJS"),t("OutboundLink")],1),e._v(" 当做是用来处理事件的 "),t("a",{attrs:{href:"https://lodash.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lodash"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("ReactiveX 结合了 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Observer_pattern",target:"_blank",rel:"noopener noreferrer"}},[e._v("观察者模式"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Iterator_pattern",target:"_blank",rel:"noopener noreferrer"}},[e._v("迭代器模式"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"http://martinfowler.com/articles/collection-pipeline/#NestedOperatorExpressions",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用集合的函数式编程"),t("OutboundLink")],1),e._v("，以满足以一种理想方式来管理事件序列所需要的一切。")]),e._v(" "),t("p",[e._v("在 RxJS 中用来解决异步事件管理的的基本概念是：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Observable (可观察对象):")]),e._v(" 表示一个概念，这个概念是一个可调用的未来值或事件的集合。")]),e._v(" "),t("li",[t("strong",[e._v("Observer (观察者):")]),e._v(" 一个回调函数的集合，它知道如何去监听由 Observable 提供的值。")]),e._v(" "),t("li",[t("strong",[e._v("Subscription (订阅):")]),e._v(" 表示 Observable 的执行，主要用于取消 Observable 的执行。")]),e._v(" "),t("li",[t("strong",[e._v("Operators (操作符):")]),e._v(" 采用函数式编程风格的纯函数 (pure function)，使用像 "),t("code",[e._v("map")]),e._v("、"),t("code",[e._v("filter")]),e._v("、"),t("code",[e._v("concat")]),e._v("、"),t("code",[e._v("flatMap")]),e._v(" 等这样的操作符来处理集合。")]),e._v(" "),t("li",[t("strong",[e._v("Subject (主体):")]),e._v(" 相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。")]),e._v(" "),t("li",[t("strong",[e._v("Schedulers (调度器):")]),e._v(" 用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 "),t("code",[e._v("setTimeout")]),e._v(" 或 "),t("code",[e._v("requestAnimationFrame")]),e._v(" 或其他。")])]),e._v(" "),t("blockquote",[t("p",[e._v("注意：网上很多例子都是基于 RxJS5 版本，而最新的 RxJS6 变化很大，具体"),t("a",{attrs:{href:"https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/v6/migration.md#dep-methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("参见"),t("OutboundLink")],1),e._v("和"),t("a",{attrs:{href:"https://segmentfault.com/a/1190000014956260",target:"_blank",rel:"noopener noreferrer"}},[e._v("中文"),t("OutboundLink")],1),e._v("，后面的例子中都会基于 RxJS6 来实现。")])]),e._v(" "),t("blockquote",[t("p",[e._v("另外学习 RxJS 建议直接看官方文档，毕竟是最新的。")])]),e._v(" "),t("ul",[t("li",[e._v("http://reactivex.io/documentation")]),e._v(" "),t("li",[e._v("https://rxjs-dev.firebaseapp.com/guide/overview\n可结合中文文档 (注意例子中的版本)\nhttps://mcxiaoke.gitbooks.io/rxdocs/content/\n"),t("a",{attrs:{href:"https://rxjs-cn.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://rxjs-cn.github.io"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("下节介绍如何创建 Observable")])])}),[],!1,null,null,null);r.default=o.exports}}]);