(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[30],{1038:function(e,t,r){"use strict";r.r(t);var n=r(215),a=r(6),i=r(30),c=r(32),l=r(2),s=r(136),o=r(4),d=function(e){return e.currency.form},u=Object(o.a)([d],(function(e){return e.record})),m={selectInitLoading:Object(o.a)([d],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(o.a)([d],(function(e){return Boolean(e.saveLoading)})),selectRecord:u,selectRaw:d},b=r(7),j=r(0),f=r(702),x=r(24),g=r(105),h=r(705),O=r(701),v=r(704),y=r(703),p=r(786),k=r(35),w=r(13),q=k.e().shape({name:v.a.string(Object(l.d)("entities.currency.fields.name"),{required:!0}),symbol:v.a.string(Object(l.d)("entities.currency.fields.symbol"),{}),active:v.a.boolean(Object(l.d)("entities.currency.fields.active"),{})});var N=function(e){var t=e.saveLoading,r=Object(a.useState)((function(){var t=e.record||{};return{name:t.name,symbol:t.symbol,active:t.active}})),i=Object(n.a)(r,1)[0],c=Object(O.c)({resolver:Object(h.yupResolver)(q),mode:"all",defaultValues:i}),s=function(t){var r;e.onSubmit(null===(r=e.record)||void 0===r?void 0:r.id,t)};return Object(w.jsx)(O.a,Object(j.a)(Object(j.a)({},c),{},{children:Object(w.jsxs)("form",{onSubmit:c.handleSubmit(s),children:[Object(w.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md",children:Object(w.jsx)(y.a,{name:"name",label:Object(l.d)("entities.currency.fields.name"),required:!0,autoFocus:!0})}),Object(w.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md mt-4",children:Object(w.jsx)(y.a,{name:"symbol",label:Object(l.d)("entities.currency.fields.symbol"),required:!1})}),Object(w.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md mt-4",children:Object(w.jsx)(p.a,{name:"active",label:Object(l.d)("entities.currency.fields.active")})}),Object(w.jsxs)("div",{className:"pt-4",children:[Object(w.jsxs)("button",{className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",disabled:t,type:"button",onClick:c.handleSubmit(s),children:[Object(w.jsx)(g.a,{className:"mr-2",icon:f.e}),Object(l.d)("common.save")]}),Object(w.jsxs)("button",{disabled:t,onClick:function(){Object.keys(i).forEach((function(e){c.setValue(e,i[e])}))},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(w.jsx)(g.a,{className:"mr-2",icon:x.t}),Object(l.d)("common.reset")]}),e.onCancel?Object(w.jsxs)("button",{disabled:t,onClick:function(){return e.onCancel()},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(w.jsx)(g.a,{className:"mr-2",icon:x.s}),Object(l.d)("common.cancel")]}):null]})]})}))},S=r(708),C=r(712);t.default=function(e){var t=Object(a.useState)(!1),r=Object(n.a)(t,2),o=r[0],d=r[1],u=Object(i.d)(),j=Object(c.h)(),f=Object(i.e)(m.selectInitLoading),x=Object(i.e)(m.selectSaveLoading),g=Object(i.e)(m.selectRecord),h=Boolean(j.params.id),O=h?Object(l.d)("entities.currency.edit.title"):Object(l.d)("entities.currency.new.title");return Object(a.useEffect)((function(){u(s.a.doInit(j.params.id)),d(!0)}),[u,j.params.id]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S.a,{items:[[Object(l.d)("dashboard.menu"),"/network"],[Object(l.d)("entities.currency.menu"),"/currency"],[O]]}),Object(w.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(w.jsx)("h1",{className:"text-lg font-medium mb-6",children:O}),f&&Object(w.jsx)(C.a,{}),o&&!f&&Object(w.jsx)(N,{saveLoading:x,initLoading:f,record:g,isEditing:h,onSubmit:function(e,t){u(h?s.a.doUpdate(e,t):s.a.doCreate(t))},onCancel:function(){return Object(b.b)().push("/currency")}})]})]})}},703:function(e,t,r){"use strict";var n=r(215),a=r(6),i=r(701),c=r(706),l=r(692),s=r(13);function o(e){var t=Object(a.useState)(Object(l.a)()),r=Object(n.a)(t,1)[0],o=e.label,d=e.name,u=e.hint,m=e.type,b=e.placeholder,j=e.autoFocus,f=e.autoComplete,x=e.required,g=e.externalErrorMessage,h=e.disabled,O=e.endAdornment,v=Object(i.d)(),y=v.register,p=v.errors,k=v.formState,w=k.touched,q=k.isSubmitted,N=c.a.errorMessage(d,p,w,q,g);return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Boolean(o)&&Object(s.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:r,children:[o," ",x?Object(s.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(s.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(s.jsx)("input",{id:r,name:d,type:m,ref:y,onChange:function(t){e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},placeholder:b||void 0,autoFocus:j||void 0,autoComplete:f||void 0,disabled:h,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(N?"border-red-400 text-red-600":"")}),O&&Object(s.jsx)("span",{className:"ml-2 text-gray-700",children:O})]})]}),Object(s.jsx)("div",{className:"text-red-600 text-sm mt-2",children:N}),Boolean(u)&&Object(s.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:u})]})}o.defaultProps={type:"text",required:!1},t.a=o},704:function(e,t,r){"use strict";var n=r(16),a=r(35),i=r(2),c=r(36),l=r.n(c),s={generic:function(e){return a.c().label(e)},string:function(e,t){t=t||{};var r=a.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),t.matches&&(r=r.matches(t.matches)),r},boolean:function(e,t){return a.b().default(!1).label(e)},relationToOne:function(e,t){t=t||{};var r=a.c().nullable(!0).label(e).transform((function(e,t){return t?t.id:null}));return t.required&&(r=r.required()),r},stringArray:function(e,t){t=t||{};var r=a.a().compact().ensure().of(a.h().transform((function(e,t){return""===t?null:e})).trim()).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},relationToMany:function(e,t){t=t||{};var r=a.a().nullable(!0).label(e).transform((function(e,t){return t&&t.length?t.map((function(e){return e.id})):[]}));return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},integer:function(e,t){t=t||{};var r=a.d().transform((function(e,t){return""===t?null:e})).integer().nullable(!0).label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),r},images:function(e,t){t=t||{};var r=a.a().nullable(!0).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},files:function(e,t){t=t||{};var r=a.a().compact().ensure().nullable(!0).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},enumerator:function(e,t){t=t||{};var r=a.h().transform((function(e,t){return""===t?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(n.a)(t.options||[])));return t.required&&(r=r.required(Object(i.d)("validation.string.selected"))),r},email:function(e,t){t=t||{};var r=a.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e).email();return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),t.matches&&(r=r.matches(t.matches)),r},decimal:function(e,t){t=t||{};var r=a.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),r},datetime:function(e,t){t=t||{};var r=a.c().nullable(!0).label(e).transform((function(e,t){return e?l()(t,"YYYY-MM-DD HH:mm").toISOString():null}));return t.required&&(r=r.required()),r},date:function(e,t){t=t||{};var r=a.c().nullable(!0).label(e).test("is-date",Object(i.d)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?l()(e).format("YYYY-MM-DD"):null}));return t.required&&(r=r.required()),r}};t.a=s},706:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(14),a=r(15),i=function(){function e(){Object(n.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,t,r,n){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!n&&!r[e])return null;var c=t[e];return(null===c||void 0===c||null===(a=c[0])||void 0===a?void 0:a.message)||(null===c||void 0===c?void 0:c.message)||c||null}}]),e}()},708:function(e,t,r){"use strict";var n=r(24),a=r(105),i=(r(6),r(110)),c=r(13);t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(r,l){var s=0===l,o=e.items.length-1===l;return Object(c.jsxs)("li",{className:"".concat(o?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!s&&Object(c.jsx)(a.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:n.d}),t(r)?Object(c.jsx)(i.a,{className:"hover:underline",to:r[1],children:r[0]}):r[0]]},r[0])}))})}},712:function(e,t,r){"use strict";r(6);var n=r(13);t.a=function(){return Object(n.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(n.jsx)("div",{className:"spinner"})})}},786:function(e,t,r){"use strict";var n=r(215),a=r(6),i=r(701),c=r(706),l=r(692),s=r(13);function o(e){var t=Object(a.useState)(Object(l.a)()),r=Object(n.a)(t,1)[0],o=e.label,d=e.name,u=e.hint,m=e.required,b=e.externalErrorMessage,j=Object(i.d)(),f=j.register,x=j.errors,g=j.formState,h=g.touched,O=g.isSubmitted,v=c.a.errorMessage(d,x,h,O,b);return Object(s.jsxs)("div",{children:[Boolean(o)&&Object(s.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:r,children:[o," ",m?Object(s.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(s.jsx)("div",{className:"mt-1",children:Object(s.jsxs)("div",{className:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in",children:[Object(s.jsx)("input",{type:"checkbox",id:r,name:d,ref:f,onChange:function(t){e.onChange&&e.onChange(t.target.checked)},onBlur:function(t){e.onBlur&&e.onBlur(t)},className:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"}),Object(s.jsx)("label",{htmlFor:r,className:"toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"})]})}),Object(s.jsx)("div",{className:"text-red-600 text-sm mt-2",children:v}),Boolean(u)&&Object(s.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:u})]})}o.defaultProps={},t.a=o}}]);