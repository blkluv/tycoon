(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("UiItemsComponent"),n("MapComponent")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("GameStatsComponent"),n("PropertyInfoComponent"),n("ListOfBuildingsComponent"),n("BankComponent"),n("ExperienceComponent")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("b-card",{staticClass:"lift"},[n("b-card-text",{staticClass:"flex-items"},[n("div",{staticClass:"flex-item"},[n("b-dropdown",{attrs:{size:"sm",variant:"light","toggle-class":"no-padding"},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("b-icon",{attrs:{icon:"justify"}})]},proxy:!0}])},[n("b-dropdown-item",{on:{click:function(e){return t.openExperienceWindow()}}},[t._v("Experience")]),n("b-dropdown-item",{on:{click:function(e){return t.openListOfBuildings()}}},[t._v("List of buildings")]),n("b-dropdown-item",{on:{click:function(e){return t.openBank()}}},[t._v("Bank")])],1)],1),n("div",{staticClass:"flex-item"},[n("b-icon",{attrs:{icon:"cash-stack"}}),n("span",{staticClass:"font-weight-bold",class:{"text-success":t.money>=0,"text-danger":t.money<0}},[t._v(t._s(t.moneyOutput))])],1),n("div",{staticClass:"flex-item"},[n("b-icon",{staticClass:"clickable",attrs:{icon:"person"},on:{click:function(e){return t.openExperienceWindow()}}}),n("span",[t._v(t._s(t.level))])],1),n("div",{staticClass:"flex-item"},[n("b-icon",{staticClass:"clickable",attrs:{icon:"door-open"},on:{click:function(e){return t.openListOfBuildings()}}}),n("span",[t._v(t._s(t.rentingFeatures.length))])],1),n("div",{staticClass:"flex-item"},[n("b-icon",{staticClass:"clickable",attrs:{icon:"building"},on:{click:function(e){return t.openListOfBuildings()}}}),n("span",[t._v(t._s(t.ownedFeatures.length))])],1),n("div",{staticClass:"flex-item"},[n("b-icon",{attrs:{icon:"clock"}}),n("span",[t._v(t._s(t.timeOutput))])],1)])],1)],1)])},u=[],l=(n("99af"),n("ac1f"),n("1276"),n("b85c")),d=(n("13d5"),n("d3b7"),n("25f0"),n("5319"),n("595b"));function f(t){var e=t.geometry.coordinates.length>1,n=e?d["multiPolygon"](t.geometry.coordinates):d["polygon"](t.geometry.coordinates),a=d["area"](n);if(!a&&e){var o=t.geometry.coordinates[t.geometry.coordinates.reduce((function(t,e,n,a){return a[t].length>e.length?t:n}),0)];n=d["polygon"]([o]),a=d["area"](n)}return a}function p(t){return L(t,1e3)}function m(t){return L(t,15)}function h(t){return p(t)/10}function b(t){return m(t)/20}function v(t){return.04*t.rentPrice}function y(t){return 2.9*t.rentPrice}function g(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR"}).format(t)}function O(t){return Math.floor((Math.sqrt(100*(2*t+25))+50)/100)}function x(t){return(Math.pow(t,2)+t)/2*100-100*t}function _(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)}))}function w(t){return Math.ceil(t.area*C(t)/100)}function C(t){var e=t.properties.height;return t.area<30&&e>3&&(e/=3,e<3&&(e=3)),e}function L(t,e){var n=C(t),a=t.area*n*e;return a}var F="selectFeature",k="addToOwnedFeatures",$="addToRentingFeatures",P="removeFromRentingFeatures",j="addMoney",B="openListOfBuildings",T="setLastPayoutDate",S="openBank",M="addLoan",R="payOffLoan",E="openExperience",I="addExperience",q={name:"GameStatsComponent",data:function(){return{timeOutput:""}},mounted:function(){this.getTime(),setInterval(this.getTime,100),setInterval(this.incomeLoop,1e3)},computed:{money:function(){return this.$store.state.money},moneyOutput:function(){return g(this.money)},rentingFeatures:function(){return this.$store.state.rentingFeatures},ownedFeatures:function(){return this.$store.state.ownedFeatures},level:function(){return this.$store.state.level}},watch:{level:function(t,e){t!=e&&this.$bvToast.toast("Level up!",{noCloseButton:!0,toaster:"b-toaster-bottom-left",variant:"success",solid:!0})}},methods:{getTime:function(){var t=new Date;this.timeOutput="".concat(t.toTimeString().split(" GMT")[0]," ").concat(t.toDateString())},incomeLoop:function(){var t=new Date,e=(t-new Date(this.$store.state.lastPayoutDate))/36e5;if(e=Math.floor(e),!(e<1)){this.$store.dispatch(T,t),this.lastPayout=t;var n,a=0,o=0,i=0,r=0,s=Object(l["a"])(this.$store.state.rentingFeatures);try{for(s.s();!(n=s.n()).done;){var c=n.value;a+=c.incomeRenting,o+=c.incomeRenting}}catch(b){s.e(b)}finally{s.f()}var u,d=Object(l["a"])(this.$store.state.ownedFeatures);try{for(d.s();!(u=d.n()).done;){var f=u.value;a+=f.incomeOwned,i+=f.incomeOwned}}catch(b){d.e(b)}finally{d.f()}var p,m=Object(l["a"])(this.$store.state.loans);try{for(m.s();!(p=m.n()).done;){var h=p.value;a-=h.interest,r+=h.interest}}catch(b){m.e(b)}finally{m.f()}if(o||i||r)if(o+i!==r){if(a*=e,a<0)return this.$store.dispatch(j,a),void this.$bvToast.toast("Costs are higher than income. ".concat(g(-1*a)," deducted."),{noCloseButton:!0,toaster:"b-toaster-bottom-left",variant:"warning",solid:!0});this.$store.dispatch(j,a),this.$bvToast.toast("Rental income of ".concat(g(a)," received."),{noCloseButton:!0,toaster:"b-toaster-bottom-left",variant:"success",solid:!0})}else this.$bvToast.toast("Income equal to costs.",{noCloseButton:!0,toaster:"b-toaster-bottom-left",variant:"warning",solid:!0});else this.$bvToast.toast("No rent received this month.",{noCloseButton:!0,toaster:"b-toaster-bottom-left",variant:"success",solid:!0})}},openListOfBuildings:function(){this.$store.dispatch(B,!this.$store.state.listOfBuildingsOpen)},openBank:function(){this.$store.dispatch(S,!this.$store.state.bankOpen)},openExperienceWindow:function(){this.$store.dispatch(E,!this.$store.state.experienceOpen)}}},D=q,A=(n("6cf5"),n("2877")),N=Object(A["a"])(D,c,u,!1,null,"e024abca",null),z=N.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.feature?n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("b-card",{staticClass:"lift",attrs:{title:"Property info"}},[t.isRenting?n("b-badge",{staticStyle:{"background-color":"darkslateblue",opacity:"0.8"}},[t._v("Subletting")]):t._e(),t.isOwned?n("b-badge",{staticStyle:{"background-color":"dodgerblue",opacity:"0.8"}},[t._v("Owned")]):t._e(),t.isRenting||t.isOwned?t._e():n("b-badge",{attrs:{variant:"secondary"}},[t._v("Available")]),n("b-card-text",[t._v(" Area: "+t._s(t.areaOutput)+"m²"),n("br"),t._v(" Height: "+t._s(t.feature.properties.height)+"m"),n("br"),t._v(" Rent Price: "+t._s(t.rentPriceOutput)+" per month - Subletting income: "+t._s(t.formatCurrency(t.feature.incomeRenting))),n("br"),t._v(" Buy Price: "+t._s(t.buyPriceOutput)+" - Renting income: "+t._s(t.formatCurrency(t.feature.incomeOwned))),n("br"),t._v(" Level required: "),n("b-badge",{attrs:{pill:"",variant:t.requiredLevel<=t.level?"success":"danger"}},[t._v(t._s(t.requiredLevel))])],1),t.isOwned?t._e():n("b-button",{class:{disabled:t.money<t.feature.buyPrice||t.requiredLevel>t.level},attrs:{variant:"primary",disabled:t.money<t.feature.buyPrice||t.requiredLevel>t.level},on:{click:function(e){return t.buy()}}},[t._v(" Buy ")]),t.isRenting||t.isOwned?t._e():n("b-button",{staticClass:"ml-2",class:{disabled:t.money<t.feature.rentPrice||t.requiredLevel>t.level},attrs:{variant:"primary",disabled:t.money<t.feature.rentPrice||t.requiredLevel>t.level},on:{click:function(e){return t.rent()}}},[t._v(" Rent ")])],1)],1)]):t._e()},U=[],J=(n("7db0"),n("b680"),{name:"PropertyInfoComponent",data:function(){return{isOwned:!1,isRenting:!1,areaOutput:null,rentPriceOutput:null,buyPriceOutput:null,requiredLevel:null}},mounted:function(){this.setFeatureOptions(this.feature)},computed:{feature:function(){return this.$store.state.selectedFeature},money:function(){return this.$store.state.money},level:function(){return this.$store.state.level}},watch:{feature:function(t){this.setFeatureOptions(t)}},methods:{formatCurrency:g,getLevelRequiredForBuilding:w,setFeatureOptions:function(t){this.isRenting=t&&this.$store.state.rentingFeatures.find((function(e){return e.id===t.id})),this.isOwned=t&&this.$store.state.ownedFeatures.find((function(e){return e.id===t.id})),this.areaOutput=t?t.area.toFixed(0):null,this.rentPriceOutput=t?g(t.rentPrice):null,this.buyPriceOutput=t?g(t.buyPrice):null,this.requiredLevel=t?w(t):null},buy:function(){this.$store.dispatch(j,-this.feature.buyPrice),this.$store.dispatch(k,this.feature),this.$store.dispatch(I,h(this.feature)),this.isRenting&&this.$store.dispatch(P,this.feature.id),this.$store.dispatch(F,null)},rent:function(){this.$store.dispatch(j,-this.feature.rentPrice),this.$store.dispatch($,this.feature),this.$store.dispatch(I,b(this.feature)),this.$store.dispatch(F,null)}}}),W=J,Z=(n("cb2a"),Object(A["a"])(W,G,U,!1,null,"57042e12",null)),V=Z.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.listOfBuildingsOpen?n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("b-card",{staticClass:"lift",attrs:{"no-body":""}},[n("b-tabs",{attrs:{card:""}},[n("b-tab",{attrs:{title:"Owned",active:""}},[t.ownedFeatures.length?n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("id")]),n("th",{attrs:{scope:"col"}},[t._v("income")]),n("th",{attrs:{scope:"col"}},[t._v("area m²")]),n("th",{attrs:{scope:"col"}},[t._v("height m")])])]),n("tbody",t._l(t.ownedFeatures,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[t._v(t._s(t.formatCurrency(e.incomeOwned)))]),n("td",[t._v(t._s(e.area.toFixed(0)))]),n("td",[t._v(t._s(e.properties.height))])])})),0)]):n("b-card-text",[t._v("No owned buildings")])],1),n("b-tab",{attrs:{title:"Subletting"}},[t.rentingFeatures.length?n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("id")]),n("th",{attrs:{scope:"col"}},[t._v("income")]),n("th",{attrs:{scope:"col"}},[t._v("area m²")]),n("th",{attrs:{scope:"col"}},[t._v("height m")])])]),n("tbody",t._l(t.rentingFeatures,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[t._v(t._s(t.formatCurrency(e.incomeRenting)))]),n("td",[t._v(t._s(e.area.toFixed(0)))]),n("td",[t._v(t._s(e.properties.height))])])})),0)]):n("b-card-text",[t._v("Not subletting any buildings")])],1)],1)],1)],1)]):t._e()},H=[],Q={name:"ListOfBuildingsComponent",data:function(){return{rentingFeaturesSorted:null,ownedFeaturesSorted:null}},mounted:function(){},computed:{feature:function(){return this.$store.state.selectedFeature},listOfBuildingsOpen:function(){return this.$store.state.listOfBuildingsOpen},rentingFeatures:function(){return this.$store.state.rentingFeatures},ownedFeatures:function(){return this.$store.state.ownedFeatures}},methods:{formatCurrency:g}},X=Q,K=Object(A["a"])(X,Y,H,!1,null,"e3af5fec",null),tt=K.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.bankOpen?n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("b-card",{staticClass:"lift",attrs:{title:"Bank"}},[n("b-row",[n("b-col",{attrs:{cols:"9"}},[n("b-form-group",{attrs:{id:"loan-range-set","label-cols-sm":"4","label-cols-lg":"4",description:"Amount: "+t.formatCurrency(t.amountToLoan)+" | Monthly interest: "+t.formatCurrency(t.interest),label:"Open a new loan","label-for":"loan-range"}},[n("b-form-input",{attrs:{id:"loan-range",type:"range",min:"100",max:t.maxAmountToLoan,step:"100"},model:{value:t.amountToLoan,callback:function(e){t.amountToLoan=e},expression:"amountToLoan"}})],1)],1),n("b-col",[n("span",{staticClass:"d-inline-block",staticStyle:{float:"right"},attrs:{id:"take-loan-button",tabindex:"0"}},[n("b-button",{staticClass:"button-right",class:{disabled:t.maxLoansReached},attrs:{id:"take-loan-button",variant:"success",disabled:t.maxLoansReached},on:{click:function(e){return t.takeLoan()}}},[t._v("Take loan")])],1),t.maxLoansReached?n("b-tooltip",{attrs:{target:"take-loan-button"}},[t._v(" Max amount of loans for your current level reached ")]):t._e()],1)],1),t.selectedLoan?n("b-row",[n("b-col",{attrs:{cols:"9"}},[n("b-form-group",{attrs:{id:"pay-off-set","label-cols-sm":"4","label-cols-lg":"4",description:"Amount: "+t.formatCurrency(t.amountToPayOff)+" | Max: "+t.formatCurrency(t.amountPayable),label:"Pay off this loan","label-for":"pay-off-input"}},[n("b-form-input",{attrs:{id:"pay-off-input",type:"range",min:"1",max:t.amountPayable,step:"1"},model:{value:t.amountToPayOff,callback:function(e){t.amountToPayOff=e},expression:"amountToPayOff"}})],1)],1),n("b-col",[n("b-button",{staticClass:"button-right",attrs:{variant:"success"},on:{click:function(e){return t.payOffLoan()}}},[t._v("Pay off")])],1)],1):t._e(),t.loans.length?n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Amount")]),n("th",{attrs:{scope:"col"}},[t._v("Payed off")]),n("th",{attrs:{scope:"col"}},[t._v("Monthly interest")]),n("th",{attrs:{scope:"col"}},[t._v("Actions")])])]),n("tbody",t._l(t.loans,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(t.formatCurrency(e.amount)))]),n("td",[t._v(t._s(t.formatCurrency(e.payedBack)))]),n("td",[t._v(t._s(t.formatCurrency(e.interest)))]),n("td",[n("b-button",{attrs:{variant:"success"},on:{click:function(n){t.selectedLoan=e}}},[t._v("Pay off")])],1)])})),0)]):n("b-card-text",[t._v("No open loans")])],1)],1)]):t._e()},nt=[],at={name:"BankComponent",data:function(){return{amountToLoan:0,interest:0,selectedLoan:null,amountToPayOff:0,amountPayable:0,maxAmountToLoan:5e3}},mounted:function(){this.setBaseLoan(),this.setBasePayOff(),this.setMaxLoan()},computed:{bankOpen:function(){return this.$store.state.bankOpen},loans:function(){return this.$store.state.loans},money:function(){return this.$store.state.money},level:function(){return this.$store.state.level},maxLoansReached:function(){return this.loans.length>=this.level+1}},watch:{amountToLoan:function(t){this.interest=3.5*t/100},money:function(t){this.amountPayable=this.selectedLoan?this.selectedLoan.amount-this.selectedLoan.payedBack>t?t:this.selectedLoan.amount-this.selectedLoan.payedBack:0},selectedLoan:function(t){this.amountPayable=t?t.amount-t.payedBack>this.money?this.money:t.amount-t.payedBack:0},level:function(){this.setMaxLoan()}},methods:{formatCurrency:g,setBaseLoan:function(){this.amountToLoan=100,this.interest=3.5},setBasePayOff:function(){this.amountToPayOff=1},setMaxLoan:function(){this.maxAmountToLoan=5e3*this.level},takeLoan:function(){this.$store.dispatch(M,{id:_(),amount:this.amountToLoan,payedBack:0,interest:this.interest}),this.$store.dispatch(j,parseInt(this.amountToLoan)),this.setBaseLoan()},payOffLoan:function(){this.$store.dispatch(R,{id:this.selectedLoan.id,amount:this.amountToPayOff}),this.$store.dispatch(j,-this.amountToPayOff),this.selectedLoan=0,this.setBasePayOff()}}},ot=at,it=(n("7e59"),Object(A["a"])(ot,et,nt,!1,null,"45200e90",null)),rt=it.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.experienceOpen?n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("b-card",{staticClass:"lift"},[n("b-card-title",[t._v("Experience "),n("b-badge",{attrs:{pill:"",variant:"success"}},[t._v(t._s(t.level))])],1),n("b-card-text",[t._v("Progress: "+t._s(t.experience.toFixed(0))+"/"+t._s(t.nextExperience)+"xp")]),n("b-progress",{attrs:{value:t.experience,max:t.nextExperience,"show-value":"",variant:"success",height:"24px"}})],1)],1)]):t._e()},ct=[],ut={name:"BankComponent",data:function(){return{nextExperience:0,nextLevel:0}},mounted:function(){this.setNextLevelProperties(this.level)},computed:{experienceOpen:function(){return this.$store.state.experienceOpen},experience:function(){return this.$store.state.experience},level:function(){return this.$store.state.level}},watch:{level:function(t){this.setNextLevelProperties(t)}},methods:{setNextLevelProperties:function(t){this.nextLevel=t+1,this.nextExperience=x(this.nextLevel)}}},lt=ut,dt=Object(A["a"])(lt,st,ct,!1,null,"b7563648",null),ft=dt.exports,pt={name:"UiItemsComponent",data:function(){return{}},components:{GameStatsComponent:z,PropertyInfoComponent:V,ListOfBuildingsComponent:tt,BankComponent:rt,ExperienceComponent:ft}},mt=pt,ht=(n("93ac6"),Object(A["a"])(mt,r,s,!1,null,"189dc519",null)),bt=ht.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"map"}})},yt=[],gt=(n("4de4"),n("caad"),n("d81d"),n("2532"),n("e192")),Ot=n.n(gt),xt=n("885b"),_t=n.n(xt),wt=(n("c307"),"#aaa"),Ct="dodgerblue",Lt="darkslateblue";function Ft(){Ot.a.accessToken="pk.eyJ1IjoiZGV2ZWxvcG1lbnQ0dSIsImEiOiJjamZkeGc3Y2M0OXc0MzNwZDl3enRpbzc3In0.S95dVrY6n-TxsdzqG4dvNg";var t=new Ot.a.Map({style:"mapbox://styles/mapbox/light-v10",center:[4.89327,52.37304],zoom:17,pitch:48,bearing:0,container:"map",antialias:!0,hash:!0});return t.addControl(new _t.a({accessToken:Ot.a.accessToken,mapboxgl:Ot.a})),t}function kt(t){for(var e=t.getStyle().layers,n=0;n<e.length;n++)if("symbol"===e[n].type&&e[n].layout["text-field"])return e[n].id}function $t(t,e){t.addLayer({id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:13,paint:{"fill-extrusion-color":wt,"fill-extrusion-height":["get","height"],"fill-extrusion-opacity":.6}},e),t.addSource("building-selected",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),t.addLayer({id:"highlight-building",source:"building-selected",type:"fill",minzoom:13,paint:{"fill-opacity":.5}},e),t.addSource("buildings-owned",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),t.addLayer({id:"highlight-buildings-owned",source:"buildings-owned",type:"fill",minzoom:13,paint:{"fill-color":Ct,"fill-opacity":.6,"fill-outline-color":"gray"}},e),t.addSource("buildings-renting",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),t.addLayer({id:"highlight-buildings-renting",source:"buildings-renting",type:"fill",minzoom:13,paint:{"fill-color":Lt,"fill-opacity":.6,"fill-outline-color":"gray"}},e)}var Pt,jt,Bt={name:"MapComponent",data:function(){return{map:null}},mounted:function(){var t=this;this.map=Ft(),this.map.on("load",(function(){var e=kt(t.map);$t(t.map,e)})),this.map.on("click",(function(e){var n=t.map.queryRenderedFeatures(e.point);n=n.filter((function(t){return"building"===t.sourceLayer&&"false"===t.properties.underground}));var a=n.length?n[0]:null,o=null;a&&(o={id:a.id,source:a.source,sourceLayer:a.sourceLayer,layerId:a.layer.id,properties:a.properties,geometry:a._geometry||a.geometry,values:a._vectorTileFeature._values},o.area=f(o),o.rentPrice=m(o),o.buyPrice=p(o),o.incomeRenting=v(o),o.incomeOwned=y(o)),t.$store.dispatch(F,o),t.map.getSource("building-selected").setData({type:"FeatureCollection",features:a?[a]:[]})})),this.map.on("data",(function(e){e.sourceId&&"composite"===e.sourceId&&t.renderFeatures()}))},computed:{rentingFeatures:function(){return this.$store.state.rentingFeatures},ownedFeatures:function(){return this.$store.state.ownedFeatures},feature:function(){return this.$store.state.selectedFeature}},watch:{rentingFeatures:function(){this.renderFeatures()},ownedFeatures:function(){this.renderFeatures()},feature:function(t){t||this.map.getSource("building-selected").setData({type:"FeatureCollection",features:[]})}},methods:{renderFeatures:function(){if(this.map.getSource("buildings-owned")){var t=this.map.querySourceFeatures("composite",{sourceLayer:"building"}),e=this.$store.state.rentingFeatures.map((function(t){return t.id})),n=t.filter((function(t){return e.includes(t.id)}));this.map.getSource("buildings-renting").setData({type:"FeatureCollection",features:n});var a=this.$store.state.ownedFeatures.map((function(t){return t.id})),o=t.filter((function(t){return a.includes(t.id)}));this.map.getSource("buildings-owned").setData({type:"FeatureCollection",features:o})}}}},Tt=Bt,St=(n("d90e"),Object(A["a"])(Tt,vt,yt,!1,null,"26f2ba57",null)),Mt=St.exports,Rt={name:"App",components:{UiItemsComponent:bt,MapComponent:Mt}},Et=Rt,It=(n("a340"),Object(A["a"])(Et,o,i,!1,null,"0c8c3b2c",null)),qt=It.exports,Dt=(n("c975"),n("a434"),n("ade3")),At=n("2f62"),Nt=n("bfa9");a["default"].use(At["a"]);var zt=new Nt["a"]({storage:window.localStorage}),Gt=new At["a"].Store({state:{money:500,experience:0,level:1,selectedFeature:null,rentingFeatures:[],ownedFeatures:[],listOfBuildingsOpen:!1,bankOpen:!1,experienceOpen:!1,lastPayoutDate:new Date,loans:[]},mutations:(Pt={},Object(Dt["a"])(Pt,F,(function(t,e){t.selectedFeature=e,e&&(t.bankOpen=!1,t.listOfBuildingsOpen=!1,t.experienceOpen=!1)})),Object(Dt["a"])(Pt,$,(function(t,e){t.rentingFeatures.push(e)})),Object(Dt["a"])(Pt,P,(function(t,e){t.rentingFeatures=t.rentingFeatures.filter((function(t){return t.id!==e}))})),Object(Dt["a"])(Pt,k,(function(t,e){t.ownedFeatures.push(e)})),Object(Dt["a"])(Pt,j,(function(t,e){t.money+=e})),Object(Dt["a"])(Pt,B,(function(t,e){t.listOfBuildingsOpen=e,e&&(t.bankOpen=!1,t.experienceOpen=!1,t.selectedFeature=null)})),Object(Dt["a"])(Pt,T,(function(t,e){t.lastPayoutDate=e})),Object(Dt["a"])(Pt,S,(function(t,e){t.bankOpen=e,e&&(t.listOfBuildingsOpen=!1,t.experienceOpen=!1,t.selectedFeature=null)})),Object(Dt["a"])(Pt,M,(function(t,e){t.loans.push(e)})),Object(Dt["a"])(Pt,R,(function(t,e){var n=t.loans.find((function(t){return t.id===e.id}));if(n.payedBack+=parseInt(e.amount),parseInt(n.amount)===n.payedBack)t.loans=t.loans.filter((function(t){return t.id!==e.id}));else{var a=t.loans.map((function(t){return t.id})).indexOf(n.id);t.loans.splice(a,1,n)}})),Object(Dt["a"])(Pt,E,(function(t,e){t.experienceOpen=e,e&&(t.listOfBuildingsOpen=!1,t.bankOpen=!1,t.selectedFeature=null)})),Object(Dt["a"])(Pt,I,(function(t,e){t.experience+=e,t.level=O(t.experience)})),Pt),actions:(jt={},Object(Dt["a"])(jt,F,(function(t,e){var n=t.commit;n(F,e)})),Object(Dt["a"])(jt,$,(function(t,e){var n=t.commit;n($,e)})),Object(Dt["a"])(jt,P,(function(t,e){var n=t.commit;n(P,e)})),Object(Dt["a"])(jt,k,(function(t,e){var n=t.commit;n(k,e)})),Object(Dt["a"])(jt,j,(function(t,e){var n=t.commit;n(j,e)})),Object(Dt["a"])(jt,B,(function(t,e){var n=t.commit;n(B,e)})),Object(Dt["a"])(jt,T,(function(t,e){var n=t.commit;n(T,e)})),Object(Dt["a"])(jt,S,(function(t,e){var n=t.commit;n(S,e)})),Object(Dt["a"])(jt,M,(function(t,e){var n=t.commit;n(M,e)})),Object(Dt["a"])(jt,R,(function(t,e){var n=t.commit;n(R,e)})),Object(Dt["a"])(jt,E,(function(t,e){var n=t.commit;n(E,e)})),Object(Dt["a"])(jt,I,(function(t,e){var n=t.commit;n(I,e)})),jt),plugins:[zt.plugin]}),Ut=n("2b88"),Jt=n.n(Ut),Wt=n("5f5b"),Zt=n("b1e0");n("f9e3"),n("2dd8"),n("5df9");a["default"].use(Jt.a),a["default"].use(Wt["a"]),a["default"].use(Zt["a"]),a["default"].config.productionTip=!1,new a["default"]({store:Gt,render:function(t){return t(qt)}}).$mount("#app")},"6cf5":function(t,e,n){"use strict";var a=n("f1a9"),o=n.n(a);o.a},"7e59":function(t,e,n){"use strict";var a=n("b166"),o=n.n(a);o.a},"843a":function(t,e,n){},"93ac6":function(t,e,n){"use strict";var a=n("9c5e"),o=n.n(a);o.a},"9c5e":function(t,e,n){},a340:function(t,e,n){"use strict";var a=n("b2a1"),o=n.n(a);o.a},b166:function(t,e,n){},b2a1:function(t,e,n){},cb2a:function(t,e,n){"use strict";var a=n("d3ca"),o=n.n(a);o.a},d3ca:function(t,e,n){},d90e:function(t,e,n){"use strict";var a=n("843a"),o=n.n(a);o.a},f1a9:function(t,e,n){}});
//# sourceMappingURL=app.2c0456ef.js.map