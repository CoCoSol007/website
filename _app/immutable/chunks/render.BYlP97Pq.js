import{S as g,J as A,G as D,I,T as m,q as h,o as R,k as V,U as L,V as O,D as Y,h as H,p as j,v as k,j as E,W as C,u as _,b as M,X as W,Y as $,Z as q,_ as G}from"./runtime.DeXpxtC2.js";import{h as v,a as J,r as N}from"./events.DIWhEPy3.js";import{r as P}from"./svelte-head.tW1tNO1N.js";import{b as U}from"./disclose-version.CRH15Tq2.js";const X=["touchstart","touchmove"];function Z(t){return X.includes(t)}function x(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function z(t,e){return S(t,e)}function ee(t,e){g(),e.intro=e.intro??!1;const n=e.target,u=E,l=_;try{for(var r=A(n);r&&(r.nodeType!==8||r.data!==D);)r=I(r);if(!r)throw m;h(!0),R(r),V();const d=S(t,{...e,anchor:r});if(_===null||_.nodeType!==8||_.data!==W)throw $(),m;return h(!1),d}catch(d){if(d===m)return e.recover===!1&&q(),g(),G(n),h(!1),z(t,e);throw d}finally{h(u),R(l),P()}}const i=new Map;function S(t,{target:e,anchor:n,props:u={},events:l,context:r,intro:d=!0}){g();var p=new Set,y=o=>{for(var a=0;a<o.length;a++){var s=o[a];if(!p.has(s)){p.add(s);var f=Z(s);e.addEventListener(s,v,{passive:f});var w=i.get(s);w===void 0?(document.addEventListener(s,v,{passive:f}),i.set(s,1)):i.set(s,w+1)}}};y(L(J)),N.add(y);var c=void 0,b=O(()=>{var o=n??e.appendChild(Y());return H(()=>{if(r){j({});var a=k;a.c=r}l&&(u.$$events=l),E&&U(o,null),c=t(o,u)||{},E&&(C.nodes_end=_),r&&M()}),()=>{var f;for(var a of p){e.removeEventListener(a,v);var s=i.get(a);--s===0?(document.removeEventListener(a,v),i.delete(a)):i.set(a,s)}N.delete(y),T.delete(c),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return T.set(c,b),c}let T=new WeakMap;function te(t){const e=T.get(t);e&&e()}export{ee as h,z as m,x as s,te as u};
