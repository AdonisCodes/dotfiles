"use strict";var i=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var p=(o,n)=>{for(var a in n)i(o,a,{get:n[a],enumerable:!0})},r=(o,n,a,c)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of l(n))!m.call(o,t)&&t!==a&&i(o,t,{get:()=>n[t],enumerable:!(c=d(n,t))||c.enumerable});return o};var f=o=>r(i({},"__esModule",{value:!0}),o);var u={};p(u,{default:()=>s});module.exports=f(u);var e=require("@raycast/api");async function s(){let o="cleanshot://hide-desktop-icons";await(0,e.closeMainWindow)(),(0,e.open)(o)}