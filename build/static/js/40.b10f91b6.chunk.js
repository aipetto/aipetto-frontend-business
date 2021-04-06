(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[40],{557:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(11),a=r(12),o=function(){function e(){Object(n.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,t,r,n){var a,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(o)return o;if(!n&&!r[e])return null;var c=t[e];return(null===c||void 0===c||null===(a=c[0])||void 0===a?void 0:a.message)||(null===c||void 0===c?void 0:c.message)||c||null}}]),e}()},558:function(e,t,r){"use strict";var n=r(25),a=r(71),o=(r(4),r(75)),c=r(7);t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(r,i){var s=0===i,l=e.items.length-1===i;return Object(c.jsxs)("li",{className:"".concat(l?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!s&&Object(c.jsx)(a.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:n.d}),t(r)?Object(c.jsx)(o.a,{className:"hover:underline",to:r[1],children:r[0]}):r[0]]},r[0])}))})}},561:function(e,t,r){"use strict";var n=r(135),a=r(4),o=r(556),c=r(557),i=r(672),s=r(7);function l(e){var t=Object(a.useState)(Object(i.a)()),r=Object(n.a)(t,1)[0],l=e.label,d=e.name,u=e.hint,b=e.type,m=e.placeholder,j=e.autoFocus,g=e.autoComplete,f=e.required,x=e.externalErrorMessage,p=e.disabled,h=e.endAdornment,O=Object(o.d)(),y=O.register,v=O.errors,k=O.formState,w=k.touched,N=k.isSubmitted,C=c.a.errorMessage(d,v,w,N,x);return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Boolean(l)&&Object(s.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:r,children:[l," ",f?Object(s.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(s.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(s.jsx)("input",{id:r,name:d,type:b,ref:y,onChange:function(t){e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},placeholder:m||void 0,autoFocus:j||void 0,autoComplete:g||void 0,disabled:p,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(C?"border-red-400 text-red-600":"")}),h&&Object(s.jsx)("span",{className:"ml-2 text-gray-700",children:h})]})]}),Object(s.jsx)("div",{className:"text-red-600 text-sm mt-2",children:C}),Boolean(u)&&Object(s.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:u})]})}l.defaultProps={type:"text",required:!1},t.a=l},562:function(e,t,r){"use strict";var n=r(25),a=r(71),o=(r(4),r(112)),c=r.n(o),i=r(7);t.a=function(e){return c.a.createPortal(Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",tabIndex:-1,onClick:e.onClose,children:Object(i.jsx)("div",{className:"relative my-6 mx-auto w-96",onClick:function(e){return e.stopPropagation()},children:Object(i.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(i.jsxs)("div",{className:"flex items-start justify-between p-5 rounded-t",children:[Object(i.jsx)("div",{className:"text-lg font-semibold",children:e.title}),Object(i.jsx)("button",{type:"button",className:"ml-auto bg-transparent border-0 text-gray-900 float-right text-lg leading-none font-semibold outline-none focus:outline-none",onClick:e.onClose,children:Object(i.jsx)("span",{className:"bg-transparent text-gray-700 h-6 w-6 text-lg block outline-none focus:outline-none",children:Object(i.jsx)(a.a,{icon:n.s})})})]}),Object(i.jsxs)("div",{className:"flex items-center justify-end p-6 rounded-b",children:[Object(i.jsx)("button",{type:"button",className:"mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",onClick:e.onClose,children:e.cancelText}),Object(i.jsx)("button",{type:"button",onClick:e.onConfirm,className:"text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",children:e.okText})]})]})})}),Object(i.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}),document.getElementById("modal-root"))}},563:function(e,t,r){"use strict";r(4);var n=r(7);t.a=function(){return Object(n.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(n.jsx)("div",{className:"spinner"})})}},573:function(e,t,r){"use strict";var n=r(601),a=(r(4),r(2)),o=r(7);t.a=function(e){var t=function(t,r){e.onChange({current:Number(t),pageSize:Number(r)})},r=Object(a.a)().dictionary.pagination,c=e.pagination,i=e.disabled,s=e.showTotal,l=c.current,d=c.pageSize,u=c.total;return Object(o.jsxs)("div",{className:"flex items-center justify-end mt-2",children:[Object(o.jsx)(n.a,{pageSize:Number(d),current:l,onChange:t,total:u,locale:r,showTotal:s||void 0}),Object(o.jsxs)("select",{disabled:!u||i,style:{height:"32px"},className:"ml-2 cursor-pointer text-sm w-28 inline-block px-4 py-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring",value:Number(d),onChange:function(e){return t(1,e.target.value)},children:[Object(o.jsxs)("option",{value:10,children:["10 ",Object(a.d)("pagination.items_per_page")]}),Object(o.jsxs)("option",{value:20,children:["20 ",Object(a.d)("pagination.items_per_page")]}),Object(o.jsxs)("option",{value:30,children:["30 ",Object(a.d)("pagination.items_per_page")]}),Object(o.jsxs)("option",{value:40,children:["40 ",Object(a.d)("pagination.items_per_page")]})]})]})}},574:function(e,t,r){"use strict";var n,a=r(202),o=r(25),c=r(71),i=(r(4),r(203)),s=r(7),l=i.a.th(n||(n=Object(a.a)(["\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 0.15s ease-in;\n\n  &:hover,\n  &:focus {\n    opacity: 0.5;\n    transition: opacity 0.15s ease-in;\n  }\n\n  &:active {\n    opacity: 0.8;\n    transition: opacity 0.15s ease-out;\n  }\n"])));t.a=function(e){var t=e.sorter,r=e.onSort,n=e.name,a=e.label,i=e.hasRows,d=e.children,u=e.align,b=void 0===u?"left":u;return i&&r?Object(s.jsx)(l,{onClick:function(){return r(n)},className:"".concat(e.className||""," whitespace-nowrap align-middle px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 uppercase tracking-wider"),style:{textAlign:b},scope:"col",children:Object(s.jsxs)("div",{className:"flex",style:{justifyContent:"right"===b?"flex-end":"center"===b?"center":"flex-start"},children:[d||a||"",t.field===n&&"descend"===t.order&&Object(s.jsx)(c.a,{className:"ml-2",icon:o.q}),t.field===n&&"ascend"===t.order&&Object(s.jsx)(c.a,{className:"ml-2",icon:o.p})]})}):Object(s.jsx)("th",{className:"".concat(e.className||""," whitespace-nowrap align-middle px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200  text-xs font-semibold text-gray-600 uppercase tracking-wider"),style:{textAlign:b},scope:"col",children:d||a||""})}},603:function(e,t,r){"use strict";var n=r(76),a=r.n(n),o=r(2),c={enumerator:function(e){return function(t){return t?Object(o.d)("".concat(e,".").concat(t)):null}},enumeratorMultiple:function(e){return function(t){return t?t.map((function(t){return Object(o.d)("".concat(e,".").concat(t))})).join(", "):null}},generic:function(){return function(e){return e}},stringArray:function(){return function(e){return(e||[]).join(", ")}},json:function(){return function(e){return e?JSON.stringify(e,null,2):null}},decimal:function(e){return function(t){return i(t,e)}},boolean:function(e,t){return function(r){return null==r?null:Boolean(r)?e||Object(o.d)("common.yes"):t||Object(o.d)("common.no")}},relationToOne:function(){return function(e){return e&&e.label||null}},relationToMany:function(){return function(e){return(e||[]).map((function(e){return e.label})).join(", ")}},filesOrImages:function(){return function(e){return(e||[]).map((function(e){return e.downloadUrl})).join(" ")}},date:function(){return function(e){return s(e)}},dateRange:function(){return function(e){if(!e||!e.length)return null;var t=e[0],r=2===e.length&&e[1];return t||r?t&&!r?"> ".concat(s(t)):!t&&r?"< ".concat(s(r)):"".concat(s(t)," - ").concat(s(r)):null}},datetime:function(){return function(e){return l(e)}},datetimeRange:function(){return function(e){if(!e||!e.length)return null;var t=e[0],r=2===e.length&&e[1];return t||r?t&&!r?"> ".concat(l(t)):!t&&r?"< ".concat(l(r)):"".concat(l(t)," - ").concat(l(r)):null}},decimalRange:function(e){return function(t){if(!t||!t.length)return null;var r=t[0],n=2===t.length&&t[1];return null==r&&null==n?null:null!=r&&null==n?"> ".concat(i(r,e)):null==r&&null!=n?"< ".concat(i(n,e)):"".concat(i(r,e)," - ").concat(i(n,e))}},range:function(){return function(e){if(!e||!e.length)return null;var t=e[0],r=2===e.length&&e[1];return null!=t&&""!==t||null!=r&&""!==r?null==t||null!=r&&""!==r?null!=t&&""!==t||null==r?"".concat(t," - ").concat(r):"< ".concat(r):"> ".concat(t):null}}};function i(e,t){return e?t?Number(e).toFixed(t):Number(e):null}function s(e){return e?a()(e).format("YYYY-MM-DD"):null}function l(e){return e?a()(e).format("YYYY-MM-DD HH:mm"):null}t.a=c},604:function(e,t,r){"use strict";var n=r(33),a=r(2),o=r(76),c=r.n(o),i={generic:function(e){return n.c().label(e)},string:function(e){return n.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e)},stringArray:function(e){return n.a().compact().ensure().of(n.h().transform((function(e,t){return""===t?null:e})).trim()).label(e).transform((function(e,t){return t?Array.isArray(t)?t:[t]:t}))},boolean:function(e){return n.b().nullable(!0).label(e)},relationToOne:function(e){return n.c().label(e).transform((function(e,t){return t?t.id:null}))},relationToMany:function(e){return n.c().label(e).transform((function(e,t){return t&&t.length?t.map((function(e){return e.id})):[]}))},json:function(e){return n.c().label(e)},integer:function(e){return n.d().transform((function(e,t){return""===t?null:e})).integer().nullable(!0).label(e)},integerRange:function(e){return n.c().label(e)},enumerator:function(e){return n.h().transform((function(e,t){return""===t?null:e})).label(e).nullable(!0)},email:function(e){return n.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e)},decimal:function(e){return n.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e)},decimalRange:function(e){return n.a().ensure().compact().of(n.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e)).label(e)},datetime:function(e){return n.c().nullable(!0).label(e).transform((function(e,t){return t?c()(t,"YYYY-MM-DD HH:mm").toISOString():null}))},datetimeRange:function(e){return n.c().label(e)},date:function(e){return n.c().nullable(!0).label(e).test("is-date",Object(a.d)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()}))},dateRange:function(e){return n.a().ensure().compact().of(n.c().nullable(!0).label(e).test("is-date",Object(a.d)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?c()(e).format("YYYY-MM-DD"):null}))).label(e)}};t.a=i},605:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(25),a=r(71),o=(r(4),r(2)),c=r(7);function i(e){var t=e.values,r=e.renders,i=e.onClick,s=e.onRemove,l=Object.keys(t||{}).map((function(e){return r[e]?{key:e,label:r[e].label,value:r[e].render(t[e])}:{value:null}})).filter((function(e){return e.value||0===e.value||!1===e.value}));return Object(c.jsxs)("div",{onClick:i,className:"".concat(e.expanded?"border-gray-200 dark:border-gray-600 border-b mb-4":""," flex items-center justify-between cursor-pointer p-4"),children:[!l.length||e.expanded?Object(c.jsx)("div",{className:"flex items-center  font-medium",children:Object(o.d)("common.filters")}):Object(c.jsxs)("div",{className:"flex items-center ",children:[Object(c.jsx)("span",{className:"font-medium",children:Object(o.d)("common.filters")}),":",Object(c.jsx)("span",{className:"ml-2 flex justify-start flex-wrap",children:l.map((function(e){return Object(c.jsxs)("span",{className:"bg-gray-700 text-white p-1 text-xs rounded-md flex items-center mr-1",style:{cursor:"default"},onClick:function(e){e.stopPropagation()},children:["".concat(e.label,": ").concat(e.value)," ",s&&Object(c.jsx)(a.a,{onClick:s?function(){return s(e.key)}:void 0,className:"text-base rounded-full ml-1 bg-gray-900 cursor-pointer",style:{padding:2},icon:n.s})]},e.label)}))})]}),Object(c.jsx)("div",{children:e.expanded?Object(c.jsx)(a.a,{icon:n.d}):Object(c.jsx)(a.a,{icon:n.c})})]})}},652:function(e,t,r){"use strict";var n=r(5),a=r(31),o=r(50),c=r(130),i=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.productRead)})),s=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.productEdit)})),l=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.productCreate)})),d=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.productImport)})),u={selectPermissionToRead:i,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.productDestroy)})),selectPermissionToImport:d};t.a=u},668:function(e,t,r){"use strict";r(4);var n=r(214),a=r(7);t.a=function(e){var t=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};if(!t().length||!t()[0].downloadUrl)return Object(a.jsx)(n.a,{shape:"square",size:"large"});var r=t()[0].downloadUrl;return Object(a.jsx)(n.a,{shape:"square",size:"large",src:r})}},674:function(e,t,r){"use strict";var n=r(5),a={selectLoading:Object(n.a)([function(e){return e.product.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},691:function(e,t,r){"use strict";var n=r(135),a=r(4),o=r(556),c=r(557),i=r(672),s=r(7);function l(e){var t=Object(a.useState)(Object(i.a)()),r=Object(n.a)(t,1)[0],l=e.label,d=e.name,u=e.hint,b=e.placeholder,m=e.autoFocus,j=e.autoComplete,g=e.required,f=e.externalErrorMessage,x=Object(o.d)(),p=x.register,h=x.errors,O=x.formState,y=O.touched,v=O.isSubmitted,k=x.setValue,w=x.watch,N=c.a.errorMessage(d,h,y,v,f),C=w(d);Object(a.useEffect)((function(){p({name:d})}),[p,d]);var S=function(){return C?Array.isArray(!C)?null:C.length?C[0]:null:null},R=function(){return C?Array.isArray(!C)||C.length<2?null:C[1]:null};return Object(s.jsxs)("div",{children:[Boolean(l)&&Object(s.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:"".concat(r,"Start"),children:[l," ",g?Object(s.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(s.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(s.jsx)("input",{type:"text",id:"".concat(r,"Start"),name:"".concat(d,"Start"),onChange:function(t){return r=t.target.value,k(d,[r,R()],{shouldValidate:!0}),void(e.onChange&&e.onChange([r,R()]));var r},onBlur:function(t){e.onBlur&&e.onBlur(t)},value:S(),placeholder:b||void 0,autoFocus:m||void 0,autoComplete:j||void 0,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(N?"border-red-400 text-red-600":"")}),Object(s.jsx)("div",{className:"text-gray-300",style:{flexShrink:1,marginLeft:"8px",marginRight:"8px"},children:"~"}),Object(s.jsx)("input",{style:{width:"100%"},type:"text",id:"".concat(r,"End"),name:"".concat(d,"End"),onChange:function(t){return r=t.target.value,k(d,[S(),r],{shouldValidate:!0}),void(e.onChange&&e.onChange([r,S()]));var r},onBlur:function(t){e.onBlur&&e.onBlur(t)},value:R(),placeholder:b||void 0,autoFocus:m||void 0,autoComplete:j||void 0,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(N?"border-red-400 text-red-600":"")})]}),Object(s.jsx)("div",{className:"text-red-600 text-sm mt-2",children:N}),Boolean(u)&&Object(s.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:u})]})}l.defaultProps={required:!1},t.a=l},767:function(e,t,r){"use strict";r.r(t);var n=r(4),a=r(2),o=r(0),c=r(135),i=r(25),s=r(71),l=r(38),d=r(102),u=r(27),b=r(556),m=r(604),j=r(33),g=r(566),f=r(605),x=r(603),p=r(561),h=r(691),O=r(7),y=j.e().shape({name:m.a.string(Object(a.d)("entities.product.fields.name")),unitPriceRange:m.a.decimalRange(Object(a.d)("entities.product.fields.unitPriceRange"))}),v={name:null,unitPriceRange:[]},k={name:{label:Object(a.d)("entities.product.fields.name"),render:x.a.generic()},unitPriceRange:{label:Object(a.d)("entities.product.fields.unitPriceRange"),render:x.a.decimalRange(2)}};var w=function(e){var t=Object(u.e)(d.a.selectRawFilter),r=Object(u.d)(),m=Object(n.useState)(!1),j=Object(c.a)(m,2),x=j[0],w=j[1],N=Object(n.useState)((function(){return Object(o.a)(Object(o.a)({},v),t)})),C=Object(c.a)(N,1)[0],S=Object(b.c)({resolver:Object(g.yupResolver)(y),defaultValues:C,mode:"all"});Object(n.useEffect)((function(){r(l.a.doFetch(y.cast(C),t))}),[r]);var R=function(e){var t=S.getValues();r(l.a.doFetch(e,t)),w(!1)};return Object(O.jsxs)("div",{className:"border-gray-200 dark:border-gray-600 border rounded-md mb-2",children:[Object(O.jsx)(f.a,{onClick:function(){w(!x)},renders:k,values:t,expanded:x,onRemove:function(e){return S.setValue(e,v[e]),S.handleSubmit(R)()}}),Object(O.jsx)("div",{className:"".concat(x?"block":"hidden"),children:Object(O.jsx)(b.a,Object(o.a)(Object(o.a)({},S),{},{children:Object(O.jsxs)("form",{onSubmit:S.handleSubmit(R),children:[Object(O.jsxs)("div",{className:"pl-4 pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4",children:[Object(O.jsx)(p.a,{name:"name",label:Object(a.d)("entities.product.fields.name")}),Object(O.jsx)(h.a,{name:"unitPriceRange",label:Object(a.d)("entities.product.fields.unitPriceRange")})]}),Object(O.jsxs)("div",{className:"px-4 py-2 text-right",children:[Object(O.jsxs)("button",{className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"submit",disabled:e.loading,children:[Object(O.jsx)(s.a,{className:"mr-2",icon:i.n}),Object(a.d)("common.search")]}),Object(O.jsxs)("button",{className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",onClick:function(){Object.keys(v).forEach((function(e){S.setValue(e,v[e])})),r(l.a.doReset()),w(!1)},disabled:e.loading,children:[Object(O.jsx)(s.a,{className:"mr-2",icon:i.t}),Object(a.d)("common.reset")]})]})]})}))})]})},N=r(560),C=r(75),S=r(652),R=r(116),P=r(674),T=r(574),Y=r(562),D=r(563),M=r(573),A=r(668);var B=function(e){var t=Object(n.useState)(null),r=Object(c.a)(t,2),o=r[0],b=r[1],m=Object(u.d)(),j=Object(u.e)(d.a.selectLoading),g=Object(u.e)(P.a.selectLoading),f=j||g,x=Object(u.e)(d.a.selectRows),p=Object(u.e)(d.a.selectPagination),h=Object(u.e)(d.a.selectSelectedKeys),y=Object(u.e)(d.a.selectHasRows),v=Object(u.e)(d.a.selectSorter),k=Object(u.e)(d.a.selectIsAllSelected),w=Object(u.e)(S.a.selectPermissionToEdit),B=Object(u.e)(S.a.selectPermissionToDestroy),F=function(){b(null)},E=function(e){var t=v.field===e&&"ascend"===v.order?"descend":"ascend";m(l.a.doChangeSort({field:e,order:t}))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"table-responsive shadow rounded-lg dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200 dark:border",children:Object(O.jsxs)("table",{className:"border-collapse min-w-full leading-normal",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(T.a,{children:y&&Object(O.jsx)("input",{type:"checkbox",className:"cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring",checked:Boolean(k),onChange:function(){m(l.a.doToggleAllSelected())}})}),Object(O.jsx)(T.a,{onSort:E,hasRows:y,sorter:v,name:"name",label:Object(a.d)("entities.product.fields.name")}),Object(O.jsx)(T.a,{onSort:E,hasRows:y,sorter:v,name:"unitPrice",label:Object(a.d)("entities.product.fields.unitPrice"),align:"right"}),Object(O.jsx)(T.a,{label:Object(a.d)("entities.product.fields.photos")}),Object(O.jsx)(T.a,{})]})}),Object(O.jsxs)("tbody",{children:[f&&Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:100,children:Object(O.jsx)(D.a,{})})}),!f&&!y&&Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:100,children:Object(O.jsx)("div",{className:"flex justify-center p-5",children:Object(a.d)("table.noData")})})}),!f&&x.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"w-12 border-b border-gray-200 dark:border-gray-800",scope:"row",children:Object(O.jsx)("input",{type:"checkbox",className:"cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring",checked:h.includes(e.id),onChange:function(){return t=e.id,void m(l.a.doToggleOneSelected(t));var t}})}),Object(O.jsx)("td",{className:"whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm",children:e.name}),Object(O.jsx)("td",{align:"right",className:"whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm",children:e.unitPrice||0===e.unitPrice?Number(e.unitPrice).toFixed(2):e.unitPrice}),Object(O.jsx)("td",{className:"whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm",children:Object(O.jsx)(A.a,{value:e.photos})}),Object(O.jsxs)("td",{className:"w-56 whitespace-nowrap border-b px-5 py-5 border-gray-200 dark:border-gray-800",align:"right",children:[Object(O.jsx)(C.a,{className:"inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",to:"/product/".concat(e.id),title:Object(a.d)("common.view"),children:Object(O.jsx)(s.a,{icon:i.n})}),w&&Object(O.jsx)(C.a,{className:"inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",to:"/product/".concat(e.id,"/edit"),title:Object(a.d)("common.edit"),children:Object(O.jsx)(s.a,{icon:N.a})}),B&&Object(O.jsx)("button",{className:"inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",type:"button",onClick:function(){return t=e.id,void b(t);var t},title:Object(a.d)("common.destroy"),children:Object(O.jsx)(s.a,{icon:N.f})})]})]},e.id)}))]})]})}),Object(O.jsx)(M.a,{onChange:function(e){m(l.a.doChangePagination(e))},disabled:f,pagination:p}),o&&Object(O.jsx)(Y.a,{title:Object(a.d)("common.areYouSure"),onConfirm:function(){return e=o,F(),void m(R.a.doDestroy(e));var e},onClose:function(){return F()},okText:Object(a.d)("common.yes"),cancelText:Object(a.d)("common.no")})]})},F=r(602),E=r(78);var V=function(e){var t=Object(n.useState)(!1),r=Object(c.a)(t,2),o=r[0],b=r[1],m=Object(u.d)(),j=Object(u.e)(d.a.selectSelectedKeys),g=Object(u.e)(d.a.selectLoading),f=Object(u.e)(P.a.selectLoading),x=Object(u.e)(d.a.selectExportLoading),p=Object(u.e)(d.a.selectHasRows),h=Object(u.e)(E.a.selectPermissionToRead),y=Object(u.e)(S.a.selectPermissionToDestroy),v=Object(u.e)(S.a.selectPermissionToCreate),k=Object(u.e)(S.a.selectPermissionToImport),w=function(){b(!0)},T=function(){b(!1)},D=function(){m(l.a.doExport())};return Object(O.jsxs)("div",{className:"mb-4",children:[v&&Object(O.jsx)(C.a,{to:"/product/new",children:Object(O.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",children:[Object(O.jsx)(s.a,{className:"mr-2",icon:i.m}),Object(a.d)("common.new")]})}),k&&Object(O.jsx)(C.a,{to:"/product/importer",children:Object(O.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",children:[Object(O.jsx)(s.a,{className:"mr-2",icon:i.u}),Object(a.d)("common.import")]})}),function(){if(!y)return null;var e=!j.length||g,t=Object(O.jsxs)("button",{disabled:e||f,className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",onClick:w,children:[Object(O.jsx)(s.a,{className:"mr-2",icon:N.f}),Object(a.d)("common.destroy")]});return e?Object(O.jsxs)("span",{"data-tip":Object(a.d)("common.mustSelectARow"),"data-tip-disable":!e,"data-for":"product-list-toolbar-destroy-tooltip",children:[t,Object(O.jsx)(F.a,{id:"product-list-toolbar-destroy-tooltip"})]}):t}(),h&&Object(O.jsx)(C.a,{to:"/audit-logs?entityNames=product",children:Object(O.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(O.jsx)(s.a,{className:"mr-2",icon:i.i}),Object(a.d)("auditLog.menu")]})}),function(){var e=!p||g,t=Object(O.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",disabled:e||x,onClick:D,type:"button",children:[Object(O.jsx)(s.a,{className:"mr-2",icon:N.d}),Object(a.d)("common.export")]});return e?Object(O.jsxs)("span",{"data-tip":Object(a.d)("common.noDataToExport"),"data-tip-disable":!e,"data-for":"product-list-toolbar-export-tooltip",children:[t,Object(O.jsx)(F.a,{id:"product-list-toolbar-export-tooltip"})]}):t}(),o&&Object(O.jsx)(Y.a,{title:Object(a.d)("common.areYouSure"),onConfirm:function(){return T(),void m(R.a.doDestroyAll(j))},onClose:function(){return T()},okText:Object(a.d)("common.yes"),cancelText:Object(a.d)("common.no")})]})},I=r(558);t.default=function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(I.a,{items:[[Object(a.d)("dashboard.menu"),"/"],[Object(a.d)("entities.product.menu")]]}),Object(O.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(O.jsx)("h1",{className:" text-lg font-medium mb-6",children:Object(a.d)("entities.product.list.title")}),Object(O.jsx)(V,{}),Object(O.jsx)(w,{}),Object(O.jsx)(B,{})]})]})}}}]);