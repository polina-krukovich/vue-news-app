(function(t){function e(e){for(var a,s,o=e[0],i=e[1],u=e[2],f=0,p=[];f<o.length;f++)s=o[f],c[s]&&p.push(c[s][0]),c[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},c={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-news-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),c=n.n(a);c.a},"1bd6":function(t,e,n){},"221e":function(t,e,n){"use strict";var a=n("d9ed"),c=n.n(a);c.a},2301:function(t,e,n){},"2b56":function(t,e,n){},"37dd":function(t,e,n){"use strict";var a=n("1bd6"),c=n.n(a);c.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a,c=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Navbar"),n("NewsList"),t.haveArticles?n("ButtonLoadMore"):t._e(),n("Footer")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("img",{staticClass:"logo",attrs:{src:n("c2fb")},on:{click:t.loadTopArticles}}),a("div",{staticClass:"search-box"},[a("Search")],1)])},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"input-search",attrs:{type:"text",name:"search",placeholder:"Search news ..."},domProps:{value:t.searchValue},on:{keydown:t.checkKey,input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),n("button",{staticClass:"btn-search",on:{click:function(e){return e.preventDefault(),t.loadSearchArticles(e)}}},[n("i",{staticClass:"fas fa-search"})])])},l=[],f=(n("386d"),n("bd86")),p=n("2f62"),d="https://newsapi.org/v2/",h="apiKey=8a109737ab0f48d3bb8f5f9c365479fc",m=function(){return new Request("".concat(d,"sources?language=en&").concat(h))},v=function(t){return new Request("".concat(d,"top-headlines?language=en&pageSize=5&page=").concat(t,"&").concat(h))},b=function(t,e){return new Request("".concat(d,"everything?language=en&sources=").concat(t,"&pageSize=5&page=").concat(e,"&").concat(h))},g=function(t,e){return new Request("".concat(d,"everything?language=en&q=").concat(t,"&pageSize=5&page=").concat(e,"&").concat(h))};c["a"].use(p["a"]);var _="top",y="source",j="search",S="setDisplay",w="setSource",C="setSearch",x="resetPage",O="incrementPage",I="setSources",A="setArticles",N=new p["a"].Store({state:{display:"top",page:1,source:"",search:"",articles:[],sources:[]},mutations:(a={},Object(f["a"])(a,S,function(t,e){t.display=e}),Object(f["a"])(a,w,function(t,e){t.source=e}),Object(f["a"])(a,C,function(t,e){t.search=e}),Object(f["a"])(a,x,function(t){t.page=1}),Object(f["a"])(a,O,function(t){t.page++}),Object(f["a"])(a,I,function(t,e){t.sources=e}),Object(f["a"])(a,A,function(t,e){t.articles=e}),a),actions:{loadSources:function(t){fetch(m()).then(function(t){return t.json()}).then(function(e){t.commit(I,e.sources)})},loadTopArticles:function(t){t.commit(S,_),t.commit(x),fetch(v(t.state.page)).then(function(t){return t.json()}).then(function(e){t.commit(A,e.articles)})},loadSourceArticles:function(t,e){t.commit(S,y),t.commit(x),t.commit(w,e),fetch(b(e,t.state.page)).then(function(t){return t.json()}).then(function(e){t.commit(A,e.articles)})},loadSearchArticles:function(t,e){t.commit(S,j),t.commit(x),t.commit(C,e),fetch(g(e,t.state.page)).then(function(t){return t.json()}).then(function(e){t.commit(A,e.articles)})},next:function(t){var e;t.commit(O),t.state.display===_&&(e=fetch(v(t.state.page))),t.state.display===y&&(e=fetch(b(t.state.source,t.state.page))),t.state.display===j&&(e=fetch(g(t.state.search,t.state.page))),e.then(function(t){return t.json()}).then(function(e){t.commit(A,e.articles)})}}}),k={name:"Search",data:function(){return{searchValue:""}},methods:{loadSearchArticles:function(){N.dispatch("loadSearchArticles",this.searchValue)},checkKey:function(t){13===t.keyCode&&(this.loadSearchArticles(),this.searchValue="")}}},$=k,E=(n("b08c"),n("2877")),L=Object(E["a"])($,u,l,!1,null,"646bcc9d",null),P=L.exports,T={name:"Header",components:{Search:P},methods:{loadTopArticles:function(){N.dispatch("loadTopArticles")}}},M=T,D=(n("9a5c"),Object(E["a"])(M,o,i,!1,null,"2779e62c",null)),V=D.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.sources,function(t){return n("NavbarItem",{key:t.id,attrs:{sourceName:t.name,sourceID:t.id}})}),1)},R=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"item",on:{click:function(e){return e.preventDefault(),t.loadSourceArticles(e)}}},[t._v(t._s(t.sourceName))])},B=[],F={name:"NavbarItem",props:{sourceName:String,sourceID:String},methods:{loadSourceArticles:function(){N.dispatch("loadSourceArticles",this.sourceID)}}},H=F,K=(n("f260"),Object(E["a"])(H,z,B,!1,null,"74218284",null)),J=K.exports,G={name:"Navbar",components:{NavbarItem:J},computed:{sources:function(){return N.state.sources}}},Q=G,U=(n("37dd"),Object(E["a"])(Q,q,R,!1,null,"4570755e",null)),W=U.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._l(t.articles,function(t){return n("NewsListItem",{attrs:{articleInfo:t}})}),0===t.articles.length?n("p",{staticClass:"msg-no-results"},[t._v("No results :(")]):t._e()],2)},Y=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"image-box"},[t.articleInfo.urlToImage?n("img",{staticClass:"image",attrs:{src:t.articleInfo.urlToImage}}):n("i",{staticClass:"fas fa-camera-retro"}),n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-content"},[t._v("\n                "+t._s(t.articleInfo.publishedAt.slice(0,10).split("-").reverse().join("-"))+"\n            ")])])]),n("div",{staticClass:"info-box"},[n("a",{staticClass:"title",attrs:{href:t.articleInfo.url}},[t._v(t._s(t.articleInfo.title))]),n("div",{staticClass:"desc"},[t._v(t._s(t.articleInfo.description))])])])},tt=[],et={name:"NewsListItem",props:{articleInfo:Object}},nt=et,at=(n("221e"),Object(E["a"])(nt,Z,tt,!1,null,"12ad660e",null)),ct=at.exports,rt={name:"NewsList",components:{NewsListItem:ct},computed:{articles:function(){return N.state.articles}},beforeMount:function(){N.dispatch("loadTopArticles")}},st=rt,ot=(n("fe4a"),Object(E["a"])(st,X,Y,!1,null,"5f43cbdb",null)),it=ot.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-load-more-container"},[n("button",{staticClass:"btn-load-more",on:{click:function(e){return e.preventDefault(),t.next(e)}}},[t._v("Load More")])])},lt=[],ft={name:"ButtonLoadMore",methods:{next:function(){N.dispatch("next")}}},pt=ft,dt=(n("edd2"),Object(E["a"])(pt,ut,lt,!1,null,"6f47c518",null)),ht=dt.exports,mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("span",{staticClass:"text"},[t._v("© Copyright ")]),n("a",{staticClass:"link",attrs:{href:"https://newsapi.org/"}},[t._v(" NewsAPI")])])}],bt={name:"Footer"},gt=bt,_t=(n("b4e6"),Object(E["a"])(gt,mt,vt,!1,null,"7ee7812e",null)),yt=_t.exports,jt={name:"app",components:{Header:V,Navbar:W,NewsList:it,ButtonLoadMore:ht,Footer:yt},computed:{haveArticles:function(){return 5===N.state.articles.length}}},St=jt,wt=(n("034f"),Object(E["a"])(St,r,s,!1,null,null,null)),Ct=wt.exports;c["a"].config.productionTip=!1,N.dispatch("loadSources"),new c["a"]({store:N,render:function(t){return t(Ct)}}).$mount("#app")},"64a9":function(t,e,n){},"9a5c":function(t,e,n){"use strict";var a=n("beaf"),c=n.n(a);c.a},b08c:function(t,e,n){"use strict";var a=n("2301"),c=n.n(a);c.a},b4e6:function(t,e,n){"use strict";var a=n("2b56"),c=n.n(a);c.a},beaf:function(t,e,n){},c2fb:function(t,e,n){t.exports=n.p+"img/logo_transparent.6501a994.png"},d9ed:function(t,e,n){},db4f:function(t,e,n){},db78:function(t,e,n){},edd2:function(t,e,n){"use strict";var a=n("db4f"),c=n.n(a);c.a},f260:function(t,e,n){"use strict";var a=n("db78"),c=n.n(a);c.a},f46b:function(t,e,n){},fe4a:function(t,e,n){"use strict";var a=n("f46b"),c=n.n(a);c.a}});
//# sourceMappingURL=app.e910d4e9.js.map