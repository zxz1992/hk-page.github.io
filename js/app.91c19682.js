(function(t){function e(e){for(var i,l,r=e[0],c=e[1],o=e[2],m=0,p=[];m<r.length;m++)l=r[m],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&p.push(s[l][0]),s[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);h&&h(e);while(p.length)p.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},s={app:0},n=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/hk-page.github.io/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var h=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2df4":function(t,e,a){},"32f3":function(t,e,a){},3539:function(t,e,a){"use strict";a("d806")},4247:function(t,e,a){},"44f1":function(t,e,a){"use strict";a("2df4")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i,s,n=a("2b0e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"app-box"},[a("el-aside",{staticClass:"aside-box",attrs:{width:"280px"}},[a("div",{staticClass:"aside-content"},[a("div",{staticClass:"logo-box"},[a("el-image",{staticStyle:{width:"124px",height:"31px"},attrs:{fit:"cover",src:t.$imgPath+"logo.png"}})],1),a("div",{staticClass:"side-box"},[a("sidebar")],1)])]),a("el-container",{staticClass:"container-box"},[a("el-header",{staticClass:"header-box",attrs:{height:"96px"}},[a("navbar")],1),a("el-main",{staticClass:"main-box"},[a("appmain")],1)],1)],1)},r=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-box"},[a("el-scrollbar",{staticStyle:{height:"100%"}},[a("el-menu",{attrs:{"background-color":"#212121","text-color":"#8F8F8F","active-text-color":"#0CC9EB","collapse-transition":!1,"unique-opened":!0,mode:"vertical"}},t._l(t.sidebarRouters,(function(t){return a("sidebar-item",{key:t.path,attrs:{item:t,"base-path":t.path}})})),1)],1)],1)},o=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu-wrapper"},[!t.hasOneShowingChild(t.item.children,t.item)||t.onlyOneChild.children&&!t.onlyOneChild.noShowingChildren||t.item.alwaysShow?a("el-submenu",{ref:"subMenu",attrs:{index:t.resolvePath(t.item.path),"popper-append-to-body":""}},[a("template",{slot:"title"},[t.item.meta?a("item",{attrs:{icon:t.item.meta&&t.item.meta.icon,activeIcon:t.item.meta&&t.item.meta.activeIcon,title:t.item.meta.title}}):t._e()],1),t._l(t.item.children,(function(e){return a("sidebar-item",{key:e.path,staticClass:"nest-menu",attrs:{"is-nest":!0,item:e,"base-path":t.resolvePath(e.path)}})}))],2):[t.onlyOneChild.meta?a("app-link",{attrs:{to:t.resolvePath(t.onlyOneChild.path)}},[a("el-menu-item",{class:{"submenu-title-noDropdown":!t.isNest},attrs:{index:t.resolvePath(t.onlyOneChild.path)}},[a("item",{attrs:{icon:t.onlyOneChild.meta.icon||t.item.meta&&t.item.meta.icon,activeIcon:t.onlyOneChild.meta.activeIcon||t.item.meta&&t.item.meta.activeIcon,title:t.onlyOneChild.meta.title}})],1)],1):t._e()]],2)},m=[],p=a("5530"),u=(a("4de4"),a("df7c")),d=a.n(u),v={name:"MenuItem",functional:!0,props:{icon:{type:String,default:""},activeIcon:{type:String,default:""},title:{type:String,default:""}},render:function(t,e){var a=e.props,i=a.icon,s=a.title,n=a.activeIcon,l=[];return i&&l.push(t("el-image",{attrs:{fit:"cover",src:i},style:"width:19px;height:19px;margin-right:10px"})),n&&l.push(t("el-image",{class:"active",attrs:{fit:"cover",src:n},style:"width:19px;height:19px;margin-right:10px"})),s&&l.push(t("span",{slot:"title"},[s])),l}},g=v,f=a("2877"),b=Object(f["a"])(g,i,s,!1,null,null,null),C=b.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("component",t._b({},"component",t.linkProps(t.to),!1),[t._t("default")],2)},y=[],_={props:{to:{type:String,required:!0}},methods:{isExternal:function(t){return/^(https?:|mailto:|tel:)/.test(t)},linkProps:function(t){return{is:"a",href:t,rel:"noopener"}}}},P=_,w=Object(f["a"])(P,x,y,!1,null,null,null),S=w.exports,O={name:"SidebarItem",components:{Item:C,AppLink:S},props:{item:{type:Object,required:!0},isNest:{type:Boolean,default:!1},basePath:{type:String,default:""}},methods:{isExternal:function(t){return/^(https?:|mailto:|tel:)/.test(t)},hasOneShowingChild:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,i=e.filter((function(e){return!e.hidden&&(t.onlyOneChild=e,!0)}));return 1===i.length||0===i.length&&(this.onlyOneChild=Object(p["a"])(Object(p["a"])({},a),{},{path:"",noShowingChildren:!0}),!0)},resolvePath:function(t){return this.isExternal(t)?t:this.isExternal(this.basePath)?this.basePath:d.a.resolve(this.basePath,t)}}},z=O,I=Object(f["a"])(z,h,m,!1,null,null,null),$=I.exports,E={components:{SidebarItem:$},data:function(){return{sidebarRouters:[{path:"/#/1",meta:{title:"Home",icon:this.$imgPath+"a1.svg",activeIcon:this.$imgPath+"a.svg"},children:[{path:"/#/1-1",meta:{title:"3D Assets"},children:[{path:"/#/1-1-1",meta:{title:"Food"},children:[{path:"/#/1-1-1-1",meta:{title:"Balcone"}},{path:"/#/1-1-1-2",meta:{title:"Beam"}},{path:"/#/1-1-1-3",meta:{title:"Combined"}},{path:"/#/1-1-1-4",meta:{title:"Door"}},{path:"/#/1-1-1-5",meta:{title:"Pillar"}},{path:"/#/1-1-1-6",meta:{title:"Railling"}},{path:"/#/1-1-1-7",meta:{title:"Relief"}}]},{path:"/#/1-1-2",meta:{title:"Historical"},children:[{path:"/#/1-1-2-1",meta:{title:"Balcone"}},{path:"/#/1-1-2-2",meta:{title:"Balcone1"}}]},{path:"/#/1-1-3",meta:{title:"Historical"},children:[{path:"/#/1-1-2-1",meta:{title:"Balcone"}},{path:"/#/1-1-2-2",meta:{title:"Balcone1"}}]},{path:"/#/1-1-4",meta:{title:"Insdutrial"},children:[{path:"/#/1-1-2-1",meta:{title:"Balcone"}},{path:"/#/1-1-2-2",meta:{title:"Balcone1"}}]},{path:"/#/1-1-5",meta:{title:"Interior"},children:[{path:"/#/1-1-2-1",meta:{title:"Balcone"}},{path:"/#/1-1-2-2",meta:{title:"Balcone1"}}]},{path:"/#/1-1-6",meta:{title:"Nature"},children:[{path:"/#/1-1-2-1",meta:{title:"Balcone"}},{path:"/#/1-1-2-2",meta:{title:"Balcone1"}}]},{path:"/#/1-1-7",meta:{title:"Props"},children:[{path:"/#/1-1-2-1",meta:{title:"Balcone"}},{path:"/#/1-1-2-2",meta:{title:"Balcone1"}}]}]}]},{path:"/#/2",meta:{title:"MetaHumans",icon:this.$imgPath+"b1.svg",activeIcon:this.$imgPath+"b.svg"},children:[{path:"/#/zxz1",meta:{title:"zxz1"}},{path:"/#/zxz2",meta:{title:"zxz2"}}]},{path:"/#/3",meta:{title:"Collections ",icon:this.$imgPath+"c1.svg",activeIcon:this.$imgPath+"c.svg"},children:[{path:"/#/zxz1",meta:{title:"zxz1"}},{path:"/#/zxz2",meta:{title:"zxz2"}}]},{path:"/#/4",meta:{title:"MetaHumans",icon:this.$imgPath+"d1.svg",activeIcon:this.$imgPath+"d.svg"},children:[{path:"/#/zxz1",meta:{title:"zxz1"}},{path:"/#/zxz2",meta:{title:"zxz2"}}]}]}}},j=E,B=(a("d364"),Object(f["a"])(j,c,o,!1,null,"7c7190e7",null)),A=B.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-box"},[a("div",{staticClass:"search-box"},[a("input",{attrs:{type:"text"}}),a("i",{staticClass:"el-icon-search"})]),a("div",{staticClass:"btn"},[t._v(" SUBSCRIBE ")]),a("div",{staticClass:"btn"},[t._v(" Sign In ")]),a("div",{staticClass:"nav-list"},[a("div",{staticClass:"nav-item"},[t._v(" All Types "),a("i",{staticClass:"el-icon-arrow-down"})]),a("div",{staticClass:"nav-item"},[t._v(" All Sizes "),a("i",{staticClass:"el-icon-arrow-down"})]),a("div",{staticClass:"nav-item"},[t._v(" All States "),a("i",{staticClass:"el-icon-arrow-down"})]),a("div",{staticClass:"nav-item"},[t._v(" All Environments "),a("i",{staticClass:"el-icon-arrow-down"})]),a("div",{staticClass:"nav-item"},[t._v(" All Colors "),a("i",{staticClass:"el-icon-arrow-down"})])])])}],T=(a("ee9a"),{}),N=Object(f["a"])(T,k,D,!1,null,"26f57da8",null),F=N.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"appmain-box"},[a("el-scrollbar",{staticStyle:{height:"100%"}},[a("div",{staticClass:"banner-box"},[a("el-image",{staticClass:"banner-img",attrs:{fit:"cover",src:t.$imgPath+"bg.png"}}),a("div",{staticClass:"content-box"},[a("div",{staticClass:"c-1"},[t._v("August 31, 2021")]),a("div",{staticClass:"c-2"},[t._v("GRAFFITI")]),a("div",{staticClass:"c-3"},[t._v("Tastefully tag urban alleyways and leave your mark with this collection of decals.")])])],1),a("div",{staticClass:"btn-list"},[a("div",{staticClass:"btn"},[a("el-image",{staticClass:"btn-img",attrs:{fit:"cover",src:t.$imgPath+"e1.png"}}),a("el-image",{staticClass:"btn-img active",attrs:{fit:"cover",src:t.$imgPath+"e.png"}}),a("div",{staticClass:"b-1"},[t._v("WOODEN PLANKS")]),a("div",{staticClass:"b-2"},[t._v("August 10, 2021")])],1),a("div",{staticClass:"btn"},[a("el-image",{staticClass:"btn-img",attrs:{fit:"cover",src:t.$imgPath+"f1.png"}}),a("el-image",{staticClass:"btn-img active",attrs:{fit:"cover",src:t.$imgPath+"f.png"}}),a("div",{staticClass:"b-1"},[t._v("WEEDS")]),a("div",{staticClass:"b-2"},[t._v("August 10, 2021")])],1),a("div",{staticClass:"btn"},[a("el-image",{staticClass:"btn-img",attrs:{fit:"cover",src:t.$imgPath+"e1.png"}}),a("el-image",{staticClass:"btn-img active",attrs:{fit:"cover",src:t.$imgPath+"e.png"}}),a("div",{staticClass:"b-1"},[t._v("MIDDLE EASTERN FLOORS")]),a("div",{staticClass:"b-2"},[t._v("August 10, 2021")])],1)]),a("div",{staticClass:"select-list"},[a("div",{staticClass:"select-item"},[t._v(" New Surfaces ")]),a("div",{staticClass:"select-item"},[t._v(" New 3D Models ")]),a("div",{staticClass:"select-item"},[t._v(" New 3D Plants ")]),a("div",{staticClass:"more-box"},[t._v("more "),a("i",{staticClass:"el-icon-arrow-right"})])]),a("div",{staticClass:"t-0"},[a("div",{staticClass:"t-1"},[a("imgItem",{attrs:{text:"Collections",src:t.$imgPath+"bg.png",size:"30px"}})],1),a("div",{staticClass:"t-2"},[a("div",{staticClass:"t-2-s"},t._l(6,(function(e){return a("div",{key:e,staticClass:"t-3"},[a("imgItem",{attrs:{text:"Dry Fallen Leaves",src:t.$imgPath+"bg.png",size:"14px"}})],1)})),0)])]),a("h2",[t._v("TRENDING ASSET")]),a("div",{staticClass:"carousel-box"},[a("el-carousel",{attrs:{interval:4e5,type:"card",height:"730px","indicator-position":"none"}},t._l(6,(function(e){return a("el-carousel-item",{key:e},[a("imgItem",{attrs:{text:"Dry Fallen Leaves",src:t.$imgPath+"bg.png",size:"24px"}})],1)})),1)],1),a("h2",[t._v("LATEST ASSETS")]),a("div",{staticClass:"btm-box"},t._l(40,(function(e){return a("div",{key:e,staticClass:"btm-item"},[a("imgItem",{attrs:{text:"Dry Fallen Leaves",src:t.$imgPath+"bg.png",size:"14px"}})],1)})),0)])],1)},R=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"imgItem-box"},[a("div",{staticClass:"img-box"},[a("el-image",{staticClass:"imgItem-img",attrs:{fit:"cover",src:t.src}}),a("div",{staticClass:"text-box",style:"font-size:"+t.size},[t._v(t._s(t.text))])],1)])},H=[],q={props:{src:{type:String,default:""},text:{type:String,default:""},size:{type:String,default:""}}},G=q,J=(a("44f1"),Object(f["a"])(G,L,H,!1,null,"08aabf1c",null)),W=J.exports,K={components:{imgItem:W}},U=K,Q=(a("b4d8"),Object(f["a"])(U,M,R,!1,null,"184315bd",null)),V=Q.exports,X={components:{sidebar:A,navbar:F,appmain:V}},Y=X,Z=(a("3539"),Object(f["a"])(Y,l,r,!1,null,"6d75d4fb",null)),tt=Z.exports,et=(a("944d"),a("5c96")),at=a.n(et);n["default"].config.productionTip=!1,n["default"].use(at.a),n["default"].prototype.$imgPath="/hk-page.github.io/img/",new n["default"]({render:function(t){return t(tt)}}).$mount("#app")},"8b39":function(t,e,a){},"944d":function(t,e,a){},b4d8:function(t,e,a){"use strict";a("8b39")},d364:function(t,e,a){"use strict";a("4247")},d806:function(t,e,a){},ee9a:function(t,e,a){"use strict";a("32f3")}});
//# sourceMappingURL=app.91c19682.js.map