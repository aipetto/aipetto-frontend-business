(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[128],{703:function(e,r,t){"use strict";var n=t(215),a=t(6),i=t(701),l=t(706),u=t(692),c=t(13);function s(e){var r=Object(a.useState)(Object(u.a)()),t=Object(n.a)(r,1)[0],s=e.label,o=e.name,m=e.hint,d=e.type,b=e.placeholder,f=e.autoFocus,x=e.autoComplete,j=e.required,g=e.externalErrorMessage,h=e.disabled,v=e.endAdornment,O=Object(i.d)(),p=O.register,y=O.errors,q=O.formState,k=q.touched,w=q.isSubmitted,N=l.a.errorMessage(o,y,k,w,g);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Boolean(s)&&Object(c.jsxs)("label",{className:"block text-sm text-gray-800 dark:text-gray-200",htmlFor:t,children:[s," ",j?Object(c.jsx)("span",{className:"text-sm text-red-400",children:"*"}):null]}),Object(c.jsxs)("div",{className:"flex flex-nowrap items-baseline",children:[Object(c.jsx)("input",{id:t,name:o,type:d,ref:p,onChange:function(r){e.onChange&&e.onChange(r.target.value)},onBlur:function(r){e.onBlur&&e.onBlur(r)},placeholder:b||void 0,autoFocus:f||void 0,autoComplete:x||void 0,disabled:h,className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring ".concat(N?"border-red-400 text-red-600":"")}),v&&Object(c.jsx)("span",{className:"ml-2 text-gray-700",children:v})]})]}),Object(c.jsx)("div",{className:"text-red-600 text-sm mt-2",children:N}),Boolean(m)&&Object(c.jsx)("div",{className:"text-gray-500 text-sm mt-2",children:m})]})}s.defaultProps={type:"text",required:!1},r.a=s},704:function(e,r,t){"use strict";var n=t(16),a=t(35),i=t(2),l=t(36),u=t.n(l),c={generic:function(e){return a.c().label(e)},string:function(e,r){r=r||{};var t=a.h().transform((function(e,r){return""===r?null:e})).nullable(!0).trim().label(e);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},boolean:function(e,r){return a.b().default(!1).label(e)},relationToOne:function(e,r){r=r||{};var t=a.c().nullable(!0).label(e).transform((function(e,r){return r?r.id:null}));return r.required&&(t=t.required()),t},stringArray:function(e,r){r=r||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,r){return""===r?null:e})).trim()).label(e);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},relationToMany:function(e,r){r=r||{};var t=a.a().nullable(!0).label(e).transform((function(e,r){return r&&r.length?r.map((function(e){return e.id})):[]}));return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},integer:function(e,r){r=r||{};var t=a.d().transform((function(e,r){return""===r?null:e})).integer().nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},images:function(e,r){r=r||{};var t=a.a().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},files:function(e,r){r=r||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||0===r.min?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},enumerator:function(e,r){r=r||{};var t=a.h().transform((function(e,r){return""===r?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(n.a)(r.options||[])));return r.required&&(t=t.required(Object(i.d)("validation.string.selected"))),t},email:function(e,r){r=r||{};var t=a.h().transform((function(e,r){return""===r?null:e})).nullable(!0).trim().label(e).email();return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},decimal:function(e,r){r=r||{};var t=a.d().transform((function(e,r){return""===r?null:e})).nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||0===r.min)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},datetime:function(e,r){r=r||{};var t=a.c().nullable(!0).label(e).transform((function(e,r){return e?u()(r,"YYYY-MM-DD HH:mm").toISOString():null}));return r.required&&(t=t.required()),t},date:function(e,r){r=r||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.d)("validation.mixed.default"),(function(e){return!e||u()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?u()(e).format("YYYY-MM-DD"):null}));return r.required&&(t=t.required()),t}};r.a=c},706:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var n=t(14),a=t(15),i=function(){function e(){Object(n.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,r,t,n){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!n&&!t[e])return null;var l=r[e];return(null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),e}()},966:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t(1),i=t.n(a),l=t(3),u=t(215),c=t(705),s=t(6),o=t(701),m=t(30),d=t(110),b=t(2),f=t(26),x=t(28),j=t(704),g=t(703),h=t(35),v=t(13),O=h.e().shape({email:j.a.string(Object(b.d)("user.fields.email"),{required:!0,max:255})});r.default=function(){var e=Object(m.d)(),r=Object(m.e)(x.a.selectLoadingPasswordResetEmail),t=Object(m.e)(x.a.selectBackgroundImageUrl),a=Object(m.e)(x.a.selectLogoUrl),j=Object(s.useState)((function(){return{email:""}})),h=Object(u.a)(j,1)[0],p=Object(o.c)({resolver:Object(c.yupResolver)(O),mode:"onSubmit",defaultValues:h}),y=function(){var r=Object(l.a)(i.a.mark((function r(t){var n;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.email,r.next=3,e(f.a.doSendPasswordResetEmail(n));case 3:Object.keys(h).forEach((function(e){p.setValue(e,h[e])}));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(v.jsx)("div",{style:{backgroundImage:"url(".concat(t||"/images/pets-background.jpeg",")")},className:"bg-cover h-screen flex items-center justify-center",children:Object(v.jsxs)("div",{className:"w-full md:max-w-sm lg:max-w-sm m-auto bg-white md:rounded-md lg:rounded-md shadow-md dark:bg-gray-800",children:[Object(v.jsxs)("div",{className:"p-6",children:[Object(v.jsx)("div",{className:"w-full flex justify-center items-center",children:a?Object(v.jsx)("img",{src:a,className:"w-72 max-h-14 object-cover",alt:Object(b.d)("app.title")}):Object(v.jsx)("h1",{className:"text-3xl font-semibold text-center text-gray-700 dark:text-white",children:Object(b.d)("app.title")})}),Object(v.jsx)(o.a,Object(n.a)(Object(n.a)({},p),{},{children:Object(v.jsxs)("form",{className:"mt-6",onSubmit:p.handleSubmit(y),children:[Object(v.jsx)(g.a,{name:"email",label:Object(b.d)("user.fields.email"),autoComplete:"email",disabled:r,autoFocus:!0}),Object(v.jsx)("div",{className:"mt-6",children:Object(v.jsx)("button",{type:"submit",className:"disabled:opacity-50 disabled:cursor-default w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",disabled:r,children:Object(b.d)("auth.passwordResetEmail.message")})})]})}))]}),Object(v.jsx)("div",{className:"bg-gray-100 dark:bg-gray-700 py-4 rounded-b-md",children:Object(v.jsx)(d.a,{className:"block text-xs text-center font-medium text-gray-800 dark:text-gray-200 hover:underline",to:"/auth/signin",children:Object(b.d)("common.cancel")})})]})})}}}]);