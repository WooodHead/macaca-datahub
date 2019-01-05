(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{170:function(t,a,_){"use strict";_.r(a);var v=_(0),e=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),_("p",[t._v("在前端和客户端(后面统一叫终端)研发过程中，环境问题一直困扰着我们，缺乏数据或数据管理不善都会导致研发整体效率低下。在面对这一问题的过程中，有很多优秀的 Mock 方案诞生，以平台和本地工具居多。")]),t._v(" "),_("p",[t._v("在面对这些问题的时候，我们认为核心点主要有三方面，数据源问题、场景问题、生命周期问题。拥有稳定的、有可迭代能力的数据源是项目研发的关键，数据源实际上就是一个个服务端接口，而大多接口都是有种状态的，此时我们还需要解决场景管理的问题。另外，随着研发流程进行我们通常会进入日常联调、集成测试、灰度发布等周期，所以数据的提供应该始终是一个持续过程。")]),t._v(" "),_("h2",{attrs:{id:"数据源问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据源问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据源问题")]),t._v(" "),_("p",[t._v("研发期数据缺失，终端同学与服务端根据产品需求，或者已有服务，约定业务交互字段。此时终端同学会根据业务字段创建可以用来 "),_("code",[t._v("Mock")]),t._v(" 的数据，数据源需要满足如下几个原则：")]),t._v(" "),_("ul",[_("li",[t._v("标准化：由于终端几乎都基于同一层面的数据协议，各业务在数据交互上的通用性足以满足统一的要求，这里杜绝的个性化引入数据源而增加学习成本和 backup 成本")]),t._v(" "),_("li",[t._v("非侵入：数据源注入不侵入业务代码本身，也就是说业务逻辑的代码不会感知数据来自哪里")]),t._v(" "),_("li",[t._v("去中心：无中心服务依赖，工程本地即有数据备份，任何人可离线开发")])]),t._v(" "),_("h2",{attrs:{id:"场景问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#场景问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 场景问题")]),t._v(" "),_("p",[t._v("在面向复杂业务时，最常讲到的就是场景问题，除富交互编辑器一类的业务外，展示型业务的复杂往往意味着场景多，场景组合情况多，业务流转过程中分支多。组合场景的情况很容易遗漏关键场景，而且不好管理。一旦多人交叉协同时，前后交互字段有调整导致信息流反复，追溯成本变高。")]),t._v(" "),_("ul",[_("li",[t._v("可管理：场景数据需要可维护和管理，支持场景数据的语义化和基本的增删改")]),t._v(" "),_("li",[t._v("版本化：场景数据需要与业务逻辑一样，具备可版本化能力，场景数据以明文形式在当前工程中集成")])]),t._v(" "),_("h2",{attrs:{id:"生命周期问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生命周期问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 生命周期问题")]),t._v(" "),_("p",[t._v("研发期的数据相对好解决，但从研发全环节覆盖的视角看待这个问题时，需要考虑"),_("code",[t._v("后续")]),t._v("的问题才能从整体上解决。")]),t._v(" "),_("ul",[_("li",[t._v("可迭代：场景数据可以随项目通过 Git timeline 管理，并作为交付必要部分")]),t._v(" "),_("li",[t._v("一致性：数据源应该由上一个周期延续，并在系统集成测试时对接真实数据源")]),t._v(" "),_("li",[t._v("文档化：一致性使得接口文档维护不再散乱、滞后，接口文档自动生成并保持迭代能力是最优解")]),t._v(" "),_("li",[t._v("可测试：无论是进行交付前的函数单元测试、UI 单元测试，还是测试期的系统集成测试都需要依赖可组合数据源，集成测试阶段稳定性要求高，需要数据源服务对外围服务做屏蔽")])]),t._v(" "),_("h2",{attrs:{id:"其它问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其它问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 其它问题")]),t._v(" "),_("ul",[_("li",[t._v("录入成本：数据源人工初次录入成本较高，尤其是在联调期应该支持由请求快照自动录入")]),t._v(" "),_("li",[t._v("问题排查：生产环境应该支持切换数据源，支持代理和快照记录")])]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("根据上面的痛点问题和几项原则，蚂蚁国际无线同学设计并实现面向研发全周期的数据环境方案 - DataHub，具备可持续和去中心化等特点。")]),t._v(" "),_("blockquote",[_("p",[t._v("DataHub - Continuous data provider for development, testing, staging and production.")])])])}],!1,null,null,null);e.options.__file="introduction.md";a.default=e.exports}}]);