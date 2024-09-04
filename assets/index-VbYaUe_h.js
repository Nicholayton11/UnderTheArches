import{i as oe,p as y,g as M,c,a as l,F as $,u as ke,b as yt,d as _t,e as b,I as N,m as p,f as S,h as D,j as k,r as ve,k as U,l as bt,n as Be,t as O,o as L,q as Ct,T as pt,s as Re,S as kt,v as St,w as Lt,x as me,y as ee,z as wt,A as W,B as te,C as Se,D as Vt,E as xt,G as It,H as Le,J as Tt,K as Et,L as Pt,M as we,N as ze,O as je,P as ne,Q as ge,R as Oe,U as he,V as He,W as At,X as ye,Y as Fe,Z as $t,_ as Nt,$ as Bt,a0 as Rt,a1 as G,a2 as zt,a3 as _,a4 as _e,a5 as jt,a6 as g,a7 as K,a8 as Ot,a9 as Ht,aa as Ft,ab as Mt,ac as Dt,ad as A,ae as Z,af as Ut,ag as Xt}from"./index-BJVudUMn.js";const Yt=["top","bottom"],qt=["start","end","left","right"];function Wt(e,n){let[t,a]=e.split(" ");return a||(a=oe(Yt,t)?"start":oe(qt,t)?"top":"center"),{side:Ve(t,n),align:Ve(a,n)}}function Ve(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}const Gt=[null,"default","comfortable","compact"],be=y({density:{type:String,default:"default",validator:e=>Gt.includes(e)}},"density");function Me(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{densityClasses:c(()=>`${n}--density-${e.density}`)}}const Kt=["elevated","flat","tonal","outlined","text","plain"];function De(e,n){return l($,null,[e&&l("span",{key:"overlay",class:`${n}__overlay`},null),l("span",{key:"underlay",class:`${n}__underlay`},null)])}const Ue=y({color:String,variant:{type:String,default:"elevated",validator:e=>Kt.includes(e)}},"variant");function Xe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();const t=c(()=>{const{variant:i}=ke(e);return`${n}--variant-${i}`}),{colorClasses:a,colorStyles:s}=yt(c(()=>{const{variant:i,color:o}=ke(e);return{[["elevated","flat"].includes(i)?"background":"text"]:o}}));return{colorClasses:a,colorStyles:s,variantClasses:t}}const Zt=["x-small","small","default","large","x-large"],Ye=y({size:{type:[String,Number],default:"default"}},"size");function qe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return _t(()=>{let t,a;return oe(Zt,e.size)?t=`${n}--size-${e.size}`:e.size&&(a={width:b(e.size),height:b(e.size)}),{sizeClasses:t,sizeStyles:a}})}const Jt=y({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:N,...p(),...Ye(),...S({tag:"i"}),...D()},"VIcon"),J=k()({name:"VIcon",props:Jt(),setup(e,n){let{attrs:t,slots:a}=n;const s=ve(),{themeClasses:i}=U(e),{iconData:o}=bt(c(()=>s.value||e.icon)),{sizeClasses:r}=qe(e),{textColorClasses:u,textColorStyles:f}=Be(O(e,"color"));return L(()=>{var h,m;const d=(h=a.default)==null?void 0:h.call(a);d&&(s.value=(m=Ct(d).filter(w=>w.type===pt&&w.children&&typeof w.children=="string")[0])==null?void 0:m.children);const v=!!(t.onClick||t.onClickOnce);return l(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",i.value,r.value,u.value,{"v-icon--clickable":v,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:b(e.size),height:b(e.size),width:b(e.size)},f.value,e.style],role:v?"button":void 0,"aria-hidden":!v,tabindex:v?e.disabled?-1:0:void 0},{default:()=>[d]})}),{}}});function Qt(e,n){const t=ve(),a=Re(!1);if(kt){const s=new IntersectionObserver(i=>{a.value=!!i.find(o=>o.isIntersecting)},n);St(()=>{s.disconnect()}),Lt(t,(i,o)=>{o&&(s.unobserve(o),a.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:t,isIntersecting:a}}const xe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},We=y({location:String},"location");function Ge(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=me();return{locationStyles:c(()=>{if(!e.location)return{};const{side:i,align:o}=Wt(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function r(f){return t?t(f):0}const u={};return i!=="center"&&(n?u[xe[i]]=`calc(100% - ${r(i)}px)`:u[i]=0),o!=="center"?n?u[xe[o]]=`calc(100% - ${r(o)}px)`:u[o]=0:(i==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),u})}}const en=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...p(),...We({location:"top"}),...ee(),...S(),...D()},"VProgressLinear"),tn=k()({name:"VProgressLinear",props:en(),emits:{"update:modelValue":e=>!0},setup(e,n){var Y;let{slots:t}=n;const a=wt(e,"modelValue"),{isRtl:s,rtlClasses:i}=me(),{themeClasses:o}=U(e),{locationStyles:r}=Ge(e),{textColorClasses:u,textColorStyles:f}=Be(e,"color"),{backgroundColorClasses:d,backgroundColorStyles:v}=W(c(()=>e.bgColor||e.color)),{backgroundColorClasses:h,backgroundColorStyles:m}=W(c(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:w,backgroundColorStyles:X}=W(e,"color"),{roundedClasses:I}=te(e),{intersectionRef:B,isIntersecting:T}=Qt(),R=c(()=>parseFloat(e.max)),V=c(()=>parseFloat(e.height)),z=c(()=>Se(parseFloat(e.bufferValue)/R.value*100,0,100)),j=c(()=>Se(parseFloat(a.value)/R.value*100,0,100)),E=c(()=>s.value!==e.reverse),ae=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),P=Vt&&((Y=window.matchMedia)==null?void 0:Y.call(window,"(forced-colors: active)").matches);function se(x){if(!B.value)return;const{left:q,right:gt,width:le}=B.value.getBoundingClientRect(),ht=E.value?le-x.clientX+(gt-le):x.clientX-q;a.value=Math.round(ht/le*R.value)}return L(()=>l(e.tag,{ref:B,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&T.value,"v-progress-linear--reverse":E.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},I.value,o.value,i.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?b(V.value):0,"--v-progress-linear-height":b(V.value),...e.absolute?r.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:j.value,onClick:e.clickable&&se},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...f.value,[E.value?"left":"right"]:b(-V.value),borderTop:`${b(V.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${b(V.value/4)})`,width:b(100-z.value,"%"),"--v-progress-linear-stream-to":b(V.value*(E.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",P?void 0:d.value],style:[v.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),l("div",{class:["v-progress-linear__buffer",P?void 0:h.value],style:[m.value,{opacity:parseFloat(e.bufferOpacity),width:b(z.value,"%")}]},null),l(xt,{name:ae.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(x=>l("div",{key:x,class:["v-progress-linear__indeterminate",x,P?void 0:w.value],style:X.value},null))]):l("div",{class:["v-progress-linear__determinate",P?void 0:w.value],style:[X.value,{width:b(j.value,"%")}]},null)]}),t.default&&l("div",{class:"v-progress-linear__content"},[t.default({value:j.value,buffer:z.value})])]})),{}}}),nn=y({loading:[Boolean,String]},"loader");function an(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{loaderClasses:c(()=>({[`${n}--loading`]:e.loading}))}}function sn(e,n){var a;let{slots:t}=n;return l("div",{class:`${e.name}__loader`},[((a=t.default)==null?void 0:a.call(t,{color:e.color,isActive:e.active}))||l(tn,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const ln=["static","relative","fixed","absolute","sticky"],on=y({position:{type:String,validator:e=>ln.includes(e)}},"position");function rn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{positionClasses:c(()=>e.position?`${n}--${e.position}`:void 0)}}function un(){const e=Et("useRoute");return c(()=>{var n;return(n=e==null?void 0:e.proxy)==null?void 0:n.$route})}function cn(e,n){var f,d;const t=It("RouterLink"),a=c(()=>!!(e.href||e.to)),s=c(()=>(a==null?void 0:a.value)||Le(n,"click")||Le(e,"click"));if(typeof t=="string"||!("useLink"in t))return{isLink:a,isClickable:s,href:O(e,"href")};const i=c(()=>({...e,to:O(()=>e.to||"")})),o=t.useLink(i.value),r=c(()=>e.to?o:void 0),u=un();return{isLink:a,isClickable:s,route:(f=r.value)==null?void 0:f.route,navigate:(d=r.value)==null?void 0:d.navigate,isActive:c(()=>{var v,h,m;return r.value?e.exact?u.value?((m=r.value.isExactActive)==null?void 0:m.value)&&Tt(r.value.route.value.query,u.value.query):((h=r.value.isExactActive)==null?void 0:h.value)??!1:((v=r.value.isActive)==null?void 0:v.value)??!1:!1}),href:c(()=>{var v;return e.to?(v=r.value)==null?void 0:v.route.value.href:e.href})}}const dn=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router"),re=Symbol("rippleStop"),fn=80;function Ie(e,n){e.style.transform=n,e.style.webkitTransform=n}function ue(e){return e.constructor.name==="TouchEvent"}function Ke(e){return e.constructor.name==="KeyboardEvent"}const vn=function(e,n){var v;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,s=0;if(!Ke(e)){const h=n.getBoundingClientRect(),m=ue(e)?e.touches[e.touches.length-1]:e;a=m.clientX-h.left,s=m.clientY-h.top}let i=0,o=.3;(v=n._ripple)!=null&&v.circle?(o=.15,i=n.clientWidth/2,i=t.center?i:i+Math.sqrt((a-i)**2+(s-i)**2)/4):i=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const r=`${(n.clientWidth-i*2)/2}px`,u=`${(n.clientHeight-i*2)/2}px`,f=t.center?r:`${a-i}px`,d=t.center?u:`${s-i}px`;return{radius:i,scale:o,x:f,y:d,centerX:r,centerY:u}},Q={show(e,n){var m;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((m=n==null?void 0:n._ripple)!=null&&m.enabled))return;const a=document.createElement("span"),s=document.createElement("span");a.appendChild(s),a.className="v-ripple__container",t.class&&(a.className+=` ${t.class}`);const{radius:i,scale:o,x:r,y:u,centerX:f,centerY:d}=vn(e,n,t),v=`${i*2}px`;s.className="v-ripple__animation",s.style.width=v,s.style.height=v,n.appendChild(a);const h=window.getComputedStyle(n);h&&h.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Ie(s,`translate(${r}, ${u}) scale3d(${o},${o},${o})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Ie(s,`translate(${f}, ${d}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const t=n[n.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const a=performance.now()-Number(t.dataset.activated),s=Math.max(250-a,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=t.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(t.parentNode)},300)},s)}};function Ze(e){return typeof e>"u"||!!e}function H(e){const n={},t=e.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||e[re])){if(e[re]=!0,ue(e))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(n.center=t._ripple.centered||Ke(e),t._ripple.class&&(n.class=t._ripple.class),ue(e)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{Q.show(e,t,n)},t._ripple.showTimer=window.setTimeout(()=>{var a;(a=t==null?void 0:t._ripple)!=null&&a.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},fn)}else Q.show(e,t,n)}}function Te(e){e[re]=!0}function C(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{C(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),Q.hide(n)}}function Je(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let F=!1;function Qe(e){!F&&(e.keyCode===we.enter||e.keyCode===we.space)&&(F=!0,H(e))}function et(e){F=!1,C(e)}function tt(e){F&&(F=!1,C(e))}function nt(e,n,t){const{value:a,modifiers:s}=n,i=Ze(a);if(i||Q.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,Pt(a)&&a.class&&(e._ripple.class=a.class),i&&!t){if(s.stop){e.addEventListener("touchstart",Te,{passive:!0}),e.addEventListener("mousedown",Te);return}e.addEventListener("touchstart",H,{passive:!0}),e.addEventListener("touchend",C,{passive:!0}),e.addEventListener("touchmove",Je,{passive:!0}),e.addEventListener("touchcancel",C),e.addEventListener("mousedown",H),e.addEventListener("mouseup",C),e.addEventListener("mouseleave",C),e.addEventListener("keydown",Qe),e.addEventListener("keyup",et),e.addEventListener("blur",tt),e.addEventListener("dragstart",C,{passive:!0})}else!i&&t&&at(e)}function at(e){e.removeEventListener("mousedown",H),e.removeEventListener("touchstart",H),e.removeEventListener("touchend",C),e.removeEventListener("touchmove",Je),e.removeEventListener("touchcancel",C),e.removeEventListener("mouseup",C),e.removeEventListener("mouseleave",C),e.removeEventListener("keydown",Qe),e.removeEventListener("keyup",et),e.removeEventListener("dragstart",C),e.removeEventListener("blur",tt)}function mn(e,n){nt(e,n,!1)}function gn(e){delete e._ripple,at(e)}function hn(e,n){if(n.value===n.oldValue)return;const t=Ze(n.oldValue);nt(e,n,t)}const yn={mounted:mn,unmounted:gn,updated:hn},_n=y({fluid:{type:Boolean,default:!1},...p(),...ze(),...S()},"VContainer"),Ee=k()({name:"VContainer",props:_n(),setup(e,n){let{slots:t}=n;const{rtlClasses:a}=me(),{dimensionStyles:s}=je(e);return L(()=>l(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:[s.value,e.style]},t)),{}}}),st=ne.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),lt=ne.reduce((e,n)=>{const t="offset"+ge(n);return e[t]={type:[String,Number],default:null},e},{}),it=ne.reduce((e,n)=>{const t="order"+ge(n);return e[t]={type:[String,Number],default:null},e},{}),Pe={col:Object.keys(st),offset:Object.keys(lt),order:Object.keys(it)};function bn(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const s=n.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const Cn=["auto","start","end","center","baseline","stretch"],pn=y({cols:{type:[Boolean,String,Number],default:!1},...st,offset:{type:[String,Number],default:null},...lt,order:{type:[String,Number],default:null},...it,alignSelf:{type:String,default:null,validator:e=>Cn.includes(e)},...p(),...S()},"VCol"),ie=k()({name:"VCol",props:pn(),setup(e,n){let{slots:t}=n;const a=c(()=>{const s=[];let i;for(i in Pe)Pe[i].forEach(r=>{const u=e[r],f=bn(i,r,u);f&&s.push(f)});const o=s.some(r=>r.startsWith("v-col-"));return s.push({"v-col":!o||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return Oe(e.tag,{class:[a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),Ce=["start","end","center"],ot=["space-between","space-around","space-evenly"];function pe(e,n){return ne.reduce((t,a)=>{const s=e+ge(a);return t[s]=n(),t},{})}const kn=[...Ce,"baseline","stretch"],rt=e=>kn.includes(e),ut=pe("align",()=>({type:String,default:null,validator:rt})),Sn=[...Ce,...ot],ct=e=>Sn.includes(e),dt=pe("justify",()=>({type:String,default:null,validator:ct})),Ln=[...Ce,...ot,"stretch"],ft=e=>Ln.includes(e),vt=pe("alignContent",()=>({type:String,default:null,validator:ft})),Ae={align:Object.keys(ut),justify:Object.keys(dt),alignContent:Object.keys(vt)},wn={align:"align",justify:"justify",alignContent:"align-content"};function Vn(e,n,t){let a=wn[e];if(t!=null){if(n){const s=n.replace(e,"");a+=`-${s}`}return a+=`-${t}`,a.toLowerCase()}}const xn=y({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:rt},...ut,justify:{type:String,default:null,validator:ct},...dt,alignContent:{type:String,default:null,validator:ft},...vt,...p(),...S()},"VRow"),In=k()({name:"VRow",props:xn(),setup(e,n){let{slots:t}=n;const a=c(()=>{const s=[];let i;for(i in Ae)Ae[i].forEach(o=>{const r=e[o],u=Vn(i,o,r);u&&s.push(u)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return Oe(e.tag,{class:["v-row",a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),Tn=(e,n)=>{const t=e.__vccOpts||e;for(const[a,s]of n)t[a]=s;return t},En=y({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...he(),...p(),...He(),...At(),...ee(),...S({tag:"footer"}),...D()},"VFooter"),Pn=k()({name:"VFooter",props:En(),setup(e,n){let{slots:t}=n;const a=ve(),{themeClasses:s}=U(e),{backgroundColorClasses:i,backgroundColorStyles:o}=W(O(e,"color")),{borderClasses:r}=ye(e),{elevationClasses:u}=Fe(e),{roundedClasses:f}=te(e),d=Re(32),{resizeRef:v}=$t(m=>{m.length&&(d.value=m[0].target.clientHeight)}),h=c(()=>e.height==="auto"?d.value:parseInt(e.height,10));return Nt(()=>e.app,()=>{const m=Bt({id:e.name,order:c(()=>parseInt(e.order,10)),position:c(()=>"bottom"),layoutSize:h,elementSize:c(()=>e.height==="auto"?void 0:h.value),active:c(()=>e.app),absolute:O(e,"absolute")});Rt(()=>{a.value=m.layoutItemStyles.value})}),L(()=>l(e.tag,{ref:v,class:["v-footer",s.value,i.value,r.value,u.value,f.value,e.class],style:[o.value,e.app?a.value:{height:b(e.height)},e.style]},t)),{}}}),mt=e=>(Ht("data-v-40134937"),e=e(),Ft(),e),An=["href","title"],$n={class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},Nn=mt(()=>g("span",{class:"d-none d-sm-inline-block"},"Vuetify, LLC",-1)),Bn=mt(()=>g("a",{class:"text-decoration-none on-surface",href:"https://vuetifyjs.com/about/licensing/",rel:"noopener noreferrer",target:"_blank"}," MIT License ",-1)),Rn={__name:"AppFooter",setup(e){const n=[{title:"Vuetify Documentation",icon:"$vuetify",href:"https://vuetifyjs.com/"},{title:"Vuetify Support",icon:"mdi-shield-star-outline",href:"https://support.vuetifyjs.com/"},{title:"Vuetify X",icon:["M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z"],href:"https://x.com/vuetifyjs"},{title:"Vuetify GitHub",icon:"mdi-github",href:"https://github.com/vuetifyjs/vuetify"},{title:"Vuetify Discord",icon:["M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z"],href:"https://community.vuetifyjs.com/"},{title:"Vuetify Reddit",icon:"mdi-reddit",href:"https://reddit.com/r/vuetifyjs"}];return(t,a)=>(G(),zt(Pn,{height:"40",app:""},{default:_(()=>[(G(),_e($,null,jt(n,s=>g("a",{key:s.title,href:s.href,title:s.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[l(J,{icon:s.icon,size:s.icon==="$vuetify"?24:16},null,8,["icon","size"])],8,An)),64)),g("div",$n,[K(" © 2016-"+Ot(new Date().getFullYear())+" ",1),Nn,K(" — "),Bn])]),_:1}))}},zn=Tn(Rn,[["__scopeId","data-v-40134937"]]),jn="/assets/Under_The_Arches_Logo-JguqHD1v.svg",On="/assets/10ft_Container-BTdL3U8K.png",Hn="/assets/20ft_Container-B0K2Pdro.png",Fn="/assets/UTA_Admin-CejO4x07.png",ce=k()({name:"VCardActions",props:p(),setup(e,n){let{slots:t}=n;return Mt({VBtn:{slim:!0,variant:"text"}}),L(()=>{var a;return l("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Mn=y({opacity:[Number,String],...p(),...S()},"VCardSubtitle"),Dn=k()({name:"VCardSubtitle",props:Mn(),setup(e,n){let{slots:t}=n;return L(()=>l(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),de=Dt("v-card-title"),Un=y({start:Boolean,end:Boolean,icon:N,image:String,text:String,...he(),...p(),...be(),...ee(),...Ye(),...S(),...D(),...Ue({variant:"flat"})},"VAvatar"),$e=k()({name:"VAvatar",props:Un(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=U(e),{borderClasses:s}=ye(e),{colorClasses:i,colorStyles:o,variantClasses:r}=Xe(e),{densityClasses:u}=Me(e),{roundedClasses:f}=te(e),{sizeClasses:d,sizeStyles:v}=qe(e);return L(()=>l(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,s.value,i.value,u.value,f.value,d.value,r.value,e.class],style:[o.value,v.value,e.style]},{default:()=>[t.default?l(Z,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?l(A,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?l(J,{key:"icon",icon:e.icon},null):e.text,De(!1,"v-avatar")]})),{}}}),Xn=y({appendAvatar:String,appendIcon:N,prependAvatar:String,prependIcon:N,subtitle:[String,Number],title:[String,Number],...p(),...be()},"VCardItem"),Yn=k()({name:"VCardItem",props:Xn(),setup(e,n){let{slots:t}=n;return L(()=>{var f;const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),o=!!(i||t.append),r=!!(e.title!=null||t.title),u=!!(e.subtitle!=null||t.subtitle);return l("div",{class:["v-card-item",e.class],style:e.style},[s&&l("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?l(Z,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):l($,null,[e.prependAvatar&&l($e,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&l(J,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),l("div",{class:"v-card-item__content"},[r&&l(de,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),u&&l(Dn,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(f=t.default)==null?void 0:f.call(t)]),o&&l("div",{key:"append",class:"v-card-item__append"},[t.append?l(Z,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):l($,null,[e.appendIcon&&l(J,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&l($e,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),qn=y({opacity:[Number,String],...p(),...S()},"VCardText"),fe=k()({name:"VCardText",props:qn(),setup(e,n){let{slots:t}=n;return L(()=>l(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Wn=y({appendAvatar:String,appendIcon:N,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:N,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...he(),...p(),...be(),...ze(),...He(),...nn(),...We(),...on(),...ee(),...dn(),...S(),...D(),...Ue({variant:"elevated"})},"VCard"),Ne=k()({name:"VCard",directives:{Ripple:yn},props:Wn(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:s}=U(e),{borderClasses:i}=ye(e),{colorClasses:o,colorStyles:r,variantClasses:u}=Xe(e),{densityClasses:f}=Me(e),{dimensionStyles:d}=je(e),{elevationClasses:v}=Fe(e),{loaderClasses:h}=an(e),{locationStyles:m}=Ge(e),{positionClasses:w}=rn(e),{roundedClasses:X}=te(e),I=cn(e,t),B=c(()=>e.link!==!1&&I.isLink.value),T=c(()=>!e.disabled&&e.link!==!1&&(e.link||I.isClickable.value));return L(()=>{const R=B.value?"a":e.tag,V=!!(a.title||e.title!=null),z=!!(a.subtitle||e.subtitle!=null),j=V||z,E=!!(a.append||e.appendAvatar||e.appendIcon),ae=!!(a.prepend||e.prependAvatar||e.prependIcon),P=!!(a.image||e.image),se=j||ae||E,Y=!!(a.text||e.text!=null);return Ut(l(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":T.value},s.value,i.value,o.value,f.value,v.value,h.value,w.value,X.value,u.value,e.class],style:[r.value,d.value,m.value,e.style],href:I.href.value,onClick:T.value&&I.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var x;return[P&&l("div",{key:"image",class:"v-card__image"},[a.image?l(Z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):l(A,{key:"image-img",cover:!0,src:e.image},null)]),l(sn,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),se&&l(Yn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),Y&&l(fe,{key:"text"},{default:()=>{var q;return[((q=a.text)==null?void 0:q.call(a))??e.text]}}),(x=a.default)==null?void 0:x.call(a),a.actions&&l(ce,null,{default:a.actions}),De(T.value,"v-card")]}}),[[Xt("ripple"),T.value&&e.ripple]])}),{}}}),Gn=g("br",null,null,-1),Kn=g("hr",null,null,-1),Zn=g("br",null,null,-1),Jn=g("div",{class:"text-center"},[g("h5",{class:"text-h5 font-weight-bold"}," Safe, Secure, and Local Storage Solutions in Buxton, Derbyshire")],-1),Qn=g("br",null,null,-1),ea=g("div",{class:"text-center"},[g("h5",{class:"text-h5 font-weight-light"}," Welcome to Under the Arches Storage, where we provide secure and waterproof storage containers for all your personal or business needs. Located just a two-minute walk from central Buxton, our facility offers 20ft and 10ft containers that are perfect for storing everything from household items to business inventory. ")],-1),ta=g("br",null,null,-1),na=g("h5",null," Our larger 20ft containers are ideal for storing furniture, business equipment, or household items. With secure locks and waterproofing, your belongings are safe from both theft and the elements.",-1),aa=g("h5",null," Perfect for smaller loads, our 10ft containers are ideal for personal items, seasonal storage, or smaller business inventories. These compact units still offer the same top-tier security and weather protection. ",-1),sa=g("h5",{class:"text-h5 font-weight-light"}," Each container is equipped with heavy-duty locks, while our entire site is monitored by 24-hour CCTV to ensure your belongings remain safe at all times. ",-1),la=g("br",null,null,-1),ia=g("h5",{class:"text-h5 font-weight-light"}," Whether you need storage for just a few weeks or for several months, our flexible rental agreements allow you to store your items on your terms.",-1),oa=g("br",null,null,-1),ra=g("br",null,null,-1),ua={__name:"HomeScreen",setup(e){return(n,t)=>(G(),_e($,null,[l(Ee,null,{default:_(()=>[l(A,{height:"200",padding:"",src:jn}),Gn,Kn,Zn,Jn,Qn,ea,ta]),_:1}),l(Ee,{fluid:""},{default:_(()=>[l(In,null,{default:_(()=>[l(ie,{cols:"6"},{default:_(()=>[l(Ne,null,{default:_(()=>[l(de,null,{default:_(()=>[K(" 10ft Container ")]),_:1}),l(fe,null,{default:_(()=>[l(A,{src:On})]),_:1}),l(ce,null,{default:_(()=>[na]),_:1})]),_:1})]),_:1}),l(ie,{cols:"6"},{default:_(()=>[l(Ne,null,{default:_(()=>[l(de,null,{default:_(()=>[K(" 20ft Container ")]),_:1}),l(fe,null,{default:_(()=>[l(A,{src:Hn})]),_:1}),l(ce,null,{default:_(()=>[aa]),_:1})]),_:1})]),_:1}),l(ie,{cols:"12"},{default:_(()=>[sa,la,ia]),_:1})]),_:1})]),_:1}),oa,l(A,{src:Fn}),ra],64))}},da={__name:"index",setup(e){return(n,t)=>{const a=ua,s=zn;return G(),_e($,null,[l(a),l(s)],64)}}};export{da as default};
