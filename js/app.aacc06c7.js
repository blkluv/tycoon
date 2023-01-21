(function(e){function t(t){for(var a,r,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00cd":function(e,t,n){"use strict";var a=n("0c73"),o=n.n(a);o.a},"0c73":function(e,t,n){},"19d2":function(e,t,n){},"27a5":function(e,t,n){"use strict";var a=n("bee4"),o=n.n(a);o.a},"3d77":function(e,t,n){"use strict";var a=n("6744"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("UiItemsComponent"),n("MapComponent")],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[n("GameStatsComponent"),n("PropertyInfoComponent"),n("ListOfBuildingsComponent"),n("BankComponent"),n("ExperienceComponent"),n("SettingsComponent")],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",[n("b-col",{attrs:{lg:"12",xl:"6",id:"game-stats-bar"}},[n("b-card",{staticClass:"lift"},[n("b-card-text",{staticClass:"flex-items"},[n("div",{staticClass:"flex-item"},[n("b-dropdown",{attrs:{size:"sm",variant:"light","toggle-class":"no-padding"},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("b-icon",{attrs:{icon:"justify"}})]},proxy:!0}])},[n("b-dropdown-item",{on:{click:function(t){return e.openExperienceWindow()}}},[e._v("Experience")]),n("b-dropdown-item",{on:{click:function(t){return e.openListOfBuildings()}}},[e._v("List of buildings")]),n("b-dropdown-item",{on:{click:function(t){return e.openBank()}}},[e._v("Bank")]),n("b-dropdown-item",{on:{click:function(t){return e.openSettings()}}},[e._v("Settings")])],1)],1),n("div",{staticClass:"flex-item"},[n("b-icon",{attrs:{icon:"cash-stack"}}),n("span",{staticClass:"font-weight-bold",class:{"text-success":e.money>=0,"text-danger":e.money<0}},[e._v(e._s(e.moneyOutput))])],1),n("div",{staticClass:"flex-item"},[n("b-icon",{staticClass:"clickable",attrs:{icon:"person"},on:{click:function(t){return e.openExperienceWindow()}}}),n("span",[e._v(e._s(e.level))])],1),n("div",{staticClass:"flex-item"},[n("b-icon",{staticClass:"clickable",attrs:{icon:"door-open"},on:{click:function(t){return e.openListOfBuildings()}}}),n("span",[e._v(e._s(e.rentingFeatures.length))])],1),n("div",{staticClass:"flex-item"},[n("b-icon",{staticClass:"clickable",attrs:{icon:"building"},on:{click:function(t){return e.openListOfBuildings()}}}),n("span",[e._v(e._s(e.ownedFeatures.length))])],1),n("div",{staticClass:"flex-item d-none d-sm-block"},[n("b-icon",{attrs:{icon:"clock"}}),n("span",[e._v(e._s(e.timeOutput))])],1)])],1)],1),n("b-col",{attrs:{lg:"12",xl:"6",id:"search-col"}})],1)},u=[],l=(n("99af"),n("ac1f"),n("1276"),n("b85c")),d=(n("13d5"),n("d3b7"),n("25f0"),n("5319"),n("595b"));function f(e){var t=e.geometry.coordinates.length>1,n=t?d["multiPolygon"](e.geometry.coordinates):d["polygon"](e.geometry.coordinates),a=d["area"](n);if(!a&&t){var o=e.geometry.coordinates[e.geometry.coordinates.reduce((function(e,t,n,a){return a[e].length>t.length?e:n}),0)];n=d["polygon"]([o]),a=d["area"](n)}return a}function p(e){return L(e,1e3)}function m(e){return L(e,15)}function h(e){return p(e)/10}function b(e){return m(e)/20}function v(e){return.04*e.rentPrice}function g(e){return 2.9*e.rentPrice}function y(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}function O(e){return Math.floor((Math.sqrt(100*(2*e+25))+50)/100)}function x(e){return(Math.pow(e,2)+e)/2*100-100*e}function _(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,n="x"==e?t:3&t|8;return n.toString(16)}))}function w(e){return Math.ceil(e.area*C(e)/100)}function C(e){var t=e.properties.height;return e.area<30&&t>3&&(t/=3,t<3&&(t=3)),t}function L(e,t){var n=C(e),a=e.area*n*t;return a}var k="selectFeature",$="addToOwnedFeatures",F="addToRentingFeatures",P="removeFromRentingFeatures",S="addMoney",j="openListOfBuildings",B="setLastPayoutDate",T="openBank",E="addLoan",R="payOffLoan",M="openExperience",I="addExperience",q="openSettings",D="setGameSpeed",A={name:"GameStatsComponent",data:function(){return{timeOutput:""}},mounted:function(){this.getTime(),setInterval(this.getTime,100),setInterval(this.incomeLoop,1e3)},computed:{money:function(){return this.$store.state.money},moneyOutput:function(){return y(this.money)},rentingFeatures:function(){return this.$store.state.rentingFeatures},ownedFeatures:function(){return this.$store.state.ownedFeatures},level:function(){return this.$store.state.level},gameSpeed:function(){return this.$store.state.gameSpeed}},watch:{level:function(e,t){e!=t&&this.$bvToast.toast("Level up!",{noCloseButton:!0,toaster:"b-toaster-bottom-left",variant:"success",solid:!0})}},methods:{getTime:function(){var e=new Date;this.timeOutput="".concat(e.toTimeString().split(" GMT")[0]," ").concat(e.toDateString())},incomeLoop:function(){var e=new Date,t=6e4;this.gameSpeed>0&&(t*=60),this.gameSpeed>1&&(t*=24),this.gameSpeed>2&&(t*=7);var n=(e-new Date(this.$store.state.lastPayoutDate))/t;if(n=Math.floor(n),!(n<1)){this.$store.dispatch(B,e),this.lastPayout=e;var a,o=0,i=0,r=0,s=0,c=Object(l["a"])(this.$store.state.rentingFeatures);try{for(c.s();!(a=c.n()).done;){var u=a.value;o+=u.incomeRenting,i+=u.incomeRenting}}catch(v){c.e(v)}finally{c.f()}var d,f=Object(l["a"])(this.$store.state.ownedFeatures);try{for(f.s();!(d=f.n()).done;){var p=d.value;o+=p.incomeOwned,r+=p.incomeOwned}}catch(v){f.e(v)}finally{f.f()}var m,h=Object(l["a"])(this.$store.state.loans);try{for(h.s();!(m=h.n()).done;){var b=m.value;o-=b.interest,s+=b.interest}}catch(v){h.e(v)}finally{h.f()}if(i||r||s)if(i+r!==s){if(o*=n,o<0)return this.$store.dispatch(S,o),void this.$bvToast.toast("Costs are higher than income. ".concat(y(-1*o)," deducted."),{noCloseButton:!0,toaster:"b-toaster-bottom-left",variant:"warning",solid:!0});this.$store.dispatch(S,o),this.$bvToast.toast("Rental income of ".concat(y(o)," received."),{noCloseButton:!0,toaster:"b-toaster-bottom-left",variant:"success",solid:!0})}else this.$bvToast.toast("Income equal to costs.",{noCloseButton:!0,toaster:"b-toaster-bottom-left",variant:"warning",solid:!0});else this.$bvToast.toast("No rent received this month.",{noCloseButton:!0,toaster:"b-toaster-bottom-left",variant:"success",solid:!0})}},openListOfBuildings:function(){this.$store.dispatch(j,!this.$store.state.listOfBuildingsOpen)},openBank:function(){this.$store.dispatch(T,!this.$store.state.bankOpen)},openExperienceWindow:function(){this.$store.dispatch(M,!this.$store.state.experienceOpen)},openSettings:function(){this.$store.dispatch(q,!this.$store.state.settingsOpen)}}},z=A,G=(n("7fcf"),n("2877")),N=Object(G["a"])(z,c,u,!1,null,"5bf78164",null),U=N.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.feature?n("b-row",[n("b-col",{attrs:{lg:"12",xl:"6"}},[n("b-card",{staticClass:"lift",attrs:{title:"Property info"}},[e.isRenting?n("b-badge",{staticStyle:{"background-color":"darkslateblue",opacity:"0.8"}},[e._v("Subletting")]):e._e(),e.isOwned?n("b-badge",{staticStyle:{"background-color":"dodgerblue",opacity:"0.8"}},[e._v("Owned")]):e._e(),e.isRenting||e.isOwned?e._e():n("b-badge",{attrs:{variant:"secondary"}},[e._v("Available")]),n("b-card-text",[e._v(" Area: "+e._s(e.areaOutput)+"m²"),n("br"),e._v(" Height: "+e._s(e.feature.properties.height)+"m"),n("br"),e._v(" Rent Price: "+e._s(e.rentPriceOutput)+" per month - Subletting income: "+e._s(e.formatCurrency(e.feature.incomeRenting))),n("br"),e._v(" Buy Price: "+e._s(e.buyPriceOutput)+" - Renting income: "+e._s(e.formatCurrency(e.feature.incomeOwned))),n("br"),e._v(" Level required: "),n("b-badge",{attrs:{pill:"",variant:e.requiredLevel<=e.level?"success":"danger"}},[e._v(e._s(e.requiredLevel))])],1),e.isOwned?e._e():n("b-button",{class:{disabled:e.money<e.feature.buyPrice||e.requiredLevel>e.level},attrs:{variant:"primary",disabled:e.money<e.feature.buyPrice||e.requiredLevel>e.level},on:{click:function(t){return e.buy()}}},[e._v(" Buy ")]),e.isRenting||e.isOwned?e._e():n("b-button",{staticClass:"ml-2",class:{disabled:e.money<e.feature.rentPrice||e.requiredLevel>e.level},attrs:{variant:"primary",disabled:e.money<e.feature.rentPrice||e.requiredLevel>e.level},on:{click:function(t){return e.rent()}}},[e._v(" Rent ")])],1)],1)],1):e._e()},W=[],Z=(n("7db0"),n("b680"),{name:"PropertyInfoComponent",data:function(){return{isOwned:!1,isRenting:!1,areaOutput:null,rentPriceOutput:null,buyPriceOutput:null,requiredLevel:null}},mounted:function(){this.setFeatureOptions(this.feature)},computed:{feature:function(){return this.$store.state.selectedFeature},money:function(){return this.$store.state.money},level:function(){return this.$store.state.level}},watch:{feature:function(e){this.setFeatureOptions(e)}},methods:{formatCurrency:y,getLevelRequiredForBuilding:w,setFeatureOptions:function(e){this.isRenting=e&&this.$store.state.rentingFeatures.find((function(t){return t.id===e.id})),this.isOwned=e&&this.$store.state.ownedFeatures.find((function(t){return t.id===e.id})),this.areaOutput=e?e.area.toFixed(0):null,this.rentPriceOutput=e?y(e.rentPrice):null,this.buyPriceOutput=e?y(e.buyPrice):null,this.requiredLevel=e?w(e):null},buy:function(){this.$store.dispatch(S,-this.feature.buyPrice),this.$store.dispatch($,this.feature),this.$store.dispatch(I,h(this.feature)),this.isRenting&&this.$store.dispatch(P,this.feature.id),this.$store.dispatch(k,null)},rent:function(){this.$store.dispatch(S,-this.feature.rentPrice),this.$store.dispatch(F,this.feature),this.$store.dispatch(I,b(this.feature)),this.$store.dispatch(k,null)}}}),H=Z,V=(n("3d77"),Object(G["a"])(H,J,W,!1,null,"e5051f98",null)),Y=V.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.listOfBuildingsOpen?n("b-row",[n("b-col",{attrs:{lg:"12",xl:"6"}},[n("b-card",{staticClass:"lift",attrs:{"no-body":""}},[n("b-tabs",{attrs:{card:""}},[n("b-tab",{attrs:{title:"Owned",active:""}},[e.ownedFeatures.length?n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("id")]),n("th",{attrs:{scope:"col"}},[e._v("income")]),n("th",{attrs:{scope:"col"}},[e._v("area m²")]),n("th",{attrs:{scope:"col"}},[e._v("height m")])])]),n("tbody",e._l(e.ownedFeatures,(function(t){return n("tr",{key:t.id},[n("th",{attrs:{scope:"row"}},[e._v(e._s(t.id))]),n("td",[e._v(e._s(e.formatCurrency(t.incomeOwned)))]),n("td",[e._v(e._s(t.area.toFixed(0)))]),n("td",[e._v(e._s(t.properties.height))])])})),0)]):n("b-card-text",[e._v("No owned buildings")])],1),n("b-tab",{attrs:{title:"Subletting"}},[e.rentingFeatures.length?n("table",{staticClass:"table",attrs:{thStyle:"padding: 0;"}},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("id")]),n("th",{attrs:{scope:"col"}},[e._v("income")]),n("th",{attrs:{scope:"col"}},[e._v("area m²")]),n("th",{attrs:{scope:"col"}},[e._v("height m")])])]),n("tbody",e._l(e.rentingFeatures,(function(t){return n("tr",{key:t.id},[n("th",{attrs:{scope:"row"}},[e._v(e._s(t.id))]),n("td",[e._v(e._s(e.formatCurrency(t.incomeRenting)))]),n("td",[e._v(e._s(t.area.toFixed(0)))]),n("td",[e._v(e._s(t.properties.height))])])})),0)]):n("b-card-text",[e._v("Not subletting any buildings")])],1)],1)],1)],1)],1):e._e()},X=[],K={name:"ListOfBuildingsComponent",data:function(){return{rentingFeaturesSorted:null,ownedFeaturesSorted:null}},mounted:function(){},computed:{feature:function(){return this.$store.state.selectedFeature},listOfBuildingsOpen:function(){return this.$store.state.listOfBuildingsOpen},rentingFeatures:function(){return this.$store.state.rentingFeatures},ownedFeatures:function(){return this.$store.state.ownedFeatures}},methods:{formatCurrency:y}},ee=K,te=Object(G["a"])(ee,Q,X,!1,null,"15ccbeca",null),ne=te.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.bankOpen?n("b-row",[n("b-col",{attrs:{lg:"12",xl:"6"}},[n("b-card",{staticClass:"lift",attrs:{title:"Bank"}},[n("b-row",[n("b-col",{attrs:{cols:"8",sm:"9"}},[n("b-form-group",{attrs:{id:"loan-range-set","label-cols-sm":"4","label-cols-lg":"4",description:"Amount: "+e.formatCurrency(e.amountToLoan)+" | Monthly interest: "+e.formatCurrency(e.interest),label:"Open a new loan","label-for":"loan-range"}},[n("b-form-input",{attrs:{id:"loan-range",type:"range",min:"100",max:e.maxAmountToLoan,step:"100"},model:{value:e.amountToLoan,callback:function(t){e.amountToLoan=t},expression:"amountToLoan"}})],1)],1),n("b-col",[n("span",{staticClass:"d-inline-block",staticStyle:{float:"right"},attrs:{id:"take-loan-button",tabindex:"0"}},[n("b-button",{staticClass:"button-right",class:{disabled:e.maxLoansReached},attrs:{id:"take-loan-button",variant:"success",disabled:e.maxLoansReached},on:{click:function(t){return e.takeLoan()}}},[e._v("Take loan")])],1),e.maxLoansReached?n("b-tooltip",{attrs:{target:"take-loan-button"}},[e._v(" Max amount of loans for your current level reached ")]):e._e()],1)],1),e.selectedLoan?n("b-row",[n("b-col",{attrs:{cols:"8",sm:"9"}},[n("b-form-group",{attrs:{id:"pay-off-set","label-cols-sm":"4","label-cols-lg":"4",description:"Amount: "+e.formatCurrency(e.amountToPayOff)+" | Max: "+e.formatCurrency(e.amountPayable),label:"Pay off this loan","label-for":"pay-off-input"}},[n("b-form-input",{attrs:{id:"pay-off-input",type:"range",min:"1",max:e.amountPayable,step:"1"},model:{value:e.amountToPayOff,callback:function(t){e.amountToPayOff=t},expression:"amountToPayOff"}})],1)],1),n("b-col",[n("b-button",{staticClass:"button-right",attrs:{variant:"success"},on:{click:function(t){return e.payOffLoan()}}},[e._v("Pay off")])],1)],1):e._e(),e.loans.length?n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("Amount")]),n("th",{attrs:{scope:"col"}},[e._v("Payed off")]),n("th",{attrs:{scope:"col"}},[e._v("Monthly interest")]),n("th",{attrs:{scope:"col"}},[e._v("Actions")])])]),n("tbody",e._l(e.loans,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(e.formatCurrency(t.amount)))]),n("td",[e._v(e._s(e.formatCurrency(t.payedBack)))]),n("td",[e._v(e._s(e.formatCurrency(t.interest)))]),n("td",[n("b-button",{attrs:{variant:"success"},on:{click:function(n){e.selectedLoan=t}}},[e._v("Pay off")])],1)])})),0)]):n("b-card-text",[e._v("No open loans")])],1)],1)],1):e._e()},oe=[],ie={name:"BankComponent",data:function(){return{amountToLoan:0,interest:0,selectedLoan:null,amountToPayOff:0,amountPayable:0,maxAmountToLoan:5e3}},mounted:function(){this.setBaseLoan(),this.setBasePayOff(),this.setMaxLoan()},computed:{bankOpen:function(){return this.$store.state.bankOpen},loans:function(){return this.$store.state.loans},money:function(){return this.$store.state.money},level:function(){return this.$store.state.level},maxLoansReached:function(){return this.loans.length>=this.level+1}},watch:{amountToLoan:function(e){this.interest=3.5*e/100},money:function(e){this.amountPayable=this.selectedLoan?this.selectedLoan.amount-this.selectedLoan.payedBack>e?e:this.selectedLoan.amount-this.selectedLoan.payedBack:0},selectedLoan:function(e){this.amountPayable=e?e.amount-e.payedBack>this.money?this.money:e.amount-e.payedBack:0},level:function(){this.setMaxLoan()}},methods:{formatCurrency:y,setBaseLoan:function(){this.amountToLoan=100,this.interest=3.5},setBasePayOff:function(){this.amountToPayOff=1},setMaxLoan:function(){this.maxAmountToLoan=5e3*this.level},takeLoan:function(){this.$store.dispatch(E,{id:_(),amount:this.amountToLoan,payedBack:0,interest:this.interest}),this.$store.dispatch(S,parseInt(this.amountToLoan)),this.setBaseLoan()},payOffLoan:function(){this.$store.dispatch(R,{id:this.selectedLoan.id,amount:this.amountToPayOff}),this.$store.dispatch(S,-this.amountToPayOff),this.selectedLoan=0,this.setBasePayOff()}}},re=ie,se=(n("00cd"),Object(G["a"])(re,ae,oe,!1,null,"207bb412",null)),ce=se.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.experienceOpen?n("b-row",[n("b-col",{attrs:{lg:"12",xl:"6"}},[n("b-card",{staticClass:"lift"},[n("b-card-title",[e._v("Experience "),n("b-badge",{attrs:{pill:"",variant:"success"}},[e._v(e._s(e.level))])],1),n("b-card-text",[e._v("Progress: "+e._s(e.experience.toFixed(0))+"/"+e._s(e.nextExperience)+"xp")]),n("b-progress",{attrs:{value:e.experience,max:e.nextExperience,"show-value":"",variant:"success",height:"24px"}})],1)],1)],1):e._e()},le=[],de={name:"ExperienceComponent",data:function(){return{nextExperience:0,nextLevel:0}},mounted:function(){this.setNextLevelProperties(this.level)},computed:{experienceOpen:function(){return this.$store.state.experienceOpen},experience:function(){return this.$store.state.experience},level:function(){return this.$store.state.level}},watch:{level:function(e){this.setNextLevelProperties(e)}},methods:{setNextLevelProperties:function(e){this.nextLevel=e+1,this.nextExperience=x(this.nextLevel)}}},fe=de,pe=Object(G["a"])(fe,ue,le,!1,null,"dd412596",null),me=pe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.settingsOpen?n("b-row",[n("b-col",{attrs:{lg:"12",xl:"6"}},[n("b-card",{staticClass:"lift",attrs:{title:"Settings"}},[n("b-card-text",[e._v(" Game Speed (payout interval): "),n("b-form-select",{staticClass:"mt-3",attrs:{id:"interval-select",options:e.options,size:"sm"},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}}),n("br"),e._v(" Delete game data: "),n("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(t){return e.wipeSave()}}},[e._v("Hard Reset")])],1)],1)],1)],1):e._e()},be=[],ve={name:"SettingsComponent",data:function(){return{selectedOption:0,options:[{value:0,text:"every minute"},{value:1,text:"every hour"},{value:2,text:"every day"},{value:3,text:"every week"}]}},mounted:function(){this.selectedOption=this.gameSpeed},computed:{settingsOpen:function(){return this.$store.state.settingsOpen},gameSpeed:function(){return this.$store.state.gameSpeed}},watch:{selectedOption:function(){this.$store.dispatch(D,this.selectedOption)}},methods:{wipeSave:function(){confirm("Are you sure?")&&(localStorage.removeItem("vuex"),location.reload())}}},ge=ve,ye=(n("27a5"),Object(G["a"])(ge,he,be,!1,null,"2c7e8259",null)),Oe=ye.exports,xe={name:"UiItemsComponent",data:function(){return{}},components:{GameStatsComponent:U,PropertyInfoComponent:Y,ListOfBuildingsComponent:ne,BankComponent:ce,ExperienceComponent:me,SettingsComponent:Oe}},_e=xe,we=(n("8e0d"),Object(G["a"])(_e,r,s,!1,null,"1f755dee",null)),Ce=we.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"map"}})},ke=[],$e=(n("4de4"),n("caad"),n("d81d"),n("2532"),n("e192")),Fe=n.n($e),Pe=n("885b"),Se=n.n(Pe),je=(n("c307"),"pk.eyJ1IjoiZGV2ZWxvcG1lbnQ0dSIsImEiOiJjamZkeGc3Y2M0OXc0MzNwZDl3enRpbzc3In0.S95dVrY6n-TxsdzqG4dvNg"),Be="#aaa",Te="dodgerblue",Ee="darkslateblue";function Re(){Fe.a.accessToken=je;var e=new Fe.a.Map({style:"mapbox://styles/mapbox/satellite-streets-v12",center:[-84.373335,33.7552152],zoom:17,pitch:48,bearing:0,container:"map",antialias:!0,hash:!0}),t=new Se.a({accessToken:Fe.a.accessToken,mapboxgl:Fe.a});return document.getElementById("search-col").appendChild(t.onAdd(e)),e}function Me(e){for(var t=e.getStyle().layers,n=0;n<t.length;n++)if("symbol"===t[n].type&&t[n].layout["text-field"])return t[n].id}function Ie(e,t){e.addLayer({id:"3d-buildings",source:"composite","source-layer":"building",filter:["==","extrude","true"],type:"fill-extrusion",minzoom:13,paint:{"fill-extrusion-color":Be,"fill-extrusion-height":["get","height"],"fill-extrusion-opacity":.6}},t),e.addSource("building-selected",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),e.addLayer({id:"highlight-building",source:"building-selected",type:"fill",minzoom:13,paint:{"fill-opacity":.5}},t),e.addSource("buildings-owned",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),e.addLayer({id:"highlight-buildings-owned",source:"buildings-owned",type:"fill",minzoom:13,paint:{"fill-color":Te,"fill-opacity":.6,"fill-outline-color":"gray"}},t),e.addSource("buildings-renting",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),e.addLayer({id:"highlight-buildings-renting",source:"buildings-renting",type:"fill",minzoom:13,paint:{"fill-color":Ee,"fill-opacity":.6,"fill-outline-color":"gray"}},t)}var qe,De,Ae={name:"MapComponent",data:function(){return{map:null}},mounted:function(){var e=this;this.map=Re(),this.map.on("load",(function(){var t=Me(e.map);Ie(e.map,t)})),this.map.on("click",(function(t){var n=e.map.queryRenderedFeatures(t.point);n=n.filter((function(e){return"building"===e.sourceLayer&&"false"===e.properties.underground}));var a=n.length?n[0]:null,o=null;a&&(o={id:a.id,source:a.source,sourceLayer:a.sourceLayer,layerId:a.layer.id,properties:a.properties,geometry:a._geometry||a.geometry,values:a._vectorTileFeature._values},o.area=f(o),o.rentPrice=m(o),o.buyPrice=p(o),o.incomeRenting=v(o),o.incomeOwned=g(o)),e.$store.dispatch(k,o),e.map.getSource("building-selected").setData({type:"FeatureCollection",features:a?[a]:[]})})),this.map.on("data",(function(t){t.sourceId&&"composite"===t.sourceId&&e.renderFeatures()}))},computed:{rentingFeatures:function(){return this.$store.state.rentingFeatures},ownedFeatures:function(){return this.$store.state.ownedFeatures},feature:function(){return this.$store.state.selectedFeature}},watch:{rentingFeatures:function(){this.renderFeatures()},ownedFeatures:function(){this.renderFeatures()},feature:function(e){e||this.map.getSource("building-selected").setData({type:"FeatureCollection",features:[]})}},methods:{renderFeatures:function(){if(this.map.getSource("buildings-owned")){var e=this.map.querySourceFeatures("composite",{sourceLayer:"building"}),t=this.$store.state.rentingFeatures.map((function(e){return e.id})),n=e.filter((function(e){return t.includes(e.id)}));this.map.getSource("buildings-renting").setData({type:"FeatureCollection",features:n});var a=this.$store.state.ownedFeatures.map((function(e){return e.id})),o=e.filter((function(e){return a.includes(e.id)}));this.map.getSource("buildings-owned").setData({type:"FeatureCollection",features:o})}}}},ze=Ae,Ge=(n("93cf"),Object(G["a"])(ze,Le,ke,!1,null,"fe072a32",null)),Ne=Ge.exports,Ue={name:"App",components:{UiItemsComponent:Ce,MapComponent:Ne}},Je=Ue,We=(n("72a4"),Object(G["a"])(Je,o,i,!1,null,"68affcd3",null)),Ze=We.exports,He=(n("c975"),n("a434"),n("ade3")),Ve=n("2f62"),Ye=n("bfa9");a["default"].use(Ve["a"]);var Qe=new Ye["a"]({storage:window.localStorage}),Xe=new Ve["a"].Store({state:{money:500,experience:0,level:1,selectedFeature:null,rentingFeatures:[],ownedFeatures:[],listOfBuildingsOpen:!1,bankOpen:!1,experienceOpen:!1,settingsOpen:!1,lastPayoutDate:new Date,loans:[],gameSpeed:1},mutations:(qe={},Object(He["a"])(qe,k,(function(e,t){e.selectedFeature=t,t&&(e.bankOpen=!1,e.listOfBuildingsOpen=!1,e.experienceOpen=!1,e.settingsOpen=!1)})),Object(He["a"])(qe,F,(function(e,t){e.rentingFeatures.push(t)})),Object(He["a"])(qe,P,(function(e,t){e.rentingFeatures=e.rentingFeatures.filter((function(e){return e.id!==t}))})),Object(He["a"])(qe,$,(function(e,t){e.ownedFeatures.push(t)})),Object(He["a"])(qe,S,(function(e,t){e.money+=t})),Object(He["a"])(qe,j,(function(e,t){e.listOfBuildingsOpen=t,t&&(e.bankOpen=!1,e.experienceOpen=!1,e.settingsOpen=!1,e.selectedFeature=null)})),Object(He["a"])(qe,B,(function(e,t){e.lastPayoutDate=t})),Object(He["a"])(qe,T,(function(e,t){e.bankOpen=t,t&&(e.listOfBuildingsOpen=!1,e.experienceOpen=!1,e.settingsOpen=!1,e.selectedFeature=null)})),Object(He["a"])(qe,E,(function(e,t){e.loans.push(t)})),Object(He["a"])(qe,R,(function(e,t){var n=e.loans.find((function(e){return e.id===t.id}));if(n.payedBack+=parseInt(t.amount),parseInt(n.amount)===n.payedBack)e.loans=e.loans.filter((function(e){return e.id!==t.id}));else{var a=e.loans.map((function(e){return e.id})).indexOf(n.id);e.loans.splice(a,1,n)}})),Object(He["a"])(qe,M,(function(e,t){e.experienceOpen=t,t&&(e.listOfBuildingsOpen=!1,e.bankOpen=!1,e.settingsOpen=!1,e.selectedFeature=null)})),Object(He["a"])(qe,I,(function(e,t){e.experience+=t,e.level=O(e.experience)})),Object(He["a"])(qe,q,(function(e,t){e.settingsOpen=t,t&&(e.listOfBuildingsOpen=!1,e.bankOpen=!1,e.experienceOpen=!1,e.selectedFeature=null)})),Object(He["a"])(qe,D,(function(e,t){e.gameSpeed=t})),qe),actions:(De={},Object(He["a"])(De,k,(function(e,t){var n=e.commit;n(k,t)})),Object(He["a"])(De,F,(function(e,t){var n=e.commit;n(F,t)})),Object(He["a"])(De,P,(function(e,t){var n=e.commit;n(P,t)})),Object(He["a"])(De,$,(function(e,t){var n=e.commit;n($,t)})),Object(He["a"])(De,S,(function(e,t){var n=e.commit;n(S,t)})),Object(He["a"])(De,j,(function(e,t){var n=e.commit;n(j,t)})),Object(He["a"])(De,B,(function(e,t){var n=e.commit;n(B,t)})),Object(He["a"])(De,T,(function(e,t){var n=e.commit;n(T,t)})),Object(He["a"])(De,E,(function(e,t){var n=e.commit;n(E,t)})),Object(He["a"])(De,R,(function(e,t){var n=e.commit;n(R,t)})),Object(He["a"])(De,M,(function(e,t){var n=e.commit;n(M,t)})),Object(He["a"])(De,I,(function(e,t){var n=e.commit;n(I,t)})),Object(He["a"])(De,q,(function(e,t){var n=e.commit;n(q,t)})),Object(He["a"])(De,D,(function(e,t){var n=e.commit;n(D,t)})),De),plugins:[Qe.plugin]}),Ke=n("2b88"),et=n.n(Ke),tt=n("5f5b"),nt=n("b1e0");n("f9e3"),n("2dd8"),n("5df9");a["default"].use(et.a),a["default"].use(tt["a"]),a["default"].use(nt["a"]),a["default"].config.productionTip=!1,new a["default"]({store:Xe,render:function(e){return e(Ze)}}).$mount("#app")},6744:function(e,t,n){},"6c3d":function(e,t,n){},"72a4":function(e,t,n){"use strict";var a=n("6c3d"),o=n.n(a);o.a},"7fcf":function(e,t,n){"use strict";var a=n("81ef"),o=n.n(a);o.a},"81ef":function(e,t,n){},"8e0d":function(e,t,n){"use strict";var a=n("9778"),o=n.n(a);o.a},"93cf":function(e,t,n){"use strict";var a=n("19d2"),o=n.n(a);o.a},9778:function(e,t,n){},bee4:function(e,t,n){}});
//# sourceMappingURL=app.aacc06c7.js.map