(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{686:function(s,t,a){"use strict";a.r(t);var n=a(30),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("table",[a("thead",[a("tr",[a("th",[s._v("格式")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("${string: start :length}")]),s._v(" "),a("td",[s._v("从 string 字符串的左边第 start 个字符开始，向右截取 length 个字符。")])]),s._v(" "),a("tr",[a("td",[s._v("${string: start}")]),s._v(" "),a("td",[s._v("从 string 字符串的左边第 start 个字符开始截取，直到最后。")])]),s._v(" "),a("tr",[a("td",[s._v("${string: 0-start :length}")]),s._v(" "),a("td",[s._v("从 string 字符串的右边第 start 个字符开始，向右截取 length 个字符。")])]),s._v(" "),a("tr",[a("td",[s._v("${string: 0-start}")]),s._v(" "),a("td",[s._v("从 string 字符串的右边第 start 个字符开始截取，直到最后。")])]),s._v(" "),a("tr",[a("td",[s._v("${string#*chars}")]),s._v(" "),a("td",[s._v("从 string 字符串第一次出现 *chars 的位置开始，截取 *chars 右边的所有字符。")])]),s._v(" "),a("tr",[a("td",[s._v("${string##*chars}")]),s._v(" "),a("td",[s._v("从 string 字符串最后一次出现 *chars 的位置开始，截取 *chars 右边的所有字符。")])]),s._v(" "),a("tr",[a("td",[s._v("${string%*chars}")]),s._v(" "),a("td",[s._v("从 string 字符串第一次出现 *chars 的位置开始，截取 *chars 左边的所有字符。")])]),s._v(" "),a("tr",[a("td",[s._v("${string%%*chars}")]),s._v(" "),a("td",[s._v("从 string 字符串最后一次出现 *chars 的位置开始，截取 *chars 左边的所有字符。")])])])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GITHUB_REF")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("refs/tags/v1.3.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按长度截取，格式 ${string: start :length}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从第10个字符截取，直到最后")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出 v1.3.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GITHUB_REF"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("10}")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# # 是截取")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出tags/v1.3.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GITHUB_REF"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("refs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GITHUB_REF")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("refs/heads/main\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出 heads/main")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GITHUB_REF"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出 main ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GITHUB_REF"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("##")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("使用%号可以截取指定字符（或者子字符串）左边的所有字符，具体格式如下：\n"),a("code",[s._v("${string%chars*}")]),s._v("\n请注意"),a("code",[s._v("*")]),s._v("的位置，因为要截取 chars 左边的字符，而忽略 chars 右边的字符，所以"),a("code",[s._v("*")]),s._v("应该位于 chars 的右侧。其他方面"),a("code",[s._v("%")]),s._v("和"),a("code",[s._v("#")]),s._v("的用法相同，这里不再赘述，仅举例说明：")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://c.biancheng.net/index.html"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结果为 http://c.biancheng.net")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("*}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结果为 http:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("*}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#结果为 http:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("*}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#结果为 http://")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%%")]),s._v("c*}")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[s._v("http://c.biancheng.net/view/1120.html")])])}),[],!1,null,null,null);t.default=r.exports}}]);