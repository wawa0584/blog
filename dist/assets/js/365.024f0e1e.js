(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{801:function(s,n,e){"use strict";e.r(n);var r=e(30),a=Object(r.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"第一个示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一个示例"}},[s._v("#")]),s._v(" 第一个示例")]),s._v(" "),e("p",[s._v("注册事件监听器的常规写法。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var button = document.querySelector('button');\nbutton.addEventListener('click', () => console.log('Clicked!'));\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("使用 RxJS 的话，创建一个 observable 来代替（基于最新的Rxjs6版本写法）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<script src='https://cdn.bootcss.com/rxjs/6.5.1/rxjs.umd.js'><\/script>\n<script>\nconst { fromEvent } = rxjs;\n\nconst button = document.querySelector('button');\nfromEvent(button, 'click')\n  .subscribe(() => console.log('Clicked!'));\n<\/script>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("上面例子中的"),e("code",[s._v("fromEvent")]),s._v("就是基于Event 建立 Observable，fromEvent 的第一个参数要传入 DOM 对象，第二个参数传入要监听的事件名。\n创建 Observable 有很多操作符")]),s._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-4d9152d109b45dc5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}})])]),s._v(" "),e("p",[s._v("使用"),e("code",[s._v("Create")]),s._v("操作符从头开始创建一个Observable， 这个接收一个回调函数，把observer作为参数")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  // Observer 是一个对象，这个对象具有三个方法，分别是 next, error, complete\n  // 建立 Observable 最简单方法是用 create 方法\n  // create 接收一个回调函数，把 observer 作为参数\n  const observer = {\n    next: value => {\n      console.log(`observer:` + value)\n    },\n    error: error => {\n      console.log('Error:', error);\n    },\n    complete: () => {\n      console.log('complete');\n    }\n  }\n\n  var observable = rxjs.Observable\n    .create(observer => {\n      observer.next('Jerry');\n      observer.next('Anna');\n      observer.complete();\n      observer.next('not work');\n    })\n\n  // 建立观察者来订阅 observable\n  // 订阅一个 Observable 就像是执行一个 function\n  observable.subscribe(\n    observer\n  )\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])]),e("p",[e("code",[s._v("from")]),s._v("操作符：将对象、字符串，数组，promise 等其他类型转换为Observable。\n请自己敲一遍看结果。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  const {from} = rxjs;\n\n  function f() {\n    return from(arguments);\n  }\n\n  const observer = {\n    next: value => {\n      console.log('Next: ' + value);\n    },\n    error: error => {\n      console.log('Error:', error);\n    },\n    complete: () => {\n      console.log('Complete');\n    }\n  }\n\n  // Array Like Object\n  f(1, 2, 3).subscribe(observer);\n\n  // string\n  from('foo').subscribe(observer);\n\n  // Set, any iterable object\n  const s = new Set(['foo', window]);\n  from(s).subscribe(observer);\n\n  // Promise\n  const source = from(new Promise((resolve, reject) => {\n      setTimeout(() => {\n        resolve('Hello RxJS!');\n      }, 3000)\n    }))\n\n  source.subscribe(observer);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);