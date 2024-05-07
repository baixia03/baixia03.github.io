import{o as G,w as Q,a as Y,u as J,c as E,b as Z,t as R,d as N,e as q,f as ee,g as te,p as ne,n as ae,h as oe,m as le,i as se,j as ce,k as ie,P as re,l as K,q as ue,B as de,r as fe,s as me,v as b,x as he,y as $,z as ve,A as ge,L as Be}from"./weixin-nDlzQsyV.js";import{r as we,u as pe,B as S,a as D,F as be}from"./user-J2XSrKYg.js";import{r as d,o as W,n as O,w as ye,c as s,d as T,a as V,b as xe,e as Ce,m as _e,f as ke,g as Pe,h as Se,i as H,u as p,j as F,k as Te,v as Ae,l as z,t as L,p as Ie,_ as $e}from"./index-C8xRtZQE.js";const De=(e,n)=>{const t=d(),a=()=>{t.value=J(e).height};return W(()=>{O(a);for(let l=1;l<=3;l++)setTimeout(a,100*l)}),G(()=>O(a)),ye([Q,Y],a),t};function Fe(e,n){const t=De(e);return a=>s("div",{class:n("placeholder"),style:{height:t.value?`${t.value}px`:void 0}},[a()])}const[j,M]=E("action-bar"),X=Symbol(j),Re={placeholder:Boolean,safeAreaInsetBottom:R};var Ee=T({name:j,props:Re,setup(e,{slots:n}){const t=d(),a=Fe(t,M),{linkChildren:l}=Z(X);l();const h=()=>{var f;return s("div",{ref:t,class:[M(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(f=n.default)==null?void 0:f.call(n)])};return()=>e.placeholder?a(h):h()}});const Ne=N(Ee),[Ke,Oe]=E("action-bar-button"),Ve=q({},we,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var He=T({name:Ke,props:Ve,setup(e,{slots:n}){const t=pe(),{parent:a,index:l}=ee(X),h=V(()=>{if(a){const c=a.children[l.value-1];return!(c&&"isButton"in c)}}),f=V(()=>{if(a){const c=a.children[l.value+1];return!(c&&"isButton"in c)}});return te({isButton:!0}),()=>{const{type:c,icon:w,text:v,color:y,loading:x,disabled:C}=e;return s(S,{class:Oe([c,{last:f.value,first:h.value}]),size:"large",type:c,icon:w,color:y,loading:x,disabled:C,onClick:t},{default:()=>[n.default?n.default():v]})}}});const U=N(He),[ze,m,P]=E("dialog"),Le=q({},ne,{title:String,theme:String,width:ae,message:[String,Function],callback:Function,allowHtml:Boolean,className:oe,transition:le("van-dialog-bounce"),messageAlign:String,closeOnPopstate:R,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:R,closeOnClickOverlay:Boolean}),Me=[...se,"transition","closeOnPopstate"];var Ue=T({name:ze,props:Le,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:n,slots:t}){const a=d(),l=xe({confirm:!1,cancel:!1}),h=o=>n("update:show",o),f=o=>{var i;h(!1),(i=e.callback)==null||i.call(e,o)},c=o=>()=>{e.show&&(n(o),e.beforeClose?(l[o]=!0,me(e.beforeClose,{args:[o],done(){f(o),l[o]=!1},canceled(){l[o]=!1}})):f(o))},w=c("cancel"),v=c("confirm"),y=Ce(o=>{var i,g;if(o.target!==((g=(i=a.value)==null?void 0:i.popupRef)==null?void 0:g.value))return;({Enter:e.showConfirmButton?v:K,Escape:e.showCancelButton?w:K})[o.key](),n("keydown",o)},["enter","esc"]),x=()=>{const o=t.title?t.title():e.title;if(o)return s("div",{class:m("header",{isolated:!e.message&&!t.default})},[o])},C=o=>{const{message:i,allowHtml:g,messageAlign:u}=e,k=m("message",{"has-title":o,[u]:u}),I=ue(i)?i():i;return g&&typeof I=="string"?s("div",{class:k,innerHTML:I},null):s("div",{class:k},[I])},A=()=>{if(t.default)return s("div",{class:m("content")},[t.default()]);const{title:o,message:i,allowHtml:g}=e;if(i){const u=!!(o||t.title);return s("div",{key:g?1:0,class:m("content",{isolated:!u})},[C(u)])}},B=()=>s("div",{class:[fe,m("footer")]},[e.showCancelButton&&s(S,{size:"large",text:e.cancelButtonText||P("cancel"),class:m("cancel"),style:{color:e.cancelButtonColor},loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:w},null),e.showConfirmButton&&s(S,{size:"large",text:e.confirmButtonText||P("confirm"),class:[m("confirm"),{[de]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:v},null)]),r=()=>s(Ne,{class:m("footer")},{default:()=>[e.showCancelButton&&s(U,{type:"warning",text:e.cancelButtonText||P("cancel"),class:m("cancel"),color:e.cancelButtonColor,loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:w},null),e.showConfirmButton&&s(U,{type:"danger",text:e.confirmButtonText||P("confirm"),class:m("confirm"),color:e.confirmButtonColor,loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:v},null)]}),_=()=>t.footer?t.footer():e.theme==="round-button"?r():B();return()=>{const{width:o,title:i,theme:g,message:u,className:k}=e;return s(re,_e({ref:a,role:"dialog",class:[m([g]),k],style:{width:ie(o)},tabindex:0,"aria-labelledby":i||u,onKeydown:y,"onUpdate:show":h},ce(e,Me)),{default:()=>[x(),A(),_()]})}}});const qe=N(Ue);function We(e){return/^1[3|4|5|7|6|8|9][0-9]\d{8}$/.test(e)}function je(e,n){n||(n=window.location.href);const t=n.indexOf("#");t!==-1&&(n=n.slice(0,t));const a=n.split("?")[1];return a?new URLSearchParams(a).get(e):null}const Xe={style:{display:"flex"}},Ge=T({__name:"index",setup(e){const n=d(!1),t=d(!1),a=d(""),l=d(""),h=d(""),f=d("获取验证码"),c=d(!1),w=d(),v=d(60),y=d(b().code);W(()=>{if(b().code!==""){n.value=!0,he(b().code).then(r=>{D().$patch({nickName:r.data.user.nickName,avatar:r.data.user.avatar,accessToken:r.data.token.accessToken,openId:r.data.user.account,xyuiKey:r.data.token.key}),D().xyuiKey.startsWith("330226")?t.value=!0:ke.push("/pay/order")}).finally(()=>{b().$patch({code:""}),n.value=!1});return}location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa65a971d713fae99&redirect_uri=https%3A%2F%2Fsweep.alitai.net%2Fpay-h5%2F&response_type=code&scope=snsapi_base&state=123#wechat_redirect";const B=je("code",null);B&&(b().$patch({code:B}),location.reload())});const x=()=>{n.value=!0,ge(a.value).then(B=>{h.value=B.data.data,$("发送成功"),c.value=!0,w.value=setInterval(()=>{v.value<=0?(clearInterval(w.value),c.value=!1,f.value="获取验证码",v.value=60):(v.value--,f.value=`${v.value}s`)},1e3)}).finally(()=>{n.value=!1})},C=()=>We(a.value)?l.value===""?($("请输入验证码"),!1):!0:($("手机号格式不正确"),!1),A=()=>{let B={openId:D().openId,mobile:a.value,key:h.value,code:l.value};ve(B).then(()=>{b().$patch({code:""}),location.reload()})};return(B,r)=>{const _=be,o=S,i=qe,g=Be;return Pe(),Se("div",null,[s(i,{show:p(t),"onUpdate:show":r[2]||(r[2]=u=>F(t)?t.value=u:null),title:"请绑定手机号","before-close":C,onConfirm:A},{default:H(()=>[s(_,{"label-width":"auto",modelValue:p(a),"onUpdate:modelValue":r[0]||(r[0]=u=>F(a)?a.value=u:null),type:"tel",label:"手机号"},null,8,["modelValue"]),z("div",Xe,[s(_,{"label-width":"auto",modelValue:p(l),"onUpdate:modelValue":r[1]||(r[1]=u=>F(l)?l.value=u:null),type:"tel",label:"验证码"},null,8,["modelValue"]),s(o,{disabled:p(c),class:"btnCode",type:"primary",onClick:x},{default:H(()=>[Ie(L(p(f)),1)]),_:1},8,["disabled"])])]),_:1},8,["show"]),Te(s(g,{color:"#1989fa",size:"60px",style:{"text-align":"center","margin-top":"70%","z-index":"99999"}},null,512),[[Ae,p(n)]]),z("div",null,"code："+L(p(y)),1)])}}}),Ze=$e(Ge,[["__scopeId","data-v-2808ae76"]]);export{Ze as default};
