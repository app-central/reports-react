(this["webpackJsonpreports-react"]=this["webpackJsonpreports-react"]||[]).push([[0],{63:function(e,t,a){},65:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(9),s=a.n(o),i=(a(63),a(14)),l=a.n(i),p=a(8),d=a(7),u=a(22),j=a(3);a(65);function h(e){return e.start?Object(n.jsx)("div",{}):Object(n.jsxs)("form",{onSubmit:function(){e.login()},className:"form-box",children:[Object(n.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(n.jsx)("input",{class:"form-control",type:"password",onChange:function(t){return e.handleSetPass(t.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{class:"btn btn-primary mb-2 show-rep-btn",children:" show reports"})]})}a(66);var b=a(118),v=a(53),f=a(115),O=Object(v.a)({overrides:{MuiTooltip:{tooltip:{fontSize:"15px"}}}});function g(e){return Object(n.jsx)(f.a,{theme:O,children:Object(n.jsx)(b.a,{title:e.name,placement:"right",arrow:!0,children:Object(n.jsx)("span",{children:e.newName})})})}var m=a(116),x=Object(v.a)({palette:{primary:{main:"#0f84e4"}}});function S(e){var t=Object(r.useState)(!1),a=Object(j.a)(t,2),c=a[0],o=a[1],s=Object(r.useState)([]),i=Object(j.a)(s,2),l=i[0],p=i[1],u=Object(r.useState)(),h=Object(j.a)(u,2),b=(h[0],h[1],function(e){for(var t=0;t<l.length;t++)if(l[t]===e)return!0;return!1}),v=function(e){for(var t=[],a=0;a<l.length;a++)l[a]!==e&&(t=[].concat(Object(d.a)(t),[l[a]]));p(t)},O=function(e){var t=[];l.forEach((function(e){t=[].concat(Object(d.a)(t),[e])})),t=[].concat(Object(d.a)(t),[e]),p(t)},S=function(t){e.sortAppEvents(t),o(!c)};if(e.loading)return Object(n.jsx)("div",{className:"loading",children:Object(n.jsxs)(f.a,{theme:x,children:[Object(n.jsx)(m.a,{size:80,color:"primary",thickness:4}),Object(n.jsx)("p",{children:e.loadingStatus})]})});if(0===e.data.length)return Object(n.jsx)("div",{});if(e.start){var _="",N=[];return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"table-box",children:Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{className:"thead-light",children:Object(n.jsxs)("tr",{children:[Object(n.jsxs)("th",{className:"ver-th blank-cell",children:[" ",Object(n.jsx)("button",{className:"btn",onClick:function(){e.sortByName(),o(!c)},children:"\u2304"})," "]}),e.data.filter((function(t){return t.day>=e.tFrom&&t.day<=e.tTo})).map((function(t,a){return _!==t.day?(N.push(a),_=t.day,Object(n.jsxs)("th",{className:"dateStart",children:[" ",Object(n.jsxs)("span",{className:"time",children:[" ",e.getDate(t.day,a)," "]})," ",t.app,"    ",Object(n.jsx)("button",{className:"btn",onClick:function(){S(t)},children:"\u2304"})]})):(_=t.day,Object(n.jsxs)("th",{children:[t.app,"    ",Object(n.jsx)("button",{className:"btn",onClick:function(){S(t)},children:"\u2304"})]}))})),Object(n.jsx)("th",{})]})}),e.events.map((function(t,a){return Object(n.jsxs)("tr",{style:!0===b(a)?{backgroundColor:"yellow",fontWeight:"bold"}:{backgroundColor:"white"},onClick:function(){!0===b(a)?v(a):O(a)},children:[Object(n.jsx)("th",{onClick:function(){!0===b(a)?v(a):O(a)},className:"ver-th",style:!0===b(a)?{backgroundColor:"yellow"}:{backgroundColor:"white"},children:Object(n.jsx)("span",{className:"test",children:Object(n.jsx)(g,{name:t,newName:e.changeName(t)})})}),e.data.filter((function(t){return t.day>=e.tFrom&&t.day<=e.tTo})).map((function(e,a){return _!==e.day?(N.push(a),_=e.day,Object(n.jsx)("td",{className:"dateStart",children:e[t]||"n/a"})):(_=e.day,Object(n.jsx)("td",{children:e[t]||"n/a"}))}))]})}))]})})})}return Object(n.jsx)("div",{children:Object(n.jsx)(m.a,{height:"80px",width:"80px"})})}var _=a(49);a(73),a(92);function N(e){return Object(n.jsx)("div",{className:"dropdown",children:Object(n.jsx)(_.Multiselect,Object(p.a)({className:"drop-down",hidePlaceholder:!0,closeIcon:"cancel",options:e.events,selectedValues:e.displayedEvents,onSelect:function(t,a){e.addEvent(a)},onRemove:function(t,a){e.removeEvent(a)},displayValue:"label",style:"max-width:400px",showCheckbox:!0,isObject:!1},"hidePlaceholder",!1))})}var y=a(119),I=a(117),A=Object(I.a)((function(e){var t;return{root1:{"& > *":{margin:e.spacing(1)}},root:(t={backgroundColor:"#430c58",borderRadius:3,border:"1px",borderColor:"white",color:"white",height:48,padding:"0 30px"},Object(p.a)(t,"height","40px"),Object(p.a)(t,"boxShadow","0 3px 5px 2px rgba(255, 105, 135, .3)"),Object(p.a)(t,"&:hover",{backgroundColor:"#2e083d",color:"#FFF"}),t),label:{textTransform:"capitalize"}}}));function E(e){var t=A();return e.hide?Object(n.jsx)("div",{}):e.start&&!e.loading?"Events"===e.head?Object(n.jsxs)("div",{className:"table-controls",children:[Object(n.jsx)("h3",{children:e.head}),Object(n.jsxs)("div",{className:t.root1,children:[Object(n.jsx)(y.a,{variant:"contained",onClick:function(){e.setUnityEvents()},children:"Unity"}),Object(n.jsx)(y.a,{variant:"contained",onClick:e.setNextMoviesEvetns,children:"Next Movies"}),Object(n.jsx)(y.a,{variant:"contained",onClick:e.resetEvents,children:"Default"}),Object(n.jsx)(y.a,{variant:"contained",color:"secondary",onClick:e.clearEvents,children:"Clear All"}),Object(n.jsx)(y.a,{variant:"contained",color:"primary",onClick:e.addAll,children:"Add All"})]}),Object(n.jsx)(N,Object(p.a)({start:e.tart,loading:e.loading,removeEvent:e.removeEvent,addEvent:e.addEvent,events:e.events,displayedEvents:e.displayedEvents},"events",e.events))]}):Object(n.jsxs)("div",{className:"table-controls",children:[Object(n.jsx)("h3",{children:e.head}),Object(n.jsxs)("div",{className:t.root1,children:[Object(n.jsx)(y.a,{variant:"contained",onClick:e.resetEvents,children:"Reset"}),Object(n.jsx)(y.a,{variant:"contained",color:"secondary",onClick:e.clearEvents,children:"Clear All"}),Object(n.jsx)(y.a,{variant:"contained",color:"primary",onClick:e.addAll,children:"Add All"})]}),Object(n.jsx)(N,Object(p.a)({start:e.tart,loading:e.loading,removeEvent:e.removeEvent,addEvent:e.addEvent,events:e.events,displayedEvents:e.displayedEvents},"events",e.events))]}):Object(n.jsx)("div",{})}function w(e){var t=Object(r.useState)(0),a=Object(j.a)(t,2),c=(a[0],a[1],Object(r.useState)(0)),o=Object(j.a)(c,2);o[0],o[1];return e.hide?Object(n.jsx)("div",{}):e.start&&!e.loading?Object(n.jsxs)("div",{className:"date-selction",children:[Object(n.jsx)("label",{for:"start",children:"From:"}),Object(n.jsx)("input",{onChange:function(t){!function(t){var a=new Date(t.target.value).getTime()/864e5;e.handleFrom(a)}(t)},className:"date",type:"date",id:"start",name:"trip-start",min:"2020-09-26",max:e.getToday()}),Object(n.jsx)("label",{for:"end",children:"To:"}),Object(n.jsx)("input",{onChange:function(t){!function(t){var a=new Date(t.target.value).getTime()/864e5;e.handleTo(a)}(t)},className:"date",type:"date",id:"end",name:"trip-start",min:"2020-09-26",max:e.getToday()}),Object(n.jsx)("button",{onClick:function(){e.resetTimes()},className:"btn btn-primary",children:"show all"})]}):Object(n.jsx)("div",{})}function D(e){return e.start&&!e.loading?Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsx)("div",{className:"col-4"}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("h1",{onClick:function(){e.logout()},children:" Reports"})})]})}):Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("h1",{onClick:function(){e.logout()},children:" Reports"})})}var T=Object(I.a)((function(e){return{root1:{"& > *":{margin:e.spacing(1)}},root:{margin:10},label:{textTransform:"capitalize"}}}));function P(e){var t=T();return e.start&&!e.loading?Object(n.jsxs)("div",{className:"templates",children:[Object(n.jsx)("h4",{children:"Templates"}),Object(n.jsx)(y.a,{variant:"contained",color:"primary",onClick:function(){e.setFBEvents(),e.setFBapps()},classes:{root:t.root,label:t.label},children:"Facebook"}),Object(n.jsx)(y.a,{variant:"contained",onClick:function(){e.resetEvents(),e.resetApps()},classes:{root:t.root,label:t.label},children:"Default"})]}):Object(n.jsx)("div",{})}document.querySelector("#button"),document.querySelector("#tooltip");var C=new Date,K=Math.floor(Date.now()/864e5),V="https://pqzj791d65.execute-api.us-east-1.amazonaws.com/default/reports-json",F="https://iyab8i3y9i.execute-api.us-east-1.amazonaws.com/default/apple-reports",k=["first_launch","app_launch_NATIVE","app_launch_SDK","thumbnail_tap_NATIVE","thumbnail_tap_SDK","PaymentSheetView_appear_NATIVE","PaymentSheetView_appear_NATIVE/app_launch_NATIVE","pop_SDK","pop_SDK/app_launch_SDK","approve_NATIVE","approve_NATIVE/PaymentSheetView_appear_NATIVE","approve_SDK","approve_SDK/pop_SDK","purchase_NATIVE","purchase_NATIVE/approve_NATIVE","purchase_SDK","purchase_SDK/approve_SDK","fail_NATIVE","fail_SDK"],M=["start","setup","pop","approve","purchase","fail","restore","restored","paywall_loaded","dismiss","first_launch","\ud83c\udf4f Free or paid app","\ud83c\udf4f In-App Purchase","\ud83c\udf4f Purchase","\ud83c\udf4f Auto-renewable subscription","\ud83c\udf4f Paid app","\ud83c\udf4f App Bundle","\ud83c\udf4f Subscription","\ud83c\udf4f Redownload","\ud83c\udf4f Redownload (Update)","\ud83c\udf4f Restored In-App Purchase","\ud83c\udf4f Update"],R={1:"\ud83c\udf4f Free or paid app","1F":"\ud83c\udf4f Free or paid app","1T":"\ud83c\udf4f Free or paid app",F1:"\ud83c\udf4f Free or paid app","1E":"\ud83c\udf4f Paid app","1EP":"\ud83c\udf4f Paid app","1EU":"\ud83c\udf4f Paid app","1-B":"\ud83c\udf4f App Bundle","F1-B":"\ud83c\udf4f App Bundle",7:"\ud83c\udf4f Update","7F":"\ud83c\udf4f Update","7T":"\ud83c\udf4f Update",F7:"\ud83c\udf4f Update",IA1:"\ud83c\udf4f Purchase","IA1-M":"\ud83c\udf4f Purchase",IA9:"\ud83c\udf4f Subscription","IA9-M":"\ud83c\udf4f Subscription",FI1:"\ud83c\udf4f In-App Purchase",IAC:"\ud83c\udf4f In-App Purchase","IAC-M":"\ud83c\udf4f In-App Purchase",IAY:"\ud83c\udf4f Auto-renewable subscription","IAY-M":"\ud83c\udf4f Auto-renewable subscription",IA3:"\ud83c\udf4f Restored In-App Purchase",3:"\ud83c\udf4f Redownload(Update)","3F":"\ud83c\udf4f Redownload","3T":"\ud83c\udf4f Redownload",F3:"\ud83c\udf4f Redownload"};var B=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)([]),s=Object(j.a)(o,2),i=s[0],b=s[1],v=Object(r.useState)("htl"),f=Object(j.a)(v,2),O=f[0],g=(f[1],Object(r.useState)("")),m=Object(j.a)(g,2),x=m[0],_=m[1],N=Object(r.useState)([]),y=Object(j.a)(N,2),I=y[0],A=y[1],T=Object(r.useState)(M),B=Object(j.a)(T,2),U=B[0],L=B[1],z=Object(r.useState)([]),Y=Object(j.a)(z,2),q=(Y[0],Y[1]),J=Object(r.useState)(!1),W=Object(j.a)(J,2),G=W[0],H=W[1],Q=Object(r.useState)([]),X=Object(j.a)(Q,2),Z=X[0],$=X[1],ee=Object(r.useState)([]),te=Object(j.a)(ee,2),ae=te[0],ne=te[1],re=Object(r.useState)([]),ce=Object(j.a)(re,2),oe=(ce[0],ce[1]),se=Object(r.useState)([]),ie=Object(j.a)(se,2),le=ie[0],pe=ie[1],de=Object(r.useState)(0),ue=Object(j.a)(de,2),je=ue[0],he=ue[1],be=Object(r.useState)(K),ve=Object(j.a)(be,2),fe=ve[0],Oe=ve[1],ge=Object(r.useState)(!1),me=Object(j.a)(ge,2),xe=me[0],Se=(me[1],Object(r.useState)(null)),_e=Object(j.a)(Se,2),Ne=(_e[0],_e[1]),ye=Object(r.useState)(null),Ie=Object(j.a)(ye,2),Ae=(Ie[0],Ie[1]),Ee=Object(r.useState)(""),we=Object(j.a)(Ee,2),De=we[0],Te=we[1],Pe=Object(r.useState)(),Ce=Object(j.a)(Pe,2),Ke=(Ce[0],Ce[1]),Ve=Object(r.useState)(),Fe=Object(j.a)(Ve,2),ke=(Fe[0],Fe[1],Object(r.useState)([])),Me=Object(j.a)(ke,2),Re=Me[0],Be=(Me[1],function(){c(!1),H(!1),_("")});function Ue(){return(Ue=Object(u.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],H(!0),Te("Fetching SDK data..."),e.next=5,Le();case 5:return a=e.sent,Te("Fetching Apple data..."),e.next=9,Ye();case 9:n=e.sent,Te("Fetching Facebook data..."),Te("Done!"),H(!1),a.map((function(e){t=[].concat(Object(d.a)(t),[e])})),ct(t),Ke(n.appsId),Je(Qe(n.data),n.appsId),Je(Qe(n.data2),n.appsId),Je(Qe(n.data3),n.appsId),Je(Qe(n.data4),n.appsId),Je(Qe(n.data5),n.appsId),Je(Qe(n.data6),n.appsId),Je(Qe(n.data7),n.appsId),Ge(Je(Qe(n.data),n.appsId),t),Ge(Je(Qe(n.data2),n.appsId),t),Ge(Je(Qe(n.data3),n.appsId),t),Ge(Je(Qe(n.data4),n.appsId),t),Ge(Je(Qe(n.data5),n.appsId),t),Ge(Je(Qe(n.data6),n.appsId),t),Ge(Je(Qe(n.data7),n.appsId),t),rt(t),et(t),it(t),b(t),pe(t),Ze(t),Ne(Je(Qe(n.data),n.appsId)),Ae(Je(Qe(n.data2),n.appsId));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Le(){return ze.apply(this,arguments)}function ze(){return(ze=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(V).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ye(){return qe.apply(this,arguments)}function qe(){return(qe=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(F).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Je=function(e,t){for(var a=-1,n=-1,r=0;r<e[0].length;r++)"Product Type Identifier"===e[0][r]&&(a=r),"Apple Identifier"===e[0][r]&&(n=r);for(var c in t)isNaN(t[c])||(t[c]=t[c].toString());for(var o=!1,s=[],i=1;i<e.length;i++){for(var l in o=!1,t)t[l]!==e[i][n]||(e[i][n]=l,o=!0);o||s.push(i)}for(var p=0;p<s.length;p++){var d=We(e,s[p],n);void 0!=d&&(e[s[p]][n]=d)}for(var u=0;u<e.length;u++)for(var j in R)j===e[u][a]&&(e[u][a]=R[j]);return e},We=function(e,t,a){for(var n=-1,r=-1,c=0;c<e[0].length;c++)"SKU"===e[0][c]&&(n=c),"Parent Identifier"===e[0][c]&&(r=c);for(var o=e[t][r],s=0;s<e.length;s++)if(e[s][n]===o&&""!=e[s][n])return console.log("sku:  "+e[s][a]),e[s][a]},Ge=function(e,t){if(e){for(var a=-1,n=-1,r=-1,c=-1,o=0;o<e[0].length;o++)"Apple Identifier"===e[0][o]&&(n=o),"Units"===e[0][o]&&(c=o),"Product Type Identifier"===e[0][o]&&(r=o),"Begin Date"===e[0][o]&&(a=o),"Customer Price"===e[0][o]&&o,"Currency of Proceeds"===e[0][o]&&o,"Device"===e[0][o]&&o;for(var s=!1,i=1;i<e.length;i++){s=!1;for(var l=0;l<t.length;l++)if(t[l].day===He(e[i][a])&&t[l].app===e[i][n]){if(t[l][e[i][r]]){var d=parseInt(e[i][c])+parseInt(t[l][e[i][r]]);t[l][e[i][r]]=d}else t[l][e[i][r]]=parseInt(e[i][c]);s=!0}s||t.push(Object(p.a)({app:e[i][n],day:He(e[i][a])},e[i][r].toString(),e[i][c]))}}},He=function(e){for(var t=0,a=[],n=0;n<e.length;n++)"/"===e[n]&&(a.push(parseInt(e.substr(t,n-t),10)),t=n+1),n===e.length-1&&a.push(e.substr(t,n));return Math.floor(new Date(a[2],a[0]-1,a[1])/864e5)+1},Qe=function(e){for(var t=[],a=0,n=[],r=0,c=0;c<e.length;c++)"\t"!==e[c]?"\n"!==e[c]||(n.push(e.substr(r,c-r)),t[a]=n,n=[],r=c+1,!1,a++):(n.push(e.substr(r,c-r)),r=c+1,!1);return console.log("res"+t.length),t},Xe=function(){L(M)},Ze=function(e){for(var t=[],a=0;a<e.length;a++)for(var n in e[a]){for(var r=!0,c=0;c<t.length;c++)n!==t[c]&&null!==e[a].event||(r=!1);r&&(t=[].concat(Object(d.a)(t),[n]))}t.sort(),A(t),function(e){for(var t=[],a=0;a<e.length;a++)t=[].concat(Object(d.a)(t),[{label:e[a],value:e[a]}]);q(t)}(t)},$e=function(){L(["\ud83d\udd35 Cost","\ud83d\udd35 Impressions","\ud83d\udd35 Clicks","\ud83d\udd35 CTR","\ud83d\udd35 Installs","\ud83d\udd35 CPI"])},et=function(e){for(var t=[],a=!1,n=0;n<e.length;n++){for(var r=0;r<t.length;r++)if(e[n].app===t[r]){a=!0;break}a||(t=[].concat(Object(d.a)(t),[e[n].app])),a=!1}$(t),ne(t),st(e)},tt=function(){b(le),et(le)},at=function(){b([]),ne([]);for(var e=[],t=0;t<Re.length;t++)for(var a=0;a<le.length;a++)le[a].app===Re[t]&&(e=[].concat(Object(d.a)(e),[le[a]]));rt(e),b(e),ne(Object(d.a)(Re))},nt=function(e){for(var t=0;t<i.length;t++)if(i[t].app===e)return;for(var a=[],n=0;n<i.length;n++)a=[].concat(Object(d.a)(a),[i[n]]);for(var r=0;r<le.length;r++)le[r].app===e&&(a=[].concat(Object(d.a)(a),[le[r]]));rt(a),b(a),ne([].concat(Object(d.a)(ae),[e]))};function rt(e){"lth"===O?e.sort((function(e,t){return e.day<t.day?-1:e.day>t.day?1:void 0})):"htl"===O&&e.sort((function(e,t){return e.day>t.day?-1:e.day<t.day?1:void 0}))}var ct=function(e){for(var t=0;t<e.length;t++)e[t].day=ot(e[t].day),console.log(e[t].day+" to: "+ot(e[t].day))},ot=function(e){for(var t=0,a=[],n=0;n<e.length;n++)"-"===e[n]&&(a.push(parseInt(e.substr(t,n-t),10)),t=n+1),n===e.length-1&&a.push(e.substr(t,n));return Math.floor(new Date(a[0],a[1]-1,a[2])/864e5)+1},st=function(){for(var e=[],t=0;t<i.length;t++)for(var a=0;a<ae.length;a++)i[t].app===ae[a]&&(e=[].concat(Object(d.a)(e),[i[t]]));oe(e)},it=function(e){for(var t=0;t<e.length;t++)e[t]["PaymentSheetView_appear_NATIVE/app_launch_NATIVE"]=Math.floor(e[t].PaymentSheetView_appear_NATIVE/e[t].app_launch_NATIVE*100)+"%",e[t]["pop_SDK/app_launch_SDK"]=Math.floor(e[t].pop_SDK/e[t].app_launch_SDK*100)+"%",e[t]["approve_NATIVE/PaymentSheetView_appear_NATIVE"]=Math.floor(e[t].approve/e[t].PaymentSheetView_appear_NATIVE*100)+"%",e[t]["approve_SDK/pop_SDK"]=Math.floor(e[t].approve/e[t].pop_SDK*100)+"%",e[t]["purchase_NATIVE/approve_NATIVE"]=Math.floor(e[t].purchase/e[t].approve_NATIVE*100)+"%",e[t]["purchase_SDK/approve_SDK"]=Math.floor(e[t].purchase/e[t].approve_SDK*100)+"%";b(e)};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(D,{logout:Be,start:a,loading:G}),Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{}),Object(n.jsx)(h,{login:function(){"one2550"===x?(!function(){Ue.apply(this,arguments)}(),c(!0)):alert("wrong passowrd")},logout:Be,handleSetPass:function(e){_(e)},start:a}),Object(n.jsx)(w,{hide:xe,loading:G,start:a,resetTimes:function(){he(0),Oe(K)},handleTo:function(e){Oe(e),console.log("to: "+e)},handleFrom:function(e){he(e),console.log("from: "+e)},getToday:function(){var e=C.getDate().toString();1===e.length&&(e="0"+e);var t=(C.getMonth()+1).toString();return 1===t.length&&(t="0"+t),C.getFullYear()+"-"+t+"-"+e}}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(P,{resetEvents:Xe,resetApps:tt,setFBEvents:$e,setFBapps:at,start:a,loading:G})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)(E,Object(p.a)({setFBEvents:$e,setUnityEvents:function(){L(["start","\ud83c\udf4f Free or paid app","\ud83c\udf4f Subscription"])},hide:xe,setNextMoviesEvetns:function(){L(k)},head:"Events",resetEvents:Xe,clearEvents:function(){L([])},addAll:function(){var e=[];console.log(I);for(var t=0;t<I.length;t++)"app"!==I[t]&&"day"!==I[t]&&(e=[].concat(Object(d.a)(e),[I[t]]));L(e)},start:a,loading:G,removeEvent:function(e){for(var t=[],a=0;a<U.length;a++)U[a]!==e&&(t=[].concat(Object(d.a)(t),[U[a]]));L(t)},addEvent:function(e){console.log(e);for(var t=0;t<U.length;t++)if(U[t]===e)return;L([].concat(Object(d.a)(U),[e]))},events:I,displayedEvents:U},"events",I))}),Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)(E,{setFBapps:at,hide:xe,setNextMoviesEvetns:function(){b([]),ne([]),nt("oded.Movies")},head:"Apps",resetEvents:tt,clearEvents:function(){b([]),ne([])},addAll:tt,start:a,loading:G,removeEvent:function(e){for(var t=[],a=0;a<ae.length;a++)ae[a]!==e&&(t=[].concat(Object(d.a)(t),[ae[a]]));ne(t);for(var n=[],r=0;r<i.length;r++)i[r].app!==e&&(n=[].concat(Object(d.a)(n),[i[r]]));b(n)},addEvent:nt,events:Z,displayedEvents:ae})})]}),Object(n.jsx)(S,{loadingStatus:De,tFrom:je,tTo:fe,sortByName:function(){U.sort((function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0})),L(U),console.log(U)},sortAppEvents:function(e){var t="";t.substring(1,3);for(var a=0;a<U.length;a++)for(var n=0;n<U.length-1;n++)(e[U[n]]<e[U[n+1]]||!e[U[n]]||isNaN(e[U[n]]))&&(t=U[n],U[n]=U[n+1],U[n+1]=t);L(U)},loading:G,changeName:function(e){var t,a=(t={PaymentSheetView_appear_NATIVE:"Pop Native",app_launch_NATIVE:"App Launch Native",app_launch_SDK:"App Launch SDK",approve_NATIVE:"Approve Native",approve_SDK:"Approve SDK",fail_NATIVE:"Fail Native",fail_SDK:"Fail SDK",pop_SDK:"Pop SDK",purchase_NATIVE:"Purchase Native",purchase_SDK:"Purchase SDK",first_launch:"Fisrt Launch"},Object(p.a)(t,"PaymentSheetView_appear_NATIVE/app_launch_NATIVE","Pop Native / App Launch Native Rate"),Object(p.a)(t,"pop_SDK/app_launch_SDK","Pop SDK/ app Launch SDK Rate"),Object(p.a)(t,"approve_NATIVE/PaymentSheetView_appear_NATIVE","Approve Native/ Pop Native Rate"),Object(p.a)(t,"approve_SDK/pop_SDK","Approve SDK / Pop SDK Rate"),Object(p.a)(t,"purchase_NATIVE/approve_NATIVE","Purchase Native/ Approve Native Rate"),Object(p.a)(t,"purchase_SDK/approve_SDK","Purchase SDK/ Approve SDK Rate"),t);return a[e]?a[e]:e},data:i,getDate:function(e,t){return K-e===0?"Today":K-e===1?"Yesterday":new Date(864e5*e).toLocaleDateString()},start:a,events:U}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,120)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),U()}},[[93,1,2]]]);
//# sourceMappingURL=main.7a51b0b4.chunk.js.map