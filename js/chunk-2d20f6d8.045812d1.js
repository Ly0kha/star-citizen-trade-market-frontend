(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f6d8"],{b41a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[a("v-col",[a("h1",{staticClass:"display-1 mb-2"},[e._v("Accounts")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.elements,"sort-by":"username","items-per-page":25,height:e.tableHeight,dense:""},scopedSlots:e._u([{key:"body",fn:function(t){var n=t.items;return[a("tbody",e._l(n,(function(t){return a("tr",{key:t.id},[a("td",{staticClass:"mono"},[e._v(e._s(t.id))]),a("td",[e._v(e._s(t.username))]),a("td",[e._v(e._s(t.handle))]),a("td",[e._v(e._s(t.roles.join(", ")))])])})),0)]}}])})],1)],1)},s=[],i=a("8785"),l=a("d4ec"),r=a("bee2"),u=a("99de"),d=a("7e84"),o=a("262e"),c=a("9ab4"),h=a("9530"),b=a.n(h),v=a("2b0e"),f=a("60a3");function p(){var e=Object(i["a"])(["\n      query {\n        elements: accounts {\n          id\n          username\n          handle\n          # email\n          roles\n        }\n      }\n    "]);return p=function(){return e},e}var m=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).call(this)),e.headers=[{text:"ID",width:340,value:"id"},{text:"Username",width:200,value:"username"},{text:"Handle",width:200,value:"handle"},{text:"Roles",width:300,value:"roles"}],e.tableHeight=0,e}return Object(o["a"])(t,e),Object(r["a"])(t,[{key:"updateTableHeight",value:function(){this.tableHeight=window.innerHeight-this.$vuetify.application.top-204}},{key:"mounted",value:function(){var e=this;this.updateTableHeight(),window.addEventListener("resize",(function(){return e.updateTableHeight()}))}}]),t}(v["a"]);m=Object(c["c"])([Object(f["a"])({apollo:{elements:b()(p())}}),Object(c["f"])("design:paramtypes",[])],m);var w=m,_=w,j=a("2877"),y=a("6544"),g=a.n(y),O=a("62ad"),H=a("8fea"),k=a("0fd9"),x=Object(j["a"])(_,n,s,!1,null,null,null);t["default"]=x.exports;g()(x,{VCol:O["a"],VDataTable:H["a"],VRow:k["a"]})}}]);
//# sourceMappingURL=chunk-2d20f6d8.045812d1.js.map