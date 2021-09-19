(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{475:function(t,a,e){"use strict";e.r(a);var r=e(30),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("随着SaaS(Software-as-a-Service)的普及，很多客户更倾向于不自己购买服务器等硬件，而是使用软件提供商的统一服务，提供商为不同的客户设置不同的子级域名。\n如a.demo.com,b.demo.com\n比如客户A登录他的专属平台a.demo.com，客户B登录他的专属平台b.demo.com，a和b之间互相隔离，互补干涉，使用独立的数据库。")]),t._v(" "),e("p",[t._v("这里结合Laravel聊聊实现过程，抛砖引玉，有更好的方案欢迎讨论")]),t._v(" "),e("h4",{attrs:{id:"我们的需求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我们的需求"}},[t._v("#")]),t._v(" 我们的需求：")]),t._v(" "),e("ol",[e("li",[t._v("根据不同域名访问不同数据库")]),t._v(" "),e("li",[t._v("泛域名解析")])]),t._v(" "),e("h4",{attrs:{id:"泛域名解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#泛域名解析"}},[t._v("#")]),t._v(" 泛域名解析")]),t._v(" "),e("p",[t._v("这个其他文章里有介绍\n我们先复杂问题简单化，假设只有两个客户A和B，登录域名已经配好\ndemo.test 和 lara6.test")]),t._v(" "),e("h4",{attrs:{id:"大致思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#大致思路"}},[t._v("#")]),t._v(" 大致思路")]),t._v(" "),e("ol",[e("li",[t._v("创建一个admin数据库，库中包含一个tenants表，用来保存租户的基本信息，如名称，数据库，域名")]),t._v(" "),e("li",[t._v("创建一个TenancyServiceProvider，每次请求中调用这个Provider，在里面实现根据当前访问域名动态切换数据库的方法")])]),t._v(" "),e("h4",{attrs:{id:"讨论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#讨论"}},[t._v("#")]),t._v(" 讨论：")]),t._v(" "),e("p",[t._v("https://learnku.com/laravel/t/44228")]),t._v(" "),e("h4",{attrs:{id:"开源类库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开源类库"}},[t._v("#")]),t._v(" 开源类库:")]),t._v(" "),e("ul",[e("li",[t._v("https://github.com/spatie/laravel-multitenancy")]),t._v(" "),e("li",[t._v("https://github.com/stancl/tenancy")]),t._v(" "),e("li",[t._v("https://github.com/tenancy/tenancy")])]),t._v(" "),e("p",[t._v("数据库切换：\nhttps://learnku.com/articles/28142")]),t._v(" "),e("p",[t._v('DB::unprepared("USE intogolf_demo;");')])])}),[],!1,null,null,null);a.default=s.exports}}]);