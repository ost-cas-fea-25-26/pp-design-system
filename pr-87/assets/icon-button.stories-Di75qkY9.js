import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as d}from"./index-DutoEiXV.js";import{P as y,T as g,S as f}from"./icons-CrCLVlP4.js";import"./iframe-bW3SthuQ.js";import"./preload-helper-PPVm8Dsz.js";const v=d("cursor-pointer flex justify-center items-center transition-colors duration-[350ms] ease-in-out group",{variants:{color:{primary:"focus-ring-primary text-primary-600 hover:text-primary-900",neutral:"focus-ring-neutral text-neutral-400 hover:text-neutral-600"},layout:{horizontal:"flex-row",stacked:"flex-col rounded-lg p-2 space-y-[4px]"}},compoundVariants:[{color:"primary",layout:"stacked",class:"bg-primary-600 text-primary-foreground hover:text-primary-foreground hover:bg-primary-700"},{color:"neutral",layout:"stacked",class:"bg-neutral-600 text-neutral-foreground hover:text-neutral-foreground hover:bg-neutral-700"}]}),o=({label:l,IconComponent:s,color:i="primary",layout:n="horizontal",onClick:c,animation:m})=>{const u=n==="stacked"?"m":"s",p=m==="rotate"?"inline-flex transition-transform duration-300 ease-in-out group-hover:rotate-180":"";return e.jsxs("button",{className:v({color:i,layout:n}),onClick:c,children:[e.jsx("span",{className:p,"data-testid":"icon-wrapper",children:e.jsx(s,{size:u,color:"inherit"})}),e.jsx("span",{className:"label-s ml-1",children:l})]})};o.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{label:{required:!0,tsType:{name:"string"},description:""},IconComponent:{required:!0,tsType:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:`{
  color?: IconColor;
  size?: IconSize;
}`,signature:{properties:[{key:"color",value:{name:"union",raw:`| "primary"
| "accent"
| "neutral"
| "white"
| "error"
| "inherit"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"white"'},{name:"literal",value:'"error"'},{name:"literal",value:'"inherit"'}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof ICON_SIZE_MAP",elements:[{name:"literal",value:"s"},{name:"literal",value:"m"},{name:"literal",value:"l"}],required:!1}}]}}],raw:"ComponentType<IconProps>"},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "neutral"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"neutral"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},layout:{required:!1,tsType:{name:"union",raw:'"horizontal" | "stacked"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"stacked"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},animation:{required:!1,tsType:{name:"literal",value:'"rotate"'},description:""}}};const k={title:"Icon Button",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{color:{control:"radio",options:["primary","neutral"]},layout:{control:"radio",options:["horizontal","stacked"]},label:{control:"text",description:"Label"},animation:{control:"radio",options:["none","rotate"]}}},r={args:{label:"Username",IconComponent:y}},a={args:{color:"neutral",label:"Timestamp",IconComponent:g}},t={args:{layout:"stacked",color:"primary",label:"Settings",IconComponent:f,animation:"rotate"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    IconComponent: ProfileIcon
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: "neutral",
    label: "Timestamp",
    IconComponent: TimeIcon
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "stacked",
    color: "primary",
    label: "Settings",
    IconComponent: SettingsIcon,
    animation: "rotate"
  }
}`,...t.parameters?.docs?.source}}};const C=["Default","Neutral","Settings"];export{r as Default,a as Neutral,t as Settings,C as __namedExportsOrder,k as default};
