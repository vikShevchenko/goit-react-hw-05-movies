"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[428],{428:function(t,e,a){a.r(e),a.d(e,{default:function(){return l}});var i=a(439),s=a(791),c=a(689),n=a(912),o=a(184),l=function(){var t=(0,c.TH)(),e=(0,s.useState)(),a=(0,i.Z)(e,2),l=a[0],r=a[1];return(0,s.useEffect)((function(){n.Z.get("https://api.themoviedb.org/3/movie/".concat(t.state,"/credits?api_key=f6ffe98b5dc08916d40352e501f3317f")).then((function(t){r(t.data)})).catch((function(t){return console.log(t)}))}),[t.state]),(0,o.jsxs)("div",{className:"wripperDetals",children:["MovieDetails",(0,o.jsx)("ul",{className:"movieDetalsList",children:l&&l.cast.map((function(t){return(0,o.jsxs)("li",{className:"movieLi",children:[(0,o.jsx)("img",{className:"movieDetalsListFoto",src:t.profile_path?" https://image.tmdb.org/t/p/w500/".concat(t.profile_path):"https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available-250x417.png",alt:t.title}),t.name]},t.cast_id)}))})]})}}}]);
//# sourceMappingURL=428.e3291490.chunk.js.map