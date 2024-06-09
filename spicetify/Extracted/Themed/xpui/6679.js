"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6679],{96679:(e,t,n)=>{n.r(t),n.d(t,{ShowSponsorsPreview:()=>f,default:()=>p});var r=n(81226),o=(n(60905),n(94238),n(63619),n(60850),n(41679),n(81443),n(74457),n(6844),n(77458),n(69645),n(49932),n(36490),n(93902),n(7410),n(50247),n(88190),n(4207),n(30758)),s=n(61022),a=n(4456),c=n(86070);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=(0,o.lazy)((function(){return Promise.all([n.e(4151),n.e(1222)]).then(n.bind(n,41222))}));function f(e){var t,n=(0,s.zy)(),r=(0,a.$)(i(i({},e),{},{showSponsorsData:null===(t=n.state)||void 0===t?void 0:t.showSponsorsData})).showSponsorsData;return null!=r&&r.length?(0,c.jsx)(o.Suspense,{fallback:!0,children:(0,c.jsx)(l,i(i({},e),{},{showSponsorsData:r}))}):null}const p=f},7521:(e,t,n)=>{n.d(t,{F:()=>l,P:()=>f});var r=n(95514),o=n(26017),s=n(16247),a=n.n(s),c=(n(38858),n(62172),n(60850),n(69645),n(49932),n(36490),n(4207),n(30758)),u=n(78370),i=n(12169),l=420;function f(e){var t=e.episodeBase62Id,s=e.getEpisodeSponsors,f=e.fetchedEpisodeSponsorsData,p=void 0===f?[]:f,d=e.version,v=(0,c.useState)(p),b=(0,o.A)(v,2),h=b[0],w=b[1],k=(0,c.useCallback)((0,r.A)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}throw new Error("episodeBase62Id is required to fetch episode sponsors");case 3:if(null==s){e.next=7;break}e.t0=s,e.next=10;break;case 7:return e.next=9,Promise.resolve().then(n.bind(n,53297));case 9:e.t0=e.sent.getEpisodeSponsors;case 10:return r=e.t0,e.t1=w,e.next=14,r(t,{version:d});case 14:e.t2=e.sent,(0,e.t1)(e.t2),e.next=21;break;case 18:e.prev=18,e.t3=e.catch(0),w([]);case 21:case"end":return e.stop()}}),e,null,[[0,18]])}))),[t,s,d]),S=(0,u.YQ)(k,l);(0,c.useEffect)((function(){p.length||S()}),[S,p.length]);var g=(0,c.useCallback)((function(){return{effectCallback:S}}),[S]);return(0,i.L)(g),{fetchedEpisodeSponsorsData:h}}},4456:(e,t,n)=>{n.d(t,{$:()=>f});var r=n(95514),o=n(26017),s=n(16247),a=n.n(s),c=(n(38858),n(62172),n(60850),n(69645),n(49932),n(36490),n(4207),n(30758)),u=n(78370),i=n(7521),l=n(12169);function f(e){var t=e.showId,s=e.showSponsorsData,f=void 0===s?[]:s,p=e.getShowSponsors,d=(0,c.useState)(f),v=(0,o.A)(d,2),b=v[0],h=v[1],w=(0,c.useCallback)(function(){var e=(0,r.A)(a().mark((function e(r){var o,s,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=function(){r.mounted&&h.apply(void 0,arguments)},e.prev=1,t){e.next=4;break}throw new Error("showId is required to fetch show sponsors");case 4:if(null==p){e.next=8;break}e.t0=p,e.next=11;break;case 8:return e.next=10,Promise.resolve().then(n.bind(n,34852));case 10:e.t0=e.sent.getShowSponsors;case 11:return s=e.t0,e.next=14,s(t);case 14:c=e.sent,o(c),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(1),o([]);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),[t,p]),k=(0,u.YQ)(w,i.F);(0,c.useEffect)((function(){var e={mounted:!0};return f.length||k(e),function(){e.mounted=!1}}),[k,f.length]);var S=(0,c.useCallback)((function(){var e={mounted:!0};return{effectCallback:function(){k(e)},destructor:function(){e.mounted=!1}}}),[k]);return(0,l.L)(S),{showSponsorsData:b}}},12169:(e,t,n)=>{n.d(t,{L:()=>i});n(177);var r=n(30758),o=n(1409),s=n(19919),a=n(69852),c=n(84747),u=n(87703);function i(e){var t=(0,o.NC)(s.CV8),n=(0,c.o)((function(e){var t,n,r=null!==(t=null==e?void 0:e.item)&&void 0!==t?t:void 0;return(0,u.N)(r)&&r.isPodcastAd&&null!==(n=r.id)&&void 0!==n?n:void 0})),i=(0,a.Z)(n);(0,r.useEffect)((function(){var r=e(),o=r.effectCallback,s=r.destructor;return n!==i&&Boolean(n)&&setTimeout(o,t),s}),[e,n,i,t])}}}]);
//# sourceMappingURL=6679.js.map