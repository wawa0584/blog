(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{794:function(e,s,l){"use strict";l.r(s);var n=l(30),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,l=e._self._c||s;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("p",[e._v("这节讲处理高阶 Observable 的操作符\n所谓的 Higher Order Observable 就是指一个 Observable 发送出的元素还是一个 Observable，就像是二维数组一样，一个数组中的每个元素还是数组。如果用TypeScript中的泛型来表达就像是")]),e._v(" "),l("p",[l("code",[e._v("Observable<Observable<T>>")])]),e._v(" "),l("p",[e._v("通常我们需要的是第二层 Observable 送出的元素，所以我们希望可以把二维的 Observable 改成一维的，像是下面这样\n"),l("code",[e._v("Observable<Observable<T>> => Observable<T>")])]),e._v(" "),l("p",[e._v("其实想要做到这件事有三个方法 switchAll、mergeAll 和 concatAll，其中 concatAll 我们在上节已经稍微讲过了，今天这篇文章会讲解这三个 operators 各自的效果跟差异。")]),e._v(" "),l("p",[e._v("先看各自最重要的特点：")]),e._v(" "),l("ul",[l("li",[e._v("concatAll： 处理完前一个 observable 才会在处理下一个 observable。"),l("strong",[e._v("依次按顺序执行一个个observable")]),e._v(" 。")]),e._v(" "),l("li",[e._v("switchAll：新的 observable 送出后直接处理新的 observable 不管前一个 observable 是否完成，每当有新的 observable 送出就会直接把旧的 observable 退订(unsubscribe)，"),l("strong",[e._v("永远只处理最新的 observable!")])])]),e._v(" "),l("blockquote",[l("p",[e._v("注意：RxJS5 中叫switch，由于与Javascript保留字冲突，RxJS 6中对以下运算符名字做了修改：do -> tap, catch ->catchError, switch -> switchAll, finally -> finalize")])]),e._v(" "),l("ul",[l("li",[e._v("mergeAll：并且能够同时"),l("strong",[e._v("并行处理所有的 observable")])])]),e._v(" "),l("p",[e._v("看下面的例子，我们可以切换为 concatAll，mergeAll，switchAll 体验区别")]),e._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("  const example = fromEvent(document.body, 'click')\n    .pipe(\n      // map 把送出的event事件转换为 Observable\n      // 每次点击送出一个新的 Observable\n      map(e => {\n        // console.log(e);\n        // 生成新的 Observable，点击一次输出0，1，2\n        return interval(1000).pipe(take(3))\n      }),\n     \n     // concatAll 比如快速点击三次，会按顺序输出三次0,1,2\n     // switchAll 快速点击，只输出一次0,1,2，也就是说老的舍去只保留最新的\n     // mergeAll 快速点击，会重复的输出多次0，1等。点击越多下，最后送出的频率就会越快。不会舍去，每次都会输出\n      switchAll()\n    );\n\n\n  example.subscribe({\n    next: (value) => { console.log(value); },\n    error: (err)  => { console.log('Error: ' + err); },\n    complete: ()  => { console.log('complete'); }\n  });\n")])]),e._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[e._v("1")]),l("br"),l("span",{staticClass:"line-number"},[e._v("2")]),l("br"),l("span",{staticClass:"line-number"},[e._v("3")]),l("br"),l("span",{staticClass:"line-number"},[e._v("4")]),l("br"),l("span",{staticClass:"line-number"},[e._v("5")]),l("br"),l("span",{staticClass:"line-number"},[e._v("6")]),l("br"),l("span",{staticClass:"line-number"},[e._v("7")]),l("br"),l("span",{staticClass:"line-number"},[e._v("8")]),l("br"),l("span",{staticClass:"line-number"},[e._v("9")]),l("br"),l("span",{staticClass:"line-number"},[e._v("10")]),l("br"),l("span",{staticClass:"line-number"},[e._v("11")]),l("br"),l("span",{staticClass:"line-number"},[e._v("12")]),l("br"),l("span",{staticClass:"line-number"},[e._v("13")]),l("br"),l("span",{staticClass:"line-number"},[e._v("14")]),l("br"),l("span",{staticClass:"line-number"},[e._v("15")]),l("br"),l("span",{staticClass:"line-number"},[e._v("16")]),l("br"),l("span",{staticClass:"line-number"},[e._v("17")]),l("br"),l("span",{staticClass:"line-number"},[e._v("18")]),l("br"),l("span",{staticClass:"line-number"},[e._v("19")]),l("br"),l("span",{staticClass:"line-number"},[e._v("20")]),l("br"),l("span",{staticClass:"line-number"},[e._v("21")]),l("br"),l("span",{staticClass:"line-number"},[e._v("22")]),l("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);