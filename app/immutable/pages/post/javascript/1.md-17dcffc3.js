import{S as de,i as ie,s as he,e as f,c as y,a as E,d as n,b as H,g,n as ae,w as ge,t as q,k as j,h as R,m as U,F as i,j as x,M as Ie,x as _e,y as ke,z as Ee,H as je,I as Ue,J as Qe,r as ne,p as le,P as ue,C as He,D as se,A as be,B as me,Q as re}from"../../../chunks/index-cf3e183d.js";import{g as qe}from"../../../chunks/stores-05fa8955.js";function Re(s){let e;return{c(){e=f("div"),this.h()},l(o){e=y(o,"DIV",{id:!0}),E(e).forEach(n),this.h()},h(){H(e,"id","utterances-comments")},m(o,h){g(o,e,h)},p:ae,i:ae,o:ae,d(o){o&&n(e)}}}function Ne(s){const e={src:"https://utteranc.es/client.js",repo:"economyjang/blog-comments",label:"comments",crossorigin:"anonymous",theme:"github-dark",async:!0,"issue-term":"pathname"};return ge(()=>{const o=document.createElement("script"),h=document.getElementById("utterances-comments");for(const p in e)o.setAttribute(p,e[p]);h.appendChild(o)}),[]}class Se extends de{constructor(e){super(),ie(this,e,Ne,Re,he,{})}}function fe(s,e,o){const h=s.slice();return h[10]=e[o],h}function ye(s,e,o){const h=s.slice();return h[13]=e[o],h}function ve(s){let e,o,h,p=s[13]+"",l,r,_;return{c(){e=f("a"),o=f("span"),h=q("#"),l=q(p),r=j(),this.h()},l(w){e=y(w,"A",{href:!0,class:!0});var m=E(e);o=y(m,"SPAN",{class:!0});var Q=E(o);h=R(Q,"#"),l=R(Q,p),Q.forEach(n),r=U(m),m.forEach(n),this.h()},h(){H(o,"class","post-tag svelte-1e3ql81"),H(e,"href",_="/tags#"+s[13]),H(e,"class","svelte-1e3ql81")},m(w,m){g(w,e,m),i(e,o),i(o,h),i(o,l),i(e,r)},p(w,m){m&16&&p!==(p=w[13]+"")&&x(l,p),m&16&&_!==(_="/tags#"+w[13])&&H(e,"href",_)},d(w){w&&n(e)}}}function pe(s){let e,o,h=s[10].substring(1)+"",p,l,r,_;return{c(){e=f("li"),o=f("a"),p=q(h),r=j(),this.h()},l(w){e=y(w,"LI",{class:!0});var m=E(e);o=y(m,"A",{href:!0,class:!0});var Q=E(o);p=R(Q,h),Q.forEach(n),r=U(m),m.forEach(n),this.h()},h(){H(o,"href",l=s[10]),H(o,"class","svelte-1e3ql81"),H(e,"class",_="post-index-item "+(s[10]===s[6]?"post-index-item-highlight":"")+" svelte-1e3ql81")},m(w,m){g(w,e,m),i(e,o),i(o,p),i(e,r)},p(w,m){m&32&&h!==(h=w[10].substring(1)+"")&&x(p,h),m&32&&l!==(l=w[10])&&H(o,"href",l),m&96&&_!==(_="post-index-item "+(w[10]===w[6]?"post-index-item-highlight":"")+" svelte-1e3ql81")&&H(e,"class",_)},d(w){w&&n(e)}}}function Be(s){let e,o,h,p,l,r,_,w,m,Q,D,G,c,V,z,F,P,K,S,B,X,L,J,T,N,C=s[4],k=[];for(let a=0;a<C.length;a+=1)k[a]=ve(ye(s,C,a));let M=s[5],I=[];for(let a=0;a<M.length;a+=1)I[a]=pe(fe(s,M,a));const W=s[8].default,b=Ie(W,s,s[7],null);return T=new Se({}),{c(){e=f("div"),o=f("div"),h=q(s[0]),p=j(),l=f("div"),r=q(s[1]),_=j(),w=f("div"),m=f("b"),Q=q("Published: "),D=q(s[2]),G=j(),c=f("b"),V=q("Updated: "),z=q(s[3]),F=j(),P=f("div");for(let a=0;a<k.length;a+=1)k[a].c();K=j(),S=f("div"),B=f("ul");for(let a=0;a<I.length;a+=1)I[a].c();X=j(),L=f("div"),b&&b.c(),J=j(),_e(T.$$.fragment),this.h()},l(a){e=y(a,"DIV",{class:!0});var u=E(e);o=y(u,"DIV",{class:!0});var d=E(o);h=R(d,s[0]),d.forEach(n),p=U(u),l=y(u,"DIV",{class:!0});var A=E(l);r=R(A,s[1]),A.forEach(n),_=U(u),w=y(u,"DIV",{class:!0});var t=E(w);m=y(t,"B",{});var v=E(m);Q=R(v,"Published: "),D=R(v,s[2]),v.forEach(n),G=U(t),c=y(t,"B",{});var Y=E(c);V=R(Y,"Updated: "),z=R(Y,s[3]),Y.forEach(n),t.forEach(n),F=U(u),P=y(u,"DIV",{class:!0});var $=E(P);for(let O=0;O<k.length;O+=1)k[O].l($);$.forEach(n),K=U(u),S=y(u,"DIV",{class:!0});var ee=E(S);B=y(ee,"UL",{class:!0});var Z=E(B);for(let O=0;O<I.length;O+=1)I[O].l(Z);Z.forEach(n),ee.forEach(n),X=U(u),L=y(u,"DIV",{class:!0});var te=E(L);b&&b.l(te),te.forEach(n),u.forEach(n),J=U(a),ke(T.$$.fragment,a),this.h()},h(){H(o,"class","post-title svelte-1e3ql81"),H(l,"class","post-summary svelte-1e3ql81"),H(w,"class","post-date svelte-1e3ql81"),H(P,"class","post-tags svelte-1e3ql81"),H(B,"class","post-index-list svelte-1e3ql81"),H(S,"class","post-index svelte-1e3ql81"),H(L,"class","post-contents"),H(e,"class","post-container svelte-1e3ql81")},m(a,u){g(a,e,u),i(e,o),i(o,h),i(e,p),i(e,l),i(l,r),i(e,_),i(e,w),i(w,m),i(m,Q),i(m,D),i(w,G),i(w,c),i(c,V),i(c,z),i(e,F),i(e,P);for(let d=0;d<k.length;d+=1)k[d].m(P,null);i(e,K),i(e,S),i(S,B);for(let d=0;d<I.length;d+=1)I[d].m(B,null);i(e,X),i(e,L),b&&b.m(L,null),g(a,J,u),Ee(T,a,u),N=!0},p(a,[u]){if((!N||u&1)&&x(h,a[0]),(!N||u&2)&&x(r,a[1]),(!N||u&4)&&x(D,a[2]),(!N||u&8)&&x(z,a[3]),u&16){C=a[4];let d;for(d=0;d<C.length;d+=1){const A=ye(a,C,d);k[d]?k[d].p(A,u):(k[d]=ve(A),k[d].c(),k[d].m(P,null))}for(;d<k.length;d+=1)k[d].d(1);k.length=C.length}if(u&96){M=a[5];let d;for(d=0;d<M.length;d+=1){const A=fe(a,M,d);I[d]?I[d].p(A,u):(I[d]=pe(A),I[d].c(),I[d].m(B,null))}for(;d<I.length;d+=1)I[d].d(1);I.length=M.length}b&&b.p&&(!N||u&128)&&je(b,W,a,a[7],N?Qe(W,a[7],u,null):Ue(a[7]),null)},i(a){N||(ne(b,a),ne(T.$$.fragment,a),N=!0)},o(a){le(b,a),le(T.$$.fragment,a),N=!1},d(a){a&&n(e),ue(k,a),ue(I,a),b&&b.d(a),a&&n(J),He(T,a)}}}function De(s,e,o){let{$$slots:h={},$$scope:p}=e,{title:l}=e,{summary:r}=e,{published:_}=e,{updated:w}=e,{tags:m}=e,{index:Q}=e,D;const G=qe();return ge(()=>{G.page.subscribe(c=>o(6,D=c.url.hash))}),s.$$set=c=>{"title"in c&&o(0,l=c.title),"summary"in c&&o(1,r=c.summary),"published"in c&&o(2,_=c.published),"updated"in c&&o(3,w=c.updated),"tags"in c&&o(4,m=c.tags),"index"in c&&o(5,Q=c.index),"$$scope"in c&&o(7,p=c.$$scope)},[l,r,_,w,m,Q,D,p,h]}class Ve extends de{constructor(e){super(),ie(this,e,De,Be,he,{title:0,summary:1,published:2,updated:3,tags:4,index:5})}}function Pe(s){let e,o,h,p,l,r,_,w,m,Q,D,G,c,V,z,F,P,K,S,B,X,L,J,T,N,C,k,M,I,W,b,a,u,d,A;return{c(){e=f("h1"),o=q("\u{1F4CD} Hello my first page"),h=j(),p=f("hr"),l=j(),r=f("p"),_=f("strong"),w=q("Nice to meet you!"),m=q(`
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.`),Q=j(),D=f("br"),G=f("br"),c=j(),V=f("h1"),z=q("\u{1F4CD} Hello my second page"),F=j(),P=f("hr"),K=j(),S=f("p"),B=f("strong"),X=q("Nice to meet you!"),L=q(`
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.`),J=j(),T=f("br"),N=f("br"),C=j(),k=f("h1"),M=q("\u{1F4CD} Hello my third page"),I=j(),W=f("hr"),b=j(),a=f("p"),u=f("strong"),d=q("Nice to meet you!"),A=q(`
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.`),this.h()},l(t){e=y(t,"H1",{id:!0});var v=E(e);o=R(v,"\u{1F4CD} Hello my first page"),v.forEach(n),h=U(t),p=y(t,"HR",{}),l=U(t),r=y(t,"P",{});var Y=E(r);_=y(Y,"STRONG",{});var $=E(_);w=R($,"Nice to meet you!"),$.forEach(n),m=R(Y,`
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.`),Y.forEach(n),Q=U(t),D=y(t,"BR",{}),G=y(t,"BR",{}),c=U(t),V=y(t,"H1",{id:!0,class:!0});var ee=E(V);z=R(ee,"\u{1F4CD} Hello my second page"),ee.forEach(n),F=U(t),P=y(t,"HR",{}),K=U(t),S=y(t,"P",{});var Z=E(S);B=y(Z,"STRONG",{});var te=E(B);X=R(te,"Nice to meet you!"),te.forEach(n),L=R(Z,`
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.`),Z.forEach(n),J=U(t),T=y(t,"BR",{}),N=y(t,"BR",{}),C=U(t),k=y(t,"H1",{id:!0});var O=E(k);M=R(O,"\u{1F4CD} Hello my third page"),O.forEach(n),I=U(t),W=y(t,"HR",{}),b=U(t),a=y(t,"P",{});var oe=E(a);u=y(oe,"STRONG",{});var we=E(u);d=R(we,"Nice to meet you!"),we.forEach(n),A=R(oe,`
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.
Updating Quina to version 2.0 filled my head with new ideas that I just couldn\u2019t walk away from. Eventually,
those ideas took the shape of a whole new word game, named Hondo.`),oe.forEach(n),this.h()},h(){H(e,"id","hello_my_first_page"),H(V,"id","hello_my_second_page"),H(V,"class","post-content-header"),H(k,"id","hello_my_third_page")},m(t,v){g(t,e,v),i(e,o),g(t,h,v),g(t,p,v),g(t,l,v),g(t,r,v),i(r,_),i(_,w),i(r,m),g(t,Q,v),g(t,D,v),g(t,G,v),g(t,c,v),g(t,V,v),i(V,z),g(t,F,v),g(t,P,v),g(t,K,v),g(t,S,v),i(S,B),i(B,X),i(S,L),g(t,J,v),g(t,T,v),g(t,N,v),g(t,C,v),g(t,k,v),i(k,M),g(t,I,v),g(t,W,v),g(t,b,v),g(t,a,v),i(a,u),i(u,d),i(a,A)},p:ae,d(t){t&&n(e),t&&n(h),t&&n(p),t&&n(l),t&&n(r),t&&n(Q),t&&n(D),t&&n(G),t&&n(c),t&&n(V),t&&n(F),t&&n(P),t&&n(K),t&&n(S),t&&n(J),t&&n(T),t&&n(N),t&&n(C),t&&n(k),t&&n(I),t&&n(W),t&&n(b),t&&n(a)}}}function Te(s){let e,o;const h=[s[0],ce];let p={$$slots:{default:[Pe]},$$scope:{ctx:s}};for(let l=0;l<h.length;l+=1)p=se(p,h[l]);return e=new Ve({props:p}),{c(){_e(e.$$.fragment)},l(l){ke(e.$$.fragment,l)},m(l,r){Ee(e,l,r),o=!0},p(l,[r]){const _=r&1?be(h,[r&1&&me(l[0]),r&0&&me(ce)]):{};r&2&&(_.$$scope={dirty:r,ctx:l}),e.$set(_)},i(l){o||(ne(e.$$.fragment,l),o=!0)},o(l){le(e.$$.fragment,l),o=!1},d(l){He(e,l)}}}const ce={title:"Building accessible toggle buttons (with examples for Svelte, Vue, and React)",published:"2022.07.25",updated:"2022.07.25",summary:"Toggle buttons might be the biggest missing native HTML element. This post will help you code them right, for all users, in any (or no) framework.",tags:["Javascript","Svelte"],index:["#hello_my_first_page","#hello_my_second_page","#hello_my_third_page"]};function Ae(s,e,o){return s.$$set=h=>{o(0,e=se(se({},e),re(h)))},e=re(e),[e]}class Le extends de{constructor(e){super(),ie(this,e,Ae,Te,he,{})}}export{Le as default,ce as metadata};
