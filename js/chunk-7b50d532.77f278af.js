(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b50d532"],{"0229":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",[a("h1",{staticClass:"display-2"},[t._v("Shout Outs")]),a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{lg:"6",md:"6",sm:"11"}},[a("v-card",{attrs:{tile:"","min-width":"497"}},[a("div",{staticClass:"pa-2"},[a("v-img",{attrs:{src:"https://yt3.ggpht.com/UjLOwPyJDQ_y4EBi_s3biuPZNIac9DVbbdCATk4TVha7a0LUoo13T_bHVGJ-8B9aaRh-i78z2mdQyGI=s1121-nd","aspect-ratio":"1.01326259947","max-width":"200"}})],1),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v("KnebelDE")]),a("div",[t._v("Supported this website in the following video (15:02):"),a("iframe",{attrs:{width:"465",height:"262",src:"https://www.youtube.com/embed/65y8GTI6GSI?start=902",frameborder:"0",allow:"autoplay; encrypted-media; picture-in-picture",allowfullscreen:""}})])])]),a("v-card-actions",[a("v-btn",{attrs:{href:"https://www.youtube.com/user/Knebelinolein",target:"_blank",color:"red accent-4",tile:""}},[t._v("YouTube")]),a("v-btn",{attrs:{href:"https://www.twitch.tv/knebelde",target:"_blank",color:"deep-purple",tile:""}},[t._v("Twitch")]),a("v-btn",{attrs:{href:"https://www.patreon.com/KnebelDE",target:"_blank",color:"deep-orange",tile:""}},[t._v("Patreon")]),a("v-btn",{attrs:{href:"https://www.facebook.com/KnebelDE",target:"_blank",color:"indigo darken-1",tile:""}},[t._v("Facebook")])],1)],1)],1),a("v-col",{attrs:{lg:"5",md:"6",sm:"11"}},[a("v-card",{staticStyle:{"background-image":"url(https://www.black-horizons.space/images/background_20170430.jpg)"},attrs:{tile:""}},[a("div",{staticClass:"pa-2"},[a("v-img",{attrs:{src:"https://www.black-horizons.space/styles/pbtech/theme/images/bh_logo.png","aspect-ratio":"10.9264705882"}})],1),a("v-card-title",{staticClass:"headline"},[t._v("Black Horizons")]),a("v-card-text",[a("div",[t._v("Clan of the website owner")])]),a("v-card-actions",[a("v-btn",{attrs:{href:"https://www.black-horizons.space",target:"_blank",color:"orange",tile:""}},[t._v("Forum")])],1)],1)],1),a("v-col",{attrs:{lg:"5",md:"6",sm:"11"}},[a("v-card",{attrs:{tile:""}},[a("v-img",{attrs:{src:"https://starcitizenbase.de/wp-content/uploads/2018/02/Bild_2_Knusper_Logo-800x445.jpg","aspect-ratio":"1.79775280899"}}),a("v-card-title",{staticClass:"headline"},[t._v("Knusper")]),a("v-card-text",[a("div",[t._v("He creates great German content for Star Citizen")])]),a("v-card-actions",[a("v-btn",{attrs:{href:"https://www.youtube.com/channel/UCoRflWTWHvr0jbKzIVYtGzw",target:"_blank",color:"red accent-4",tile:""}},[t._v("YouTube")]),a("v-btn",{attrs:{href:"https://www.patreon.com/Knusper",target:"_blank",color:"deep-orange",tile:""}},[t._v("Patreon")]),a("v-btn",{attrs:{href:"https://www.facebook.com/KNUSPERLIVE",target:"_blank",color:"indigo darken-1",tile:""}},[t._v("Facebook")])],1)],1)],1)],1)],1)],1)],1)},r=[],o=a("d4ec"),i=a("99de"),l=a("7e84"),s=a("262e"),c=a("9ab4"),d=a("2b0e"),u=a("60a3"),f=function(t){function e(){return Object(o["a"])(this,e),Object(i["a"])(this,Object(l["a"])(e).call(this))}return Object(s["a"])(e,t),e}(d["a"]);f=Object(c["c"])([u["a"],Object(c["f"])("design:paramtypes",[])],f);var p=f,b=p,g=a("2877"),v=a("6544"),h=a.n(v),w=a("8336"),y=a("b0af"),m=a("99d9"),j=a("62ad"),_=a("a523"),k=a("adda"),C=a("0fd9"),S=Object(g["a"])(b,n,r,!1,null,null,null);e["default"]=S.exports;h()(S,{VBtn:w["a"],VCard:y["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:j["a"],VContainer:_["a"],VImg:k["a"],VRow:C["a"]})},"0fd9":function(t,e,a){"use strict";a("4b85");var n=a("2b0e"),r=a("d9f7"),o=a("80d2");const i=["sm","md","lg","xl"],l=["start","end","center"];function s(t,e){return i.reduce((a,n)=>(a[t+Object(o["C"])(n)]=e(),a),{})}const c=t=>[...l,"baseline","stretch"].includes(t),d=s("align",()=>({type:String,default:null,validator:c})),u=t=>[...l,"space-between","space-around"].includes(t),f=s("justify",()=>({type:String,default:null,validator:u})),p=t=>[...l,"space-between","space-around","stretch"].includes(t),b=s("alignContent",()=>({type:String,default:null,validator:p})),g={align:Object.keys(d),justify:Object.keys(f),alignContent:Object.keys(b)},v={align:"align",justify:"justify",alignContent:"align-content"};function h(t,e,a){let n=v[t];if(null!=a){if(e){const a=e.replace(t,"");n+=`-${a}`}return n+=`-${a}`,n.toLowerCase()}}const w=new Map;e["a"]=n["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...f,alignContent:{type:String,default:null,validator:p},...b},render(t,{props:e,data:a,children:n}){let o="";for(const r in e)o+=String(e[r]);let i=w.get(o);if(!i){let t;for(t in i=[],g)g[t].forEach(a=>{const n=e[a],r=h(t,a,n);r&&i.push(r)});i.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),w.set(o,i)}return t(e.tag,Object(r["a"])(a,{staticClass:"row",class:i}),n)}})},"60a3":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return l})),a.d(e,"d",(function(){return s}));var n=a("2fe1");a.d(e,"a",(function(){return n["b"]}));var r="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function o(t,e,a){r&&(Array.isArray(t)||"function"===typeof t||"undefined"!==typeof t.type||(t.type=Reflect.getMetadata("design:type",e,a)))}function i(t,e){return void 0===e&&(e={}),function(a,r){o(e,a,r),Object(n["a"])((function(a,n){(a.props||(a.props={}))[n]=e,a.model={prop:n,event:t||n}}))(a,r)}}function l(t){return void 0===t&&(t={}),function(e,a){o(t,e,a),Object(n["a"])((function(e,a){(e.props||(e.props={}))[a]=t}))(e,a)}}function s(t,e){void 0===e&&(e={});var a=e.deep,r=void 0!==a&&a,o=e.immediate,i=void 0!==o&&o;return Object(n["a"])((function(e,a){"object"!==typeof e.watch&&(e.watch=Object.create(null));var n=e.watch;"object"!==typeof n[t]||Array.isArray(n[t])?"undefined"===typeof n[t]&&(n[t]=[]):n[t]=[n[t]],n[t].push({handler:a,deep:r,immediate:i})}))}},"62ad":function(t,e,a){"use strict";a("4b85");var n=a("2b0e"),r=a("d9f7"),o=a("80d2");const i=["sm","md","lg","xl"],l=(()=>i.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),s=(()=>i.reduce((t,e)=>(t["offset"+Object(o["C"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>i.reduce((t,e)=>(t["order"+Object(o["C"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(l),offset:Object.keys(s),order:Object.keys(c)};function u(t,e,a){let n=t;if(null!=a&&!1!==a){if(e){const a=e.replace(t,"");n+=`-${a}`}return"col"!==t||""!==a&&!0!==a?(n+=`-${a}`,n.toLowerCase()):n.toLowerCase()}}const f=new Map;e["a"]=n["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...s,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:a,children:n,parent:o}){let i="";for(const r in e)i+=String(e[r]);let l=f.get(i);if(!l){let t;for(t in l=[],d)d[t].forEach(a=>{const n=e[a],r=u(t,a,n);r&&l.push(r)});const a=l.some(t=>t.startsWith("col-"));l.push({col:!a||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),f.set(i,l)}return t(e.tag,Object(r["a"])(a,{class:l}),n)}})}}]);
//# sourceMappingURL=chunk-7b50d532.77f278af.js.map