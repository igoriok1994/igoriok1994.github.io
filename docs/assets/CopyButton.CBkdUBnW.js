import{c as s,j as e}from"./createLucideIcon.DGJXGfNx.js";import{r as m}from"./index.-iFofLld.js";/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};d.node;const p=s(d);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};n.node;const x=s(n);function y({text:o,label:c="Copy",className:l=""}){const[r,t]=m.useState(!1),i=async()=>{try{await navigator.clipboard.writeText(o),t(!0),setTimeout(()=>t(!1),2e3)}catch{const a=document.createElement("textarea");a.value=o,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),t(!0),setTimeout(()=>t(!1),2e3)}};return e.jsx("button",{type:"button",onClick:i,className:`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${r?"bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"} ${l}`,title:`Copy "${o}" to clipboard`,children:r?e.jsxs(e.Fragment,{children:[e.jsx(p,{className:"w-3.5 h-3.5 text-emerald-500"}),e.jsx("span",{children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(x,{className:"w-3.5 h-3.5 text-slate-500 dark:text-slate-400"}),e.jsx("span",{children:c})]})})}export{y as default};
