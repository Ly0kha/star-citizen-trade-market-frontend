(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fcd34270"],{"2bfd":function(t,e,n){},a434:function(t,e,n){"use strict";var s=n("23e7"),a=n("23cb"),i=n("a691"),r=n("50c4"),o=n("7b0b"),l=n("65f0"),c=n("8418"),h=n("1dde"),d=Math.max,u=Math.min,m=9007199254740991,p="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!h("splice")},{splice:function(t,e){var n,s,h,v,f,b,I=o(this),g=r(I.length),y=a(t,g),S=arguments.length;if(0===S?n=s=0:1===S?(n=0,s=g-y):(n=S-2,s=u(d(i(e),0),g-y)),g+n-s>m)throw TypeError(p);for(h=l(I,s),v=0;v<s;v++)f=y+v,f in I&&c(h,v,I[f]);if(h.length=s,n<s){for(v=y;v<g-s;v++)f=v+s,b=v+n,f in I?I[b]=I[f]:delete I[b];for(v=g;v>g-s+n;v--)delete I[v-1]}else if(n>s)for(v=g-s;v>y;v--)f=v+s-1,b=v+n-1,f in I?I[b]=I[f]:delete I[b];for(v=0;v<n;v++)I[v+y]=arguments[v+2];return I.length=g-s+n,h}})},abd3:function(t,e,n){},b0c0:function(t,e,n){var s=n("83ab"),a=n("9bf2").f,i=Function.prototype,r=i.toString,o=/^\s*function ([^ (]*)/,l="name";!s||l in i||a(i,l,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},c6a6:function(t,e,n){"use strict";n("2bfd");var s=n("b974"),a=n("8654"),i=n("80d2");const r={...s["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=s["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,n)=>{return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>this.filter(t,String(this.internalSearch),String(this.getText(t))))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=s["a"].options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...r,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>{return this.valueComparator(this.getValue(t),this.getValue(this.internalValue))})},listData(){const t=s["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},methods:{onFilteredItemsChanged(t,e){t!==e&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===i["v"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===i["v"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==i["v"].backspace&&t!==i["v"].delete||this.deleteCurrentItem())},deleteCurrentItem(){if(this.readonly)return;const t=this.selectedItems.length-1;if(-1===this.selectedIndex)return void(this.selectedIndex=t);const e=this.selectedItems[this.selectedIndex];if(this.getDisabled(e))return;const n=this.selectedIndex===t?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===n?this.setValue(this.multiple?[]:void 0):this.selectItem(e),this.selectedIndex=n},clearableCallback(){this.internalSearch=void 0,s["a"].options.methods.clearableCallback.call(this)},genInput(){const t=a["a"].options.methods.genInput.call(this);return t.data=t.data||{},t.data.attrs=t.data.attrs||{},t.data.attrs.autocomplete=t.data.attrs.autocomplete||"disabled",t.data.domProps=t.data.domProps||{},t.data.domProps.value=this.internalSearch,t},genInputSlot(){const t=s["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick(){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;s["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){s["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(){this.activateMenu()},selectItem(t){s["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){if(-1===this.selectedIndex)return;const e=this.selectedItems[this.selectedIndex],n=this.getText(e);t.clipboardData.setData("text/plain",n),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}})},fa61:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",[t.location?[n("v-breadcrumbs",{attrs:{items:t.breadcrumbItems,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("fas fa-chevron-right")])]},proxy:!0}],null,!1,3016687875)}),n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(t._s(t.location.name))]),n("v-card-text",[n("div",[t._v("Type: "+t._s(t.location.type.name))]),n("div",[t._v("Can Trade: "+t._s(t.location.canTrade))])])],1)],1),t._l(t.location.children,(function(e){return n("v-col",{key:e.id,attrs:{cols:"4"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(t._s(e.name))]),n("v-card-text",[n("div",[t._v("Type: "+t._s(e.type.name))]),n("div",[t._v("Can Trade: "+t._s(e.canTrade))])]),n("v-card-actions",[n("v-btn",{attrs:{to:"/location/"+e.id,text:"",color:"orange"}},[t._v("Details")])],1)],1)],1)}))],2)],1)]:[n("v-autocomplete",{attrs:{items:t.locations,"return-object":"","item-text":t.displayWithLocation,label:"Select Location"},model:{value:t.selectedLocation,callback:function(e){t.selectedLocation=e},expression:"selectedLocation"}})]],2)],1)},a=[],i=(n("a434"),n("b0c0"),n("d3b7"),n("2909")),r=n("8785"),o=(n("96cf"),n("d4ec")),l=n("bee2"),c=n("99de"),h=n("7e84"),d=n("262e"),u=n("9ab4"),m=n("aa5a"),p=n("9530"),v=n.n(p),f=n("2b0e"),b=n("60a3");function I(){var t=Object(r["a"])(["\n\t\t\t\tquery location($id: ID!) {\n\t\t\t\t\tlocation(id: $id) {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\ttype {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t\tparentLocation {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tparentLocation {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tparentLocation {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\tparentLocation {\n\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcanTrade\n\t\t\t\t\t\tchildren {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\ttype {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcanTrade\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"]);return I=function(){return t},t}function g(){var t=Object(r["a"])(["\n\t\t\t\t\tquery locations {\n\t\t\t\t\t\tlocations {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\ttype {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tparentLocation {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcanTrade\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]);return g=function(){return t},t}function y(){var t=Object(r["a"])(["\n\t\t\t\tquery tradeData {\n\t\t\t\t\tgameVersions {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tidentifier\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"]);return y=function(){return t},t}var S=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(h["a"])(e).call(this)),t.currentUser=Object(m["b"])(),t.locationId=null,t.location=null,t.breadcrumbItems=[],t.selectedLocation=null,t.locations=[],t.gameVersions=[],t.gameVersion=null,t}return Object(d["a"])(e,t),Object(l["a"])(e,[{key:"displayWithLocation",value:function(t){var e=t.name;return e+=" (".concat(t.type.name,")"),t.parentLocation&&(e+=" - (".concat(t.parentLocation.name,")")),e}},{key:"beforeMount",value:function(){var t,e;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return this.locationId=this.$route.params.id,n.next=3,regeneratorRuntime.awrap(this.$apollo.query({query:v()(y())}));case 3:e=n.sent,(t=this.gameVersions).push.apply(t,Object(i["a"])(e.data.gameVersions)),this.gameVersion=this.gameVersions[0];case 6:case"end":return n.stop()}}),null,this)}},{key:"onRouteChanged",value:function(t,e){t.params.id!==e.params.id&&(this.locationId=t.params.id)}},{key:"onSelectedLocationChanged",value:function(t){t&&(this.locationId=t.id),this.selectedLocation=null}},{key:"onLocationIdChanged",value:function(t,e){var n,s,a,r;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:if(console.log({to:t,from:e}),t!==e){o.next=5;break}return o.abrupt("return");case 5:if(void 0!==t&&null!==t){o.next=13;break}return o.next=8,regeneratorRuntime.awrap(this.$apollo.query({query:v()(g())}));case 8:return s=o.sent,this.locations.splice(0,this.locations.length),(n=this.locations).push.apply(n,Object(i["a"])(s.data.locations)),this.location=null,o.abrupt("return");case 13:return o.next=15,regeneratorRuntime.awrap(this.$apollo.query({query:v()(I()),variables:{id:t},fetchPolicy:"no-cache"}));case 15:if(a=o.sent,this.location=a.data.location,this.breadcrumbItems.splice(0,this.breadcrumbItems.length),this.location){r=this.location.parentLocation;while(r)this.breadcrumbItems.push({text:r.name,to:"/location/".concat(r.id)}),r=r.parentLocation;this.breadcrumbItems.reverse(),this.breadcrumbItems.push({text:this.location.name,disabled:!0})}case 19:case"end":return o.stop()}}),null,this)}}]),e}(f["a"]);Object(u["c"])([Object(b["d"])("$route")],S.prototype,"onRouteChanged",null),Object(u["c"])([Object(b["d"])("selectedLocation")],S.prototype,"onSelectedLocationChanged",null),Object(u["c"])([Object(b["d"])("locationId")],S.prototype,"onLocationIdChanged",null),S=Object(u["c"])([b["a"]],S);var x=S,C=x,D=n("2877"),w=n("6544"),V=n.n(w),L=n("c6a6"),_=(n("abd3"),n("1c87")),O=n("58df"),$=Object(O["a"])(_["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(t){const{tag:e,data:n}=this.generateRouteLink();return t("li",[t(e,{...n,attrs:{...n.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}}),j=n("80d2");const k=Object(j["i"])("v-breadcrumbs__divider","li");var T=n("7560"),M=Object(O["a"])(T["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(k,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const t=[],e=!!this.$scopedSlots.item,n=[];for(let s=0;s<this.items.length;s++){const a=this.items[s];n.push(a.text),e?t.push(this.$scopedSlots.item({item:a})):t.push(this.$createElement($,{key:n.join("."),props:a},[a.text])),s<this.items.length-1&&t.push(this.genDivider())}return t}},render(t){const e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),F=n("8336"),A=n("b0af"),R=n("99d9"),q=n("62ad"),B=n("a523"),P=n("132d"),z=n("0fd9"),E=Object(D["a"])(C,s,a,!1,null,null,null);e["default"]=E.exports;V()(E,{VAutocomplete:L["a"],VBreadcrumbs:M,VBtn:F["a"],VCard:A["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VCol:q["a"],VContainer:B["a"],VIcon:P["a"],VRow:z["a"]})}}]);
//# sourceMappingURL=chunk-fcd34270.cee741b9.js.map