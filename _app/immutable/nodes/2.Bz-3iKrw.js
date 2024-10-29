import{s as be,n as de,o as we,a as ye}from"../chunks/scheduler.Cs0xm5t1.js";import{S as Ce,i as Ie,e as n,s as T,t as R,h as Ee,c as i,d as s,a as H,g as N,b as k,f as q,j as o,k as t,l as A,m as ue,n as ce}from"../chunks/index.odHI_-bW.js";import{e as Q,f as ke,a as De}from"../chunks/api.BEUKqxzy.js";import{l as xe}from"../chunks/logo.D4XXjNlW.js";function ve(h,a,r){const c=h.slice();return c[5]=a[r],c}function pe(h,a,r){const c=h.slice();return c[8]=a[r],c}function _e(h){let a,r,c,b,x,m,D=h[8].title+"",j,w,E,v=h[8].description+"",V,L;return{c(){a=n("a"),r=n("img"),b=T(),x=n("div"),m=n("p"),j=R(D),w=T(),E=n("article"),V=R(v),L=T(),this.h()},l(p){a=i(p,"A",{href:!0,class:!0});var y=k(a);r=i(y,"IMG",{src:!0,alt:!0,class:!0}),b=H(y),x=i(y,"DIV",{class:!0});var d=k(x);m=i(d,"P",{class:!0});var f=k(m);j=q(f,D),f.forEach(s),w=H(d),E=i(d,"ARTICLE",{class:!0});var _=k(E);V=q(_,v),_.forEach(s),d.forEach(s),L=H(y),y.forEach(s),this.h()},h(){ye(r.src,c=h[8].link_img)||o(r,"src",c),o(r,"alt","logo"),o(r,"class","w-1/3 h-40 object-contain rounded-lg"),o(m,"class","mb-2 h-1/3 text-2xl font-bold tracking-tight text-gray-100"),o(E,"class","mb-3 h-2/3 font-normal text-gray-400 text-wrap"),o(x,"class","w-2/3 flex flex-col justify-between p-4 leading-normal text-gray-300"),o(a,"href",h[8].link),o(a,"class","flex flex-row m-5 w-full lg:w-1/3 duration-300 hover:scale-105 bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 duration-[600ms]")},m(p,y){A(p,a,y),t(a,r),t(a,b),t(a,x),t(x,m),t(m,j),t(x,w),t(x,E),t(E,V),t(a,L)},p:de,d(p){p&&s(a)}}}function ge(h){let a,r,c,b=h[5].title+"",x,m,D,j=h[5].description+"",w,E,v,V=h[5].date+"",L,p,y;return{c(){a=n("a"),r=n("div"),c=n("p"),x=R(b),m=T(),D=n("article"),w=R(j),E=T(),v=n("p"),L=R(V),p=T(),this.h()},l(d){a=i(d,"A",{href:!0,class:!0});var f=k(a);r=i(f,"DIV",{class:!0});var _=k(r);c=i(_,"P",{class:!0});var P=k(c);x=q(P,b),P.forEach(s),m=H(_),D=i(_,"ARTICLE",{class:!0});var O=k(D);w=q(O,j),O.forEach(s),E=H(_),v=i(_,"P",{class:!0});var z=k(v);L=q(z,V),z.forEach(s),_.forEach(s),p=H(f),f.forEach(s),this.h()},h(){o(c,"class","mb-2 text-2xl font-bold tracking-tight text-gray-100"),o(D,"class","mb-3 font-normal text-gray-400 text-wrap"),o(v,"class","text-gray-500 text-sm"),o(r,"class","w-full flex flex-col justify-between p-4 leading-normal text-gray-300"),o(a,"href",y="blog/"+h[5].path),o(a,"class","flex flex-row m-5 w-full lg:w-1/3 px-4 mb-4 duration-300 hover:scale-105 bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 duration-[600ms]")},m(d,f){A(d,a,f),t(a,r),t(r,c),t(c,x),t(r,m),t(r,D),t(D,w),t(r,E),t(r,v),t(v,L),t(a,p)},p(d,f){f&1&&b!==(b=d[5].title+"")&&ce(x,b),f&1&&j!==(j=d[5].description+"")&&ce(w,j),f&1&&V!==(V=d[5].date+"")&&ce(L,V),f&1&&y!==(y="blog/"+d[5].path)&&o(a,"href",y)},d(d){d&&s(a)}}}function je(h){let a,r,c,b=`<div class="flex-1"><div class="absolute inset-0 flex justify-center items-center"><div class="p-8 rounded-lg text-center md:text-left"><h1 class="text-4xl md:text-8xl font-bold text-white mb-4 md:mb-8 md:text-shadow-[0 0.7px 0 rgba(0,0,0,0.6)]">Coding with passion</h1> <h2 class="text-2xl md:text-4xl text-white md:text-shadow-[0 0.7px 0 rgba(0,0,0,0.6)]">Learning with purpose</h2></div></div></div> <div class="flex-1"><img alt="logo" src="${xe}" class="w-full h-full object-cover"/></div>`,x,m,D="My projects",j,w,E,v,V="Latest Articles",L,p,y,d,f,_,P,O="whoami ?",z,g,U,X,Y,Z,ee,te,le,ae,se,re,oe,S,he="contact@cocosol.fr",ne,ie,F,fe=`<img alt="logo" src="${xe}" class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"/>`,W=Q(h[1]),C=[];for(let e=0;e<W.length;e+=1)C[e]=_e(pe(h,W,e));let G=Q(h[0]),I=[];for(let e=0;e<G.length;e+=1)I[e]=ge(ve(h,G,e));return{c(){a=n("meta"),r=T(),c=n("div"),c.innerHTML=b,x=T(),m=n("h1"),m.textContent=D,j=T(),w=n("div");for(let e=0;e<C.length;e+=1)C[e].c();E=T(),v=n("h1"),v.textContent=V,L=T(),p=n("div");for(let e=0;e<I.length;e+=1)I[e].c();y=T(),d=n("section"),f=n("div"),_=n("div"),P=n("h2"),P.textContent=O,z=T(),g=n("p"),U=R("Hello World ! "),X=n("br"),Y=R(`
                My name is CoCoSol and I am a `),Z=R(h[2]),ee=R(`-year-old French coder with a strong desire
                to learn.`),te=n("br"),le=R(`
                Although I do not have much experience, I am passionate about development
                and math. Currently, I am a student at Caousou in France `),ae=n("br"),se=R(` 
                and I am always seeking new challenges. `),re=n("br"),oe=R(` To contact me
                or ask any questions, please email me at `),S=n("a"),S.textContent=he,ne=n("br"),ie=T(),F=n("div"),F.innerHTML=fe,this.h()},l(e){const u=Ee("svelte-991z98",document.head);a=i(u,"META",{name:!0,content:!0}),u.forEach(s),r=H(e),c=i(e,"DIV",{class:!0,"data-svelte-h":!0}),N(c)!=="svelte-fqu41j"&&(c.innerHTML=b),x=H(e),m=i(e,"H1",{class:!0,"data-svelte-h":!0}),N(m)!=="svelte-1ys2xqu"&&(m.textContent=D),j=H(e),w=i(e,"DIV",{class:!0});var l=k(w);for(let $=0;$<C.length;$+=1)C[$].l(l);l.forEach(s),E=H(e),v=i(e,"H1",{class:!0,"data-svelte-h":!0}),N(v)!=="svelte-1rz9m23"&&(v.textContent=V),L=H(e),p=i(e,"DIV",{class:!0});var B=k(p);for(let $=0;$<I.length;$+=1)I[$].l(B);B.forEach(s),y=H(e),d=i(e,"SECTION",{class:!0});var me=k(d);f=i(me,"DIV",{class:!0});var J=k(f);_=i(J,"DIV",{class:!0});var K=k(_);P=i(K,"H2",{class:!0,"data-svelte-h":!0}),N(P)!=="svelte-tbsctb"&&(P.textContent=O),z=H(K),g=i(K,"P",{class:!0});var M=k(g);U=q(M,"Hello World ! "),X=i(M,"BR",{}),Y=q(M,`
                My name is CoCoSol and I am a `),Z=q(M,h[2]),ee=q(M,`-year-old French coder with a strong desire
                to learn.`),te=i(M,"BR",{}),le=q(M,`
                Although I do not have much experience, I am passionate about development
                and math. Currently, I am a student at Caousou in France `),ae=i(M,"BR",{}),se=q(M,` 
                and I am always seeking new challenges. `),re=i(M,"BR",{}),oe=q(M,` To contact me
                or ask any questions, please email me at `),S=i(M,"A",{class:!0,href:!0,"data-svelte-h":!0}),N(S)!=="svelte-1pz4w5k"&&(S.textContent=he),ne=i(M,"BR",{}),M.forEach(s),K.forEach(s),ie=H(J),F=i(J,"DIV",{class:!0,"data-svelte-h":!0}),N(F)!=="svelte-287pxd"&&(F.innerHTML=fe),J.forEach(s),me.forEach(s),this.h()},h(){document.title="CoCoSol",o(a,"name","description"),o(a,"content","Welcome to my personal blog where I showcase my projects, share my ideas, and offer my services. Explore articles about tech, artificial intelligence, mathematics, reflections on life, philosophy, and much more."),o(c,"class","relative flex flex-col md:flex-row"),o(m,"class","text-3xl font-bold mx-auto text-center mt-8 text-white"),o(w,"class","container mx-auto my-8 flex flex-wrap justify-center"),o(v,"class","text-3xl font-bold mx-auto text-center mt-32 text-white"),o(p,"class","container mx-auto my-8 flex flex-wrap justify-center"),o(P,"class","text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"),o(S,"class","text-blue-400 hover:underline"),o(S,"href","mailto://contact@cocosol.fr"),o(g,"class","max-w-lg mt-3 text-xl leading-relaxed text-gray-300 md:mt-8"),o(_,"class","md:w-1/2"),o(F,"class","md:w-1/2 relative"),o(f,"class","px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row p-10"),o(d,"class","pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16")},m(e,u){t(document.head,a),A(e,r,u),A(e,c,u),A(e,x,u),A(e,m,u),A(e,j,u),A(e,w,u);for(let l=0;l<C.length;l+=1)C[l]&&C[l].m(w,null);A(e,E,u),A(e,v,u),A(e,L,u),A(e,p,u);for(let l=0;l<I.length;l+=1)I[l]&&I[l].m(p,null);A(e,y,u),A(e,d,u),t(d,f),t(f,_),t(_,P),t(_,z),t(_,g),t(g,U),t(g,X),t(g,Y),t(g,Z),t(g,ee),t(g,te),t(g,le),t(g,ae),t(g,se),t(g,re),t(g,oe),t(g,S),t(g,ne),t(f,ie),t(f,F)},p(e,[u]){if(u&2){W=Q(e[1]);let l;for(l=0;l<W.length;l+=1){const B=pe(e,W,l);C[l]?C[l].p(B,u):(C[l]=_e(B),C[l].c(),C[l].m(w,null))}for(;l<C.length;l+=1)C[l].d(1);C.length=W.length}if(u&1){G=Q(e[0]);let l;for(l=0;l<G.length;l+=1){const B=ve(e,G,l);I[l]?I[l].p(B,u):(I[l]=ge(B),I[l].c(),I[l].m(p,null))}for(;l<I.length;l+=1)I[l].d(1);I.length=G.length}},i:de,o:de,d(e){e&&(s(r),s(c),s(x),s(m),s(j),s(w),s(E),s(v),s(L),s(p),s(y),s(d)),s(a),ue(C,e),ue(I,e)}}}function Me(h,a,r){let c=ke(),b=[];we(async()=>{r(0,b=await De()),r(0,b=b.slice(0,2))});const D=Math.floor((new Date-new Date("2007-10-29"))/(1e3*60*60*24*365));return[b,c,D]}class Ve extends Ce{constructor(a){super(),Ie(this,a,Me,je,be,{})}}export{Ve as component};