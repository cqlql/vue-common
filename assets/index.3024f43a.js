import{d as $,o as d,c as _,t as T,a as Q,b as p,r as I,F as D,_ as S,e as x,w as O,f as A,n as U,u as w,h as o,I as L,i as v,j as G,k as Z,l as X,p as F,m as R,q as ee,s as te,v as j,x as z,y as le,B as ne}from"./index.4f744734.js";import{_ as se}from"./Calendar.e97c31a2.js";import{d as ae}from"./drag.aa32b922.js";import{a as oe}from"./autoprefix.3c5bbd3f.js";const ue={key:0,style:{margin:"10px 0 6px"}},ie={class:"BoxView"},y=$({__name:"BoxView",props:{title:null},setup(e){return(t,a)=>(d(),_(D,null,[e.title?(d(),_("div",ue,T(e.title),1)):Q("",!0),p("div",ie,[I(t.$slots,"default")])],64))}});function W({elem:e,onDown:t=()=>{},onStart:a=()=>{},onEnd:l=()=>{},onMove:u,onSwipeLeft:i,onSwipeRight:n,onSwipeNot:s}){let r,f,c,b=[],g=!1,m=!1;ae({elem:e,onDown(h){return t(h)},onStart:function(h){if(m)return!1;let V=h.touches?h.touches[0]:h,{pageX:k,pageY:C}=V;r=k,f=C,c=Date.now()},onMove:function(h){if(h.stopPropagation(),m)return;let V=h.touches?h.touches[0]:h,{pageX:k,pageY:C}=V,N=k,M=C,B=N-r,P=M-f;if(g===!1&&(Math.abs(P/B)<1?(g=!0,a(h)):m=!0),g){h.preventDefault();let Y=Date.now(),K=Y-c;b.push([B,K]),u(B,h),r=N,f=M,c=Y}},onEnd:function(){if(g){b.push([0,Date.now()-c]);let h=0,V=0;for(let N=b.length,M=0;N--;){let B=b[N],P=B[1];if(P>50||M++>5)break;h+=B[0],V+=P}let k=h/V||0,C=.15;k>C?n():k<-C?i():s(),b=[],l()}m=g=!1}})}const de=$({__name:"SwipeX",setup(e){const t=x(null);return O(t,a=>{a&&W({elem:a,onMove(l,u){console.log("\u{1F680} -- onMove -- e",l,u)},onSwipeLeft(){console.log("\u{1F680} -- onSwipeLeft -- onSwipeLeft")},onSwipeRight(){console.log("\u{1F680} -- onSwipeRight -- onSwipeRight")},onSwipeNot(){console.log("\u{1F680} -- onSwipeNot")}})}),(a,l)=>(d(),_("div",{class:"SwipeX",ref_key:"el",ref:t}," SwipeX ",512))}});var _e=S(de,[["__scopeId","data-v-3dae4ae4"]]);const re={class:"SliderOnly"},ce=$({__name:"SliderOnly",props:{slideClass:null},emits:["update:slideClass","end"],setup(e,{emit:t}){const a=e,l=x(0),u=A(()=>l.value===0?"restore":"");O(()=>a.slideClass,n=>{n==="slideInRight"?l.value+=1:n==="slideInLeft"?l.value-=1:l.value=0});function i(){let n="";l.value>0?n="right":l.value<0&&(n="left"),t("end",n),t("update:slideClass","")}return(n,s)=>(d(),_("div",re,[p("div",{class:U(["SliderOnly_list",[e.slideClass,w(u)]]),onTransitionend:i},[I(n.$slots,"default",{},void 0,!0)],34)]))}});var pe=S(ce,[["__scopeId","data-v-22c99f9a"]]);function ve(e){const t=x(""),a=x(0),l=A(()=>e.value.length),u=A(()=>{const f=a.value;let c=f-1,b=f+1;const g=l.value,m=e.value;return c<0&&(c=g-1),b>=g&&(b=0),[m[c],m[f],m[b]]});function i(){t.value="slideInRight"}function n(){t.value="slideInLeft"}function s(){t.value="slideRestore"}function r(f){let c=a.value;const b=l.value;f==="right"?(c+=1,c>=b&&(c=0),a.value=c):f==="left"&&(c-=1,c<0&&(c=b-1),a.value=c)}return{listView:u,slideClass:t,inLeft:n,inRight:i,slideRestore:s,transitionend:r}}function fe({vSliderOnly:e,inRight:t,inLeft:a,slideRestore:l}){const u=oe("transform");let i;return O(e,n=>{if(n){const s=n.$el;i=s.firstElementChild;let r=0,f;W({elem:n.$el,onDown:()=>{},onStart:()=>{r=0,f=s.clientWidth},onEnd:()=>{},onMove:c=>{r+=c,i.style[u]=`translateX(${r}px)`},onSwipeLeft:()=>{t()},onSwipeRight:()=>{a()},onSwipeNot:()=>{Math.abs(r)>f/3?r<0?t():a():l()}})}}),{transitionend(){i.style[u]=""}}}const me=$({__name:"SliderFast",setup(e){const t=x(null);let a=x([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]);const{listView:l,inLeft:u,inRight:i,slideRestore:n,slideClass:s,transitionend:r}=ve(a),{transitionend:f}=fe({vSliderOnly:t,inLeft:u,inRight:i,slideRestore:n});function c(b){r(b),f()}return(b,g)=>(d(),_(D,null,[p("button",{onClick:g[0]||(g[0]=(...m)=>w(u)&&w(u)(...m))},[o(L,{icon:"ic:twotone-keyboard-arrow-left"})]),p("button",{onClick:g[1]||(g[1]=(...m)=>w(i)&&w(i)(...m))},[o(L,{icon:"ic:twotone-keyboard-arrow-right"})]),o(pe,{ref_key:"vSliderOnly",ref:t,slideClass:w(s),"onUpdate:slideClass":g[2]||(g[2]=m=>Z(s)?s.value=m:null),onEnd:c},{default:v(()=>[(d(!0),_(D,null,G(w(l),m=>(d(),_("div",{class:"SliderOnly_item",key:m.id},T(m.id),1))),128))]),_:1},8,["slideClass"])],64))}});var he=S(me,[["__scopeId","data-v-19b2374a"]]);const be=e=>(F("data-v-3fa921fa"),e=e(),R(),e),ge={class:"TabButtons"},xe=["onClick"],$e=be(()=>p("div",{class:"item_smile"},null,-1)),ye=$({__name:"TabButtons",props:{modelValue:null,list:null},emits:["update:modelValue","change"],setup(e,{emit:t}){const a=e;function l(u){let{list:i}=a,n=a.modelValue,s=i[u].value;t("update:modelValue",s),n!==s&&t("change",s)}return(u,i)=>(d(),_("div",ge,[(d(!0),_(D,null,G(e.list,(n,s)=>(d(),_("div",{key:s,class:U(["item",{active:e.modelValue===n.value}]),onClick:r=>l(s)},[X(T(n.label)+" ",1),$e],10,xe))),128))]))}});var E=S(ye,[["__scopeId","data-v-3fa921fa"]]);const H=e=>(F("data-v-4c98841f"),e=e(),R(),e),Se=H(()=>p("div",{class:"line"},null,-1)),we=H(()=>p("div",{class:"line"},null,-1)),Ve=$({__name:"TabButtonsDemo",setup(e){const t=x("all"),a=x([{label:"\u9996\u9875",value:"all"},{label:"\u7EBF\u8DEF",value:"line"},{label:"\u5546\u54C1",value:"general"},{label:"\u5361",value:"card"}]),l=x("0");let u=[];for(let n=0;n<30;n++){const s={label:"Tab"+String(n),value:String(n)};u.push(s)}const i=x(u);return(n,s)=>(d(),_("div",null,[o(E,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=r=>t.value=r),list:a.value},null,8,["modelValue","list"]),Se,o(E,{class:"scroll",modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=r=>l.value=r),list:i.value},null,8,["modelValue","list"]),we,o(E,{class:"vertical",modelValue:t.value,"onUpdate:modelValue":s[2]||(s[2]=r=>t.value=r),list:a.value},null,8,["modelValue","list"])]))}});var ke=S(Ve,[["__scopeId","data-v-4c98841f"]]);const Ce=e=>(F("data-v-3d2d2d2b"),e=e(),R(),e),Be={class:"checkbox-plus"},Ie=["onClick"],De=Ce(()=>p("span",{class:"checkbox-plus-tick"},null,-1)),Le=$({__name:"CheckboxPlus",props:{list:null},setup(e){let t=x(0);function a(l){t.value=l}return(l,u)=>(d(),_("div",Be,[(d(!0),_(D,null,G(e.list,(i,n)=>(d(),_("div",{key:n,class:U(["item",{selected:w(t)===n}]),onClick:s=>a(n)},[De,I(l.$slots,"default",ee(te(i)),void 0,!0)],10,Ie))),128))]))}});var Ne=S(Le,[["__scopeId","data-v-3d2d2d2b"]]);const Te=e=>(F("data-v-8f7bbab6"),e=e(),R(),e),Fe={class:""},Re=Te(()=>p("div",{class:"CheckboxPlusDemo_item"},[p("div",null,"100,000"),p("div",null,"+20% Bonus")],-1)),Me=$({__name:"CheckboxPlusDemo",setup(e){const t=[{value:1},{value:2}];return(a,l)=>(d(),_("div",Fe,[o(Ne,{list:t},{default:v(({})=>[Re]),_:1})]))}});var Pe=S(Me,[["__scopeId","data-v-8f7bbab6"]]);const Xe={},Ee={class:"ButtonGreen"};function Ae(e,t){return d(),_("button",Ee," ButtonGreed ")}var Oe=S(Xe,[["render",Ae],["__scopeId","data-v-db1df438"]]);const Ue={},Ge=e=>(F("data-v-3ce88a64"),e=e(),R(),e),Ye={class:""},je=Ge(()=>p("a",{href:"javascript:;",class:"loadingBtn loading"},"\u5617\u8A66\u514D\u8CBB\u793A\u7BC4",-1)),ze=[je];function qe(e,t){return d(),_("div",Ye,ze)}var We=S(Ue,[["render",qe],["__scopeId","data-v-3ce88a64"]]);const He=["value"],Je=$({__name:"InputNumber",props:{min:null,modelValue:null},emits:["update:modelValue"],setup(e,{emit:t}){const a=e;let l=/^-?(\d+\.?\d*)?$/;function u(i){let n=i.target,s=n.value;if(l.test(s)){let f=a.min;f!==void 0&&Number(s)<f&&(s=String(f))}else s=a.modelValue;t("update:modelValue",s),s!==n.value&&(n.value=s)}return(i,n)=>(d(),_("input",{type:"text",value:e.modelValue,onInput:u},null,40,He))}});var J=S(Je,[["__scopeId","data-v-e7d0f67e"]]);const Ke=$({__name:"InputNumberDemo",setup(e){const t=x("");return(a,l)=>(d(),_("div",null,[o(J,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u)},null,8,["modelValue"]),p("p",null,"result: "+T(t.value),1)]))}}),Qe=$({__name:"InputNumberMinDemo",setup(e){const t=x("");return(a,l)=>(d(),_("div",null,[o(J,{min:0,modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u)},null,8,["modelValue"]),p("p",null,"result: "+T(t.value),1)]))}});const Ze={class:"AddSubtractBar"},et={class:"middle"},tt=$({__name:"AddSubtractBar",emits:["minus","add"],setup(e,{emit:t}){function a(){t("minus")}function l(){t("add")}return(u,i)=>(d(),_("div",Ze,[p("div",{class:"action left",onMousedown:i[0]||(i[0]=z(()=>{},["prevent"])),onClick:a},[u.$slots.minus?I(u.$slots,"minus",{key:0},void 0,!0):(d(),j(L,{key:1,icon:"ic:baseline-minus"}))],32),p("div",et,[I(u.$slots,"middle",{},void 0,!0)]),p("div",{class:"action right",onMousedown:i[1]||(i[1]=z(()=>{},["prevent"])),onClick:l},[u.$slots.add?I(u.$slots,"add",{key:0},void 0,!0):(d(),j(L,{key:1,icon:"ic:baseline-add"}))],32)]))}});var q=S(tt,[["__scopeId","data-v-45502714"]]);const lt=p("input",{type:"text"},null,-1),nt=p("div",{class:"value"},"123",-1),st=X(" Button "),at=X(" Button "),ot=X("\u786E\u8BA4"),rt=$({__name:"index",setup(e){return(t,a)=>{const l=le("v-button");return d(),_(D,null,[o(y,{title:"AddSubtractBar"},{default:v(()=>[o(q,null,{minus:v(()=>[o(L,{icon:"ic:baseline-keyboard-arrow-down"})]),middle:v(()=>[lt]),add:v(()=>[o(L,{icon:"ic:baseline-keyboard-arrow-up"})]),_:1}),o(q,null,{middle:v(()=>[nt]),_:1})]),_:1}),o(y,{title:"InputNumber"},{default:v(()=>[p("p",null,[o(Ke)]),p("p",null,[o(Qe)])]),_:1}),o(y,{title:"Loading"},{default:v(()=>[o(We)]),_:1}),o(y,{title:"ButtonGreen"},{default:v(()=>[o(Oe,null,{default:v(()=>[st]),_:1})]),_:1}),o(y,{title:"Button"},{default:v(()=>[o(ne,null,{default:v(()=>[at]),_:1})]),_:1}),o(y,{title:"CheckboxPlus"},{default:v(()=>[o(Pe)]),_:1}),o(y,{title:"TabButtons"},{default:v(()=>[o(ke)]),_:1}),o(y,null,{default:v(()=>[o(he)]),_:1}),o(y,null,{default:v(()=>[o(l,null,{default:v(()=>[ot]),_:1})]),_:1}),o(y,null,{default:v(()=>[o(se)]),_:1}),o(y,null,{default:v(()=>[o(_e)]),_:1})],64)}}});export{rt as default};