import{r as Ee,s as Ge,i as Ae,n as se,d as He,j as Ne,k as le}from"../chunks/scheduler.5b236a94.js";import{d as De,S as Pe,i as Le,g as W,s as P,e as re,C as Oe,h as j,f as g,c as L,z as Q,j as H,k as y,D as G,A,a as C,B as ee,m as N,n as D,l as R,o as te,E as Se,F as Ce}from"../chunks/index.ceb55de0.js";import{p as Xe}from"../chunks/parse.bee59afc.js";import{j as ze,k as Fe}from"../chunks/singletons.379f8f62.js";import{r as Ie}from"../chunks/index.c58dd67e.js";const qe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function I(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Te(n,e){n.d(1),e.delete(n.key)}function We(n,e,t,a,r,o,s,l,f,b,_,m){let p=n.length,u=o.length,c=p;const i={};for(;c--;)i[n[c].key]=c;const h=[],S=new Map,T=new Map,E=[];for(c=u;c--;){const v=m(r,o,c),w=t(v);let d=s.get(w);d?a&&E.push(()=>d.p(v,e)):(d=b(w,v),d.c()),S.set(w,h[c]=d),w in i&&T.set(w,Math.abs(c-i[w]))}const X=new Set,F=new Set;function O(v){De(v,1),v.m(l,_),s.set(v.key,v),_=v.first,u--}for(;p&&u;){const v=h[u-1],w=n[p-1],d=v.key,k=w.key;v===w?(_=v.first,p--,u--):S.has(k)?!s.has(d)||X.has(d)?O(v):F.has(k)?p--:T.get(d)>T.get(k)?(F.add(d),O(v)):(X.add(k),p--):(f(w,s),p--)}for(;p--;){const v=n[p];S.has(v.key)||f(v,s)}for(;u;)O(h[u-1]);return Ee(E),h}const Be=(n,e={})=>{de(e);let{colors:t=["#FFC700","#FF0000","#2E3191","#41BBC7"],duration:a=3500,force:r=.5,particleCount:o=150,particleShape:s="mix",particleSize:l=12,destroyAfterDone:f=!0,stageHeight:b=800,stageWidth:_=1600}=e;(function(i){const h=Y("style");h.dataset.neoconfetti="",h.textContent='@keyframes fk9XWG_y-axis{to{transform:translate3d(0,var(--stage-height),0)}}@keyframes fk9XWG_x-axis{to{transform:translate3d(var(--x-landing-point),0,0)}}@keyframes fk9XWG_rotation{50%{transform:rotate3d(var(--half-rotation),180deg)}to{transform:rotate3d(var(--rotation),360deg)}}.fk9XWG_container{width:0;height:0;z-index:1200;position:relative;overflow:visible}.fk9XWG_particle{animation:x-axis var(--duration-chaos)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:fk9XWG_x-axis}.fk9XWG_particle>div{animation:y-axis var(--duration-chaos)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--width);height:var(--height);animation-name:fk9XWG_y-axis;position:absolute;top:0;left:0}.fk9XWG_particle>div:before{height:100%;width:100%;content:"";background-color:var(--bgcolor);animation:rotation var(--rotation-duration)infinite linear;border-radius:var(--border-radius);animation-name:fk9XWG_rotation;display:block}',Z(document.head,h)})(),n.classList.add("fk9XWG_container"),n.style.setProperty("--stage-height",b+"px");let m,p=fe(o,t),u=oe(n,p);function c(i,h){const S=V(z()*(Je-1)),T=s!=="rectangles"&&(s==="circles"||Ke(S)),E=(O,v)=>i.style.setProperty(O,v+"");E("--x-landing-point",J(U(ue(h,90)-180),0,180,-_/2,_/2)+"px"),E("--duration-chaos",a-V(1e3*z())+"ms");const X=z()<Ue?q(z()*xe,2):0;E("--x1",X),E("--x2",-1*X),E("--x3",X),E("--x4",q(U(J(U(ue(h,90)-180),0,180,-1,1)),4)),E("--y1",q(z()*ce,4)),E("--y2",q(z()*r*(je()?1:-1),4)),E("--y3",ce),E("--y4",q(Re(J(U(h-180),0,180,r,-r),0),4)),E("--width",(T?l:V(4*z())+l/2)+"px"),E("--height",(T?l:V(2*z())+l)+"px");const F=S.toString(2).padStart(3,"0").split("");E("--half-rotation",F.map(O=>+O/2+"")),E("--rotation",F),E("--rotation-duration",q(z()*(Ve-ie)+ie)+"ms"),E("--border-radius",T?"50%":0)}for(const[i,h]of Object.entries(u))c(h,p[+i].degree);return Promise.resolve().then(()=>m=setTimeout(()=>f&&(n.innerHTML=""),a)),{update(i){de(i);const h=i.particleCount??o,S=i.colors??t,T=i.stageHeight??b;if(p=fe(h,S),h===o&&JSON.stringify(t)!==JSON.stringify(S))for(const[E,{color:X}]of Object.entries(p))u[+E].style.setProperty("--bgcolor",X);h!==o&&(n.innerHTML="",u=oe(n,p)),f&&!i.destroyAfterDone&&clearTimeout(m),n.style.setProperty("--stage-height",T+"px"),t=S,a=i.duration??a,r=i.force??r,o=h,s=i.particleShape??s,l=i.particleSize??l,f=i.destroyAfterDone??f,b=T,_=i.stageWidth??_},destroy(){clearTimeout(m)}}};function oe(n,e=[]){const t=[];for(const{color:a}of e){const r=Y("div");r.className="fk9XWG_particle",r.style.setProperty("--bgcolor",a);const o=Y("div");Z(r,o),Z(n,r),t.push(r)}return t}const ie=200,Ve=800,Ue=.1,xe=.3,ce=.5,U=Math.abs,z=Math.random,V=Math.round,Re=Math.max,Y=n=>document.createElement(n),Z=(n,e)=>n.appendChild(e),fe=(n,e)=>Array.from({length:n},(t,a)=>({color:e[a%e.length],degree:360*a/n})),q=(n,e=2)=>V((n+Number.EPSILON)*10**e)/10**e,J=(n,e,t,a,r)=>(n-e)*(r-a)/(t-e)+a,ue=(n,e)=>n+e>360?n+e-360:n+e,je=()=>z()>.5,Je=6,Ke=n=>n!==1&&je(),$=n=>n===void 0,B=(n,e)=>{if(!$(n)&&Number.isSafeInteger(n)&&n<0)throw new Error(e+" must be a positive integer")},de=({particleCount:n,duration:e,colors:t,particleSize:a,force:r,stageHeight:o,stageWidth:s,particleShape:l})=>{if(B(n,"particleCount"),B(e,"duration"),B(a,"particleSize"),B(r,"force"),B(o,"stageHeight"),B(s,"stageWidth"),!$(l)&&!/^(mix|circles|rectangles)$/i.test(l))throw new Error('particlesShape should be either "mix" or "circles" or "rectangle"');if(!$(t)&&!Array.isArray(t))throw new Error("colors must be an array of strings");if(r>1)throw new Error("force must be within 0 and 1")},Qe=ze("invalidate_all");function Ye(n){return Fe.apply_action(n)}function Ze(n){const e=JSON.parse(n);return e.data&&(e.data=Xe(e.data)),e}function $e(n){return HTMLElement.prototype.cloneNode.call(n)}function et(n,e=()=>{}){const t=async({action:r,result:o,reset:s})=>{o.type==="success"&&(s!==!1&&HTMLFormElement.prototype.reset.call(n),await Qe()),(location.origin+location.pathname===r.origin+r.pathname||o.type==="redirect"||o.type==="error")&&Ye(o)};async function a(r){var u,c,i;r.preventDefault();const o=new URL((u=r.submitter)!=null&&u.hasAttribute("formaction")?r.submitter.formAction:$e(n).action),s=new FormData(n),l=(c=r.submitter)==null?void 0:c.getAttribute("name");l&&s.append(l,((i=r.submitter)==null?void 0:i.getAttribute("value"))??"");const f=new AbortController;let b=!1;const m=await e({action:o,cancel:()=>b=!0,controller:f,get data(){return s},formData:s,get form(){return n},formElement:n,submitter:r.submitter})??t;if(b)return;let p;try{const h=await fetch(o,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:s,signal:f.signal});p=Ze(await h.text()),p.type==="error"&&(p.status=h.status)}catch(h){if((h==null?void 0:h.name)==="AbortError")return;p={type:"error",error:h}}m({action:o,get data(){return s},formData:s,get form(){return n},formElement:n,update:h=>t({action:o,result:p,reset:h==null?void 0:h.reset}),result:p})}return HTMLFormElement.prototype.addEventListener.call(n,"submit",a),{destroy(){HTMLFormElement.prototype.removeEventListener.call(n,"submit",a)}}}const Me="(prefers-reduced-motion: reduce)",tt=()=>window.matchMedia(Me).matches,nt=Ie(tt(),n=>{{const e=a=>{n(a.matches)},t=window.matchMedia(Me);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});const{document:K,window:at}=qe;function he(n,e,t){const a=n.slice();return a[11]=e[t],a}function pe(n,e,t){const a=n.slice();return a[14]=e[t],a}function _e(n,e,t){const a=n.slice();a[11]=e[t];const r=a[11]===a[4];return a[17]=r,a}function me(n,e,t){var m,p;const a=n.slice();a[20]=e[t];const r=a[17]?a[3]:a[1].guesses[a[11]];a[21]=r;const o=(m=a[1].answers[a[11]])==null?void 0:m[a[20]];a[22]=o;const s=((p=a[21])==null?void 0:p[a[20]])??"";a[23]=s;const l=a[17]&&a[20]===a[21].length;a[24]=l;const f=a[22]==="x";a[25]=f;const b=a[22]==="c";a[26]=b;const _=a[22]==="_";return a[27]=_,a}function st(n){let e;return{c(){e=N("empty")},l(t){e=D(t,"empty")},m(t,a){C(t,e,a)},d(t){t&&g(e)}}}function lt(n){let e;return{c(){e=N("(absent)")},l(t){e=D(t,"(absent)")},m(t,a){C(t,e,a)},d(t){t&&g(e)}}}function rt(n){let e;return{c(){e=N("(present)")},l(t){e=D(t,"(present)")},m(t,a){C(t,e,a)},d(t){t&&g(e)}}}function ot(n){let e;return{c(){e=N("(correct)")},l(t){e=D(t,"(correct)")},m(t,a){C(t,e,a)},d(t){t&&g(e)}}}function ge(n,e){let t,a=e[23]+"",r,o,s,l,f,b,_;function m(c,i){return c[25]?ot:c[26]?rt:c[27]?lt:st}let p=m(e),u=p(e);return{key:n,first:null,c(){t=W("div"),r=N(a),o=P(),s=W("span"),u.c(),l=P(),f=W("input"),this.h()},l(c){t=j(c,"DIV",{class:!0});var i=H(t);r=D(i,a),o=L(i),s=j(i,"SPAN",{class:!0});var h=H(s);u.l(h),h.forEach(g),l=L(i),f=j(i,"INPUT",{name:!0,type:!0}),i.forEach(g),this.h()},h(){y(s,"class","visually-hidden"),y(f,"name","guess"),f.disabled=b=!e[17],y(f,"type","hidden"),f.value=_=e[23],y(t,"class","letter svelte-1pg2j5l"),G(t,"exact",e[25]),G(t,"close",e[26]),G(t,"missing",e[27]),G(t,"selected",e[24]),this.first=t},m(c,i){C(c,t,i),A(t,r),A(t,o),A(t,s),u.m(s,null),A(t,l),A(t,f)},p(c,i){e=c,i&26&&a!==(a=e[23]+"")&&te(r,a),p!==(p=m(e))&&(u.d(1),u=p(e),u&&(u.c(),u.m(s,null))),i&16&&b!==(b=!e[17])&&(f.disabled=b),i&26&&_!==(_=e[23])&&(f.value=_),i&2&&G(t,"exact",e[25]),i&2&&G(t,"close",e[26]),i&2&&G(t,"missing",e[27]),i&26&&G(t,"selected",e[24])},d(c){c&&g(t),u.d()}}}function be(n,e){let t,a,r=e[11]+1+"",o,s,l,f=[],b=new Map,_,m=I(Array.from(Array(5).keys()));const p=u=>u[20];for(let u=0;u<m.length;u+=1){let c=me(e,m,u),i=p(c);b.set(i,f[u]=ge(i,c))}return{key:n,first:null,c(){t=W("h2"),a=N("Row "),o=N(r),s=P(),l=W("div");for(let u=0;u<f.length;u+=1)f[u].c();_=P(),this.h()},l(u){t=j(u,"H2",{class:!0});var c=H(t);a=D(c,"Row "),o=D(c,r),c.forEach(g),s=L(u),l=j(u,"DIV",{class:!0});var i=H(l);for(let h=0;h<f.length;h+=1)f[h].l(i);_=L(i),i.forEach(g),this.h()},h(){y(t,"class","visually-hidden"),y(l,"class","row svelte-1pg2j5l"),G(l,"current",e[17]),this.first=t},m(u,c){C(u,t,c),A(t,a),A(t,o),C(u,s,c),C(u,l,c);for(let i=0;i<f.length;i+=1)f[i]&&f[i].m(l,null);A(l,_)},p(u,c){e=u,c&26&&(m=I(Array.from(Array(5).keys())),f=We(f,c,p,1,e,m,b,l,Te,ge,_,me)),c&16&&G(l,"current",e[17])},d(u){u&&(g(t),g(s),g(l));for(let c=0;c<f.length;c+=1)f[c].d()}}}function it(n){let e,t,a,r,o,s,l="back",f,b,_,m=I(["qwertyuiop","asdfghjkl","zxcvbnm"]),p=[];for(let u=0;u<3;u+=1)p[u]=ve(he(n,m,u));return{c(){e=W("div"),t=W("button"),a=N("enter"),o=P(),s=W("button"),s.textContent=l,f=P();for(let u=0;u<3;u+=1)p[u].c();this.h()},l(u){e=j(u,"DIV",{class:!0});var c=H(e);t=j(c,"BUTTON",{"data-key":!0,class:!0});var i=H(t);a=D(i,"enter"),i.forEach(g),o=L(c),s=j(c,"BUTTON",{"data-key":!0,formaction:!0,name:!0,class:!0,"data-svelte-h":!0}),Q(s)!=="svelte-1ptb1bp"&&(s.textContent=l),f=L(c);for(let h=0;h<3;h+=1)p[h].l(c);c.forEach(g),this.h()},h(){y(t,"data-key","enter"),t.disabled=r=!n[7],y(t,"class","svelte-1pg2j5l"),G(t,"selected",n[7]),y(s,"data-key","backspace"),y(s,"formaction","?/update"),y(s,"name","key"),s.value="backspace",y(s,"class","svelte-1pg2j5l"),y(e,"class","keyboard svelte-1pg2j5l")},m(u,c){C(u,e,c),A(e,t),A(t,a),A(e,o),A(e,s),A(e,f);for(let i=0;i<3;i+=1)p[i]&&p[i].m(e,null);b||(_=ee(s,"click",Se(n[9])),b=!0)},p(u,c){if(c&128&&r!==(r=!u[7])&&(t.disabled=r),c&128&&G(t,"selected",u[7]),c&708){m=I(["qwertyuiop","asdfghjkl","zxcvbnm"]);let i;for(i=0;i<3;i+=1){const h=he(u,m,i);p[i]?p[i].p(h,c):(p[i]=ve(h),p[i].c(),p[i].m(e,null))}for(;i<3;i+=1)p[i].d(1)}},d(u){u&&g(e),Ce(p,u),b=!1,_()}}}function ct(n){let e,t,a=n[5]?"you won :)":"game over :(",r,o,s=!n[5]&&n[1].answer&&ke(n);return{c(){s&&s.c(),e=P(),t=W("button"),r=N(a),o=N(" play again?"),this.h()},l(l){s&&s.l(l),e=L(l),t=j(l,"BUTTON",{"data-key":!0,class:!0,formaction:!0});var f=H(t);r=D(f,a),o=D(f," play again?"),f.forEach(g),this.h()},h(){y(t,"data-key","enter"),y(t,"class","restart selected svelte-1pg2j5l"),y(t,"formaction","?/restart")},m(l,f){s&&s.m(l,f),C(l,e,f),C(l,t,f),A(t,r),A(t,o)},p(l,f){!l[5]&&l[1].answer?s?s.p(l,f):(s=ke(l),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),f&32&&a!==(a=l[5]?"you won :)":"game over :(")&&te(r,a)},d(l){l&&(g(e),g(t)),s&&s.d(l)}}}function ye(n){let e,t,a,r,o,s;return{c(){e=W("button"),t=N(n[14]),this.h()},l(l){e=j(l,"BUTTON",{"data-key":!0,class:!0,formaction:!0,name:!0,"aria-label":!0});var f=H(e);t=D(f,n[14]),f.forEach(g),this.h()},h(){y(e,"data-key",n[14]),y(e,"class",a=le(n[2][n[14]])+" svelte-1pg2j5l"),e.disabled=n[7],y(e,"formaction","?/update"),y(e,"name","key"),e.value=n[14],y(e,"aria-label",r=n[14]+" "+(n[6][n[14]]||""))},m(l,f){C(l,e,f),A(e,t),o||(s=ee(e,"click",Se(n[9])),o=!0)},p(l,f){f&4&&a!==(a=le(l[2][l[14]])+" svelte-1pg2j5l")&&y(e,"class",a),f&128&&(e.disabled=l[7]),f&64&&r!==(r=l[14]+" "+(l[6][l[14]]||""))&&y(e,"aria-label",r)},d(l){l&&g(e),o=!1,s()}}}function ve(n){let e,t,a=I(n[11]),r=[];for(let o=0;o<a.length;o+=1)r[o]=ye(pe(n,a,o));return{c(){e=W("div");for(let o=0;o<r.length;o+=1)r[o].c();t=P(),this.h()},l(o){e=j(o,"DIV",{class:!0});var s=H(e);for(let l=0;l<r.length;l+=1)r[l].l(s);t=L(s),s.forEach(g),this.h()},h(){y(e,"class","row svelte-1pg2j5l")},m(o,s){C(o,e,s);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);A(e,t)},p(o,s){if(s&708){a=I(o[11]);let l;for(l=0;l<a.length;l+=1){const f=pe(o,a,l);r[l]?r[l].p(f,s):(r[l]=ye(f),r[l].c(),r[l].m(e,t))}for(;l<r.length;l+=1)r[l].d(1);r.length=a.length}},d(o){o&&g(e),Ce(r,o)}}}function ke(n){let e,t,a=n[1].answer+"",r,o;return{c(){e=W("p"),t=N('the answer was "'),r=N(a),o=N('"')},l(s){e=j(s,"P",{});var l=H(e);t=D(l,'the answer was "'),r=D(l,a),o=D(l,'"'),l.forEach(g)},m(s,l){C(s,e,l),A(e,t),A(e,r),A(e,o)},p(s,l){l&2&&a!==(a=s[1].answer+"")&&te(r,a)},d(s){s&&g(e)}}}function we(n){let e,t,a,r;return{c(){e=W("div"),this.h()},l(o){e=j(o,"DIV",{style:!0}),H(e).forEach(g),this.h()},h(){R(e,"position","absolute"),R(e,"left","50%"),R(e,"top","30%")},m(o,s){C(o,e,s),a||(r=Ae(t=Be.call(null,e,{particleCount:n[8]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})),a=!0)},p(o,s){t&&Ne(t.update)&&s&256&&t.update.call(null,{particleCount:o[8]?0:void 0,force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})},d(o){o&&g(e),a=!1,r()}}}function ft(n){let e,t,a,r="Sverdle",o,s,l,f="How to play",b,_,m=[],p=new Map,u,c,i,h,S,T,E=I(Array.from(Array(6).keys()));const X=d=>d[11];for(let d=0;d<E.length;d+=1){let k=_e(n,E,d),M=X(k);p.set(M,m[d]=be(M,k))}function F(d,k){return d[5]||d[1].answers.length>=6?ct:it}let O=F(n),v=O(n),w=n[5]&&we(n);return{c(){e=W("meta"),t=P(),a=W("h1"),a.textContent=r,o=P(),s=W("form"),l=W("a"),l.textContent=f,b=P(),_=W("div");for(let d=0;d<m.length;d+=1)m[d].c();u=P(),c=W("div"),v.c(),i=P(),w&&w.c(),h=re(),this.h()},l(d){const k=Oe("svelte-18lvto8",K.head);e=j(k,"META",{name:!0,content:!0}),k.forEach(g),t=L(d),a=j(d,"H1",{class:!0,"data-svelte-h":!0}),Q(a)!=="svelte-16hvqlg"&&(a.textContent=r),o=L(d),s=j(d,"FORM",{method:!0,action:!0,class:!0});var M=H(s);l=j(M,"A",{class:!0,href:!0,"data-svelte-h":!0}),Q(l)!=="svelte-1w3fhu3"&&(l.textContent=f),b=L(M),_=j(M,"DIV",{class:!0});var ne=H(_);for(let x=0;x<m.length;x+=1)m[x].l(ne);ne.forEach(g),u=L(M),c=j(M,"DIV",{class:!0});var ae=H(c);v.l(ae),ae.forEach(g),M.forEach(g),i=L(d),w&&w.l(d),h=re(),this.h()},h(){var d;K.title="Sverdle",y(e,"name","description"),y(e,"content","A Wordle clone written in SvelteKit"),y(a,"class","visually-hidden"),y(l,"class","how-to-play svelte-1pg2j5l"),y(l,"href","/sverdle/how-to-play"),y(_,"class","grid svelte-1pg2j5l"),G(_,"playing",!n[5]),G(_,"bad-guess",(d=n[0])==null?void 0:d.badGuess),y(c,"class","controls svelte-1pg2j5l"),y(s,"method","POST"),y(s,"action","?/enter"),y(s,"class","svelte-1pg2j5l")},m(d,k){A(K.head,e),C(d,t,k),C(d,a,k),C(d,o,k),C(d,s,k),A(s,l),A(s,b),A(s,_);for(let M=0;M<m.length;M+=1)m[M]&&m[M].m(_,null);A(s,u),A(s,c),v.m(c,null),C(d,i,k),w&&w.m(d,k),C(d,h,k),S||(T=[ee(at,"keydown",n[10]),Ae(et.call(null,s,ut))],S=!0)},p(d,[k]){var M;k&26&&(E=I(Array.from(Array(6).keys())),m=We(m,k,X,1,d,E,p,_,Te,be,null,_e)),k&32&&G(_,"playing",!d[5]),k&1&&G(_,"bad-guess",(M=d[0])==null?void 0:M.badGuess),O===(O=F(d))&&v?v.p(d,k):(v.d(1),v=O(d),v&&(v.c(),v.m(c,null))),d[5]?w?w.p(d,k):(w=we(d),w.c(),w.m(h.parentNode,h)):w&&(w.d(1),w=null)},i:se,o:se,d(d){d&&(g(t),g(a),g(o),g(s),g(i),g(h)),g(e);for(let k=0;k<m.length;k+=1)m[k].d();v.d(),w&&w.d(d),S=!1,Ee(T)}}}const ut=()=>({update:n})=>{n({reset:!1})};function dt(n,e,t){let a,r,o,s,l;He(n,nt,c=>t(8,l=c));let{data:f}=e,{form:b}=e,_,m;function p(c){const i=c.target.getAttribute("data-key");i==="backspace"?(t(3,o=o.slice(0,-1)),b!=null&&b.badGuess&&t(0,b.badGuess=!1,b)):o.length<5&&t(3,o+=i)}function u(c){var i;c.metaKey||c.key==="Enter"&&!s||(i=document.querySelector(`[data-key="${c.key}" i]`))==null||i.dispatchEvent(new MouseEvent("click",{cancelable:!0}))}return n.$$set=c=>{"data"in c&&t(1,f=c.data),"form"in c&&t(0,b=c.form)},n.$$.update=()=>{n.$$.dirty&2&&t(5,a=f.answers.at(-1)==="xxxxx"),n.$$.dirty&34&&t(4,r=a?-1:f.answers.length),n.$$.dirty&18&&t(3,o=f.guesses[r]||""),n.$$.dirty&8&&t(7,s=o.length===5),n.$$.dirty&6&&(t(2,_={}),t(6,m={}),f.answers.forEach((c,i)=>{const h=f.guesses[i];for(let S=0;S<5;S+=1){const T=h[S];c[S]==="x"?(t(2,_[T]="exact",_),t(6,m[T]="correct",m)):_[T]||(t(2,_[T]=c[S]==="c"?"close":"missing",_),t(6,m[T]=c[S]==="c"?"present":"absent",m))}}))},[b,f,_,o,r,a,m,s,l,p,u]}class bt extends Pe{constructor(e){super(),Le(this,e,dt,ft,Ge,{data:1,form:0})}}export{bt as component};
