(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[5],{703:function(e,t,n){"use strict";var r=n(215),a=n(6),o=n(701),c=n(706),i=n(692),u=n(13);function l(e){var t=Object(a.useState)(Object(i.a)()),n=Object(r.a)(t,1)[0],l=e.label,s=e.name,d=e.hint,b=e.type,m=e.placeholder,f=e.autoFocus,j=e.autoComplete,g=e.required,x=e.externalErrorMessage,h=e.disabled,O=e.endAdornment,v=Object(o.d)(),p=v.register,y=v.errors,w=v.formState,k=w.touched,C=w.isSubmitted,N=c.a.errorMessage(s,y,k,C,x);return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Boolean(l)&&Object(u.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:n,children:[l," ",g?Object(u.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(u.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(u.jsx)("input",{id:n,name:s,type:b,ref:p,onChange:function(t){e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},placeholder:m||void 0,autoFocus:f||void 0,autoComplete:j||void 0,disabled:h,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(N?"border-red-400 text-red-600":"")}),O&&Object(u.jsx)("span",{className:"ml-2 text-gray-700",children:O})]})]}),Object(u.jsx)("div",{className:"text-red-600 text-sm mt-2",children:N}),Boolean(d)&&Object(u.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:d})]})}l.defaultProps={type:"text",required:!1},t.a=l},704:function(e,t,n){"use strict";var r=n(16),a=n(35),o=n(2),c=n(36),i=n.n(c),u={generic:function(e){return a.c().label(e)},string:function(e,t){t=t||{};var n=a.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),t.matches&&(n=n.matches(t.matches)),n},boolean:function(e,t){return a.b().default(!1).label(e)},relationToOne:function(e,t){t=t||{};var n=a.c().nullable(!0).label(e).transform((function(e,t){return t?t.id:null}));return t.required&&(n=n.required()),n},stringArray:function(e,t){t=t||{};var n=a.a().compact().ensure().of(a.h().transform((function(e,t){return""===t?null:e})).trim()).label(e);return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},relationToMany:function(e,t){t=t||{};var n=a.a().nullable(!0).label(e).transform((function(e,t){return t&&t.length?t.map((function(e){return e.id})):[]}));return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},integer:function(e,t){t=t||{};var n=a.d().transform((function(e,t){return""===t?null:e})).integer().nullable(!0).label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),n},images:function(e,t){t=t||{};var n=a.a().nullable(!0).label(e);return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},files:function(e,t){t=t||{};var n=a.a().compact().ensure().nullable(!0).label(e);return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},enumerator:function(e,t){t=t||{};var n=a.h().transform((function(e,t){return""===t?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(t.options||[])));return t.required&&(n=n.required(Object(o.d)("validation.string.selected"))),n},email:function(e,t){t=t||{};var n=a.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e).email();return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),t.matches&&(n=n.matches(t.matches)),n},decimal:function(e,t){t=t||{};var n=a.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),n},datetime:function(e,t){t=t||{};var n=a.c().nullable(!0).label(e).transform((function(e,t){return e?i()(t,"YYYY-MM-DD HH:mm").toISOString():null}));return t.required&&(n=n.required()),n},date:function(e,t){t=t||{};var n=a.c().nullable(!0).label(e).test("is-date",Object(o.d)("validation.mixed.default"),(function(e){return!e||i()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?i()(e).format("YYYY-MM-DD"):null}));return t.required&&(n=n.required()),n}};t.a=u},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(14),a=n(15),o=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,t,n,r){var a,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(o)return o;if(!r&&!n[e])return null;var c=t[e];return(null===c||void 0===c||null===(a=c[0])||void 0===a?void 0:a.message)||(null===c||void 0===c?void 0:c.message)||c||null}}]),e}()},707:function(e,t,n){"use strict";var r=n(16),a=n(1),o=n.n(a),c=n(3),i=n(215),u=n(6),l=n(706),s=n(739),d=n(2),b=n(701),m=n(766),f=n.n(m),j=n(30),g=n(112),x=n(24),h=n(105),O=n(726),v=n(692),p=n(13);function y(e){var t=Object(u.useState)(Object(v.a)()),n=Object(i.a)(t,1)[0],a=Object(b.d)(),m=a.errors,y=a.watch,w=a.setValue,k=a.register,C=a.formState,N=C.touched,q=C.isSubmitted,F=e.label,S=e.name,M=e.hint,V=e.placeholder,B=e.autoFocus,T=e.externalErrorMessage,P=e.mode,Y=e.required,D=e.isClearable,E=e.mapper,A=e.fetchFn,R=y(S),I=Object(j.e)(g.a.selectDarkMode),U=Object(u.useState)([]),H=Object(i.a)(U,2),z=H[0],J=H[1],L=Object(u.useState)(!1),G=Object(i.a)(L,2),K=G[0],Q=G[1];Object(u.useEffect)((function(){k({name:S})}),[k,S]),Object(u.useEffect)((function(){(function(){var e=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q(!0),e.prev=1,e.next=4,A();case 4:t=(t=e.sent).map((function(e){return E.toAutocomplete(e)})),J(t),Q(!1),e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(1),console.error(e.t0),J([]),Q(!1),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}})()().then((function(){}))}),[]);var W=function(e){return(z||[]).find((function(t){return t.value===e.value}))||e},X=function(){return"multiple"===P?Z():$()},Z=function(){return R?R.map((function(e){return W(E.toAutocomplete(e))})):[]},$=function(){return R?W(E.toAutocomplete(R)):null},_=function(t){if(!t)return w(S,[],{shouldValidate:!0}),void(e.onChange&&e.onChange([]));var n=t.map((function(e){return E.toValue(e)}));w(S,n,{shouldValidate:!0}),e.onChange&&e.onChange(n)},ee=function(t){if(!t)return w(S,null,{shouldValidate:!0}),void(e.onChange&&e.onChange(null));var n=E.toValue(t);w(S,n,{shouldValidate:!0}),e.onChange&&e.onChange(n)},te=K?Object(d.d)("autocomplete.loading"):M,ne=l.a.errorMessage(S,m,N,q,T),re=Object(O.a)(I,Boolean(ne));return Object(p.jsxs)("div",{children:[Boolean(F)&&Object(p.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:n,children:[F," ",Y?Object(p.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)(s.a,{className:"w-full mt-2",styles:re,id:n,name:S,isMulti:"multiple"===P,placeholder:V||"",autoFocus:B||void 0,onChange:function(e){return"multiple"===P?_(e):ee(e)},value:X(),isClearable:D,options:function(){var t=e.mode;return z?X()?"multiple"===t?f()([].concat(Object(r.a)(z),Object(r.a)(X())),"value"):f()([].concat(Object(r.a)(z),[X()]),"value"):z:[]}(),onBlur:function(t){e.onBlur&&e.onBlur(t)},loadingMessage:function(){return Object(d.d)("autocomplete.loading")},noOptionsMessage:function(){return Object(d.d)("autocomplete.noOptions")}}),e.showCreate&&e.hasPermissionToCreate?Object(p.jsx)("button",{className:"mt-2 ml-2 flex-shrink-0 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",onClick:e.onOpenModal,style:{height:42},children:Object(p.jsx)(h.a,{icon:x.m})}):null]}),Object(p.jsx)("div",{className:"text-red-600 text-sm mt-2",children:ne}),Boolean(te)&&Object(p.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:te})]})}y.defaultProps={isClearable:!0,mode:"default",required:!1},t.a=y},708:function(e,t,n){"use strict";var r=n(24),a=n(105),o=(n(6),n(110)),c=n(13);t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(n,i){var u=0===i,l=e.items.length-1===i;return Object(c.jsxs)("li",{className:"".concat(l?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!u&&Object(c.jsx)(a.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:r.d}),t(n)?Object(c.jsx)(o.a,{className:"hover:underline",to:n[1],children:n[0]}):n[0]]},n[0])}))})}},712:function(e,t,n){"use strict";n(6);var r=n(13);t.a=function(){return Object(r.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(r.jsx)("div",{className:"spinner"})})}},726:function(e,t,n){"use strict";var r=n(0);t.a=function(e,t){return t?{container:function(e){return Object(r.a)(Object(r.a)({},e),{},{borderRadius:"0.375rem",cursor:"pointer"})},control:function(t,n){return Object(r.a)(Object(r.a)({},t),{},{minHeight:"42px",borderColor:"rgb(248, 113, 113)",color:"rgb(220, 38, 38)",cursor:n.isDisabled?"default":"pointer",backgroundColor:e?"rgb(31, 41, 55)":"white"})},indicatorSeparator:function(e,t){return Object(r.a)(Object(r.a)({},e),{},{backgroundColor:"rgb(248, 113, 113)"})},singleValue:function(e){return Object(r.a)(Object(r.a)({},e),{},{color:"rgb(220, 38, 38)"})},menu:function(t,n){return Object(r.a)(Object(r.a)({},t),{},{backgroundColor:e?"rgb(31, 41, 55)":"white"})},option:function(t,n){return Object(r.a)(Object(r.a)({},t),{},{cursor:"pointer",backgroundColor:e?n.isFocused?"rgb(209, 213, 219)":"rgb(31, 41, 55)":n.isFocused?"rgb(55, 65, 81)":"white",color:e?n.isFocused?"rgb(55, 65, 81)":"rgb(209, 213, 219)":n.isFocused?"white":"rgb(55, 65, 81)"})},multiValue:function(t,n){return Object(r.a)(Object(r.a)({},t),{},{color:e?n.isFocused?"rgb(55, 65, 81)":"rgb(209, 213, 219)":n.isFocused?"white":"rgb(55, 65, 81)"})},input:function(t,n){return Object(r.a)(Object(r.a)({},t),{},{color:e?n.isFocused?"rgb(55, 65, 81)":"rgb(209, 213, 219)":n.isFocused?"white":"rgb(55, 65, 81)"})},multiValueRemove:function(e,t){return Object(r.a)(Object(r.a)({},e),{},{color:"rgb(55, 65, 81)"})}}:{container:function(e){return Object(r.a)(Object(r.a)({},e),{},{borderRadius:"0.375rem",cursor:"pointer"})},control:function(t,n){return Object(r.a)(Object(r.a)({},t),{},{minHeight:"42px",cursor:n.isDisabled?"default":"pointer",color:e?"rgb(229, 231, 235)":"rgb(55, 65, 81)",backgroundColor:e?"rgb(31, 41, 55)":"white",borderColor:e?"rgb(75, 85, 99)":"rgb(209, 213, 219)"})},indicatorSeparator:function(t,n){return Object(r.a)(Object(r.a)({},t),{},{backgroundColor:e?"rgb(75, 85, 99)":"rgb(209, 213, 219)"})},singleValue:function(t){return Object(r.a)(Object(r.a)({},t),{},{color:e?"rgb(229, 231, 235)":"rgb(55, 65, 81)"})},menu:function(t,n){return Object(r.a)(Object(r.a)({},t),{},{backgroundColor:e?"rgb(31, 41, 55)":"white"})},option:function(t,n){return Object(r.a)(Object(r.a)({},t),{},{cursor:"pointer",backgroundColor:e?n.isFocused?"rgb(209, 213, 219)":"rgb(31, 41, 55)":n.isFocused?"rgb(55, 65, 81)":"white",color:e?n.isFocused?"rgb(55, 65, 81)":"rgb(209, 213, 219)":n.isFocused?"white":"rgb(55, 65, 81)"})},input:function(t,n){return Object(r.a)(Object(r.a)({},t),{},{color:e?n.isFocused?"rgb(55, 65, 81)":"rgb(209, 213, 219)":n.isFocused?"white":"rgb(55, 65, 81)"})},multiValueRemove:function(e,t){return Object(r.a)(Object(r.a)({},e),{},{color:"rgb(55, 65, 81)"})}}}},731:function(e,t,n){"use strict";var r=n(0),a=n(16),o=n(215),c=n(6),i=n(75),u=n(1),l=n.n(u),s=n(3),d=n(24),b=n(105),m=n(177),f=n.n(m),j=n(2),g=n(5),x=n(789),h=n(13);var O=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),r=n[0],a=n[1],u=function(){var t=Object(s.a)(l.a.mark((function t(n,r){var o,c,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.next=4,i.a.create(r);case 4:return o=t.sent,c=o.id,t.next=8,i.a.find(c);case 8:u=t.sent,e.onSuccess(u),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),g.a.handle(t.t0);case 15:return t.prev=15,a(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])})));return function(e,n){return t.apply(this,arguments)}}();return f.a.createPortal(Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",tabIndex:-1,onClick:e.onClose,children:Object(h.jsx)("div",{className:"relative mx-auto w-auto max-h-screen pt-6 pb-6",onClick:function(e){return e.stopPropagation()},children:Object(h.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(h.jsxs)("div",{className:"flex items-start justify-between p-5 rounded-t",children:[Object(h.jsx)("div",{className:"text-lg font-semibold",children:Object(j.d)("entities.languages.new.title")}),Object(h.jsx)("button",{type:"button",className:"ml-auto bg-transparent border-0 text-gray-900 float-right text-lg leading-none font-semibold outline-none focus:outline-none",onClick:e.onClose,children:Object(h.jsx)("span",{className:"bg-transparent text-gray-700 h-6 w-6 text-lg block outline-none focus:outline-none",children:Object(h.jsx)(b.a,{icon:d.s})})})]}),Object(h.jsx)("div",{className:"relative p-6 flex-auto overflow-y-scroll",children:Object(h.jsx)(x.a,{saveLoading:r,onSubmit:u,onCancel:e.onClose,modal:!0})})]})})}),Object(h.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}),document.getElementById("modal-root"))},v=n(707),p=n(701),y=n(30),w=n(760);t.a=function(e){var t=Object(p.d)(),n=t.setValue,u=t.getValues,l=Object(c.useState)(!1),s=Object(o.a)(l,2),d=s[0],b=s[1],m=Object(y.e)(w.a.selectPermissionToCreate),f=function(){b(!1)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v.a,Object(r.a)(Object(r.a)({},e),{},{fetchFn:function(e,t){return i.a.listAutocomplete(e,t)},mapper:{toAutocomplete:function(e){if(!e)return null;var t=e.id,n=e.label;return e.name&&(n=e.name),{key:t,value:t,label:n}},toValue:function(e){return e?{id:e.value,label:e.label}:null}},onOpenModal:function(){b(!0)},hasPermissionToCreate:m})),d&&Object(h.jsx)(O,{onClose:f,onSuccess:function(t){var r=e.name,o=e.mode;n(r,o&&"multiple"===o?[].concat(Object(a.a)(u()[r]||[]),[t]):t),f()}})]})}},760:function(e,t,n){"use strict";var r=n(4),a=n(28),o=n(65),c=n(111),i=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.languagesRead)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.languagesEdit)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.languagesCreate)})),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.languagesImport)})),d={selectPermissionToRead:i,selectPermissionToEdit:u,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.languagesDestroy)})),selectPermissionToImport:s};t.a=d},766:function(e,t,n){var r=n(303),a=n(767);e.exports=function(e,t){return e&&e.length?a(e,r(t,2)):[]}},767:function(e,t,n){var r=n(462),a=n(768),o=n(773),c=n(463),i=n(774),u=n(461);e.exports=function(e,t,n){var l=-1,s=a,d=e.length,b=!0,m=[],f=m;if(n)b=!1,s=o;else if(d>=200){var j=t?null:i(e);if(j)return u(j);b=!1,s=c,f=new r}else f=t?[]:m;e:for(;++l<d;){var g=e[l],x=t?t(g):g;if(g=n||0!==g?g:0,b&&x===x){for(var h=f.length;h--;)if(f[h]===x)continue e;t&&f.push(x),m.push(g)}else s(f,x,n)||(f!==m&&f.push(x),m.push(g))}return m}},768:function(e,t,n){var r=n(769);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},769:function(e,t,n){var r=n(770),a=n(771),o=n(772);e.exports=function(e,t,n){return t===t?o(e,t,n):r(e,a,n)}},770:function(e,t){e.exports=function(e,t,n,r){for(var a=e.length,o=n+(r?1:-1);r?o--:++o<a;)if(t(e[o],o,e))return o;return-1}},771:function(e,t){e.exports=function(e){return e!==e}},772:function(e,t){e.exports=function(e,t,n){for(var r=n-1,a=e.length;++r<a;)if(e[r]===t)return r;return-1}},773:function(e,t){e.exports=function(e,t,n){for(var r=-1,a=null==e?0:e.length;++r<a;)if(n(t,e[r]))return!0;return!1}},774:function(e,t,n){var r=n(464),a=n(775),o=n(461),c=r&&1/o(new r([,-0]))[1]==1/0?function(e){return new r(e)}:a;e.exports=c},775:function(e,t){e.exports=function(){}},786:function(e,t,n){"use strict";var r=n(215),a=n(6),o=n(701),c=n(706),i=n(692),u=n(13);function l(e){var t=Object(a.useState)(Object(i.a)()),n=Object(r.a)(t,1)[0],l=e.label,s=e.name,d=e.hint,b=e.required,m=e.externalErrorMessage,f=Object(o.d)(),j=f.register,g=f.errors,x=f.formState,h=x.touched,O=x.isSubmitted,v=c.a.errorMessage(s,g,h,O,m);return Object(u.jsxs)("div",{children:[Boolean(l)&&Object(u.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:n,children:[l," ",b?Object(u.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(u.jsx)("div",{className:"mt-1",children:Object(u.jsxs)("div",{className:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in",children:[Object(u.jsx)("input",{type:"checkbox",id:n,name:s,ref:j,onChange:function(t){e.onChange&&e.onChange(t.target.checked)},onBlur:function(t){e.onBlur&&e.onBlur(t)},className:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"}),Object(u.jsx)("label",{htmlFor:n,className:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"})]})}),Object(u.jsx)("div",{className:"text-red-600 text-sm mt-2",children:v}),Boolean(d)&&Object(u.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:d})]})}l.defaultProps={},t.a=l},789:function(e,t,n){"use strict";var r=n(0),a=n(215),o=n(702),c=n(24),i=n(105),u=n(705),l=n(6),s=n(701),d=n(2),b=n(704),m=n(703),f=n(786),j=n(35),g=n(13),x=j.e().shape({name:b.a.string(Object(d.d)("entities.languages.fields.name"),{required:!0}),active:b.a.boolean(Object(d.d)("entities.languages.fields.active"),{})});t.a=function(e){var t=e.saveLoading,n=Object(l.useState)((function(){var t=e.record||{};return{name:t.name,active:t.active}})),b=Object(a.a)(n,1)[0],j=Object(s.c)({resolver:Object(u.yupResolver)(x),mode:"all",defaultValues:b}),h=function(t){var n;e.onSubmit(null===(n=e.record)||void 0===n?void 0:n.id,t)};return Object(g.jsx)(s.a,Object(r.a)(Object(r.a)({},j),{},{children:Object(g.jsxs)("form",{onSubmit:j.handleSubmit(h),children:[Object(g.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md",children:Object(g.jsx)(m.a,{name:"name",label:Object(d.d)("entities.languages.fields.name"),required:!0,autoFocus:!0})}),Object(g.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md mt-4",children:Object(g.jsx)(f.a,{name:"active",label:Object(d.d)("entities.languages.fields.active")})}),Object(g.jsxs)("div",{className:"pt-4",children:[Object(g.jsxs)("button",{className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",disabled:t,type:"button",onClick:j.handleSubmit(h),children:[Object(g.jsx)(i.a,{className:"mr-2",icon:o.e}),Object(d.d)("common.save")]}),Object(g.jsxs)("button",{disabled:t,onClick:function(){Object.keys(b).forEach((function(e){j.setValue(e,b[e])}))},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(g.jsx)(i.a,{className:"mr-2",icon:c.t}),Object(d.d)("common.reset")]}),e.onCancel?Object(g.jsxs)("button",{disabled:t,onClick:function(){return e.onCancel()},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(g.jsx)(i.a,{className:"mr-2",icon:c.s}),Object(d.d)("common.cancel")]}):null]})]})}))}}}]);