"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[214],{214:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r=e(861),a=e(439),c=e(757),u=e.n(c),o=e(791),i=e(689),s=e(969),f=e(868),p=e(184),v=function(){var t=(0,o.useState)(""),n=(0,a.Z)(t,2),e=n[0],c=n[1],v=(0,o.useState)(""),l=(0,a.Z)(v,2),h=l[0],d=l[1],m=(0,o.useState)(null),x=(0,a.Z)(m,2),k=x[0],w=x[1],y=(0,i.TH)();return(0,o.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.IT)(h);case 3:n=t.sent,w(n.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[h]),(0,p.jsxs)("div",{className:"form",children:[(0,p.jsxs)("form",{children:[(0,p.jsx)("input",{type:"text",name:"name",onChange:function(t){c(t.target.value),d("")},value:e}),(0,p.jsx)("button",{onClick:function(t){t.preventDefault(),e&&d(e),c("")},children:"Search"})]}),(0,p.jsx)("ul",{className:"formElement",children:h&&(0,p.jsx)(f.V,{posts:k,location:y})})]})}},868:function(t,n,e){e.d(n,{V:function(){return c}});e(791);var r=e(87),a=e(184),c=function(t){var n=t.posts,e=t.location;return(0,a.jsx)(a.Fragment,{children:n.map((function(t){return(0,a.jsx)(r.rU,{to:"/movies/".concat(t.id),state:e.pathname,children:(0,a.jsx)("li",{children:t.title||t.name})},t.id)}))})}},969:function(t,n,e){e.d(n,{Bc:function(){return p},IT:function(){return f},bG:function(){return l},oV:function(){return s},p2:function(){return v}});var r=e(861),a=e(757),c=e.n(a),u=e(912),o="https://api.themoviedb.org/3/",i="f6ffe98b5dc08916d40352e501f3317f",s=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"trending/movie/week?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"?api_key=").concat(i," "));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(i," "));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(i," "));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=214.5f46e394.chunk.js.map