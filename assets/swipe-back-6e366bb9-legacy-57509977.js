System.register(["./index-legacy-485a44b9.js"],(function(t,e){"use strict";var n,r;return{setters:[t=>{n=t.e,r=t.D}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
const e=t=>t&&""!==t.dir?"rtl"===t.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */;t("createSwipeBackGesture",((t,o,i,s,c)=>{const a=t.ownerDocument.defaultView;let d=e(t);const u=t=>d?-t.deltaX:t.deltaX;return n({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:n=>(d=e(t),(t=>{const{startX:e}=t;return d?e>=a.innerWidth-50:e<=50})(n)&&o()),onStart:i,onMove:t=>{const e=u(t)/a.innerWidth;s(e)},onEnd:t=>{const e=u(t),n=a.innerWidth,o=e/n,i=(t=>d?-t.velocityX:t.velocityX)(t),s=i>=0&&(i>.2||e>n/2),l=(s?1-o:o)*n;let h=0;if(l>5){const t=l/Math.abs(i);h=Math.min(t,540)}c(s,o<=0?.01:r(0,o,.9999),h)}})}))}}}));
