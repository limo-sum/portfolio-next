(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1e3:function(e,l,s){Promise.resolve().then(s.bind(s,9552))},9552:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return S}});var t=s(7437);let a="https://z70otq9zy9.execute-api.us-east-1.amazonaws.com/prod/",n=async e=>{let l=await fetch(e,{method:"GET"}),s=await l.json();if((null==s?void 0:s.message)==="OK")return null==s?void 0:s.data},r=async()=>await n("".concat(a,"intro")),i=()=>n("".concat(a,"works")),o=()=>n("".concat(a,"projects")),c=()=>n("".concat(a,"educations"));var d=s(2265),x=s(9252);let u=e=>{let{text:l}=e;return(0,t.jsx)("h1",{className:"mb-6 mt-6 font-bolder text-4xl",id:l,children:l})},m=e=>{let{text:l}=e;return(0,t.jsx)("span",{className:"px-3 xt-xs border border-gray-300 text-sm text-gray-600",children:l})},h=e=>{let{texts:l}=e;return(0,t.jsx)("ul",{className:"mt-2 mb-2 flex flex-wrap gap-1",children:null==l?void 0:l.map(e=>(0,t.jsx)(m,{text:e},e))})},p=(0,x.Pi)(()=>{let[e,l]=(0,d.useState)(null);(0,d.useEffect)(()=>{s()},[]);let s=async()=>{let e=await r();l(e)};return(0,t.jsxs)("div",{className:"mb-4",id:"INTRO",children:[(0,t.jsx)("li",{children:null==e?void 0:e.introduction}),(0,t.jsx)("br",{}),(0,t.jsx)(h,{texts:null==e?void 0:e.skills})]})}),j=(e,l)=>{let s=new Date(e),a="재직중"===l?new Date:new Date(l),n=a.getFullYear()-s.getFullYear(),r=a.getMonth()-s.getMonth(),i=r+12*n,o=i>=12?"".concat(Math.floor(i/12),"년 ").concat(i%12,"개월"):"".concat(i%12,"개월");return(0,t.jsxs)("p",{children:[(0,t.jsxs)("span",{children:[e," ~ ",l]}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-gray-400",children:o})]})};var g=s(4256);let v=(0,g.LO)({menus:[{title:"INTRO"},{title:"PROJECTS"},{title:"WORKS"},{title:"EDUCATIONS"}],currentMenu:"INTRO",loading:!0,intro:{},works:[],projects:[],educations:[],setMenus:(0,g.aD)(async e=>{v.menus=e}),setCurrentMenu:(0,g.aD)(async e=>{v.currentMenu=e}),setLoading:(0,g.aD)(async e=>{v.loading=e}),setIntro:(0,g.aD)(async e=>{v.intro=e}),setWorks:(0,g.aD)(async e=>{v.works=e}),setProjects:(0,g.aD)(async e=>{v.projects=e}),setEducations:(0,g.aD)(async e=>{v.educations=e})});var b=()=>({globalStore:v});let f=(0,x.Pi)(()=>{let{works:e}=b().globalStore;return(0,t.jsxs)("div",{children:[(0,t.jsx)(u,{text:"WORKS"}),null==e?void 0:e.map(e=>{var l;return(0,t.jsxs)("div",{className:"relative mb-12 grid grid-cols-4 gap-4 pb-1",children:[(0,t.jsx)("div",{className:"absolute -inset-x-4 -inset-y-4 z-0 cursor-default border border-transparent rounded hover:border-gray-300"}),(0,t.jsx)("div",{className:"col-span-1",children:j(null==e?void 0:e.start_from,null==e?void 0:e.end_to)}),(0,t.jsxs)("div",{className:"col-span-3",children:[(0,t.jsxs)("div",{className:"flex items-end",children:[(0,t.jsx)("h1",{className:"font-bold text-xl",children:null==e?void 0:e.at}),(0,t.jsxs)("span",{className:"ml-1 text-sm text-gray-500",children:[" ",null==e?void 0:e.position]})]}),null==e?void 0:null===(l=e.descriptions)||void 0===l?void 0:l.map(e=>(0,t.jsx)("p",{children:(0,t.jsx)("span",{children:e})},e))]})]},e.at)})]})});var N=s(504),w=s(7188);let y=(0,x.Pi)(()=>{let{projects:e}=b().globalStore;return(0,t.jsxs)("div",{children:[(0,t.jsx)(u,{text:"PROJECTS"}),null==e?void 0:e.map(e=>{var l;return(0,t.jsxs)("div",{className:"relative mb-12 grid grid-cols-4 gap-4 pb-1",children:[(0,t.jsx)("div",{className:"absolute -inset-x-4 -inset-y-4 z-0 cursor-default border border-transparent rounded hover:border-gray-300"}),(0,t.jsxs)("p",{className:"col-span-1",children:[null==e?void 0:e.start_from," ~ ",null==e?void 0:e.end_to]}),(0,t.jsxs)("div",{className:"col-span-3",children:[(0,t.jsx)("h1",{className:"font-bold text-xl",children:null==e?void 0:e.title}),(0,t.jsx)("span",{children:null==e?void 0:e.introduction}),(0,t.jsx)(h,{texts:null==e?void 0:e.skills}),(0,t.jsx)("ul",{className:"flex flex-col gap-2",children:null==e?void 0:null===(l=e.contents)||void 0===l?void 0:l.map(e=>(0,t.jsxs)("li",{children:[(0,t.jsxs)("p",{className:"border-b border-dashed py-1 mb-1",children:[(0,t.jsx)(N.G,{icon:w.cC_,color:"gray"}),(0,t.jsx)("span",{className:"ml-1 text-gray-500",children:e.position})]}),(0,t.jsx)("ul",{className:"pl-2",children:e.outputs.map(e=>(0,t.jsx)("li",{children:e},e))})]},e.position))})]})]},e.title)})]})}),E=(0,x.Pi)(()=>{let{educations:e}=b().globalStore;return(0,t.jsxs)("div",{children:[(0,t.jsx)(u,{text:"EDUCATIONS"}),null==e?void 0:e.map(e=>(0,t.jsxs)("div",{className:"relative mb-12 grid grid-cols-4 gap-4 pb-1",children:[(0,t.jsx)("div",{className:"absolute -inset-x-4 -inset-y-4 z-0 cursor-default border border-transparent rounded hover:border-gray-300"}),(0,t.jsxs)("p",{className:"col-span-1",children:[null==e?void 0:e.start_from," ~ ",null==e?void 0:e.end_to]}),(0,t.jsxs)("div",{className:"col-span-3",children:[(0,t.jsx)("h1",{className:"font-bold",children:null==e?void 0:e.at}),(0,t.jsx)("span",{children:e.title})]})]},e.at))]})});var k=s(2759),O=s(62);let _=(0,x.Pi)(()=>{let{globalStore:e}=b(),{menus:l,currentMenu:s,setCurrentMenu:a}=e,[n,r]=(0,d.useState)(!1),i=()=>{r(!0),setTimeout(()=>r(!1),1e3)},o=e=>{a(e)};return(0,d.useEffect)(()=>{let e=document.getElementById(s);if(e){let l="INTRO"===s,t=e.getBoundingClientRect().top+window.pageYOffset+(l?-120:-12);window.scrollTo({top:t,behavior:"smooth"})}},[s]),(0,t.jsxs)("header",{className:"lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-4xl font-bold tracking-tight sm:text-5xl",children:(0,t.jsx)("a",{href:"/portfolio-next",children:"LEE JIYUN"})}),(0,t.jsx)("h2",{className:"mt-3 text-lg font-medium tracking-tight sm:text-xl cursor-default",children:"WEB DEVELOPER"})]}),(0,t.jsx)("nav",{className:"lg:block",children:(0,t.jsx)("ul",{className:"mt-16 w-max",children:l.map(e=>(0,t.jsxs)("li",{className:"mb-4 cursor-pointer relative group",onClick:()=>o(e.title),children:[(0,t.jsx)("span",{className:"absolute -left-0 bottom-0 text-xl\n                  ".concat(s===e.title?"w-full":"w-0"," h-full\n                   bg-gray-100 -z-10 group-hover:w-full group-hover:transition-all")}),e.title]},e.title))})}),(0,t.jsxs)("ul",{className:"ml-1 mt-8 flex items-center gap-4",children:[(0,t.jsx)("li",{onClick:()=>{navigator.clipboard.writeText("limosum.dev@gmail.com").then(()=>i())},children:(0,t.jsx)(N.G,{icon:n?k.LEp:k.FU$})}),(0,t.jsx)("li",{onClick:()=>{window.open("https://github.com/limo-sum")},children:(0,t.jsx)(N.G,{icon:O.Nz9})})]})]})}),D=(0,x.Pi)(()=>{let{globalStore:e}=b(),{loading:l,setLoading:s,setWorks:a,setProjects:n,setEducations:r}=e;(0,d.useEffect)(()=>{x()},[]);let x=async()=>{s(!0),window.onbeforeunload=function(){window.scrollTo(0,0)};let e=await i();a(e);let l=await o();n(l);let t=await c();r(t),s(!1)};return(0,t.jsxs)("div",{className:"box-border mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-24 lg:py-0 font-['NanumSquareNeo-Variable'] select-none",children:[l&&(0,t.jsx)("div",{className:"fixed top-0 left-0 z-10 bg-white h-full w-full",children:(0,t.jsx)("div",{className:"absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4",children:(0,t.jsx)("div",{className:"content-center h-12 w-12 animate-spin rounded-full border-4 border-solid border-gray border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white",role:"status"})})}),(0,t.jsxs)("div",{className:"lg:grid lg:gap-4 lg:grid-cols-3",children:[(0,t.jsx)(_,{}),(0,t.jsxs)("article",{className:"col-span-2 py-24",children:[(0,t.jsx)(p,{}),(0,t.jsx)(y,{}),(0,t.jsx)(f,{}),(0,t.jsx)(E,{})]})]})]})});var S=D}},function(e){e.O(0,[147,676,958,976,67,971,596,744],function(){return e(e.s=1e3)}),_N_E=e.O()}]);