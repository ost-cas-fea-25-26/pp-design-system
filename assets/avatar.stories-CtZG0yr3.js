import{A as s}from"./avatar-DHHKK3OI.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-2r-4sk-G.js";import"./preload-helper-BXl3LOEh.js";import"./index-BSYgtp2B.js";import"./index-DpjvyGHH.js";import"./index-Bf5OD08m.js";import"./index-DveG-Asj.js";import"./index-DO5FmqVZ.js";import"./index-C9vFihnJ.js";import"./bundle-mjs-D6B6e0vX.js";import"./button-DQWdcEmz.js";import"./index-DutoEiXV.js";import"./icons-BrtHK9pW.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,E={title:"Avatar",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["s","m","l","xl"],description:"Avatar size"},border:{control:"boolean",description:"Adds a border around the avatar"},src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Alternative text for the image"},fallbackText:{control:"text",description:"Text (e.g. initials) shown when no image is loaded"},editable:{control:"boolean",description:"Shows an edit button at the bottom-right corner"},onEditClick:{action:"edit clicked",description:"Triggered when the edit button is clicked"}},args:{size:"m",border:!1,src:"/avatars/rory.jpg",alt:"Rory McIlroy",fallbackText:"RM"}},r={},e={args:{src:"",fallbackText:"RM"}},t={args:{border:!0}},o={args:{size:"xl"}},a={args:{editable:!0,onEditClick:c(),size:"xl"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    src: "",
    fallbackText: "RM"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    border: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "xl"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    editable: true,
    onEditClick: fn(),
    size: "xl"
  }
}`,...a.parameters?.docs?.source}}};const S=["Default","FallbackOnly","WithBorder","XL","Editable"];export{r as Default,a as Editable,e as FallbackOnly,t as WithBorder,o as XL,S as __namedExportsOrder,E as default};
