(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[68],{557:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var n=t(11),a=t(12),i=function(){function e(){Object(n.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,r,t,n){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!n&&!t[e])return null;var s=r[e];return(null===s||void 0===s||null===(a=s[0])||void 0===a?void 0:a.message)||(null===s||void 0===s?void 0:s.message)||s||null}}]),e}()},558:function(e,r,t){"use strict";var n=t(25),a=t(71),i=(t(4),t(75)),s=t(7);r.a=function(e){var r=function(e){return e.length>1};return Object(s.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(t,o){var l=0===o,d=e.items.length-1===o;return Object(s.jsxs)("li",{className:"".concat(d?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!l&&Object(s.jsx)(a.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:n.d}),r(t)?Object(s.jsx)(i.a,{className:"hover:underline",to:t[1],children:t[0]}):t[0]]},t[0])}))})}},561:function(e,r,t){"use strict";var n=t(135),a=t(4),i=t(556),s=t(557),o=t(672),l=t(7);function d(e){var r=Object(a.useState)(Object(o.a)()),t=Object(n.a)(r,1)[0],d=e.label,u=e.name,c=e.hint,m=e.type,b=e.placeholder,f=e.autoFocus,j=e.autoComplete,x=e.required,g=e.externalErrorMessage,h=e.disabled,w=e.endAdornment,O=Object(i.d)(),p=O.register,y=O.errors,v=O.formState,q=v.touched,k=v.isSubmitted,C=s.a.errorMessage(u,y,q,k,g);return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Boolean(d)&&Object(l.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:t,children:[d," ",x?Object(l.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(l.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(l.jsx)("input",{id:t,name:u,type:m,ref:p,onChange:function(r){e.onChange&&e.onChange(r.target.value)},onBlur:function(r){e.onBlur&&e.onBlur(r)},placeholder:b||void 0,autoFocus:f||void 0,autoComplete:j||void 0,disabled:h,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(C?"border-red-400 text-red-600":"")}),w&&Object(l.jsx)("span",{className:"ml-2 text-gray-700",children:w})]})]}),Object(l.jsx)("div",{className:"text-red-600 text-sm mt-2",children:C}),Boolean(c)&&Object(l.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:c})]})}d.defaultProps={type:"text",required:!1},r.a=d},564:function(e,r,t){"use strict";var n=t(19),a=t(33),i=t(2),s=t(76),o=t.n(s),l={generic:function(e){return a.c().label(e)},string:function(e,r){r=r||{};var t=a.h().transform((function(e,r){return""===r?null:e})).nullable(!0).trim().label(e);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},boolean:function(e,r){return a.b().default(!1).label(e)},relationToOne:function(e,r){r=r||{};var t=a.c().nullable(!0).label(e).transform((function(e,r){return r?r.id:null}));return r.required&&(t=t.required()),t},stringArray:function(e,r){r=r||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,r){return""===r?null:e})).trim()).label(e);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},relationToMany:function(e,r){r=r||{};var t=a.a().nullable(!0).label(e).transform((function(e,r){return r&&r.length?r.map((function(e){return e.id})):[]}));return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},integer:function(e,r){r=r||{};var t=a.d().transform((function(e,r){return""===r?null:e})).integer().nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},images:function(e,r){r=r||{};var t=a.a().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},files:function(e,r){r=r||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},enumerator:function(e,r){r=r||{};var t=a.h().transform((function(e,r){return""===r?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(n.a)(r.options||[])));return r.required&&(t=t.required(Object(i.d)("validation.string.selected"))),t},email:function(e,r){r=r||{};var t=a.h().transform((function(e,r){return""===r?null:e})).nullable(!0).trim().label(e).email();return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},decimal:function(e,r){r=r||{};var t=a.d().transform((function(e,r){return""===r?null:e})).nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},datetime:function(e,r){r=r||{};var t=a.c().nullable(!0).label(e).transform((function(e,r){return e?o()(r,"YYYY-MM-DD HH:mm").toISOString():null}));return r.required&&(t=t.required()),t},date:function(e,r){r=r||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.d)("validation.mixed.default"),(function(e){return!e||o()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?o()(e).format("YYYY-MM-DD"):null}));return r.required&&(t=t.required()),t}};r.a=l},783:function(e,r,t){"use strict";t.r(r);var n=t(4),a=t(2),i=t(8),s=t(0),o=t(135),l=t(560),d=t(25),u=t(71),c=t(566),m=t(556),b=t(27),f=t(21),j=t(31),x=t(564),g=t(561),h=t(33),w=t(7),O=h.e().shape({oldPassword:x.a.string(Object(a.d)("user.fields.oldPassword"),{required:!0}),newPassword:x.a.string(Object(a.d)("user.fields.newPassword"),{required:!0}),newPasswordConfirmation:x.a.string(Object(a.d)("user.fields.newPasswordConfirmation"),{required:!0}).oneOf([h.f("newPassword"),null],Object(a.d)("auth.passwordChange.mustMatch"))});var p=function(e){var r=Object(b.d)(),t=Object(n.useState)((function(){return{oldPassword:"",newPassword:"",newPasswordConfirmation:""}})),i=Object(o.a)(t,1)[0],x=Object(m.c)({resolver:Object(c.yupResolver)(O),mode:"all",defaultValues:i}),h=Object(b.e)(j.a.selectLoadingPasswordChange),p=function(e){r(f.a.doChangePassword(e.oldPassword,e.newPassword))};return Object(w.jsx)(m.a,Object(s.a)(Object(s.a)({},x),{},{children:Object(w.jsxs)("form",{onSubmit:x.handleSubmit(p),children:[Object(w.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md",children:Object(w.jsx)(g.a,{type:"password",name:"oldPassword",label:Object(a.d)("user.fields.oldPassword"),autoComplete:"old-password",autoFocus:!0})}),Object(w.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md mt-4",children:Object(w.jsx)(g.a,{type:"password",name:"newPassword",label:Object(a.d)("user.fields.newPassword"),autoComplete:"new-password"})}),Object(w.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md mt-4",children:Object(w.jsx)(g.a,{type:"password",name:"newPasswordConfirmation",label:Object(a.d)("user.fields.newPasswordConfirmation"),autoComplete:"new-password"})}),Object(w.jsxs)("div",{className:"pt-4",children:[Object(w.jsxs)("button",{className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",disabled:h,type:"button",onClick:x.handleSubmit(p),children:[Object(w.jsx)(u.a,{className:"mr-2",icon:l.e}),Object(a.d)("common.save")]}),Object(w.jsxs)("button",{disabled:h,onClick:function(){Object.keys(i).forEach((function(e){x.setValue(e,i[e])}))},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(w.jsx)(u.a,{className:"mr-2",icon:d.t}),Object(a.d)("common.reset")]}),e.onCancel?Object(w.jsxs)("button",{disabled:h,onClick:function(){return e.onCancel()},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(w.jsx)(u.a,{className:"mr-2",icon:d.s}),Object(a.d)("common.cancel")]}):null]})]})}))},y=t(558);r.default=function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y.a,{items:[[Object(a.d)("dashboard.menu"),"/"],[Object(a.d)("auth.passwordChange.title")]]}),Object(w.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(w.jsx)("h1",{className:"text-lg font-medium mb-6",children:Object(a.d)("auth.passwordChange.title")}),Object(w.jsx)(p,{onCancel:function(){return Object(i.b)().push("/")}})]})]})}}}]);