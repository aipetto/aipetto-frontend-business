(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[77],{1022:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(2),o=n(0),c=n(215),l=n(24),i=n(105),s=n(58),d=n(170),u=n(30),b=n(701),m=n(756),g=n(35),j=n(705),f=n(757),x=n(755),h=n(826),y=n(899),O=n(13),p=g.e().shape({totalCreditsRange:m.a.decimalRange(Object(a.d)("entities.wallet.fields.totalCreditsRange")),aipettoPointsRange:m.a.integerRange(Object(a.d)("entities.wallet.fields.aipettoPointsRange"))}),v={totalCreditsRange:[],aipettoPointsRange:[]},k={totalCreditsRange:{label:Object(a.d)("entities.wallet.fields.totalCreditsRange"),render:x.a.decimalRange()},aipettoPointsRange:{label:Object(a.d)("entities.wallet.fields.aipettoPointsRange"),render:x.a.range()}};var w=function(e){var t=Object(u.e)(d.a.selectRawFilter),n=Object(u.d)(),m=Object(r.useState)(!1),g=Object(c.a)(m,2),x=g[0],w=g[1],N=Object(r.useState)((function(){return Object(o.a)(Object(o.a)({},v),t)})),C=Object(c.a)(N,1)[0],S=Object(b.c)({resolver:Object(j.yupResolver)(p),defaultValues:C,mode:"all"});Object(r.useEffect)((function(){n(s.a.doFetch(p.cast(C),t))}),[n]);var R=function(e){var t=S.getValues();n(s.a.doFetch(e,t)),w(!1)};return Object(O.jsxs)("div",{className:"border-gray-200 dark:border-gray-600 border rounded-md mb-2",children:[Object(O.jsx)(f.a,{onClick:function(){w(!x)},renders:k,values:t,expanded:x,onRemove:function(e){return S.setValue(e,v[e]),S.handleSubmit(R)()}}),Object(O.jsx)("div",{className:"".concat(x?"block":"hidden"),children:Object(O.jsx)(b.a,Object(o.a)(Object(o.a)({},S),{},{children:Object(O.jsxs)("form",{onSubmit:S.handleSubmit(R),children:[Object(O.jsxs)("div",{className:"pl-4 pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4",children:[Object(O.jsx)(h.a,{name:"totalCreditsRange",label:Object(a.d)("entities.wallet.fields.totalCreditsRange")}),Object(O.jsx)(y.a,{name:"aipettoPointsRange",label:Object(a.d)("entities.wallet.fields.aipettoPointsRange")})]}),Object(O.jsxs)("div",{className:"px-4 py-2 text-right",children:[Object(O.jsxs)("button",{className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"submit",disabled:e.loading,children:[Object(O.jsx)(i.a,{className:"mr-2",icon:l.n}),Object(a.d)("common.search")]}),Object(O.jsxs)("button",{className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",onClick:function(){Object.keys(v).forEach((function(e){S.setValue(e,v[e])})),n(s.a.doReset()),w(!1)},disabled:e.loading,children:[Object(O.jsx)(i.a,{className:"mr-2",icon:l.t}),Object(a.d)("common.reset")]})]})]})}))})]})},N=n(702),C=n(110),S=n(888),R=n(199),T=n(889),P=n(722),Y=n(710),B=n(712),D=n(721);var M=function(e){var t=Object(r.useState)(null),n=Object(c.a)(t,2),o=n[0],b=n[1],m=Object(u.d)(),g=Object(u.e)(d.a.selectLoading),j=Object(u.e)(T.a.selectLoading),f=g||j,x=Object(u.e)(d.a.selectRows),h=Object(u.e)(d.a.selectPagination),y=Object(u.e)(d.a.selectSelectedKeys),p=Object(u.e)(d.a.selectHasRows),v=Object(u.e)(d.a.selectSorter),k=Object(u.e)(d.a.selectIsAllSelected),w=Object(u.e)(S.a.selectPermissionToEdit),M=Object(u.e)(S.a.selectPermissionToDestroy),A=function(){b(null)},E=function(e){var t=v.field===e&&"ascend"===v.order?"descend":"ascend";m(s.a.doChangeSort({field:e,order:t}))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"table-responsive shadow rounded-lg dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200 dark:border",children:Object(O.jsxs)("table",{className:"border-collapse min-w-full leading-normal",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(P.a,{children:p&&Object(O.jsx)("input",{type:"checkbox",className:"cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring",checked:Boolean(k),onChange:function(){m(s.a.doToggleAllSelected())}})}),Object(O.jsx)(P.a,{onSort:E,hasRows:p,sorter:v,name:"totalCredits",label:Object(a.d)("entities.wallet.fields.totalCredits"),align:"right"}),Object(O.jsx)(P.a,{onSort:E,hasRows:p,sorter:v,name:"aipettoPoints",label:Object(a.d)("entities.wallet.fields.aipettoPoints"),align:"right"}),Object(O.jsx)(P.a,{})]})}),Object(O.jsxs)("tbody",{children:[f&&Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:100,children:Object(O.jsx)(B.a,{})})}),!f&&!p&&Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:100,children:Object(O.jsx)("div",{className:"flex justify-center p-5",children:Object(a.d)("table.noData")})})}),!f&&x.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"w-12 border-b border-gray-200 dark:border-gray-800",scope:"row",children:Object(O.jsx)("input",{type:"checkbox",className:"cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring",checked:y.includes(e.id),onChange:function(){return t=e.id,void m(s.a.doToggleOneSelected(t));var t}})}),Object(O.jsx)("td",{align:"right",className:"whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm",children:e.totalCredits}),Object(O.jsx)("td",{align:"right",className:"whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm",children:e.aipettoPoints}),Object(O.jsxs)("td",{className:"w-56 whitespace-nowrap border-b px-5 py-5 border-gray-200 dark:border-gray-800",align:"right",children:[Object(O.jsx)(C.a,{className:"inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",to:"/wallet/".concat(e.id),title:Object(a.d)("common.view"),children:Object(O.jsx)(i.a,{icon:l.n})}),w&&Object(O.jsx)(C.a,{className:"inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",to:"/wallet/".concat(e.id,"/edit"),title:Object(a.d)("common.edit"),children:Object(O.jsx)(i.a,{icon:N.a})}),M&&Object(O.jsx)("button",{className:"inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full",type:"button",onClick:function(){return t=e.id,void b(t);var t},title:Object(a.d)("common.destroy"),children:Object(O.jsx)(i.a,{icon:N.f})})]})]},e.id)}))]})]})}),Object(O.jsx)(D.a,{onChange:function(e){m(s.a.doChangePagination(e))},disabled:f,pagination:h}),o&&Object(O.jsx)(Y.a,{title:Object(a.d)("common.areYouSure"),onConfirm:function(){return e=o,A(),void m(R.a.doDestroy(e));var e},onClose:function(){return A()},okText:Object(a.d)("common.yes"),cancelText:Object(a.d)("common.no")})]})},A=n(754),E=n(113);var F=function(e){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),o=n[0],b=n[1],m=Object(u.d)(),g=Object(u.e)(d.a.selectSelectedKeys),j=Object(u.e)(d.a.selectLoading),f=Object(u.e)(T.a.selectLoading),x=Object(u.e)(d.a.selectExportLoading),h=Object(u.e)(d.a.selectHasRows),y=Object(u.e)(E.a.selectPermissionToRead),p=Object(u.e)(S.a.selectPermissionToDestroy),v=Object(u.e)(S.a.selectPermissionToCreate),k=Object(u.e)(S.a.selectPermissionToImport),w=function(){b(!0)},P=function(){b(!1)},B=function(){m(s.a.doExport())};return Object(O.jsxs)("div",{className:"mb-4",children:[v&&Object(O.jsx)(C.a,{to:"/wallet/new",children:Object(O.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",children:[Object(O.jsx)(i.a,{className:"mr-2",icon:l.m}),Object(a.d)("common.new")]})}),k&&Object(O.jsx)(C.a,{to:"/wallet/importer",children:Object(O.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",children:[Object(O.jsx)(i.a,{className:"mr-2",icon:l.u}),Object(a.d)("common.import")]})}),function(){if(!p)return null;var e=!g.length||j,t=Object(O.jsxs)("button",{disabled:e||f,className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",type:"button",onClick:w,children:[Object(O.jsx)(i.a,{className:"mr-2",icon:N.f}),Object(a.d)("common.destroy")]});return e?Object(O.jsxs)("span",{"data-tip":Object(a.d)("common.mustSelectARow"),"data-tip-disable":!e,"data-for":"wallet-list-toolbar-destroy-tooltip",children:[t,Object(O.jsx)(A.a,{id:"wallet-list-toolbar-destroy-tooltip"})]}):t}(),y&&Object(O.jsx)(C.a,{to:"/audit-logs?entityNames=wallet",children:Object(O.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(O.jsx)(i.a,{className:"mr-2",icon:l.i}),Object(a.d)("auditLog.menu")]})}),function(){var e=!h||j,t=Object(O.jsxs)("button",{className:"mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",disabled:e||x,onClick:B,type:"button",children:[Object(O.jsx)(i.a,{className:"mr-2",icon:N.d}),Object(a.d)("common.export")]});return e?Object(O.jsxs)("span",{"data-tip":Object(a.d)("common.noDataToExport"),"data-tip-disable":!e,"data-for":"wallet-list-toolbar-export-tooltip",children:[t,Object(O.jsx)(A.a,{id:"wallet-list-toolbar-export-tooltip"})]}):t}(),o&&Object(O.jsx)(Y.a,{title:Object(a.d)("common.areYouSure"),onConfirm:function(){return P(),void m(R.a.doDestroyAll(g))},onClose:function(){return P()},okText:Object(a.d)("common.yes"),cancelText:Object(a.d)("common.no")})]})},V=n(708);t.default=function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(V.a,{items:[[Object(a.d)("dashboard.menu"),"/network"],[Object(a.d)("entities.wallet.menu")]]}),Object(O.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(O.jsx)("h1",{className:" text-lg font-medium mb-6",children:Object(a.d)("entities.wallet.list.title")}),Object(O.jsx)(F,{}),Object(O.jsx)(w,{}),Object(O.jsx)(M,{})]})]})}},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(14),a=n(15),o=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,t,n,r){var a,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(o)return o;if(!r&&!n[e])return null;var c=t[e];return(null===c||void 0===c||null===(a=c[0])||void 0===a?void 0:a.message)||(null===c||void 0===c?void 0:c.message)||c||null}}]),e}()},708:function(e,t,n){"use strict";var r=n(24),a=n(105),o=(n(6),n(110)),c=n(13);t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(n,l){var i=0===l,s=e.items.length-1===l;return Object(c.jsxs)("li",{className:"".concat(s?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!i&&Object(c.jsx)(a.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:r.d}),t(n)?Object(c.jsx)(o.a,{className:"hover:underline",to:n[1],children:n[0]}):n[0]]},n[0])}))})}},710:function(e,t,n){"use strict";var r=n(24),a=n(105),o=(n(6),n(177)),c=n.n(o),l=n(13);t.a=function(e){return c.a.createPortal(Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",tabIndex:-1,onClick:e.onClose,children:Object(l.jsx)("div",{className:"relative my-6 mx-auto w-96",onClick:function(e){return e.stopPropagation()},children:Object(l.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(l.jsxs)("div",{className:"flex items-start justify-between p-5 rounded-t",children:[Object(l.jsx)("div",{className:"text-lg font-semibold",children:e.title}),Object(l.jsx)("button",{type:"button",className:"ml-auto bg-transparent border-0 text-gray-900 float-right text-lg leading-none font-semibold outline-none focus:outline-none",onClick:e.onClose,children:Object(l.jsx)("span",{className:"bg-transparent text-gray-700 h-6 w-6 text-lg block outline-none focus:outline-none",children:Object(l.jsx)(a.a,{icon:r.s})})})]}),Object(l.jsxs)("div",{className:"flex items-center justify-end p-6 rounded-b",children:[Object(l.jsx)("button",{type:"button",className:"mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",onClick:e.onClose,children:e.cancelText}),Object(l.jsx)("button",{type:"button",onClick:e.onConfirm,className:"text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",children:e.okText})]})]})})}),Object(l.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}),document.getElementById("modal-root"))}},712:function(e,t,n){"use strict";n(6);var r=n(13);t.a=function(){return Object(r.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(r.jsx)("div",{className:"spinner"})})}},721:function(e,t,n){"use strict";var r=n(753),a=(n(6),n(2)),o=n(13);t.a=function(e){var t=function(t,n){e.onChange({current:Number(t),pageSize:Number(n)})},n=Object(a.a)().dictionary.pagination,c=e.pagination,l=e.disabled,i=e.showTotal,s=c.current,d=c.pageSize,u=c.total;return Object(o.jsxs)("div",{className:"flex items-center justify-end mt-2",children:[Object(o.jsx)(r.a,{pageSize:Number(d),current:s,onChange:t,total:u,locale:n,showTotal:i||void 0}),Object(o.jsxs)("select",{disabled:!u||l,style:{height:"32px"},className:"ml-2 cursor-pointer text-sm w-28 inline-block px-4 py-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring",value:Number(d),onChange:function(e){return t(1,e.target.value)},children:[Object(o.jsxs)("option",{value:10,children:["10 ",Object(a.d)("pagination.items_per_page")]}),Object(o.jsxs)("option",{value:20,children:["20 ",Object(a.d)("pagination.items_per_page")]}),Object(o.jsxs)("option",{value:30,children:["30 ",Object(a.d)("pagination.items_per_page")]}),Object(o.jsxs)("option",{value:40,children:["40 ",Object(a.d)("pagination.items_per_page")]})]})]})}},722:function(e,t,n){"use strict";var r,a=n(301),o=n(24),c=n(105),l=(n(6),n(302)),i=n(13),s=l.a.th(r||(r=Object(a.a)(["\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 0.15s ease-in;\n\n  &:hover,\n  &:focus {\n    opacity: 0.5;\n    transition: opacity 0.15s ease-in;\n  }\n\n  &:active {\n    opacity: 0.8;\n    transition: opacity 0.15s ease-out;\n  }\n"])));t.a=function(e){var t=e.sorter,n=e.onSort,r=e.name,a=e.label,l=e.hasRows,d=e.children,u=e.align,b=void 0===u?"left":u;return l&&n?Object(i.jsx)(s,{onClick:function(){return n(r)},className:"".concat(e.className||""," whitespace-nowrap align-middle px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 uppercase tracking-wider"),style:{textAlign:b},scope:"col",children:Object(i.jsxs)("div",{className:"flex",style:{justifyContent:"right"===b?"flex-end":"center"===b?"center":"flex-start"},children:[d||a||"",t.field===r&&"descend"===t.order&&Object(i.jsx)(c.a,{className:"ml-2",icon:o.q}),t.field===r&&"ascend"===t.order&&Object(i.jsx)(c.a,{className:"ml-2",icon:o.p})]})}):Object(i.jsx)("th",{className:"".concat(e.className||""," whitespace-nowrap align-middle px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200  text-xs font-semibold text-gray-600 uppercase tracking-wider"),style:{textAlign:b},scope:"col",children:d||a||""})}},755:function(e,t,n){"use strict";var r=n(36),a=n.n(r),o=n(2),c={enumerator:function(e){return function(t){return t?Object(o.d)("".concat(e,".").concat(t)):null}},enumeratorMultiple:function(e){return function(t){return t?t.map((function(t){return Object(o.d)("".concat(e,".").concat(t))})).join(", "):null}},generic:function(){return function(e){return e}},stringArray:function(){return function(e){return(e||[]).join(", ")}},json:function(){return function(e){return e?JSON.stringify(e,null,2):null}},decimal:function(e){return function(t){return l(t,e)}},boolean:function(e,t){return function(n){return null==n?null:Boolean(n)?e||Object(o.d)("common.yes"):t||Object(o.d)("common.no")}},relationToOne:function(){return function(e){return e&&e.label||null}},relationToMany:function(){return function(e){return(e||[]).map((function(e){return e.label})).join(", ")}},filesOrImages:function(){return function(e){return(e||[]).map((function(e){return e.downloadUrl})).join(" ")}},date:function(){return function(e){return i(e)}},dateRange:function(){return function(e){if(!e||!e.length)return null;var t=e[0],n=2===e.length&&e[1];return t||n?t&&!n?"> ".concat(i(t)):!t&&n?"< ".concat(i(n)):"".concat(i(t)," - ").concat(i(n)):null}},datetime:function(){return function(e){return s(e)}},datetimeRange:function(){return function(e){if(!e||!e.length)return null;var t=e[0],n=2===e.length&&e[1];return t||n?t&&!n?"> ".concat(s(t)):!t&&n?"< ".concat(s(n)):"".concat(s(t)," - ").concat(s(n)):null}},decimalRange:function(e){return function(t){if(!t||!t.length)return null;var n=t[0],r=2===t.length&&t[1];return null==n&&null==r?null:null!=n&&null==r?"> ".concat(l(n,e)):null==n&&null!=r?"< ".concat(l(r,e)):"".concat(l(n,e)," - ").concat(l(r,e))}},range:function(){return function(e){if(!e||!e.length)return null;var t=e[0],n=2===e.length&&e[1];return null!=t&&""!==t||null!=n&&""!==n?null==t||null!=n&&""!==n?null!=t&&""!==t||null==n?"".concat(t," - ").concat(n):"< ".concat(n):"> ".concat(t):null}}};function l(e,t){return e?t?Number(e).toFixed(t):Number(e):null}function i(e){return e?a()(e).format("YYYY-MM-DD"):null}function s(e){return e?a()(e).format("YYYY-MM-DD HH:mm"):null}t.a=c},756:function(e,t,n){"use strict";var r=n(35),a=n(2),o=n(36),c=n.n(o),l={generic:function(e){return r.c().label(e)},string:function(e){return r.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e)},stringArray:function(e){return r.a().compact().ensure().of(r.h().transform((function(e,t){return""===t?null:e})).trim()).label(e).transform((function(e,t){return t?Array.isArray(t)?t:[t]:t}))},boolean:function(e){return r.b().nullable(!0).label(e)},relationToOne:function(e){return r.c().label(e).transform((function(e,t){return t?t.id:null}))},relationToMany:function(e){return r.c().label(e).transform((function(e,t){return t&&t.length?t.map((function(e){return e.id})):[]}))},json:function(e){return r.c().label(e)},integer:function(e){return r.d().transform((function(e,t){return""===t?null:e})).integer().nullable(!0).label(e)},integerRange:function(e){return r.c().label(e)},enumerator:function(e){return r.h().transform((function(e,t){return""===t?null:e})).label(e).nullable(!0)},email:function(e){return r.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e)},decimal:function(e){return r.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e)},decimalRange:function(e){return r.a().ensure().compact().of(r.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e)).label(e)},datetime:function(e){return r.c().nullable(!0).label(e).transform((function(e,t){return t?c()(t,"YYYY-MM-DD HH:mm").toISOString():null}))},datetimeRange:function(e){return r.c().label(e)},date:function(e){return r.c().nullable(!0).label(e).test("is-date",Object(a.d)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()}))},dateRange:function(e){return r.a().ensure().compact().of(r.c().nullable(!0).label(e).test("is-date",Object(a.d)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?c()(e).format("YYYY-MM-DD"):null}))).label(e)}};t.a=l},757:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(24),a=n(105),o=(n(6),n(2)),c=n(13);function l(e){var t=e.values,n=e.renders,l=e.onClick,i=e.onRemove,s=Object.keys(t||{}).map((function(e){return n[e]?{key:e,label:n[e].label,value:n[e].render(t[e])}:{value:null}})).filter((function(e){return e.value||0===e.value||!1===e.value}));return Object(c.jsxs)("div",{onClick:l,className:"".concat(e.expanded?"border-gray-200 dark:border-gray-600 border-b mb-4":""," flex items-center justify-between cursor-pointer p-4"),children:[!s.length||e.expanded?Object(c.jsx)("div",{className:"flex items-center  font-medium",children:Object(o.d)("common.filters")}):Object(c.jsxs)("div",{className:"flex items-center ",children:[Object(c.jsx)("span",{className:"font-medium",children:Object(o.d)("common.filters")}),":",Object(c.jsx)("span",{className:"ml-2 flex justify-start flex-wrap",children:s.map((function(e){return Object(c.jsxs)("span",{className:"bg-gray-700 text-white p-1 text-xs rounded-md flex items-center mr-1",style:{cursor:"default"},onClick:function(e){e.stopPropagation()},children:["".concat(e.label,": ").concat(e.value)," ",i&&Object(c.jsx)(a.a,{onClick:i?function(){return i(e.key)}:void 0,className:"text-base rounded-full ml-1 bg-gray-900 cursor-pointer",style:{padding:2},icon:r.s})]},e.label)}))})]}),Object(c.jsx)("div",{children:e.expanded?Object(c.jsx)(a.a,{icon:r.d}):Object(c.jsx)(a.a,{icon:r.c})})]})}},826:function(e,t,n){"use strict";var r=n(215),a=n(6),o=n(701),c=n(706),l=n(692),i=n(13);function s(e){var t=Object(a.useState)(Object(l.a)()),n=Object(r.a)(t,1)[0],s=e.label,d=e.name,u=e.hint,b=e.placeholder,m=e.autoFocus,g=e.autoComplete,j=e.required,f=e.externalErrorMessage,x=Object(o.d)(),h=x.register,y=x.errors,O=x.formState,p=O.touched,v=O.isSubmitted,k=x.setValue,w=x.watch,N=c.a.errorMessage(d,y,p,v,f),C=w(d);Object(a.useEffect)((function(){h({name:d})}),[h,d]);var S=function(){return C?Array.isArray(!C)?null:C.length?C[0]:null:null},R=function(){return C?Array.isArray(!C)||C.length<2?null:C[1]:null};return Object(i.jsxs)("div",{children:[Boolean(s)&&Object(i.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:"".concat(n,"Start"),children:[s," ",j?Object(i.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(i.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(i.jsx)("input",{type:"text",id:"".concat(n,"Start"),name:"".concat(d,"Start"),onChange:function(t){return n=t.target.value,k(d,[n,R()],{shouldValidate:!0}),void(e.onChange&&e.onChange([n,R()]));var n},onBlur:function(t){e.onBlur&&e.onBlur(t)},value:S(),placeholder:b||void 0,autoFocus:m||void 0,autoComplete:g||void 0,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(N?"border-red-400 text-red-600":"")}),Object(i.jsx)("div",{className:"text-gray-300",style:{flexShrink:1,marginLeft:"8px",marginRight:"8px"},children:"~"}),Object(i.jsx)("input",{style:{width:"100%"},type:"text",id:"".concat(n,"End"),name:"".concat(d,"End"),onChange:function(t){return n=t.target.value,k(d,[S(),n],{shouldValidate:!0}),void(e.onChange&&e.onChange([n,S()]));var n},onBlur:function(t){e.onBlur&&e.onBlur(t)},value:R(),placeholder:b||void 0,autoFocus:m||void 0,autoComplete:g||void 0,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(N?"border-red-400 text-red-600":"")})]}),Object(i.jsx)("div",{className:"text-red-600 text-sm mt-2",children:N}),Boolean(u)&&Object(i.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:u})]})}s.defaultProps={required:!1},t.a=s},888:function(e,t,n){"use strict";var r=n(4),a=n(28),o=n(65),c=n(111),l=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.walletRead)})),i=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.walletEdit)})),s=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.walletCreate)})),d=Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.walletImport)})),u={selectPermissionToRead:l,selectPermissionToEdit:i,selectPermissionToCreate:s,selectPermissionToDestroy:Object(r.a)([a.a.selectCurrentTenant,a.a.selectCurrentUser],(function(e,t){return new o.a(e,t).match(c.a.values.walletDestroy)})),selectPermissionToImport:d};t.a=u},889:function(e,t,n){"use strict";var r=n(4),a={selectLoading:Object(r.a)([function(e){return e.wallet.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},899:function(e,t,n){"use strict";var r=n(215),a=n(6),o=n(701),c=n(706),l=n(692),i=n(13);function s(e){var t=Object(a.useState)(Object(l.a)()),n=Object(r.a)(t,1)[0],s=e.label,d=e.name,u=e.hint,b=e.placeholder,m=e.autoFocus,g=e.autoComplete,j=e.required,f=e.externalErrorMessage,x=Object(o.d)(),h=x.register,y=x.errors,O=x.formState,p=O.touched,v=O.isSubmitted,k=x.setValue,w=x.watch,N=c.a.errorMessage(d,y,p,v,f),C=w(d);Object(a.useEffect)((function(){h({name:d})}),[h,d]);var S=function(){return C?Array.isArray(!C)?"":C.length?C[0]:"":""},R=function(){return C?Array.isArray(!C)||C.length<2?"":C[1]:""};return Object(i.jsxs)("div",{children:[Boolean(s)&&Object(i.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:"".concat(n,"Start"),children:[s," ",j?Object(i.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(i.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(i.jsx)("input",{type:"number",id:"".concat(n,"Start"),name:"".concat(d,"Start"),onChange:function(t){return n=t.target.value,k(d,[n,R()],{shouldValidate:!0}),void(e.onChange&&e.onChange([n,R()]));var n},onBlur:function(t){e.onBlur&&e.onBlur(t)},value:S(),placeholder:b||void 0,autoFocus:m||void 0,autoComplete:g||void 0,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(N?"border-red-400 text-red-600":"")}),Object(i.jsx)("div",{className:"text-gray-300",style:{flexShrink:1,marginLeft:"8px",marginRight:"8px"},children:"~"}),Object(i.jsx)("input",{style:{width:"100%"},type:"number",id:"".concat(n,"End"),name:"".concat(d,"End"),onChange:function(t){return n=t.target.value,k(d,[S(),n],{shouldValidate:!0}),void(e.onChange&&e.onChange([n,S()]));var n},onBlur:function(t){e.onBlur&&e.onBlur(t)},value:R(),placeholder:b||void 0,autoFocus:m||void 0,autoComplete:g||void 0,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(N?"border-red-400 text-red-600":"")})]}),Object(i.jsx)("div",{className:"text-red-600 text-sm mt-2",children:N}),Boolean(u)&&Object(i.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:u})]})}s.defaultProps={required:!1},t.a=s}}]);