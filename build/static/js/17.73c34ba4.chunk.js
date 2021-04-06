(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[17],{557:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var n=t(11),a=t(12),i=function(){function e(){Object(n.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,r,t,n){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!n&&!t[e])return null;var s=r[e];return(null===s||void 0===s||null===(a=s[0])||void 0===a?void 0:a.message)||(null===s||void 0===s?void 0:s.message)||s||null}}]),e}()},558:function(e,r,t){"use strict";var n=t(25),a=t(71),i=(t(4),t(75)),s=t(7);r.a=function(e){var r=function(e){return e.length>1};return Object(s.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(t,c){var o=0===c,u=e.items.length-1===c;return Object(s.jsxs)("li",{className:"".concat(u?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!o&&Object(s.jsx)(a.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:n.d}),r(t)?Object(s.jsx)(i.a,{className:"hover:underline",to:t[1],children:t[0]}):t[0]]},t[0])}))})}},561:function(e,r,t){"use strict";var n=t(135),a=t(4),i=t(556),s=t(557),c=t(672),o=t(7);function u(e){var r=Object(a.useState)(Object(c.a)()),t=Object(n.a)(r,1)[0],u=e.label,l=e.name,d=e.hint,m=e.type,b=e.placeholder,f=e.autoFocus,j=e.autoComplete,x=e.required,g=e.externalErrorMessage,v=e.disabled,O=e.endAdornment,h=Object(i.d)(),y=h.register,p=h.errors,k=h.formState,q=k.touched,N=k.isSubmitted,w=s.a.errorMessage(l,p,q,N,g);return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Boolean(u)&&Object(o.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:t,children:[u," ",x?Object(o.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(o.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(o.jsx)("input",{id:t,name:l,type:m,ref:y,onChange:function(r){e.onChange&&e.onChange(r.target.value)},onBlur:function(r){e.onBlur&&e.onBlur(r)},placeholder:b||void 0,autoFocus:f||void 0,autoComplete:j||void 0,disabled:v,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(w?"border-red-400 text-red-600":"")}),O&&Object(o.jsx)("span",{className:"ml-2 text-gray-700",children:O})]})]}),Object(o.jsx)("div",{className:"text-red-600 text-sm mt-2",children:w}),Boolean(d)&&Object(o.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:d})]})}u.defaultProps={type:"text",required:!1},r.a=u},563:function(e,r,t){"use strict";t(4);var n=t(7);r.a=function(){return Object(n.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(n.jsx)("div",{className:"spinner"})})}},564:function(e,r,t){"use strict";var n=t(19),a=t(33),i=t(2),s=t(76),c=t.n(s),o={generic:function(e){return a.c().label(e)},string:function(e,r){r=r||{};var t=a.h().transform((function(e,r){return""===r?null:e})).nullable(!0).trim().label(e);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},boolean:function(e,r){return a.b().default(!1).label(e)},relationToOne:function(e,r){r=r||{};var t=a.c().nullable(!0).label(e).transform((function(e,r){return r?r.id:null}));return r.required&&(t=t.required()),t},stringArray:function(e,r){r=r||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,r){return""===r?null:e})).trim()).label(e);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},relationToMany:function(e,r){r=r||{};var t=a.a().nullable(!0).label(e).transform((function(e,r){return r&&r.length?r.map((function(e){return e.id})):[]}));return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},integer:function(e,r){r=r||{};var t=a.d().transform((function(e,r){return""===r?null:e})).integer().nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},images:function(e,r){r=r||{};var t=a.a().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},files:function(e,r){r=r||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},enumerator:function(e,r){r=r||{};var t=a.h().transform((function(e,r){return""===r?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(n.a)(r.options||[])));return r.required&&(t=t.required(Object(i.d)("validation.string.selected"))),t},email:function(e,r){r=r||{};var t=a.h().transform((function(e,r){return""===r?null:e})).nullable(!0).trim().label(e).email();return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},decimal:function(e,r){r=r||{};var t=a.d().transform((function(e,r){return""===r?null:e})).nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},datetime:function(e,r){r=r||{};var t=a.c().nullable(!0).label(e).transform((function(e,r){return e?c()(r,"YYYY-MM-DD HH:mm").toISOString():null}));return r.required&&(t=t.required()),t},date:function(e,r){r=r||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.d)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?c()(e).format("YYYY-MM-DD"):null}));return r.required&&(t=t.required()),t}};r.a=o},700:function(e,r,t){"use strict";var n=t(0),a=t(135),i=t(560),s=t(25),c=t(71),o=t(566),u=t(4),l=t(556),d=t(2),m=t(564),b=t(561),f=t(33),j=t(7),x=f.e().shape({nome:m.a.string(Object(d.d)("entities.businessServicesTypes.fields.nome"),{})});r.a=function(e){var r=e.saveLoading,t=Object(u.useState)((function(){return{nome:(e.record||{}).nome}})),m=Object(a.a)(t,1)[0],f=Object(l.c)({resolver:Object(o.yupResolver)(x),mode:"all",defaultValues:m}),g=function(r){var t;e.onSubmit(null===(t=e.record)||void 0===t?void 0:t.id,r)};return Object(j.jsx)(l.a,Object(n.a)(Object(n.a)({},f),{},{children:Object(j.jsxs)("form",{onSubmit:f.handleSubmit(g),children:[Object(j.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md",children:Object(j.jsx)(b.a,{name:"nome",label:Object(d.d)("entities.businessServicesTypes.fields.nome"),required:!1,autoFocus:!0})}),Object(j.jsxs)("div",{className:"pt-4",children:[Object(j.jsxs)("button",{className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",disabled:r,type:"button",onClick:f.handleSubmit(g),children:[Object(j.jsx)(c.a,{className:"mr-2",icon:i.e}),Object(d.d)("common.save")]}),Object(j.jsxs)("button",{disabled:r,onClick:function(){Object.keys(m).forEach((function(e){f.setValue(e,m[e])}))},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(j.jsx)(c.a,{className:"mr-2",icon:s.t}),Object(d.d)("common.reset")]}),e.onCancel?Object(j.jsxs)("button",{disabled:r,onClick:function(){return e.onCancel()},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(j.jsx)(c.a,{className:"mr-2",icon:s.s}),Object(d.d)("common.cancel")]}):null]})]})}))}},792:function(e,r,t){"use strict";t.r(r);var n=t(135),a=t(4),i=t(27),s=t(28),c=t(2),o=t(92),u=t(5),l=function(e){return e.businessServicesTypes.form},d=Object(u.a)([l],(function(e){return e.record})),m={selectInitLoading:Object(u.a)([l],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(u.a)([l],(function(e){return Boolean(e.saveLoading)})),selectRecord:d,selectRaw:l},b=t(8),f=t(700),j=t(558),x=t(563),g=t(7);r.default=function(e){var r=Object(a.useState)(!1),t=Object(n.a)(r,2),u=t[0],l=t[1],d=Object(i.d)(),v=Object(s.h)(),O=Object(i.e)(m.selectInitLoading),h=Object(i.e)(m.selectSaveLoading),y=Object(i.e)(m.selectRecord),p=Boolean(v.params.id),k=p?Object(c.d)("entities.businessServicesTypes.edit.title"):Object(c.d)("entities.businessServicesTypes.new.title");return Object(a.useEffect)((function(){d(o.a.doInit(v.params.id)),l(!0)}),[d,v.params.id]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(j.a,{items:[[Object(c.d)("dashboard.menu"),"/"],[Object(c.d)("entities.businessServicesTypes.menu"),"/business-services-types"],[k]]}),Object(g.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(g.jsx)("h1",{className:"text-lg font-medium mb-6",children:k}),O&&Object(g.jsx)(x.a,{}),u&&!O&&Object(g.jsx)(f.a,{saveLoading:h,initLoading:O,record:y,isEditing:p,onSubmit:function(e,r){d(p?o.a.doUpdate(e,r):o.a.doCreate(r))},onCancel:function(){return Object(b.b)().push("/business-services-types")}})]})]})}}}]);