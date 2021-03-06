原文：https://www.cnblogs.com/powertoolsteam/p/15155422.html

k8s的总览结构图

![](https://pek3b.qingstor.com/hexo-blog/hexo-blog/20210818104845.png)

可以看到图中提到的这些功能模块中，还有一些是在本文中并没有出现的：

## ConfigMap

用来存储用户配置文件定义的，通过其内部的Volume投射技术实现，其实也是Volume挂载的一种方式。这种方式不仅可以实现应用程序被的复用，而且还可以通过不同的配置实现更灵活的功能。在创建容器时，用户可以将应用程序打包为容器镜像后，通过环境变量或者外接挂载文件的方式进行配置注入。

##  Secret

Secret 对象类型用来保存敏感信息，例如密码、OAuth 令牌和 SSH 密钥。 将这些信息放在Secret中比放在 Pod 的定义、容器镜像中、相对于ConfigMap说更加安全和灵活。 Secret是标准的k8s资源对象，使用方法和ConfigMap非常类似。同时我们可以对Secret进行访问控制，防止机密数据被访问

## PV

PVC是Kubernetes中持久化数据卷的实现方式，它是StatefulSet的核心功能，也是Pod持久化的必要手段，Kubernetes通过PV和PVC拆分，从而达到功能点的解耦。

除了文中提到的内容之外， Kubernetes集群的内容也远比我们目前看到的复杂的多，也还有很多内容等待着我们探索。

在这里，我们对这些深层次的功能做一个总结，也是一个对深入学习Kubernetes的梳理。

## Kubernetes组件
我们平时做开发的过程中所使用的服务器（即宿主机），在Kubernetes集群中被称为Node节点。

同时在Kubernetes中存在一个或者多个Master节点控制多个宿主机实现集群，整个Kubernetes的核心调度功能基本都在Master节点上。

Kubernetes的主要功能通过五个大组件组成：

* kubelet：安装在Node节点上，用以控制Node节点中的容器完成Kubernetes的调度逻辑
* ControllerManager：是我们上述所讲的控制器模式的核心管理组件，管理了所有Kubernetes集群中的控制器逻辑
* API Server：服务处理集群中的api请求，我们一直写的kubectl，其实就是发送给API Server的请求，请求会在其内部进行处理和转发
* Scheduler：负责Kubernetes的服务调度，比如控制器只是控制Pod的编排，最后的调度逻辑是由Scheduler所完成并且发送请求给kubelet执行的
* Etcd：这是一个分布式的数据库存储项目，由CoreOS开发，最终被RedHat收购成为Kubernetes的一部分，它里面保存了Kubernetes集群中的所有配置信息，比如所有集群对象的name，IP，secret，configMap等所有数据，其依靠自己的一致性算法可以保证在系统中快速稳定的返回各种配置信息，因此这也是Kubernetes和心中的核心组件

## 定制化功能
除了各种强大的组件功能之外，Kubernetes也给用户提供了极高的自由度。

为了实现这种高度的自由，Kubernetes给用户提供了三个公开的接口，分别是：

* CNI（Container Networking Interface，容器网络接口）：其定义了Kubernetes集群所有网络的链接方式，整个集群的网络都通过这个接口实现。只要实现了这个接口内所有功能的网络插件，就可以作为Kubernetes集群的网络配置插件，其内部包括宿主机路由表配置、7层网络发现、数据包转发等等都有各式各样的小插件，这些小插件还可以随意配合使用，用户可以按照自己的需求自由定制化这些功能
* CSI（Container Storage Interface，容器存储接口）定义了集群持久化的一些规范，只要是实现这个接口的存储功能，就可以作为Kubernetes的持久化插件
* CRI（Container Runtime Interface，容器运行时接口）：在Kubernetes的容器运行时，比如默认配置的Docker在这个集群的容器运行时，用户可以自由选择实现了这个接口的其他任意容器项目，比如之前提到过的containerd和rkt

这里讲一个有趣的点：CRI。

Kubernetes的默认容器是Docker，但是由于项目初期的竞争关系，Docker其实并不满足Kubernetes所定义的CRI规范，那怎么办呢？

为了解决这个问题，Kubernetes专门为Docker编写了一个叫DockerShim的组件，即Docker垫片，用来把CRI请求规范，转换成为Docker操作Linux的OCI规范（对，就是第二部分提到的那个OCI基金会的那个规范）。但是这个功能一直是由Kubernetes项目维护的，只要Docker发布了新的功能Kubernetes就要维护这个DockerShim组件。

于是，这个近期的消息——Kubernetes将在明年的版本v1.20中删除删除DockerShim组件，意味着从明年的新版本开始，Kubernetes将全面不支持Docker容器的更新了。

但其实这对我们普通开发者来说可能并没有什么影响，最坏的结果就是我们的镜像需要从Docker换成其他Kubernetes支持的容器镜像。

不过根据这这段时间各个云平台放出的消息来看，这些平台都会提供对应的转换措施，比如我们还是提供Docker镜像，平台在发布运维的时候会把这些镜像转换成其他镜像；又或者这些平台会自行维护一个DockerShim来支持Docker，都是有解决方案的。

## 架构总览与总结
这一部分我们来看看Kubernetes的架构图：

![](https://pek3b.qingstor.com/hexo-blog/hexo-blog/20210818105315.png)

通过这一系列的学习，作为一个普通程序员，不得不赞叹Google对编码这件事得深厚与极致，框架中因为太多仅因为解耦而产生的组件，并且还提供了这么大的自由度，不得不说是我们活字格开发团队学习过程中遇到的一个很有技术深度的框架。

但这种过高的自由度也有负面作用。

在部署过程中，Kubernetes集群的复杂度非常高，部署一个满足生产环境需求的Kubernetes框架更是难上加难，网上还有专门卖Kubernetes生产环境集群部署的脚本程序，可见Kubernetes系统的庞大。

在学习的过程中可以使用kinD或者minikube在本地以Docker的形式模拟一个Kubernetes集群，但是这种程度的学习距离生产环境还是有一定的差距。


