(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>g});var r=t(864),a=t.n(r),o=t(352),i=t.n(o),c=t(393),d=t.n(c),l=new URL(t(39),t.b),A=new URL(t(410),t.b),s=new URL(t(677),t.b),m=new URL(t(51),t.b),p=i()(a()),u=d()(l),f=d()(A),C=d()(s),h=d()(m);p.push([e.id,"@font-face {\n    font-family: title;\n    src: url("+u+");\n}\n\n@font-face {\n    font-family: secondary-title;\n    src: url("+f+");\n}\n\n@font-face {\n    font-family: para;\n    src: url("+C+");\n}\n\n:root {\n    --red: #ff0000;\n    --darkred: #920000;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nbody {\n    background-image: url("+h+");\n    background-size: cover;\n    font-family: para;\n    font-size: 1.1rem;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    background-color: black;\n    color: white;\n    padding: 1rem;\n    gap: 1rem;\n    align-self: stretch;\n}\n\nheader > .icon {\n    height: 4.5rem;\n    width: min-content;\n    font-family:Arial;\n}\n\nheader > .logo {\n    flex: auto;\n    font-size: 3.5rem;\n    font-family: title;\n    text-shadow: 2px 2px var(--red);\n}\n\n.nav {\n    display: flex;\n    gap: 3rem;\n    padding: 0 1rem;\n\n}\n\nbutton {\n    padding: 0.5rem 2rem;\n    border-radius: 7px;\n    background-color: black;\n    color: white;\n    border: 3px solid white;\n    font-size: 1.6rem;\n    text-shadow: -1px -1px 0 var(--red), 1px -1px 0 var(--red), -1px 1px 0 var(--red), 1px 1px 0 var(--red);\n    font-family: title;\n}\n\nbutton:hover {\n    border: 3px solid var(--red);\n    text-shadow: -2px -2px 0 var(--red), 2px -2px 0 var(--red), -2px 2px 0 var(--red), 2px 2px 0 var(--red);\n}\n\nbutton:active {\n    border: 3px solid var(--darkred);\n    text-shadow: -2px -2px 0 var(--darkred), 2px -2px 0 var(--darkred), -2px 2px 0 var(--darkred), 2px 2px 0 var(--darkred);\n}\n\nmain {\n    justify-content: center;\n    height: 100%;\n}\n\n.container,\n.menu {\n    gap: 1rem;\n    padding: 1.5rem 3.5rem;\n    background-color: rgba(0,0,0,0.9);\n    border-radius: 30px;\n    color: white;\n    border: 5px solid white;\n}\n\n.container,\nmain,\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container > h3 {\n    font-family: secondary-title;\n    font-size: 2rem;\n}\n\n.info {\n    display: flex;\n    flex-direction: column;\n    border-radius: 10px;\n    padding: 1rem;\n    background-color: rgba(0,0,0,0.7);\n    color: white;\n    gap: 0.75rem;\n    font-weight: bold;\n    margin-top: 1.5rem;\n}\n\n.info-icon {\n    height: 1.2rem;\n}\n\n.location,\n.hours {\n    display:flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.github {\n    height: 1.5rem;\n    width:auto;\n    fill: white\n}\n\n.github:hover {\n    transform: rotate(720deg);\n    transition: transform 1.5s;\n    fill: white\n}\n\nfooter {\n    background-color: black;\n    align-self: stretch;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0.4rem 0;\n    gap: 0.5rem;\n}\n\n.menu {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 3rem;\n    width: 15rem;\n    background-color: rgba(0,0,0,0.95);\n}\n\n.plate-image {\n    height: 4rem;\n}\n\n.menu>*:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 10px;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,4CAA4B;AAChC;;AAEA;IACI,4BAA4B;IAC5B,4CAA6B;AACjC;;AAEA;IACI,iBAAiB;IACjB,4CAAoC;AACxC;;AAEA;IACI,cAAc;IACd,kBAAkB;EACpB;;AAEF;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,yDAAwC;IACxC,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,eAAe;;AAEnB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;IACvB,iBAAiB;IACjB,uGAAuG;IACvG,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;IAC5B,uGAAuG;AAC3G;;AAEA;IACI,gCAAgC;IAChC,uHAAuH;AAC3H;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;;IAEI,SAAS;IACT,sBAAsB;IACtB,iCAAiC;IACjC,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;;;IAGI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,YAAY;IACZ,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,cAAc;IACd,UAAU;IACV;AACJ;;AAEA;IACI,yBAAyB;IACzB,0BAA0B;IAC1B;AACJ;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,SAAS;IACT,YAAY;IACZ,kCAAkC;AACtC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,0CAA0C;IAC1C,mBAAmB;AACvB",sourcesContent:["@font-face {\n    font-family: title;\n    src: url(Bungee-Regular.ttf);\n}\n\n@font-face {\n    font-family: secondary-title;\n    src: url(Galindo-Regular.ttf);\n}\n\n@font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n\n:root {\n    --red: #ff0000;\n    --darkred: #920000;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nbody {\n    background-image: url('/src/image.webp');\n    background-size: cover;\n    font-family: para;\n    font-size: 1.1rem;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    background-color: black;\n    color: white;\n    padding: 1rem;\n    gap: 1rem;\n    align-self: stretch;\n}\n\nheader > .icon {\n    height: 4.5rem;\n    width: min-content;\n    font-family:Arial;\n}\n\nheader > .logo {\n    flex: auto;\n    font-size: 3.5rem;\n    font-family: title;\n    text-shadow: 2px 2px var(--red);\n}\n\n.nav {\n    display: flex;\n    gap: 3rem;\n    padding: 0 1rem;\n\n}\n\nbutton {\n    padding: 0.5rem 2rem;\n    border-radius: 7px;\n    background-color: black;\n    color: white;\n    border: 3px solid white;\n    font-size: 1.6rem;\n    text-shadow: -1px -1px 0 var(--red), 1px -1px 0 var(--red), -1px 1px 0 var(--red), 1px 1px 0 var(--red);\n    font-family: title;\n}\n\nbutton:hover {\n    border: 3px solid var(--red);\n    text-shadow: -2px -2px 0 var(--red), 2px -2px 0 var(--red), -2px 2px 0 var(--red), 2px 2px 0 var(--red);\n}\n\nbutton:active {\n    border: 3px solid var(--darkred);\n    text-shadow: -2px -2px 0 var(--darkred), 2px -2px 0 var(--darkred), -2px 2px 0 var(--darkred), 2px 2px 0 var(--darkred);\n}\n\nmain {\n    justify-content: center;\n    height: 100%;\n}\n\n.container,\n.menu {\n    gap: 1rem;\n    padding: 1.5rem 3.5rem;\n    background-color: rgba(0,0,0,0.9);\n    border-radius: 30px;\n    color: white;\n    border: 5px solid white;\n}\n\n.container,\nmain,\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container > h3 {\n    font-family: secondary-title;\n    font-size: 2rem;\n}\n\n.info {\n    display: flex;\n    flex-direction: column;\n    border-radius: 10px;\n    padding: 1rem;\n    background-color: rgba(0,0,0,0.7);\n    color: white;\n    gap: 0.75rem;\n    font-weight: bold;\n    margin-top: 1.5rem;\n}\n\n.info-icon {\n    height: 1.2rem;\n}\n\n.location,\n.hours {\n    display:flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.github {\n    height: 1.5rem;\n    width:auto;\n    fill: white\n}\n\n.github:hover {\n    transform: rotate(720deg);\n    transition: transform 1.5s;\n    fill: white\n}\n\nfooter {\n    background-color: black;\n    align-self: stretch;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0.4rem 0;\n    gap: 0.5rem;\n}\n\n.menu {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 3rem;\n    width: 15rem;\n    background-color: rgba(0,0,0,0.95);\n}\n\n.plate-image {\n    height: 4rem;\n}\n\n.menu>*:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 10px;\n}"],sourceRoot:""}]);const g=p},352:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var A=[].concat(e[l]);r&&i[A[0]]||(void 0!==o&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=o),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),a&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=a):A[4]="".concat(a)),n.push(A))}},n}},393:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},864:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[n].concat([o]).join("\n")}return[n].join("\n")}},701:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],A=o[l]||0,s="".concat(l," ").concat(A);o[l]=A+1;var m=t(s),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var u=a(p,r);r.byIndex=c,n.splice(c,0,{identifier:s,updater:u,references:1})}i.push(s)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var d=r(e,a),l=0;l<o.length;l++){var A=t(o[l]);0===n[A].references&&(n[A].updater(),n.splice(A,1))}o=d}}},80:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},182:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},850:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},236:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},213:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},39:(e,n,t)=>{e.exports=t.p+"3d95fa68283102c29cd9.ttf"},677:(e,n,t)=>{e.exports=t.p+"718ec91358aa7ee8083b.ttf"},410:(e,n,t)=>{e.exports=t.p+"e4c5502cc98a942863cf.ttf"},51:(e,n,t)=>{e.exports=t.p+"1f9e1d5c4875300b4a90.webp"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(701),n=t.n(e),r=t(236),a=t.n(r),o=t(80),i=t.n(o),c=t(850),d=t.n(c),l=t(182),A=t.n(l),s=t(213),m=t.n(s),p=t(426),u={};function f(){let e=document.createElement("footer");return e.innerHTML='Made by Zakrnem <a href="http://github.com/zakrnem"><svg class="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>',document.querySelector("#content").appendChild(e)}function C(e,n,t){let r=document.createElement("a");r.className="menu-item",r.id=n.toLowerCase().replace(/\s+/g,"");let a=document.createElement("img");a.className="plate-image",a.src=`./images/${e}`,r.appendChild(a);let o=document.createElement("div");o.className="plate-name",o.textContent=n,r.appendChild(o);let i=document.createElement("div");return i.className="plate-price",i.textContent=`Price: ${t}`,r.appendChild(i),r}function h(){let e=document.createElement("main"),n=document.createElement("div");n.className="menu";let t=C("falafel-svgrepo-com.svg","Falafel","3.21$"),r=C("hookah-svgrepo-com.svg","Hookah","1.82$"),a=C("lamb-svgrepo-com.svg","Lamb","4.50$"),o=C("burrito-svgrepo-com.svg","Shawarma","5.15$"),i=C("hummus-svgrepo-com.svg","Humus","3.35$"),c=C("salad-svgrepo-com.svg","Tabouleh","2.47$");n.appendChild(t),n.appendChild(r),n.appendChild(a),n.appendChild(o),n.appendChild(i),n.appendChild(c),e.appendChild(n),content.appendChild(e),f(),document.querySelector(".menu").addEventListener("click",(e=>{"menu-item"!==e.target.className&&"menu-item"!==e.target.parentNode.className||console.log(e.target.id?e.target.id:e.target.parentNode.id)}))}function g(){let e,n=document.getElementById("content");for(e=n.childElementCount;e>1;e--)n.removeChild(n.lastChild)}function v(){let e=document.createElement("main"),n=document.createElement("div");n.className="container";let t=document.createElement("h3");t.textContent="Come on for some delicious arabic food!",n.appendChild(t);let r=document.createElement("button");r.id="order",r.textContent="Make a order",n.appendChild(r);let a=document.createElement("div");a.className="info",n.appendChild(a);let o=document.createElement("div");o.className="location",a.appendChild(o);let i=document.createElement("img");i.className="info-icon",i.src="./images/location-svg-repo-com.svg",o.appendChild(i);let c=document.createElement("p");c.textContent="1 Galle Face Shangri-La Hotel, Colombo 00200 Sri Lanka",o.appendChild(c);let d=document.createElement("div");d.className="hours",a.appendChild(d);let l=document.createElement("img");l.className="info-icon",l.src="./images/clock-svgrepo-com.svg",d.appendChild(l);let A=document.createElement("div");A.className="days",d.appendChild(A);let s=document.createElement("p");s.textContent="Monday-Thursday: 8am-8pm",A.appendChild(s);let m=document.createElement("p");m.textContent="Friday-Sunday: 8am-12am",A.appendChild(m),e.appendChild(n),document.querySelector("#content").appendChild(e),f(),document.querySelector("#order").addEventListener("click",(()=>{g(),h()}))}u.styleTagTransform=m(),u.setAttributes=d(),u.insert=i().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=A(),n()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals,function(){let e=document.createElement("header"),n=document.createElement("img");n.className="icon",n.src="./images/icon.svg";let t=document.createElement("div");t.className="logo",t.textContent="Shawarma Paradise";let r=document.createElement("div");r.className="nav";let a=document.createElement("button");a.id="home",a.textContent="Home";let o=document.createElement("button");o.id="menu",o.textContent="Menu";let i=document.createElement("button");i.id="contact",i.textContent="Contact Us",r.appendChild(a),r.appendChild(o),r.appendChild(i),e.appendChild(n),e.appendChild(t),e.appendChild(r),document.querySelector("#content").appendChild(e),document.querySelector("#home").addEventListener("click",(()=>{g(),v()})),document.getElementById("menu").addEventListener("click",(()=>{g(),h()})),document.getElementById("contact").addEventListener("click",(()=>{g(),function(){let e=document.createElement("main"),n=document.createElement("div");n.className="contact";let t=document.createElement("div");n.appendChild(t);let r=document.createElement("img");r.className="contact-icon",r.src="./images/location-svg-repo-com.svg",t.appendChild(r);let a=document.createElement("p");a.textContent="0058-0085",t.appendChild(a);let o=document.createElement("div");n.appendChild(o);let i=document.createElement("img");i.className="contact-icon",i.src="./images/location-svg-repo-com.svg",o.appendChild(i);let c=document.createElement("p");c.textContent="shawarma.paradise",t.appendChild(c),e.appendChild(n),document.querySelector("#content").appendChild(e)}()})),document.querySelector(".main")}(),v()})()})();
//# sourceMappingURL=main.js.map