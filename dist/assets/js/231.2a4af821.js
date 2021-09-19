(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{668:function(s,t,a){"use strict";a.r(t);var e=a(30),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"存在问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存在问题"}},[s._v("#")]),s._v(" 存在问题：")]),s._v(" "),a("p",[s._v("每个Pod都会分配一个单独的Pod IP，然而却存在如下两问题：")]),s._v(" "),a("ul",[a("li",[s._v("Pod IP 会随着Pod的重建产生变化")]),s._v(" "),a("li",[s._v("Pod IP 仅仅是集群内可见的虚拟IP，外部无法访问")]),s._v(" "),a("li",[s._v("需要一种机制，为前端系统屏蔽后端系统的 Pod（容器组）在销毁、创建过程中所带来的 IP 地址的变化。")])]),s._v(" "),a("h3",{attrs:{id:"解决问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决问题"}},[s._v("#")]),s._v(" 解决问题：")]),s._v(" "),a("p",[s._v("Kubernetes 中的 Service（服务） 提供了这样的一个抽象层，它选择具备某些特征的 Pod（容器组）并为它们定义一个访问方式。")]),s._v(" "),a("p",[s._v("Service 为一组 Pod（通过 labels 来选择）提供一个统一的入口，并为它们提供负载均衡和自动服务发现。")]),s._v(" "),a("p",[s._v("一个 Service（服务）选定哪些 Pod（容器组） 通常由 LabelSelector(标签选择器) 来决定。")]),s._v(" "),a("h3",{attrs:{id:"service类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service类型"}},[s._v("#")]),s._v(" Service类型")]),s._v(" "),a("ul",[a("li",[s._v("ClusterIP: 在群集中的内部IP上公布服务,外界无法访问，集群内可访问（默认）")]),s._v(" "),a("li",[s._v("LoadBalance：在云环境中（需要云供应商可以支持）创建一个集群外部的负载均衡器，并为使用该负载均衡器的 IP 地址作为服务的访问地址。此时 ClusterIP 和 NodePort 的访问方式仍然可用。")]),s._v(" "),a("li",[s._v("NodePort：使用 NAT 在集群中每个的同一端口上公布服务。这种方式下，可以通过访问集群中任意节点+端口号的方式访问服务 "),a("code",[s._v("<NodeIP>:<NodePort>")]),s._v("。此时 ClusterIP 的访问方式仍然可用")])]),s._v(" "),a("p",[s._v("作为编写 Service 清单的替代方法，可以使用 kubectl expose 公开 Deployment，以创建 Service。")]),s._v(" "),a("p",[a("code",[s._v("kubectl expose deployment my-deployment --name my-cip-service \\ --type ClusterIP --protocol TCP --port 80 --target-port 8080")])]),s._v(" "),a("p",[s._v("查看服务\nkubectl get svc")]),s._v(" "),a("h4",{attrs:{id:"nodetype类型的service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodetype类型的service"}},[s._v("#")]),s._v(" NodeType类型的Service")]),s._v(" "),a("p",[s._v("通过一个例子了解NodeType类型的Service\n首先创建一个deployment，里面会运行一个web服务，暴露端口是50000\n然后基于这个deployment创建NodeType类型的service，会把外部来的32049端口的流量转发到这个pod内部的50000端口")]),s._v(" "),a("p",[s._v("my-deployment-50000.yaml")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deployment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("department")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" engineering\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我们的节点数有3个，这里副本是也设置为3，等于每个节点跑一个Pod")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("department")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" engineering\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hello\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gcr.io/google-samples/hello-app:2.0"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PORT"')]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"50000"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("my-np-service.yaml")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" NodePort\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metrics\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("department")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" engineering\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TCP\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# port是暴露在cluster ip上的端口，:port提供了集群内部客户端访问service的入口")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认情况下，为了方便起见，`targetPort` 被设置为与 `port` 字段相同的值。")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nodePort 提供了集群外部客户端访问 Service 的一种方式")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nodePort 提供了集群外部客户端访问 Service 的端口，通过 nodeIP:nodePort 提供了外部流量访问k8s集群中service的入口。")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定绑定的node的端口(默认的取值范围是:30000-32767), 如果不指定，会默认分配")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodePort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32049")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# targetPort是pod上的端口")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("kubectl apply -f my-deployment-50000.yaml")]),s._v(" "),a("p",[s._v("kubectl get pods")]),s._v(" "),a("p",[s._v("kubectl apply -f my-np-service.yaml")]),s._v(" "),a("p",[s._v("kubectl get service my-np-service --output yaml")]),s._v(" "),a("p",[s._v("// 记下任意一个 EXTERNAL-IP，如 35.236.136.94 | 35.194.201.238 |  35.234.56.229\nkubectl get nodes --output wide")]),s._v(" "),a("p",[s._v("访问 EXTERNAL-IP:nodePort,三个节点的IP都可以访问成功")])])}),[],!1,null,null,null);t.default=n.exports}}]);