import{S as Z,i as tt,s as et,k as y,a as V,q as P,l as w,m as $,h as p,c as x,r as S,I as M,n as g,b as D,G as v,u as q,C as N,D as C,f as j,d as lt,t as G,U as at,x as rt,y as st,z as it,A as ot,g as nt}from"../../../../../../chunks/index-cd36ba59.js";import{p as ct}from"../../../../../../chunks/stores-d73be439.js";function H(i,t,a){const e=i.slice();return e[3]=t[a],e}function U(i,t,a){const e=i.slice();return e[3]=t[a],e}function F(i){let t=i[0].attributes.author.data.attributes.name+"",a;return{c(){a=P(t)},l(e){a=S(e,t)},m(e,r){D(e,a,r)},p(e,r){r&1&&t!==(t=e[0].attributes.author.data.attributes.name+"")&&q(a,t)},d(e){e&&p(a)}}}function J(i){let t,a,e,r,s=i[0].attributes.categories.data,l=[];for(let n=0;n<s.length;n+=1)l[n]=K(U(i,s,n));return{c(){t=y("div"),a=y("span"),e=P("檔案:"),r=V();for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){t=w(n,"DIV",{class:!0});var c=$(t);a=w(c,"SPAN",{class:!0});var f=$(a);e=S(f,"檔案:"),f.forEach(p),r=x(c);for(let E=0;E<l.length;E+=1)l[E].l(c);c.forEach(p),this.h()},h(){g(a,"class","text-xs mr-1 mt-0.5 text-gray-500"),g(t,"class","flex flex-wrap")},m(n,c){D(n,t,c),v(t,a),v(a,e),v(t,r);for(let f=0;f<l.length;f+=1)l[f].m(t,null)},p(n,c){if(c&1){s=n[0].attributes.categories.data;let f;for(f=0;f<s.length;f+=1){const E=U(n,s,f);l[f]?l[f].p(E,c):(l[f]=K(E),l[f].c(),l[f].m(t,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=s.length}},d(n){n&&p(t),C(l,n)}}}function K(i){let t,a=i[3].attributes.name+"",e,r;return{c(){t=y("a"),e=P(a),this.h()},l(s){t=w(s,"A",{href:!0,class:!0});var l=$(t);e=S(l,a),l.forEach(p),this.h()},h(){g(t,"href",r="/blog/category/"+i[3].attributes.slug+"/1"),g(t,"class","text-sm border-b border-gray-700 text-gray-700 mr-2 mb-1")},m(s,l){D(s,t,l),v(t,e)},p(s,l){l&1&&a!==(a=s[3].attributes.name+"")&&q(e,a),l&1&&r!==(r="/blog/category/"+s[3].attributes.slug+"/1")&&g(t,"href",r)},d(s){s&&p(t)}}}function L(i){let t,a=i[0].attributes.tags.data,e=[];for(let r=0;r<a.length;r+=1)e[r]=O(H(i,a,r));return{c(){t=y("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=w(r,"DIV",{class:!0});var s=$(t);for(let l=0;l<e.length;l+=1)e[l].l(s);s.forEach(p),this.h()},h(){g(t,"class","flex flex-wrap")},m(r,s){D(r,t,s);for(let l=0;l<e.length;l+=1)e[l].m(t,null)},p(r,s){if(s&1){a=r[0].attributes.tags.data;let l;for(l=0;l<a.length;l+=1){const n=H(r,a,l);e[l]?e[l].p(n,s):(e[l]=O(n),e[l].c(),e[l].m(t,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=a.length}},d(r){r&&p(t),C(e,r)}}}function O(i){let t,a=i[3].attributes.name+"",e;return{c(){t=y("span"),e=P(a),this.h()},l(r){t=w(r,"SPAN",{class:!0});var s=$(t);e=S(s,a),s.forEach(p),this.h()},h(){g(t,"class","text-xs px-1 bg-gray-200 text-blue-900 italic rounded border-gray-200 border mr-2 mb-1")},m(r,s){D(r,t,s),v(t,e)},p(r,s){s&1&&a!==(a=r[3].attributes.name+"")&&q(e,a)},d(r){r&&p(t)}}}function ut(i){let t,a,e,r,s,l,n,c=i[0].attributes.title+"",f,E,_,u,d,o,h=i[0].attributes.author.data&&F(i),k=i[0].attributes.categories&&J(i),m=i[0].attributes.tags&&L(i);return{c(){t=y("a"),a=y("div"),e=y("img"),s=V(),l=y("div"),n=y("h2"),f=P(c),E=V(),_=y("div"),h&&h.c(),u=V(),k&&k.c(),d=V(),m&&m.c(),this.h()},l(b){t=w(b,"A",{href:!0,class:!0});var I=$(t);a=w(I,"DIV",{class:!0});var T=$(a);e=w(T,"IMG",{src:!0,class:!0,alt:!0}),T.forEach(p),s=x(I),l=w(I,"DIV",{class:!0});var A=$(l);n=w(A,"H2",{class:!0});var z=$(n);f=S(z,c),z.forEach(p),E=x(A),_=w(A,"DIV",{class:!0});var B=$(_);h&&h.l(B),B.forEach(p),u=x(A),k&&k.l(A),d=x(A),m&&m.l(A),A.forEach(p),I.forEach(p),this.h()},h(){M(e.src,r=`${i[1]}/blog/${i[0].attributes.createdAt.split("T")[0]}-${i[0].attributes.slug}/cover.jpg`)||g(e,"src",r),g(e,"class","shadow-lg rounded-lg"),g(e,"alt","missing image!"),g(a,"class","w-full sm:w-48 flex-shrink-0"),g(n,"class","text-lg leading-tight font-bold"),g(_,"class","flex items-center"),g(l,"class","ml-0 sm:ml-4 mt-2 sm:mt-0"),g(t,"href",o="/blog/"+i[0].attributes.slug),g(t,"class","flex flex-col sm:flex-row")},m(b,I){D(b,t,I),v(t,a),v(a,e),v(t,s),v(t,l),v(l,n),v(n,f),v(l,E),v(l,_),h&&h.m(_,null),v(l,u),k&&k.m(l,null),v(l,d),m&&m.m(l,null)},p(b,[I]){I&1&&!M(e.src,r=`${b[1]}/blog/${b[0].attributes.createdAt.split("T")[0]}-${b[0].attributes.slug}/cover.jpg`)&&g(e,"src",r),I&1&&c!==(c=b[0].attributes.title+"")&&q(f,c),b[0].attributes.author.data?h?h.p(b,I):(h=F(b),h.c(),h.m(_,null)):h&&(h.d(1),h=null),b[0].attributes.categories?k?k.p(b,I):(k=J(b),k.c(),k.m(l,d)):k&&(k.d(1),k=null),b[0].attributes.tags?m?m.p(b,I):(m=L(b),m.c(),m.m(l,null)):m&&(m.d(1),m=null),I&1&&o!==(o="/blog/"+b[0].attributes.slug)&&g(t,"href",o)},i:N,o:N,d(b){b&&p(t),h&&h.d(),k&&k.d(),m&&m.d()}}}function ft(i,t,a){let e;const r="https://empowerhk.s3.ap-southeast-1.amazonaws.com";let{post:s}=t;return i.$$set=l=>{"post"in l&&a(2,s=l.post)},i.$$.update=()=>{i.$$.dirty&4&&a(0,e=s)},[e,r,s]}class ht extends Z{constructor(t){super(),tt(this,t,ft,ut,et,{post:2})}}function Q(i,t,a){const e=i.slice();return e[4]=t[a],e}function R(i,t,a){const e=i.slice();return e[7]=t[a],e}function W(i){let t,a;return t=new ht({props:{post:i[7]}}),{c(){rt(t.$$.fragment)},l(e){st(t.$$.fragment,e)},m(e,r){it(t,e,r),a=!0},p(e,r){const s={};r&1&&(s.post=e[7]),t.$set(s)},i(e){a||(j(t.$$.fragment,e),a=!0)},o(e){G(t.$$.fragment,e),a=!1},d(e){ot(t,e)}}}function X(i){let t,a=i[4]+1+"",e,r;return{c(){t=y("a"),e=P(a),this.h()},l(s){t=w(s,"A",{class:!0,href:!0});var l=$(t);e=S(l,a),l.forEach(p),this.h()},h(){g(t,"class","text-xs flex justify-center items-center w-8 h-8 rounded-full bg-gray-100 border border-gray-300 m-1"),g(t,"href",r="/blog/category/"+i[1].params.category+"/"+(i[4]+1))},m(s,l){D(s,t,l),v(t,e)},p(s,l){l&2&&r!==(r="/blog/category/"+s[1].params.category+"/"+(s[4]+1))&&g(t,"href",r)},d(s){s&&p(t)}}}function gt(i){let t,a,e,r,s,l,n=i[0],c=[];for(let u=0;u<n.length;u+=1)c[u]=W(R(i,n,u));const f=u=>G(c[u],1,1,()=>{c[u]=null});let E=Array.from({length:i[2].pageCount},Y),_=[];for(let u=0;u<E.length;u+=1)_[u]=X(Q(i,E,u));return{c(){t=y("div"),a=y("div");for(let u=0;u<c.length;u+=1)c[u].c();e=V(),r=y("div"),s=y("div");for(let u=0;u<_.length;u+=1)_[u].c();this.h()},l(u){t=w(u,"DIV",{class:!0});var d=$(t);a=w(d,"DIV",{class:!0});var o=$(a);for(let m=0;m<c.length;m+=1)c[m].l(o);o.forEach(p),e=x(d),r=w(d,"DIV",{class:!0});var h=$(r);s=w(h,"DIV",{class:!0});var k=$(s);for(let m=0;m<_.length;m+=1)_[m].l(k);k.forEach(p),h.forEach(p),d.forEach(p),this.h()},h(){g(a,"class","grid grid-cols-1 sm:grid-cols-2 gap-8"),g(s,"class","container flex flex-wrap justify-center"),g(r,"class","bg-gray-50 mt-6 py-6 border-t border-gray-300"),g(t,"class","mx-auto p-4 max-w-screen-lg")},m(u,d){D(u,t,d),v(t,a);for(let o=0;o<c.length;o+=1)c[o].m(a,null);v(t,e),v(t,r),v(r,s);for(let o=0;o<_.length;o+=1)_[o].m(s,null);l=!0},p(u,[d]){if(d&1){n=u[0];let o;for(o=0;o<n.length;o+=1){const h=R(u,n,o);c[o]?(c[o].p(h,d),j(c[o],1)):(c[o]=W(h),c[o].c(),j(c[o],1),c[o].m(a,null))}for(nt(),o=n.length;o<c.length;o+=1)f(o);lt()}if(d&6){E=Array.from({length:u[2].pageCount},Y);let o;for(o=0;o<E.length;o+=1){const h=Q(u,E,o);_[o]?_[o].p(h,d):(_[o]=X(h),_[o].c(),_[o].m(s,null))}for(;o<_.length;o+=1)_[o].d(1);_.length=E.length}},i(u){if(!l){for(let d=0;d<n.length;d+=1)j(c[d]);l=!0}},o(u){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)G(c[d]);l=!1},d(u){u&&p(t),C(c,u),C(_,u)}}}const Y=(i,t)=>t;function _t(i,t,a){let e,r;at(i,ct,n=>a(1,r=n));let{data:s}=t,l=s.meta.pagination;return i.$$set=n=>{"data"in n&&a(3,s=n.data)},i.$$.update=()=>{i.$$.dirty&8&&a(0,e=s.data),i.$$.dirty&1&&console.log(e)},[e,r,l,s]}class pt extends Z{constructor(t){super(),tt(this,t,_t,gt,et,{data:3})}}export{pt as default};
