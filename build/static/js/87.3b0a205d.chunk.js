(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[87],{1011:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(30),s=n(32),c=n(2),o=n(258),i=n(4),l=function(e){return e.state.view},u=Object(i.a)([l],(function(e){return e.record})),d={selectLoading:Object(i.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:l},b=n(712),m=n(759),j=n(829),x=n(13);var f=function(e){var t=e.record;return e.loading||!t?Object(x.jsx)(b.a,{}):Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{label:Object(c.d)("entities.state.fields.name"),value:t.name}),Object(x.jsx)(j.a,{label:Object(c.d)("entities.state.fields.country"),value:t.country}),Object(x.jsx)(m.a,{label:Object(c.d)("entities.state.fields.initials"),value:t.initials})]})},g=n(215),O=n(702),y=n(24),h=n(105),v=n(110),p=n(113),w=n(752),C=n(193),k=n(879),N=n(710);var T=function(e){var t=Object(a.useState)(!1),n=Object(g.a)(t,2),s=n[0],o=n[1],i=Object(r.d)(),l=e.match.params.id,u=Object(r.e)(p.a.selectPermissionToRead),d=Object(r.e)(w.a.selectPermissionToEdit),b=Object(r.e)(w.a.selectPermissionToDestroy),m=Object(r.e)(k.a.selectLoading),j=function(){o(!1)};return Object(x.jsxs)("div",{className:"mb-4",children:[d&&Object(x.jsx)(v.a,{to:"/state/".concat(l,"/edit"),children:Object(x.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",children:[Object(x.jsx)(h.a,{className:"mr-2",icon:O.a}),Object(c.d)("common.edit")]})}),b&&Object(x.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",disabled:m,onClick:function(){o(!0)},children:[Object(x.jsx)(h.a,{className:"mr-2",icon:O.f}),Object(c.d)("common.destroy")]}),u&&Object(x.jsx)(v.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(x.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(x.jsx)(h.a,{className:"mr-2",icon:y.i}),Object(c.d)("auditLog.menu")]})}),s&&Object(x.jsx)(N.a,{title:Object(c.d)("common.areYouSure"),onConfirm:function(){return j(),void i(C.a.doDestroy(l))},onClose:function(){return j()},okText:Object(c.d)("common.yes"),cancelText:Object(c.d)("common.no")})]})},P=n(708);t.default=function(){var e=Object(r.d)(),t=Object(s.h)(),n=Object(r.e)(d.selectLoading),i=Object(r.e)(d.selectRecord);return Object(a.useEffect)((function(){e(o.a.doFind(t.params.id))}),[e,t.params.id]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(P.a,{items:[[Object(c.d)("dashboard.menu"),"/network"],[Object(c.d)("entities.state.menu"),"/state"],[Object(c.d)("entities.state.view.title")]]}),Object(x.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(x.jsx)("h1",{className:"text-lg font-medium mb-6",children:Object(c.d)("entities.state.view.title")}),Object(x.jsx)(T,{match:t}),Object(x.jsx)(f,{loading:n,record:i})]})]})}},708:function(e,t,n){"use strict";var a=n(24),r=n(105),s=(n(6),n(110)),c=n(13);t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(n,o){var i=0===o,l=e.items.length-1===o;return Object(c.jsxs)("li",{className:"".concat(l?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!i&&Object(c.jsx)(r.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:a.d}),t(n)?Object(c.jsx)(s.a,{className:"hover:underline",to:n[1],children:n[0]}):n[0]]},n[0])}))})}},710:function(e,t,n){"use strict";var a=n(24),r=n(105),s=(n(6),n(177)),c=n.n(s),o=n(13);t.a=function(e){return c.a.createPortal(Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",tabIndex:-1,onClick:e.onClose,children:Object(o.jsx)("div",{className:"relative my-6 mx-auto w-96",onClick:function(e){return e.stopPropagation()},children:Object(o.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(o.jsxs)("div",{className:"flex items-start justify-between p-5 rounded-t",children:[Object(o.jsx)("div",{className:"text-lg font-semibold",children:e.title}),Object(o.jsx)("button",{type:"button",className:"ml-auto bg-transparent border-0 text-gray-900 float-right text-lg leading-none font-semibold outline-none focus:outline-none",onClick:e.onClose,children:Object(o.jsx)("span",{className:"bg-transparent text-gray-700 h-6 w-6 text-lg block outline-none focus:outline-none",children:Object(o.jsx)(r.a,{icon:a.s})})})]}),Object(o.jsxs)("div",{className:"flex items-center justify-end p-6 rounded-b",children:[Object(o.jsx)("button",{type:"button",className:"mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",onClick:e.onClose,children:e.cancelText}),Object(o.jsx)("button",{type:"button",onClick:e.onConfirm,className:"text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",children:e.okText})]})]})})}),Object(o.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}),document.getElementById("modal-root"))}},712:function(e,t,n){"use strict";n(6);var a=n(13);t.a=function(){return Object(a.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(a.jsx)("div",{className:"spinner"})})}},732:function(e,t,n){"use strict";var a=n(4),r=n(28),s=n(65),c=n(111),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.countryRead)})),i=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.countryEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.countryCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.countryImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:i,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.countryDestroy)})),selectPermissionToImport:u};t.a=d},752:function(e,t,n){"use strict";var a=n(4),r=n(28),s=n(65),c=n(111),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.stateRead)})),i=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.stateEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.stateCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.stateImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:i,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.stateDestroy)})),selectPermissionToImport:u};t.a=d},759:function(e,t,n){"use strict";n(6);var a=n(13);t.a=function(e){if(!e.value&&0!==e.value&&!1!==e.value)return null;var t="".concat(e.prefix?"".concat(e.prefix," "):"").concat(e.value);return Object(a.jsxs)("div",{className:"mb-4",children:[Object(a.jsx)("label",{className:"text-medium text-gray-600 dark:text-gray-400",children:e.label}),Object(a.jsx)("div",{children:t})]})}},829:function(e,t,n){"use strict";n(6);var a=n(30),r=n(110),s=n(732),c=n(13);t.a=function(e){var t=Object(a.e)(s.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(c.jsxs)("div",{className:"mb-4",children:[Object(c.jsx)("label",{className:"text-medium text-gray-600 dark:text-gray-400",children:e.label}),n().map((function(e){return n=e,t?Object(c.jsx)("div",{children:Object(c.jsx)(r.a,{className:"text-blue-500 dark:text-blue-400 focus:text-blue-400 hover:text-blue-400",to:"/country/".concat(n.id),children:n.name})},n.id):Object(c.jsx)("div",{children:n.name},n.id);var n}))]}):null}},879:function(e,t,n){"use strict";var a=n(4),r={selectLoading:Object(a.a)([function(e){return e.state.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r}}]);