(this["webpackJsonpreports-react"]=this["webpackJsonpreports-react"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),o=a(14),s=a.n(o),i=(a(81),a(30)),l=a.n(i),p=a(43),d=a(10),j=a(15),u=a(8),h=(a(83),a(57));a(86),a(107);function b(e){return Object(n.jsx)("div",{className:"dropdown",children:Object(n.jsx)(h.Multiselect,Object(d.a)({className:"drop-down",hidePlaceholder:!0,closeIcon:"cancel",options:e.events,selectedValues:e.displayedEvents,onSelect:function(t,a){e.addEvent(a)},onRemove:function(t,a){e.removeEvent(a)},displayValue:"label",style:"max-width:400px",showCheckbox:!0,isObject:!1},"hidePlaceholder",!1))})}new Date;function v(e){return e.start?Object(n.jsx)("div",{}):Object(n.jsxs)("form",{onSubmit:function(){e.login()},className:"form-box",children:[Object(n.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(n.jsx)("input",{class:"form-control",type:"password",onChange:function(t){return e.handleSetPass(t.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{class:"btn btn-primary mb-2 show-rep-btn",children:" show reports"})]})}a(108);var O=a(151),f=a(64),m=a(150),_=Object(f.a)({overrides:{MuiTooltip:{tooltip:{fontSize:"15px"}}}});function x(e){return Object(n.jsx)(m.a,{theme:_,children:Object(n.jsx)(O.a,{title:e.name,placement:"right",arrow:!0,children:Object(n.jsx)("span",{children:e.newName})})})}var g=a(155),S=a(154),N=(Object(S.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}})),Object(f.a)({palette:{primary:{main:"#0f84e4"}}}));function E(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),r=a[0],o=a[1],s=Object(c.useState)(-1),i=Object(u.a)(s,2),l=i[0],p=i[1];return e.loading?Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)(m.a,{theme:N,children:Object(n.jsx)(g.a,{size:80,color:"primary",thickness:4})})}):0===e.data.length?Object(n.jsx)("div",{}):e.start?Object(n.jsx)("div",{className:"table-box",children:Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{className:"thead-light",children:Object(n.jsxs)("tr",{children:[Object(n.jsxs)("th",{className:"ver-th blank-cell",children:[" ",Object(n.jsx)("button",{className:"btn",onClick:function(){e.sortByName(),o(!r)},children:"\u2304"})," "]}),e.data.filter((function(t){return t.day>=e.tFrom&&t.day<=e.tTo})).map((function(t,a){return Object(n.jsxs)("th",{children:[t.app,"    ",Object(n.jsxs)("span",{className:"time",children:[" ",e.getDate(t.day,a)," "]}),Object(n.jsx)("button",{className:"btn",onClick:function(){!function(t){e.sortAppEvents(t),o(!r)}(t)},children:"\u2304"})]})})),Object(n.jsx)("th",{})]})}),e.events.map((function(t,a){return Object(n.jsxs)("tr",{style:l===a?{backgroundColor:"yellow",fontWeight:"bold"}:{backgroundColor:"white"},onClick:function(){p(l===a?-1:a)},children:[Object(n.jsx)("th",{onClick:function(){p(l===a?-1:a)},className:"ver-th",style:l===a?{backgroundColor:"yellow"}:{backgroundColor:"white"},children:Object(n.jsx)("span",{className:"test",children:Object(n.jsx)(x,{name:t,newName:e.changeName(t)})})}),e.data.filter((function(t){return t.day>=e.tFrom&&t.day<=e.tTo})).map((function(e,a){return Object(n.jsx)("td",{children:e[t]||"n/a"})}))]})}))]})}):Object(n.jsx)("div",{children:Object(n.jsx)(g.a,{height:"80px",width:"80px"})})}a(44),a(159),a(158),Object(S.a)((function(e){return{root:{width:500,"& > * + *":{marginTop:e.spacing(3)}}}}));var y=a(157),D=Object(S.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function A(e){var t=D();return e.start&&!e.loading?"Events"===e.head?Object(n.jsxs)("div",{className:"table-controls",children:[Object(n.jsx)("h3",{children:e.head}),Object(n.jsxs)("div",{className:t.root,children:[" ",Object(n.jsx)(y.a,{variant:"contained",onClick:e.setNextMoviesEvetns,children:"Next Movies"}),Object(n.jsx)(y.a,{variant:"contained",onClick:e.resetEvents,children:"Default"}),Object(n.jsx)(y.a,{variant:"contained",color:"secondary",onClick:e.clearEvents,children:"Clear All"}),Object(n.jsx)(y.a,{variant:"contained",color:"primary",onClick:e.addAll,children:"Add All"})]}),Object(n.jsx)(b,Object(d.a)({start:e.tart,loading:e.loading,removeEvent:e.removeEvent,addEvent:e.addEvent,events:e.events,displayedEvents:e.displayedEvents},"events",e.events))]}):Object(n.jsxs)("div",{className:"table-controls",children:[Object(n.jsx)("h3",{children:e.head}),Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(y.a,{variant:"contained",onClick:e.resetEvents,children:"Reset"}),Object(n.jsx)(y.a,{variant:"contained",color:"secondary",onClick:e.clearEvents,children:"Clear All"}),Object(n.jsx)(y.a,{variant:"contained",color:"primary",onClick:e.addAll,children:"Add All"})]}),Object(n.jsx)(b,Object(d.a)({start:e.tart,loading:e.loading,removeEvent:e.removeEvent,addEvent:e.addEvent,events:e.events,displayedEvents:e.displayedEvents},"events",e.events))]}):Object(n.jsx)("div",{})}function T(e){var t=Object(c.useState)(0),a=Object(u.a)(t,2),r=(a[0],a[1],Object(c.useState)(0)),o=Object(u.a)(r,2);o[0],o[1];return e.start&&!e.loading?Object(n.jsxs)("div",{className:"date-selction",children:[Object(n.jsx)("label",{for:"start",children:"From:"}),Object(n.jsx)("input",{onChange:function(t){!function(t){var a=new Date(t.target.value).getTime()/864e5;e.handleFrom(a)}(t)},className:"date",type:"date",id:"start",name:"trip-start",min:"2020-09-26",max:e.getToday()}),Object(n.jsx)("label",{for:"end",children:"To:"}),Object(n.jsx)("input",{onChange:function(t){!function(t){var a=new Date(t.target.value).getTime()/864e5;e.handleTo(a)}(t)},className:"date",type:"date",id:"end",name:"trip-start",min:"2020-09-26",max:e.getToday()}),Object(n.jsx)("button",{onClick:function(){e.resetTimes()},className:"btn btn-primary",children:"show all"})]}):Object(n.jsx)("div",{})}document.querySelector("#button"),document.querySelector("#tooltip");var w=new Date("2012.08.10").getTime()/864e5;console.log(w);var V=new Date,K=Math.floor(Date.now()/864e5);console.log(K);var I="https://pqzj791d65.execute-api.us-east-1.amazonaws.com/default/reports-json",C=["first_launch","app_launch_NATIVE","app_launch_SDK","thumbnail_tap_NATIVE","thumbnail_tap_SDK","PaymentSheetView_appear_NATIVE","PaymentSheetView_appear_NATIVE/app_launch_NATIVE","pop_SDK","pop_SDK/app_launch_SDK","approve_NATIVE","approve_NATIVE/PaymentSheetView_appear_NATIVE","approve_SDK","approve_SDK/pop_SDK","purchase_NATIVE","purchase_NATIVE/approve_NATIVE","purchase_SDK","purchase_SDK/approve_SDK","fail_NATIVE","fail_SDK"],P=["setup","pop","approve","purchase","fail","restore","restored","paywall_loaded","dismiss","first_launch"];var k=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)([]),s=Object(u.a)(o,2),i=s[0],h=s[1],b=Object(c.useState)("htl"),O=Object(u.a)(b,2),f=O[0],m=(O[1],Object(c.useState)("")),_=Object(u.a)(m,2),x=_[0],g=_[1],S=Object(c.useState)([]),N=Object(u.a)(S,2),y=N[0],D=N[1],w=Object(c.useState)(P),k=Object(u.a)(w,2),M=k[0],F=k[1],L=Object(c.useState)([]),R=Object(u.a)(L,2),z=(R[0],R[1]),B=Object(c.useState)(!1),q=Object(u.a)(B,2),J=q[0],Y=q[1],W=Object(c.useState)([]),G=Object(u.a)(W,2),H=G[0],Q=G[1],U=Object(c.useState)([]),X=Object(u.a)(U,2),Z=X[0],$=X[1],ee=Object(c.useState)([]),te=Object(u.a)(ee,2),ae=(te[0],te[1]),ne=Object(c.useState)([]),ce=Object(u.a)(ne,2),re=ce[0],oe=ce[1],se=Object(c.useState)(0),ie=Object(u.a)(se,2),le=ie[0],pe=ie[1],de=Object(c.useState)(K),je=Object(u.a)(de,2),ue=je[0],he=je[1],be=function(e){for(var t=0;t<e.length;t++)e[t]["PaymentSheetView_appear_NATIVE/app_launch_NATIVE"]=Math.floor(e[t].PaymentSheetView_appear_NATIVE/e[t].app_launch_NATIVE*100)+"%",e[t]["pop_SDK/app_launch_SDK"]=Math.floor(e[t].pop_SDK/e[t].app_launch_SDK*100)+"%",e[t]["approve_NATIVE/PaymentSheetView_appear_NATIVE"]=Math.floor(e[t].approve/e[t].PaymentSheetView_appear_NATIVE*100)+"%",e[t]["approve_SDK/pop_SDK"]=Math.floor(e[t].approve/e[t].pop_SDK*100)+"%",e[t]["purchase_NATIVE/approve_NATIVE"]=Math.floor(e[t].purchase/e[t].approve_NATIVE*100)+"%",e[t]["purchase_SDK/approve_SDK"]=Math.floor(e[t].purchase/e[t].approve_SDK*100)+"%";h(e)},ve=function(e){for(var t=[],a=!1,n=0;n<e.length;n++){for(var c=0;c<t.length;c++)if(e[n].app===t[c]){a=!0;break}a||(t=[].concat(Object(j.a)(t),[e[n].app])),a=!1}Q(t),$(t),fe(e)},Oe=function(){h(re),ve(re)},fe=function(){for(var e=[],t=0;t<i.length;t++)for(var a=0;a<Z.length;a++)i[t].app===Z[a]&&(e=[].concat(Object(j.a)(e),[i[t]]));ae(e)},me=function(e){for(var t=0;t<i.length;t++)if(i[t].app===e)return;for(var a=[],n=0;n<i.length;n++)a=[].concat(Object(j.a)(a),[i[n]]);for(var c=0;c<re.length;c++)re[c].app===e&&(a=[].concat(Object(j.a)(a),[re[c]]));Ee(a),h(a),$([].concat(Object(j.a)(Z),[e]))},_e=function(){r(!1),Y(!1),g("")};function xe(){return(xe=Object(p.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],Y(!0),e.next=4,ge();case 4:a=e.sent,Y(!1),a.map((function(e){t=[].concat(Object(j.a)(t),[e])})),Ee(t),h(t),oe(t),ve(t),be(t),Ne(t);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(){return Se.apply(this,arguments)}function Se(){return(Se=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(I).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ne=function(e){for(var t=[],a=0;a<e.length;a++)for(var n in e[a]){for(var c=!0,r=0;r<t.length;r++)n!==t[r]&&null!==e[a].event||(c=!1);c&&(t=[].concat(Object(j.a)(t),[n]))}t.sort(),D(t),function(e){for(var t=[],a=0;a<e.length;a++)t=[].concat(Object(j.a)(t),[{label:e[a],value:e[a]}]);z(t)}(t)};function Ee(e){"lth"===f?e.sort((function(e,t){return e.day<t.day?-1:e.day>t.day?1:void 0})):"htl"===f&&e.sort((function(e,t){return e.day>t.day?-1:e.day<t.day?1:void 0}))}return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{onClick:function(){_e()},children:" Reports"}),Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{}),Object(n.jsx)(v,{login:function(){"one2550"===x?(!function(){xe.apply(this,arguments)}(),r(!0)):alert("wrong passowrd")},logout:_e,handleSetPass:function(e){g(e)},start:a})]}),Object(n.jsx)(T,{loading:J,start:a,resetTimes:function(){pe(0),he(K)},handleTo:function(e){he(e),console.log("to: "+e)},handleFrom:function(e){pe(e),console.log("from: "+e)},getToday:function(){var e=V.getDate().toString();1===e.length&&(e="0"+e);var t=(V.getMonth()+1).toString();return 1===t.length&&(t="0"+t),V.getFullYear()+"-"+t+"-"+e}}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)(A,Object(d.a)({setNextMoviesEvetns:function(){F(C)},head:"Events",resetEvents:function(){F(P)},clearEvents:function(){F([])},addAll:function(){for(var e=[],t=0;t<y.length;t++)"app"!==y[t]&&"day"!==y[t]&&(e=[].concat(Object(j.a)(e),[y[t]]));F(e)},start:a,loading:J,removeEvent:function(e){for(var t=[],a=0;a<M.length;a++)M[a]!==e&&(t=[].concat(Object(j.a)(t),[M[a]]));F(t)},addEvent:function(e){console.log(e);for(var t=0;t<M.length;t++)if(M[t]===e)return;F([].concat(Object(j.a)(M),[e]))},events:y,displayedEvents:M},"events",y))}),Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)(A,{setNextMoviesEvetns:function(){h([]),$([]),me("oded.Movies")},head:"Apps",resetEvents:Oe,clearEvents:function(){h([]),$([])},addAll:Oe,start:a,loading:J,removeEvent:function(e){for(var t=[],a=0;a<Z.length;a++)Z[a]!==e&&(t=[].concat(Object(j.a)(t),[Z[a]]));$(t);for(var n=[],c=0;c<i.length;c++)i[c].app!==e&&(n=[].concat(Object(j.a)(n),[i[c]]));h(n)},addEvent:me,events:H,displayedEvents:Z})})]}),Object(n.jsx)(E,{tFrom:le,tTo:ue,sortByName:function(){M.sort((function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0})),F(M),console.log(M)},sortAppEvents:function(e){for(var t="",a=0;a<M.length;a++)for(var n=0;n<M.length-1;n++)(e[M[n]]<e[M[n+1]]||!e[M[n]]||isNaN(e[M[n]]))&&(t=M[n],M[n]=M[n+1],M[n+1]=t);F(M)},loading:J,changeName:function(e){var t,a=(t={PaymentSheetView_appear_NATIVE:"Pop Native",app_launch_NATIVE:"App Launch Native",app_launch_SDK:"App Launch SDK",approve_NATIVE:"Approve Native",approve_SDK:"Approve SDK",fail_NATIVE:"Fail Native",fail_SDK:"Fail SDK",pop_SDK:"Pop SDK",purchase_NATIVE:"Purchase Native",purchase_SDK:"Purchase SDK",first_launch:"Fisrt Launch"},Object(d.a)(t,"PaymentSheetView_appear_NATIVE/app_launch_NATIVE","Pop Native / App Launch Native Rate"),Object(d.a)(t,"pop_SDK/app_launch_SDK","Pop SDK/ app Launch SDK Rate"),Object(d.a)(t,"approve_NATIVE/PaymentSheetView_appear_NATIVE","Approve Native/ Pop Native Rate"),Object(d.a)(t,"approve_SDK/pop_SDK","Approve SDK / Pop SDK Rate"),Object(d.a)(t,"purchase_NATIVE/approve_NATIVE","Purchase Native/ Approve Native Rate"),Object(d.a)(t,"purchase_SDK/approve_SDK","Purchase SDK/ Approve SDK Rate"),t);return a[e]?a[e]:e},data:i,getDate:function(e,t){return K-e===0?"Today":K-e===1?"Yesterday":new Date(864e5*e).toLocaleDateString()},start:a,events:M}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{})]})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,160)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),M()},81:function(e,t,a){},83:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.9d352b35.chunk.js.map