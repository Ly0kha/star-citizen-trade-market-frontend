(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fe7f2b8"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var a,o,c=String(i(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):a:t?c.slice(s,s+2):o-56320+(a-55296<<10)+65536)}}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),a=n("6821"),o=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=a(t),e=o(e,!0),s)try{return u(t,e)}catch(n){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),a=n("79e5"),o=n("be13"),c=n("2b4c"),s=n("520a"),u=c("species"),l=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),m=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=c(t),f=!a(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),p=f?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[d](""),!e}):void 0;if(!f||!p||"replace"===t&&!l||"split"===t&&!m){var v=/./[d],y=n(o,d,""[t],function(t,e,n,r,i){return e.exec===s?f&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),h=y[0],b=y[1];r(String.prototype,t,h),i(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},2621:function(t,e){e.f=Object.getOwnPropertySymbols},"37c8":function(t,e,n){e.f=n("2b4c")},"386d":function(t,e,n){"use strict";var r=n("cb7c"),i=n("83a1"),a=n("5f1b");n("214f")("search",1,function(t,e,n,o){return[function(n){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=o(n,t,this);if(e.done)return e.value;var c=r(t),s=String(this),u=c.lastIndex;i(u,0)||(c.lastIndex=0);var l=a(c,s);return i(c.lastIndex,u)||(c.lastIndex=u),null===l?-1:l.index}]})},"3a72":function(t,e,n){var r=n("7726"),i=n("8378"),a=n("2d00"),o=n("37c8"),c=n("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=a?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:o.f(t)})}},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,a=String.prototype.replace,o=i,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[c]||0!==e[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(o=function(t){var e,n,o,l,m=this;return u&&(n=new RegExp("^"+m.source+"$(?!\\s)",r.call(m))),s&&(e=m[c]),o=i.call(m,t),s&&o&&(m[c]=m.global?o.index+o[0].length:e),u&&o&&o.length>1&&a.call(o[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)}),o}),t.exports=o},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var a,o=e.constructor;return o!==n&&"function"==typeof o&&(a=o.prototype)!==n.prototype&&r(a)&&i&&i(t,a),t}},"5df3":function(t,e,n){"use strict";var r=n("02f4")(!0);n("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"67ab":function(t,e,n){var r=n("ca5a")("meta"),i=n("d3f4"),a=n("69a8"),o=n("86cc").f,c=0,s=Object.isExtensible||function(){return!0},u=!n("79e5")(function(){return s(Object.preventExtensions({}))}),l=function(t){o(t,r,{value:{i:"O"+ ++c,w:{}}})},m=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,r)){if(!s(t))return"F";if(!e)return"E";l(t)}return t[r].i},d=function(t,e){if(!a(t,r)){if(!s(t))return!0;if(!e)return!1;l(t)}return t[r].w},f=function(t){return u&&p.NEED&&s(t)&&!a(t,r)&&l(t),t},p=t.exports={KEY:r,NEED:!1,fastKey:m,getWeak:d,onFreeze:f}},"7bbc":function(t,e,n){var r=n("6821"),i=n("9093").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?c(t):i(r(t))}},"7f7f":function(t,e,n){var r=n("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in i||n("9e1e")&&r(i,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8a81":function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),a=n("9e1e"),o=n("5ca1"),c=n("2aba"),s=n("67ab").KEY,u=n("79e5"),l=n("5537"),m=n("7f20"),d=n("ca5a"),f=n("2b4c"),p=n("37c8"),v=n("3a72"),y=n("d4c0"),h=n("1169"),b=n("cb7c"),g=n("d3f4"),x=n("6821"),C=n("6a99"),_=n("4630"),O=n("2aeb"),w=n("7bbc"),S=n("11e9"),P=n("86cc"),j=n("0d58"),k=S.f,L=P.f,I=w.f,E=r.Symbol,V=r.JSON,R=V&&V.stringify,q="prototype",M=f("_hidden"),N=f("toPrimitive"),G={}.propertyIsEnumerable,T=l("symbol-registry"),A=l("symbols"),$=l("op-symbols"),F=Object[q],B="function"==typeof E,D=r.QObject,J=!D||!D[q]||!D[q].findChild,U=a&&u(function(){return 7!=O(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(F,e);r&&delete F[e],L(t,e,n),r&&t!==F&&L(F,e,r)}:L,Y=function(t){var e=A[t]=O(E[q]);return e._k=t,e},Q=B&&"symbol"==typeof E.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof E},z=function(t,e,n){return t===F&&z($,e,n),b(t),e=C(e,!0),b(n),i(A,e)?(n.enumerable?(i(t,M)&&t[M][e]&&(t[M][e]=!1),n=O(n,{enumerable:_(0,!1)})):(i(t,M)||L(t,M,_(1,{})),t[M][e]=!0),U(t,e,n)):L(t,e,n)},W=function(t,e){b(t);var n,r=y(e=x(e)),i=0,a=r.length;while(a>i)z(t,n=r[i++],e[n]);return t},H=function(t,e){return void 0===e?O(t):W(O(t),e)},K=function(t){var e=G.call(this,t=C(t,!0));return!(this===F&&i(A,t)&&!i($,t))&&(!(e||!i(this,t)||!i(A,t)||i(this,M)&&this[M][t])||e)},X=function(t,e){if(t=x(t),e=C(e,!0),t!==F||!i(A,e)||i($,e)){var n=k(t,e);return!n||!i(A,e)||i(t,M)&&t[M][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=I(x(t)),r=[],a=0;while(n.length>a)i(A,e=n[a++])||e==M||e==s||r.push(e);return r},tt=function(t){var e,n=t===F,r=I(n?$:x(t)),a=[],o=0;while(r.length>o)!i(A,e=r[o++])||n&&!i(F,e)||a.push(A[e]);return a};B||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===F&&e.call($,n),i(this,M)&&i(this[M],t)&&(this[M][t]=!1),U(this,t,_(1,n))};return a&&J&&U(F,t,{configurable:!0,set:e}),Y(t)},c(E[q],"toString",function(){return this._k}),S.f=X,P.f=z,n("9093").f=w.f=Z,n("52a7").f=K,n("2621").f=tt,a&&!n("2d00")&&c(F,"propertyIsEnumerable",K,!0),p.f=function(t){return Y(f(t))}),o(o.G+o.W+o.F*!B,{Symbol:E});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)f(et[nt++]);for(var rt=j(f.store),it=0;rt.length>it;)v(rt[it++]);o(o.S+o.F*!B,"Symbol",{for:function(t){return i(T,t+="")?T[t]:T[t]=E(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var e in T)if(T[e]===t)return e},useSetter:function(){J=!0},useSimple:function(){J=!1}}),o(o.S+o.F*!B,"Object",{create:H,defineProperty:z,defineProperties:W,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),V&&o(o.S+o.F*(!B||u(function(){var t=E();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(g(e)||void 0!==t)&&!Q(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Q(e))return e}),r[1]=e,R.apply(V,r)}}),E[q][N]||n("32e9")(E[q],N,E[q].valueOf),m(E,"Symbol"),m(Math,"Math",!0),m(r.JSON,"JSON",!0)},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),a=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},9418:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-space-between":"","justify-start":"",column:""}},[n("h1",{staticClass:"display-1"},[t._v("Trading")]),n("v-card",[n("v-form",{ref:"filterForm"},[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md6:""}},[n("v-autocomplete",{attrs:{items:t.locations,"return-object":"","item-text":"name",label:"Start Location","prepend-icon":"fas fa-plane-departure",clearable:""},model:{value:t.startLocation,callback:function(e){t.startLocation=e},expression:"startLocation"}})],1),n("v-flex",{attrs:{xs12:"",md6:""}},[n("v-autocomplete",{attrs:{items:t.locations,"return-object":"","item-text":"name",label:"End Location","prepend-icon":"fas fa-plane-arrival",clearable:""},model:{value:t.endLocation,callback:function(e){t.endLocation=e},expression:"endLocation"}})],1),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{attrs:{type:"number",min:"1",label:"Max SCU"},model:{value:t.maxScu,callback:function(e){t.maxScu=t._n(e)},expression:"maxScu"}})],1),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{attrs:{type:"number",min:"1",label:"Start aUEC"},model:{value:t.startCurrency,callback:function(e){t.startCurrency=t._n(e)},expression:"startCurrency"}})],1),n("v-flex",{attrs:{xs12:"",md12:""}},[n("v-layout",{attrs:{row:""}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.search()}}},[t._v("Search")]),n("v-spacer"),n("v-btn",{attrs:{color:"accent"},on:{click:function(e){t.reportPricesModal=!0}}},[t._v("Report Prices")]),n("report-price",{attrs:{open:t.reportPricesModal,location:t.startLocation},on:{close:function(e){t.reportPricesModalClosed()}}}),n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{attrs:{slot:"activator",color:"secondary"},slot:"activator"},[t._v("Miss Something?")]),n("v-list",[n("v-list-tile",{on:{click:function(t){}}},[n("v-list-tile-title",[t._v("Add new Location")])],1),n("v-list-tile",{on:{click:function(e){t.createCommodityModal=!0}}},[n("v-list-tile-title",[t._v("Add new Commodity")])],1),n("v-list-tile",{on:{click:function(t){}}},[n("v-list-tile-title",[t._v("Add new Game Version")])],1)],1)],1),n("create-commodity",{attrs:{open:t.createCommodityModal},on:{close:function(e){t.createCommodityModalClosed()}}})],1)],1)],1)],1)],1)],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.trades,pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item.item.name))]),n("td",[t._v(t._s(e.item.startLocation.name))]),n("td",[t._v(t._s(e.item.endLocation.name))]),n("td",{staticClass:"text-md-right"},[t._v(t._s(e.item.buyItemPrice.unitPrice.toFixed(2)))]),n("td",{staticClass:"text-md-right"},[t._v(t._s(e.item.sellItemPrice.unitPrice.toFixed(2)))]),n("td",{staticClass:"text-md-right"},[t._v(t._s(e.item.profit.toFixed(2)))]),n("td",{staticClass:"text-md-right"},[t._v(t._s(e.item.margin.toFixed(2))+" %")]),n("td",[t._v(t._s(t._f("moment")(e.item.scanTime,"LLL")))]),n("td",{staticClass:"mono"},[t._v(t._s(e.item.scannedInGameVersion.identifier))])]}}])})],1)},i=[],a=n("2909"),o=(n("386d"),n("96cf"),n("1da1")),c=n("d4ec"),s=n("bee2"),u=n("99de"),l=n("7e84"),m=n("262e"),d=n("8785"),f=n("9ab4"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"540px"},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Register new Commodity")])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md12:""}},[n("v-text-field",{attrs:{rules:t.nameRules,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-flex",{attrs:{md8:""}},[n("v-autocomplete",{attrs:{items:t.commodityCategories,"return-object":"","item-text":"name",label:"Category",required:""},model:{value:t.selectedCommodityCategory,callback:function(e){t.selectedCommodityCategory=e},expression:"selectedCommodityCategory"}})],1),n("v-flex",{attrs:{md4:""}},[n("v-autocomplete",{attrs:{items:t.gameVersions,"return-object":"","item-text":"identifier",label:"Game Version",required:""},model:{value:t.selectedGameVersion,callback:function(e){t.selectedGameVersion=e},expression:"selectedGameVersion"}})],1),t.errorMessage?n("v-flex",{attrs:{md12:""}},[n("p",{staticClass:"red--text"},[t._v(t._s(t.errorMessage.message))])]):t._e()],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"warning"},on:{click:function(e){t.$emit("close")}}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"success",disabled:t.invalid},on:{click:function(e){t.create()}}},[t._v("Create")])],1)],1)],1)},v=[],y=(n("7f7f"),n("9530")),h=n.n(y),b=n("60a3");function g(){var t=Object(d["a"])(["\n\t\t\tquery commodityCategories {\n\t\t\t\tcommodityCategories {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t"]);return g=function(){return t},t}function x(){var t=Object(d["a"])(["\n\t\t\t\tquery gameVersions {\n\t\t\t\t\tgameVersions {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tidentifier\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"]);return x=function(){return t},t}function C(){var t=Object(d["a"])(["\n\t\t\t\t\tmutation CreateCommodity($commodity: CreateCommodityInput!) {\n\t\t\t\t\t\tcreateCommodity(createCommodityInput: $commodity) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]);return C=function(){return t},t}var _=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).call(this)),t.name="",t.selectedCommodityCategory=null,t.selectedGameVersion=null,t.gameVersions=[],t.nameRules=[function(t){return!!t||"Name is required"},function(t){return t.length>=3||"Name must be greater than or equals 3 characters"}],t.errors=null,t.errorMessage=null,t}return Object(m["a"])(e,t),Object(s["a"])(e,[{key:"create",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.errors=null,this.errorMessage=null,t.next=5,this.$apollo.mutate({mutation:h()(C()),variables:{commodity:{name:this.name,commodityCategoryId:this.selectedCommodityCategory.id,inGameSinceVersionId:this.selectedGameVersion?this.selectedGameVersion.id:void 0}},context:{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("auth")).token)}}});case 5:t.next=13;break;case 7:return t.prev=7,t.t0=t["catch"](0),console.error(t.t0.graphQLErrors),this.errors=t.t0.graphQLErrors,this.errorMessage=this.errors[0].message,t.abrupt("return");case 13:this.$emit("close");case 14:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"beforeMount",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$apollo.query({query:h()(x())});case 2:e=t.sent,this.gameVersions=e.data.gameVersions,this.selectedGameVersion=this.gameVersions[0];case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"invalid",get:function(){return this.name.length<3||null===this.selectedCommodityCategory}}]),e}(b["d"]);f["a"]([Object(b["b"])("close",{type:Boolean}),f["b"]("design:type",Boolean)],_.prototype,"open",void 0),_=f["a"]([Object(b["a"])({apollo:{commodityCategories:h()(g())}}),f["b"]("design:paramtypes",[])],_);var O=_,w=O,S=n("2877"),P=Object(S["a"])(w,p,v,!1,null,null,null);P.options.__file="create-commodity.vue";var j=P.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"800px"},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Report Prices")])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md8:""}},[n("v-autocomplete",{attrs:{items:t.locations,"return-object":"","item-text":"name",label:"Location",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1),n("v-flex",{attrs:{md4:""}},[n("v-autocomplete",{attrs:{items:t.gameVersions,"return-object":"","item-text":"identifier",label:"Game Version",required:""},model:{value:t.selectedGameVersion,callback:function(e){t.selectedGameVersion=e},expression:"selectedGameVersion"}})],1),n("v-divider"),n("v-flex",{attrs:{md5:""}},[n("v-select",{attrs:{items:t.commodities,"item-text":t.displayWithCommodity,"return-object":"",label:"Commodity"},model:{value:t.selectedCommodity,callback:function(e){t.selectedCommodity=e},expression:"selectedCommodity"}})],1),n("v-flex",{attrs:{md2:""}},[n("v-text-field",{attrs:{type:"number",min:"1",label:"Quantity"},model:{value:t.quantity,callback:function(e){t.quantity=t._n(e)},expression:"quantity"}})],1),n("v-flex",{attrs:{md2:""}},[n("v-text-field",{attrs:{type:"number",min:"0",step:"0.01",label:"Total Price"},model:{value:t.price,callback:function(e){t.price=t._n(e)},expression:"price"}})],1),n("v-flex",[n("v-btn",{attrs:{color:"accent",disabled:t.invalidCommodity},on:{click:function(e){t.addItemPrice()}}},[t._v("Add")])],1),n("v-flex",{attrs:{md12:""}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.itemPrices,"hide-actions":"","pagination.sync":"pagination","item-key":"id"},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item.commodity.name))]),n("td",[n("v-edit-dialog",{attrs:{"return-value":e.item.quantity,lazy:"",persistent:"",large:""},on:{"update:returnValue":function(n){t.$set(e.item,"quantity",n)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.item.quantity)+"\n\t\t\t\t\t\t\t\t\t\t"),n("v-text-field",{attrs:{slot:"input",type:"number",min:"1",label:"Edit Quantity","single-line":""},slot:"input",model:{value:e.item.quantity,callback:function(n){t.$set(e.item,"quantity",t._n(n))},expression:"props.item.quantity"}})],1)],1),n("td",[n("v-edit-dialog",{attrs:{"return-value":e.item.price,lazy:"",persistent:"",large:""},on:{"update:returnValue":function(n){t.$set(e.item,"price",n)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.item.price)+"\n\t\t\t\t\t\t\t\t\t\t"),n("v-text-field",{attrs:{slot:"input",type:"number",min:"0",step:"0.01",label:"Edit Price","single-line":""},slot:"input",model:{value:e.item.price,callback:function(n){t.$set(e.item,"price",t._n(n))},expression:"props.item.price"}})],1)],1),n("td",[t._v(t._s((e.item.price/e.item.quantity).toFixed(2)))]),n("td",[n("v-btn-toggle",{attrs:{mandatory:""},model:{value:e.item.type,callback:function(n){t.$set(e.item,"type",n)},expression:"props.item.type"}},[n("v-btn",{attrs:{color:"success",value:"BUY"}},[t._v("BUY")]),n("v-btn",{attrs:{color:"accent",value:"SELL"}},[t._v("SELL")])],1)],1),n("td",[n("v-btn",{attrs:{color:"warning",flat:"",icon:""},on:{click:function(n){t.removeItemPrice(e.index)}}},[n("v-icon",[t._v("fas fa-minus")])],1)],1)]}}])})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"warning"},on:{click:function(e){t.$emit("close")}}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"success",disabled:t.invalid},on:{click:function(e){t.reportItemPrices()}}},[t._v("Report")])],1)],1)],1)},L=[];n("c5f6"),n("ac4d"),n("8a81"),n("ac6a"),n("5df3"),n("cadf"),n("551c"),n("097d");function I(){var t=Object(d["a"])(["\n\t\t\tquery commodities {\n\t\t\t\tcommodities {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\t... on Commodity {\n\t\t\t\t\t\tcommodityCategory {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"]);return I=function(){return t},t}function E(){var t=Object(d["a"])(["\n\t\t\tquery locations {\n\t\t\t\tlocations {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t"]);return E=function(){return t},t}function V(){var t=Object(d["a"])(["\n\t\t\t\tquery gameVersions {\n\t\t\t\t\tgameVersions {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tidentifier\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"]);return V=function(){return t},t}function R(){var t=Object(d["a"])(["\n\t\t\t\t\t\tmutation CreateItemPrice($itemPrice: CreateItemPriceInput!) {\n\t\t\t\t\t\t\tcreateItemPrice(createItemPriceInput: $itemPrice) {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t"]);return R=function(){return t},t}var q=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).call(this)),t.location=null,t.quantity=1,t.price=1,t.selectedCommodity=null,t.selectedGameVersion=null,t.itemPrices=[],t.gameVersions=[],t.headers=[{text:"Commodity ",value:"commodity.name"},{text:"Quantity ",value:"quantity"},{text:"Price ",value:"price"},{text:"Price per Unit ",value:"unitPrice"},{text:"Type ",value:"type"},{text:"",value:"action",sortable:!1}],t}return Object(m["a"])(e,t),Object(s["a"])(e,[{key:"displayWithCommodity",value:function(t){return"".concat(t.name," (").concat(t.commodityCategory.name,")")}},{key:"addItemPrice",value:function(){this.itemPrices.push({commodity:this.selectedCommodity,quantity:this.quantity,price:this.price,type:"BUY"})}},{key:"removeItemPrice",value:function(t){this.itemPrices.splice(t,1)}},{key:"reportItemPrices",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n,r,i,a,o,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(console.log({location:this.location,itemPrices:this.itemPrices}),e=[],n=!0,r=!1,i=void 0,t.prev=5,a=this.itemPrices[Symbol.iterator]();!(n=(o=a.next()).done);n=!0)c=o.value,e.push(this.$apollo.mutate({mutation:h()(R()),variables:{itemPrice:{itemId:c.commodity.id,locationId:this.location.id,price:c.price,quantity:c.quantity,type:c.type,scannedInGameVersionId:this.selectedGameVersion?this.selectedGameVersion.id:void 0}},context:{headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("auth")).token)}}}));t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](5),r=!0,i=t.t0;case 13:t.prev=13,t.prev=14,n||null==a.return||a.return();case 16:if(t.prev=16,!r){t.next=19;break}throw i;case 19:return t.finish(16);case 20:return t.finish(13);case 21:return t.next=23,Promise.all(e);case 23:this.$emit("close");case 24:case"end":return t.stop()}},t,this,[[5,9,13,21],[14,,16,20]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"beforeMount",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$apollo.query({query:h()(V())});case 2:e=t.sent,this.gameVersions=e.data.gameVersions,this.selectedGameVersion=this.gameVersions[0];case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"invalidCommodity",get:function(){return null===this.selectedCommodity}},{key:"invalid",get:function(){return null===this.location||0===this.itemPrices.length}}]),e}(b["d"]);f["a"]([Object(b["b"])("close",{type:Boolean}),f["b"]("design:type",Boolean)],q.prototype,"open",void 0),f["a"]([Object(b["c"])({default:null}),f["b"]("design:type",Object)],q.prototype,"location",void 0),f["a"]([Object(b["c"])({default:1}),f["b"]("design:type",Number)],q.prototype,"quantity",void 0),q=f["a"]([Object(b["a"])({apollo:{locations:h()(E()),commodities:h()(I())}}),f["b"]("design:paramtypes",[])],q);var M=q,N=M,G=Object(S["a"])(N,k,L,!1,null,null,null);G.options.__file="report-prices.vue";var T,A,$=G.exports;function F(){var t=Object(d["a"])(["\n\t\t\t\tquery tradeData {\n\t\t\t\t\tlocations {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"]);return F=function(){return t},t}function B(){var t=Object(d["a"])(["\n\tquery tradeData($searchInput: TradeSearchInput) {\n\t\ttrades(searchInput: $searchInput) {\n\t\t\tbuyItemPrice {\n\t\t\t\tid\n\t\t\t\tunitPrice\n\t\t\t\ttype\n\t\t\t}\n\t\t\tsellItemPrice {\n\t\t\t\tid\n\t\t\t\tunitPrice\n\t\t\t\ttype\n\t\t\t}\n\t\t\titem {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tstartLocation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tendLocation {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tprofit\n\t\t\tmargin\n\t\t\tscanTime\n\t\t\tscannedInGameVersion {\n\t\t\t\tidentifier\n\t\t\t}\n\t\t}\n\t}\n"]);return B=function(){return t},t}var D=h()(B()),J=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(u["a"])(this,Object(l["a"])(e).call(this)),t.locations=[],t.trades=[],t.startLocation=null,t.endLocation=null,t.maxScu=1,t.startCurrency=1,t.reportPricesModal=!1,t.createCommodityModal=!1,t.pagination={rowsPerPage:10,sortBy:"profit",descending:!0},t.headers=[{text:"Commodity ",value:"item.name"},{text:"Start ",value:"startLocation.name"},{text:"End ",value:"endLocation.name"},{text:"Buy Price ",value:"buyItemPrice.unitPrice"},{text:"Sell Price ",value:"sellItemPrice.unitPrice"},{text:"Profit ",value:"profit"},{text:"Margin ",value:"margin"},{text:"Scanned ",value:"scanTime"},{text:"Game Version ",value:"scannedInGameVersion.identifier"}],t}return Object(m["a"])(e,t),Object(s["a"])(e,[{key:"reportPricesModalClosed",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.reportPricesModal=!1,t.next=3,this.search();case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"createCommodityModalClosed",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.createCommodityModal=!1;case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"search",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$apollo.query({query:D,variables:{searchInput:{startLocationId:this.startLocation?this.startLocation.id:void 0,endLocationId:this.endLocation?this.endLocation.id:void 0}}});case 2:n=t.sent,this.trades.splice(0,this.trades.length),(e=this.trades).push.apply(e,Object(a["a"])(n.data.trades));case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"beforeMount",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$apollo.query({query:h()(F())});case 2:return n=t.sent,(e=this.locations).push.apply(e,Object(a["a"])(n.data.locations)),t.next=6,this.search();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"onStartLocationChanged",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.search();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"onEndLocationChanged",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.search();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),e}(b["d"]);f["a"]([Object(b["e"])("startLocation"),f["b"]("design:type",Function),f["b"]("design:paramtypes",[]),f["b"]("design:returntype","function"===typeof(T="undefined"!==typeof Promise&&Promise)?T:Object)],J.prototype,"onStartLocationChanged",null),f["a"]([Object(b["e"])("endLocation"),f["b"]("design:type",Function),f["b"]("design:paramtypes",[]),f["b"]("design:returntype","function"===typeof(A="undefined"!==typeof Promise&&Promise)?A:Object)],J.prototype,"onEndLocationChanged",null),J=f["a"]([Object(b["a"])({components:{ReportPrice:$,CreateCommodity:j}}),f["b"]("design:paramtypes",[])],J);var U=J,Y=U,Q=Object(S["a"])(Y,r,i,!1,null,null,null);Q.options.__file="trading.vue";e["default"]=Q.exports},aa77:function(t,e,n){var r=n("5ca1"),i=n("be13"),a=n("79e5"),o=n("fdef"),c="["+o+"]",s="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),m=function(t,e,n){var i={},c=a(function(){return!!o[t]()||s[t]()!=s}),u=i[t]=c?e(d):o[t];n&&(i[n]=u),r(r.P+r.F*c,"String",i)},d=m.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=m},ac4d:function(t,e,n){n("3a72")("asyncIterator")},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),a=n("2aba"),o=n("7726"),c=n("32e9"),s=n("84f2"),u=n("2b4c"),l=u("iterator"),m=u("toStringTag"),d=s.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(f),v=0;v<p.length;v++){var y,h=p[v],b=f[h],g=o[h],x=g&&g.prototype;if(x&&(x[l]||c(x,l,d),x[m]||c(x,m,h),s[h]=d,b))for(y in r)x[y]||a(x,y,r[y],!0)}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c5f6:function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),a=n("2d95"),o=n("5dbc"),c=n("6a99"),s=n("79e5"),u=n("9093").f,l=n("11e9").f,m=n("86cc").f,d=n("aa77").trim,f="Number",p=r[f],v=p,y=p.prototype,h=a(n("2aeb")(y))==f,b="trim"in String.prototype,g=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():d(e,3);var n,r,i,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var o,s=e.slice(2),u=0,l=s.length;u<l;u++)if(o=s.charCodeAt(u),o<48||o>i)return NaN;return parseInt(s,r)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(h?s(function(){y.valueOf.call(n)}):a(n)!=f)?o(new v(g(e)),n,p):g(e)};for(var x,C=n("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;C.length>_;_++)i(v,x=C[_])&&!i(p,x)&&m(p,x,l(v,x));p.prototype=y,y.constructor=p,n("2aba")(r,f,p)}},d4c0:function(t,e,n){var r=n("0d58"),i=n("2621"),a=n("52a7");t.exports=function(t){var e=r(t),n=i.f;if(n){var o,c=n(t),s=a.f,u=0;while(c.length>u)s.call(t,o=c[u++])&&e.push(o)}return e}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-0fe7f2b8.1d7a7c70.js.map