import{s as z,n as S,o as F}from"../chunks/scheduler.Cs0xm5t1.js";import{S as G,i as J,e as g,s as C,h as K,c as x,d,a as w,b as E,g as T,j as f,k as r,l as $,m as L,t as M,f as D,n as V}from"../chunks/index.D39aHrM8.js";import{e as W,a as N}from"../chunks/api.Bqlu74bu.js";function q(m,s,o){const t=m.slice();return t[1]=s[o],t[3]=o,t}function R(m){let s,o,t,n,b=m[1].title+"",y,i,I,u,h=m[1].description+"",l,a,c,e=m[1].date+"",p,A;return{c(){s=g("div"),o=g("div"),t=g("div"),n=g("a"),y=M(b),I=C(),u=g("p"),l=M(h),a=C(),c=g("p"),p=M(e),A=C(),this.h()},l(_){s=x(_,"DIV",{class:!0});var v=E(s);o=x(v,"DIV",{class:!0});var P=E(o);t=x(P,"DIV",{});var k=E(t);n=x(k,"A",{href:!0,class:!0});var j=E(n);y=D(j,b),j.forEach(d),I=w(k),u=x(k,"P",{class:!0});var B=E(u);l=D(B,h),B.forEach(d),k.forEach(d),a=w(P),c=x(P,"P",{class:!0});var H=E(c);p=D(H,e),H.forEach(d),P.forEach(d),A=w(v),v.forEach(d),this.h()},h(){f(n,"href",i="/blog/"+m[1].path),f(n,"class","text-lg font-semibold text-gray-200 hover:underline cursor-pointer"),f(u,"class","text-sm text-gray-400"),f(c,"class","text-sm text-gray-400"),f(o,"class","flex justify-between items-center"),f(s,"class","my-4 border-b border-gray-700 pb-4")},m(_,v){$(_,s,v),r(s,o),r(o,t),r(t,n),r(n,y),r(t,I),r(t,u),r(u,l),r(o,a),r(o,c),r(c,p),r(s,A)},p(_,v){v&1&&b!==(b=_[1].title+"")&&V(y,b),v&1&&i!==(i="/blog/"+_[1].path)&&f(n,"href",i),v&1&&h!==(h=_[1].description+"")&&V(l,h),v&1&&e!==(e=_[1].date+"")&&V(p,e)},d(_){_&&d(s)}}}function O(m){let s,o,t,n,b="Welcome to My Personal Blog",y,i,I="Here, I share articles on tech, AI, math, reflections on life, philosophy, and many other topics.",u,h=W(m[0]),l=[];for(let a=0;a<h.length;a+=1)l[a]=R(q(m,h,a));return{c(){s=g("meta"),o=C(),t=g("div"),n=g("h1"),n.textContent=b,y=C(),i=g("p"),i.textContent=I,u=C();for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){const c=K("svelte-no7rr8",document.head);s=x(c,"META",{name:!0,content:!0}),c.forEach(d),o=w(a),t=x(a,"DIV",{class:!0});var e=E(t);n=x(e,"H1",{class:!0,"data-svelte-h":!0}),T(n)!=="svelte-11kw04g"&&(n.textContent=b),y=w(e),i=x(e,"P",{class:!0,"data-svelte-h":!0}),T(i)!=="svelte-18vspjw"&&(i.textContent=I),u=w(e);for(let p=0;p<l.length;p+=1)l[p].l(e);e.forEach(d),this.h()},h(){document.title="My Personal Blog - Tech, AI, Math, and Reflections",f(s,"name","description"),f(s,"content","Welcome to my personal blog where I post articles about tech, artificial intelligence, mathematics, reflections on life, philosophy, and much more."),f(n,"class","text-3xl font-bold text-gray-200 mb-6"),f(i,"class","text-lg text-gray-400 mb-8"),f(t,"class","max-w-3xl mx-auto py-8 px-4")},m(a,c){r(document.head,s),$(a,o,c),$(a,t,c),r(t,n),r(t,y),r(t,i),r(t,u);for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(t,null)},p(a,[c]){if(c&1){h=W(a[0]);let e;for(e=0;e<h.length;e+=1){const p=q(a,h,e);l[e]?l[e].p(p,c):(l[e]=R(p),l[e].c(),l[e].m(t,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=h.length}},i:S,o:S,d(a){a&&(d(o),d(t)),d(s),L(l,a)}}}function Q(m,s,o){let t=[];return F(async()=>{o(0,t=await N())}),[t]}class Z extends G{constructor(s){super(),J(this,s,Q,O,z,{})}}export{Z as component};
