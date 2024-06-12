import{e as D,D as M}from"./index-8af18018.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const m=e=>e&&e.dir!==""?e.dir.toLowerCase()==="rtl":(document==null?void 0:document.dir.toLowerCase())==="rtl";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const W=(e,h,w,X,v)=>{const i=e.ownerDocument.defaultView;let o=m(e);const y=t=>{const{startX:n}=t;return o?n>=i.innerWidth-50:n<=50},c=t=>o?-t.deltaX:t.deltaX,f=t=>o?-t.velocityX:t.velocityX;return D({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>(o=m(e),y(t)&&h()),onStart:w,onMove:t=>{const n=c(t)/i.innerWidth;X(n)},onEnd:t=>{const n=c(t),s=i.innerWidth,r=n/s,a=f(t),p=s/2,d=a>=0&&(a>.2||n>p),l=(d?1-r:r)*s;let u=0;if(l>5){const g=l/Math.abs(a);u=Math.min(g,540)}v(d,r<=0?.01:M(0,r,.9999),u)}})};export{W as createSwipeBackGesture};
