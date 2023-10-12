import{s as ie,c as re,n as le,d as de,e as fe,u as he,g as pe,f as _e}from"../chunks/scheduler.5b236a94.js";import{S as oe,i as ce,g as u,s as A,x as G,h as i,j as d,f as o,c as y,y as T,z as U,k as e,a as ve,A as a,r as me,u as ge,v as ze,d as ne,t as ue,w as $e}from"../chunks/index.ceb55de0.js";import{p as Ee}from"../chunks/stores.1a78664a.js";const we=""+new URL("../assets/svelte-logo.87df40b8.svg",import.meta.url).href,Ce=""+new URL("../assets/github.1ea8d62e.svg",import.meta.url).href;function Le(h){let t,n,v,l,$,m,p,f,z,c,s,r,g,O="Home",D,j,w,C,W="About",R,q,L,b,Z="Sverdle",V,K,x,M,N,k,I,H,F;return{c(){t=u("header"),n=u("div"),v=u("a"),l=u("img"),m=A(),p=u("nav"),f=G("svg"),z=G("path"),c=A(),s=u("ul"),r=u("li"),g=u("a"),g.textContent=O,j=A(),w=u("li"),C=u("a"),C.textContent=W,q=A(),L=u("li"),b=u("a"),b.textContent=Z,K=A(),x=G("svg"),M=G("path"),N=A(),k=u("div"),I=u("a"),H=u("img"),this.h()},l(E){t=i(E,"HEADER",{class:!0});var _=d(t);n=i(_,"DIV",{class:!0});var J=d(n);v=i(J,"A",{href:!0,class:!0});var P=d(v);l=i(P,"IMG",{src:!0,alt:!0,class:!0}),P.forEach(o),J.forEach(o),m=y(_),p=i(_,"NAV",{class:!0});var S=d(p);f=T(S,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var Q=d(f);z=T(Q,"path",{d:!0,class:!0}),d(z).forEach(o),Q.forEach(o),c=y(S),s=i(S,"UL",{class:!0});var B=d(s);r=i(B,"LI",{"aria-current":!0,class:!0});var X=d(r);g=i(X,"A",{href:!0,class:!0,"data-svelte-h":!0}),U(g)!=="svelte-5a0zws"&&(g.textContent=O),X.forEach(o),j=y(B),w=i(B,"LI",{"aria-current":!0,class:!0});var Y=d(w);C=i(Y,"A",{href:!0,class:!0,"data-svelte-h":!0}),U(C)!=="svelte-iphxk9"&&(C.textContent=W),Y.forEach(o),q=y(B),L=i(B,"LI",{"aria-current":!0,class:!0});var ee=d(L);b=i(ee,"A",{href:!0,class:!0,"data-svelte-h":!0}),U(b)!=="svelte-1mtf8rh"&&(b.textContent=Z),ee.forEach(o),B.forEach(o),K=y(S),x=T(S,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var te=d(x);M=T(te,"path",{d:!0,class:!0}),d(M).forEach(o),te.forEach(o),S.forEach(o),N=y(_),k=i(_,"DIV",{class:!0});var se=d(k);I=i(se,"A",{href:!0,class:!0});var ae=d(I);H=i(ae,"IMG",{src:!0,alt:!0,class:!0}),ae.forEach(o),se.forEach(o),_.forEach(o),this.h()},h(){re(l.src,$=we)||e(l,"src",$),e(l,"alt","SvelteKit"),e(l,"class","svelte-1u9z1tp"),e(v,"href","https://kit.svelte.dev"),e(v,"class","svelte-1u9z1tp"),e(n,"class","corner svelte-1u9z1tp"),e(z,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(z,"class","svelte-1u9z1tp"),e(f,"viewBox","0 0 2 3"),e(f,"aria-hidden","true"),e(f,"class","svelte-1u9z1tp"),e(g,"href","/"),e(g,"class","svelte-1u9z1tp"),e(r,"aria-current",D=h[0].url.pathname==="/"?"page":void 0),e(r,"class","svelte-1u9z1tp"),e(C,"href","/about"),e(C,"class","svelte-1u9z1tp"),e(w,"aria-current",R=h[0].url.pathname==="/about"?"page":void 0),e(w,"class","svelte-1u9z1tp"),e(b,"href","/sverdle"),e(b,"class","svelte-1u9z1tp"),e(L,"aria-current",V=h[0].url.pathname.startsWith("/sverdle")?"page":void 0),e(L,"class","svelte-1u9z1tp"),e(s,"class","svelte-1u9z1tp"),e(M,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(M,"class","svelte-1u9z1tp"),e(x,"viewBox","0 0 2 3"),e(x,"aria-hidden","true"),e(x,"class","svelte-1u9z1tp"),e(p,"class","svelte-1u9z1tp"),re(H.src,F=Ce)||e(H,"src",F),e(H,"alt","GitHub"),e(H,"class","svelte-1u9z1tp"),e(I,"href","https://github.com/sveltejs/kit"),e(I,"class","svelte-1u9z1tp"),e(k,"class","corner svelte-1u9z1tp"),e(t,"class","svelte-1u9z1tp")},m(E,_){ve(E,t,_),a(t,n),a(n,v),a(v,l),a(t,m),a(t,p),a(p,f),a(f,z),a(p,c),a(p,s),a(s,r),a(r,g),a(s,j),a(s,w),a(w,C),a(s,q),a(s,L),a(L,b),a(p,K),a(p,x),a(x,M),a(t,N),a(t,k),a(k,I),a(I,H)},p(E,[_]){_&1&&D!==(D=E[0].url.pathname==="/"?"page":void 0)&&e(r,"aria-current",D),_&1&&R!==(R=E[0].url.pathname==="/about"?"page":void 0)&&e(w,"aria-current",R),_&1&&V!==(V=E[0].url.pathname.startsWith("/sverdle")?"page":void 0)&&e(L,"aria-current",V)},i:le,o:le,d(E){E&&o(t)}}}function be(h,t,n){let v;return de(h,Ee,l=>n(0,v=l)),[v]}class xe extends oe{constructor(t){super(),ce(this,t,be,Le,ie,{})}}function Ae(h){let t,n,v,l,$,m,p='<p>visit <a href="https://kit.svelte.dev" class="svelte-8o1gnw">kit.svelte.dev</a> to learn SvelteKit</p>',f;n=new xe({});const z=h[1].default,c=fe(z,h,h[0],null);return{c(){t=u("div"),me(n.$$.fragment),v=A(),l=u("main"),c&&c.c(),$=A(),m=u("footer"),m.innerHTML=p,this.h()},l(s){t=i(s,"DIV",{class:!0});var r=d(t);ge(n.$$.fragment,r),v=y(r),l=i(r,"MAIN",{class:!0});var g=d(l);c&&c.l(g),g.forEach(o),$=y(r),m=i(r,"FOOTER",{class:!0,"data-svelte-h":!0}),U(m)!=="svelte-1dlfr5"&&(m.innerHTML=p),r.forEach(o),this.h()},h(){e(l,"class","svelte-8o1gnw"),e(m,"class","svelte-8o1gnw"),e(t,"class","app svelte-8o1gnw")},m(s,r){ve(s,t,r),ze(n,t,null),a(t,v),a(t,l),c&&c.m(l,null),a(t,$),a(t,m),f=!0},p(s,[r]){c&&c.p&&(!f||r&1)&&he(c,z,s,s[0],f?_e(z,s[0],r,null):pe(s[0]),null)},i(s){f||(ne(n.$$.fragment,s),ne(c,s),f=!0)},o(s){ue(n.$$.fragment,s),ue(c,s),f=!1},d(s){s&&o(t),$e(n),c&&c.d(s)}}}function ye(h,t,n){let{$$slots:v={},$$scope:l}=t;return h.$$set=$=>{"$$scope"in $&&n(0,l=$.$$scope)},[l,v]}class ke extends oe{constructor(t){super(),ce(this,t,ye,Ae,ie,{})}}export{ke as component};
