"use strict";(self.webpackChunkhandycomputerbloke=self.webpackChunkhandycomputerbloke||[]).push([[691],{3343:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(6541),a=n(7294);function o(e){var t=e.children;return a.createElement(r.xu,{w:"100%",p:4,boxShadow:"md",borderRadius:"xl",borderWidth:"1px"},t)}},9766:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(6541),a=n(7294);function o(e){var t=e.children;return a.createElement(r.MI,{columns:{sm:1,md:2},spacing:4},t)}},629:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(7370),a=n(9698),o=n(7294),i=n(8615);a.jU?o.useLayoutEffect:o.useEffect;a.Ts;a.Ts;function u(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e){return Object.entries(e).sort((function(e,t){return Number.parseInt(e[1],10)>Number.parseInt(t[1],10)?1:-1})).map((function(e,t,n){var r=e[0],a=e[1],o=n[t+1],i=o?o[1]:void 0,u=function(e,t){if(!(parseInt(e,10)>=0||t))return"";var n="(min-width: "+m(e)+")";if(!t)return n;n&&(n+=" and ");return n+="(max-width: "+m(function(e){return function(e,t){if("number"==typeof e)return""+(e+t);return e.replace(s,(function(e){return""+(parseFloat(e)+t)}))}(e,e.endsWith("px")?-1:-.01)}(t))+")"}(a,i);return{minWidth:a,maxWidth:i,breakpoint:r,query:u}}))}var s=/([0-9]+\.?[0-9]*)/;function m(e){return(0,a.hj)(e)?e+"px":e}var d=["query"],h=["query"];function f(e,t){var n=function(e){var t=(0,r.Fg)().breakpoints,n=(0,i.O)(),a=o.useMemo((function(){return c(l({base:"0px"},t))}),[t]),s=o.useState((function(){if(e){var t=a.find((function(t){return t.breakpoint===e}));if(t)return t.query,u(t,d)}})),m=s[0],f=s[1],p=null==m?void 0:m.breakpoint,y=o.useCallback((function(e,t){e.matches&&p!==t.breakpoint&&f(t)}),[p]);return o.useEffect((function(){var e=new Set;return a.forEach((function(t){var r=t.query,a=u(t,h),o=n.window.matchMedia(r);y(o,a);var i=function(){y(o,a)};return o.addListener(i),e.add({mediaQuery:o,handleChange:i}),function(){o.removeListener(i)}})),function(){e.forEach((function(e){var t=e.mediaQuery,n=e.handleChange;t.removeListener(n)})),e.clear()}}),[a,t,y,n.window]),p}(t),s=(0,r.Fg)();if(n){var m=Object.keys(s.breakpoints);return function(e,t,n){void 0===n&&(n=a.AV);var r=Object.keys(e).indexOf(t);if(-1!==r)return e[t];for(var o=n.indexOf(t);o>=0;){if(null!=e[n[o]]){r=o;break}o-=1}return-1!==r?e[n[r]]:void 0}((0,a.kJ)(e)?(0,a.sq)(Object.entries((0,a.Yq)(e,m)).map((function(e){return[e[0],e[1]]}))):e,n,m)}}var p=n(6541),y=n(3343),b=n(9766),g=[{heading:"Technical Due Diligence",blurb:["You're the Due Diligence Team looking at a software company.","You need help with the technical part and that's where we come in. We conduct a thorough, nowhere-to-hide technical evaluation.","Our reports are always as candid as they are actionable."]},{heading:"Architecture Deep Dive",blurb:["This is conducting Due Diligence on yourself.","Often, this comes about because you made or inherited a monolith and it's time to fix it.","We're honest. If your architecture is broken, we'll let you know. We'll be nice about it. But trust us.","We'll tell you how to fix it. And help if you want."]},{heading:"Technical Debt Remediation",blurb:["As seasoned, hands-on veterans of the software industry we know what makes things work. And of course what doesn't.","We've taken components a company deems too risky to touch and reworked them to be less scary.","We never boil the ocean when we refactor legacy code. Instead, we spend the time it takes up front to plan incrementally testable, deployable evolutions."]},{heading:"Cloud Adoption",blurb:["You may be just starting out migrating to the cloud. Or you may be in the process and you think it could be going better. Perhaps you did a forklift from your data center and are wonder what's up with your bill.","Wherever you are in your cloud journey, we've got you covered."]}],v=[{question:"Where's your architecture diagram?",answers:["Let me send you the PowerPoint.","Here it is, but it's very out of date."]},{question:"Can I see a Pull Request?",answers:["We don't use PRs.","No you can't."]},{question:"How do you plan sprints?",answers:["Not sure who has it right now, but there's a spreadsheet.","We invented our own version of Agile and have one long sprint really."]},{question:"What's your unit test coverage?",answers:["We keep a good list of manual tests and use that.","We can write code faster without them."]},{question:"What's your CI and CD?",answers:["What's that?","Bob. Bob does the builds."]},{question:"Why is your AWS bill breakdown different to the architecture?",answers:["We don't know."]}],w=[{splash:["Technical evaluation","Tailored for you","Nowhere to hide"]},{splash:["Proven expertise","Politely candid","Always actionable"]}];function E(e){return o.createElement(y.Z,null,o.createElement(p.gC,{spacing:2,align:"stretch"},o.createElement(p.X6,{size:"md"},e.heading),e.blurb.map((function(e,t){return o.createElement(p.xv,{key:t},e)}))))}function k(e){var t=e.question,n=e.answers;return o.createElement(y.Z,null,o.createElement(p.gC,{spacing:2,align:"stretch"},o.createElement(p.rj,{templateColumns:"repeat(12, 1fr)"},o.createElement(p.P4,null,"Q:"),o.createElement(p.P4,{colSpan:11},o.createElement(p.xv,{fontWeight:"1000"},t))),o.createElement(p.iz,null),n.map((function(e,t){return o.createElement(p.rj,{key:t,templateColumns:"repeat(12, 1fr)"},o.createElement(p.P4,null,"A:"),o.createElement(p.P4,{colSpan:11},e))}))))}function x(){return o.createElement(b.Z,null,g.map((function(e,t){return o.createElement(E,Object.assign({key:t},e))})))}function W(){return o.createElement(b.Z,null,v.map((function(e,t){return o.createElement(k,Object.assign({key:t},e))})))}var q=[{title:"How on Earth...",quote:"... did they get all that in two days of due diligence?",name:"B G",company:"CTO, Acquired Company"},{title:"We did completed the deal...",quote:"... but with our eyes open [based on the] risks surfaced during the thorough technical due diligence.",name:"A S",company:"Partner, Private Equity"},{title:"We did not have to boil the ocean",quote:"We were able to start migrating to the cloud component by component. We engaged [Handy Computer Bloke] from the start and came out the other side experts!",name:"J B",company:"Architect, Cloud Late Bloomer"}],C=function(e){e.name;var t=e.title;return o.createElement(p.Ug,null,o.createElement(p.xv,{fontSize:"sm"},t))};function O(e){return o.createElement(y.Z,null,o.createElement(p.gC,{spacing:4,align:"stretch"},o.createElement(C,{name:e.name,title:e.company}),o.createElement(p.iz,null),o.createElement(p.X6,{size:"md"},e.title),o.createElement(p.xv,null,e.quote)))}function A(){return o.createElement(b.Z,null,q.map((function(e,t){return o.createElement(O,Object.assign({key:t},e))})))}function j(e){return o.createElement(p.gC,{w:"100%",align:"stretch"},e.splash.map((function(e,t){return o.createElement(p.xv,{key:t,color:"white",fontWeight:"bold",fontSize:"6xl"},e)})))}function P(){return o.createElement(o.Fragment,null,o.createElement(p.kC,{h:"100vh",backgroundSize:"cover"},o.createElement(p.gC,{w:"full",align:"flex-start",px:f({base:10}),py:f({base:20}),bgGradient:"linear(to-r, blackAlpha.800, blackAlpha.100)"},o.createElement(p.MI,{columns:{base:1},spacing:"36"},w.map((function(e,t){return o.createElement(j,Object.assign({key:t},e))}))))))}var S=function(){return o.createElement(p.gC,{spacing:10,maxWidth:"100%",align:"stretch"},o.createElement(P,null),o.createElement(p.iz,null),o.createElement(p.Kq,{as:p.xu,textAlign:"center",spacing:2},o.createElement(p.xv,{fontSize:"2xl"},"We build on our core competency of Technical Due Diligence."),o.createElement(p.xv,{fontSize:"2xl"},"We work quickly and efficiently."),o.createElement(p.xv,{fontSize:"2xl"},"We have strong opinions, but are not dogmatic or arbitrary.")),o.createElement(p.iz,null),o.createElement(p.X6,null,"Services"),o.createElement(x,null),o.createElement(p.X6,null,"What people say"),o.createElement(A,null),o.createElement(p.gC,{align:"stretch"},o.createElement(p.X6,null,"Revealing Questions and Awkward Answers"),o.createElement(p.xv,null,"From the archives...")),o.createElement(W,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-46f4bc98819618d03e7b.js.map