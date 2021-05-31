(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{170:function(t,e,a){},310:function(t,e,a){"use strict";a.r(e);var c=a(0),i=a.n(c),n=a(58),r=a.n(n),s=(a(170),a(32)),o=a.n(s),d=a(45),l=a(78),j=a(17),h=function(){var t=Object(l.a)(o.a.mark((function t(){var e,a,c,i=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",i.length>1&&void 0!==i[1]?i[1]:{},a=i.length>2?i[2]:void 0,t.next=5,fetch(e,{method:a||"GET",mode:"cors"});case 5:return c=t.sent,t.abrupt("return",c.json());case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=a(60),b=a(312),u=a(313),f=a(317),y=a(158),p=a(159),O=a(69),v=a(66),g=a(161),m=a(14),k=function(t){var e,a=Object(d.a)({},t),c=a.xDataKey,i=a.yDataKey,n=a.xFont,r=void 0===n?15:n,s=a.yFont,o=void 0===s?15:s,l=a.yColor,j=void 0===l?"red":l;console.log("props:",t);var h=function(t){var e=Object(d.a)({},t),a=e.cx,c=e.cy,i=e.stroke,n=e.fill,r=e.payload,s=(e.value,e.data),o=e.selectKey;return r[void 0===o?"id":o]==s.length?Object(m.jsx)("circle",{className:"circle-highligter",cx:a,cy:c,r:6,stroke:i,strokeWidth:10,fill:n,strokeOpacity:"0.7",style:{position:"relative"}}):""};return Object(m.jsx)("div",{style:{width:t.width||"100%",height:t.height||"200px"},children:Object(m.jsx)(b.a,{width:"100%",height:"100%",children:Object(m.jsxs)(u.a,{width:1e3,height:300,data:t.data,margin:{top:5,right:0,left:20,bottom:5},children:[Object(m.jsx)(f.a,{vertical:!1,strokeDashoffset:"1"}),Object(m.jsx)(y.a,{dataKey:c,axisLine:!1,fontSize:r,tickLine:!1,dy:10}),Object(m.jsx)(p.a,{orientation:"right",interval:0,axisLine:!1,fontSize:o,tickLine:!1}),Object(m.jsx)(O.a,{cursor:!1}),Object(m.jsx)(v.a,{}),Object(m.jsx)(g.a,(e={type:"monotone",dataKey:i,stroke:j,strokeWidth:"5",dot:{stroke:"red",strokeWidth:1,r:10,fill:"#e65858",strokeOpacity:"0.5"}},Object(x.a)(e,"dot",Object(m.jsx)(h,Object(d.a)({data:t.data},t))),Object(x.a)(e,"activeDot",Object(m.jsx)(h,Object(d.a)({data:t.data},t))),e))]})})})},K=function(t){var e=Object(c.useState)("KA"),a=Object(j.a)(e,2),n=a[0],r=(a[1],Object(c.useState)([])),s=Object(j.a)(r,2),x=s[0],b=s[1],u=function(){var t=Object(l.a)(o.a.mark((function t(){var e,a,c,i,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h("https://api.covid19india.org/v4/min/timeseries.min.json");case 3:return e=t.sent,console.log("response for line chart:",e),t.next=7,h("https://api.covid19india.org/v4/min/data.min.json");case 7:a=t.sent,c=Object.entries(a),i=c.filter((function(t){var e=Object(j.a)(t,2),a=e[0];e[1];return a==n})),r=Object.fromEntries(i),console.log("filtered array:",r[n].districts),r[n].districts,s=[],Object.keys(r[n].districts).map((function(t,e){var a=Object(d.a)({district:t,state:n,id:e+1},r[n].districts[t].total);s.push(a)})),console.log("data:",s),b(s),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(0),console.log("error:",t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,19]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[]),Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsx)("div",{className:"text-black-50 text-center py-4",style:{fontSize:"20px",fontWeight:"bold"},children:"Covid-Status"}),Object(m.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(m.jsx)(k,{className:"px-5",data:x,xDataKey:"district",yDataKey:"tested",stroke:"#bdaece",fill:"#8f4bdc",height:"400px",width:"50%",selectKey:"id",xFont:12,yFont:12,yColor:"#8f4bdc"}),Object(m.jsx)(k,{data:x,xDataKey:"district",yDataKey:"confirmed",stroke:"#e65858",fill:"red",height:"400px",width:"50%",selectKey:"id",xFont:12,yFont:12})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(m.jsx)(k,{className:"px-5",data:x,xDataKey:"district",yDataKey:"vaccinated",stroke:"#a1bed6",fill:"#5894c5",height:"400px",width:"50%",selectKey:"id",xFont:12,yFont:12,yColor:"#5894c5"}),Object(m.jsx)(k,{data:x,xDataKey:"district",yDataKey:"recovered",stroke:"#a0da9f",fill:"#339c31",height:"400px",width:"50%",selectKey:"id",xFont:12,yFont:12,yColor:"#339c31"})]})]})},F=(a(309),function(){return Object(m.jsx)(K,{})}),w=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,319)).then((function(e){var a=e.getCLS,c=e.getFID,i=e.getFCP,n=e.getLCP,r=e.getTTFB;a(t),c(t),i(t),n(t),r(t)}))};r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root")),w()}},[[310,1,2]]]);
//# sourceMappingURL=main.a60a8b77.chunk.js.map