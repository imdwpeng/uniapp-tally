import{W as s,ah as o,v as e,G as a,r as t,o as r,c as i,w as n,i as l,b as d,h as u,d as p,j as c,k as m,R as f}from"./index-CSaaSGkr.js";import{_ as w}from"./uni-match-media.CHcPLLWk.js";import{r as h}from"./uni-app.es.Csk3S8NK.js";import{_}from"./uni-easyinput.BXwJBmD-.js";import{_ as g}from"./uni-forms-item.CyUyESrt.js";import{_ as P}from"./uni-id-pages-sms-form.BedY38UF.js";import{_ as y}from"./uni-forms.CJ7XlOAc.js";import{_ as b}from"./uni-popup-captcha.B_YjF6rv.js";import{p as j}from"./password.CPfcyX2l.js";import{s as D,m as k}from"./store.aJibO4ZC.js";import{_ as I}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.DZvpz1YP.js";import"./uni-captcha.Bxp0nv4s.js";import"./uni-popup.C0-y-zeJ.js";const C=s.importObject("uni-id-co",{customUI:!0});const U=I({name:"set-pwd.vue",data:()=>({uniIdRedirectUrl:"",loginType:"",logo:"/static/logo.png",focusNewPassword:!1,focusNewPassword2:!1,allowSkip:!1,formData:{code:"",captcha:"",newPassword:"",newPassword2:""},rules:j.getPwdRules("newPassword","newPassword2")}),computed:{userInfo:()=>D.userInfo},onReady(){this.$refs.form.setRules(this.rules)},onLoad(s){var e;this.uniIdRedirectUrl=s.uniIdRedirectUrl,this.loginType=s.loginType,o.setPasswordAfterLogin&&(null==(e=o.setPasswordAfterLogin)?void 0:e.allowSkip)&&(this.allowSkip=!0)},methods:{submit(){if(!/^\d{6}$/.test(this.formData.code))return this.$refs.smsCode.focusSmsCodeInput=!0,e({title:"验证码格式不正确",icon:"none"});this.$refs.form.validate().then((s=>{C.setPwd({password:this.formData.newPassword,code:this.formData.code,captcha:this.formData.captcha}).then((s=>{a({content:"密码设置成功",showCancel:!1,success:()=>{k.loginBack({uniIdRedirectUrl:this.uniIdRedirectUrl,loginType:this.loginType})}})})).catch((s=>{a({content:s.message,showCancel:!1})}))})).catch((s=>{"uni-id-captcha-required"==s.errCode?this.$refs.popup.open():console.log(s.errMsg)})).finally((s=>{this.formData.captcha=""}))},skip(){k.loginBack({uniIdRedirectUrl:this.uniIdRedirectUrl})}}},[["render",function(s,o,e,a,j,D){const k=c,I=l,C=m,U=h(t("uni-match-media"),w),V=h(t("uni-easyinput"),_),R=h(t("uni-forms-item"),g),v=h(t("uni-id-pages-sms-form"),P),x=f,B=h(t("uni-forms"),y),N=h(t("uni-popup-captcha"),b);return r(),i(I,{class:"uni-content"},{default:n((()=>[d(U,{"min-width":690},{default:n((()=>[d(I,{class:"login-logo"},{default:n((()=>[d(k,{src:j.logo},null,8,["src"])])),_:1}),d(C,{class:"title title-box"},{default:n((()=>[u("设置密码")])),_:1})])),_:1}),d(B,{class:"set-password-form",ref:"form",value:j.formData,"err-show-type":"toast"},{default:n((()=>[d(C,{class:"tip"},{default:n((()=>[u("输入密码")])),_:1}),d(R,{name:"newPassword"},{default:n((()=>[d(V,{focus:j.focusNewPassword,onBlur:o[0]||(o[0]=s=>j.focusNewPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:j.formData.newPassword,"onUpdate:modelValue":o[1]||(o[1]=s=>j.formData.newPassword=s),placeholder:"请输入密码"},null,8,["focus","modelValue"])])),_:1}),d(C,{class:"tip"},{default:n((()=>[u("再次输入密码")])),_:1}),d(R,{name:"newPassword2"},{default:n((()=>[d(V,{focus:j.focusNewPassword2,onBlur:o[2]||(o[2]=s=>j.focusNewPassword2=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:j.formData.newPassword2,"onUpdate:modelValue":o[3]||(o[3]=s=>j.formData.newPassword2=s),placeholder:"请再次输入新密码"},null,8,["focus","modelValue"])])),_:1}),d(v,{modelValue:j.formData.code,"onUpdate:modelValue":o[4]||(o[4]=s=>j.formData.code=s),type:"set-pwd-by-sms",ref:"smsCode",phone:D.userInfo.mobile},null,8,["modelValue","phone"]),d(I,{class:"link-box"},{default:n((()=>[d(x,{class:"uni-btn send-btn",type:"primary",onClick:D.submit},{default:n((()=>[u("确认")])),_:1},8,["onClick"]),j.allowSkip?(r(),i(x,{key:0,class:"uni-btn send-btn",type:"default",onClick:D.skip},{default:n((()=>[u("跳过")])),_:1},8,["onClick"])):p("",!0)])),_:1})])),_:1},8,["value"]),d(N,{onConfirm:D.submit,modelValue:j.formData.captcha,"onUpdate:modelValue":o[5]||(o[5]=s=>j.formData.captcha=s),scene:"set-pwd-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-f34b7681"]]);export{U as default};
