"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{493:function(t,n,e){e.r(n);var r=e(861),a=e(439),u=e(757),c=e.n(u),i=e(791),s=e(99),o=e(686),p=e.n(o),f=e(87),l=e(184);n.default=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],u=n[1];return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.Df)();case 3:n=t.sent,e=n.map((function(t){return{title:t.title,id:t.id}})),u(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),p().Notify.failure("Sorry, something went wrong, please try again later");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,l.jsx)("main",{children:(0,l.jsxs)("section",{children:[(0,l.jsx)("h1",{children:"Trending today"}),(0,l.jsx)("ul",{children:e.map((function(t){return(0,l.jsx)("li",{children:(0,l.jsx)(f.rU,{to:"movies/".concat(t.id),children:t.title})},t.id)}))})]})})}},99:function(t,n,e){e.d(n,{Df:function(){return s},IQ:function(){return p},Jh:function(){return f},XT:function(){return l},rs:function(){return o}});var r=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="adbaaa313d0e444758a876cd96774671",s=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=493.f60fd454.chunk.js.map