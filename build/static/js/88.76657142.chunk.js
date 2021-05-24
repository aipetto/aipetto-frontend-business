(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[88],{1029:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(30),c=n(32),s=n(2),o=n(267),i=n(4),l=function(e){return e.vaccineTypes.view},u=Object(i.a)([l],(function(e){return e.record})),d={selectLoading:Object(i.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:l},b=n(712),m=n(759),j=n(829),x=n(13);var f=function(e){var t=e.record;return e.loading||!t?Object(x.jsx)(b.a,{}):Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{label:Object(s.d)("entities.vaccineTypes.fields.name"),value:t.name}),Object(x.jsx)(j.a,{label:Object(s.d)("entities.vaccineTypes.fields.country"),value:t.country})]})},y=n(215),g=n(702),v=n(24),O=n(105),h=n(110),p=n(113),w=n(832),T=n(202),C=n(892),k=n(710);var N=function(e){var t=Object(r.useState)(!1),n=Object(y.a)(t,2),c=n[0],o=n[1],i=Object(a.d)(),l=e.match.params.id,u=Object(a.e)(p.a.selectPermissionToRead),d=Object(a.e)(w.a.selectPermissionToEdit),b=Object(a.e)(w.a.selectPermissionToDestroy),m=Object(a.e)(C.a.selectLoading),j=function(){o(!1)};return Object(x.jsxs)("div",{className:"mb-4",children:[d&&Object(x.jsx)(h.a,{to:"/vaccine-types/".concat(l,"/edit"),children:Object(x.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",children:[Object(x.jsx)(O.a,{className:"mr-2",icon:g.a}),Object(s.d)("common.edit")]})}),b&&Object(x.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",disabled:m,onClick:function(){o(!0)},children:[Object(x.jsx)(O.a,{className:"mr-2",icon:g.f}),Object(s.d)("common.destroy")]}),u&&Object(x.jsx)(h.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(x.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(x.jsx)(O.a,{className:"mr-2",icon:v.i}),Object(s.d)("auditLog.menu")]})}),c&&Object(x.jsx)(k.a,{title:Object(s.d)("common.areYouSure"),onConfirm:function(){return j(),void i(T.a.doDestroy(l))},onClose:function(){return j()},okText:Object(s.d)("common.yes"),cancelText:Object(s.d)("common.no")})]})},P=n(708);t.default=function(){var e=Object(a.d)(),t=Object(c.h)(),n=Object(a.e)(d.selectLoading),i=Object(a.e)(d.selectRecord);return Object(r.useEffect)((function(){e(o.a.doFind(t.params.id))}),[e,t.params.id]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(P.a,{items:[[Object(s.d)("dashboard.menu"),"/network"],[Object(s.d)("entities.vaccineTypes.menu"),"/vaccine-types"],[Object(s.d)("entities.vaccineTypes.view.title")]]}),Object(x.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(x.jsx)("h1",{className:"text-lg font-medium mb-6",children:Object(s.d)("entities.vaccineTypes.view.title")}),Object(x.jsx)(N,{match:t}),Object(x.jsx)(f,{loading:n,record:i})]})]})}},708:function(e,t,n){"use strict";var r=n(24),a=n(105),c=(n(6),n(110)),s=n(13);t.a=function(e){var t=function(e){return e.length>1};return Object(s.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(n,o){var i=0===o,l=e.items.length-1===o;return Object(s.jsxs)("li",{className:"".concat(l?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!i&&Object(s.jsx)(a.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:r.d}),t(n)?Object(s.jsx)(c.a,{className:"hover:underline",to:n[1],children:n[0]}):n[0]]},n[0])}))})}},710:function(e,t,n){"use strict";var r=n(24),a=n(105),c=(n(6),n(177)),s=n.n(c),o=n(13);t.a=function(e){return s.a.createPortal(Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",tabIndex:-1,onClick:e.onClose,children:Object(o.jsx)("div",{className:"relative my-6 mx-auto w-96",onClick:function(e){return e.stopPropagation()},children:Object(o.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(o.jsxs)("div",{className:"flex items-start justify-between p-5 rounded-t",children:[Object(o.jsx)("div",{className:"text-lg font-semibold",children:e.title}),Object(o.jsx)("button",{type:"button",className:"ml-auto bg-transparent border-0 text-gray-900 float-right text-lg leading-none font-semibold outline-none focus:outline-none",onClick:e.onClose,children:Object(o.jsx)("span",{className:"bg-transparent text-gray-700 h-6 w-6 text-lg block outline-none focus:outline-none",children:Object(o.jsx)(a.a,{icon:r.s})})})]}),Object(o.jsxs)("div",{className:"flex items-center justify-end p-6 rounded-b",children:[Object(o.jsx)("button",{type:"button",className:"mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",onClick:e.onClose,children:e.cancelText}),Object(o.jsx)("button",{type:"button",onClick:e.onConfirm,className:"text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",children:e.okText})]})]})})}),Object(o.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}),document.getElementById("modal-root"))}},712:function(e,t,n){"use strict";n(6);var r=n(13);t.a=function(){return Object(r.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(r.jsx)("div",{className:"spinner"})})}},732:function(e,t,n){"use strict";var r=n(4),a=n(28),c=n(65),s=n(111),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.countryRead)})),i=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.countryEdit)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.countryCreate)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.countryImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:i,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.countryDestroy)})),selectPermissionToImport:u};t.a=d},759:function(e,t,n){"use strict";n(6);var r=n(13);t.a=function(e){if(!e.value&&0!==e.value&&!1!==e.value)return null;var t="".concat(e.prefix?"".concat(e.prefix," "):"").concat(e.value);return Object(r.jsxs)("div",{className:"mb-4",children:[Object(r.jsx)("label",{className:"text-medium text-gray-600 dark:text-gray-400",children:e.label}),Object(r.jsx)("div",{children:t})]})}},829:function(e,t,n){"use strict";n(6);var r=n(30),a=n(110),c=n(732),s=n(13);t.a=function(e){var t=Object(r.e)(c.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(s.jsxs)("div",{className:"mb-4",children:[Object(s.jsx)("label",{className:"text-medium text-gray-600 dark:text-gray-400",children:e.label}),n().map((function(e){return n=e,t?Object(s.jsx)("div",{children:Object(s.jsx)(a.a,{className:"text-blue-500 dark:text-blue-400 focus:text-blue-400 hover:text-blue-400",to:"/country/".concat(n.id),children:n.name})},n.id):Object(s.jsx)("div",{children:n.name},n.id);var n}))]}):null}},832:function(e,t,n){"use strict";var r=n(4),a=n(28),c=n(65),s=n(111),o=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.vaccineTypesRead)})),i=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.vaccineTypesEdit)})),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.vaccineTypesCreate)})),u=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.vaccineTypesImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:i,selectPermissionToCreate:l,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(s.a.values.vaccineTypesDestroy)})),selectPermissionToImport:u};t.a=d},892:function(e,t,n){"use strict";var r=n(4),a={selectLoading:Object(r.a)([function(e){return e.vaccineTypes.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a}}]);