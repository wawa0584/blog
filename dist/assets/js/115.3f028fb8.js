(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{576:function(n,s,e){"use strict";e.r(s);var a=e(30),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("在插入和更新数据表时要实现 create_at, update_at 字段的自动更新，一般框架都有这个功能。")]),n._v(" "),e("p",[n._v("Symfony中一般有两种方法：")]),n._v(" "),e("ol",[e("li",[n._v("使用 doctrine 的事件机制")]),n._v(" "),e("li",[n._v("使用 doctrine-extensions-bundle 类库提供的 timestampable 功能。")])]),n._v(" "),e("p",[n._v("第一种，比较麻烦你需要在每个entity文件中定义时间类型的set，get方法还有，调用PrePersist 和 PreUpdate 生命周期钩子的方法。\n例子如下：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<?php\n\nnamespace Finley\\BlogBundle\\Entity;\nuse Doctrine\\ORM\\Mapping as ORM;\n\n/**\n * Setting\n *\n * @ORM\\Table(name="setting")\n * @ORM\\Entity(repositoryClass="Finley\\BlogBundle\\Repository\\SettingRepository")\n*  不要忘了这行, 表示启用声明周期钩子\n * @ORM\\HasLifecycleCallbacks\n */\nclass Setting\n{\n    /**\n     * @var int\n     *\n     * @ORM\\Column(name="id", type="integer")\n     * @ORM\\Id\n     * @ORM\\GeneratedValue(strategy="AUTO")\n     */\n    private $id;\n\n    /**\n     * @var \\DateTime $created\n     *\n     * @ORM\\Column(type="datetime", nullable=true)\n     */\n    private $created;\n\n    /**\n     * @var \\DateTime $updated\n\n     */\n    private $updated;\n\n    public function setCreated($created)\n    {\n        $this->created = $created;\n        return $this;\n    }\n\n    public function getCreated()\n    {\n        return $this->created;\n    }\n\n\n    public function getUpdated()\n    {\n        return $this->updated;\n    }\n\n    public function setUpdated($updated)\n    {\n        $this->updated = $updated;\n        return $this;\n    }\n\n    /**\n     * 自动更新时间类型，不要忘了在 Class 上面加注解 ORM\\HasLifecycleCallbacks\n     *\n     * @ORM\\PrePersist\n     * @ORM\\PreUpdate\n     */\n    public function updatedTimestamps()\n    {\n        $this->setUpdated(new \\DateTime(\'now\'));\n\n        if ($this->getCreated() == null) {\n            $this->setCreated(new \\DateTime(\'now\'));\n        }\n    }\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br"),e("span",{staticClass:"line-number"},[n._v("69")]),e("br"),e("span",{staticClass:"line-number"},[n._v("70")]),e("br"),e("span",{staticClass:"line-number"},[n._v("71")]),e("br"),e("span",{staticClass:"line-number"},[n._v("72")]),e("br"),e("span",{staticClass:"line-number"},[n._v("73")]),e("br"),e("span",{staticClass:"line-number"},[n._v("74")]),e("br"),e("span",{staticClass:"line-number"},[n._v("75")]),e("br")])]),e("p",[n._v("第二种:\n需要安装配置 "),e("a",{attrs:{href:"https://symfony.com/doc/master/bundles/StofDoctrineExtensionsBundle/index.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("doctrine-extensions-bundle"),e("OutboundLink")],1),n._v("\n我因为对 Symfony 还不熟悉，所以花了一些时间。\n在"),e("code",[n._v("config.yml")]),n._v("中，原来的内容是")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("orm:\n  auto_generate_proxy_classes: '%kernel.debug%'\n  naming_strategy: doctrine.orm.naming_strategy.underscore\n  auto_mapping: true   # 默认是在 Entity 命名空间下找 entity 文件\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])]),e("p",[n._v("需要定义如何找entity文件，FinleyBlogBundle是我的自定义Bundle。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('    orm:\n        entity_managers:\n            default:\n                mappings:  #  php bin/console doctrine:mapping:info\n                    FinleyBlogBundle:\n                        type: annotation\n                        prefix: Finley\\BlogBundle\\Entity\n                        is_bundle: true\n                    gedmo_translatable:\n                        type: annotation\n                        prefix: Gedmo\\Translatable\\Entity\n                        dir: "%kernel.root_dir%/../vendor/gedmo/doctrine-extensions/lib/Gedmo/Translatable/Entity"\n                        alias: GedmoTranslatable # (optional) it will default to the name set for the mapping\n                        is_bundle: false\n                    gedmo_translator:\n                        type: annotation\n                        prefix: Gedmo\\Translator\\Entity\n                        dir: "%kernel.root_dir%/../vendor/gedmo/doctrine-extensions/lib/Gedmo/Translator/Entity"\n                        alias: GedmoTranslator # (optional) it will default to the name set for the mapping\n                        is_bundle: false\n                    gedmo_loggable:\n                        type: annotation\n                        prefix: Gedmo\\Loggable\\Entity\n                        dir: "%kernel.root_dir%/../vendor/gedmo/doctrine-extensions/lib/Gedmo/Loggable/Entity"\n                        alias: GedmoLoggable # (optional) it will default to the name set for the mapping\n                        is_bundle: false\n                    gedmo_tree:\n                        type: annotation\n                        prefix: Gedmo\\Tree\\Entity\n                        dir: "%kernel.root_dir%/../vendor/gedmo/doctrine-extensions/lib/Gedmo/Tree/Entity"\n                        alias: GedmoTree # (optional) it will default to the name set for the mapping\n                        is_bundle: false\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br")])]),e("p",[n._v("同时，记得在最下面添加，开启功能")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("stof_doctrine_extensions:\n    orm:\n        default:\n            timestampable: true\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])]),e("p",[n._v("然后entity文件就清爽了许多，只需为create和update添加注解。不需要set和get方法了。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('    /**\n     * @var \\DateTime $created\n     *\n     * @Gedmo\\Timestampable(on="create")\n     * @ORM\\Column(type="datetime", nullable=true)\n     */\n    private $created;\n\n    /**\n     * @var \\DateTime $updated\n     *\n     * @Gedmo\\Timestampable(on="update")\n     * @ORM\\Column(type="datetime", nullable=true)\n     */\n    private $updated;\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br")])]),e("p",[n._v("有个小细节：\n使用第一种方法，只要执行update更新，updated字段的值就会改变。\n而使用第二种方法，如果更新之后影响的行数 afftectd rows 是0，updated字段的值不会发生改变。")]),n._v(" "),e("p",[n._v("参考：\nhttps://www.doctrine-project.org/projects/doctrine-orm/en/current/tutorials/getting-started.html\nhttps://symfonycasts.com/screencast/symfony2-ep3/doctrine-extensions")])])}),[],!1,null,null,null);s.default=t.exports}}]);