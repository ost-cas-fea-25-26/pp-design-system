import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{t as i}from"./bundle-mjs-D6B6e0vX.js";const p={title:"Colors",parameters:{layout:"centered"},tags:["autodocs"]},t=({name:e,colorClass:r})=>a.jsxs("div",{className:"flex flex-col items-center text-center shrink-0",children:[a.jsx("div",{className:i("w-12 h-12 rounded-md border border-neutral border-dashed mb-1",r)}),a.jsx("p",{className:"label-sm",children:e})]}),l=({title:e,specials:r,scales:c})=>a.jsxs("section",{className:"space-y-2 w-full",children:[a.jsx("h2",{className:"heading-4",children:e}),a.jsx("div",{className:"flex gap-3 flex-wrap pb-2",children:r.map(({name:n,colorClass:s})=>a.jsx(t,{name:n,colorClass:s},n))}),a.jsx("div",{className:"flex gap-3 flex-wrap pb-2",children:c.map(({name:n,colorClass:s})=>a.jsx(t,{name:n,colorClass:s},n))})]}),o={render:()=>{const e=[{name:"default",colorClass:"bg-primary"},{name:"hover",colorClass:"bg-primary-hover"},{name:"active",colorClass:"bg-primary-active"},{name:"foreground",colorClass:"bg-primary-foreground"}],r=[{name:"50",colorClass:"bg-primary-50"},{name:"100",colorClass:"bg-primary-100"},{name:"200",colorClass:"bg-primary-200"},{name:"300",colorClass:"bg-primary-300"},{name:"400",colorClass:"bg-primary-400"},{name:"500",colorClass:"bg-primary-500"},{name:"600",colorClass:"bg-primary-600"},{name:"700",colorClass:"bg-primary-700"},{name:"800",colorClass:"bg-primary-800"},{name:"900",colorClass:"bg-primary-900"}],c=[{name:"default",colorClass:"bg-accent"},{name:"hover",colorClass:"bg-accent-hover"},{name:"active",colorClass:"bg-accent-active"},{name:"foreground",colorClass:"bg-accent-foreground"}],n=[{name:"50",colorClass:"bg-accent-50"},{name:"100",colorClass:"bg-accent-100"},{name:"200",colorClass:"bg-accent-200"},{name:"300",colorClass:"bg-accent-300"},{name:"400",colorClass:"bg-accent-400"},{name:"500",colorClass:"bg-accent-500"},{name:"600",colorClass:"bg-accent-600"},{name:"700",colorClass:"bg-accent-700"},{name:"800",colorClass:"bg-accent-800"},{name:"900",colorClass:"bg-accent-900"}],s=[{name:"default",colorClass:"bg-neutral"},{name:"hover",colorClass:"bg-neutral-hover"},{name:"active",colorClass:"bg-neutral-active"},{name:"foreground",colorClass:"bg-neutral-foreground"}],m=[{name:"50",colorClass:"bg-neutral-50"},{name:"100",colorClass:"bg-neutral-100"},{name:"200",colorClass:"bg-neutral-200"},{name:"300",colorClass:"bg-neutral-300"},{name:"400",colorClass:"bg-neutral-400"},{name:"500",colorClass:"bg-neutral-500"},{name:"600",colorClass:"bg-neutral-600"},{name:"700",colorClass:"bg-neutral-700"},{name:"800",colorClass:"bg-neutral-800"},{name:"900",colorClass:"bg-neutral-900"}],g=[{name:"default",colorClass:"bg-error"},{name:"hover",colorClass:"bg-error-hover"},{name:"active",colorClass:"bg-error-active"},{name:"foreground",colorClass:"bg-error-foreground"}];return a.jsxs("div",{className:"p-8 space-y-8 w-full max-w-none",children:[a.jsx(l,{title:"Primary",specials:e,scales:r}),a.jsx(l,{title:"Accent",specials:c,scales:n}),a.jsx(l,{title:"Neutral",specials:s,scales:m}),a.jsx(l,{title:"Error",specials:g,scales:[]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const primarySpecials = [{
      name: "default",
      colorClass: "bg-primary"
    }, {
      name: "hover",
      colorClass: "bg-primary-hover"
    }, {
      name: "active",
      colorClass: "bg-primary-active"
    }, {
      name: "foreground",
      colorClass: "bg-primary-foreground"
    }];
    const primaryScales = [{
      name: "50",
      colorClass: "bg-primary-50"
    }, {
      name: "100",
      colorClass: "bg-primary-100"
    }, {
      name: "200",
      colorClass: "bg-primary-200"
    }, {
      name: "300",
      colorClass: "bg-primary-300"
    }, {
      name: "400",
      colorClass: "bg-primary-400"
    }, {
      name: "500",
      colorClass: "bg-primary-500"
    }, {
      name: "600",
      colorClass: "bg-primary-600"
    }, {
      name: "700",
      colorClass: "bg-primary-700"
    }, {
      name: "800",
      colorClass: "bg-primary-800"
    }, {
      name: "900",
      colorClass: "bg-primary-900"
    }];
    const accentSpecials = [{
      name: "default",
      colorClass: "bg-accent"
    }, {
      name: "hover",
      colorClass: "bg-accent-hover"
    }, {
      name: "active",
      colorClass: "bg-accent-active"
    }, {
      name: "foreground",
      colorClass: "bg-accent-foreground"
    }];
    const accentScales = [{
      name: "50",
      colorClass: "bg-accent-50"
    }, {
      name: "100",
      colorClass: "bg-accent-100"
    }, {
      name: "200",
      colorClass: "bg-accent-200"
    }, {
      name: "300",
      colorClass: "bg-accent-300"
    }, {
      name: "400",
      colorClass: "bg-accent-400"
    }, {
      name: "500",
      colorClass: "bg-accent-500"
    }, {
      name: "600",
      colorClass: "bg-accent-600"
    }, {
      name: "700",
      colorClass: "bg-accent-700"
    }, {
      name: "800",
      colorClass: "bg-accent-800"
    }, {
      name: "900",
      colorClass: "bg-accent-900"
    }];
    const neutralSpecials = [{
      name: "default",
      colorClass: "bg-neutral"
    }, {
      name: "hover",
      colorClass: "bg-neutral-hover"
    }, {
      name: "active",
      colorClass: "bg-neutral-active"
    }, {
      name: "foreground",
      colorClass: "bg-neutral-foreground"
    }];
    const neutralScales = [{
      name: "50",
      colorClass: "bg-neutral-50"
    }, {
      name: "100",
      colorClass: "bg-neutral-100"
    }, {
      name: "200",
      colorClass: "bg-neutral-200"
    }, {
      name: "300",
      colorClass: "bg-neutral-300"
    }, {
      name: "400",
      colorClass: "bg-neutral-400"
    }, {
      name: "500",
      colorClass: "bg-neutral-500"
    }, {
      name: "600",
      colorClass: "bg-neutral-600"
    }, {
      name: "700",
      colorClass: "bg-neutral-700"
    }, {
      name: "800",
      colorClass: "bg-neutral-800"
    }, {
      name: "900",
      colorClass: "bg-neutral-900"
    }];
    const errorSpecials = [{
      name: "default",
      colorClass: "bg-error"
    }, {
      name: "hover",
      colorClass: "bg-error-hover"
    }, {
      name: "active",
      colorClass: "bg-error-active"
    }, {
      name: "foreground",
      colorClass: "bg-error-foreground"
    }];
    return <div className="p-8 space-y-8 w-full max-w-none">
        <ColorRow title="Primary" specials={primarySpecials} scales={primaryScales} />
        <ColorRow title="Accent" specials={accentSpecials} scales={accentScales} />
        <ColorRow title="Neutral" specials={neutralSpecials} scales={neutralScales} />
        <ColorRow title="Error" specials={errorSpecials} scales={[]} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const u=["Default"];export{o as Default,u as __namedExportsOrder,p as default};
