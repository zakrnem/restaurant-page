(()=>{"use strict";var e,n,t,a,r,o,c,l,i,d,s,m,p,u,h={426:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(81),r=t.n(a),o=t(645),c=t.n(o),l=t(667),i=t.n(l),d=new URL(t(39),t.b),s=new URL(t(410),t.b),m=new URL(t(677),t.b),p=new URL(t(51),t.b),u=c()(r()),h=i()(d),f=i()(s),g=i()(m),v=i()(p);u.push([e.id,"@font-face {\n    font-family: title;\n    src: url("+h+");\n}\n\n@font-face {\n    font-family: secondary-title;\n    src: url("+f+");\n}\n\n@font-face {\n    font-family: para;\n    src: url("+g+");\n}\n\n:root {\n    --red: #ff0000;\n    --darkred: #920000;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nbody {\n    background-image: url("+v+");\n    background-size: cover;\n    font-family: para;\n    font-size: 1.1rem;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    background-color: black;\n    color: white;\n    padding: 1rem;\n    gap: 1rem;\n    align-self: stretch;\n}\n\nheader > .icon {\n    height: 4.5rem;\n    width: min-content;\n    font-family:Arial;\n}\n\nheader > .logo {\n    flex: auto;\n    font-size: 3.5rem;\n    font-family: title;\n    text-shadow: 2px 2px var(--red);\n}\n\n.nav {\n    display: flex;\n    gap: 3rem;\n    padding: 0 1rem;\n\n}\n\nbutton {\n    padding: 0.5rem 2rem;\n    border-radius: 7px;\n    background-color: black;\n    color: white;\n    border: 3px solid white;\n    font-size: 1.6rem;\n    text-shadow: -1px -1px 0 var(--red), 1px -1px 0 var(--red), -1px 1px 0 var(--red), 1px 1px 0 var(--red);\n    font-family: title;\n}\n\nbutton:hover {\n    border: 3px solid var(--red);\n    text-shadow: -2px -2px 0 var(--red), 2px -2px 0 var(--red), -2px 2px 0 var(--red), 2px 2px 0 var(--red);\n}\n\nbutton:active {\n    border: 3px solid var(--darkred);\n    text-shadow: -2px -2px 0 var(--darkred), 2px -2px 0 var(--darkred), -2px 2px 0 var(--darkred), 2px 2px 0 var(--darkred);\n}\n\nmain {\n    justify-content: center;\n    height: 100%;\n}\n\n.container,\n.menu {\n    gap: 1rem;\n    padding: 1.5rem 3.5rem;\n    background-color: rgba(0,0,0,0.9);\n    border-radius: 30px;\n    color: white;\n    border: 5px solid white;\n}\n\n.container,\nmain,\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container > h3 {\n    font-family: secondary-title;\n    font-size: 2rem;\n}\n\n.info {\n    display: flex;\n    flex-direction: column;\n    border-radius: 10px;\n    padding: 1rem;\n    background-color: rgba(0,0,0,0.7);\n    color: white;\n    gap: 0.75rem;\n    font-weight: bold;\n    margin-top: 1.5rem;\n}\n\n.info-icon {\n    height: 1.2rem;\n}\n\n.location,\n.hours {\n    display:flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.github {\n    height: 1.5rem;\n    width:auto;\n    fill: white\n}\n\n.github:hover {\n    transform: rotate(720deg);\n    transition: transform 1.5s;\n    fill: white\n}\n\nfooter {\n    background-color: black;\n    align-self: stretch;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0.4rem 0;\n    gap: 0.5rem;\n}\n\n.menu {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 3rem;\n    width: 15rem;\n    background-color: rgba(0,0,0,0.95);\n}\n\n.plate-image {\n    height: 4rem;\n}\n\n.menu>*:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 10px;\n}",""]);const x=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var l=0;l<this.length;l++){var i=this[l][0];null!=i&&(c[i]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);a&&c[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},c=[],l=0;l<e.length;l++){var i=e[l],d=a.base?i[0]+a.base:i[0],s=o[d]||0,m="".concat(d," ").concat(s);o[d]=s+1;var p=t(m),u={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var h=r(u,a);a.byIndex=l,n.splice(l,0,{identifier:m,updater:h,references:1})}c.push(m)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var l=t(o[c]);n[l].references--}for(var i=a(e,r),d=0;d<o.length;d++){var s=t(o[d]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=i}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},39:(e,n,t)=>{e.exports=t.p+"3d95fa68283102c29cd9.ttf"},677:(e,n,t)=>{e.exports=t.p+"718ec91358aa7ee8083b.ttf"},410:(e,n,t)=>{e.exports=t.p+"e4c5502cc98a942863cf.ttf"},51:(e,n,t)=>{e.exports=t.p+"1f9e1d5c4875300b4a90.webp"}},f={};function g(e){var n=f[e];if(void 0!==n)return n.exports;var t=f[e]={id:e,exports:{}};return h[e](t,t.exports,g),t.exports}g.m=h,g.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return g.d(n,{a:n}),n},g.d=(e,n)=>{for(var t in n)g.o(n,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var n=g.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),g.b=document.baseURI||self.location.href,g.nc=void 0,e=g(379),n=g.n(e),t=g(795),a=g.n(t),r=g(569),o=g.n(r),c=g(565),l=g.n(c),i=g(216),d=g.n(i),s=g(589),m=g.n(s),p=g(426),(u={}).styleTagTransform=m(),u.setAttributes=l(),u.insert=o().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=d(),n()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals,console.log("Testing"),function(){let e=document.createElement("header"),n=document.createElement("img");n.className="icon",n.src="/src/icon.svg";let t=document.createElement("div");t.className="logo",t.textContent="Shawarma Paradise";let a=document.createElement("div");a.className="nav";let r=document.createElement("button");r.id="home",r.textContent="Home";let o=document.createElement("button");o.id="menu",o.textContent="Menu";let c=document.createElement("button");c.id="contact",c.textContent="Contact Us",a.appendChild(r),a.appendChild(o),a.appendChild(c),e.appendChild(n),e.appendChild(t),e.appendChild(a),document.querySelector("#content").appendChild(e)}(),function(){document.querySelector("#home").addEventListener("click",(()=>{console.log("Home"),e(),function(){let e=document.createElement("main"),n=document.createElement("div");n.className="container";let t=document.createElement("h3");t.textContent="Come on for some delicious arabic food!",n.appendChild(t);let a=document.createElement("button");a.id="order",a.textContent="Make a order",n.appendChild(a);let r=document.createElement("div");r.className="info",n.appendChild(r);let o=document.createElement("div");o.className="location",r.appendChild(o);let c=document.createElement("img");c.className="info-icon",c.src="/src/location-svg-repo-com.svg",o.appendChild(c);let l=document.createElement("p");l.textContent="1 Galle Face Shangri-La Hotel, Colombo 00200 Sri Lanka",o.appendChild(l);let i=document.createElement("div");i.className="hours",r.appendChild(i);let d=document.createElement("img");d.className="info-icon",d.src="/src/clock-svgrepo-com.svg",i.appendChild(d);let s=document.createElement("div");s.className="days",i.appendChild(s);let m=document.createElement("p");m.textContent="Monday-Thursday: 8am-8pm",s.appendChild(m);let p=document.createElement("p");p.textContent="Friday-Sunday: 8am-12am",s.appendChild(p),e.appendChild(n),document.querySelector("#content").appendChild(e)}(),document.querySelector("#order").addEventListener("click",(()=>{console.log("Order")}))})),document.getElementById("menu").addEventListener("click",(()=>{console.log("Menu"),e(),function(){let e=document.createElement("main"),n=document.createElement("div");n.className="menu";let t=document.createElement("div");t.className="menu-item",t.id="shawarma",n.appendChild(t);let a=document.createElement("img");a.className="plate-image",a.src="/src/burrito-svgrepo-com.svg",t.appendChild(a);let r=document.createElement("div");r.className="plate-name",r.textContent="Shawarma",t.appendChild(r);let o=document.createElement("div");o.className="plate-price",o.textContent="Price: 5.15$",t.appendChild(o);let c=document.createElement("div");c.className="menu-item",c.id="falafel",n.appendChild(c);let l=document.createElement("img");l.className="plate-image",l.src="/src/falafel-svgrepo-com.svg",c.appendChild(l);let i=document.createElement("div");i.className="plate-name",i.textContent="Falafel",c.appendChild(i);let d=document.createElement("div");d.className="plate-price",d.textContent="Price: 3.21$ ",c.appendChild(d);let s=document.createElement("div");s.className="menu-item",s.id="hookah",n.appendChild(s);let m=document.createElement("img");m.className="plate-image",m.src="/src/hookah-svgrepo-com.svg",s.appendChild(m);let p=document.createElement("div");p.className="plate-name",p.textContent="Hookah",s.appendChild(p);let u=document.createElement("div");u.className="plate-price",u.textContent="Price: 1.82$ ",s.appendChild(u);let h=document.createElement("div");h.className="menu-item",h.id="lamb",n.appendChild(h);let f=document.createElement("img");f.className="plate-image",f.src="/src/lamb-svgrepo-com.svg",h.appendChild(f);let g=document.createElement("div");g.className="plate-name",g.textContent="Lamb",h.appendChild(g);let v=document.createElement("div");v.className="plate-price",v.textContent="Price: 4.50$ ",h.appendChild(v),e.appendChild(n),document.querySelector("#content").appendChild(e)}(),document.getElementById("shawarma").addEventListener("click",(()=>{console.log("Shawarma")})),document.getElementById("falafel").addEventListener("click",(()=>{console.log("Falafel")})),document.getElementById("hookah").addEventListener("click",(()=>{console.log("Hookah")})),document.getElementById("lamb").addEventListener("click",(()=>{console.log("Lamb")}))})),document.getElementById("contact").addEventListener("click",(()=>{console.log("Contact")}));let e=function(){let e=document.querySelector("#content"),n=document.querySelector("footer");e.removeChild(n);let t=document.querySelector(".main");null!==t&&e.removeChild(t)}}(),function(){let e=document.createElement("footer");e.innerHTML='Made by Zakrnem <a href="http://github.com/zakrnem"><svg class="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>',document.querySelector("#content").appendChild(e)}()})();