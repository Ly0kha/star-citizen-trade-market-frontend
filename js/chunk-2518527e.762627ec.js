(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2518527e"],{"7f7f":function(t,n,e){var a=e("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,r="name";r in i||e("9e1e")&&a(i,r,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},fa61:function(t,n,e){"use strict";e.r(n);var a,i,o,r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-layout",{attrs:{"align-space-between":"","justify-start":"",column:""}},[t.location?[e("v-breadcrumbs",{attrs:{items:t.breadcrumbItems,large:""}},[e("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("fas fa-chevron-right")])],1),e("v-container",{attrs:{"grid-list-md":"",fluid:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-card",[e("v-card-title",{attrs:{"primary-title":""}},[e("div",[e("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.location.name))]),e("div",[t._v("Type: "+t._s(t.location.type.name))]),e("div",[t._v("Can Trade: "+t._s(t.location.canTrade))])])])],1)],1),t._l(t.location.children,function(n){return e("v-flex",{key:n.id,attrs:{xs4:""}},[e("v-card",[e("v-card-title",{attrs:{"primary-title":""}},[e("div",[e("h3",{staticClass:"headline mb-0"},[t._v(t._s(n.name))]),e("div",[t._v("Type: "+t._s(n.type.name))]),e("div",[t._v("Can Trade: "+t._s(n.canTrade))])])]),e("v-card-actions",[e("v-btn",{attrs:{to:"/location/"+n.id,flat:"",color:"orange"}},[t._v("Details")])],1)],1)],1)})],2)],1)]:[e("v-autocomplete",{attrs:{items:t.locations,"return-object":"","item-text":t.displayWithLocation,label:"Select Location"},model:{value:t.selectedLocation,callback:function(n){t.selectedLocation=n},expression:"selectedLocation"}})]],2)},c=[],s=e("795b"),u=e.n(s),l=e("75fc"),d=e("aede"),p=(e("96cf"),e("3b8d")),b=(e("7f7f"),e("d225")),m=e("b0b4"),f=e("308d"),h=e("6bb5"),v=e("4e2b"),y=(e("cadf"),e("551c"),e("097d"),e("9ab4")),g=e("aa5a"),j=e("9530"),O=e.n(j),L=e("60a3"),_=e("8c4f");function w(){var t=Object(d["a"])(["\n\t\t\t\tquery location($id: ID!) {\n\t\t\t\t\tlocation(id: $id) {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\ttype {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t\tparentLocation {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tparentLocation {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tparentLocation {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\tparentLocation {\n\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcanTrade\n\t\t\t\t\t\tchildren {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\ttype {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcanTrade\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"]);return w=function(){return t},t}function x(){var t=Object(d["a"])(["\n\t\t\t\t\tquery locations {\n\t\t\t\t\t\tlocations {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\ttype {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tparentLocation {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcanTrade\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]);return x=function(){return t},t}function I(){var t=Object(d["a"])(["\n\t\t\t\tquery tradeData {\n\t\t\t\t\tgameVersions {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tidentifier\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"]);return I=function(){return t},t}var k=function(t){function n(){var t;return Object(b["a"])(this,n),t=Object(f["a"])(this,Object(h["a"])(n).call(this)),t.currentUser=Object(g["b"])(),t.locationId=null,t.location=null,t.breadcrumbItems=[],t.selectedLocation=null,t.locations=[],t.gameVersions=[],t.gameVersion=null,t}return Object(v["a"])(n,t),Object(m["a"])(n,[{key:"displayWithLocation",value:function(t){var n=t.name;return n+=" (".concat(t.type.name,")"),t.parentLocation&&(n+=" - (".concat(t.parentLocation.name,")")),n}},{key:"beforeMount",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var n,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.locationId=this.$route.params.id,t.next=3,this.$apollo.query({query:O()(I())});case 3:e=t.sent,(n=this.gameVersions).push.apply(n,Object(l["a"])(e.data.gameVersions)),this.gameVersion=this.gameVersions[0];case 6:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()},{key:"onRouteChanged",value:function(t,n){t.params.id!==n.params.id&&(this.locationId=t.params.id)}},{key:"onSelectedLocationChanged",value:function(t){t&&(this.locationId=t.id),this.selectedLocation=null}},{key:"onLocationIdChanged",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(n,e){var a,i,o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log({to:n,from:e}),n!==e){t.next=5;break}return t.abrupt("return");case 5:if(void 0!==n&&null!==n){t.next=13;break}return t.next=8,this.$apollo.query({query:O()(x())});case 8:return i=t.sent,this.locations.splice(0,this.locations.length),(a=this.locations).push.apply(a,Object(l["a"])(i.data.locations)),this.location=null,t.abrupt("return");case 13:return t.next=15,this.$apollo.query({query:O()(w()),variables:{id:n},fetchPolicy:"no-cache"});case 15:if(o=t.sent,this.location=o.data.location,this.breadcrumbItems.splice(0,this.breadcrumbItems.length),this.location){r=this.location.parentLocation;while(r)this.breadcrumbItems.push({text:r.name,to:"/location/".concat(r.id)}),r=r.parentLocation;this.breadcrumbItems.reverse(),this.breadcrumbItems.push({text:this.location.name,disabled:!0})}case 19:case"end":return t.stop()}},t,this)}));function n(n,e){return t.apply(this,arguments)}return n}()}]),n}(L["d"]);y["a"]([Object(L["e"])("$route"),y["b"]("design:type",Function),y["b"]("design:paramtypes",["function"===typeof(a="undefined"!==typeof _["Route"]&&_["Route"])?a:Object,"function"===typeof(i="undefined"!==typeof _["Route"]&&_["Route"])?i:Object]),y["b"]("design:returntype",void 0)],k.prototype,"onRouteChanged",null),y["a"]([Object(L["e"])("selectedLocation"),y["b"]("design:type",Function),y["b"]("design:paramtypes",[Object]),y["b"]("design:returntype",void 0)],k.prototype,"onSelectedLocationChanged",null),y["a"]([Object(L["e"])("locationId"),y["b"]("design:type",Function),y["b"]("design:paramtypes",[Object,Object]),y["b"]("design:returntype","function"===typeof(o="undefined"!==typeof u.a&&u.a)?o:Object)],k.prototype,"onLocationIdChanged",null),k=y["a"]([L["a"],y["b"]("design:paramtypes",[])],k);var C=k,R=C,q=e("0c7c"),T=Object(q["a"])(R,r,c,!1,null,null,null);T.options.__file="location.vue";n["default"]=T.exports}}]);
//# sourceMappingURL=chunk-2518527e.762627ec.js.map