(function(e){function t(t){for(var i,a,l=t[0],s=t[1],c=t[2],u=0,p=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],i=!0,l=1;l<o.length;l++){var s=o[l];0!==n[s]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var i={},n={app:0},r=[];function a(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=i,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(o,i,function(t){return e[t]}.bind(null,i));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"4b5a":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=o("5c96"),r=o.n(n),a=(o("0fae"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"mainDivStyle"},[o("div",{staticClass:"header"},[e._m(0),o("ElLink",{attrs:{type:"info",href:"http://beta.zel.network/flux/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Your gateway to a decentralized world!")])],1),o("div",{staticClass:"content"},[o("NodeTracker")],1)])])}),l=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header-logo"},[i("span",{staticClass:"helper"}),i("img",{attrs:{src:o("5ecd")}}),i("img",{staticStyle:{"margin-left":"10px","margin-right":"10px"},attrs:{src:o("fe94")}}),i("img",{staticStyle:{height:"40px"},attrs:{src:o("9f24")}})])}],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[o("el-tab-pane",{attrs:{label:"Active Nodes",name:"all"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.allNodes.filter((function(t){return!e.filterNodes||t.ip.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.zelid&&t.zelid.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.account&&t.account.toLowerCase().includes(e.filterNodes.toLowerCase())})).filter((function(t){return!e.hasAccountAndCorrectVersion||t.account&&t.account.includes("kadena:")&&t.account.includes("?chainid=")&&"localSpecificationsVersion3"===t.hash})),"empty-text":"No nodes found"},on:{"expand-change":e.loadEligibility}},[o("div",{attrs:{slot:"empty"},slot:"empty"},[e.loadingAll?o("p",[e._v(" Loading Nodes "),o("i",{staticClass:"el-icon-loading"})]):e.filterNodes?o("p",[e._v(" No Nodes Match Filter ")]):o("p",[e._v(" No Nodes ")])]),o("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("p",[e._v("Zel ID: "+e._s(t.row.zelid))]),o("p",[e._v("Kadena: "+e._s(t.row.account))]),o("p",[e._v("Tier: "+e._s(t.row.tier))]),o("p",[e._v("Hash: "+e._s(t.row.hash))]),o("p",{key:e.updateKey},[e._v("Last Day Uptime: "+e._s(e.loadingHistory[t.row.ip]?"loading":e.lastDayUptime(t.row.ip))+"%")]),o("p",{key:e.updateKey},[e._v("Weekly Uptime: "+e._s(e.loadingHistory[t.row.ip]?"loading":e.sevenDayUptime(t.row.ip))+"%")]),o("p",{key:e.updateKey},[e._v("Monthly Uptime: "+e._s(e.loadingHistory[t.row.ip]?"loading":e.thirtyDayUptime(t.row.ip))+"%")]),o("el-switch",{attrs:{"active-text":"Show History"},model:{value:e.showHistory[t.row.ip],callback:function(o){e.$set(e.showHistory,t.row.ip,o)},expression:"showHistory[props.row.ip]"}}),e.showHistory[t.row.ip]?o("el-table",{key:e.updateKey,staticStyle:{width:"100%"},attrs:{data:e.limitedHistory[t.row.ip].reverse(),"show-header":!1}},[o("div",{attrs:{slot:"empty"},slot:"empty"},[e.loadingHistory[t.row.ip]?o("p",[e._v(" Loading History "),o("i",{staticClass:"el-icon-loading"})]):o("p",[e._v(" No History Found ")])]),o("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("p",[e._v("Zel ID: "+e._s(t.row.zelid))]),o("p",[e._v("Kadena: "+e._s(t.row.account))]),o("p",[e._v("Height: "+e._s(t.row.height))]),o("p",[e._v("Tier: "+e._s(t.row.tier))]),o("p",[e._v("Hash: "+e._s(t.row.hash))])]}}],null,!0)}),o("el-table-column",{attrs:{label:"Accuracy",prop:"roundTime",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(new Date(t.row.roundTime).toLocaleString("en-GB",e.timeoptions))+" ")]}}],null,!0)})],1):e._e()]}}])}),o("el-table-column",{attrs:{label:"IP address",prop:"ip",sortable:""}}),o("el-table-column",{attrs:{label:"Accuracy",prop:"roundTime",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(new Date(t.row.roundTime).toLocaleString("en-GB",e.timeoptions))+" ")]}}])}),o("el-table-column",{attrs:{label:"Min. Height",prop:"height",sortable:""}}),o("el-table-column",{attrs:{label:"Version",prop:"hash",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return["localSpecificationsVersion2"===t.row.hash?o("p",[e._v(" 2.2 ")]):"localSpecificationsVersion3"===t.row.hash?o("p",[e._v(" 2.3 ")]):o("p",[e._v(" Outdated ")])]}}])}),o("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"header",fn:function(t){return[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{xs:4,sm:4,md:4,lg:4,xl:4}},[e._v(" "+e._s(e.allNodes.filter((function(t){return!e.filterNodes||t.ip.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.zelid&&t.zelid.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.account&&t.account.toLowerCase().includes(e.filterNodes.toLowerCase())})).filter((function(t){return!e.hasAccountAndCorrectVersion||t.account&&t.account.includes("kadena:")&&t.account.includes("?chainid=")&&"localSpecificationsVersion3"===t.hash})).length)+" ")]),o("el-col",{attrs:{xs:2,sm:2,md:2,lg:2,xl:2}},[o("el-checkbox",{model:{value:e.hasAccountAndCorrectVersion,callback:function(t){e.hasAccountAndCorrectVersion=t},expression:"hasAccountAndCorrectVersion"}})],1),o("el-col",{attrs:{xs:18,sm:18,md:18,lg:18,xl:18}},[t?o("el-input",{attrs:{size:"mini",placeholder:"Type to search"},model:{value:e.filterNodes,callback:function(t){e.filterNodes=t},expression:"filterNodes"}}):e._e()],1)],1)]}},{key:"default",fn:function(t){return[t.row.account&&t.row.account.includes("kadena:")&&t.row.account.includes("?chainid=")?o("p",[e._v(" OK ")]):o("p",[e._v(" Missing Account ")])]}}])})],1)],1),o("el-tab-pane",{attrs:{label:"Daily Eligible Nodes",name:"eligibleA"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.eligibleNodesOne.filter((function(t){return!e.filterNodes||t.ip.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.zelid&&t.zelid.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.account&&t.account.toLowerCase().includes(e.filterNodes.toLowerCase())})).filter((function(t){return!e.hasAccountAndCorrectVersion||t.account&&t.account.includes("kadena:")&&t.account.includes("?chainid=")&&"localSpecificationsVersion3"===t.hash})),"empty-text":"No nodes found"},on:{"expand-change":e.loadEligibility}},[o("div",{attrs:{slot:"empty"},slot:"empty"},[e.loadingOne?o("p",[e._v(" Loading Eligible Nodes "),o("i",{staticClass:"el-icon-loading"})]):e.filterNodes?o("p",[e._v(" No Eligible Nodes Match Filter ")]):o("p",[e._v(" No Eligible Nodes ")])]),o("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("p",[e._v("Zel ID: "+e._s(t.row.zelid))]),o("p",[e._v("Kadena: "+e._s(t.row.account))]),o("p",[e._v("Tier: "+e._s(t.row.tier))]),o("p",[e._v("Hash: "+e._s(t.row.hash))]),o("p",{key:e.updateKey},[e._v("Last Day Uptime: "+e._s(e.loadingHistory[t.row.ip]?"loading":e.lastDayUptime(t.row.ip))+"%")]),o("p",{key:e.updateKey},[e._v("Weekly Uptime: "+e._s(e.loadingHistory[t.row.ip]?"loading":e.sevenDayUptime(t.row.ip))+"%")]),o("p",{key:e.updateKey},[e._v("Monthly Uptime: "+e._s(e.loadingHistory[t.row.ip]?"loading":e.thirtyDayUptime(t.row.ip))+"%")]),o("el-switch",{attrs:{"active-text":"Show History"},model:{value:e.showHistory[t.row.ip],callback:function(o){e.$set(e.showHistory,t.row.ip,o)},expression:"showHistory[props.row.ip]"}}),e.showHistory[t.row.ip]?o("el-table",{key:e.updateKey,staticStyle:{width:"100%"},attrs:{data:e.dayHistory(t.row.ip).reverse(),"show-header":!1}},[o("div",{attrs:{slot:"empty"},slot:"empty"},[e.loadingHistory[t.row.ip]?o("p",[e._v(" Loading History "),o("i",{staticClass:"el-icon-loading"})]):o("p",[e._v(" No History Found ")])]),o("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("p",[e._v("Zel ID: "+e._s(t.row.zelid))]),o("p",[e._v("Kadena: "+e._s(t.row.account))]),o("p",[e._v("Height: "+e._s(t.row.height))]),o("p",[e._v("Tier: "+e._s(t.row.tier))]),o("p",[e._v("Hash: "+e._s(t.row.hash))])]}}],null,!0)}),o("el-table-column",{attrs:{label:"Accuracy",prop:"roundTime",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(new Date(t.row.roundTime).toLocaleString("en-GB",e.timeoptions))+" ")]}}],null,!0)})],1):e._e()]}}])}),o("el-table-column",{attrs:{label:"IP address",prop:"ip",sortable:""}}),o("el-table-column",{attrs:{label:"Accuracy",prop:"roundTime",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(new Date(t.row.roundTime).toLocaleString("en-GB",e.timeoptions))+" ")]}}])}),o("el-table-column",{attrs:{label:"Min. Height",prop:"height",sortable:""}}),o("el-table-column",{attrs:{label:"Version",prop:"hash",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return["localSpecificationsVersion2"===t.row.hash?o("p",[e._v(" 2.2 ")]):"localSpecificationsVersion3"===t.row.hash?o("p",[e._v(" 2.3 ")]):o("p",[e._v(" Outdated ")])]}}])}),o("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"header",fn:function(t){return[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{xs:4,sm:4,md:4,lg:4,xl:4}},[e._v(" "+e._s(e.eligibleNodesOne.filter((function(t){return!e.filterNodes||t.ip.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.zelid&&t.zelid.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.account&&t.account.toLowerCase().includes(e.filterNodes.toLowerCase())})).filter((function(t){return!e.hasAccountAndCorrectVersion||t.account&&t.account.includes("kadena:")&&t.account.includes("?chainid=")&&"localSpecificationsVersion3"===t.hash})).length)+" ")]),o("el-col",{attrs:{xs:2,sm:2,md:2,lg:2,xl:2}},[o("el-checkbox",{model:{value:e.hasAccountAndCorrectVersion,callback:function(t){e.hasAccountAndCorrectVersion=t},expression:"hasAccountAndCorrectVersion"}})],1),o("el-col",{attrs:{xs:18,sm:18,md:18,lg:18,xl:18}},[t?o("el-input",{attrs:{size:"mini",placeholder:"Type to search"},model:{value:e.filterNodes,callback:function(t){e.filterNodes=t},expression:"filterNodes"}}):e._e()],1)],1)]}},{key:"default",fn:function(t){return[t.row.account&&t.row.account.includes("kadena:")&&t.row.account.includes("?chainid=")?e._e():o("p",[e._v(" Missing Account ")]),"localSpecificationsVersion3"!==t.row.hash?o("p",[e._v(" Invalid Version ")]):e._e(),t.row.account&&t.row.account.includes("kadena:")&&t.row.account.includes("?chainid=")&&"localSpecificationsVersion3"===t.row.hash?o("p",[e._v(" Payout Eligible ")]):e._e()]}}])})],1)],1),o("el-tab-pane",{attrs:{label:"Weekly Eligible Nodes",name:"eligibleB"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.eligibleNodesSeven.filter((function(t){return!e.filterNodes||t.ip.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.zelid&&t.zelid.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.account&&t.account.toLowerCase().includes(e.filterNodes.toLowerCase())})).filter((function(t){return!e.hasAccountAndCorrectVersion||t.account&&t.account.includes("kadena:")&&t.account.includes("?chainid=")&&"localSpecificationsVersion3"===t.hash})),"empty-text":"No nodes found"},on:{"expand-change":e.loadEligibility}},[o("div",{attrs:{slot:"empty"},slot:"empty"},[e.loadingSeven?o("p",[e._v(" Loading Eligible Nodes "),o("i",{staticClass:"el-icon-loading"})]):e.filterNodes?o("p",[e._v(" No Eligible Nodes Match Filter ")]):o("p",[e._v(" No Eligible Nodes ")])]),o("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("p",[e._v("Zel ID: "+e._s(t.row.zelid))]),o("p",[e._v("Kadena: "+e._s(t.row.account))]),o("p",[e._v("Tier: "+e._s(t.row.tier))]),o("p",[e._v("Hash: "+e._s(t.row.hash))]),o("p",{key:e.updateKey},[e._v("Last Day Uptime: "+e._s(e.loadingHistory[t.row.ip]?"loading":e.lastDayUptime(t.row.ip))+"%")]),o("p",{key:e.updateKey},[e._v("Weekly Uptime: "+e._s(e.loadingHistory[t.row.ip]?"loading":e.sevenDayUptime(t.row.ip))+"%")]),o("p",{key:e.updateKey},[e._v("Monthly Uptime: "+e._s(e.loadingHistory[t.row.ip]?"loading":e.thirtyDayUptime(t.row.ip))+"%")]),o("el-switch",{attrs:{"active-text":"Show History"},model:{value:e.showHistory[t.row.ip],callback:function(o){e.$set(e.showHistory,t.row.ip,o)},expression:"showHistory[props.row.ip]"}}),e.showHistory[t.row.ip]?o("el-table",{key:e.updateKey,staticStyle:{width:"100%"},attrs:{data:e.weekHistory(t.row.ip).reverse(),"show-header":!1}},[o("div",{attrs:{slot:"empty"},slot:"empty"},[e.loadingHistory[t.row.ip]?o("p",[e._v(" Loading History "),o("i",{staticClass:"el-icon-loading"})]):o("p",[e._v(" No History Found ")])]),o("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("p",[e._v("Zel ID: "+e._s(t.row.zelid))]),o("p",[e._v("Kadena: "+e._s(t.row.account))]),o("p",[e._v("Height: "+e._s(t.row.height))]),o("p",[e._v("Tier: "+e._s(t.row.tier))]),o("p",[e._v("Hash: "+e._s(t.row.hash))])]}}],null,!0)}),o("el-table-column",{attrs:{label:"Accuracy",prop:"roundTime",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(new Date(t.row.roundTime).toLocaleString("en-GB",e.timeoptions))+" ")]}}],null,!0)})],1):e._e()]}}])}),o("el-table-column",{attrs:{label:"IP address",prop:"ip",sortable:""}}),o("el-table-column",{attrs:{label:"Accuracy",prop:"roundTime",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(new Date(t.row.roundTime).toLocaleString("en-GB",e.timeoptions))+" ")]}}])}),o("el-table-column",{attrs:{label:"Min. Height",prop:"height",sortable:""}}),o("el-table-column",{attrs:{label:"Version",prop:"hash",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return["localSpecificationsVersion2"===t.row.hash?o("p",[e._v(" 2.2 ")]):"localSpecificationsVersion3"===t.row.hash?o("p",[e._v(" 2.3 ")]):o("p",[e._v(" Outdated ")])]}}])}),o("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"header",fn:function(t){return[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{xs:4,sm:4,md:4,lg:4,xl:4}},[e._v(" "+e._s(e.eligibleNodesSeven.filter((function(t){return!e.filterNodes||t.ip.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.zelid&&t.zelid.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.account&&t.account.toLowerCase().includes(e.filterNodes.toLowerCase())})).filter((function(t){return!e.hasAccountAndCorrectVersion||t.account&&t.account.includes("kadena:")&&t.account.includes("?chainid=")&&"localSpecificationsVersion3"===t.hash})).length)+" ")]),o("el-col",{attrs:{xs:2,sm:2,md:2,lg:2,xl:2}},[o("el-checkbox",{model:{value:e.hasAccountAndCorrectVersion,callback:function(t){e.hasAccountAndCorrectVersion=t},expression:"hasAccountAndCorrectVersion"}})],1),o("el-col",{attrs:{xs:18,sm:18,md:18,lg:18,xl:18}},[t?o("el-input",{attrs:{size:"mini",placeholder:"Type to search"},model:{value:e.filterNodes,callback:function(t){e.filterNodes=t},expression:"filterNodes"}}):e._e()],1)],1)]}},{key:"default",fn:function(t){return[t.row.account&&t.row.account.includes("kadena:")&&t.row.account.includes("?chainid=")?e._e():o("p",[e._v(" Missing Account ")]),"localSpecificationsVersion3"!==t.row.hash?o("p",[e._v(" Invalid Version ")]):e._e(),t.row.account&&t.row.account.includes("kadena:")&&t.row.account.includes("?chainid=")&&"localSpecificationsVersion3"===t.row.hash?o("p",[e._v(" Payout Eligible ")]):e._e()]}}])})],1)],1),o("el-tab-pane",{attrs:{label:"Monthly Eligible Nodes",name:"eligibleC"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.eligibleNodesThirty.filter((function(t){return!e.filterNodes||t.ip.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.zelid&&t.zelid.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.account&&t.account.toLowerCase().includes(e.filterNodes.toLowerCase())})).filter((function(t){return!e.hasAccountAndCorrectVersion||t.account&&t.account.includes("kadena:")&&t.account.includes("?chainid=")&&"localSpecificationsVersion3"===t.hash})),"empty-text":"No nodes found"},on:{"expand-change":e.loadEligibility}},[o("div",{attrs:{slot:"empty"},slot:"empty"},[e.loadingThirty?o("p",[e._v(" Loading Eligible Nodes "),o("i",{staticClass:"el-icon-loading"})]):e.filterNodes?o("p",[e._v(" No Eligible Nodes Match Filter ")]):o("p",[e._v(" No Eligible Nodes ")])]),o("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("p",[e._v("Zel ID: "+e._s(t.row.zelid))]),o("p",[e._v("Kadena: "+e._s(t.row.account))]),o("p",[e._v("Tier: "+e._s(t.row.tier))]),o("p",[e._v("Hash: "+e._s(t.row.hash))]),o("p",{key:e.updateKey},[e._v("Last Day Uptime: "+e._s(e.loadingHistory[t.row.ip]?"loading":e.lastDayUptime(t.row.ip))+"%")]),o("p",{key:e.updateKey},[e._v("Weekly Uptime: "+e._s(e.loadingHistory[t.row.ip]?"loading":e.sevenDayUptime(t.row.ip))+"%")]),o("p",{key:e.updateKey},[e._v("Monthly Uptime: "+e._s(e.loadingHistory[t.row.ip]?"loading":e.thirtyDayUptime(t.row.ip))+"%")]),o("el-switch",{attrs:{"active-text":"Show History"},model:{value:e.showHistory[t.row.ip],callback:function(o){e.$set(e.showHistory,t.row.ip,o)},expression:"showHistory[props.row.ip]"}}),e.showHistory[t.row.ip]?o("el-table",{key:e.updateKey,staticStyle:{width:"100%"},attrs:{data:e.limitedHistory[t.row.ip].reverse(),"show-header":!1}},[o("div",{attrs:{slot:"empty"},slot:"empty"},[e.loadingHistory[t.row.ip]?o("p",[e._v(" Loading History "),o("i",{staticClass:"el-icon-loading"})]):o("p",[e._v(" No History Found ")])]),o("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("p",[e._v("Zel ID: "+e._s(t.row.zelid))]),o("p",[e._v("Kadena: "+e._s(t.row.account))]),o("p",[e._v("Height: "+e._s(t.row.height))]),o("p",[e._v("Tier: "+e._s(t.row.tier))]),o("p",[e._v("Hash: "+e._s(t.row.hash))])]}}],null,!0)}),o("el-table-column",{attrs:{label:"Accuracy",prop:"roundTime",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(new Date(t.row.roundTime).toLocaleString("en-GB",e.timeoptions))+" ")]}}],null,!0)})],1):e._e()]}}])}),o("el-table-column",{attrs:{label:"IP address",prop:"ip",sortable:""}}),o("el-table-column",{attrs:{label:"Accuracy",prop:"roundTime",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(new Date(t.row.roundTime).toLocaleString("en-GB",e.timeoptions))+" ")]}}])}),o("el-table-column",{attrs:{label:"Min. Height",prop:"height",sortable:""}}),o("el-table-column",{attrs:{label:"Version",prop:"hash",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return["localSpecificationsVersion2"===t.row.hash?o("p",[e._v(" 2.2 ")]):"localSpecificationsVersion3"===t.row.hash?o("p",[e._v(" 2.3 ")]):o("p",[e._v(" Outdated ")])]}}])}),o("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"header",fn:function(t){return[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{xs:4,sm:4,md:4,lg:4,xl:4}},[e._v(" "+e._s(e.eligibleNodesThirty.filter((function(t){return!e.filterNodes||t.ip.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.zelid&&t.zelid.toLowerCase().includes(e.filterNodes.toLowerCase())||!!t.account&&t.account.toLowerCase().includes(e.filterNodes.toLowerCase())})).filter((function(t){return!e.hasAccountAndCorrectVersion||t.account&&t.account.includes("kadena:")&&t.account.includes("?chainid=")&&"localSpecificationsVersion3"===t.hash})).length)+" ")]),o("el-col",{attrs:{xs:2,sm:2,md:2,lg:2,xl:2}},[o("el-checkbox",{model:{value:e.hasAccountAndCorrectVersion,callback:function(t){e.hasAccountAndCorrectVersion=t},expression:"hasAccountAndCorrectVersion"}})],1),o("el-col",{attrs:{xs:18,sm:18,md:18,lg:18,xl:18}},[t?o("el-input",{attrs:{size:"mini",placeholder:"Type to search"},model:{value:e.filterNodes,callback:function(t){e.filterNodes=t},expression:"filterNodes"}}):e._e()],1)],1)]}},{key:"default",fn:function(t){return[t.row.account&&t.row.account.includes("kadena:")&&t.row.account.includes("?chainid=")?e._e():o("p",[e._v(" Missing Account ")]),"localSpecificationsVersion3"!==t.row.hash?o("p",[e._v(" Invalid Version ")]):e._e(),t.row.account&&t.row.account.includes("kadena:")&&t.row.account.includes("?chainid=")&&"localSpecificationsVersion3"===t.row.hash?o("p",[e._v(" Payout Eligible ")]):e._e()]}}])})],1)],1)],1)],1)},c=[],d=(o("99af"),o("4de4"),o("b680"),o("96cf"),o("1da1")),u=o("bc3a"),p=o.n(u),f={name:"NodeTracker",data:function(){return{timeoptions:{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},activeName:"all",baseURL:"https://api.flux.zel.network/kadena/",allNodes:[],eligibleNodesOne:[],eligibleNodesSeven:[],eligibleNodesThirty:[],filterNodes:"",hasAccountAndCorrectVersion:!1,loadingAll:!1,loadingOne:!1,loadingSeven:!1,loadingThirty:!1,limitedHistory:{},loadingHistory:{},updateKey:1,showHistory:{}}},computed:{lastDayMinTime:function(){var e=6048e5,t=(new Date).getTime(),o=t-e;return o},lastWeekMinTime:function(){var e=6048e5,t=(new Date).getTime(),o=t-e;return o}},watch:{activeName:function(e,t){console.log(e,t),this.switcher(e)}},mounted:function(){this.switcher(this.activeName)},methods:{switcher:function(e){switch(e){case"all":this.getAll();break;case"eligibleA":this.getEligible(1);break;case"eligibleB":this.getEligible(7);break;case"eligibleC":this.getEligible(30);break;default:console.log("Explorer Section: Unrecognized method")}},getAll:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loadingAll=!0,t.next=3,p.a.get("".concat(e.baseURL,"allnodes"));case 3:o=t.sent,e.allNodes=o.data.data,e.loadingAll=!1;case 6:case"end":return t.stop()}}),t)})))()},getEligible:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function o(){var i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return 1===e&&(t.loadingOne=!0),7===e&&(t.loadingSeven=!0),30===e&&(t.loadingThirty=!0),o.next=5,p.a.get("".concat(t.baseURL,"eligible/").concat(e));case 5:i=o.sent,1===e&&(t.eligibleNodesOne=i.data.data,t.loadingOne=!1),7===e&&(t.eligibleNodesSeven=i.data.data,t.loadingSeven=!1),30===e&&(t.eligibleNodesThirty=i.data.data,t.loadingThirty=!1);case 9:case"end":return o.stop()}}),o)})))()},loadEligibility:function(e,t){var o=this;return Object(d["a"])(regeneratorRuntime.mark((function i(){var n,r,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n=30,console.log(e),console.log(t),!o.limitedHistory[e.ip]){i.next=5;break}return i.abrupt("return");case 5:return o.loadingHistory[e.ip]=!0,o.updateKey+=1,i.next=9,p.a.get("".concat(o.baseURL,"limitedhistory/ip/").concat(e.ip,"/").concat(n));case 9:r=i.sent,console.log(r),"success"===r.data.status&&(a=r.data.data,o.limitedHistory[e.ip]=a,o.updateKey+=1,o.loadingHistory[e.ip]=!1);case 12:case"end":return i.stop()}}),i)})))()},dayHistory:function(e){var t=864e5,o=(new Date).getTime(),i=o-t,n=this.limitedHistory[e].filter((function(e){return e.roundTime>i}));return n},weekHistory:function(e){var t=864e5,o=(new Date).getTime(),i=o-t,n=this.limitedHistory[e].filter((function(e){return e.roundTime>i}));return n},lastDayUptime:function(e){if(!this.limitedHistory[e])return 0;var t=48,o=864e5,i=(new Date).getTime(),n=i-o,r=this.limitedHistory[e].filter((function(e){return e.roundTime>n})),a=r.length+1,l=a/t;return l>1&&(l=1),l=(100*l).toFixed(2),l},sevenDayUptime:function(e){if(!this.limitedHistory[e])return 0;var t=336,o=6048e5,i=(new Date).getTime(),n=i-o,r=this.limitedHistory[e].filter((function(e){return e.roundTime>n})),a=r.length,l=a/t;return l>1&&(l=1),l=(100*l).toFixed(2),l},thirtyDayUptime:function(e){if(!this.limitedHistory[e])return 0;var t=1440,o=2592e6,i=(new Date).getTime(),n=i-o,r=this.limitedHistory[e].filter((function(e){return e.roundTime>n})),a=r.length,l=a/t;return l>1&&(l=1),l=(100*l).toFixed(2),l}}},h=f,w=o("2877"),y=Object(w["a"])(h,s,c,!1,null,null,null),g=y.exports,m={name:"App",components:{NodeTracker:g}},_=m,v=(o("d380"),Object(w["a"])(_,a,l,!1,null,null,null)),b=v.exports;i["default"].use(r.a),i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(b)}}).$mount("#app")},"5ecd":function(e,t,o){e.exports=o.p+"img/flux_white_logo.273c038c.svg"},"9f24":function(e,t,o){e.exports=o.p+"img/kadena.818182da.png"},d380:function(e,t,o){"use strict";o("4b5a")},fe94:function(e,t,o){e.exports=o.p+"img/love.1b791462.svg"}});
//# sourceMappingURL=app.b69906f9.js.map