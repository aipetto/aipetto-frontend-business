(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[131],{1061:function(e,t,c){"use strict";c.r(t);var s=c(14),l=c(15),a=c(85),n=c(86),i=c(6),r=c.n(i),o=c(215),d=c(110),x=c(847),j=c(13);function b(e){var t=r.a.useState(!1),c=Object(o.a)(t,2);c[0],c[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"p-4 nav-section w-full",children:Object(j.jsx)("div",{className:"container mx-auto",children:Object(j.jsxs)("div",{className:"flex justify-between flex- content-center items-center py-2 lg:py-0 px-0 lg:px-0",children:[Object(j.jsx)(d.a,{to:"/",className:"text-blueGray-700 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",children:Object(j.jsx)("h1",{className:"relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl xl:mb-8",children:"aipetto"})}),Object(j.jsx)("div",{className:"hidden md:block",children:Object(j.jsx)("ul",{className:"flex flex-row",children:Object(j.jsx)(x.a,{})})})]})})})})}var m=c(932),h=(c(933),c(2));m.StylesManager.applyTheme("modern");var u=function(e){Object(a.a)(c,e);var t=Object(n.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"onComplete",value:function(e,t){console.log("Survey results: "+JSON.stringify(e.data))}},{key:"render",value:function(){var e={questions:[{type:"text",name:"name",title:Object(h.d)("survey.nameTitle"),isRequired:!0},{type:"text",name:"email",title:Object(h.d)("survey.emailTitle"),isRequired:!0},{type:"text",name:"numberOfPets",title:Object(h.d)("survey.numberOfPets"),isRequired:!0},{type:"checkbox",name:"interests",title:Object(h.d)("survey.checkboxTitle"),isRequired:!0,colCount:6,choices:[Object(h.d)("survey.checkboxChoices.saveMoneyOnServices"),Object(h.d)("survey.checkboxChoices.findTheClosestPlaceToGetServices"),Object(h.d)("survey.checkboxChoices.findWhereToPlayWithMyPet"),Object(h.d)("survey.checkboxChoices.knowMoreAboutPets"),Object(h.d)("survey.checkboxChoices.adoptAPet"),Object(h.d)("survey.checkboxChoices.getMoreMedicalInformation"),Object(h.d)("survey.checkboxChoices.beAbleToChatWithAVeterinarian"),Object(h.d)("survey.checkboxChoices.seeWhatPetsMyFriendsHave"),Object(h.d)("survey.checkboxChoices.findATrustedPersonToWalkMyPet")]},{type:"text",name:"extraInfo",title:Object(h.d)("survey.extraInfo")}]},t=new m.Model(e);return t.locale=localStorage.getItem("language")||"en",Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"antialiased overflow-hidden overflow-y-scroll",children:[Object(j.jsxs)("div",{className:"hero w-full",children:[Object(j.jsx)(b,{fixed:!0}),Object(j.jsx)("div",{className:"container mx-auto mt-8",children:Object(j.jsxs)("div",{className:"py-0 md:py-16 hero__content text-center w-4/5 mx-auto fade-in fade-in-first",children:[Object(j.jsx)("h1",{className:"text-2xl md:text-3xl lg:text-4xl font-bold leading-tight",children:Object(h.d)("public.landingTitle")}),Object(j.jsx)("p",{className:"text-xl pt-4 pb-8 text-gray-700",children:Object(h.d)("public.landingSubtitle")})]})}),Object(j.jsx)("div",{className:"container mx-auto mt-8",children:Object(j.jsxs)("div",{className:"flex space-x-4",children:[Object(j.jsx)("div",{className:"flex-1",children:Object(j.jsx)(m.Survey,{model:t,onComplete:this.onComplete})}),Object(j.jsx)("div",{className:"flex-1",children:Object(j.jsx)("div",{className:"text-center fade-in fade-in-second hidden md:block",children:Object(j.jsx)("div",{className:"",children:Object(j.jsx)("div",{className:"hero-mockup w-5/8 sm:col-4/6 w-4/5 lg:w-full mx-auto relative",children:Object(j.jsx)("img",{src:"images/woman-pet-searching.png",alt:"aipetto",className:"lazy"})})})})})]})})]}),Object(j.jsx)("footer",{className:"py-8 text-center md:text-left",children:Object(j.jsx)("div",{className:"container mx-auto",children:Object(j.jsx)("div",{className:" flex flex-col lg:flex-row content-center items-center justify-between",children:Object(j.jsx)("div",{className:"flex items-center flex-col lg:flex-row mx-auto",children:Object(j.jsx)("span",{className:"ml-0 md:ml-4 text-sm text-gray-600 py-4 lg:py-0",children:"aipetto, Copyright \xa9 2021"})})})})})]})})}}]),c}(i.Component);t.default=u},847:function(e,t,c){"use strict";c(6);var s=c(2),l=c(68),a=c(13);t.a=function(e){return Object(a.jsx)("div",{className:"flex items-center justify-center w-full",children:Object(s.c)().map((function(e){return Object(a.jsx)("img",{className:"mr-2 cursor-pointer",alt:e.label,title:e.label,src:e.flag,onClick:function(){return function(e){l.a.doChangeLanguage(e)}(e.id)}},e.id)}))})}}}]);