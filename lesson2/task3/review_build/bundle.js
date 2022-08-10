(()=>{"use strict";var e,r,n,t,o,i,c,d={780:()=>{function e(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var r="function"==typeof Symbol&&Symbol.observable||"@@observable",n=function(){return Math.random().toString(36).substring(7).split("").join(".")},t={INIT:"@@redux/INIT"+n(),REPLACE:"@@redux/REPLACE"+n(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+n()}};function o(e){if("object"!=typeof e||null===e)return!1;for(var r=e;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r}const i="USERS/ADD",c="USERS/DELETE",d=e=>({type:i,user:e}),a=e=>({type:c,id:e}),u={usersList:[]},s=function n(i,c,d){var a;if("function"==typeof c&&"function"==typeof d||"function"==typeof d&&"function"==typeof arguments[3])throw new Error(e(0));if("function"==typeof c&&void 0===d&&(d=c,c=void 0),void 0!==d){if("function"!=typeof d)throw new Error(e(1));return d(n)(i,c)}if("function"!=typeof i)throw new Error(e(2));var u=i,s=c,f=[],l=f,p=!1;function h(){l===f&&(l=f.slice())}function v(){if(p)throw new Error(e(3));return s}function m(r){if("function"!=typeof r)throw new Error(e(4));if(p)throw new Error(e(5));var n=!0;return h(),l.push(r),function(){if(n){if(p)throw new Error(e(6));n=!1,h();var t=l.indexOf(r);l.splice(t,1),f=null}}}function y(r){if(!o(r))throw new Error(e(7));if(void 0===r.type)throw new Error(e(8));if(p)throw new Error(e(9));try{p=!0,s=u(s,r)}finally{p=!1}for(var n=f=l,t=0;t<n.length;t++)(0,n[t])();return r}function g(r){if("function"!=typeof r)throw new Error(e(10));u=r,y({type:t.REPLACE})}function E(){var n,t=m;return(n={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(e(11));function n(){r.next&&r.next(v())}return n(),{unsubscribe:t(n)}}})[r]=function(){return this},n}return y({type:t.INIT}),(a={dispatch:y,subscribe:m,getState:v,replaceReducer:g})[r]=E,a}((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case i:return{...e,usersList:e.usersList.concat(r.user)};case c:return{...e,usersList:e.usersList.filter((e=>e.id!==r.id))};default:return e}}));s.subscribe((()=>{console.log("store: ",s.getState())})),s.dispatch(d({id:1,name:"Tom"})),s.dispatch(d({id:2,name:"John"})),s.dispatch(d({id:3,name:"Katya"})),s.dispatch(a(2)),s.dispatch(a(0))}},a={};function u(e){var r=a[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=a[e]={exports:{}};try{var t={id:e,module:n,factory:d[e],require:u};u.i.forEach((function(e){e(t)})),n=t.module,t.factory.call(n.exports,n,n.exports,t.require)}catch(e){throw n.error=e,e}return n.exports}u.m=d,u.c=a,u.i=[],u.hu=e=>e+"."+u.h()+".hot-update.js",u.miniCssF=e=>{},u.hmrF=()=>"main."+u.h()+".hot-update.json",u.h=()=>"f128278dd28c84d57394",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="solution:",u.l=(n,t,o,i)=>{if(e[n])e[n].push(t);else{var c,d;if(void 0!==o)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var f=a[s];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==r+o){c=f;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.setAttribute("data-webpack",r+o),c.src=n),e[n]=[t];var l=(r,t)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),d&&document.head.appendChild(c)}},(()=>{var e,r,n,t={},o=u.c,i=[],c=[],d="idle",a=0,s=[];function f(e){d=e;for(var r=[],n=0;n<c.length;n++)r[n]=c[n].call(null,e);return Promise.all(r)}function l(){0==--a&&f("ready").then((function(){if(0===a){var e=s;s=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return f("check").then(u.hmrM).then((function(n){return n?f("prepare").then((function(){var t=[];return r=[],Promise.all(Object.keys(u.hmrC).reduce((function(e,o){return u.hmrC[o](n.c,n.r,n.m,e,r,t),e}),[])).then((function(){return r=function(){return e?v(e):f("ready").then((function(){return t}))},0===a?r():new Promise((function(e){s.push((function(){e(r())}))}));var r}))})):f(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+d+")")})):v(e)}function v(e){e=e||{},m();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return f("abort").then((function(){throw o[0]}));var i=f("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var c,d=f("apply"),a=function(e){c||(c=e)},u=[];return t.forEach((function(e){if(e.apply){var r=e.apply(a);if(r)for(var n=0;n<r.length;n++)u.push(r[n])}})),Promise.all([i,d]).then((function(){return c?f("fail").then((function(){throw c})):n?v(e).then((function(e){return u.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):f("idle").then((function(){return u}))}))}function m(){if(n)return r||(r=[]),Object.keys(u.hmrI).forEach((function(e){n.forEach((function(n){u.hmrI[e](n,r)}))})),n=void 0,!0}u.hmrD=t,u.i.push((function(s){var v,m,y,g,E=s.module,w=function(r,n){var t=o[n];if(!t)return r;var c=function(c){if(t.hot.active){if(o[c]){var d=o[c].parents;-1===d.indexOf(n)&&d.push(n)}else i=[n],e=c;-1===t.children.indexOf(c)&&t.children.push(c)}else console.warn("[HMR] unexpected require("+c+") from disposed module "+n),i=[];return r(c)},u=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&"e"!==s&&Object.defineProperty(c,s,u(s));return c.e=function(e){return function(e){switch(d){case"ready":f("prepare");case"prepare":return a++,e.then(l,l),e;default:return e}}(r.e(e))},c}(s.require,s.id);E.hot=(v=s.id,m=E,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){i=m.parents.slice(),e=y?void 0:v,u(v)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":r=[],Object.keys(u.hmrI).forEach((function(e){u.hmrI[e](v,r)})),f("ready");break;case"ready":Object.keys(u.hmrI).forEach((function(e){u.hmrI[e](v,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(v)}},check:p,apply:h,status:function(e){if(!e)return d;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var r=c.indexOf(e);r>=0&&c.splice(r,1)},data:t[v]},e=void 0,g),E.parents=i,E.children=[],i=[],s.require=w})),u.hmrC={},u.hmrI={}})(),(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var r=u.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e})(),n=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var c=i&&("load"===i.type?"missing":i.type),d=i&&i.target&&i.target.href||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=c,a.request=d,o.parentNode.removeChild(o),t(a)}},o.href=r,document.head.appendChild(o),o},t=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(c=n[t]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===r))return c}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var c;if((o=(c=i[t]).getAttribute("data-href"))===e||o===r)return c}},o=[],i=[],c=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var r=o[e];r.parentNode&&r.parentNode.removeChild(r)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),u.hmrC.miniCss=(e,r,d,a,s,f)=>{s.push(c),e.forEach((e=>{var r=u.miniCssF(e),c=u.p+r,d=t(r,c);d&&a.push(new Promise(((r,t)=>{var a=n(e,c,(()=>{a.as="style",a.rel="preload",r()}),t);o.push(d),i.push(a)})))}))},(()=>{var e,r,n,t,o,i=u.hmrS_jsonp=u.hmrS_jsonp||{179:0},c={};function d(r,n){return e=n,new Promise(((e,n)=>{c[r]=e;var t=u.p+u.hu(r),o=new Error;u.l(t,(e=>{if(c[r]){c[r]=void 0;var t=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+r+" failed.\n("+t+": "+i+")",o.name="ChunkLoadError",o.type=t,o.request=i,n(o)}}))}))}function a(e){function c(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,c=o.chain,a=u.c[i];if(a&&(!a.hot._selfAccepted||a.hot._selfInvalidated)){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var f=a.parents[s],l=u.c[f];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([f]),moduleId:i,parentId:f};-1===r.indexOf(f)&&(l.hot._acceptedDependencies[i]?(n[f]||(n[f]=[]),d(n[f],[i])):(delete n[f],r.push(f),t.push({chain:c.concat([f]),id:f})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function d(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}u.f&&delete u.f.jsonpHmr,r=void 0;var a={},s=[],f={},l=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(u.o(n,p)){var h,v=n[p],m=!1,y=!1,g=!1,E="";switch((h=v?c(p):{type:"disposed",moduleId:p}).chain&&(E="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+E));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+E));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+E));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in f[p]=v,d(s,h.outdatedModules),h.outdatedDependencies)u.o(h.outdatedDependencies,p)&&(a[p]||(a[p]=[]),d(a[p],h.outdatedDependencies[p]));g&&(d(s,[h.moduleId]),f[p]=l)}n=void 0;for(var w,b=[],_=0;_<s.length;_++){var I=s[_],D=u.c[I];D&&(D.hot._selfAccepted||D.hot._main)&&f[I]!==l&&!D.hot._selfInvalidated&&b.push({module:I,require:D.hot._requireSelf,errorHandler:D.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete i[e]})),t=void 0;for(var r,n=s.slice();n.length>0;){var o=n.pop(),c=u.c[o];if(c){var d={},f=c.hot._disposeHandlers;for(_=0;_<f.length;_++)f[_].call(null,d);for(u.hmrD[o]=d,c.hot.active=!1,delete u.c[o],delete a[o],_=0;_<c.children.length;_++){var l=u.c[c.children[_]];l&&(e=l.parents.indexOf(o))>=0&&l.parents.splice(e,1)}}}for(var p in a)if(u.o(a,p)&&(c=u.c[p]))for(w=a[p],_=0;_<w.length;_++)r=w[_],(e=c.children.indexOf(r))>=0&&c.children.splice(e,1)},apply:function(r){for(var n in f)u.o(f,n)&&(u.m[n]=f[n]);for(var t=0;t<o.length;t++)o[t](u);for(var i in a)if(u.o(a,i)){var c=u.c[i];if(c){w=a[i];for(var d=[],l=[],p=[],h=0;h<w.length;h++){var v=w[h],m=c.hot._acceptedDependencies[v],y=c.hot._acceptedErrorHandlers[v];if(m){if(-1!==d.indexOf(m))continue;d.push(m),l.push(y),p.push(v)}}for(var g=0;g<d.length;g++)try{d[g].call(null,w)}catch(n){if("function"==typeof l[g])try{l[g](n,{moduleId:i,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[g],error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[g],error:n}),e.ignoreErrored||r(n)}}}for(var E=0;E<b.length;E++){var _=b[E],I=_.module;try{_.require(I)}catch(n){if("function"==typeof _.errorHandler)try{_.errorHandler(n,{moduleId:I,module:u.c[I]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:I,error:n}),e.ignoreErrored||r(n)}}return s}}}self.webpackHotUpdatesolution=(r,t,i)=>{for(var d in t)u.o(t,d)&&(n[d]=t[d],e&&e.push(d));i&&o.push(i),c[r]&&(c[r](),c[r]=void 0)},u.hmrI.jsonp=function(e,r){n||(n={},o=[],t=[],r.push(a)),u.o(n,e)||(n[e]=u.m[e])},u.hmrC.jsonp=function(e,c,s,f,l,p){l.push(a),r={},t=c,n=s.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],e.forEach((function(e){u.o(i,e)&&void 0!==i[e]?(f.push(d(e,p)),r[e]=!0):r[e]=!1})),u.f&&(u.f.jsonpHmr=function(e,n){r&&u.o(r,e)&&!r[e]&&(n.push(d(e)),r[e]=!0)})},u.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(u.p+u.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),u(780)})();