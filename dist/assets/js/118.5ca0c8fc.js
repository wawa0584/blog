(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{554:function(s,a,t){"use strict";t.r(a);var n=t(30),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("按位与运算符“&”是双目运算符。其功能是参与运算的两数各对应的二进位相与。只有对应的两个二进位都为1时，结果位才为1。")]),s._v(" "),t("p",[s._v("假设 用户的权限 为 $myPrivilege = 15;")]),s._v(" "),t("p",[s._v("权限表为 array(8 => '增',4 => '改', 2 => '删', 1 => '查' );")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("8 =》 1 0 0 0\n4 =》 0 1 0 0\n2 =》 0 0 1 0\n1 =》 0 0 0 1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("我们要知道用户有哪些权限，可以怎么做？")]),s._v(" "),t("p",[s._v("我们都知道 所有数据在计算机中都是二进制表示\n15 换算成 二进制。就是 1111")]),s._v(" "),t("p",[s._v("1111 & 1000 只有最高位1相同，所以结果是 1000 即 8\n同理\n1111 & 0001 = 1\n1111 & 0010 = 2\n1111 & 0100 = 4\n1111 & 1000 = 8")]),s._v(" "),t("p",[s._v("这里写的不太规范，注意二进制和十进制的转换")]),s._v(" "),t("p",[s._v("即用户拥有增删改查的权限。\n我们可以展开\n15 = 1 + 2 + 4 + 8;")]),s._v(" "),t("p",[s._v("那如果是 9 呢？ 即 1 + 8。所以拥有查和赠权限")]),s._v(" "),t("p",[s._v("代码实现：")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$myPrivilege")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$privilegeArr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'增'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'删'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'改'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'查'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$privilegeArr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$k")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$v")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$k")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$myPrivilege")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Pri")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'我有'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$v")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"权限<br>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Pri")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);