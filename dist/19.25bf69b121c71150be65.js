(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/cdV":function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),u=function(){},o=e("A7o+"),a=e("ZYCi"),i=function(){function n(n,l){var e=this;this.translate=n,this.router=l,this.pushRightClass="push-right",this.translate.addLangs(["en","fr","ur","es","it","fa","de","zh-CHS"]),this.translate.setDefaultLang("en");var t=this.translate.getBrowserLang();this.translate.use(t.match(/en|fr|ur|es|it|fa|de|zh-CHS/)?t:"en"),this.router.events.subscribe(function(n){n instanceof a.d&&window.innerWidth<=992&&e.isToggled()&&e.toggleSidebar()})}return n.prototype.ngOnInit=function(){},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n.prototype.changeLang=function(n){this.translate.use(n)},n}(),r=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]{background-color:#222}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#999}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]{width:300px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:5px 10px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;font-weight:600}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{font-size:12px;margin:0}"]],data:{}});function d(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"nav",[["class","navbar navbar-expand-lg fixed-top"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(n()(),t["\u0275ted"](2,null,[""," "])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](4,0,null,null,2,"button",[["class","navbar-toggler"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toggleSidebar()&&t),t},null,null)),(n()(),t["\u0275eld"](5,0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-bars text-muted"]],null,null,null,null,null)),(n()(),t["\u0275eld"](7,0,null,null,1,"div",[["class","collapse navbar-collapse"]],null,null,null,null,null)),(n()(),t["\u0275eld"](8,0,null,null,0,"ul",[["class","navbar-nav ml-auto"]],null,null,null,null,null))],null,function(n,l){n(l,2,0,t["\u0275unv"](l,2,0,t["\u0275nov"](l,3).transform("Help For Corona")))})}var s=e("Ip0R"),c=function(){function n(n,l){var e=this;this.translate=n,this.router=l,this.isActive=!1,this.showMenu="",this.showMenuInterview="",this.pushRightClass="push-right",this.translate.addLangs(["en","fr","ur","es","it","fa","de"]),this.translate.setDefaultLang("en");var t=this.translate.getBrowserLang();this.translate.use(t.match(/en|fr|ur|es|it|fa|de/)?t:"en"),this.router.events.subscribe(function(n){n instanceof a.d&&window.innerWidth<=992&&e.isToggled()&&e.toggleSidebar()})}return n.prototype.eventCalled=function(){this.isActive=!this.isActive},n.prototype.addExpandClass=function(n){this.showMenu=n===this.showMenu?"0":n},n.prototype.addExpandClassInterview=function(n){this.showMenuInterview=n===this.showMenuInterview?"0":n},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.changeLang=function(n){this.translate.use(n)},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n}(),g=t["\u0275crt"]({encapsulation:0,styles:[[".sidebar[_ngcontent-%COMP%]{border-radius:0;position:fixed;z-index:1000;top:56px;left:235px;width:235px;margin-left:-235px;border:none;overflow-y:auto;background-color:#222;bottom:0;overflow-x:hidden;padding-bottom:40px;transition:all .2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#222;border:0;border-radius:0;color:#999;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]{padding-top:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%]:first-child{border-top:1px solid rgba(255,255,255,.2)}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#222}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:1rem 1.5rem .75rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:0;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#151515}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radious:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#222;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#151515}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar[_ngcontent-%COMP%]{top:54px;left:0}}@media print{.sidebar[_ngcontent-%COMP%]{display:none!important}}@media (min-width:992px){.header-fields[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0 #fff;border-radius:3px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:3px;-webkit-box-shadow:inset 0 0 3px #fff}"]],data:{}});function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,97,"nav",[["class","sidebar"]],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,s.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](2,{sidebarPushRight:0}),(n()(),t["\u0275eld"](3,0,null,null,94,"div",[["class","list-group"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,18,"div",[["class","nested-menu"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,4,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.addExpandClass("pages")&&t),t},null,null)),(n()(),t["\u0275eld"](6,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](7,0,null,null,0,"i",[["class","fa fa-info-circle"]],null,null,null,null,null)),(n()(),t["\u0275ted"](8,null,["\xa0 ",""])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](10,0,null,null,12,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(n()(),t["\u0275eld"](11,0,null,null,11,"ul",[["class","submenu"]],null,null,null,null,null)),(n()(),t["\u0275eld"](12,0,null,null,10,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](13,0,null,null,9,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t["\u0275nov"](n,14).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](14,671744,[[2,4]],0,a.n,[a.l,a.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](15,1),t["\u0275did"](16,1720320,null,2,a.m,[a.l,t.ElementRef,t.Renderer2,t.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,1,{links:1}),t["\u0275qud"](603979776,2,{linksWithHrefs:1}),t["\u0275pad"](19,1),(n()(),t["\u0275eld"](20,0,null,null,0,"i",[["class","fa fa-fw fa-table"]],null,null,null,null,null)),(n()(),t["\u0275ted"](21,null,["\xa0"," "])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](23,0,null,null,74,"div",[["class","header-fields"]],null,null,null,null,null)),(n()(),t["\u0275eld"](24,0,null,null,3,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.rltAndLtr()&&t),t},null,null)),(n()(),t["\u0275eld"](25,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](26,0,null,null,0,"i",[["class","fa fa-arrows-h"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\xa0 RTL/LTR"])),(n()(),t["\u0275eld"](28,0,null,null,36,"div",[["class","nested-menu"]],null,null,null,null,null)),(n()(),t["\u0275eld"](29,0,null,null,5,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.addExpandClass("languages")&&t),t},null,null)),(n()(),t["\u0275eld"](30,0,null,null,4,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](31,0,null,null,0,"i",[["class","fa fa-language"]],null,null,null,null,null)),(n()(),t["\u0275ted"](32,null,["\xa0 "," "])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](34,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(n()(),t["\u0275eld"](35,0,null,null,29,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(n()(),t["\u0275eld"](36,0,null,null,28,"ul",[["class","submenu"]],null,null,null,null,null)),(n()(),t["\u0275eld"](37,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](38,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.changeLang("en")&&t),t},null,null)),(n()(),t["\u0275ted"](39,null,[" "," "])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](41,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](42,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.changeLang("fr")&&t),t},null,null)),(n()(),t["\u0275ted"](43,null,[" "," "])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](45,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](46,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.changeLang("ur")&&t),t},null,null)),(n()(),t["\u0275ted"](47,null,[" "," "])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](49,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](50,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.changeLang("es")&&t),t},null,null)),(n()(),t["\u0275ted"](51,null,[" "," "])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](53,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](54,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.changeLang("it")&&t),t},null,null)),(n()(),t["\u0275ted"](55,null,[" "," "])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](57,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](58,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.changeLang("fa")&&t),t},null,null)),(n()(),t["\u0275ted"](59,null,[" "," "])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](61,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](62,0,null,null,2,"a",[["href","javascript:void(0)"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.changeLang("de")&&t),t},null,null)),(n()(),t["\u0275ted"](63,null,[" "," "])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](65,0,null,null,32,"div",[["class","nested-menu"]],null,null,null,null,null)),(n()(),t["\u0275eld"](66,0,null,null,3,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.addExpandClass("profile")&&t),t},null,null)),(n()(),t["\u0275eld"](67,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](68,0,null,null,0,"i",[["class","fa fa-user"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\xa0 John Smith"])),(n()(),t["\u0275eld"](70,0,null,null,27,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(n()(),t["\u0275eld"](71,0,null,null,26,"ul",[["class","submenu"]],null,null,null,null,null)),(n()(),t["\u0275eld"](72,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](73,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),t["\u0275eld"](74,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](75,0,null,null,0,"i",[["class","fa fa-fw fa-user"]],null,null,null,null,null)),(n()(),t["\u0275ted"](76,null,[" ",""])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](78,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](79,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),t["\u0275eld"](80,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](81,0,null,null,0,"i",[["class","fa fa-fw fa-envelope"]],null,null,null,null,null)),(n()(),t["\u0275ted"](82,null,[" ",""])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](84,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](85,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),t["\u0275eld"](86,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](87,0,null,null,0,"i",[["class","fa fa-fw fa-gear"]],null,null,null,null,null)),(n()(),t["\u0275ted"](88,null,[" ",""])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](90,0,null,null,7,"li",[],null,null,null,null,null)),(n()(),t["\u0275eld"](91,0,null,null,6,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var u=!0,o=n.component;return"click"===l&&(u=!1!==t["\u0275nov"](n,92).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),"click"===l&&(u=!1!==o.onLoggedout()&&u),u},null,null)),t["\u0275did"](92,671744,null,0,a.n,[a.l,a.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](93,1),(n()(),t["\u0275eld"](94,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),t["\u0275eld"](95,0,null,null,0,"i",[["class","fa fa-fw fa-power-off"]],null,null,null,null,null)),(n()(),t["\u0275ted"](96,null,[" ",""])),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef])],function(n,l){n(l,1,0,"sidebar",n(l,2,0,l.component.isActive)),n(l,14,0,n(l,15,0,"/information")),n(l,16,0,n(l,19,0,"router-link-active")),n(l,92,0,n(l,93,0,"/login"))},function(n,l){var e=l.component;n(l,8,0,t["\u0275unv"](l,8,0,t["\u0275nov"](l,9).transform("Corona"))),n(l,10,0,"pages"===e.showMenu),n(l,13,0,t["\u0275nov"](l,14).target,t["\u0275nov"](l,14).href),n(l,21,0,t["\u0275unv"](l,21,0,t["\u0275nov"](l,22).transform("Information"))),n(l,32,0,t["\u0275unv"](l,32,0,t["\u0275nov"](l,33).transform("Language"))),n(l,35,0,"languages"===e.showMenu),n(l,39,0,t["\u0275unv"](l,39,0,t["\u0275nov"](l,40).transform("English"))),n(l,43,0,t["\u0275unv"](l,43,0,t["\u0275nov"](l,44).transform("French"))),n(l,47,0,t["\u0275unv"](l,47,0,t["\u0275nov"](l,48).transform("Urdu"))),n(l,51,0,t["\u0275unv"](l,51,0,t["\u0275nov"](l,52).transform("Spanish"))),n(l,55,0,t["\u0275unv"](l,55,0,t["\u0275nov"](l,56).transform("Italian"))),n(l,59,0,t["\u0275unv"](l,59,0,t["\u0275nov"](l,60).transform("Farsi"))),n(l,63,0,t["\u0275unv"](l,63,0,t["\u0275nov"](l,64).transform("German"))),n(l,70,0,"profile"===e.showMenu),n(l,76,0,t["\u0275unv"](l,76,0,t["\u0275nov"](l,77).transform("Profile"))),n(l,82,0,t["\u0275unv"](l,82,0,t["\u0275nov"](l,83).transform("Inbox"))),n(l,88,0,t["\u0275unv"](l,88,0,t["\u0275nov"](l,89).transform("Settings"))),n(l,91,0,t["\u0275nov"](l,92).target,t["\u0275nov"](l,92).href),n(l,96,0,t["\u0275unv"](l,96,0,t["\u0275nov"](l,97).transform("Log Out")))})}var f=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),h=t["\u0275crt"]({encapsulation:0,styles:[[".main-container[_ngcontent-%COMP%]{margin-top:56px;margin-left:235px;padding:15px;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}@media print{.main-container[_ngcontent-%COMP%]{margin-top:0!important;margin-left:0!important}}"]],data:{}});function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,d,r)),t["\u0275did"](1,114688,null,0,i,[o.j,a.l],null,null),(n()(),t["\u0275eld"](2,0,null,null,1,"app-sidebar",[],null,null,null,p,g)),t["\u0275did"](3,49152,null,0,c,[o.j,a.l],null,null),(n()(),t["\u0275eld"](4,0,null,null,2,"section",[["class","main-container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](6,212992,null,0,a.p,[a.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(n,l){n(l,1,0),n(l,6,0)},null)}var m=t["\u0275ccf"]("app-layout",f,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-layout",[],null,null,null,C,h)),t["\u0275did"](1,114688,null,0,f,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),M=e("ebCm"),b=function(){},v=e("C9m0");e.d(l,"LayoutModuleNgFactory",function(){return _});var _=t["\u0275cmf"](u,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[m]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[t.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,M.a,M.a,[]),t["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),t["\u0275mpd"](1073742336,a.o,a.o,[[2,a.t],[2,a.l]]),t["\u0275mpd"](1073742336,b,b,[]),t["\u0275mpd"](1073742336,o.g,o.g,[]),t["\u0275mpd"](1073742336,v.a,v.a,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,a.j,function(){return[[{path:"",component:f,children:[{path:"",redirectTo:"information"},{path:"dashboard",loadChildren:"./dashboard/dashboard.module#DashboardModule"},{path:"charts",loadChildren:"./charts/charts.module#ChartsModule"},{path:"tables",loadChildren:"./tables/tables.module#TablesModule"},{path:"forms",loadChildren:"./form/form.module#FormModule"},{path:"bs-element",loadChildren:"./bs-element/bs-element.module#BsElementModule"},{path:"grid",loadChildren:"./grid/grid.module#GridModule"},{path:"components",loadChildren:"./bs-component/bs-component.module#BsComponentModule"},{path:"blank-page",loadChildren:"./blank-page/blank-page.module#BlankPageModule"},{path:"information",loadChildren:"./candidate/candidate.module#CandidateModule"},{path:"create-candidate",loadChildren:"./create-candidate/create-candidate.module#CreateCandidateModule"},{path:"create-interview",loadChildren:"./pop-up/pop-up/pop-up.module#PopUpModule"},{path:"status-info",loadChildren:"./info-dialog/info-dialog/info-dialog.module#InfoDialogModule"},{path:"candidate-details/:id",loadChildren:"./candidate-details/candidate-details.module#CandidateDetailsModule"}]}]]},[])])})}}]);