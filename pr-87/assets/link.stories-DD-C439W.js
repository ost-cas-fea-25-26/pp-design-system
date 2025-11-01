import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as p}from"./index-ChrwrO0U.js";import"./iframe-bW3SthuQ.js";import"./preload-helper-PPVm8Dsz.js";const a=({title:s,href:n,target:o="_self",asChild:i=!1,children:l})=>{const c=i?p:"a";return r.jsx(c,{href:n,title:s,target:o,className:"label-sm text-primary hover:decoration-primary-200 hover:cursor-pointer hover:underline-offset-4 underline decoration-solid decoration-1 underline-offset-2 focus-ring-primary",children:l})};a.__docgenInfo={description:"",methods:[],displayName:"Link",props:{title:{required:!0,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"union",raw:'"_self" | "_blank"',elements:[{name:"literal",value:'"_self"'},{name:"literal",value:'"_blank"'}]},description:"",defaultValue:{value:'"_self"',computed:!1}},asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const h={title:"Link",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{title:{control:"text",description:"Link label"},href:{control:"text",description:"Link href"},target:{control:"select",description:"Link target",options:["_self","_blank"]}}},e={args:{asChild:!1,children:"Click me",title:"Example Link",target:"_blank",href:"https://example.com"}},t={args:{asChild:!0,children:r.jsx("span",{children:"Click me!"}),href:"https://example.com",title:"Button Link"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    asChild: false,
    children: "Click me",
    title: "Example Link",
    target: "_blank",
    href: "https://example.com"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <span>Click me!</span>,
    href: "https://example.com",
    title: "Button Link"
  }
}`,...t.parameters?.docs?.source}}};const k=["Default","AsChild"];export{t as AsChild,e as Default,k as __namedExportsOrder,h as default};
