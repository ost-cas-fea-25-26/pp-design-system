import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as c}from"./button-DQWdcEmz.js";import{S as l,H as u}from"./icons-BrtHK9pW.js";import"./bundle-mjs-D6B6e0vX.js";import"./index-DutoEiXV.js";import"./iframe-2r-4sk-G.js";import"./preload-helper-BXl3LOEh.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,C={title:"Button",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","neutral","light","gradient"]},size:{control:"select",options:["default","lg"]},fullWidth:{control:"boolean"},isCircular:{control:"boolean"},onClick:{action:"clicked"},children:{control:"text"}},args:{onClick:m(),children:"Primary Button",variant:"primary",size:"default"}},e={},t={args:{variant:"neutral",children:"Neutral Button"}},a={args:{variant:"light",children:"Light Button"}},o={args:{variant:"gradient",children:"Gradient Button"}},n={args:{children:r.jsxs(r.Fragment,{children:["With Label and Custom SVG",r.jsx(l,{color:"white"})]})}},s={args:{isCircular:!0,children:r.jsx(u,{color:"white"})}},i={args:{fullWidth:!0,children:"Full Width Button"},render:d=>r.jsx("div",{className:"w-sm border border-primary border-dashed rounded-md p-4",children:r.jsx(c,{...d})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "neutral",
    children: "Neutral Button"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "light",
    children: "Light Button"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gradient",
    children: "Gradient Button"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        With Label and Custom SVG
        <SettingsIcon color="white" />
      </>
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isCircular: true,
    children: <HeartFilledIcon color="white" />
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: "Full Width Button"
  },
  render: args => <div className="w-sm border border-primary border-dashed rounded-md p-4">
      <Button {...args} />
    </div>
}`,...i.parameters?.docs?.source}}};const W=["Primary","Neutral","Light","Gradient","WithLabelAndCustomSVG","Circular","FullWidth"];export{s as Circular,i as FullWidth,o as Gradient,a as Light,t as Neutral,e as Primary,n as WithLabelAndCustomSVG,W as __namedExportsOrder,C as default};
