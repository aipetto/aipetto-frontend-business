(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[9],{557:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(11),o=r(12),a=function(){function e(){Object(n.a)(this,e)}return Object(o.a)(e,null,[{key:"errorMessage",value:function(e,t,r,n){var o,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!n&&!r[e])return null;var u=t[e];return(null===u||void 0===u||null===(o=u[0])||void 0===o?void 0:o.message)||(null===u||void 0===u?void 0:u.message)||u||null}}]),e}()},558:function(e,t,r){"use strict";var n=r(25),o=r(71),a=(r(4),r(75)),u=r(7);t.a=function(e){var t=function(e){return e.length>1};return Object(u.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(r,i){var c=0===i,l=e.items.length-1===i;return Object(u.jsxs)("li",{className:"".concat(l?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!c&&Object(u.jsx)(o.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:n.d}),t(r)?Object(u.jsx)(a.a,{className:"hover:underline",to:r[1],children:r[0]}):r[0]]},r[0])}))})}},561:function(e,t,r){"use strict";var n=r(135),o=r(4),a=r(556),u=r(557),i=r(672),c=r(7);function l(e){var t=Object(o.useState)(Object(i.a)()),r=Object(n.a)(t,1)[0],l=e.label,s=e.name,d=e.hint,b=e.type,f=e.placeholder,m=e.autoFocus,g=e.autoComplete,j=e.required,p=e.externalErrorMessage,x=e.disabled,O=e.endAdornment,h=Object(a.d)(),v=h.register,y=h.errors,w=h.formState,k=w.touched,C=w.isSubmitted,q=u.a.errorMessage(s,y,k,C,p);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Boolean(l)&&Object(c.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:r,children:[l," ",j?Object(c.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(c.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(c.jsx)("input",{id:r,name:s,type:b,ref:v,onChange:function(t){e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},placeholder:f||void 0,autoFocus:m||void 0,autoComplete:g||void 0,disabled:x,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(q?"border-red-400 text-red-600":"")}),O&&Object(c.jsx)("span",{className:"ml-2 text-gray-700",children:O})]})]}),Object(c.jsx)("div",{className:"text-red-600 text-sm mt-2",children:q}),Boolean(d)&&Object(c.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:d})]})}l.defaultProps={type:"text",required:!1},t.a=l},563:function(e,t,r){"use strict";r(4);var n=r(7);t.a=function(){return Object(n.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(n.jsx)("div",{className:"spinner"})})}},564:function(e,t,r){"use strict";var n=r(19),o=r(33),a=r(2),u=r(76),i=r.n(u),c={generic:function(e){return o.c().label(e)},string:function(e,t){t=t||{};var r=o.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),t.matches&&(r=r.matches(t.matches)),r},boolean:function(e,t){return o.b().default(!1).label(e)},relationToOne:function(e,t){t=t||{};var r=o.c().nullable(!0).label(e).transform((function(e,t){return t?t.id:null}));return t.required&&(r=r.required()),r},stringArray:function(e,t){t=t||{};var r=o.a().compact().ensure().of(o.h().transform((function(e,t){return""===t?null:e})).trim()).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},relationToMany:function(e,t){t=t||{};var r=o.a().nullable(!0).label(e).transform((function(e,t){return t&&t.length?t.map((function(e){return e.id})):[]}));return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},integer:function(e,t){t=t||{};var r=o.d().transform((function(e,t){return""===t?null:e})).integer().nullable(!0).label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),r},images:function(e,t){t=t||{};var r=o.a().nullable(!0).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},files:function(e,t){t=t||{};var r=o.a().compact().ensure().nullable(!0).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},enumerator:function(e,t){t=t||{};var r=o.h().transform((function(e,t){return""===t?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(n.a)(t.options||[])));return t.required&&(r=r.required(Object(a.d)("validation.string.selected"))),r},email:function(e,t){t=t||{};var r=o.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e).email();return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),t.matches&&(r=r.matches(t.matches)),r},decimal:function(e,t){t=t||{};var r=o.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),r},datetime:function(e,t){t=t||{};var r=o.c().nullable(!0).label(e).transform((function(e,t){return e?i()(t,"YYYY-MM-DD HH:mm").toISOString():null}));return t.required&&(r=r.required()),r},date:function(e,t){t=t||{};var r=o.c().nullable(!0).label(e).test("is-date",Object(a.d)("validation.mixed.default"),(function(e){return!e||i()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?i()(e).format("YYYY-MM-DD"):null}));return t.required&&(r=r.required()),r}};t.a=c},568:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},569:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return o}))},570:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(207);function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(n.a)(e,t)}},571:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(579),o=r.n(n),a=r(586);function u(e,t){return!t||"object"!==o()(t)&&"function"!==typeof t?Object(a.a)(e):t}},572:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},575:function(e,t,r){"use strict";var n=r(0);t.a=function(e,t){return t?{container:function(e){return Object(n.a)(Object(n.a)({},e),{},{borderRadius:"0.375rem",cursor:"pointer"})},control:function(t,r){return Object(n.a)(Object(n.a)({},t),{},{minHeight:"42px",borderColor:"rgb(248, 113, 113)",color:"rgb(220, 38, 38)",cursor:r.isDisabled?"default":"pointer",backgroundColor:e?"rgb(31, 41, 55)":"white"})},indicatorSeparator:function(e,t){return Object(n.a)(Object(n.a)({},e),{},{backgroundColor:"rgb(248, 113, 113)"})},singleValue:function(e){return Object(n.a)(Object(n.a)({},e),{},{color:"rgb(220, 38, 38)"})},menu:function(t,r){return Object(n.a)(Object(n.a)({},t),{},{backgroundColor:e?"rgb(31, 41, 55)":"white"})},option:function(t,r){return Object(n.a)(Object(n.a)({},t),{},{cursor:"pointer",backgroundColor:e?r.isFocused?"rgb(209, 213, 219)":"rgb(31, 41, 55)":r.isFocused?"rgb(55, 65, 81)":"white",color:e?r.isFocused?"rgb(55, 65, 81)":"rgb(209, 213, 219)":r.isFocused?"white":"rgb(55, 65, 81)"})},multiValue:function(t,r){return Object(n.a)(Object(n.a)({},t),{},{color:e?r.isFocused?"rgb(55, 65, 81)":"rgb(209, 213, 219)":r.isFocused?"white":"rgb(55, 65, 81)"})},input:function(t,r){return Object(n.a)(Object(n.a)({},t),{},{color:e?r.isFocused?"rgb(55, 65, 81)":"rgb(209, 213, 219)":r.isFocused?"white":"rgb(55, 65, 81)"})},multiValueRemove:function(e,t){return Object(n.a)(Object(n.a)({},e),{},{color:"rgb(55, 65, 81)"})}}:{container:function(e){return Object(n.a)(Object(n.a)({},e),{},{borderRadius:"0.375rem",cursor:"pointer"})},control:function(t,r){return Object(n.a)(Object(n.a)({},t),{},{minHeight:"42px",cursor:r.isDisabled?"default":"pointer",color:e?"rgb(229, 231, 235)":"rgb(55, 65, 81)",backgroundColor:e?"rgb(31, 41, 55)":"white",borderColor:e?"rgb(75, 85, 99)":"rgb(209, 213, 219)"})},indicatorSeparator:function(t,r){return Object(n.a)(Object(n.a)({},t),{},{backgroundColor:e?"rgb(75, 85, 99)":"rgb(209, 213, 219)"})},singleValue:function(t){return Object(n.a)(Object(n.a)({},t),{},{color:e?"rgb(229, 231, 235)":"rgb(55, 65, 81)"})},menu:function(t,r){return Object(n.a)(Object(n.a)({},t),{},{backgroundColor:e?"rgb(31, 41, 55)":"white"})},option:function(t,r){return Object(n.a)(Object(n.a)({},t),{},{cursor:"pointer",backgroundColor:e?r.isFocused?"rgb(209, 213, 219)":"rgb(31, 41, 55)":r.isFocused?"rgb(55, 65, 81)":"white",color:e?r.isFocused?"rgb(55, 65, 81)":"rgb(209, 213, 219)":r.isFocused?"white":"rgb(55, 65, 81)"})},input:function(t,r){return Object(n.a)(Object(n.a)({},t),{},{color:e?r.isFocused?"rgb(55, 65, 81)":"rgb(209, 213, 219)":r.isFocused?"white":"rgb(55, 65, 81)"})},multiValueRemove:function(e,t){return Object(n.a)(Object(n.a)({},e),{},{color:"rgb(55, 65, 81)"})}}}},578:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},579:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},581:function(e,t,r){"use strict";var n=r(19),o=r(1),a=r.n(o),u=r(3),i=r(135),c=r(4),l=r(557),s=r(589),d=r(2),b=r(556),f=r(611),m=r.n(f),g=r(27),j=r(77),p=r(25),x=r(71),O=r(575),h=r(672),v=r(7);function y(e){var t=Object(c.useState)(Object(h.a)()),r=Object(i.a)(t,1)[0],o=Object(b.d)(),f=o.errors,y=o.watch,w=o.setValue,k=o.register,C=o.formState,q=C.touched,F=C.isSubmitted,S=e.label,N=e.name,M=e.hint,B=e.placeholder,V=e.autoFocus,Y=e.externalErrorMessage,_=e.mode,D=e.required,E=e.isClearable,L=e.mapper,P=e.fetchFn,R=y(N),A=Object(g.e)(j.a.selectDarkMode),T=Object(c.useState)([]),H=Object(i.a)(T,2),I=H[0],J=H[1],U=Object(c.useState)(!1),z=Object(i.a)(U,2),G=z[0],K=z[1];Object(c.useEffect)((function(){k({name:N})}),[k,N]),Object(c.useEffect)((function(){(function(){var e=Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.prev=1,e.next=4,P();case 4:t=(t=e.sent).map((function(e){return L.toAutocomplete(e)})),J(t),K(!1),e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),J([]),K(!1),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}})()().then((function(){}))}),[]);var Q=function(e){return(I||[]).find((function(t){return t.value===e.value}))||e},W=function(){return"multiple"===_?X():Z()},X=function(){return R?R.map((function(e){return Q(L.toAutocomplete(e))})):[]},Z=function(){return R?Q(L.toAutocomplete(R)):null},$=function(t){if(!t)return w(N,[],{shouldValidate:!0}),void(e.onChange&&e.onChange([]));var r=t.map((function(e){return L.toValue(e)}));w(N,r,{shouldValidate:!0}),e.onChange&&e.onChange(r)},ee=function(t){if(!t)return w(N,null,{shouldValidate:!0}),void(e.onChange&&e.onChange(null));var r=L.toValue(t);w(N,r,{shouldValidate:!0}),e.onChange&&e.onChange(r)},te=G?Object(d.d)("autocomplete.loading"):M,re=l.a.errorMessage(N,f,q,F,Y),ne=Object(O.a)(A,Boolean(re));return Object(v.jsxs)("div",{children:[Boolean(S)&&Object(v.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:r,children:[S," ",D?Object(v.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)(s.a,{className:"w-full mt-2",styles:ne,id:r,name:N,isMulti:"multiple"===_,placeholder:B||"",autoFocus:V||void 0,onChange:function(e){return"multiple"===_?$(e):ee(e)},value:W(),isClearable:E,options:function(){var t=e.mode;return I?W()?"multiple"===t?m()([].concat(Object(n.a)(I),Object(n.a)(W())),"value"):m()([].concat(Object(n.a)(I),[W()]),"value"):I:[]}(),onBlur:function(t){e.onBlur&&e.onBlur(t)},loadingMessage:function(){return Object(d.d)("autocomplete.loading")},noOptionsMessage:function(){return Object(d.d)("autocomplete.noOptions")}}),e.showCreate&&e.hasPermissionToCreate?Object(v.jsx)("button",{className:"mt-2 ml-2 flex-shrink-0 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",onClick:e.onOpenModal,style:{height:42},children:Object(v.jsx)(x.a,{icon:p.m})}):null]}),Object(v.jsx)("div",{className:"text-red-600 text-sm mt-2",children:re}),Boolean(te)&&Object(v.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:te})]})}y.defaultProps={isClearable:!0,mode:"default",required:!1},t.a=y},586:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return n}))},611:function(e,t,r){var n=r(205),o=r(612);e.exports=function(e,t){return e&&e.length?o(e,n(t,2)):[]}},612:function(e,t,r){var n=r(319),o=r(613),a=r(618),u=r(320),i=r(619),c=r(318);e.exports=function(e,t,r){var l=-1,s=o,d=e.length,b=!0,f=[],m=f;if(r)b=!1,s=a;else if(d>=200){var g=t?null:i(e);if(g)return c(g);b=!1,s=u,m=new n}else m=t?[]:f;e:for(;++l<d;){var j=e[l],p=t?t(j):j;if(j=r||0!==j?j:0,b&&p===p){for(var x=m.length;x--;)if(m[x]===p)continue e;t&&m.push(p),f.push(j)}else s(m,p,r)||(m!==f&&m.push(p),f.push(j))}return f}},613:function(e,t,r){var n=r(614);e.exports=function(e,t){return!!(null==e?0:e.length)&&n(e,t,0)>-1}},614:function(e,t,r){var n=r(615),o=r(616),a=r(617);e.exports=function(e,t,r){return t===t?a(e,t,r):n(e,o,r)}},615:function(e,t){e.exports=function(e,t,r,n){for(var o=e.length,a=r+(n?1:-1);n?a--:++a<o;)if(t(e[a],a,e))return a;return-1}},616:function(e,t){e.exports=function(e){return e!==e}},617:function(e,t){e.exports=function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}},618:function(e,t){e.exports=function(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}},619:function(e,t,r){var n=r(321),o=r(620),a=r(318),u=n&&1/a(new n([,-0]))[1]==1/0?function(e){return new n(e)}:o;e.exports=u},620:function(e,t){e.exports=function(){}},788:function(e,t,r){"use strict";r.r(t);var n=r(135),o=r(4),a=r(27),u=r(28),i=r(2),c=r(88),l=r(5),s=function(e){return e.breed.form},d=Object(l.a)([s],(function(e){return e.record})),b={selectInitLoading:Object(l.a)([s],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(l.a)([s],(function(e){return Boolean(e.saveLoading)})),selectRecord:d,selectRaw:s},f=r(8),m=r(663),g=r(558),j=r(563),p=r(7);t.default=function(e){var t=Object(o.useState)(!1),r=Object(n.a)(t,2),l=r[0],s=r[1],d=Object(a.d)(),x=Object(u.h)(),O=Object(a.e)(b.selectInitLoading),h=Object(a.e)(b.selectSaveLoading),v=Object(a.e)(b.selectRecord),y=Boolean(x.params.id),w=y?Object(i.d)("entities.breed.edit.title"):Object(i.d)("entities.breed.new.title");return Object(o.useEffect)((function(){d(c.a.doInit(x.params.id)),s(!0)}),[d,x.params.id]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g.a,{items:[[Object(i.d)("dashboard.menu"),"/"],[Object(i.d)("entities.breed.menu"),"/breed"],[w]]}),Object(p.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(p.jsx)("h1",{className:"text-lg font-medium mb-6",children:w}),O&&Object(p.jsx)(j.a,{}),l&&!O&&Object(p.jsx)(m.a,{saveLoading:h,initLoading:O,record:v,isEditing:y,onSubmit:function(e,t){d(y?c.a.doUpdate(e,t):c.a.doCreate(t))},onCancel:function(){return Object(f.b)().push("/breed")}})]})]})}}}]);