(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[47],{558:function(e,t,r){"use strict";var n=r(25),a=r(71),s=(r(4),r(75)),c=r(7);t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(r,o){var i=0===o,l=e.items.length-1===o;return Object(c.jsxs)("li",{className:"".concat(l?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!i&&Object(c.jsx)(a.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:n.d}),t(r)?Object(c.jsx)(s.a,{className:"hover:underline",to:r[1],children:r[0]}):r[0]]},r[0])}))})}},562:function(e,t,r){"use strict";var n=r(25),a=r(71),s=(r(4),r(112)),c=r.n(s),o=r(7);t.a=function(e){return c.a.createPortal(Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",tabIndex:-1,onClick:e.onClose,children:Object(o.jsx)("div",{className:"relative my-6 mx-auto w-96",onClick:function(e){return e.stopPropagation()},children:Object(o.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(o.jsxs)("div",{className:"flex items-start justify-between p-5 rounded-t",children:[Object(o.jsx)("div",{className:"text-lg font-semibold",children:e.title}),Object(o.jsx)("button",{type:"button",className:"ml-auto bg-transparent border-0 text-gray-900 float-right text-lg leading-none font-semibold outline-none focus:outline-none",onClick:e.onClose,children:Object(o.jsx)("span",{className:"bg-transparent text-gray-700 h-6 w-6 text-lg block outline-none focus:outline-none",children:Object(o.jsx)(a.a,{icon:n.s})})})]}),Object(o.jsxs)("div",{className:"flex items-center justify-end p-6 rounded-b",children:[Object(o.jsx)("button",{type:"button",className:"mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",onClick:e.onClose,children:e.cancelText}),Object(o.jsx)("button",{type:"button",onClick:e.onConfirm,className:"text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",children:e.okText})]})]})})}),Object(o.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}),document.getElementById("modal-root"))}},563:function(e,t,r){"use strict";r(4);var n=r(7);t.a=function(){return Object(n.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(n.jsx)("div",{className:"spinner"})})}},609:function(e,t,r){"use strict";r(4);var n=r(7);t.a=function(e){if(!e.value&&0!==e.value&&!1!==e.value)return null;var t="".concat(e.prefix?"".concat(e.prefix," "):"").concat(e.value);return Object(n.jsxs)("div",{className:"mb-4",children:[Object(n.jsx)("label",{className:"text-medium text-gray-600 dark:text-gray-400",children:e.label}),Object(n.jsx)("div",{children:t})]})}},622:function(e,t,r){"use strict";var n=r(5),a=r(31),s=r(50),c=r(130),o=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.petTypesRead)})),i=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.petTypesEdit)})),l=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.petTypesCreate)})),d=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.petTypesImport)})),u={selectPermissionToRead:o,selectPermissionToEdit:i,selectPermissionToCreate:l,selectPermissionToDestroy:Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.petTypesDestroy)})),selectPermissionToImport:d};t.a=u},623:function(e,t,r){"use strict";var n=r(5),a=r(31),s=r(50),c=r(130),o=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.breedRead)})),i=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.breedEdit)})),l=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.breedCreate)})),d=Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.breedImport)})),u={selectPermissionToRead:o,selectPermissionToEdit:i,selectPermissionToCreate:l,selectPermissionToDestroy:Object(n.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new s.a(e,t).match(c.a.values.breedDestroy)})),selectPermissionToImport:d};t.a=u},679:function(e,t,r){"use strict";var n=r(5),a={selectLoading:Object(n.a)([function(e){return e.breed.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},697:function(e,t,r){"use strict";r(4);var n=r(27),a=r(75),s=r(622),c=r(7);t.a=function(e){var t=Object(n.e)(s.a.selectPermissionToRead),r=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return r().length?Object(c.jsxs)("div",{style:{marginBottom:"16px"},children:[Object(c.jsx)("label",{className:"col-form-label",children:e.label}),r().map((function(e){return r=e,t?Object(c.jsx)("div",{children:Object(c.jsx)(a.a,{className:"text-blue-500 dark:text-blue-400 focus:text-blue-400 hover:text-blue-400",to:"/pet-types/".concat(r.id),children:r.name})},r.id):Object(c.jsx)("div",{children:r.name},r.id);var r}))]}):null}},772:function(e,t,r){"use strict";r.r(t);var n=r(4),a=r(27),s=r(28),c=r(2),o=r(167),i=r(5),l=function(e){return e.breed.view},d=Object(i.a)([l],(function(e){return e.record})),u={selectLoading:Object(i.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:d,selectRaw:l},b=r(563),m=r(609),j=r(697),x=r(7);var f=function(e){var t=e.record;return e.loading||!t?Object(x.jsx)(b.a,{}):Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{label:Object(c.d)("entities.breed.fields.name"),value:t.name}),Object(x.jsx)(j.a,{label:Object(c.d)("entities.breed.fields.type"),value:t.type})]})},g=r(135),O=r(560),y=r(25),h=r(71),v=r(75),p=r(78),w=r(623),C=r(119),k=r(679),T=r(562);var N=function(e){var t=Object(n.useState)(!1),r=Object(g.a)(t,2),s=r[0],o=r[1],i=Object(a.d)(),l=e.match.params.id,d=Object(a.e)(p.a.selectPermissionToRead),u=Object(a.e)(w.a.selectPermissionToEdit),b=Object(a.e)(w.a.selectPermissionToDestroy),m=Object(a.e)(k.a.selectLoading),j=function(){o(!1)};return Object(x.jsxs)("div",{className:"mb-4",children:[u&&Object(x.jsx)(v.a,{to:"/breed/".concat(l,"/edit"),children:Object(x.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",children:[Object(x.jsx)(h.a,{className:"mr-2",icon:O.a}),Object(c.d)("common.edit")]})}),b&&Object(x.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",disabled:m,onClick:function(){o(!0)},children:[Object(x.jsx)(h.a,{className:"mr-2",icon:O.f}),Object(c.d)("common.destroy")]}),d&&Object(x.jsx)(v.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:Object(x.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(x.jsx)(h.a,{className:"mr-2",icon:y.i}),Object(c.d)("auditLog.menu")]})}),s&&Object(x.jsx)(T.a,{title:Object(c.d)("common.areYouSure"),onConfirm:function(){return j(),void i(C.a.doDestroy(l))},onClose:function(){return j()},okText:Object(c.d)("common.yes"),cancelText:Object(c.d)("common.no")})]})},P=r(558);t.default=function(){var e=Object(a.d)(),t=Object(s.h)(),r=Object(a.e)(u.selectLoading),i=Object(a.e)(u.selectRecord);return Object(n.useEffect)((function(){e(o.a.doFind(t.params.id))}),[e,t.params.id]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(P.a,{items:[[Object(c.d)("dashboard.menu"),"/"],[Object(c.d)("entities.breed.menu"),"/breed"],[Object(c.d)("entities.breed.view.title")]]}),Object(x.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(x.jsx)("h1",{className:"text-lg font-medium mb-6",children:Object(c.d)("entities.breed.view.title")}),Object(x.jsx)(N,{match:t}),Object(x.jsx)(f,{loading:r,record:i})]})]})}}}]);