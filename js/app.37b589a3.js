(function(t){function n(n){for(var o,i,a=n[0],c=n[1],u=n[2],l=0,d=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(n);while(d.length)d.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],o=!0,i=1;i<e.length;i++){var a=e[i];0!==s[a]&&(o=!1)}o&&(r.splice(n--,1),t=c(c.s=e[0]))}return t}var o={},i={app:0},s={app:0},r=[];function a(t){return c.p+"js/"+({about:"about",answering:"answering",courses:"courses",coursesUnit:"coursesUnit",home:"home",loginAndSignUp:"loginAndSignUp",news:"news",qess:"qess"}[t]||t)+"."+{about:"b1fd9993",answering:"6f25f3da",courses:"1495aa3d",coursesUnit:"d6c35c59",home:"2066e03c",loginAndSignUp:"b4b1b4a4",news:"0b42f105",qess:"f6092730"}[t]+".js"}function c(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var n=[],e={about:1,answering:1,courses:1,coursesUnit:1,home:1,loginAndSignUp:1,news:1,qess:1};i[t]?n.push(i[t]):0!==i[t]&&e[t]&&n.push(i[t]=new Promise((function(n,e){for(var o="css/"+({about:"about",answering:"answering",courses:"courses",coursesUnit:"coursesUnit",home:"home",loginAndSignUp:"loginAndSignUp",news:"news",qess:"qess"}[t]||t)+"."+{about:"9eaad49f",answering:"6237fe8e",courses:"6df3621b",coursesUnit:"eaf11b58",home:"54bbc218",loginAndSignUp:"00942833",news:"2a4a1607",qess:"69946ac0"}[t]+".css",s=c.p+o,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var u=r[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===s))return n()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===o||l===s)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[t],f.parentNode.removeChild(f),e(r)},f.href=s;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){i[t]=0})));var o=s[t];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,e){o=s[t]=[n,e]}));n.push(o[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(t);var d=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(f);var e=s[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,e[1](d)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},c.m=t,c.c=o,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)c.d(e,o,function(n){return t[n]}.bind(null,o));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/hk-page.github.io/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var f=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"365c":function(t,n,e){"use strict";e.d(n,"f",(function(){return f})),e.d(n,"e",(function(){return v})),e.d(n,"d",(function(){return p})),e.d(n,"g",(function(){return g})),e.d(n,"h",(function(){return h})),e.d(n,"j",(function(){return b})),e.d(n,"b",(function(){return m})),e.d(n,"c",(function(){return A})),e.d(n,"i",(function(){return M})),e.d(n,"a",(function(){return y}));e("e7e5");var o=e("d399"),i=(e("e17f"),e("2241")),s=(e("d3b7"),e("bc3a")),r=e.n(s),a=e("7b36"),c=r.a.create({baseURL:"http://test.lifeintools.com/h5",timeout:2e4});function u(t){i["a"].alert({title:"提示",message:t})}var l=null;c.interceptors.request.use((function(t){var n=Object(a["a"])();return n&&(t.headers["Authorization"]="Bearer "+n),l=o["a"].loading({duration:0}),t}),(function(t){return l&&l.clear(),Promise.reject(t)})),c.interceptors.response.use((function(t){var n=t.status,e=t.data;return l&&l.clear(),200===n?Promise.resolve(e.data):Promise.resolve(e)}),(function(t){l&&l.clear();var n=t.response.status;return 402===n?(Object(o["a"])(t.response.data),Promise.reject(t.response.data.message)):(u("服务器报错请求异常"),Promise.reject(t))}));var d=c;function f(t){return d({url:"/getActiveNewsList",method:"post",data:t})}function v(t){return d({url:"/getActiveAbouts",method:"post",data:t})}function p(t){return d({url:"/getAboutUs",method:"post",data:t})}function g(t){return d({url:"/getSubject",method:"post",data:t})}function h(t){return d({url:"/getUnit",method:"post",data:t})}function b(t){return d({url:"/userLogin",method:"post",data:t})}function m(){return d({url:"/concentrationList",method:"post",data:{page:1,per_page:1e4}})}function A(t){return d({url:"/createUser",method:"post",data:t})}function M(t){return d({url:"/preTestList",method:"post",data:t})}function y(t){return d({url:"/answerQuestion",method:"post",data:t})}},"420f":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"layout-box"},[e("NavBox"),e("div",{staticClass:"content-box"},[e("div",{staticClass:"ab-box"},[e("div",{staticClass:"scrool-box"},[e("div",{staticClass:"scrool-content"},[e("router-view"),e("FooterBox")],1)])])])],1)},s=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:{"nav-box":!0,active:t.active}},[e("div",{staticClass:"nav-main-box"},[e("img",{attrs:{src:t.logo,alt:""}}),e("div",{class:{btn:!0,active:t.active},on:{click:function(n){t.active=!t.active}}},[e("span"),e("span"),e("span")])]),e("div",{staticClass:"nav-list-box"},[e("div",{staticClass:"ab-box"},[e("div",{staticClass:"scrool-box"},[e("div",{staticClass:"nav-list"},[e("div",{staticClass:"list-item"},[e("div",{staticClass:"list-btn",on:{click:function(n){return t.goLink("/")}}},[e("span",[t._v("Home")])])]),e("div",{class:{"list-item":!0,active:t.active1}},[e("div",{staticClass:"list-btn",on:{click:function(n){t.active1=!t.active1}}},[e("span",[t._v("About Us")]),e("img",{attrs:{src:t.nav_1}})]),e("div",{staticClass:"item-in"},t._l(t.aboutList,(function(n){return e("div",{key:n.id,staticClass:"list-btn",on:{click:function(e){return t.goLink("/about/"+n.id)}}},[t._v(" "+t._s(n.title)+" ")])})),0)]),e("div",{class:{"list-item":!0,active:t.active2}},[e("div",{staticClass:"list-btn",on:{click:function(n){t.active2=!t.active2}}},[e("span",[t._v("Courses")]),e("img",{attrs:{src:t.nav_1}})]),e("div",{staticClass:"item-in"},[e("div",{staticClass:"list-btn",on:{click:function(n){return t.goLink("/courses/1")}}},[t._v("Chemistry")]),e("div",{staticClass:"list-btn",on:{click:function(n){return t.goLink("/courses/2")}}},[t._v("Biology")]),e("div",{staticClass:"list-btn",on:{click:function(n){return t.goLink("/courses/3")}}},[t._v("Lab Safety")]),e("div",{staticClass:"list-btn",on:{click:function(n){return t.goLink("/courses/4")}}},[t._v("Ecology")]),e("div",{staticClass:"list-btn",on:{click:function(n){return t.goLink("/courses/5")}}},[t._v("Earth Science")])])]),e("div",{staticClass:"list-item"},[e("div",{staticClass:"list-btn",on:{click:function(n){return t.goLink("/news")}}},[e("span",[t._v("News")])])]),e("div",{staticClass:"login-btn-box"},[t.token?e("div",{staticClass:"login-btn",on:{click:t.logout}},[t._v("Logout")]):e("div",{staticClass:"login-btn",on:{click:function(n){return t.goLink("/loginAndSignUp")}}},[t._v("Login / Sign up")])])])])])])])},a=[],c=e("cf05"),u=e.n(c),l=e("c213"),d=e.n(l),f=e("365c"),v=e("7b36"),p={data:function(){var t=Object(v["a"])();return{logo:u.a,nav_1:d.a,active:!1,active1:!1,active2:!1,aboutList:[],token:t}},created:function(){var t=this;Object(f["e"])().then((function(n){t.aboutList=n})).catch((function(){}))},methods:{goLink:function(t){this.$router.push({path:t}),this.active=!1},logout:function(){Object(v["b"])(),this.goLink("/"),setTimeout((function(){window.location.reload()}),1e3)}}},g=p,h=(e("7994"),e("2877")),b=Object(h["a"])(g,r,a,!1,null,"ba14962a",null),m=b.exports,A=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer-box"},[e("div",{staticClass:"t"},[e("div",[t._v("College of International Education")]),e("div",[t._v("Website: http://www.cie.hkbu.edu.hk")]),e("div",[t._v("Email: XXX@hkbu.edu.hk")]),e("div",[t._v("Tel: (852) XXXX XXXx")])]),e("div",{staticClass:"b"},[t._v(" Copyright © 2021 College of International Education, HKBU. AII rights reserved. ")])])}],y=(e("c620"),{}),z=Object(h["a"])(y,A,M,!1,null,"0a5eba0d",null),k=z.exports,w={components:{NavBox:m,FooterBox:k}},C=w,L=(e("77fa"),Object(h["a"])(C,i,s,!1,null,"2ac30188",null)),U=L.exports,E=(e("f5df1"),e("8e1f"),e("d3b7"),e("3ca3"),e("ddb0"),e("8c4f"));o["a"].use(E["a"]);var j=new E["a"]({scrollBehavior:function(){return{y:0}},routes:[{path:"/",name:"home",component:function(){return e.e("home").then(e.bind(null,"f5b8"))}},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"b95b"))},children:[{path:"/about/:id",name:"qess",component:function(){return e.e("qess").then(e.bind(null,"5007"))},props:!0}]},{path:"/news",name:"news",component:function(){return e.e("news").then(e.bind(null,"6078"))}},{path:"/courses/:keyword",name:"courses",component:function(){return e.e("courses").then(e.bind(null,"aa4f"))},props:!0},{path:"/coursesUnit/:unit_id",name:"coursesUnit",component:function(){return e.e("coursesUnit").then(e.bind(null,"4398"))},props:!0},{path:"/loginAndSignUp",name:"loginAndSignUp",component:function(){return e.e("loginAndSignUp").then(e.bind(null,"2d39"))}},{path:"/answering/:id",name:"answering",component:function(){return e.e("answering").then(e.bind(null,"3be1"))},props:!0}]}),S=j,N=(e("4ddd"),e("9f14")),x=(e("a44c"),e("e27c")),B=(e("c3a6"),e("ad06")),V=(e("6a39"),e("f240")),O=(e("4b0a"),e("2bb1")),R=(e("7844"),e("5596")),I={install:function(t){t.use(R["a"]),t.use(O["a"]),t.use(V["a"]),t.use(B["a"]),t.use(x["a"]),t.use(N["a"])}};o["a"].config.productionTip=!1,o["a"].use(I),new o["a"]({router:S,render:function(t){return t(U)}}).$mount("#app")},"58d5":function(t,n,e){},"77fa":function(t,n,e){"use strict";e("420f")},7994:function(t,n,e){"use strict";e("58d5")},"7b36":function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return c}));var o=e("a78e"),i=e.n(o),s="token";function r(t){i.a.set(s,t,{expires:365})}function a(){var t=i.a.get(s);return t||null}function c(){i.a.remove(s)}},"87fa":function(t,n,e){},"8e1f":function(t,n,e){},c213:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAQCAMAAADUOCSZAAAAqFBMVEUAAADV1dXMzMzR0dHIyMjMzMzOzs7MzMzNzc3IyMjPz8/JycnQ0NDLy8vLy8vNzc3Ozs7MzMzJycnMzMzLy8vKysrLy8vLy8vMzMzNzc3KysrNzc3Ly8vMzMzLy8vLy8vNzc3MzMzMzMzKysrMzMzMzMzLy8vMzMzLy8vMzMzMzMzLy8vMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMxPvY+KAAAAN3RSTlMAEhQWFxkaIyQlJSYmJywuLzc5QVhcXV5fYGFhY3N1dnZ3eHnR0tPT1NTV3d3e4OHi5PL2/P3+ft+8/wAAAJFJREFUGBl1wYcCgQAARdGHQvYs2dmysrr//2c2Wecoqqg/XDr6qR2Cpx9cLnr60uTG04cWsCzNgYHeNIBVVqYPeIpwgEVekjkBBnpygGVOF8kRMNRdPYRVXjfJMdDXlX2EdUYP5hjo68w5wiall8QU8CT7AIGlKGMGdLWHIK138Tmgym5r6VPMD2tSuaBvRlUn+SsWXJsTe6cAAAAASUVORK5CYII="},c620:function(t,n,e){"use strict";e("87fa")},cf05:function(t,n){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.37b589a3.js.map