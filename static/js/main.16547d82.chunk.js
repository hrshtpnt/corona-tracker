(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{111:function(e,t,a){e.exports={container:"Charts_container__rnzyX"}},117:function(e,t,a){e.exports=a.p+"static/media/sort-black.f94dfe67.svg"},118:function(e,t,a){e.exports={tableView:"IndianStatesTable_tableView__19VlS"}},119:function(e,t,a){e.exports=a.p+"static/media/corona.d7265326.png"},126:function(e,t,a){e.exports=a(247)},131:function(e,t,a){},16:function(e,t,a){e.exports={container:"worldTable_container__2oPiO",width100:"worldTable_width100__2wUeC",width70:"worldTable_width70__2hlmh",root:"worldTable_root__2TtJs",rootTable:"worldTable_rootTable__2Ilfb",rootButton:"worldTable_rootButton__272uV",sortText:"worldTable_sortText__YN-QW",sortImage:"worldTable_sortImage__15FNf"}},22:function(e,t,a){e.exports={indiaStatus:"IndiaStatus_indiaStatus__1-bbP",selectedDataHeading:"IndiaStatus_selectedDataHeading__2sOGS",formControl:"IndiaStatus_formControl__4HH3H",selectedData:"IndiaStatus_selectedData__1rfr_",stateDataSection:"IndiaStatus_stateDataSection__2q1kr",buttonShowStateData:"IndiaStatus_buttonShowStateData__3nNlA"}},247:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=(a(131),a(7)),l=a.n(i),s=a(12),u=a(107),d=a(108),m=a(121),p=a(120),h=a(13),f=a(109),v=a(60),b=a(15),g=a(35),E=a.n(g),_="https://covid19.mathdro.id/api",y=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n,r,c,o,i,s,u=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:"",a=_,""!==t&&(a="".concat(_,"/countries/").concat(t)),e.prev=3,e.next=6,E.a.get(a);case 6:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,i=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:i,lastUpdate:s});case 15:e.prev=15,e.t0=e.catch(3),console.log("API fetch error");case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(_,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,reportDate:new Date(e.reportDate).toDateString().split("2020").join("")}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log("API fetch error - fetch daily data");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(_,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log("fetch countries failed with "+e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://sharadcodes.github.io/c-data/data/world.json");case 3:return t=e.sent,a=t.data.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{casesSummary:0!==e.todayCases?"".concat(e.cases,"\n          +").concat(e.todayCases," Today"):e.cases,deathSummary:0!==e.todayDeaths?"".concat(e.deaths,"\n          +").concat(e.todayDeaths," Today"):e.deaths})})),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log("table API failed with "+e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://api.covid19india.org/state_district_wise.json");case 3:t=e.sent,a=Object.entries(t.data).map((function(e){return Object(v.a)({},e[0],e[1])})),n=[],r=Object(f.a)(a);try{for(r.s();!(c=r.n()).done;)for(o in c.value)n.push(o)}catch(i){r.e(i)}finally{r.f()}return n.shift(),e.abrupt("return",[a,n]);case 12:e.prev=12,e.t0=e.catch(0),console.log("India API failed to fetch data");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("https://covid19-india-adhikansh.herokuapp.com/states");case 3:return t=e.sent,e.abrupt("return",t.data.state);case 7:e.prev=7,e.t0=e.catch(0),console.log("fetch indian state report API failed");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),C=a(79),k=a(111),D=a.n(k),N=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,i=e.country,u=Object(n.useState)([]),d=Object(h.a)(u,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,w();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?r.a.createElement(C.b,{data:{labels:m.map((function(e){return e.reportDate})),datasets:[{data:m.map((function(e){return e.deaths})),label:"Infected",borderColor:"#FF6550",fill:!0},{data:m.map((function(e){return e.confirmed})),label:"Recovered",borderColor:"cornflowerblue",fill:!0}]}}):null,v=a?r.a.createElement(C.a,{data:{labels:["Confirmed","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(i)}}}):null;return r.a.createElement("div",{className:D.a.container},i?v:f)},T=a(284),I=a(302),P=a(116),M=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(h.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"row"},r.a.createElement(T.a,null,r.a.createElement(I.a,{shrink:!0,id:"demo-simple-select-placeholder-label-label"},"Country"),r.a.createElement(P.a,{onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))},W=a(288),B=a(289),A=a(290),H=a(291),R=a(29),V=a.n(R),z=a(18),F=a.n(z),U=a(43),G=a.n(U),J=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return void 0===a?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{className:V.a.container},r.a.createElement(W.a,{container:!0,spacing:3,justfy:"center"},r.a.createElement(W.a,{item:!0,component:B.a,xs:12,md:3,className:F()(V.a.card,V.a.infected)},r.a.createElement(A.a,null,r.a.createElement(H.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(H.a,{variant:"h5",component:"h2"},r.a.createElement(G.a,{start:0,end:a.value,separator:",",duration:2})),r.a.createElement(H.a,{variant:"h6",component:"h2"},new Date(o).toDateString()),r.a.createElement(H.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19"))),r.a.createElement(W.a,{item:!0,component:B.a,xs:12,md:3,className:F()(V.a.card,V.a.recovered)},r.a.createElement(A.a,null,r.a.createElement(H.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(H.a,{variant:"h5",component:"h2"},r.a.createElement(G.a,{start:0,end:n.value,separator:",",duration:2})),r.a.createElement(H.a,{variant:"h6",component:"h2"},new Date(o).toDateString()),r.a.createElement(H.a,{variant:"body2",component:"p"},"Number of recoveries from COVID-19"))),r.a.createElement(W.a,{item:!0,component:B.a,xs:12,md:3,className:F()(V.a.card,V.a.deaths)},r.a.createElement(A.a,null,r.a.createElement(H.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(H.a,{variant:"h5",component:"h2"},r.a.createElement(G.a,{start:0,end:c.value,separator:",",duration:2})),r.a.createElement(H.a,{variant:"h6",component:"h2"},new Date(o).toDateString()),r.a.createElement(H.a,{variant:"body2",component:"p"},"Number of deaths from COVID-19")))))},L=a(68),Y=a(292),X=a(293),q=a(294),K=a(249),Z=a(295),Q=a(296),$=a(297),ee=a(298),te=a(299),ae=a(300),ne=a(301),re=a(16),ce=a.n(re),oe=a(117),ie=a.n(oe),le=[{id:"country",label:"Country",minWidth:50,align:"left"},{id:"casesSummary",label:"Total Cases",minWidth:50,align:"right"},{id:"deathSummary",label:"Deaths",minWidth:50,align:"right"},{id:"recovered",label:"Recovered",minWidth:50,align:"right"},{id:"active",label:"Active",minWidth:50,align:"right"},{id:"critical",label:"Critical",minWidth:50,align:"right"},{id:"tests",label:"Tests",minWidth:50,align:"right"},{id:"casesPerOneMillion",label:"Cases/Million",minWidth:50,align:"right"},{id:"deathsPerOneMillion",label:"Deaths/Million",minWidth:50,align:"right"},{id:"recoveredPerOneMillion",label:"Recovered/Million",minWidth:50,align:"right"},{id:"activePerOneMillion",label:"Active/Million",minWidth:50,align:"right"},{id:"criticalPerOneMillion",label:"Critical/Million",minWidth:50,align:"right"},{id:"testsPerOneMillion",label:"Tests/Million",minWidth:50,align:"right"}],se=Object(Y.a)({root:{width:"100%"},container:{maxHeight:800}});var ue=function(){var e=se(),t=Object(n.useState)(0),a=Object(h.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(20),u=Object(h.a)(i,2),d=u[0],m=u[1],p=Object(n.useState)([]),f=Object(h.a)(p,2),v=f[0],b=f[1],g=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g()}),[]),v===[]?r.a.createElement("p",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{className:ce.a.width70}),r.a.createElement("br",null),r.a.createElement("div",{className:ce.a.container},r.a.createElement("div",{className:F()(ce.a.width100,"row")},r.a.createElement("div",{className:F()(ce.a.root,"col-sm-12")},r.a.createElement("h6",{className:ce.a.sortText},r.a.createElement("img",{src:ie.a,alt:"sort",className:ce.a.sortImage}),"Sort"),r.a.createElement(q.a,{size:"small",variant:"outlined",color:"secondary",className:ce.a.rootButton,onClick:function(){b(Object(L.a)(v).sort((function(e,t){return t.cases-e.cases})))}},"Cases"),r.a.createElement(q.a,{size:"small",variant:"outlined",color:"secondary",className:ce.a.rootButton,onClick:function(){b(Object(L.a)(v).sort((function(e,t){return t.deaths-e.deaths})))}},"Deaths"),r.a.createElement(q.a,{size:"small",variant:"outlined",color:"primary",className:ce.a.rootButton,onClick:function(){b(Object(L.a)(v).sort((function(e,t){return t.recovered-e.recovered})))}},"Recovered"),r.a.createElement(q.a,{size:"small",variant:"outlined",color:"primary",className:ce.a.rootButton,onClick:function(){g()}},"Clear Sort"))),r.a.createElement("div",{className:ce.a.rootTable},r.a.createElement(K.a,{className:e.root},r.a.createElement(Z.a,{className:e.container},r.a.createElement(Q.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement($.a,null,r.a.createElement(ee.a,null,le.map((function(e){return r.a.createElement(te.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(ae.a,null,v.slice(c*d,c*d+d).map((function(e){return r.a.createElement(ee.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},le.map((function(t){var a=e[t.id];return r.a.createElement(te.a,{key:t.id,align:t.align},t.format&&"number"===typeof a?t.format(a):a)})))}))))),r.a.createElement(ne.a,{rowsPerPageOptions:[20,50,100,150,200,300],component:"div",count:v.length,rowsPerPage:d,page:c,onChangePage:function(e,t){o(t)},onChangeRowsPerPage:function(e){m(+e.target.value),o(0)}})))))},de=a(22),me=a.n(de),pe=a(67),he=a.n(pe);var fe=function(e){var t=e.statusType,a=e.count;return r.a.createElement("div",{className:F()(he.a.tiles,he.a[t])},r.a.createElement("h6",{className:he.a.type},t),r.a.createElement(G.a,{start:0,end:a,separator:",",duration:2}))},ve=a(118),be=a.n(ve);var ge=function(e){var t=e.statesData;return r.a.createElement(Z.a,{component:K.a,className:be.a.tableView},r.a.createElement(Q.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement($.a,null,r.a.createElement(ee.a,null,r.a.createElement(te.a,null,"State / UT"),r.a.createElement(te.a,{align:"right"},"Confirmed"),r.a.createElement(te.a,{align:"right"},"Recovered"),r.a.createElement(te.a,{align:"right"},"Deaths"),r.a.createElement(te.a,{align:"right"},"Total"))),r.a.createElement(ae.a,null,t.map((function(e){return r.a.createElement(ee.a,{key:e._id},r.a.createElement(te.a,{component:"th",scope:"row"},e.name),r.a.createElement(te.a,{align:"right"},e.confirmed),r.a.createElement(te.a,{align:"right"},e.cured),r.a.createElement(te.a,{align:"right"},e.death),r.a.createElement(te.a,{align:"right"},e.total))})))))};var Ee=function(){var e=Object(n.useState)(),t=Object(h.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),i=Object(h.a)(o,2),u=i[0],d=i[1],m=Object(n.useState)({name:"",position:0}),p=Object(h.a)(m,2),f=p[0],v=p[1],g=Object(n.useState)(""),E=Object(h.a)(g,2),_=E[0],y=E[1],w=Object(n.useState)({active:0,recovered:0,deaths:0,confirmed:0}),O=Object(h.a)(w,2),S=O[0],C=O[1],k=Object(n.useState)([]),D=Object(h.a)(k,2),N=D[0],M=D[1],W=Object(n.useState)({loadingTextSummary:!1,loadingTextDetailed:!1}),B=Object(h.a)(W,2),A=B[0],H=B[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:me.a.stateDataSection},r.a.createElement(X.a,null),N&&0===N.length&&r.a.createElement(q.a,{variant:"outlined",color:"secondary",className:me.a.buttonShowStateData,onClick:function(){H(Object(b.a)(Object(b.a)({},A),{},{loadingTextSummary:!0})),function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=M,e.next=3,x();case 3:e.t1=e.sent,(0,e.t0)(e.t1),H(Object(b.a)(Object(b.a)({},A),{},{loadingTextSummary:!1}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}},"State Summary"),A.loadingTextSummary&&r.a.createElement("p",null,"Loading..."),N&&N.length>0&&r.a.createElement(ge,{statesData:N}),r.a.createElement("br",null),r.a.createElement(X.a,null)),!a&&r.a.createElement(q.a,{variant:"outlined",color:"secondary",className:me.a.buttonShowStateData,onClick:function(){H(Object(b.a)(Object(b.a)({},A),{},{loadingTextDetailed:!0})),function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,j();case 3:e.t1=e.sent,(0,e.t0)(e.t1),H(Object(b.a)(Object(b.a)({},A),{},{loadingTextDetailed:!1}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}},"State Detailed"),A.loadingTextDetailed&&r.a.createElement("p",null,"Loading..."),a&&r.a.createElement("div",{className:me.a.indiaStatus},r.a.createElement("div",{className:F()(me.a.indiaStatus,me.a.selectedDataHeading)},r.a.createElement(T.a,{className:me.a.formControl},r.a.createElement(I.a,{shrink:!0,id:"state"},"State / UT"),r.a.createElement(P.a,{onChange:function(e){return function(e,t){y("");var n=""!==e&&a[0][t][e].districtData,r=[];for(var c in n)r.push(c);v({name:e,position:t}),d(r)}(e.target.value,e.target.selectedIndex)}},r.a.createElement("option",{value:""},"Select State"),a[1].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement(T.a,{className:me.a.formControl,disabled:!u.length>0},r.a.createElement(I.a,{shrink:!0,id:"district"},"District"),r.a.createElement(P.a,{onChange:function(e){return function(e){if(y(e),""!==e){var t=f.name,n=f.position,r=a[0][n][t].districtData[e];C({active:r.active||0,recovered:r.recovered||0,confirmed:r.confirmed||0,deaths:r.deceased||0})}}(e.target.value)},value:_},r.a.createElement("option",{value:""},"Select District"),u.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))),""!==_&&""!==f.name&&r.a.createElement("div",{className:me.a.indiaStatus},r.a.createElement(fe,{count:S.active,statusType:"active"}),r.a.createElement(fe,{count:S.confirmed,statusType:"confirmed"}),r.a.createElement(fe,{count:S.recovered,statusType:"recovered"}),r.a.createElement(fe,{count:S.deaths,statusType:"deaths"}))))},_e=a(80),ye=a.n(_e),we=a(119),Oe=a.n(we),Se=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:ye.a.container},r.a.createElement("img",{className:ye.a.coronaImage,src:Oe.a,alt:"Corona"}),r.a.createElement(J,{data:t}),r.a.createElement(M,{handleCountryChange:this.handleCountryChange}),r.a.createElement(N,{data:t,country:a}),r.a.createElement("h3",null,"India Statistics"),r.a.createElement(Ee,null),r.a.createElement("h3",null,"Global Statistics"),r.a.createElement(ue,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(246);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){e.exports={container:"Cards_container__2XqFC",card:"Cards_card__1ak5A",infected:"Cards_infected__bZ078",recovered:"Cards_recovered__1wTBM",deaths:"Cards_deaths__1YvrA"}},67:function(e,t,a){e.exports={tiles:"MiniCard_tiles__YCdnu",type:"MiniCard_type__nxrWP",active:"MiniCard_active__10PWD",confirmed:"MiniCard_confirmed__WXP8Z",recovered:"MiniCard_recovered__G6-rK",deaths:"MiniCard_deaths__2GYkz"}},80:function(e,t,a){e.exports={container:"app_container__2JKVN",coronaImage:"app_coronaImage__3giRr"}}},[[126,1,2]]]);
//# sourceMappingURL=main.16547d82.chunk.js.map