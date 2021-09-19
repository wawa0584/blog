(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{543:function(n,s,e){"use strict";e.r(s);var t=e(30),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("ul",[e("li",[e("p",[n._v("Node 单线程，远离多线程死锁，状态同步等问题。")])]),n._v(" "),e("li",[e("p",[n._v("利用异步io，让单线程远离阻塞，以更好的充分利用cpu。需要强调，这里得单线程仅仅是JS执行在单线程罢了。在node中，无论是*nix还是Windows平台，内部完成io任务的另有线程池。")])]),n._v(" "),e("li",[e("p",[n._v("Node的循环机制，启动时又一个死循环，每执行一次循环体称为Tick。每次循环处理事件。如果事件存在回调则处理回调。接着处理下一个事件。")])]),n._v(" "),e("li",[e("p",[n._v("在Node中，事件来源有网络请求，文件io等。")])])]),n._v(" "),e("p",[n._v("事件循环时典型的生产者/消费者模型，异步io，网络请求是生产者，源源不断等为node提供不同的事件，这次事件被传递导对应的观察者那里，事件循环则从观察者那里取出事件并处理")]),n._v(" "),e("ul",[e("li",[n._v("Node8起新增了 util.promisify() 方法，可以快捷的把原来的异步回调方法改成返回 Promise 实例。")])]),n._v(" "),e("p",[n._v("举例1")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const util = require('util');\nconst fs = require('fs');\nconst readFileAsync = util.promisify(fs.readFile);\nfileResult = await readFileAsync(sourcePathFile);\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])]),e("p",[n._v("举例2")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("/**\n* 执行 shell 返回 Promise\n*/\nasync function execShell(scriptPath) {\n  const execFile = require('util').promisify(require('child_process').execFile);\n  return await execFile('sh', [scriptPath]);\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br")])]),e("h3",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[n._v("#")])]),n._v(" "),e("ul",[e("li",[n._v("module.exports 与 exports 的区别\n先看下面的例子")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("**test.js**\n\nvar a = {name: 1}; \nvar b = a;\n\nconsole.log(a); \nconsole.log(b);\n\nb.name = 2; \nconsole.log(a); \nconsole.log(b);\n\nvar b = {name: 3}; \nconsole.log(a); \nconsole.log(b);\n\n运行 test.js 结果为：\n\n{ name: 1 } \n{ name: 1 } \n{ name: 2 } \n{ name: 2 } \n{ name: 2 } \n{ name: 3 }\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br")])]),e("p",[n._v("解释：a 是一个对象，b 是对 a 的引用，即 a 和 b 指向同一块内存，所以前两个输出一样。当对 b 作修改时，即 a 和 b 指向同一块内存地址的内容发生了改变，所以 a 也会体现出来，所以第三四个输出一样。当 b 被覆盖时，b 指向了一块新的内存，a 还是指向原来的内存，所以最后两个输出不一样。")]),n._v(" "),e("p",[n._v("同理 exports 是 module.exports 的引用。\n当 module.exports 属性被一个新的对象完全替代时，也会重新赋值 exports\n如果你觉得用不好可以只使用module.exports")]),n._v(" "),e("h3",{attrs:{id:"event-loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[n._v("#")]),n._v(" Event Loop")]),n._v(" "),e("p",[n._v("event loop是一个执行模型，在不同的地方有不同的实现。浏览器和NodeJS基于不同的技术实现了各自的 Event Loop。\n可以简单理解为不断执行的死循环\n浏览器的Event Loop是在 "),e("a",{attrs:{href:"https://www.w3.org/TR/html5/webappapis.html#event-loops",target:"_blank",rel:"noopener noreferrer"}},[n._v("html5"),e("OutboundLink")],1),n._v(" 的规范中明确定义。\nNodeJS的Event Loop是基于libuv实现的。可以参考 Node 的"),e("a",{attrs:{href:"https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",target:"_blank",rel:"noopener noreferrer"}},[n._v("官方文档"),e("OutboundLink")],1),n._v("以及 libuv 的"),e("a",{attrs:{href:"http://docs.libuv.org/en/v1.x/design.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("官方文档"),e("OutboundLink")],1),n._v("。\nlibuv已经对Event Loop做出了实现，而HTML5规范中只是定义了浏览器中Event Loop的模型，具体的实现留给了浏览器厂商。")]),n._v(" "),e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[n._v("#")]),n._v(" Events")]),n._v(" "),e("p",[n._v("Events 是 Node.js 中一个非常重要的 core 模块, 在 node 中有许多重要的 core API 都是依赖其建立的. 比如 Stream 是基于 Events 实现的, 而 fs, net, http 等模块都依赖 Stream, 所以 Events 模块的重要性可见一斑。")]),n._v(" "),e("p",[n._v("通过继承 EventEmitter 来使得一个类具有 node 提供的基本的 event 方法, 这样的对象可以称作 emitter，而触发(emit)事件的 cb 则称作 listener。与前端 DOM 树上的事件并不相同, emitter 的触发不存在冒泡, 逐层捕获等事件行为, 也没有处理事件传递的方法。")]),n._v(" "),e("p",[n._v("Node.js 中 Eventemitter 的 emit 是同步的。")]),n._v(" "),e("p",[n._v("例1：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const EventEmitter = require('events');\nlet emitter = new EventEmitter();\n\nemitter.on('myEvent', () => {\n  console.log('1');\n});\nemitter.on('myEvent', () => {\n  console.log('2');\n});\nemitter.emit('myEvent');\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br")])]),e("p",[n._v("执行结果是 1， 2")]),n._v(" "),e("p",[n._v("例2：\n会发生死循环")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const EventEmitter = require('events');\nlet emitter = new EventEmitter();\n\nemitter.on('myEvent', () => {\n  console.log('hi');\n  emitter.emit('myEvent');\n});\n\n// 只出现一次\nconsole.log(\"1\")\n\nemitter.emit('myEvent');\n\n// 永远不会发生\nconsole.log(\"down\")\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br")])]),e("p",[n._v("例3\n在使用node的mongoose模块中，项目中有如下代码：\n如何实现的呢？")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const mongoose = require('mongoose');\n// MongoDB connect\nfunction mongoDBConnect() {\n  mongoose.connect(`${config.mongo.url}${config.mongo.database}`);\n  return mongoose.connection;\n}\n\nmongoDBConnect()\n  .on('error', console.error.bind(console, 'connection error:'))\n  .on('disconnected', () => console.log('mongodb disconnected'))\n  .once('open', () => console.log('mongodb connection successful'));\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br")])]),e("p",[n._v("翻了 "),e("a",{attrs:{href:"https://github.com/Automattic/mongoose/blob/master/lib/connection.js",target:"_blank",rel:"noopener noreferrer"}},[n._v("源码"),e("OutboundLink")],1),n._v("\n最关键的一行是让Connection继承自EventEmitter。\n"),e("code",[n._v("Connection.prototype.__proto__ = EventEmitter.prototype;")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const EventEmitter = require('events').EventEmitter;\n\n// connectionState start\nconst STATES = Object.create(null);\n\nconst disconnected = 'disconnected';\nconst connected = 'connected';\nconst connecting = 'connecting';\n\nSTATES[0] = disconnected;\nSTATES[1] = connected;\nSTATES[2] = connecting;\n\nSTATES[disconnected] = 0;\nSTATES[connected] = 1;\nSTATES[connecting] = 2;\n// connectionState end\n\n\nfunction Connection() {\n\tthis.states = STATES;\n\tthis._readyState = STATES.disconnected;\n}\n\n// 这行非常关键，继承 EventEmitter\nConnection.prototype.__proto__ = EventEmitter.prototype;\n\nObject.defineProperty(Connection.prototype, 'readyState', {\n  get: function() {\n    return this._readyState;\n  },\n  set: function(val) {\n    if (!(val in STATES)) {\n      throw new Error('Invalid connection state: ' + val);\n    }\n\n    if (this._readyState !== val) {\n      this._readyState = val;\n\n      this.emit(STATES[val]);\n    }\n  }\n});\n\nConnection.prototype.onOpen = function() {\n  this.readyState = STATES.connected;\n  this.emit('open');\n};\n\nlet conn = new Connection();\n\nconn.on('connected', () => {\n\tconsole.log(\"1\");\n});\n\nconn.on('open', () => {\n\tconsole.log(\"open!!\");\n});\n\n\nconn.readyState = 1\n\nconn.readyState = 2\n\nconn.onOpen();\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br")])]),e("h3",{attrs:{id:"面试相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试相关"}},[n._v("#")]),n._v(" 面试相关")]),n._v(" "),e("p",[n._v("https://elemefe.github.io/node-interview/#/sections/zh-cn/")])])}),[],!1,null,null,null);s.default=a.exports}}]);