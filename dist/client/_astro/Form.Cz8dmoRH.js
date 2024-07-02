import{r as c}from"./index.NEDEFKed.js";var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=c,f=Symbol.for("react.element"),b=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,g=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function m(o,r,s){var t,l={},a=null,n=null;s!==void 0&&(a=""+s),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(n=r.ref);for(t in r)h.call(r,t)&&!y.hasOwnProperty(t)&&(l[t]=r[t]);if(o&&o.defaultProps)for(t in r=o.defaultProps,r)l[t]===void 0&&(l[t]=r[t]);return{$$typeof:f,type:o,key:a,ref:n,props:l,_owner:g.current}}i.Fragment=b;i.jsx=m;i.jsxs=m;p.exports=i;var e=p.exports;const j=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",children:e.jsx("animate",{attributeName:"r",begin:"0",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),e.jsx("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(45 12 12)",children:e.jsx("animate",{attributeName:"r",begin:"0.125s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),e.jsx("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(90 12 12)",children:e.jsx("animate",{attributeName:"r",begin:"0.25s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),e.jsx("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(135 12 12)",children:e.jsx("animate",{attributeName:"r",begin:"0.375s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),e.jsx("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(180 12 12)",children:e.jsx("animate",{attributeName:"r",begin:"0.5s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),e.jsx("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(225 12 12)",children:e.jsx("animate",{attributeName:"r",begin:"0.625s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),e.jsx("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(270 12 12)",children:e.jsx("animate",{attributeName:"r",begin:"0.75s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),e.jsx("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(315 12 12)",children:e.jsx("animate",{attributeName:"r",begin:"0.875s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})})]}),k=()=>{const[o,r]=c.useState(!1),[s,t]=c.useState("");async function l(a){a.preventDefault(),r(!0);const n=new FormData(a.target),d=await fetch("/api/contact",{method:"POST",body:n});console.log(d);const u=await d.json();r(!1),u.message&&t(u.message),a.target.reset()}return c.useEffect(()=>{let a;return s&&(a=setTimeout(()=>{t("")},3e3)),()=>clearTimeout(a)},[s]),e.jsx("section",{id:"cta",className:"pb-20 mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5",children:e.jsx("div",{className:"w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-ter/20 dark:from-gray-900",children:e.jsxs("div",{className:"mx-auto max-w-xl md:max-w-5xl relative",children:[e.jsx("h6",{className:`text-3xl/tight sm:text-4xl/tight md:text-5xl/tight
           font-bold text-heading-1 text-center mb-12 mt-1 text-ter`,children:"Ponte en contacto con nosotros."}),e.jsxs("form",{onSubmit:l,className:"max-w-md mx-auto",children:[e.jsxs("div",{className:"grid md:grid-cols-2 md:gap-6",children:[e.jsxs("div",{className:"relative z-0 w-full mb-4 group",children:[e.jsx("input",{type:"text",id:"name",name:"name",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:""}),e.jsx("label",{htmlFor:"name",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Nombre"})]}),e.jsxs("div",{className:"relative z-0 w-full mb-1 group",children:[e.jsx("input",{type:"text",id:"surname",name:"surname",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:""}),e.jsx("label",{htmlFor:"surname",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Apellido"})]})]}),e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{type:"email",id:"email",name:"email",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:""}),e.jsx("label",{htmlFor:"email",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Correo electronico"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 md:gap-x-6 mb-5",children:[e.jsxs("div",{className:"relative z-0 w-full mb-1 group",children:[e.jsx("input",{type:"tel",id:"phone",name:"phone",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:""}),e.jsx("label",{htmlFor:"phone",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Teléfono"})]}),e.jsxs("div",{className:"relative z-0 w-full mb-1 group",children:[e.jsx("input",{type:"text",id:"company",name:"company",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:""}),e.jsx("label",{htmlFor:"company",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Nombre de tu empresa"})]})]}),e.jsx("div",{className:"relative z-0 w-full mb-5 group",children:e.jsxs("select",{id:"date",name:"date",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",children:[e.jsx("option",{value:"",children:"¿En qué momento podemos contactarte?"}),e.jsx("option",{value:"completo",children:"En cualquier momento del día"}),e.jsx("option",{value:"mañana",children:"Por la mañana (de 9 a 12 hs)"}),e.jsx("option",{value:"tarde",children:"Por la tarde (de 14 a 18 hs)"})]})}),e.jsx("div",{className:"relative z-0 w-full mb-5 group",children:e.jsxs("select",{id:"contact",name:"contact",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:border-blue-600 peer",children:[e.jsx("option",{value:"",children:"¿Por qué medio preferís que te contactemos?"}),e.jsx("option",{value:"indestinto",children:"Es indestinto"}),e.jsx("option",{value:"email",children:"Correo electrónico"}),e.jsx("option",{value:"telefono",children:"Llamado telefónico"}),e.jsx("option",{value:"whatsapp",children:"Whatsapp"})]})}),e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("label",{htmlFor:"",id:"message",className:"text-sm text-gray-900 dark:text-white ",children:"Dejanos tu consulta"}),e.jsx("textarea",{id:"message",name:"message",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"})]}),e.jsx("div",{className:"flex justify-center w-full",children:e.jsx("button",{type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm min-w-[15rem] w-[20rem] max-w-[20rem]  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ",children:o?e.jsxs("div",{className:"flex justify-center items-center gap-4",children:[" ",e.jsx("p",{children:"Enviando"})," ",e.jsx(j,{})]}):e.jsx("p",{children:"Consultar"})})}),e.jsx("div",{className:"mt-4 flex justify-center items-center h-[3rem]",children:s&&e.jsx("p",{className:`response-message ${s.includes("Faltan campos requeridos")?"bg-red-500 min-w-[15rem] w-[20rem] max-w-[20rem]  px-5 py-2.5 rounded-md text-white text-center animate-fade-in":"bg-green-500 min-w-[15rem] w-[20rem] max-w-[20rem]  px-5 py-2.5 rounded-md text-white text-center animate-fade-in"}`,children:s})})]})]})})})};export{k as Form};
