(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[29],{1052:function(e,t,r){"use strict";r.r(t);var n=r(215),a=r(6),i=r(30),c=r(32),l=r(2),o=r(130),u=r(4),s=function(e){return e.country.form},d=Object(u.a)([s],(function(e){return e.record})),m={selectInitLoading:Object(u.a)([s],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(u.a)([s],(function(e){return Boolean(e.saveLoading)})),selectRecord:d,selectRaw:s},b=r(7),f=r(750),j=r(708),x=r(712),g=r(13);t.default=function(e){var t=Object(a.useState)(!1),r=Object(n.a)(t,2),u=r[0],s=r[1],d=Object(i.d)(),O=Object(c.h)(),h=Object(i.e)(m.selectInitLoading),v=Object(i.e)(m.selectSaveLoading),y=Object(i.e)(m.selectRecord),p=Boolean(O.params.id),k=p?Object(l.d)("entities.country.edit.title"):Object(l.d)("entities.country.new.title");return Object(a.useEffect)((function(){d(o.a.doInit(O.params.id)),s(!0)}),[d,O.params.id]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(j.a,{items:[[Object(l.d)("dashboard.menu"),"/network"],[Object(l.d)("entities.country.menu"),"/country"],[k]]}),Object(g.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(g.jsx)("h1",{className:"text-lg font-medium mb-6",children:k}),h&&Object(g.jsx)(x.a,{}),u&&!h&&Object(g.jsx)(f.a,{saveLoading:v,initLoading:h,record:y,isEditing:p,onSubmit:function(e,t){d(p?o.a.doUpdate(e,t):o.a.doCreate(t))},onCancel:function(){return Object(b.b)().push("/country")}})]})]})}},703:function(e,t,r){"use strict";var n=r(215),a=r(6),i=r(701),c=r(706),l=r(692),o=r(13);function u(e){var t=Object(a.useState)(Object(l.a)()),r=Object(n.a)(t,1)[0],u=e.label,s=e.name,d=e.hint,m=e.type,b=e.placeholder,f=e.autoFocus,j=e.autoComplete,x=e.required,g=e.externalErrorMessage,O=e.disabled,h=e.endAdornment,v=Object(i.d)(),y=v.register,p=v.errors,k=v.formState,q=k.touched,w=k.isSubmitted,N=c.a.errorMessage(s,p,q,w,g);return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Boolean(u)&&Object(o.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:r,children:[u," ",x?Object(o.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(o.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(o.jsx)("input",{id:r,name:s,type:m,ref:y,onChange:function(t){e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},placeholder:b||void 0,autoFocus:f||void 0,autoComplete:j||void 0,disabled:O,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(N?"border-red-400 text-red-600":"")}),h&&Object(o.jsx)("span",{className:"ml-2 text-gray-700",children:h})]})]}),Object(o.jsx)("div",{className:"text-red-600 text-sm mt-2",children:N}),Boolean(d)&&Object(o.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:d})]})}u.defaultProps={type:"text",required:!1},t.a=u},704:function(e,t,r){"use strict";var n=r(16),a=r(35),i=r(2),c=r(36),l=r.n(c),o={generic:function(e){return a.c().label(e)},string:function(e,t){t=t||{};var r=a.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),t.matches&&(r=r.matches(t.matches)),r},boolean:function(e,t){return a.b().default(!1).label(e)},relationToOne:function(e,t){t=t||{};var r=a.c().nullable(!0).label(e).transform((function(e,t){return t?t.id:null}));return t.required&&(r=r.required()),r},stringArray:function(e,t){t=t||{};var r=a.a().compact().ensure().of(a.h().transform((function(e,t){return""===t?null:e})).trim()).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},relationToMany:function(e,t){t=t||{};var r=a.a().nullable(!0).label(e).transform((function(e,t){return t&&t.length?t.map((function(e){return e.id})):[]}));return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},integer:function(e,t){t=t||{};var r=a.d().transform((function(e,t){return""===t?null:e})).integer().nullable(!0).label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),r},images:function(e,t){t=t||{};var r=a.a().nullable(!0).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},files:function(e,t){t=t||{};var r=a.a().compact().ensure().nullable(!0).label(e);return(t.required||t.min)&&(r=r.required()),t.min||0===t.min?r=r.min(t.min):t.required&&(r=r.min(1)),t.max&&(r=r.max(t.max)),r},enumerator:function(e,t){t=t||{};var r=a.h().transform((function(e,t){return""===t?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(n.a)(t.options||[])));return t.required&&(r=r.required(Object(i.d)("validation.string.selected"))),r},email:function(e,t){t=t||{};var r=a.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e).email();return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),t.matches&&(r=r.matches(t.matches)),r},decimal:function(e,t){t=t||{};var r=a.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e);return t.required&&(r=r.required()),(t.min||0===t.min)&&(r=r.min(t.min)),t.max&&(r=r.max(t.max)),r},datetime:function(e,t){t=t||{};var r=a.c().nullable(!0).label(e).transform((function(e,t){return e?l()(t,"YYYY-MM-DD HH:mm").toISOString():null}));return t.required&&(r=r.required()),r},date:function(e,t){t=t||{};var r=a.c().nullable(!0).label(e).test("is-date",Object(i.d)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?l()(e).format("YYYY-MM-DD"):null}));return t.required&&(r=r.required()),r}};t.a=o},706:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(14),a=r(15),i=function(){function e(){Object(n.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,t,r,n){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!n&&!r[e])return null;var c=t[e];return(null===c||void 0===c||null===(a=c[0])||void 0===a?void 0:a.message)||(null===c||void 0===c?void 0:c.message)||c||null}}]),e}()},708:function(e,t,r){"use strict";var n=r(24),a=r(105),i=(r(6),r(110)),c=r(13);t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(r,l){var o=0===l,u=e.items.length-1===l;return Object(c.jsxs)("li",{className:"".concat(u?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!o&&Object(c.jsx)(a.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:n.d}),t(r)?Object(c.jsx)(i.a,{className:"hover:underline",to:r[1],children:r[0]}):r[0]]},r[0])}))})}},712:function(e,t,r){"use strict";r(6);var n=r(13);t.a=function(){return Object(n.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(n.jsx)("div",{className:"spinner"})})}},750:function(e,t,r){"use strict";var n=r(0),a=r(215),i=r(702),c=r(24),l=r(105),o=r(705),u=r(6),s=r(701),d=r(2),m=r(704),b=r(703),f=r(35),j=r(13),x=f.e().shape({name:m.a.string(Object(d.d)("entities.country.fields.name"),{}),initials:m.a.string(Object(d.d)("entities.country.fields.initials"),{})});t.a=function(e){var t=e.saveLoading,r=Object(u.useState)((function(){var t=e.record||{};return{name:t.name,initials:t.initials}})),m=Object(a.a)(r,1)[0],f=Object(s.c)({resolver:Object(o.yupResolver)(x),mode:"all",defaultValues:m}),g=function(t){var r;e.onSubmit(null===(r=e.record)||void 0===r?void 0:r.id,t)};return Object(j.jsx)(s.a,Object(n.a)(Object(n.a)({},f),{},{children:Object(j.jsxs)("form",{onSubmit:f.handleSubmit(g),children:[Object(j.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md",children:Object(j.jsx)(b.a,{name:"name",label:Object(d.d)("entities.country.fields.name"),required:!1,autoFocus:!0})}),Object(j.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md mt-4",children:Object(j.jsx)(b.a,{name:"initials",label:Object(d.d)("entities.country.fields.initials"),required:!1})}),Object(j.jsxs)("div",{className:"pt-4",children:[Object(j.jsxs)("button",{className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",disabled:t,type:"button",onClick:f.handleSubmit(g),children:[Object(j.jsx)(l.a,{className:"mr-2",icon:i.e}),Object(d.d)("common.save")]}),Object(j.jsxs)("button",{disabled:t,onClick:function(){Object.keys(m).forEach((function(e){f.setValue(e,m[e])}))},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(j.jsx)(l.a,{className:"mr-2",icon:c.t}),Object(d.d)("common.reset")]}),e.onCancel?Object(j.jsxs)("button",{disabled:t,onClick:function(){return e.onCancel()},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(j.jsx)(l.a,{className:"mr-2",icon:c.s}),Object(d.d)("common.cancel")]}):null]})]})}))}}}]);