System.register(["./index-legacy-47a04b75.js"],(function(e,t){"use strict";var o,n;return{setters:[e=>{o=e.i,n=e.N}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
const t=e=>document.querySelector(`${e}.ion-cloned-element`),r=e=>e.shadowRoot||e,a=e=>{const t="ION-TABS"===e.tagName?e:e.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=t){const e=t.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=e?e.querySelector(o):null}return e.querySelector(o)},l=(e,t)=>{const o="ION-TABS"===e.tagName?e:e.querySelector("ion-tabs");let n=[];if(null!=o){const e=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=e&&(n=e.querySelectorAll("ion-buttons"))}else n=e.querySelectorAll("ion-buttons");for(const r of n){const e=r.closest("ion-header"),o=e&&!e.classList.contains("header-collapse-condense-inactive"),n=r.querySelector("ion-back-button"),a=r.classList.contains("buttons-collapse"),l="start"===r.slot||""===r.slot;if(null!==n&&l&&(a&&o&&t||!a))return n}return null},s=(e,n,a,l,s,i)=>{const c=n?`calc(100% - ${i.right+4}px)`:i.left-4+"px",d=n?"7px":"-7px",f=n?"-4px":"4px",m=n?"-4px":"4px",p=n?"right":"left",y=n?"left":"right",u=[{offset:0,opacity:0,transform:`translate3d(${d}, ${s.top-40}px, 0) scale(2.1)`},{offset:1,opacity:1,transform:`translate3d(${f}, ${i.top-46}px, 0) scale(1)`}],b=[{offset:0,opacity:1,transform:`translate3d(${f}, ${i.top-46}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${d}, ${s.top-40}px, 0) scale(2.1)`}],S=a?b:u,$=[{offset:0,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${m}, ${i.top-46}px, 0) scale(1)`}],g=[{offset:0,opacity:1,transform:`translate3d(${m}, ${i.top-46}px, 0) scale(1)`},{offset:.2,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`}],T=a?g:$,x=o(),h=o(),q=t("ion-back-button"),X=r(q).querySelector(".button-text"),A=r(q).querySelector("ion-icon");q.text=l.text,q.mode=l.mode,q.icon=l.icon,q.color=l.color,q.disabled=l.disabled,q.style.setProperty("display","block"),q.style.setProperty("position","fixed"),h.addElement(A),x.addElement(X),x.beforeStyles({"transform-origin":`${p} center`}).beforeAddWrite((()=>{l.style.setProperty("display","none"),q.style.setProperty(p,c)})).afterAddWrite((()=>{l.style.setProperty("display",""),q.style.setProperty("display","none"),q.style.removeProperty(p)})).keyframes(S),h.beforeStyles({"transform-origin":`${y} center`}).keyframes(T),e.addAnimation([x,h])},i=(e,n,r,a,l,s)=>{const i=n?`calc(100% - ${l.right}px)`:`${l.left}px`,c=n?"-18px":"18px",d=n?"right":"left",f=[{offset:0,opacity:0,transform:`translate3d(${c}, ${s.top-4}px, 0) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0, ${l.top-2}px, 0) scale(1)`}],m=[{offset:0,opacity:.99,transform:`translate3d(0, ${l.top-2}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${c}, ${s.top-4}px, 0) scale(0.5)`}],p=r?f:m,y=t("ion-title"),u=o();y.innerText=a.innerText,y.size=a.size,y.color=a.color,u.addElement(y),u.beforeStyles({"transform-origin":`${d} center`,height:"46px",display:"",position:"relative",[d]:i}).beforeAddWrite((()=>{a.style.setProperty("display","none")})).afterAddWrite((()=>{a.style.setProperty("display",""),y.style.setProperty("display","none")})).keyframes(p),e.addAnimation(u)};e({shadow:r,iosTransitionAnimation:(e,t)=>{var c;try{const d="cubic-bezier(0.32,0.72,0,1)",f="opacity",m="transform",p="0%",y="rtl"===e.ownerDocument.dir,u=y?"-99.5%":"99.5%",b=y?"33%":"-33%",S=t.enteringEl,$=t.leavingEl,g="back"===t.direction,T=S.querySelector(":scope > ion-content"),x=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),h=S.querySelectorAll(":scope > ion-header > ion-toolbar"),q=o(),X=o();if(q.addElement(S).duration((null!==(c=t.duration)&&void 0!==c?c:0)||540).easing(t.easing||d).fill("both").beforeRemoveClass("ion-page-invisible"),$&&null!=e){const t=o();t.addElement(e),q.addAnimation(t)}if(T||0!==h.length||0!==x.length?(X.addElement(T),X.addElement(x)):X.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),q.addAnimation(X),g?X.beforeClearStyles([f]).fromTo("transform",`translateX(${b})`,`translateX(${p})`).fromTo(f,.8,1):X.beforeClearStyles([f]).fromTo("transform",`translateX(${u})`,`translateX(${p})`),T){const e=r(T).querySelector(".transition-effect");if(e){const t=e.querySelector(".transition-cover"),n=e.querySelector(".transition-shadow"),r=o(),a=o(),l=o();r.addElement(e).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),a.addElement(t).beforeClearStyles([f]).fromTo(f,0,.1),l.addElement(n).beforeClearStyles([f]).fromTo(f,.03,.7),r.addAnimation([a,l]),X.addAnimation([r])}}const A=S.querySelector("ion-header.header-collapse-condense"),{forward:E,backward:v}=((e,t,o,n,r)=>{const c=l(n,o),d=a(r),f=a(n),m=l(r,o),p=null!==c&&null!==d&&!o,y=null!==f&&null!==m&&o;if(p){const n=d.getBoundingClientRect(),r=c.getBoundingClientRect();i(e,t,o,d,n,r),s(e,t,o,c,n,r)}else if(y){const n=f.getBoundingClientRect(),r=m.getBoundingClientRect();i(e,t,o,f,n,r),s(e,t,o,m,n,r)}return{forward:p,backward:y}})(q,y,g,S,$);if(h.forEach((e=>{const t=o();t.addElement(e),q.addAnimation(t);const n=o();n.addElement(e.querySelector("ion-title"));const a=o(),l=Array.from(e.querySelectorAll("ion-buttons,[menuToggle]")),s=e.closest("ion-header"),i=null==s?void 0:s.classList.contains("header-collapse-condense-inactive");let c;c=g?l.filter((e=>{const t=e.classList.contains("buttons-collapse");return t&&!i||!t})):l.filter((e=>!e.classList.contains("buttons-collapse"))),a.addElement(c);const d=o();d.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const m=o();m.addElement(r(e).querySelector(".toolbar-background"));const S=o(),$=e.querySelector("ion-back-button");if($&&S.addElement($),t.addAnimation([n,a,d,m,S]),a.fromTo(f,.01,1),d.fromTo(f,.01,1),g)i||n.fromTo("transform",`translateX(${b})`,`translateX(${p})`).fromTo(f,.01,1),d.fromTo("transform",`translateX(${b})`,`translateX(${p})`),S.fromTo(f,.01,1);else if(A||n.fromTo("transform",`translateX(${u})`,`translateX(${p})`).fromTo(f,.01,1),d.fromTo("transform",`translateX(${u})`,`translateX(${p})`),m.beforeClearStyles([f,"transform"]),(null==s?void 0:s.translucent)?m.fromTo("transform",y?"translateX(-100%)":"translateX(100%)","translateX(0px)"):m.fromTo(f,.01,"var(--opacity)"),E||S.fromTo(f,.01,1),$&&!E){const e=o();e.addElement(r($).querySelector(".button-text")).fromTo("transform",y?"translateX(-100px)":"translateX(100px)","translateX(0px)"),t.addAnimation(e)}})),$){const e=o(),t=$.querySelector(":scope > ion-content"),a=$.querySelectorAll(":scope > ion-header > ion-toolbar"),l=$.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(t||0!==a.length||0!==l.length?(e.addElement(t),e.addElement(l)):e.addElement($.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),q.addAnimation(e),g){e.beforeClearStyles([f]).fromTo("transform",`translateX(${p})`,y?"translateX(-100%)":"translateX(100%)");const t=n($);q.afterAddWrite((()=>{"normal"===q.getDirection()&&t.style.setProperty("display","none")}))}else e.fromTo("transform",`translateX(${p})`,`translateX(${b})`).fromTo(f,1,.8);if(t){const n=r(t).querySelector(".transition-effect");if(n){const t=n.querySelector(".transition-cover"),r=n.querySelector(".transition-shadow"),a=o(),l=o(),s=o();a.addElement(n).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),l.addElement(t).beforeClearStyles([f]).fromTo(f,.1,0),s.addElement(r).beforeClearStyles([f]).fromTo(f,.7,.03),a.addAnimation([l,s]),e.addAnimation([a])}}a.forEach((e=>{const t=o();t.addElement(e);const n=o();n.addElement(e.querySelector("ion-title"));const a=o(),l=e.querySelectorAll("ion-buttons,[menuToggle]"),s=e.closest("ion-header"),i=null==s?void 0:s.classList.contains("header-collapse-condense-inactive"),c=Array.from(l).filter((e=>{const t=e.classList.contains("buttons-collapse");return t&&!i||!t}));a.addElement(c);const d=o(),u=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");u.length>0&&d.addElement(u);const S=o();S.addElement(r(e).querySelector(".toolbar-background"));const $=o(),T=e.querySelector("ion-back-button");if(T&&$.addElement(T),t.addAnimation([n,a,d,$,S]),q.addAnimation(t),$.fromTo(f,.99,0),a.fromTo(f,.99,0),d.fromTo(f,.99,0),g){if(i||n.fromTo("transform",`translateX(${p})`,y?"translateX(-100%)":"translateX(100%)").fromTo(f,.99,0),d.fromTo("transform",`translateX(${p})`,y?"translateX(-100%)":"translateX(100%)"),S.beforeClearStyles([f,"transform"]),(null==s?void 0:s.translucent)?S.fromTo("transform","translateX(0px)",y?"translateX(-100%)":"translateX(100%)"):S.fromTo(f,"var(--opacity)",0),T&&!v){const e=o();e.addElement(r(T).querySelector(".button-text")).fromTo("transform",`translateX(${p})`,`translateX(${(y?-124:124)+"px"})`),t.addAnimation(e)}}else i||n.fromTo("transform",`translateX(${p})`,`translateX(${b})`).fromTo(f,.99,0).afterClearStyles([m,f]),d.fromTo("transform",`translateX(${p})`,`translateX(${b})`).afterClearStyles([m,f]),$.afterClearStyles([f]),n.afterClearStyles([f]),a.afterClearStyles([f])}))}return q}catch(d){throw d}}})}}}));
