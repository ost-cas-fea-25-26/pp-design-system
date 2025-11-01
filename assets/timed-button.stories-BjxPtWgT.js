import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-2r-4sk-G.js";import{t as d}from"./bundle-mjs-D6B6e0vX.js";import{b as m}from"./icons-BrtHK9pW.js";import"./preload-helper-BXl3LOEh.js";const i=({duration:r=2e3,...e})=>{const[t,n]=u.useState("idle"),s=async()=>{if(t==="idle"&&e.onClick){n("processing");try{await e.onClick(),n("active"),setTimeout(()=>{n("idle")},r)}catch(c){console.error(c),n("idle")}}},l=t==="active"?e.activeLabel:e.label;return o.jsxs("button",{onClick:s,className:d('focus-ring-neutral inline-flex items-center px-4 py-2 cursor-pointer rounded-2xl hover:bg-neutral-100 active:bg-neutral-100"',t==="processing"&&"cursor-wait bg-neutral-100",t==="active"&&"cursor-default bg-neutral-100"),children:[e.icon&&o.jsx("span",{className:"mr-2",children:e.icon}),l]})};i.__docgenInfo={description:"",methods:[],displayName:"TimedButton",props:{label:{required:!0,tsType:{name:"string"},description:""},activeLabel:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2000",computed:!1}}}};const x={title:"Timed Button",tags:["autodocs"],parameters:{layout:"centered"},component:i,argTypes:{label:{control:"text"},activeLabel:{control:"text"},duration:{control:"number"}},args:{label:"Please like me",activeLabel:"I like you, too",duration:5e3}},a={render:r=>{const e=()=>new Promise(t=>{setTimeout(()=>{alert("API call finished."),t()},1e3)});return o.jsx(i,{label:r.label,activeLabel:r.activeLabel,duration:r.duration,icon:o.jsx(m,{color:"neutral"}),onClick:e})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const clickHandler = () => {
      return new Promise<void>(resolve => {
        setTimeout(() => {
          // eslint-disable-next-line no-alert
          alert("API call finished.");
          resolve();
        }, 1000);
      });
    };
    return <TimedButton label={args.label} activeLabel={args.activeLabel} duration={args.duration} icon={<HeartIcon color="neutral" />} onClick={clickHandler} />;
  }
}`,...a.parameters?.docs?.source}}};const T=["Default"];export{a as Default,T as __namedExportsOrder,x as default};
