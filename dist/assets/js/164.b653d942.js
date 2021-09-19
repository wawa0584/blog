(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{600:function(e,r,o){"use strict";o.r(r);var c=o(30),n=Object(c.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("以下内容是网上收集的：自己加了点备注。")]),e._v(" "),o("h3",{attrs:{id:"docker的技术原理介绍"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker的技术原理介绍"}},[e._v("#")]),e._v(" Docker的技术原理介绍")]),e._v(" "),o("p",[e._v("Docker就是虚拟化的一种轻量级替代技术。Docker的容器技术不依赖任何语言、框架或系统，可以将App变成一种\n标准化的、可移植的、自管理的组件，并脱离服务器硬件在任何主流系统中开发、调试和运行。\n简单的说就是，在 Linux 系统上迅速创建一个容器（类似虚拟机）并在容器上部署和运行应用程序，并通过配置文件\n可以轻松实现应用程序的自动化安装、部署和升级，非常方便。因为使用了容器，所以可以很方便的把生产环境和开\n发环境分开，互不影响，这是 docker 最普遍的一个玩法。")]),e._v(" "),o("h2",{attrs:{id:"docker相关的核心技术之cgroups"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker相关的核心技术之cgroups"}},[e._v("#")]),e._v(" Docker相关的核心技术之cgroups")]),e._v(" "),o("p",[e._v("Linux系统中经常有个需求就是希望能限制某个或者某些进程的分配资源。于是就出现了cgroups的概念，\ncgroup就是controller group ，在这个group中，有分配好的特定比例的cpu时间，IO时间，可用内存大小等。\ncgroups是将任意进程进行分组化管理的Linux内核功能。最初由google的工程师提出，后来被整合进Linux内\n核中。\ncgroups中的 重要概念是“子系统”，也就是资源控制器，每种子系统就是一个资源的分配器，比如cpu子系\n统是控制cpu时间分配的。首先挂载子系统，然后才有control group的。比如先挂载memory子系统，然后在\nmemory子系统中创建一个cgroup节点，在这个节点中，将需要控制的进程id写入，并且将控制的属性写入，\n这就完成了内存的资源限制。\ncgroups 被Linux内核支持，有得天独厚的性能优势，发展势头迅猛。在很多领域可以取代虚拟化技术分割资源。\ncgroup默认有诸多资源组，可以限制几乎所有服务器上的资源：cpu mem iops,iobandwide,net,device acess等。")]),e._v(" "),o("h2",{attrs:{id:"docker相关的核心技术之lxc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker相关的核心技术之lxc"}},[e._v("#")]),e._v(" Docker相关的核心技术之LXC")]),e._v(" "),o("p",[e._v("LXC是Linux containers的简称，是一种基于容器的操作系统层级的虚拟化技术。借助于namespace的隔离机制\n和cgroup限额功能，LXC提供了一套统一的API和工具来建立和管理container。LXC跟其他操作系统层次的虚\n拟化技术相比，最大的优势在于LXC被整合进内核，不用单独为内核打补丁")]),e._v(" "),o("p",[e._v("LXC 旨在提供一个共享kernel的 OS 级虚拟化方法，在执行时不用重复加载Kernel, 且container的kernel与host\n共享，因此可以大大加快 container 的启动过程，并显著减少内存消耗，容器在提供隔离的同时，还通过共享这\n些资源节省开销，这意味着容器比真正的虚拟化的开销要小得多。 在实际测试中，基于LXC的虚拟化方法的IO和\nCPU性能几乎接近 baremetal 的性能。")]),e._v(" "),o("blockquote",[o("p",[e._v("备注：最初实现是基于 LXC，从 0.7 版本以后开始去除 LXC，转而使用自行开发的 libcontainer，从 1.11 开始，则进一步演进为使用 runC 和 containerd。")])]),e._v(" "),o("p",[e._v("虽然容器所使用的这种类型的隔离总的来说非常强大，然而是不是像运行在hypervisor上的虚拟机那么强壮仍具有\n争议性。如果内核停止，那么所有的容器就会停止运行。\n• 性能方面：LXC>>KVM>>XEN\n• 内存利用率：LXC>>KVM>>XEN\n• 隔离程度： XEN>>KVM>>LXC")]),e._v(" "),o("blockquote",[o("p",[e._v("备注：XEN，KVM有些同学对这个名词不会陌生，所谓虚拟主机，就是采用了这个技术，在一台物理主机上面，采用这种技术再划分N多台虚拟主机去售卖。可以搜下KVM或XEN虚拟主机。")])]),e._v(" "),o("h2",{attrs:{id:"docker相关的核心技术之aufs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker相关的核心技术之aufs"}},[e._v("#")]),e._v(" Docker相关的核心技术之AUFS")]),e._v(" "),o("p",[e._v("什么是AUFS?  AuFS是一个能透明覆盖一或多个现有文件系统的层状文件系统。 支持将不同目录挂载到同一\n个虚拟文件系统下，可以把不同的目录联合在一起，组成一个单一的目录。这种是一种虚拟的文件系统，文\n件系统不用格式化，直接挂载即可。\nDocker 一直在用 AuFS 作为容器的文件系统(注意：目前好像不是这样的)。当一个进程需要修改一个文件时，AuFS 创建该文件的一个副本。\nAuFS 可以把多层合并成文件系统的单层表示。这个过程称为写入复制（ copy on write ）。\nAuFS 允许Docker把某些镜像作为容器的基础。例如，你可能有一个可以作为很多不同容器的基础的CentOS\n系统镜像。多亏 AuFS，只要一个CentOS镜像的副本就够了，这样既节省了存储和内存，也保证更快速的容\n器部署。\n使用AuFS的另一个好处是Docker的版本容器镜像能力。每个新版本都是一个与之前版本的简单差异改动，\n有效地保持镜像文件最小化。但，这也意味着你总是要有一个记录该容器从一个版本到另一个版本改动的\n审计跟踪。")]),e._v(" "),o("h2",{attrs:{id:"docker原理之app打包"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker原理之app打包"}},[e._v("#")]),e._v(" Docker原理之App打包")]),e._v(" "),o("p",[e._v("LXC的基础上, Docker额外提供的Feature包括：标准统一的\n打包部署运行方案。\n为了最大化重用Image，加快运行速度，减少内存和磁盘footprint, Docker container运行时所构造的运行环境，实际上是由具有依赖关系的多个Layer组成的。例如一个apache的运行环境可能是在基础的rootfs image的基础上，叠加了包含例如Emacs等各种工具的image，再叠加包含apache及其相关依赖library的image，这些image由AUFS文件系统加载合并到统一路径中，以只读的方式存在，最后再叠加加载一层可写的空白的Layer用作记录对当前运行环境所作的修改。\n有了层级化的Image做基础，理想中，不同的APP就可以既可能的共用底层文件系统，相关依赖工具等，同一个APP的不同实例也可以实现共用绝大多数数据，进而以copy on write的形式维护自己的那一份修改过的数据等。")]),e._v(" "),o("blockquote",[o("p",[e._v("备注：简单说Docker是基于Linux的虚拟化技术，又加入了image，Dockerfile等概念。又整了个类似github的docker hub。等发展起来了自己的生态系统。Docker本身提供的命令非常简单，Dockerfile，Docker compose又便于学习及运用，这是Docker火起来的一大原因。")])]),e._v(" "),o("h2",{attrs:{id:"docker和传统虚拟化方式的不同之处"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker和传统虚拟化方式的不同之处"}},[e._v("#")]),e._v(" Docker和传统虚拟化方式的不同之处")]),e._v(" "),o("p",[e._v("传统虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统，在该系统上再运行所需应用进程；而容器内的应用进程直接运行于宿主的内核，容器内没有自己的内核，而且也没有进行硬件虚拟。因此容器要比传统虚拟机更为轻便。")]),e._v(" "),o("p",[e._v("参考：https://yeasy.gitbooks.io/docker_practice/content/introduction/what.html")])])}),[],!1,null,null,null);r.default=n.exports}}]);