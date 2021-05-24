(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[31],{1039:function(e,t,r){"use strict";r.r(t);var n=r(215),a=r(6),i=r(30),l=r(32),o=r(2),c=r(138),s=r(4),d=function(e){return e.wallet.form},u=Object(s.a)([d],(function(e){return e.record})),m={selectInitLoading:Object(s.a)([d],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(s.a)([d],(function(e){return Boolean(e.saveLoading)})),selectRecord:u,selectRaw:d},b=r(7),f=r(0),j=r(702),x=r(24),g=r(105),O=r(705),h=r(701),v=r(704),p=r(703),y=r(901),w=r(35),k=r(13),q=w.e().shape({totalCredits:v.a.decimal(Object(o.d)("entities.wallet.fields.totalCredits"),{min:0}),aipettoPoints:v.a.integer(Object(o.d)("entities.wallet.fields.aipettoPoints"),{min:0})});var N=function(e){var t=e.saveLoading,r=Object(a.useState)((function(){var t=e.record||{};return{totalCredits:t.totalCredits,aipettoPoints:t.aipettoPoints}})),i=Object(n.a)(r,1)[0],l=Object(h.c)({resolver:Object(O.yupResolver)(q),mode:"all",defaultValues:i}),c=function(t){var r;e.onSubmit(null===(r=e.record)||void 0===r?void 0:r.id,t)};return Object(k.jsx)(h.a,Object(f.a)(Object(f.a)({},l),{},{children:Object(k.jsxs)("form",{onSubmit:l.handleSubmit(c),children:[Object(k.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md",children:Object(k.jsx)(p.a,{name:"totalCredits",label:Object(o.d)("entities.wallet.fields.totalCredits"),required:!1,autoFocus:!0})}),Object(k.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md mt-4",children:Object(k.jsx)(y.a,{name:"aipettoPoints",label:Object(o.d)("entities.wallet.fields.aipettoPoints"),required:!1})}),Object(k.jsxs)("div",{className:"pt-4",children:[Object(k.jsxs)("button",{className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",disabled:t,type:"button",onClick:l.handleSubmit(c),children:[Object(k.jsx)(g.a,{className:"mr-2",icon:j.e}),Object(o.d)("common.save")]}),Object(k.jsxs)("button",{disabled:t,onClick:function(){Object.keys(i).forEach((function(e){l.setValue(e,i[e])}))},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(k.jsx)(g.a,{className:"mr-2",icon:x.t}),Object(o.d)("common.reset")]}),e.onCancel?Object(k.jsxs)("button",{disabled:t,onClick:function(){return e.onCancel()},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(k.jsx)(g.a,{className:"mr-2",icon:x.s}),Object(o.d)("common.cancel")]}):null]})]})}))},C=r(708),S=r(712);t.default=function(e){var t=Object(a.useState)(!1),r=Object(n.a)(t,2),s=r[0],d=r[1],u=Object(i.d)(),f=Object(l.h)(),j=Object(i.e)(m.selectInitLoading),x=Object(i.e)(m.selectSaveLoading),g=Object(i.e)(m.selectRecord),O=Boolean(f.params.id),h=O?Object(o.d)("entities.wallet.edit.title"):Object(o.d)("entities.wallet.new.title");return Object(a.useEffect)((function(){u(c.a.doInit(f.params.id)),d(!0)}),[u,f.params.id]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(C.a,{items:[[Object(o.d)("dashboard.menu"),"/network"],[Object(o.d)("entities.wallet.menu"),"/wallet"],[h]]}),Object(k.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(k.jsx)("h1",{className:"text-lg font-medium mb-6",children:h}),j&&Object(k.jsx)(S.a,{}),s&&!j&&Object(k.jsx)(N,{saveLoading:x,initLoading:j,record:g,isEditing:O,onSubmit:function(e,t){u(O?c.a.doUpdate(e,t):c.a.doCreate(t))},onCancel:function(){return Object(b.b)().push("/wallet")}})]})]})}},703:function(e,t,r){"use strict";var n=r(215),a=r(6),i=r(701),l=r(706),o=r(692),c=r(13);function s(e){var t=Object(a.useState)(Object(o.a)()),r=Object(n.a)(t,1)[0],s=e.label,d=e.name,u=e.hint,m=e.type,b=e.placeholder,f=e.autoFocus,j=e.autoComplete,x=e.required,g=e.externalErrorMessage,O=e.disabled,h=e.endAdornment,v=Object(i.d)(),p=v.register,y=v.errors,w=v.formState,k=w.touched,q=w.isSubmitted,N=l.a.errorMessage(d,y,k,q,g);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Boolean(s)&&Object(c.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:r,children:[s," ",x?Object(c.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(c.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(c.jsx)("input",{id:r,name:d,type:m,ref:p,onChange:function(t){e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},placeholder:b||void 0,autoFocus:f||void 0,autoComplete:j||void 0,disabled:O,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(N?"border-red-400 text-red-600":"")}),h&&Object(c.jsx)("span",{className:"ml-2 text-gray-700",children:h})]})]}),Object(c.jsx)("div",{className:"text-red-600 text-sm mt-2",children:N}),Boolean(u)&&Object(c.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:u})]})}s.defaultProps={type:"text",required:!1},t.a=s},704:function(e,t,r){"use strict";var n=r(16),a=r(35),i=r(2),l=r(36),o=r.n(l),c={generic:function(e){return a.c().label(e)},string:function(e,t){t=t||{};var r=a.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),t.matches&&(r=r.matches(t.matches)),r},boolean:function(e,t){return a.b().default(!1).label(e)},relationToOne:function(e,t){t=t||{};var r=a.c().nullable(!0).label(e).transform((function(e,t){return t?t.id:null}));return t.required&&(r=r.required()),r},stringArray:function(e,t){t=t||{};var r=a.a().compact().ensure().of(a.h().transform((function(e,t){return""===t?null:e})).trim()).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},relationToMany:function(e,t){t=t||{};var r=a.a().nullable(!0).label(e).transform((function(e,t){return t&&t.length?t.map((function(e){return e.id})):[]}));return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},integer:function(e,t){t=t||{};var r=a.d().transform((function(e,t){return""===t?null:e})).integer().nullable(!0).label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),r},images:function(e,t){t=t||{};var r=a.a().nullable(!0).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},files:function(e,t){t=t||{};var r=a.a().compact().ensure().nullable(!0).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},enumerator:function(e,t){t=t||{};var r=a.h().transform((function(e,t){return""===t?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(n.a)(t.options||[])));return t.required&&(r=r.required(Object(i.d)("validation.string.selected"))),r},email:function(e,t){t=t||{};var r=a.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e).email();return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),t.matches&&(r=r.matches(t.matches)),r},decimal:function(e,t){t=t||{};var r=a.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),r},datetime:function(e,t){t=t||{};var r=a.c().nullable(!0).label(e).transform((function(e,t){return e?o()(t,"YYYY-MM-DD HH:mm").toISOString():null}));return t.required&&(r=r.required()),r},date:function(e,t){t=t||{};var r=a.c().nullable(!0).label(e).test("is-date",Object(i.d)("validation.mixed.default"),(function(e){return!e||o()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?o()(e).format("YYYY-MM-DD"):null}));return t.required&&(r=r.required()),r}};t.a=c},706:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(14),a=r(15),i=function(){function e(){Object(n.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,t,r,n){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!n&&!r[e])return null;var l=t[e];return(null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),e}()},708:function(e,t,r){"use strict";var n=r(24),a=r(105),i=(r(6),r(110)),l=r(13);t.a=function(e){var t=function(e){return e.length>1};return Object(l.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(r,o){var c=0===o,s=e.items.length-1===o;return Object(l.jsxs)("li",{className:"".concat(s?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!c&&Object(l.jsx)(a.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:n.d}),t(r)?Object(l.jsx)(i.a,{className:"hover:underline",to:r[1],children:r[0]}):r[0]]},r[0])}))})}},712:function(e,t,r){"use strict";r(6);var n=r(13);t.a=function(){return Object(n.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(n.jsx)("div",{className:"spinner"})})}},901:function(e,t,r){"use strict";var n=r(215),a=r(6),i=r(701),l=r(706),o=r(692),c=r(13);function s(e){var t=Object(a.useState)(Object(o.a)()),r=Object(n.a)(t,1)[0],s=e.label,d=e.name,u=e.hint,m=e.type,b=e.placeholder,f=e.autoFocus,j=e.autoComplete,x=e.required,g=e.externalErrorMessage,O=e.disabled,h=Object(i.d)(),v=h.register,p=h.errors,y=h.formState,w=y.touched,k=y.isSubmitted,q=l.a.errorMessage(d,p,w,k,g);return Object(c.jsxs)("div",{children:[Boolean(s)&&Object(c.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:r,children:[s," ",x?Object(c.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(c.jsx)("div",{className:"flex flex-nowrap items-baseline",children:Object(c.jsx)("input",{id:r,name:d,type:m,ref:v,onChange:function(t){e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},placeholder:b||void 0,autoFocus:f||void 0,autoComplete:j||void 0,disabled:O,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(q?"border-red-400 text-red-600":"")})}),Object(c.jsx)("div",{className:"text-red-600 text-sm mt-2",children:q}),Boolean(u)&&Object(c.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:u})]})}s.defaultProps={type:"number",required:!1},t.a=s}}]);