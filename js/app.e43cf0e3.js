(function(t){function e(e){for(var a,o,c=e[0],l=e[1],s=e[2],u=0,p=[];u<c.length;u++)o=c[u],i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0af8ab":"f7915a13","chunk-2d0e4cbd":"fdaf22bc","chunk-2d230102":"b13bcab5","chunk-8ed522dc":"9bb0caeb","chunk-0fe7f2b8":"9a5895a8","chunk-2d0b8a85":"001f59c4","chunk-2d0c7ab9":"433b6e7a","chunk-2d0efc91":"6174a5e1","chunk-2d20f6d8":"bcf46a99","chunk-2d217380":"c9145c57","chunk-2d21e786":"4bf4abf2","chunk-2d2214fd":"9bb1f6e0","chunk-714ffb8e":"a80113de"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=a);var r,l=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(t),r=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}i[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:s})},12e4);s.onerror=s.onload=r,l.appendChild(s)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},3792:function(t,e,n){},"57f3":function(t,e,n){"use strict";var a=n("3792"),i=n.n(a);i.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("15f5");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{clipped:"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-tile",{attrs:{to:"/trading"}},[n("v-list-tile-action",[n("v-icon",[t._v("fas fa-chart-bar")])],1),n("v-list-tile-content",[t._v("Trading")])],1),t.currentUser?[n("v-divider"),n("v-list-tile",{attrs:{to:"/my-ships"}},[n("v-list-tile-action",[n("v-icon",[t._v("fas fa-space-shuttle")])],1),n("v-list-tile-content",[t._v("My Ships")])],1),n("v-list-tile",{attrs:{to:"/my-transactions"}},[n("v-list-tile-action",[n("v-icon",[t._v("fas fa-list")])],1),n("v-list-tile-content",[t._v("My Transactions")])],1),t.currentUser.roles.includes("ADMIN")?[n("v-divider"),n("v-list-group",[n("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("Administration")])],1)],1),n("v-list-tile",{attrs:{to:"/administration/account"}},[n("v-list-tile-content",[t._v("Accounts")])],1),n("v-list-tile",{attrs:{to:"/administration/game-version"}},[n("v-list-tile-content",[t._v("Game Versions")])],1),n("v-list-tile",{attrs:{to:"/administration/item"}},[n("v-list-tile-content",[t._v("Items")])],1),n("v-list-tile",{attrs:{to:"/administration/item-price"}},[n("v-list-tile-content",[t._v("Item Prices")])],1),n("v-list-tile",{attrs:{to:"/administration/location"}},[n("v-list-tile-content",[t._v("Locations")])],1),n("v-list-tile",{attrs:{to:"/administration/location-type"}},[n("v-list-tile-content",[t._v("Location Types")])],1)],1)]:t._e()]:t._e()],2)],1),n("v-toolbar",{attrs:{app:"",fixed:"","clipped-left":""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Star Citizen Trade Market")]),n("v-spacer"),t.currentUser?[n("span",[t._v("Sign in as "+t._s(t.currentUser.username))]),n("v-btn",{attrs:{icon:""},on:{click:t.signOut}},[n("v-icon",[t._v("fas fa-sign-in-alt")])],1)]:[n("v-btn",{attrs:{icon:"",to:"/sign-up"}},[n("v-icon",[t._v("fas fa-user-plus")])],1),n("v-btn",{attrs:{icon:"",to:"/sign-in"}},[n("v-icon",[t._v("fas fa-sign-in-alt")])],1)]],2),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:"",fixed:""}},[n("span",[t._v(" Copyright © 2018 Christopher Quadflieg aka Shinigami")]),n("span",[t._v(" | ")]),n("router-link",{attrs:{to:"/privacy-policy"}},[t._v("Privacy Policy")]),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/Shinigami92/star-citizen-trade-market-api",target:"_blank",flat:"",icon:""}},[n("v-icon",[t._v("fab fa-github")])],1)],1)],1)},r=[],o=n("d4ec"),c=n("bee2"),l=n("99de"),s=n("7e84"),u=n("262e"),d=n("9ab4"),p=n("60a3"),f=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(l["a"])(this,Object(s["a"])(e).call(this)),t.drawer=!0,t}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"signOut",value:function(){localStorage.removeItem("auth"),this.$router.go(0)}},{key:"currentUser",get:function(){var t=localStorage.getItem("auth");return null===t?null:JSON.parse(t)}}]),e}(p["d"]);f=d["a"]([p["a"],d["b"]("design:paramtypes",[])],f);var v=f,h=v,m=(n("57f3"),n("2877")),b=Object(m["a"])(h,i,r,!1,null,null,null);b.options.__file="app.vue";var g=b.exports,k=(n("96cf"),n("1da1"),n("be94")),y=n("522d"),_=n("efe7");a["default"].use(y["a"]);var w="apollo-token",V="https://web.theuke.org/graphql",T="https://web.theuke.org";a["default"].prototype.$filesRoot=T;var O={httpEndpoint:V,wsEndpoint:"wss://web.theuke.org/graphql",tokenName:w,persisting:!1,websocketsOnly:!1,ssr:!1};function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(_["createApolloClient"])(Object(k["a"])({},O,t)),n=e.apolloClient,a=e.wsClient;n.wsClient=a;var i=new y["a"]({defaultClient:n,defaultOptions:{$query:{}},errorHandler:function(t){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",t.message)}});return i}var j=n("2ead"),x=n.n(j);a["default"].use(x.a);var C=n("bb71"),S=n("7496"),A=n("c6a6"),D=n("8336"),L=n("a609"),E=n("b0af"),M=n("99d9"),I=n("12b2"),F=n("a523"),B=n("549c"),N=n("8fea"),U=n("169a"),$=n("ce7e"),q=n("7679"),J=n("0e8f"),z=n("553a"),G=n("4bd4"),H=n("132d"),Q=n("a722"),R=n("8860"),K=n("56b0"),W=n("ba95"),X=n("40fe"),Y=n("5d23"),Z=n("e449"),tt=n("f774"),et=n("b56d"),nt=n("9910"),at=n("2677"),it=n("71d9"),rt=n("706c"),ot=n("2a7f");n("da64");a["default"].use(C["a"],{components:{VApp:S["a"],VAutocomplete:A["a"],VBtn:D["a"],VBtnToggle:L["a"],VCard:E["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:I["a"],VContainer:F["a"],VContent:B["a"],VDataTable:N["a"],VDialog:U["a"],VDivider:$["a"],VEditDialog:q["a"],VFlex:J["a"],VFooter:z["a"],VForm:G["a"],VIcon:H["a"],VLayout:Q["a"],VList:R["a"],VListGroup:K["a"],VListTile:W["a"],VListTileAction:X["a"],VListTileContent:Y["a"],VListTileTitle:Y["b"],VMenu:Z["a"],VNavigationDrawer:tt["a"],VSelect:et["a"],VSpacer:nt["a"],VTextField:at["a"],VToolbar:it["a"],VToolbarSideIcon:rt["a"],VToolbarTitle:ot["a"]},theme:{primary:"#096689",secondary:"#0E1F79",accent:"#DA7406",error:"#DA2B06",info:"#44BF72",success:"#008030",warning:"#DA9D06"},customProperties:!0,iconfont:"fa"});var ct=n("2909"),lt=n("8c4f"),st=[{path:"/administration/account",name:"administration-account",component:function(){return Promise.all([n.e("chunk-8ed522dc"),n.e("chunk-2d20f6d8")]).then(n.bind(null,"b41a"))}},{path:"/administration/game-version",name:"administration-game-version",component:function(){return Promise.all([n.e("chunk-8ed522dc"),n.e("chunk-2d2214fd")]).then(n.bind(null,"ca8a"))}},{path:"/administration/item",name:"administration-item",component:function(){return Promise.all([n.e("chunk-8ed522dc"),n.e("chunk-2d0efc91")]).then(n.bind(null,"9a1d"))}},{path:"/administration/item-price",name:"administration-item-price",component:function(){return Promise.all([n.e("chunk-8ed522dc"),n.e("chunk-2d0b8a85")]).then(n.bind(null,"302d"))}},{path:"/administration/location",name:"administration-location",component:function(){return Promise.all([n.e("chunk-8ed522dc"),n.e("chunk-2d21e786")]).then(n.bind(null,"d664"))}},{path:"/administration/location-type",name:"administration-location-type",component:function(){return Promise.all([n.e("chunk-8ed522dc"),n.e("chunk-2d217380")]).then(n.bind(null,"c690"))}}];a["default"].use(lt["a"]);var ut=new lt["a"]({routes:[{path:"/",redirect:"trading"},{path:"/sign-up",name:"sign-up",component:function(){return Promise.all([n.e("chunk-8ed522dc"),n.e("chunk-714ffb8e")]).then(n.bind(null,"1e64"))}},{path:"/sign-in",name:"sign-in",component:function(){return Promise.all([n.e("chunk-8ed522dc"),n.e("chunk-2d0c7ab9")]).then(n.bind(null,"5239"))}},{path:"/privacy-policy",name:"privacy-policy",component:function(){return n.e("chunk-2d0af8ab").then(n.bind(null,"0f87"))}},{path:"/trading",name:"trading",component:function(){return Promise.all([n.e("chunk-8ed522dc"),n.e("chunk-0fe7f2b8")]).then(n.bind(null,"9418"))}},{path:"/my-ships",name:"my-ships",component:function(){return n.e("chunk-2d230102").then(n.bind(null,"eb4c"))}},{path:"/my-transactions",name:"my-transactions",component:function(){return n.e("chunk-2d0e4cbd").then(n.bind(null,"926d"))}}].concat(Object(ct["a"])(st),[{path:"*",redirect:"trading"}])});a["default"].config.productionTip=!1,new a["default"]({apolloProvider:P(),render:function(t){return t(g)},router:ut}).$mount("#app")}});
//# sourceMappingURL=app.e43cf0e3.js.map