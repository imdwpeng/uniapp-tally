import{ah as e,ai as i,aj as s,v as n,x as o,r as t,o as a,c as l,w as u,i as p,b as r,h as d,e as c,F as g,j as m,k as h,R as f}from"./index-CSaaSGkr.js";import{_ as y}from"./uni-id-pages-agreements.kUYGdH4-.js";import{r as b}from"./uni-app.es.Csk3S8NK.js";import{_}from"./uni-easyinput.BXwJBmD-.js";import{_ as k}from"./uni-id-pages-fab-login.BT23yF7Q.js";import{m as w}from"./login-page.mixin.wQjS84Jr.js";import{_ as x}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-popup-dialog.CJQDgQTf.js";import"./uni-popup.C0-y-zeJ.js";import"./uni-icons.DZvpz1YP.js";import"./store.aJibO4ZC.js";const L=x({mixins:[w],data:()=>({type:"",phone:"",focusPhone:!1,logo:"/static/logo.png"}),computed:{loginTypes:async()=>e.loginTypes,isPhone(){return/^1\d{10}$/.test(this.phone)},imgSrc(){return"weixin"==this.type?"/uni_modules/uni-id-pages/static/login/weixin.png":"/uni_modules/uni-id-pages/static/app-plus/apple.png"}},async onLoad(s){let n=s.type||e.loginTypes[0];this.type=n,"univerify"!=n&&(this.focusPhone=!0),this.$nextTick((()=>{["weixin","apple"].includes(n)&&(this.$refs.uniFabLogin.servicesList=this.$refs.uniFabLogin.servicesList.filter((e=>e.id!=n)))})),i("uni-id-pages-setLoginType",(e=>{this.type=e}))},onShow(){document.onkeydown=e=>{var i=e||window.event;i&&13==i.keyCode&&this.toSmsPage()}},onUnload(){s("uni-id-pages-setLoginType")},onReady(){},methods:{showCurrentWebview(){undefined.setStyle({top:0})},quickLogin(e){var i,s;let n={};(null==(i=e.detail)?void 0:i.code)&&(n.phoneNumberCode=e.detail.code),("weixinMobile"!==this.type||(null==(s=e.detail)?void 0:s.code))&&this.$refs.uniFabLogin.login_before(this.type,!0,n)},toSmsPage(){return this.isPhone?this.needAgreements&&!this.agree?this.$refs.agreements.popup(this.toSmsPage):void o({url:"/uni_modules/uni-id-pages/pages/login/login-smscode?phoneNumber="+this.phone}):(this.focusPhone=!0,n({title:"手机号码格式不正确",icon:"none",duration:3e3}))},toPwdLogin(){o({url:"../login/password"})},chooseArea(){n({title:"暂不支持其他国家",icon:"none",duration:3e3})}}},[["render",function(e,i,s,n,o,w){const x=m,L=p,v=h,j=f,P=b(t("uni-id-pages-agreements"),y),C=b(t("uni-easyinput"),_),S=b(t("uni-id-pages-fab-login"),k);return a(),l(L,{class:"uni-content"},{default:u((()=>[r(L,{class:"login-logo"},{default:u((()=>[r(x,{src:o.logo},null,8,["src"])])),_:1}),r(v,{class:"title"},{default:u((()=>[d("请选择登录方式")])),_:1}),["apple","weixin","weixinMobile"].includes(o.type)?(a(),c(g,{key:0},[r(v,{class:"tip"},{default:u((()=>[d("将根据第三方账号服务平台的授权范围获取你的信息")])),_:1}),r(L,{class:"quickLogin"},{default:u((()=>["weixinMobile"!==o.type?(a(),l(x,{key:0,onClick:w.quickLogin,src:w.imgSrc,mode:"widthFix",class:"quickLoginBtn"},null,8,["onClick","src"])):(a(),l(j,{key:1,type:"primary","open-type":"getPhoneNumber",onGetphonenumber:w.quickLogin,class:"uni-btn"},{default:u((()=>[d("微信授权手机号登录")])),_:1},8,["onGetphonenumber"])),r(P,{scope:"register",ref:"agreements"},null,512)])),_:1})],64)):(a(),c(g,{key:1},[r(v,{class:"tip"},{default:u((()=>[d("未注册的账号验证通过后将自动注册")])),_:1}),r(L,{class:"phone-box"},{default:u((()=>[r(L,{onClick:w.chooseArea,class:"area"},{default:u((()=>[d("+86")])),_:1},8,["onClick"]),r(C,{focus:o.focusPhone,onBlur:i[0]||(i[0]=e=>o.focusPhone=!1),class:"input-box",type:"number",inputBorder:!1,modelValue:o.phone,"onUpdate:modelValue":i[1]||(i[1]=e=>o.phone=e),maxlength:"11",placeholder:"请输入手机号"},null,8,["focus","modelValue"])])),_:1}),r(P,{scope:"register",ref:"agreements"},null,512),r(j,{class:"uni-btn",type:"primary",onClick:w.toSmsPage},{default:u((()=>[d("获取验证码")])),_:1},8,["onClick"])],64)),r(S,{ref:"uniFabLogin"},null,512)])),_:1})}],["__scopeId","data-v-effbfe53"]]);export{L as default};
