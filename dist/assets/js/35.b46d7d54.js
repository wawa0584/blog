(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{472:function(s,t,n){"use strict";n.r(t);var a=n(30),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("这个"),n("a",{attrs:{href:"https://github.com/summerblue/larabbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("bbs项目"),n("OutboundLink")],1),s._v("是laravel社区大佬写的，很有学习意义，抽空看了下。")]),s._v(" "),n("p",[s._v("今天抽空总结一下，吸取一些优秀的地方。")]),s._v(" "),n("p",[s._v("首先打开"),n("code",[s._v("composer.json")]),s._v("看看项目中用到了哪些第三方类库")]),s._v(" "),n("p",[s._v("mews/captcha\n很明显，生成验证码")]),s._v(" "),n("p",[s._v("mews/purifier\n这个是html过滤，因为是bbs系统，过滤用户输入的内容")]),s._v(" "),n("p",[s._v("overtrue/pinyin\n把汉字转换成拼音，主要是转换帖子标题，方便SEO")]),s._v(" "),n("p",[s._v("spatie/laravel-permission\n这个类库很常见，权限控制，具体见"),n("a",{attrs:{href:"https://docs.spatie.be/laravel-permission/v3/introduction/",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/summerblue/administrator",target:"_blank",rel:"noopener noreferrer"}},[s._v("summerblue/administrator"),n("OutboundLink")],1),s._v("\n快速的生成后台管理页面及功能")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/dwightwatson/active",target:"_blank",rel:"noopener noreferrer"}},[s._v("summerblue/laravel-active"),n("OutboundLink")],1),s._v("\n提供了一些工具方法，比如判断是否是当前路由，当前控制器，是否包含了某查询参数等功能")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/viacreative/sudo-su",target:"_blank",rel:"noopener noreferrer"}},[s._v("viacreative/sudo-su"),n("OutboundLink")],1),s._v("\n很有意思的类库，安装后，页面右下角有个用户列表，可以选择不同的用户身份登录系统，非常方便开发期调试使用")]),s._v(" "),n("p",[s._v("来看下目录结构，还是非常清晰的")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://pek3b.qingstor.com/hexo-blog/images/20200807180822.png",alt:""}})]),s._v(" "),n("p",[s._v("再来看下路由")]),s._v(" "),n("p",[s._v("除去第三方带的的"),n("code",[s._v("_debugbar")]),s._v(", "),n("code",[s._v("_ignition")]),s._v(", "),n("code",[s._v("Frozennode\\Administrator")]),s._v(", "),n("code",[s._v("horizon")])]),s._v(" "),n("p",[s._v("剩下的就是自己写的，topic，reply，user的增删改")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://pek3b.qingstor.com/hexo-blog/images/20200807181509.png",alt:""}})]),s._v(" "),n("p",[s._v("挑一下比较重要的功能介绍下")]),s._v(" "),n("ol",[n("li",[s._v("添加文章")])]),s._v(" "),n("p",[s._v("顺着路由走\n"),n("code",[s._v("routes/web.php")]),s._v("  发现了")]),s._v(" "),n("p",[n("code",[s._v("Route::resource('topics', 'TopicsController', ['only' => ['index', 'create', 'store', 'update', 'edit', 'destroy']]);")])]),s._v(" "),n("p",[s._v("打开"),n("code",[s._v("TopicsController")])]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("store")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[s._v("TopicRequest")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[s._v("Topic")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$topic")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$topic")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fill")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$topic")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("user_id")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("Auth")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$topic")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("save")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("redirect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("to")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$topic")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'success'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'成功创建话题！'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("很简单，重点是"),n("code",[s._v("app/Observers/TopicObserver.php")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class TopicObserver\n{\n    public function saving(Topic $topic)\n    {\n        // XSS 过滤\n        $topic->body = clean($topic->body, 'user_topic_body');\n\n        // 生成话题摘录\n        $topic->excerpt = make_excerpt($topic->body);\n    }\n\n    public function saved(Topic $topic)\n    {\n        // 如 slug 字段无内容，即使用翻译器对 title 进行翻译\n        if ( ! $topic->slug) {\n\n            // 推送任务到队列\n            dispatch(new TranslateSlug($topic));\n        }\n    }\n\n    public function deleted(Topic $topic)\n    {\n        \\DB::table('replies')->where('topic_id', $topic->id)->delete();\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("这里用到了"),n("a",{attrs:{href:"https://learnku.com/docs/laravel/6.x/eloquent/5176#observers",target:"_blank",rel:"noopener noreferrer"}},[s._v("Model观察器"),n("OutboundLink")],1),s._v("，来监听保存事件")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("observers的使用场景：\n当保存话题成功后，需要调用第三方服务，把话题标题从汉字转为拼音，同时要过滤内容，根据内容生成摘要，这些保存后的后续操作都可以放到观察者中。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);