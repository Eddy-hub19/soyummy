"use strict";(self.webpackChunksoyummy=self.webpackChunksoyummy||[]).push([[347],{9347:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(9439),o=n(5228),a=n(3896),s=n(6747),c=n(2791),i=n(7689),u=n(9569),l=n(3622),f=n(3329),d=function(){var t=(0,i.UO)().categoryName,e=(0,c.useState)(0),n=(0,r.Z)(e,2),d=n[0],p=n[1],x=(0,c.useState)([]),b=(0,r.Z)(x,2),h=b[0],g=b[1],m=(0,i.s0)(),v=(0,c.useState)(!1),y=(0,r.Z)(v,2),A=y[0],k=y[1];(0,c.useEffect)((function(){try{(0,u.D)().then((function(t){return g(t)}))}catch(t){console.log(t.message)}}),[]),(0,c.useEffect)((function(){if(0!==h.length){var e=h.findIndex((function(e){return e.toLowerCase()===t}));-1!==e&&p(e)}}),[t,h]);var w=h.map((function(t,e){return(0,f.jsx)(a.Z,{label:t.toLowerCase(),sx:{padding:"0",paddingBottom:"28px",color:l.r.colors.disabledGrey,"&.Mui-selected":{color:"#8BAA36"}}},e)})),C=window.innerWidth<376;return(0,f.jsx)(s.Z,{sx:{maxWidth:"100%",bgcolor:"transparent",borderBottom:l.r.borders.mainSearchInput},onMouseEnter:function(){k(!0)},onMouseLeave:function(){k(!1)},children:(0,f.jsx)(o.Z,{onChange:function(t,e){p(e),m("/categories/".concat(t.target.textContent))},value:d,variant:"scrollable",scrollButtons:!0,"aria-label":"scrollable auto tabs example",sx:{"& .MuiTabs-scroller":{"& .css-1aquho2-MuiTabs-indicator":{backgroundColor:"#8BAA36"},"& .css-ttwr4n":{backgroundColor:"#8BAA36"},overflowX:"auto",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},"& .MuiTabs-flexContainer":{gap:C?"26px":"55px","& :hover":{color:"#8BAA36"}},"& .MuiTab-root":{textTransform:"capitalize",minWidth:"unset",fontSize:C?"14px":"18px",fontFamily:"Poppins",fontWeight:"400",lineHeight:"18px",borderColor:"#8BAA36",paddingTop:"10px"},"& svg":{opacity:"".concat(A?1:0),stroke:"#8BAA36",strokeWidth:"3px",transition:"all 250ms cubic-bezier(0.4, 0, 0.2, 1)"}},children:w})})},p=n(5834),x=n(4585),b=n(1523),h=function(){return(0,f.jsxs)(p.W,{children:[(0,f.jsx)(b.D,{children:"Categories"}),(0,f.jsx)(d,{}),(0,f.jsx)(c.Suspense,{fallback:(0,f.jsx)(x.a,{}),children:(0,f.jsx)(i.j3,{})})]})}},9569:function(t,e,n){n.d(e,{D:function(){return c},y:function(){return i}});var r=n(5861),o=n(4687),a=n.n(o),s=n(7486),c=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.get("/recipes/category-list");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(t){return s.b.get("/recipes/category/".concat(t)).then((function(t){return t.data}))}}}]);
//# sourceMappingURL=347.98a38a08.chunk.js.map