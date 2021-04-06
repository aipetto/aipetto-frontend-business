(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[34],{563:function(t,e,r){"use strict";r(4);var n=r(7);e.a=function(){return Object(n.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(n.jsx)("div",{className:"spinner"})})}},606:function(t,e,r){var n=r(629);t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},629:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},638:function(t,e,r){"use strict";var n=r(639),o=r(643),a=r(644),c=r(648),i=r(649),u=r(650);function s(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(t,e){return e.encode?e.strict?c(t):encodeURIComponent(t):t}function f(t,e){return e.decode?i(t):t}function d(t){return Array.isArray(t)?t.sort():"object"===typeof t?d(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function p(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function m(t){var e=(t=p(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function y(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function b(t,e){s((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"===typeof r&&r.includes(t.arrayFormatSeparator),a="string"===typeof r&&!o&&f(r,t).includes(t.arrayFormatSeparator);r=a?f(r,t):r;var c=o||a?r.split(t.arrayFormatSeparator).map((function(e){return f(e,t)})):null===r?r:f(r,t);n[e]=c};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),a=Object.create(null);if("string"!==typeof t)return a;if(!(t=t.trim().replace(/^[?#&]/,"")))return a;var c,i=o(t.split("&"));try{for(i.s();!(c=i.n()).done;){var l=c.value,p=u(e.decode?l.replace(/\+/g," "):l,"="),m=n(p,2),b=m[0],g=m[1];g=void 0===g?null:["comma","separator"].includes(e.arrayFormat)?g:f(g,e),r(f(b,e),g,a)}}catch(S){i.e(S)}finally{i.f()}for(var v=0,j=Object.keys(a);v<j.length;v++){var h=j[v],x=a[h];if("object"===typeof x&&null!==x)for(var O=0,w=Object.keys(x);O<w.length;O++){var k=w[O];x[k]=y(x[k],e)}else a[h]=y(x,e)}return!1===e.sort?a:(!0===e.sort?Object.keys(a).sort():Object.keys(a).sort(e.sort)).reduce((function(t,e){var r=a[e];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?t[e]=d(r):t[e]=r,t}),Object.create(null))}e.extract=m,e.parse=b,e.stringify=function(t,e){if(!t)return"";s((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&(null===(n=t[r])||void 0===n)||e.skipEmptyString&&""===t[r];var n},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[l(e,t),"[",o,"]"].join("")]:[[l(e,t),"[",l(o,t),"]=",l(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[l(e,t),"[]"].join("")]:[[l(e,t),"[]=",l(n,t)].join("")])}};case"comma":case"separator":return function(e){return function(r,n){return null===n||void 0===n||0===n.length?r:0===r.length?[[l(e,t),"=",l(n,t)].join("")]:[[r,l(n,t)].join(t.arrayFormatSeparator)]}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[l(e,t)]:[[l(e,t),"=",l(n,t)].join("")])}}}}(e),o={},c=0,i=Object.keys(t);c<i.length;c++){var u=i[c];r(u)||(o[u]=t[u])}var f=Object.keys(o);return!1!==e.sort&&f.sort(e.sort),f.map((function(r){var o=t[r];return void 0===o?"":null===o?l(r,e):Array.isArray(o)?o.reduce(n(r),[]).join("&"):l(r,e)+"="+l(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=u(t,"#"),o=n(r,2),a=o[0],c=o[1];return Object.assign({url:a.split("?")[0]||"",query:b(m(t),e)},e&&e.parseFragmentIdentifier&&c?{fragmentIdentifier:f(c,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign({encode:!0,strict:!0},r);var n=p(t.url).split("?")[0]||"",o=e.extract(t.url),a=e.parse(o,{sort:!1}),c=Object.assign(a,t.query),i=e.stringify(c,r);i&&(i="?".concat(i));var u=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(u="#".concat(l(t.fragmentIdentifier,r))),"".concat(n).concat(i).concat(u)}},639:function(t,e,r){var n=r(640),o=r(641),a=r(606),c=r(642);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||c()}},640:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},641:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}},642:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},643:function(t,e,r){var n=r(606);t.exports=function(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=n(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,c=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw c}}}}},644:function(t,e,r){var n=r(645),o=r(646),a=r(606),c=r(647);t.exports=function(t){return n(t)||o(t)||a(t)||c()}},645:function(t,e,r){var n=r(629);t.exports=function(t){if(Array.isArray(t))return n(t)}},646:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},647:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},648:function(t,e,r){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},649:function(t,e,r){"use strict";var n="%[a-f0-9]{2}",o=new RegExp(n,"gi"),a=new RegExp("("+n+")+","gi");function c(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],c(r),c(n))}function i(t){try{return decodeURIComponent(t)}catch(n){for(var e=t.match(o),r=1;r<e.length;r++)e=(t=c(e,r).join("")).match(o);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=a.exec(t);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(e){var o=i(n[0]);o!==n[0]&&(r[n[0]]=o)}n=a.exec(t)}r["%C2"]="\ufffd";for(var c=Object.keys(r),u=0;u<c.length;u++){var s=c[u];t=t.replace(new RegExp(s,"g"),r[s])}return t}(t)}}},650:function(t,e,r){"use strict";t.exports=function(t,e){if("string"!==typeof t||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},746:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(3),c=r(638),i=r.n(c),u=r(4),s=r(27),l=r(28),f=r(2),d=r(21),p=r(31),m=r(8),y=r(74),b=r(216),g=r(563),v=r(7);e.default=function(){var t=Object(s.d)(),e=Object(l.g)(),r=Object(s.e)(b.a.selectLoading),n=Object(s.e)(b.a.selectWarningMessage),c=Object(s.e)(p.a.selectBackgroundImageUrl),j=Object(s.e)(p.a.selectLogoUrl),h=i.a.parse(e.search).token;Object(u.useEffect)((function(){t(y.a.doAcceptFromAuth(h))}),[t,h]);var x=function(){var e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(d.a.doSignout());case 2:Object(m.b)().push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{style:{backgroundImage:"url(".concat(c||"/images/invitation.jpg",")")},className:"bg-cover h-screen flex items-center justify-center",children:Object(v.jsxs)("div",{className:"w-full md:max-w-sm lg:max-w-sm m-auto bg-white md:rounded-md lg:rounded-md shadow-md dark:bg-gray-800",children:[Object(v.jsxs)("div",{className:"p-6",children:[Object(v.jsx)("div",{className:"w-full flex justify-center items-center",children:j?Object(v.jsx)("img",{src:j,className:"w-72 max-h-14 object-cover",alt:Object(f.d)("app.title")}):Object(v.jsx)("h1",{className:"text-3xl font-semibold text-center text-gray-700 dark:text-white",children:Object(f.d)("app.title")})}),Object(v.jsxs)("div",{className:"mt-8",children:[r&&Object(v.jsx)(g.a,{}),Boolean(n)&&Object(v.jsx)("div",{className:"text-center text-lg",children:n})]}),Boolean(n)&&Object(v.jsx)("div",{className:"mt-6",children:Object(v.jsx)("button",{type:"submit",className:"disabled:opacity-50 disabled:cursor-default w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",onClick:function(){t(y.a.doAcceptFromAuth(h,!0))},children:Object(f.d)("tenant.invitation.acceptWrongEmail")})})]}),!r&&Object(v.jsx)("div",{className:"bg-gray-100 dark:bg-gray-700 py-4 rounded-b-md flex justify-center",children:Object(v.jsx)("button",{className:"block text-xs text-center font-medium text-gray-800 dark:text-gray-200 hover:underline",type:"button",onClick:x,children:Object(f.d)("auth.signout")})})]})})}}}]);