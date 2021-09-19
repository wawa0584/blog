(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{763:function(e,s,n){"use strict";n.r(s);var a=n(30),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("原文：https://medium.com/@mirokoczka/3-ways-to-communicate-between-angular-components-a1e3f3304ecb")]),e._v(" "),n("p",[e._v("这个教程适合初学者看，这里介绍的是最常见的三种通信方式。\n如图，下面的页面里有个名为side-bar的组件，组件内部有个toggle方法，可以控制显示或隐藏，这个需要其他组件来调用toggle的方法。\n"),n("img",{attrs:{src:"https://hexo-blog.pek3b.qingstor.com/upload_images/71414-898700d3f6b5dec2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image.png"}}),e._v("\n我们可以通过以下三种方式来实现：")]),e._v(" "),n("ol",[n("li",[e._v("传递一个组件的引用给另一个组件")]),e._v(" "),n("li",[e._v("通过子组件发送EventEmitter和父组件通信")]),e._v(" "),n("li",[e._v("通过service通信")])]),e._v(" "),n("p",[e._v("每个例子都会有StackBlitz在线演示地址")]),e._v(" "),n("h4",{attrs:{id:"_1-传递一个组件的引用给另一个组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-传递一个组件的引用给另一个组件"}},[e._v("#")]),e._v(" 1. 传递一个组件的引用给另一个组件")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://stackblitz.com/edit/angular-communication-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo1"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://angular.cn/guide/template-syntax#template-reference-variables--var-",target:"_blank",rel:"noopener noreferrer"}},[e._v("模板引用变量"),n("OutboundLink")],1)]),e._v(" "),n("blockquote",[n("p",[e._v("模板引用变量通常用来引用模板中的某个 DOM 元素，它还可以引用 Angular 组件或指令或Web Component。\n使用井号 (#) 来声明引用变量。 #phone 的意思就是声明一个名叫 phone 的变量来引用 "),n("input"),e._v(" 元素")])]),e._v(" "),n("p",[e._v("这种方式适合组件间有依赖关系。\napp component")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<app-side-bar-toggle [sideBar]="sideBar"></app-side-bar-toggle>\n<app-side-bar #sideBar></app-side-bar>\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://gist.github.com/mkoczka/9c74507b59a89e8e90ae63f9d08eba5a#file-app-component-html",target:"_blank",rel:"noopener noreferrer"}},[e._v("app.component.html"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Component({\n  selector: 'app-side-bar-toggle',\n  templateUrl: './side-bar-toggle.component.html',\n  styleUrls: ['./side-bar-toggle.component.css']\n})\nexport class SideBarToggleComponent {\n\n  @Input() sideBar: SideBarComponent;\n\n  @HostListener('click')\n  click() {\n    this.sideBar.toggle();\n  }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://gist.github.com/mkoczka/9c74507b59a89e8e90ae63f9d08eba5a#file-side-bar-toggle-component-ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("side-bar-toggle.component.ts"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Component({\n  selector: 'app-side-bar',\n  templateUrl: './side-bar.component.html',\n  styleUrls: ['./side-bar.component.css']\n})\nexport class SideBarComponent {\n\n  @HostBinding('class.is-open')\n  isOpen = false;\n\n  toggle() {\n    this.isOpen = !this.isOpen;\n  }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br")])]),n("h4",{attrs:{id:"_2-通过子组件发送eventemitter和父组件通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过子组件发送eventemitter和父组件通信"}},[e._v("#")]),e._v(" 2.  通过子组件发送EventEmitter和父组件通信")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://stackblitz.com/edit/angular-communication-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo2"),n("OutboundLink")],1),e._v("\n这种方式利用事件传播，需要在子组件中写\n"),n("a",{attrs:{href:"https://gist.github.com/mkoczka/0eb7a2af1ae4efb67178d981d9f03ebf#file-app-component-html",target:"_blank",rel:"noopener noreferrer"}},[e._v("app.component.html"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<app-side-bar-toggle (toggle)="toggleSideBar()"></app-side-bar-toggle>\n<app-side-bar [isOpen]="sideBarIsOpened"></app-side-bar>\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://gist.github.com/mkoczka/0eb7a2af1ae4efb67178d981d9f03ebf#file-app-component-ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("app.component.ts"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Component({\n  selector: 'my-app',\n  templateUrl: './app.component.html',\n  styleUrls: [ './app.component.css' ]\n})\nexport class AppComponent {\n  sideBarIsOpened = false;\n\n  toggleSideBar(shouldOpen: boolean) {\n    this.sideBarIsOpened = !this.sideBarIsOpened;\n  }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://gist.github.com/mkoczka/0eb7a2af1ae4efb67178d981d9f03ebf#file-side-bar-toggle-component-ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("side-bar-toggle.component.ts"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Component({\n  selector: 'app-side-bar-toggle',\n  templateUrl: './side-bar-toggle.component.html',\n  styleUrls: ['./side-bar-toggle.component.css']\n})\nexport class SideBarToggleComponent {\n\n  @Output() toggle: EventEmitter<null> = new EventEmitter();\n\n  @HostListener('click')\n  click() {\n    this.toggle.emit();\n  }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://gist.github.com/mkoczka/0eb7a2af1ae4efb67178d981d9f03ebf#file-side-bar-component-ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("side-bar.component.ts"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Component({\n  selector: 'app-side-bar',\n  templateUrl: './side-bar.component.html',\n  styleUrls: ['./side-bar.component.css']\n})\nexport class SideBarComponent {\n\n  @HostBinding('class.is-open') @Input()\n  isOpen = false;\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])]),n("h4",{attrs:{id:"_3-通过service进行通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过service进行通信"}},[e._v("#")]),e._v(" 3. 通过service进行通信")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://stackblitz.com/edit/angular-communication-3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demo3"),n("OutboundLink")],1),e._v("\n这里需要新建side-bar.service，我们把toggle方法写到service文件中，\n然后将service注入到side-bar-toggle.component和side-bar-toggle.component，前者调用toggle方法，发送事件流，后者订阅事件")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://gist.github.com/mkoczka/2b990523999c82a7c0e4c5db1d1b02a9#file-app-component-html",target:"_blank",rel:"noopener noreferrer"}},[e._v("app.component.html"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<app-side-bar-toggle></app-side-bar-toggle>\n<app-side-bar></app-side-bar>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://gist.github.com/mkoczka/2b990523999c82a7c0e4c5db1d1b02a9#file-side-bar-toggle-component-ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("side-bar-toggle.component.ts"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Component({\n  selector: 'app-side-bar-toggle',\n  templateUrl: './side-bar-toggle.component.html',\n  styleUrls: ['./side-bar-toggle.component.css']\n})\nexport class SideBarToggleComponent {\n\n  constructor(\n    private sideBarService: SideBarService\n  ) { }\n\n  @HostListener('click')\n  click() {\n    this.sideBarService.toggle();\n  }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://gist.github.com/mkoczka/2b990523999c82a7c0e4c5db1d1b02a9#file-side-bar-component-ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("side-bar.component.ts"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Component({\n  selector: 'app-side-bar',\n  templateUrl: './side-bar.component.html',\n  styleUrls: ['./side-bar.component.css']\n})\nexport class SideBarComponent {\n\n  @HostBinding('class.is-open')\n  isOpen = false;\n\n  constructor(\n    private sideBarService: SideBarService\n  ) { }\n\n  ngOnInit() {\n    this.sideBarService.change.subscribe(isOpen => {\n      this.isOpen = isOpen;\n    });\n  }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://gist.github.com/mkoczka/2b990523999c82a7c0e4c5db1d1b02a9#file-side-bar-service-ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("side-bar.service.ts"),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("@Injectable()\nexport class SideBarService {\n\n  isOpen = false;\n\n  @Output() change: EventEmitter<boolean> = new EventEmitter();\n\n  toggle() {\n    this.isOpen = !this.isOpen;\n    this.change.emit(this.isOpen);\n  }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);