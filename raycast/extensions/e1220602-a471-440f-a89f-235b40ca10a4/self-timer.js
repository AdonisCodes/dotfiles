"use strict";var i=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var l=(a,n)=>{for(var o in n)i(a,o,{get:n[o],enumerable:!0})},f=(a,n,o,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let e of m(n))!u.call(a,e)&&e!==o&&i(a,e,{get:()=>n[e],enumerable:!(r=c(n,e))||r.enumerable});return a};var g=a=>f(i({},"__esModule",{value:!0}),a);var d={};l(d,{default:()=>s});module.exports=g(d);var t=require("@raycast/api");async function s(a){let n="cleanshot://self-timer";await(0,t.closeMainWindow)(),a.arguments?.action?(0,t.open)(n+"?action="+a.arguments.action):(0,t.open)(n)}
