import{S as R,i as U,s as W,k,a as Y,q as A,l as D,m as E,h as o,c as y,r as I,n as c,b as w,E as b,u as S,C as B,G as X,D as V}from"./index-abe8bc1d.js";import{d as z}from"./dayjs.min-40a0aa38.js";function F(l,e,s){const a=l.slice();return a[3]=e[s],a}function Z(l){let e,s;return{c(){e=k("img"),this.h()},l(a){e=D(a,"IMG",{src:!0,alt:!0}),this.h()},h(){V(e.src,s=`https://empowerhk.s3.ap-southeast-1.amazonaws.com/events/${l[0].attributes.createdAt.split("T")[0]}-${l[0].attributes.slug}/cover.jpg`)||c(e,"src",s),c(e,"alt","missing image!")},m(a,t){w(a,e,t)},p(a,t){t&1&&!V(e.src,s=`https://empowerhk.s3.ap-southeast-1.amazonaws.com/events/${a[0].attributes.createdAt.split("T")[0]}-${a[0].attributes.slug}/cover.jpg`)&&c(e,"src",s)},d(a){a&&o(e)}}}function x(l){let e,s;return{c(){e=k("img"),this.h()},l(a){e=D(a,"IMG",{src:!0,alt:!0}),this.h()},h(){V(e.src,s=l[0].attributes.image.data.attributes.url)||c(e,"src",s),c(e,"alt","missing image!")},m(a,t){w(a,e,t)},p(a,t){t&1&&!V(e.src,s=a[0].attributes.image.data.attributes.url)&&c(e,"src",s)},d(a){a&&o(e)}}}function J(l){let e,s=z(l[0].attributes.end_date).format("MM.DD")+"",a;return{c(){e=A("- "),a=A(s)},l(t){e=I(t,"- "),a=I(t,s)},m(t,r){w(t,e,r),w(t,a,r)},p(t,r){r&1&&s!==(s=z(t[0].attributes.end_date).format("MM.DD")+"")&&S(a,s)},d(t){t&&o(e),t&&o(a)}}}function K(l){let e,s=l[0].attributes.excerpt+"";return{c(){e=k("p"),this.h()},l(a){e=D(a,"P",{class:!0});var t=E(e);t.forEach(o),this.h()},h(){c(e,"class","mb-2 text-gray-700 text-sm")},m(a,t){w(a,e,t),e.innerHTML=s},p(a,t){t&1&&s!==(s=a[0].attributes.excerpt+"")&&(e.innerHTML=s)},d(a){a&&o(e)}}}function O(l){let e,s,a,t,r=l[0].attributes.event_categories.data,i=[];for(let n=0;n<r.length;n+=1)i[n]=Q(F(l,r,n));return{c(){e=k("div"),s=k("span"),a=A("分類:"),t=Y();for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=D(n,"DIV",{class:!0});var p=E(e);s=D(p,"SPAN",{class:!0});var u=E(s);a=I(u,"分類:"),u.forEach(o),t=y(p);for(let v=0;v<i.length;v+=1)i[v].l(p);p.forEach(o),this.h()},h(){c(s,"class","text-xs mr-1 mt-0.5 text-gray-500"),c(e,"class","flex flex-wrap")},m(n,p){w(n,e,p),b(e,s),b(s,a),b(e,t);for(let u=0;u<i.length;u+=1)i[u].m(e,null)},p(n,p){if(p&1){r=n[0].attributes.event_categories.data;let u;for(u=0;u<r.length;u+=1){const v=F(n,r,u);i[u]?i[u].p(v,p):(i[u]=Q(v),i[u].c(),i[u].m(e,null))}for(;u<i.length;u+=1)i[u].d(1);i.length=r.length}},d(n){n&&o(e),X(i,n)}}}function Q(l){let e,s=l[3].attributes.name+"",a,t;return{c(){e=k("a"),a=A(s),this.h()},l(r){e=D(r,"A",{href:!0,class:!0});var i=E(e);a=I(i,s),i.forEach(o),this.h()},h(){c(e,"href",t="/events/category/"+l[3].attributes.slug+"/1"),c(e,"class","text-sm border-b border-gray-700 text-gray-700 mr-2 mb-1")},m(r,i){w(r,e,i),b(e,a)},p(r,i){i&1&&s!==(s=r[3].attributes.name+"")&&S(a,s),i&1&&t!==(t="/events/category/"+r[3].attributes.slug+"/1")&&c(e,"href",t)},d(r){r&&o(e)}}}function ee(l){let e,s,a,t,r,i=z(l[0].attributes.start_date).format("YYYY.MM.DD")+"",n,p,u,v,P=l[0].attributes.title+"",T,C,j,q;function L(f,d){return f[0].attributes.image.data?x:Z}let G=L(l),g=G(l),h=l[0].attributes.end_date&&J(l),_=l[0].attributes.excerpt&&K(l),m=l[0].attributes.event_categories&&O(l);return{c(){e=k("a"),s=k("div"),g.c(),a=Y(),t=k("div"),r=k("p"),n=A(i),p=Y(),h&&h.c(),u=Y(),v=k("h2"),T=A(P),C=Y(),_&&_.c(),j=Y(),m&&m.c(),this.h()},l(f){e=D(f,"A",{href:!0,class:!0});var d=E(e);s=D(d,"DIV",{class:!0});var $=E(s);g.l($),$.forEach(o),a=y(d),t=D(d,"DIV",{class:!0});var M=E(t);r=D(M,"P",{class:!0});var H=E(r);n=I(H,i),p=y(H),h&&h.l(H),H.forEach(o),u=y(M),v=D(M,"H2",{class:!0});var N=E(v);T=I(N,P),N.forEach(o),C=y(M),_&&_.l(M),j=y(M),m&&m.l(M),M.forEach(o),d.forEach(o),this.h()},h(){c(s,"class","w-full sm:w-48 flex-shrink-0"),c(r,"class","italic text-blue-900 font-bold"),c(v,"class","text-lg leading-tight font-bold"),c(t,"class","ml-0 sm:ml-4 mt-2 sm:mt-0"),c(e,"href",q="/events/"+l[0].attributes.slug),c(e,"class","hover:bg-blue-50 hover:text-blue-600 flex flex-col sm:flex-row my-6")},m(f,d){w(f,e,d),b(e,s),g.m(s,null),b(e,a),b(e,t),b(t,r),b(r,n),b(r,p),h&&h.m(r,null),b(t,u),b(t,v),b(v,T),b(t,C),_&&_.m(t,null),b(t,j),m&&m.m(t,null)},p(f,[d]){G===(G=L(f))&&g?g.p(f,d):(g.d(1),g=G(f),g&&(g.c(),g.m(s,null))),d&1&&i!==(i=z(f[0].attributes.start_date).format("YYYY.MM.DD")+"")&&S(n,i),f[0].attributes.end_date?h?h.p(f,d):(h=J(f),h.c(),h.m(r,null)):h&&(h.d(1),h=null),d&1&&P!==(P=f[0].attributes.title+"")&&S(T,P),f[0].attributes.excerpt?_?_.p(f,d):(_=K(f),_.c(),_.m(t,j)):_&&(_.d(1),_=null),f[0].attributes.event_categories?m?m.p(f,d):(m=O(f),m.c(),m.m(t,null)):m&&(m.d(1),m=null),d&1&&q!==(q="/events/"+f[0].attributes.slug)&&c(e,"href",q)},i:B,o:B,d(f){f&&o(e),g.d(),h&&h.d(),_&&_.d(),m&&m.d()}}}function te(l,e,s){let a,{event:t}=e;return l.$$set=r=>{"event"in r&&s(1,t=r.event)},l.$$.update=()=>{l.$$.dirty&2&&s(0,a=t)},[a,t]}class le extends R{constructor(e){super(),U(this,e,te,ee,W,{event:1})}}export{le as E};
