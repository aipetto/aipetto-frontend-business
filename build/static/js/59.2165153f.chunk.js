(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[59],{703:function(e,r,t){"use strict";var n=t(215),a=t(6),c=t(701),o=t(706),i=t(692),l=t(13);function s(e){var r=Object(a.useState)(Object(i.a)()),t=Object(n.a)(r,1)[0],s=e.label,u=e.name,d=e.hint,m=e.type,b=e.placeholder,f=e.autoFocus,j=e.autoComplete,x=e.required,p=e.externalErrorMessage,h=e.disabled,g=e.endAdornment,y=Object(c.d)(),v=y.register,O=y.errors,w=y.formState,N=w.touched,k=w.isSubmitted,S=o.a.errorMessage(u,O,N,k,p);return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Boolean(s)&&Object(l.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:t,children:[s," ",x?Object(l.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(l.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(l.jsx)("input",{id:t,name:u,type:m,ref:v,onChange:function(r){e.onChange&&e.onChange(r.target.value)},onBlur:function(r){e.onBlur&&e.onBlur(r)},placeholder:b||void 0,autoFocus:f||void 0,autoComplete:j||void 0,disabled:h,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(S?"border-red-400 text-red-600":"")}),g&&Object(l.jsx)("span",{className:"ml-2 text-gray-700",children:g})]})]}),Object(l.jsx)("div",{className:"text-red-600 text-sm mt-2",children:S}),Boolean(d)&&Object(l.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:d})]})}s.defaultProps={type:"text",required:!1},r.a=s},704:function(e,r,t){"use strict";var n=t(16),a=t(35),c=t(2),o=t(36),i=t.n(o),l={generic:function(e){return a.c().label(e)},string:function(e,r){r=r||{};var t=a.h().transform((function(e,r){return""===r?null:e})).nullable(!0).trim().label(e);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},boolean:function(e,r){return a.b().default(!1).label(e)},relationToOne:function(e,r){r=r||{};var t=a.c().nullable(!0).label(e).transform((function(e,r){return r?r.id:null}));return r.required&&(t=t.required()),t},stringArray:function(e,r){r=r||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,r){return""===r?null:e})).trim()).label(e);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},relationToMany:function(e,r){r=r||{};var t=a.a().nullable(!0).label(e).transform((function(e,r){return r&&r.length?r.map((function(e){return e.id})):[]}));return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},integer:function(e,r){r=r||{};var t=a.d().transform((function(e,r){return""===r?null:e})).integer().nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},images:function(e,r){r=r||{};var t=a.a().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},files:function(e,r){r=r||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},enumerator:function(e,r){r=r||{};var t=a.h().transform((function(e,r){return""===r?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(n.a)(r.options||[])));return r.required&&(t=t.required(Object(c.d)("validation.string.selected"))),t},email:function(e,r){r=r||{};var t=a.h().transform((function(e,r){return""===r?null:e})).nullable(!0).trim().label(e).email();return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},decimal:function(e,r){r=r||{};var t=a.d().transform((function(e,r){return""===r?null:e})).nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},datetime:function(e,r){r=r||{};var t=a.c().nullable(!0).label(e).transform((function(e,r){return e?i()(r,"YYYY-MM-DD HH:mm").toISOString():null}));return r.required&&(t=t.required()),t},date:function(e,r){r=r||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(c.d)("validation.mixed.default"),(function(e){return!e||i()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?i()(e).format("YYYY-MM-DD"):null}));return r.required&&(t=t.required()),t}};r.a=l},706:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(14),a=t(15),c=function(){function e(){Object(n.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,r,t,n){var a,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(c)return c;if(!n&&!t[e])return null;var o=r[e];return(null===o||void 0===o||null===(a=o[0])||void 0===a?void 0:a.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},799:function(e,r,t){var n=t(805);e.exports=function(e,r){if(e){if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}},805:function(e,r){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}},813:function(e,r,t){"use strict";var n=t(814),a=t(818),c=t(819),o=t(823),i=t(824),l=t(825);function s(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function u(e,r){return r.encode?r.strict?o(e):encodeURIComponent(e):e}function d(e,r){return r.decode?i(e):e}function m(e){return Array.isArray(e)?e.sort():"object"===typeof e?m(Object.keys(e)).sort((function(e,r){return Number(e)-Number(r)})).map((function(r){return e[r]})):e}function b(e){var r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function f(e){var r=(e=b(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function j(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function x(e,r){s((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var t=function(e){var r;switch(e.arrayFormat){case"index":return function(e,t,n){r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return function(e,t,n){r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"comma":case"separator":return function(r,t,n){var a="string"===typeof t&&t.includes(e.arrayFormatSeparator),c="string"===typeof t&&!a&&d(t,e).includes(e.arrayFormatSeparator);t=c?d(t,e):t;var o=a||c?t.split(e.arrayFormatSeparator).map((function(r){return d(r,e)})):null===t?t:d(t,e);n[r]=o};default:return function(e,r,t){void 0!==t[e]?t[e]=[].concat(t[e],r):t[e]=r}}}(r),c=Object.create(null);if("string"!==typeof e)return c;if(!(e=e.trim().replace(/^[?#&]/,"")))return c;var o,i=a(e.split("&"));try{for(i.s();!(o=i.n()).done;){var u=o.value,b=l(r.decode?u.replace(/\+/g," "):u,"="),f=n(b,2),x=f[0],p=f[1];p=void 0===p?null:["comma","separator"].includes(r.arrayFormat)?p:d(p,r),t(d(x,r),p,c)}}catch(k){i.e(k)}finally{i.f()}for(var h=0,g=Object.keys(c);h<g.length;h++){var y=g[h],v=c[y];if("object"===typeof v&&null!==v)for(var O=0,w=Object.keys(v);O<w.length;O++){var N=w[O];v[N]=j(v[N],r)}else c[y]=j(v,r)}return!1===r.sort?c:(!0===r.sort?Object.keys(c).sort():Object.keys(c).sort(r.sort)).reduce((function(e,r){var t=c[r];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?e[r]=m(t):e[r]=t,e}),Object.create(null))}r.extract=f,r.parse=x,r.stringify=function(e,r){if(!e)return"";s((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var t=function(t){return r.skipNull&&(null===(n=e[t])||void 0===n)||r.skipEmptyString&&""===e[t];var n},n=function(e){switch(e.arrayFormat){case"index":return function(r){return function(t,n){var a=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(c(t),null===n?[[u(r,e),"[",a,"]"].join("")]:[[u(r,e),"[",u(a,e),"]=",u(n,e)].join("")])}};case"bracket":return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(c(t),null===n?[[u(r,e),"[]"].join("")]:[[u(r,e),"[]=",u(n,e)].join("")])}};case"comma":case"separator":return function(r){return function(t,n){return null===n||void 0===n||0===n.length?t:0===t.length?[[u(r,e),"=",u(n,e)].join("")]:[[t,u(n,e)].join(e.arrayFormatSeparator)]}};default:return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(c(t),null===n?[u(r,e)]:[[u(r,e),"=",u(n,e)].join("")])}}}}(r),a={},o=0,i=Object.keys(e);o<i.length;o++){var l=i[o];t(l)||(a[l]=e[l])}var d=Object.keys(a);return!1!==r.sort&&d.sort(r.sort),d.map((function(t){var a=e[t];return void 0===a?"":null===a?u(t,r):Array.isArray(a)?a.reduce(n(t),[]).join("&"):u(t,r)+"="+u(a,r)})).filter((function(e){return e.length>0})).join("&")},r.parseUrl=function(e,r){r=Object.assign({decode:!0},r);var t=l(e,"#"),a=n(t,2),c=a[0],o=a[1];return Object.assign({url:c.split("?")[0]||"",query:x(f(e),r)},r&&r.parseFragmentIdentifier&&o?{fragmentIdentifier:d(o,r)}:{})},r.stringifyUrl=function(e,t){t=Object.assign({encode:!0,strict:!0},t);var n=b(e.url).split("?")[0]||"",a=r.extract(e.url),c=r.parse(a,{sort:!1}),o=Object.assign(c,e.query),i=r.stringify(o,t);i&&(i="?".concat(i));var l=function(e){var r="",t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(l="#".concat(u(e.fragmentIdentifier,t))),"".concat(n).concat(i).concat(l)}},814:function(e,r,t){var n=t(815),a=t(816),c=t(799),o=t(817);e.exports=function(e,r){return n(e)||a(e,r)||c(e,r)||o()}},815:function(e,r){e.exports=function(e){if(Array.isArray(e))return e}},816:function(e,r){e.exports=function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(l){a=!0,c=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw c}}return t}}},817:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},818:function(e,r,t){var n=t(799);e.exports=function(e,r){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=n(e))||r&&e&&"number"===typeof e.length){t&&(e=t);var a=0,c=function(){};return{s:c,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw o}}}}},819:function(e,r,t){var n=t(820),a=t(821),c=t(799),o=t(822);e.exports=function(e){return n(e)||a(e)||c(e)||o()}},820:function(e,r,t){var n=t(805);e.exports=function(e){if(Array.isArray(e))return n(e)}},821:function(e,r){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},822:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},823:function(e,r,t){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},824:function(e,r,t){"use strict";var n="%[a-f0-9]{2}",a=new RegExp(n,"gi"),c=new RegExp("("+n+")+","gi");function o(e,r){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;r=r||1;var t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],o(t),o(n))}function i(e){try{return decodeURIComponent(e)}catch(n){for(var r=e.match(a),t=1;t<r.length;t++)r=(e=o(r,t).join("")).match(a);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=c.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(r){var a=i(n[0]);a!==n[0]&&(t[n[0]]=a)}n=c.exec(e)}t["%C2"]="\ufffd";for(var o=Object.keys(t),l=0;l<o.length;l++){var s=o[l];e=e.replace(new RegExp(s,"g"),t[s])}return e}(e)}}},825:function(e,r,t){"use strict";e.exports=function(e,r){if("string"!==typeof e||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];var t=e.indexOf(r);return-1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]}},847:function(e,r,t){"use strict";t(6);var n=t(2),a=t(68),c=t(13);r.a=function(e){return Object(c.jsx)("div",{className:"flex items-center justify-center w-full",children:Object(n.c)().map((function(e){return Object(c.jsx)("img",{className:"mr-2 cursor-pointer",alt:e.label,title:e.label,src:e.flag,onClick:function(){return function(e){a.a.doChangeLanguage(e)}(e.id)}},e.id)}))})}},859:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t(215),a=t(6),c=t.n(a),o=t(110),i=t(2),l=t(847),s=t(13);function u(e){var r=c.a.useState(!1),t=Object(n.a)(r,2);t[0],t[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"p-4 nav-section w-full",children:Object(s.jsx)("div",{className:"container mx-auto",children:Object(s.jsxs)("div",{className:"flex justify-between flex- content-center items-center py-2 lg:py-0 px-0 lg:px-0",children:[Object(s.jsx)(o.a,{to:"/",className:"text-blueGray-700 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",children:Object(s.jsx)("h1",{className:"relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl xl:mb-8",children:"AIPETTO"})}),Object(s.jsx)("div",{className:"hidden md:block",children:Object(s.jsxs)("ul",{className:"flex flex-row",children:[Object(s.jsx)("li",{className:"active",children:Object(s.jsx)("a",{className:"px-4 py-2 text-gray-900 font-semibold",href:"#",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"px-4 py-2 text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded",href:"#",children:"Features"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"px-4 py-2 text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded",href:"#",children:"Business"})}),Object(s.jsx)(l.a,{})]})}),Object(s.jsx)("div",{className:"hidden md:block",children:Object(s.jsxs)("ul",{className:"flex flex-",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"px-4 py-2 text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded text-gray-900",href:"/auth/signin",children:"Login"})}),Object(s.jsx)("li",{className:"nav-item px-2 signup",children:Object(s.jsx)("a",{className:"text-gray-900 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 shadow font-semibold transition duration-500 ease-in-out cursor-pointer",href:"/auth/signup",children:Object(i.d)("auth.signup")})})]})}),Object(s.jsx)("div",{className:"hamburger-menu px-2 py-1 block md:hidden rounded border border-gray-500 uppercase",children:"Menu"}),Object(s.jsxs)("div",{className:"navbar mobile-nav px-0 mx-0 hidden md:hidden fixed top-0 left-0 w-full bg-white h-screen fixed z-50 p-3",children:[Object(s.jsxs)("div",{className:"flex flex- justify-between px-3 py-2",children:[Object(s.jsx)("img",{src:"images/logo.png",className:"w-32 self-start ml-1"}),Object(s.jsx)("div",{className:"close-menu flex items-center content-center justify-center px-2 py-1 bg-black rounded px-x py-1 text-white uppercase",children:"Close"})]}),Object(s.jsxs)("ul",{className:"flex flex-col text-center mt-2 pt-2 w-full",children:[Object(s.jsx)("li",{className:"active w-full",children:Object(s.jsx)("a",{className:"w-full font-bold text-lg border-t border-gray-200 block py-3",href:"/",children:"Home"})}),Object(s.jsx)("li",{className:"w-full",children:Object(s.jsx)("a",{className:"w-full text-lg border-t border-gray-200 block py-3",href:"#",children:"Features"})}),Object(s.jsx)("li",{className:"w-full",children:Object(s.jsx)("a",{className:"w-full text-lg border-t border-gray-200 block py-3",href:"#",children:"Pricing"})}),Object(s.jsx)("li",{className:"w-full",children:Object(s.jsx)("a",{className:"w-full text-lg border-t border-gray-200 block py-3",href:"#",children:"Contact"})}),Object(s.jsx)("li",{className:"w-full",children:Object(s.jsx)("a",{className:"w-full text-lg border-t border-gray-200 block py-3",href:"/auth/signin",children:Object(i.d)("auth.signin")})}),Object(s.jsx)("li",{className:"signup py-4 border-t border-gray-200 p-4",children:Object(s.jsx)("a",{className:" px-3 py-2 bg-yellow-500 rounded border border-yellow-600 shadow font-semibold block",href:"/auth/signup",children:Object(i.d)("auth.signup")})})]})]})]})})})})}},964:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t(215),c=t(705),o=t(813),i=t.n(o),l=t(6),s=t(701),u=t(30),d=t(32),m=t(110),b=t(33),f=t(2),j=t(26),x=t(28),p=t(704),h=t(703),g=t(11),y=t(35),v=t(859),O=t(13),w=y.e().shape({email:p.a.string(Object(f.d)("user.fields.email"),{required:!0}),password:p.a.string(Object(f.d)("user.fields.password"),{required:!0}),rememberMe:p.a.boolean(Object(f.d)("user.fields.rememberMe"))});r.default=function(){var e=Object(d.g)(),r=Object(u.d)(),t=Object(u.e)(x.a.selectLoading),o=i.a.parse(e.search).socialErrorCode,p=Object(u.e)(x.a.selectErrorMessage),y=Object(u.e)(x.a.selectBackgroundImageUrl);Object(u.e)(x.a.selectLogoUrl),Object(l.useEffect)((function(){r(j.a.doClearErrorMessage())}),[r]),Object(l.useEffect)((function(){o&&("generic"===o?g.a.error(Object(f.d)("errors.defaultErrorMessage")):g.a.error(Object(f.d)("auth.social.errors.".concat(o))))}),[]);var N=Object(l.useState)({email:"",password:"",rememberMe:!0}),k=Object(a.a)(N,1)[0],S=Object(s.c)({resolver:Object(c.yupResolver)(w),mode:"onSubmit",defaultValues:k});return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v.a,{fixed:!0}),Object(O.jsx)("div",{style:{backgroundImage:"url(".concat(y||"/images/pets-background.jpeg",")")},className:"bg-cover h-screen flex justify-center",children:Object(O.jsx)("div",{className:"w-full fade-in fade-in-first",children:Object(O.jsx)("div",{className:"w-full max-w-lg mx-auto mt-32",children:Object(O.jsxs)("div",{className:"bg-white rounded-lg shadow p-8 text-center",children:[Object(O.jsx)("h1",{className:"text-2xl font-semibold",children:Object(f.d)("auth.welcomeBack")}),Object(O.jsx)("div",{className:"my-4",children:Object(O.jsx)(s.a,Object(n.a)(Object(n.a)({},S),{},{children:Object(O.jsxs)("form",{onSubmit:S.handleSubmit((function(e){var t=e.email,n=e.password,a=e.rememberMe;r(j.a.doSigninWithEmailAndPassword(t,n,a))})),className:"mt-6",children:[Object(O.jsx)(h.a,{name:"email",label:Object(f.d)("user.fields.email"),autoComplete:"email",autoFocus:!0,externalErrorMessage:p}),Object(O.jsx)("div",{className:"mt-4",children:Object(O.jsx)(h.a,{name:"password",label:Object(f.d)("user.fields.password"),autoComplete:"password",type:"password"})}),Object(O.jsxs)("div",{className:"flex items-center justify-between mt-4",children:[Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("input",{className:"cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring",type:"checkbox",id:"rememberMe",name:"rememberMe",ref:S.register}),Object(O.jsx)("label",{className:"cursor-pointer ml-1 text-sm text-gray-600 dark:text-gray-400",htmlFor:"rememberMe",children:Object(f.d)("user.fields.rememberMe")})]}),Object(O.jsx)("div",{className:"pr-0",children:Object(O.jsx)(m.a,{className:"cursor-pointer text-sm text-gray-600 dark:text-gray-400",to:"/auth/forgot-password",children:Object(f.d)("auth.forgotPassword")})})]}),Object(O.jsx)("div",{className:"mt-6",children:Object(O.jsx)("button",{disabled:t,type:"submit",className:"disabled:opacity-50 disabled:cursor-default bg-yellow-500 rounded p-4 border border-yellow-600 block w-full font-semibold",children:Object(f.d)("auth.signin")})})]})}))}),Object(O.jsxs)("div",{className:"flex justify-between",children:[Object(O.jsx)(m.a,{className:"text-blue-500 text-sm text-center",to:"/auth/forgot-password",children:Object(f.d)("auth.forgotPassword")}),Object(O.jsx)(m.a,{className:"text-blue-500 text-sm text-center",to:"/auth/signup",children:Object(f.d)("auth.createAnAccount")})]}),Object(O.jsxs)("div",{className:"my-4",children:[Object(O.jsx)("a",{href:"".concat(b.a.backendUrl,"/auth/social/google"),className:"focus:outline-none",children:Object(O.jsxs)("button",{className:"bg-yellow-500 rounded p-4 block w-full font-semibold flex justify-center items-center content-center text-white mb-2",style:{background:"#4385F5"},children:[Object(O.jsx)("svg",{className:"w-4 h-4 mx-2 fill-current",viewBox:"0 0 24 24",children:Object(O.jsx)("path",{d:"M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"})}),Object(f.d)("auth.social.signinWithGoogle")]})}),Object(O.jsx)("a",{href:"".concat(b.a.backendUrl,"/auth/social/facebook"),className:"focus:outline-none",children:Object(O.jsx)("button",{className:"bg-yellow-500 rounded p-4 block w-full font-semibold flex justify-center items-center content-center text-white",style:{background:"#3B5A99"},children:Object(O.jsx)("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 320 512",children:Object(O.jsx)("path",{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})})})})]})]})})})})]})}}}]);