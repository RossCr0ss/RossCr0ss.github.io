(function(e){function n(n){for(var r,i,s=n[0],l=n[1],u=n[2],c=0,p=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);g&&g(n);while(p.length)p.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var l=t[i];0!==a[l]&&(r=!1)}r&&(o.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9704429d"}[e]+".js"}function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=a[e]=[n,r]}));n.push(t[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var u=new Error;o=function(n){l.onerror=l.onload=null,clearTimeout(c);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,t[1](u)}a[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var g=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("app-header"),t("main",{staticClass:"container"},[t("router-view")],1)],1)},o=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header"},[t("nav",{staticClass:"navbar"},[t("ul",{staticClass:"navbar__list"},[t("router-link",{staticClass:"navbar__list__item",attrs:{tag:"li",to:"/"}},[t("a",{attrs:{href:"#about"}},[e._v("Home")])]),t("router-link",{staticClass:"navbar__list__item",attrs:{tag:"li",to:"/about"}},[t("a",{attrs:{href:"#about"}},[e._v("About")])]),t("router-link",{staticClass:"navbar__list__item",attrs:{tag:"li",to:"/portfolio"}},[t("a",{attrs:{href:"#portfolio"}},[e._v("Portfolio")])]),e._m(0)],1),t("div",{staticClass:"navbar__toggle",class:{change:e.showMobileMenu},on:{click:function(n){e.showMobileMenu=!e.showMobileMenu}}},[t("div",{staticClass:"bar1"}),t("div",{staticClass:"bar2"}),t("div",{staticClass:"bar3"})])])])},s=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{staticClass:"navbar__list__item"},[t("a",{attrs:{target:"_blank",href:"https://github.com/RossCr0ss"}},[e._v("Github")])])}],l={data:function(){return{showMobileMenu:!1}}},u=l,c=t("2877"),g=Object(c["a"])(u,i,s,!1,null,null,null),p=g.exports,m={components:{"app-header":p}},d=m,f=Object(c["a"])(d,a,o,!1,null,null,null),v=f.exports,h=t("9483");Object(h["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var b=t("8c4f");r["a"].use(b["a"]);var y=[{path:"/",name:"Home",component:function(){return t.e("about").then(t.bind(null,"0c8f"))}},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"8078"))}},{path:"/portfolio",name:"Portfolio",component:function(){return t.e("about").then(t.bind(null,"c3e1"))}}],j=new b["a"]({mode:"history",base:"/",routes:y}),_=j,w=(t("b0c0"),t("2f62"));r["a"].use(w["a"]);var k=new w["a"].Store({state:{info:{name:"Rostyslav",surname:"Sobechko",position:"Front-end developer",about:"Courteous and enthusiastic, I am interested in IT and everything in its orbit. I recently began to be fascinated by web programming, e.g. developing apps and building websites. As this area interesting for me, I am keen to gain more experience in the field. For this reason, I am looking for a company willing to offer me a placement among their developers. In return, I would offer my full commitment, and be a pleasant and friendly addition to your team. I am therefore currently looking for a job or an internship as a front-end developer.",avatarUrl:"https://avatars2.githubusercontent.com/u/41146956?s=460&u=34785274d725926de83c1fcefa3c5d6acaa0c5fe&v=4",technologies:[{name:"HTML5",level:10,imageUrl:"html5.svg"},{name:"CSS3",level:10,imageUrl:"css.svg"},{name:"Javascript",level:7,imageUrl:"javascript.svg"},{name:"TypeScript",level:5,imageUrl:"typescript.svg"},{name:"Bootstrap",level:4,imageUrl:"bootstrap.svg"},{name:"Webpack",level:5,imageUrl:"webpack.svg"},{name:"Sass",level:8,imageUrl:"sass.svg"},{name:"Git",level:5,imageUrl:"git.svg"},{name:"Vue.js",level:6,imageUrl:"vue.svg"},{name:"Angular 2+",level:6,imageUrl:"angular.svg"},{name:"Node.js",level:2,imageUrl:"node.svg"}],interests:[{name:"Films",imageUrl:"film.svg"},{name:"Music",imageUrl:"music.svg"},{name:"Football",imageUrl:"soccer.svg"},{name:"Travel",imageUrl:"plane.svg"},{name:"Space",imageUrl:"start-button.svg"},{name:"Books",imageUrl:"book.svg"},{name:"History",imageUrl:"history.svg"},{name:"Technologies",imageUrl:"atom.svg"}]},projects:[{name:"Ad project",desc:"An application that resembles an online store (has a shopping cart, edit menu, authorization)",technologies:"Javascript, Vue.js, Vuetify, Google Firebase",url:"https://github.com/RossCr0ss/ad-project",images:[{url:"ad-project/image1.png"},{url:"ad-project/image2.png"},{url:"ad-project/image3.png"},{url:"ad-project/image4.png"},{url:"ad-project/image5.png"},{url:"ad-project/image6.png"},{url:"ad-project/image7.png"},{url:"ad-project/image8.png"},{url:"ad-project/image9.png"},{url:"ad-project/image10.png"},{url:"ad-project/image11.png"}]},{name:"RickAndMorty",desc:"Application that is implemented on the API. Pagination is used to display 20 characters. You can view their character card",technologies:"Javascript, Vue.js, The Rick and Morty API",url:"https://github.com/RossCr0ss/RickAndMorty",images:[{url:"RickAndMorty/image1.png"},{url:"RickAndMorty/image2.png"},{url:"RickAndMorty/image3.png"},{url:"RickAndMorty/image4.png"}]},{name:"ContactApp",desc:"Application to save phone contacts.",technologies:"Javascript, Vue.js",url:"https://github.com/RossCr0ss/ContactsApp",images:[{url:"contactApp/image1.png"},{url:"contactApp/image2.png"},{url:"contactApp/image3.png"},{url:"contactApp/image4.png"},{url:"contactApp/image5.png"}]},{name:"Fusion",desc:"Multi-page site for cryptocurrency trading, with the possibility of logging in, binary tree, currency and package calculators, etc.",technologies:"Javascript, Vue.js, Webpack",url:"https://fusion-world.club/",images:[{url:"Fusion/image1.png"},{url:"Fusion/image2.png"},{url:"Fusion/image3.png"},{url:"Fusion/image4.png"},{url:"Fusion/image5.png"},{url:"Fusion/image6.png"},{url:"Fusion/image7.png"},{url:"Fusion/image8.png"},{url:"Fusion/image9.png"},{url:"Fusion/image10.png"},{url:"Fusion/image11.png"},{url:"Fusion/image12.png"},{url:"Fusion/image13.png"},{url:"Fusion/image14.png"},{url:"Fusion/image15.png"},{url:"Fusion/image16.png"},{url:"Fusion/image17.png"},{url:"Fusion/image18.png"},{url:"Fusion/image19.png"},{url:"Fusion/image20.png"},{url:"Fusion/image21.png"}]}]},mutations:{},actions:{},getters:{getInfo:function(e){return e.info},getFullName:function(e){return e.info.name+" "+e.info.surname},getProjects:function(e){return e.projects}}});t("b0d0");r["a"].config.productionTip=!1,new r["a"]({router:_,store:k,render:function(e){return e(v)}}).$mount("#app")},b0d0:function(e,n,t){}});
//# sourceMappingURL=app.69e4b372.js.map