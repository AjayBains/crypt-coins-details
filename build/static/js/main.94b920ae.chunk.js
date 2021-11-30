(this.webpackJsonpcryptocoins=this.webpackJsonpcryptocoins||[]).push([[0],{179:function(e,t,c){},186:function(e,t,c){},321:function(e,t,c){},322:function(e,t,c){},323:function(e,t,c){},324:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(65),s=c.n(a),i=(c(179),c(22)),o=c.n(i),j=c(38),u=c(13),l=c(49),b=c(2),d=function(e){var t=e.currency,c=e.coins;return Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Market Cap Rank"}),Object(b.jsx)("th",{children:"ICON"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsxs)("th",{children:["Price(",t,")"]}),Object(b.jsx)("th",{children:"Max Supply"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e){var c=e.id,n=e.name,r=e.image,a=e.current_price,s=(e.market_cap,e.market_cap_rank),i=e.max_supply;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:s}),Object(b.jsxs)("td",{children:[" ",Object(b.jsx)("img",{src:r,alt:"",className:"coin__img"})]}),Object(b.jsx)("td",{children:Object(b.jsx)(l.b,{to:"coin/".concat(e.id),children:n})}),Object(b.jsxs)("td",{children:[a," ",t.toUpperCase()]}),Object(b.jsx)("td",{children:i})]},c)}))})]})},h=c(334),O=function(e){var t=e.page,c=e.setPage;function n(e){c((function(t){return t+e}))}return Object(b.jsxs)(h.a,{children:[Object(b.jsx)(h.a.First,{onClick:function(){return c(1)}}),t>=2&&Object(b.jsx)(h.a.Prev,{onClick:function(){return n(-1)}}),Object(b.jsx)(h.a.Item,{onClick:function(){return c(1)},children:1}),t>3&&Object(b.jsx)(h.a.Ellipsis,{}),t>2&&Object(b.jsx)(h.a.Item,{onClick:function(){return n(-1)},children:t-1}),t>=2&&Object(b.jsx)(h.a.Item,{active:!0,children:t}),t>2&&Object(b.jsx)(h.a.Item,{onClick:function(){return n(1)},children:t+1}),Object(b.jsx)(h.a.Ellipsis,{}),Object(b.jsx)(h.a.Next,{onClick:function(){return n(1)}})]})},p=c(19),x=c(327),f=c(328),m=c(332),g=c(167),v=c(168),y=c(75),k=c(72),C=c(170);c(186);var _=function(e){var t=e.data;return Object(b.jsxs)("div",{className:"coinChart",children:[Object(b.jsx)("h4",{children:"Price chart for last 30 days in USD"}),Object(b.jsx)(x.a,{width:"50%",height:"50%",children:Object(b.jsxs)(f.a,{width:300,height:200,data:t,margin:{top:50,right:30,left:20,bottom:5},children:[Object(b.jsx)(m.a,{strokeDasharray:"3 4"}),Object(b.jsx)(g.a,{dataKey:t.day}),Object(b.jsx)(v.a,{}),Object(b.jsx)(y.a,{}),Object(b.jsx)(k.a,{}),Object(b.jsx)(C.a,{type:"monotone",dataKey:"price",stroke:"#8884d8",activeDot:{r:8}})]})})]})},S=function(e){var t=e.coin,c=Object(n.useState)(!0),r=Object(u.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)([]),l=Object(u.a)(i,2),d=l[0],h=l[1],O=function(){var e=Object(j.a)(o.a.mark((function e(){var c,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/".concat(t.id,"/market_chart?vs_currency=usd&days=30&interval=daily"));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,r=[],n.prices.map((function(e,t){var c={price:e[1],day:t};return r.push(c)})),h(r),s(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O()}),[]),Object(b.jsx)(b.Fragment,{children:a?Object(b.jsx)("p",{children:"Loading..."}):Object(b.jsx)(_,{data:d})})},w=(c(321),function(e){var t=e.coin,c=Object(n.useState)(!1),r=Object(u.a)(c,2),a=r[0],s=r[1],i=t.image,o=t.name,j=t.description;t.symbol;return Object(b.jsxs)("div",{className:"coinPage",children:[Object(b.jsxs)("div",{className:"coinPageLeft",children:[Object(b.jsxs)("h3",{className:"coinPageCoinTitle title",children:["Name:",o]}),Object(b.jsx)("img",{src:i.small,alt:"",className:"coinPageCoinImg"}),Object(b.jsx)("p",{className:"coinDescription",children:a?j.en:j.en.substring(0,100)+"..."}),Object(b.jsx)("button",{onClick:function(){return s(!a)},className:"btn",children:a?"Read Less":"Read More"}),Object(b.jsx)("div",{style:{marginTop:"3rem"},children:Object(b.jsx)("button",{className:"btn",children:Object(b.jsx)(l.b,{to:"/",children:"Go back"})})})]}),Object(b.jsx)("div",{className:"coinPageRight",children:Object(b.jsx)(S,{coin:t})})]})}),N=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(),s=Object(u.a)(a,2),i=s[0],l=s[1],d=Object(p.f)();console.log(d);var h=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/".concat(d.params.name.toLowerCase()));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),l(c),r(!1),console.log(d);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),Object(b.jsx)("div",{children:c?Object(b.jsx)("p",{children:"Loading..."}):Object(b.jsx)(w,{coin:i})})},P=(c(322),c(323),function(e){var t=e.currency,c=e.handleCurrency,r=Object(n.useState)([]),a=Object(u.a)(r,2),s=a[0],i=a[1],l=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/simple/supported_vs_currencies");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i(c),setTimeout((function(){console.log(s)}),2e3);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[t]),Object(b.jsx)("div",{className:"currencySelector",children:Object(b.jsxs)("select",{value:t,onChange:function(e){return c(e)},children:[Object(b.jsx)("option",{value:"usd",children:"USD"}),s.map((function(e){return Object(b.jsx)("option",{value:e,children:e.toUpperCase()},e)}))]})})}),L=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(u.a)(a,2),i=s[0],h=s[1],x=Object(n.useState)(1),f=Object(u.a)(x,2),m=f[0],g=f[1],v=Object(n.useState)(!0),y=Object(u.a)(v,2),k=(y[0],y[1]),C=Object(n.useState)("usd"),_=Object(u.a)(C,2),S=_[0],w=_[1];setTimeout((function(){return console.log(S)}),1e3);var L,E=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(S,"&order=market_cap_desc&per_page=100&page=").concat(m,"&sparkline=false"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),r(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(S,"&order=market_cap_desc&per_page=100&page=").concat(m+1,"&sparkline=false"));case 2:return t=e.sent,e.next=5,t.json();case 5:0===e.sent.length&&k(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){E()}),[m,S]),Object(n.useEffect)((function(){I()}),[m]),Object(b.jsx)(l.a,{children:Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,{exact:!0,path:"/",children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{style:{textAlign:"center",padding:".5rem"},children:[Object(b.jsx)("label",{htmlFor:"search",style:{fontWeight:700,marginRight:".3rem"},children:"Search"}),Object(b.jsx)("input",{type:"text",id:"search",value:i,name:"search",onChange:function(e){h(e.target.value)},style:{padding:".2rem"}})]}),Object(b.jsx)(P,{currency:S,handleCurrency:function(e){w(e.target.value)}}),Object(b.jsx)("div",{style:{textAlign:"center"},children:Object(b.jsx)(O,{page:m,setPage:g})}),Object(b.jsx)(d,{currency:S,coins:(L=c,L.filter((function(e){return e.name.toLowerCase().indexOf(i.toLowerCase())>-1})))}),Object(b.jsx)(O,{page:m,setPage:g})]})}),Object(b.jsx)(p.a,{path:"/coin/:name",children:Object(b.jsx)(N,{})})]})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,335)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),E()}},[[324,1,2]]]);
//# sourceMappingURL=main.94b920ae.chunk.js.map