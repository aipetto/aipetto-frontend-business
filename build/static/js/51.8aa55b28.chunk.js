(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[51],{557:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(11),a=n(12),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,t,n,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!n[e])return null;var o=t[e];return(null===o||void 0===o||null===(a=o[0])||void 0===a?void 0:a.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},558:function(e,t,n){"use strict";var r=n(25),a=n(71),i=(n(4),n(75)),o=n(7);t.a=function(e){var t=function(e){return e.length>1};return Object(o.jsx)("ol",{className:"text-sm flex items-center",children:e.items.map((function(n,c){var s=0===c,l=e.items.length-1===c;return Object(o.jsxs)("li",{className:"".concat(l?"text-gray-800 dark:text-white":"text-gray-500 dark:text-gray-200 mr-2"),children:[!s&&Object(o.jsx)(a.a,{className:"mr-2 font-normal text-gray-400 dark:text-gray-200",icon:r.d}),t(n)?Object(o.jsx)(i.a,{className:"hover:underline",to:n[1],children:n[0]}):n[0]]},n[0])}))})}},563:function(e,t,n){"use strict";n(4);var r=n(7);t.a=function(){return Object(r.jsx)("div",{className:"w-full flex justify-center items-center mt-12 mb-12",children:Object(r.jsx)("div",{className:"spinner"})})}},564:function(e,t,n){"use strict";var r=n(19),a=n(33),i=n(2),o=n(76),c=n.n(o),s={generic:function(e){return a.c().label(e)},string:function(e,t){t=t||{};var n=a.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),t.matches&&(n=n.matches(t.matches)),n},boolean:function(e,t){return a.b().default(!1).label(e)},relationToOne:function(e,t){t=t||{};var n=a.c().nullable(!0).label(e).transform((function(e,t){return t?t.id:null}));return t.required&&(n=n.required()),n},stringArray:function(e,t){t=t||{};var n=a.a().compact().ensure().of(a.h().transform((function(e,t){return""===t?null:e})).trim()).label(e);return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},relationToMany:function(e,t){t=t||{};var n=a.a().nullable(!0).label(e).transform((function(e,t){return t&&t.length?t.map((function(e){return e.id})):[]}));return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},integer:function(e,t){t=t||{};var n=a.d().transform((function(e,t){return""===t?null:e})).integer().nullable(!0).label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),n},images:function(e,t){t=t||{};var n=a.a().nullable(!0).label(e);return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},files:function(e,t){t=t||{};var n=a.a().compact().ensure().nullable(!0).label(e);return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},enumerator:function(e,t){t=t||{};var n=a.h().transform((function(e,t){return""===t?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(t.options||[])));return t.required&&(n=n.required(Object(i.d)("validation.string.selected"))),n},email:function(e,t){t=t||{};var n=a.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e).email();return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),t.matches&&(n=n.matches(t.matches)),n},decimal:function(e,t){t=t||{};var n=a.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),n},datetime:function(e,t){t=t||{};var n=a.c().nullable(!0).label(e).transform((function(e,t){return e?c()(t,"YYYY-MM-DD HH:mm").toISOString():null}));return t.required&&(n=n.required()),n},date:function(e,t){t=t||{};var n=a.c().nullable(!0).label(e).test("is-date",Object(i.d)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?c()(e).format("YYYY-MM-DD"):null}));return t.required&&(n=n.required()),n}};t.a=s},587:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(135),a=n(1),i=n.n(a),o=n(3),c=n(11),s=n(12),l=n(588),u=n.n(l),d=n(2),m=n(10),b=n(672),f=n(9),g=n(204),x=n.n(g),j=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,null,[{key:"validate",value:function(e,t){if(t){if(t.image&&!e.type.startsWith("image"))throw new Error(Object(d.d)("fileUploader.image"));if(t.storage.maxSizeInBytes&&e.size>t.storage.maxSizeInBytes)throw new Error(Object(d.d)("fileUploader.size",u()(t.storage.maxSizeInBytes)));var n=h(e.name);if(t.formats&&!t.formats.includes(n))throw new Error(Object(d.d)("fileUploader.formats",t.formats.join(", ")))}}},{key:"upload",value:function(){var e=Object(o.a)(i.a.mark((function e(t,n){var r,a,o,c,s,l,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,this.validate(t,n),e.next=7;break;case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 7:return r=h(t.name),a=Object(b.a)(),o="".concat(a,".").concat(r),e.next=12,this.fetchFileCredentials(o,n);case 12:return c=e.sent,s=c.uploadCredentials,l=c.downloadUrl,u=c.privateUrl,e.next=18,this.uploadToServer(t,s);case 18:return e.abrupt("return",{id:a,name:t.name,sizeInBytes:t.size,publicUrl:s&&s.publicUrl?s.publicUrl:null,privateUrl:u,downloadUrl:l,new:!0});case 19:case"end":return e.stop()}}),e,this,[[0,4]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var e=Object(o.a)(i.a.mark((function e(t,n){var r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f.a.get(),e.next=3,m.a.get("/tenant/".concat(r,"/file/credentials"),{params:{filename:t,storageId:n.storage.id}});case 3:return a=e.sent,o=a.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a,o,c,s,l,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,a=n.url,o=new FormData,c=0,s=Object.entries(n.fields||{});c<s.length;c++)l=Object(r.a)(s[c],2),u=l[0],d=l[1],o.append(u,d);return o.append("file",t),e.abrupt("return",x.a.post(a,o,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();function h(e){if(!e)return null;var t=/(?:\.([^.]+))?$/.exec(e);return t?t[1]:null}},588:function(e,t,n){"use strict";(function(t){!function(t){var n=/^(b|B)$/,r={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},a={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function i(e){var t,i,o,c,s,l,u,d,m,b,f,g,x,j,h,p=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},v=[],O=0,y=void 0,w=void 0;if(isNaN(e))throw new TypeError("Invalid number");return i=!0===p.bits,f=!0===p.unix,t=p.base||2,b=void 0!==p.round?p.round:f?1:2,l=void 0!==p.locale?p.locale:"",u=p.localeOptions||{},g=void 0!==p.separator?p.separator:"",x=void 0!==p.spacer?p.spacer:f?"":" ",h=p.symbols||{},j=2===t&&p.standard||"jedec",m=p.output||"string",c=!0===p.fullform,s=p.fullforms instanceof Array?p.fullforms:[],y=void 0!==p.exponent?p.exponent:-1,o=2<t?1e3:1024,(d=(w=Number(e))<0)&&(w=-w),(-1===y||isNaN(y))&&(y=Math.floor(Math.log(w)/Math.log(o)))<0&&(y=0),8<y&&(y=8),"exponent"===m?y:(0===w?(v[0]=0,v[1]=f?"":r[j][i?"bits":"bytes"][y]):(O=w/(2===t?Math.pow(2,10*y):Math.pow(1e3,y)),i&&o<=(O*=8)&&y<8&&(O/=o,y++),v[0]=Number(O.toFixed(0<y?b:0)),v[0]===o&&y<8&&void 0===p.exponent&&(v[0]=1,y++),v[1]=10===t&&1===y?i?"kb":"kB":r[j][i?"bits":"bytes"][y],f&&(v[1]="jedec"===j?v[1].charAt(0):0<y?v[1].replace(/B$/,""):v[1],n.test(v[1])&&(v[0]=Math.floor(v[0]),v[1]=""))),d&&(v[0]=-v[0]),v[1]=h[v[1]]||v[1],!0===l?v[0]=v[0].toLocaleString():0<l.length?v[0]=v[0].toLocaleString(l,u):0<g.length&&(v[0]=v[0].toString().replace(".",g)),"array"===m?v:(c&&(v[1]=s[y]?s[y]:a[j][y]+(i?"bit":"byte")+(1===v[0]?"":"s")),"object"===m?{value:v[0],symbol:v[1],exponent:y}:v.join(x)))}i.partial=function(e){return function(t){return i(t,e)}},e.exports=i}("undefined"!=typeof window&&window)}).call(this,n(65))},607:function(e,t,n){"use strict";var r,a=n(1),i=n.n(a),o=n(19),c=n(3),s=n(135),l=n(25),u=n(71),d=n(4),m=n(2),b=n(6),f=n(587),g=n(202),x=n(203),j=n(7),h=x.a.div(r||(r=Object(g.a)(["\n  /* The Modal (background) */\n  .modal {\n    display: block;\n    position: fixed; /* Stay in place */\n    z-index: 9999; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0, 0, 0); /* Fallback color */\n    background-color: rgba(\n      0,\n      0,\n      0,\n      0.9\n    ); /* Black w/ opacity */\n  }\n\n  /* Modal Content (Image) */\n  .modal-content {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n  }\n\n  /* Caption of Modal Image (Image Text) - Same Width as the Image */\n  #caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n  }\n\n  /* Add Animation - Zoom in the Modal */\n  .modal-content,\n  #caption {\n    animation-name: zoom;\n    animation-duration: 0.6s;\n  }\n\n  @keyframes zoom {\n    from {\n      transform: scale(0);\n    }\n    to {\n      transform: scale(1);\n    }\n  }\n\n  /* The Close Button */\n  .close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n  }\n\n  .close:hover,\n  .close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  /* 100% Image Width on Smaller Screens */\n  @media only screen and (max-width: 700px) {\n    .modal-content {\n      width: 100%;\n    }\n  }\n"])));var p=function(e){return Object(j.jsx)(h,{children:Object(j.jsxs)("div",{className:"modal",children:[Object(j.jsx)("span",{className:"close",onClick:e.onClose,children:"\xd7"}),Object(j.jsx)("img",{className:"modal-content",src:e.src,alt:e.alt})]})})};t.a=function(e){var t=Object(d.useState)(!1),n=Object(s.a)(t,2),r=n[0],a=n[1],g=Object(d.useState)(null),x=Object(s.a)(g,2),h=x[0],v=x[1],O=Object(d.useRef)(),y=Object(d.useState)(null),w=Object(s.a)(y,2),k=w[0],N=w[1],B=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]},q=function(){var t=Object(c.a)(i.a.mark((function t(n){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,(r=n.target.files)&&r.length){t.next=4;break}return t.abrupt("return");case 4:return c=r[0],f.a.validate(c,{storage:e.storage,image:!0}),a(!0),t.next=9,f.a.upload(c,{storage:e.storage,image:!0});case 9:c=t.sent,O.current.value="",a(!1),e.onChange([].concat(Object(o.a)(B()),[c])),t.next=21;break;case 15:t.prev=15,t.t0=t.catch(0),O.current.value="",console.error(t.t0),a(!1),b.a.showMessage(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}(),S=e.max,M=e.readonly,C=Object(j.jsxs)("label",{className:"".concat(r?"opacity-50 cursor-default":"cursor-pointer"," inline-block mt-2 mb-2 text-sm px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"),children:[Object(j.jsx)(u.a,{className:"mr-2",icon:l.m}),Object(m.d)("fileUploader.upload"),Object(j.jsx)("input",{style:{display:"none"},disabled:r||M,accept:"image/*",type:"file",onChange:q,ref:O})]});return Object(j.jsxs)("div",{children:[M||S&&B().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl}})).length>=S?null:C,B()&&B().length?Object(j.jsx)("div",{className:"mt-2 flex flex-row flex-wrap",children:B().map((function(t){return Object(j.jsxs)("div",{className:"mr-2 mb-2 rounded-md",style:{height:"100px"},onMouseEnter:function(){return N(t.id)},onMouseLeave:function(){return N(null)},children:[Object(j.jsx)("img",{alt:t.name,src:t.downloadUrl,className:"rounded-md",style:{width:"100px",height:"100px",objectFit:"cover"}}),Object(j.jsxs)("div",{className:"relative rounded-b-md text-center",style:{display:k===t.id?"block":"none",bottom:"1.5rem",width:"100px",backgroundColor:"rgba(0, 0, 0, 0.5)"},children:[Object(j.jsx)("button",{type:"button",className:"text-white",onClick:function(){return function(e){v({src:e.downloadUrl,alt:e.name})}(t)},children:Object(j.jsx)(u.a,{icon:l.n})}),!M&&Object(j.jsx)("button",{type:"button",className:"text-white ml-2",onClick:function(){return n=t.id,void e.onChange(B().filter((function(e){return e.id!==n})));var n},children:Object(j.jsx)(u.a,{icon:l.s})})]})]},t.id)}))}):null,h&&Object(j.jsx)(p,{src:h.src,alt:h.alt,onClose:function(){v(null)}})]})}},630:function(e,t,n){"use strict";var r=n(4),a=n(607),i=n(556),o=n(557),c=n(7);function s(e){var t=e.label,n=e.name,s=e.hint,l=e.storage,u=e.max,d=e.required,m=e.externalErrorMessage,b=Object(i.d)(),f=b.errors,g=b.formState,x=g.touched,j=g.isSubmitted,h=b.setValue,p=b.watch,v=b.register;Object(r.useEffect)((function(){v({name:n})}),[v,n]);var O=o.a.errorMessage(n,f,x,j,m);return Object(c.jsxs)("div",{children:[Boolean(t)&&Object(c.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",children:[t," ",d?Object(c.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(c.jsx)(a.a,{storage:l,value:p(n),onChange:function(t){h(n,t,{shouldValidate:!0}),e.onChange&&e.onChange(t)},max:u}),Object(c.jsx)("div",{className:"text-red-600 text-sm mt-2",children:O}),Boolean(s)&&Object(c.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:s})]})}s.defaultProps={max:void 0,required:!1},t.a=s},764:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(27),i=n(2),o=n(127),c=n(5),s=function(e){return e.settings},l=Object(c.a)([s],(function(e){return e.settings})),u={selectInitLoading:Object(c.a)([s],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(c.a)([s],(function(e){return Boolean(e.saveLoading)})),selectSettings:l,selectRaw:s},d=n(8),m=n(0),b=n(135),f=n(560),g=n(25),x=n(71),j=n(566),h=n(556),p=n(564),v=n(208),O=n(33),y=n(630),w=n(7),k=O.e().shape({logos:p.a.files(Object(i.d)("settings.fields.logos"),{max:1}),backgroundImages:p.a.files(Object(i.d)("settings.fields.backgroundImages"),{max:1})});var N=function(e){var t=Object(a.d)(),n=Object(a.e)(u.selectSaveLoading),c=e.settings,s=Object(r.useState)((function(){return c||{}})),l=Object(b.a)(s,1)[0],d=Object(h.c)({resolver:Object(j.yupResolver)(k),mode:"all",defaultValues:l}),p=function(e){t(o.a.doSave(e))};return Object(w.jsx)(h.a,Object(m.a)(Object(m.a)({},d),{},{children:Object(w.jsxs)("form",{onSubmit:d.handleSubmit(p),children:[Object(w.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md",children:Object(w.jsx)(y.a,{name:"logos",label:Object(i.d)("settings.fields.logos"),storage:v.a.values.settingsLogos,max:1})}),Object(w.jsx)("div",{className:"w-full sm:w-md md:w-md lg:w-md mt-4",children:Object(w.jsx)(y.a,{name:"backgroundImages",label:Object(i.d)("settings.fields.backgroundImages"),storage:v.a.values.settingsBackgroundImages,max:1})}),Object(w.jsxs)("div",{className:"pt-4",children:[Object(w.jsxs)("button",{className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",disabled:n,type:"button",onClick:d.handleSubmit(p),children:[Object(w.jsx)(x.a,{className:"mr-2",icon:f.e}),Object(i.d)("common.save")]}),Object(w.jsxs)("button",{disabled:n,onClick:function(){Object.keys(l).forEach((function(e){d.setValue(e,l[e])}))},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(w.jsx)(x.a,{className:"mr-2",icon:g.t}),Object(i.d)("common.reset")]}),e.onCancel?Object(w.jsxs)("button",{disabled:n,onClick:function(){return e.onCancel()},className:"mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(w.jsx)(x.a,{className:"mr-2",icon:g.s}),Object(i.d)("common.cancel")]}):null]})]})}))},B=n(75),q=n(78);var S=function(e){var t=Object(a.e)(q.a.selectPermissionToRead);return Object(w.jsx)("div",{className:"mb-4",children:t&&Object(w.jsx)(B.a,{to:"/audit-logs?entityNames=settings",children:Object(w.jsxs)("button",{className:"text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100",type:"button",children:[Object(w.jsx)(x.a,{className:"mr-2",icon:g.i}),Object(i.d)("auditLog.menu")]})})})},M=n(558),C=n(563);t.default=function(e){var t=Object(a.d)(),n=Object(a.e)(u.selectInitLoading),c=Object(a.e)(u.selectSettings);return Object(r.useEffect)((function(){t(o.a.doInit())}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(M.a,{items:[[Object(i.d)("dashboard.menu"),"/"],[Object(i.d)("settings.title")]]}),Object(w.jsxs)("div",{className:"mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md",children:[Object(w.jsx)("h1",{className:"text-lg font-medium mb-6",children:Object(i.d)("settings.title")}),Object(w.jsx)(S,{}),n&&Object(w.jsx)(C.a,{}),!n&&c&&Object(w.jsx)(N,{settings:c,onCancel:function(){return Object(d.b)().push("/")}})]})]})}}}]);