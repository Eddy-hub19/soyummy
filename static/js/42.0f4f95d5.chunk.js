"use strict";(self.webpackChunksoyummy=self.webpackChunksoyummy||[]).push([[42],{8270:function(e,n,t){t.d(n,{Cx:function(){return f},Mo:function(){return p},ll:function(){return u},pf:function(){return s}});var r,i,o,a,l=t(168),c=t(8789),d=t(3622),s=c.default.div(r||(r=(0,l.Z)(["\n  display: none;\n"]))),u=c.default.p(i||(i=(0,l.Z)(["\n  font-family: ",";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n  color: ",";\n  padding: 16px;\n  background-color: ",";\n  position: absolute;\n  top: 245px;\n  left: 16px;\n  border-radius: 8px;\n  width: calc(100% - 64px);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  :hover + "," {\n    width: 100%;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    max-width: 100%;\n    margin-top: -25px;\n    border-radius: 5px;\n    padding: 4px;\n    font-family: ",";\n    color: ",";\n    background-color: #8baa36;\n\n    p {\n      width: 100%;\n      padding: 5px;\n    }\n\n    @media (min-width: 1440px) {\n      margin-top: 8px;\n    }\n  }\n"])),d.r.fonts.main,(function(e){return e.theme.colors.mainHeaderText}),(function(e){return e.theme.colors.mainSearchInput}),s,(function(e){return e.theme.fonts.main}),(function(e){return e.theme.colors.mainHeaderText})),p=c.default.img(o||(o=(0,l.Z)(["\n  height: 323px;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n  transition: all 1000ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),f=c.default.li(a||(a=(0,l.Z)(["\n  width: 343px;\n  height: 323px;\n  border-radius: 8px;\n  position: relative;\n  transition: box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    box-shadow: 0 0 7px 5px ",";\n  }\n  @media (min-width: 768px) {\n    /* width: calc((100% - 32px) / 2); */\n    max-width: 336px;\n  }\n\n  @media (min-width: 1440px) {\n    width: calc((100% - 42px) / 4);\n  }\n\n  a {\n    display: block;\n    overflow: hidden;\n    border-radius: 8px;\n\n    :hover img {\n      transform: scale(1.25);\n      filter: contrast(130%);\n    }\n  }\n"])),(function(e){return e.theme.colors.mainGrey}))},9042:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r,i=t(9439),o=t(1087),a=t(8270),l=t(4161),c=t(2911),d=t(3329),s=function(e){var n=e.meal;return(0,d.jsx)(a.Cx,{children:(0,d.jsxs)(o.rU,{to:"/recipes/".concat(n._id),onClick:c.k,children:[(0,d.jsx)(a.Mo,{src:n.thumb?n.thumb:{NoImage:l},alt:n.title}),(0,d.jsx)(a.ll,{"data-tooltip-id":n._id,children:n.title}),n.title.length>30&&(0,d.jsx)(a.pf,{children:(0,d.jsx)("p",{children:n.title})})]})})},u=t(2791),p=t(7689),f=t(168),m=t(8789).default.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 100px;\n  margin-top: 32px;\n  gap: 28px;\n\n  @media (min-width: 768px) {\n    gap: 32px;\n    margin-bottom: 200px;\n    margin-top: 50px;\n  }\n\n  @media (min-width: 1440px) {\n    gap: 14px;\n    row-gap: 100px;\n  }\n"]))),h=t(9569),x=t(1413),g=function(){return g=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},g.apply(this,arguments)};var y=function(e){var n=e.animate,t=void 0===n||n,r=e.animateBegin,i=e.backgroundColor,o=void 0===i?"#f5f6f7":i,a=e.backgroundOpacity,l=void 0===a?1:a,c=e.baseUrl,d=void 0===c?"":c,s=e.children,p=e.foregroundColor,f=void 0===p?"#eee":p,m=e.foregroundOpacity,h=void 0===m?1:m,x=e.gradientRatio,y=void 0===x?2:x,b=e.gradientDirection,v=void 0===b?"left-right":b,w=e.uniqueKey,j=e.interval,E=void 0===j?.25:j,k=e.rtl,O=void 0!==k&&k,C=e.speed,Z=void 0===C?1.2:C,P=e.style,T=void 0===P?{}:P,M=e.title,N=void 0===M?"Loading...":M,S=e.beforeMask,U=void 0===S?null:S,B=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),z=w||Math.random().toString(36).substring(6),D=z+"-diff",I=z+"-animated-diff",_=z+"-aria",q=O?{transform:"scaleX(-1)"}:null,G="0; "+E+"; 1",H=Z+"s",K="top-bottom"===v?"rotate(90)":void 0;return(0,u.createElement)("svg",g({"aria-labelledby":_,role:"img",style:g(g({},T),q)},B),N?(0,u.createElement)("title",{id:_},N):null,U&&(0,u.isValidElement)(U)?U:null,(0,u.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+d+"#"+D+")",style:{fill:"url("+d+"#"+I+")"}}),(0,u.createElement)("defs",null,(0,u.createElement)("clipPath",{id:D},s),(0,u.createElement)("linearGradient",{id:I,gradientTransform:K},(0,u.createElement)("stop",{offset:"0%",stopColor:o,stopOpacity:l},t&&(0,u.createElement)("animate",{attributeName:"offset",values:-y+"; "+-y+"; 1",keyTimes:G,dur:H,repeatCount:"indefinite",begin:r})),(0,u.createElement)("stop",{offset:"50%",stopColor:f,stopOpacity:h},t&&(0,u.createElement)("animate",{attributeName:"offset",values:-y/2+"; "+-y/2+"; "+(1+y/2),keyTimes:G,dur:H,repeatCount:"indefinite",begin:r})),(0,u.createElement)("stop",{offset:"100%",stopColor:o,stopOpacity:l},t&&(0,u.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+y),keyTimes:G,dur:H,repeatCount:"indefinite",begin:r})))))},b=function(e){return e.children?(0,u.createElement)(y,g({},e)):(0,u.createElement)(v,g({},e))},v=function(e){return(0,u.createElement)(b,g({viewBox:"0 0 476 124"},e),(0,u.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,u.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,u.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,u.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,u.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,u.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},w=b,j=function(e){return(0,d.jsx)(w,(0,x.Z)((0,x.Z)({speed:2,width:314,height:323,viewBox:"0 0 300 323",backgroundColor:"#adb3ad",foregroundColor:"#959393"},e),{},{children:(0,d.jsx)("rect",{x:"0",y:"0",rx:"8",ry:"8",width:"300",height:"323"})}))},E=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(j,{}),(0,d.jsx)(j,{}),(0,d.jsx)(j,{}),(0,d.jsx)(j,{}),(0,d.jsx)(j,{}),(0,d.jsx)(j,{}),(0,d.jsx)(j,{}),(0,d.jsx)(j,{})]})},k=function(){var e=(0,p.UO)().categoryName,n=(0,u.useState)([]),t=(0,i.Z)(n,2),r=t[0],o=t[1];var a,l=(a=e).charAt(0).toUpperCase()+a.slice(1);return(0,u.useEffect)((function(){try{(0,h.y)(l).then((function(e){return o(e)}))}catch(e){console.log(e)}}),[e,l]),(0,d.jsxs)(m,{children:[0===r.length&&(0,d.jsx)(E,{}),r.map((function(e){return(0,d.jsx)(s,{meal:e},e._id)}))]})}},9569:function(e,n,t){t.d(n,{D:function(){return l},y:function(){return c}});var r=t(5861),i=t(4687),o=t.n(i),a=t(7486),l=function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.b.get("/recipes/category-list");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(e){return a.b.get("/recipes/category/".concat(e)).then((function(e){return e.data}))}}}]);
//# sourceMappingURL=42.0f4f95d5.chunk.js.map