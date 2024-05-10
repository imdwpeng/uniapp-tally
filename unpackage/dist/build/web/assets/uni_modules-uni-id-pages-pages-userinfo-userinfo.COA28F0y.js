import{g as e,N as i,W as t,O as a,x as s,a5 as o,r as n,o as l,c as r,w as u,a as c,n as d,R as p,ae as h,b as m,h as f,k as g,i as y,v as b,d as w,e as _,F as v}from"./index-CSaaSGkr.js";import{_ as k}from"./cloud-image.D59SbW9j.js";import{r as I}from"./uni-app.es.Csk3S8NK.js";import{_ as x}from"./uni-icons.DZvpz1YP.js";import{s as C,m as M}from"./store.aJibO4ZC.js";import{_ as S}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as P,a as B}from"./uni-list.D3Yz1yHU.js";import{_ as A}from"./uni-popup-dialog.CJQDgQTf.js";import{a as N}from"./uni-popup.C0-y-zeJ.js";const j=S({data:()=>({isPC:!1}),props:{width:{type:String,default:()=>"50px"},height:{type:String,default:()=>"50px"},border:{type:Boolean,default:()=>!1}},async mounted(){this.isPC=!["ios","android"].includes(e().platform)},computed:{hasLogin:()=>C.hasLogin,userInfo:()=>C.userInfo,avatar_file:()=>C.userInfo.avatar_file},methods:{setAvatarFile(e){M.updateUserInfo({avatar_file:e})},async bindchooseavatar(e){let s=e.detail.avatarUrl,o={extname:s.split(".")[s.split(".").length-1],name:"",url:""},n=this.userInfo._id+""+Date.now();o.name=n;try{i({title:"更新中",mask:!0});let{fileID:e}=await t.uploadFile({filePath:s,cloudPath:n,fileType:"image"});o.url=e,a()}catch(l){console.error(l)}console.log("avatar_file",o),this.setAvatarFile(o)},uploadAvatarImg(e){if(!this.hasLogin)return s({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"});const n={quality:100,width:600,height:600,resize:!0};o({count:1,crop:n,success:async e=>{let o=e.tempFiles[0],l={extname:o.name.split(".")[o.name.split(".").length-1]},r=e.tempFilePaths[0];r=await new Promise((e=>{this.isPC||s({url:"/uni_modules/uni-id-pages/pages/userinfo/cropImage/cropImage?path="+r+`&options=${JSON.stringify(n)}`,animationType:"fade-in",events:{success:i=>{e(i)}},complete(e){}})}));let u=this.userInfo._id+""+Date.now();l.name=u,i({title:"更新中",mask:!0});let{fileID:c}=await t.uploadFile({filePath:r,cloudPath:u,fileType:"image"});l.url=c,a(),this.setAvatarFile(l)}})}}},[["render",function(e,i,t,a,s,o){const h=I(n("cloud-image"),k),m=I(n("uni-icons"),x),f=p;return l(),r(f,{"open-type":"chooseAvatar",onChooseavatar:o.bindchooseavatar,onClick:o.uploadAvatarImg,class:d(["box",{showBorder:t.border}]),style:c({width:t.width,height:t.height,lineHeight:t.height})},{default:u((()=>[o.avatar_file?(l(),r(h,{key:0,src:o.avatar_file.url,width:t.width,height:t.height},null,8,["src","width","height"])):(l(),r(m,{key:1,style:c({width:t.width,height:t.height,lineHeight:t.height}),class:"chooseAvatar",type:"plusempty",size:"30",color:"#dddddd"},null,8,["style"]))])),_:1},8,["onChooseavatar","onClick","class","style"])}],["__scopeId","data-v-05cfde7d"]]);t.database().collection("uni-id-users");const T=t.importObject("uni-id-co");const L=S({emits:["success"],computed:{},data:()=>({}),methods:{beforeGetphonenumber:async()=>await new Promise(((e,s)=>{i({mask:!0}),wx.checkSession({success(){e(),a()},fail(){h({success({code:i}){t.importObject("uni-id-co",{customUI:!0}).loginByWeixin({code:i}).then((i=>{e()})).catch((e=>{console.log(e),s()})).finally((e=>{a()}))},fail:e=>{console.error(e),s()}})}})})),async bindMobileByMpWeixin(e){"getPhoneNumber:ok"==e.detail.errMsg?(await this.beforeGetphonenumber(),T.bindMobileByMpWeixin(e.detail).then((e=>{this.$emit("success")})).finally((e=>{this.closeMe()}))):this.closeMe()},async open(){this.$refs.popup.open()},closeMe(e){this.$refs.popup.close()}}},[["render",function(e,i,t,a,s,o){const c=g,d=p,h=y,b=I(n("uni-popup"),N);return l(),r(b,{ref:"popup",type:"bottom"},{default:u((()=>[m(h,{class:"box"},{default:u((()=>[m(c,{class:"headBox"},{default:u((()=>[f("绑定资料")])),_:1}),m(c,{class:"tip"},{default:u((()=>[f("将一键获取你的手机号码绑定你的个人资料")])),_:1}),m(h,{class:"btnBox"},{default:u((()=>[m(c,{onClick:o.closeMe,class:"close"},{default:u((()=>[f("关闭")])),_:1},8,["onClick"]),m(d,{class:"agree uni-btn",type:"primary","open-type":"getPhoneNumber",onGetphonenumber:o.bindMobileByMpWeixin},{default:u((()=>[f("获取")])),_:1},8,["onGetphonenumber"])])),_:1})])),_:1})])),_:1},512)}],["__scopeId","data-v-1edc5089"]]),U=t.importObject("uni-id-co");const F=S({computed:{userInfo:()=>C.userInfo,realNameStatus(){return this.userInfo.realNameAuth?this.userInfo.realNameAuth.authStatus:0}},data:()=>({univerifyStyle:{authButton:{title:"本机号码一键绑定"},otherLoginButton:{title:"其他号码绑定"}},hasPwd:!1,showLoginManage:!1,setNicknameIng:!1}),async onShow(){this.univerifyStyle.authButton.title="本机号码一键绑定",this.univerifyStyle.otherLoginButton.title="其他号码绑定"},async onLoad(e){e.showLoginManage&&(this.showLoginManage=!0);let i=await U.getAccountInfo();this.hasPwd=i.isPasswordSet},methods:{login(){s({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd",complete:e=>{}})},logout(){M.logout()},bindMobileSuccess(){M.updateUserInfo()},changePassword(){s({url:"/uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd",complete:e=>{}})},bindMobile(){this.bindMobileBySmsCode()},univerify(){h({provider:"univerify",univerifyStyle:this.univerifyStyle,success:async e=>{U.bindMobileByUniverify(e.authResult).then((e=>{M.updateUserInfo()})).catch((e=>{console.log(e)})).finally((e=>{uni.closeAuthView()}))},fail:e=>{console.log(e),"30002"!=e.code&&"30001"!=e.code||this.bindMobileBySmsCode()}})},bindMobileBySmsCode(){s({url:"./bind-mobile/bind-mobile"})},setNickname(e){e?(M.updateUserInfo({nickname:e}),this.setNicknameIng=!1,this.$refs.dialog.close()):this.$refs.dialog.open()},deactivate(){s({url:"/uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate"})},async bindThirdAccount(e){const i=t.importObject("uni-id-co"),s={weixin:"wx_openid",alipay:"ali_openid",apple:"apple_openid",qq:"qq_openid"}[e.toLowerCase()];this.userInfo[s]?(await i["unbind"+e](),await M.updateUserInfo()):h({provider:e.toLowerCase(),onlyAuthorize:!0,success:async t=>{const a=await i["bind"+e]({code:t.code});a.errCode&&b({title:a.errMsg||"绑定失败",duration:3e3}),await M.updateUserInfo()},fail:async e=>{console.log(e),a()}})},realNameVerify(){s({url:"/uni_modules/uni-id-pages/pages/userinfo/realname-verify/realname-verify"})}}},[["render",function(e,i,t,a,s,o){const c=I(n("uni-id-pages-avatar"),j),d=y,h=I(n("uni-list-item"),P),g=I(n("uni-list"),B),b=I(n("uni-popup-dialog"),A),k=I(n("uni-popup"),N),x=I(n("uni-id-pages-bind-mobile"),L),C=p;return l(),r(d,{class:"uni-content"},{default:u((()=>[m(d,{class:"avatar"},{default:u((()=>[m(c,{width:"260rpx",height:"260rpx"})])),_:1}),m(g,null,{default:u((()=>[m(h,{class:"item",onClick:i[0]||(i[0]=e=>o.setNickname("")),title:"昵称",rightText:o.userInfo.nickname||"未设置",link:""},null,8,["rightText"]),m(h,{class:"item",onClick:o.bindMobile,title:"手机号",rightText:o.userInfo.mobile||"未绑定",link:""},null,8,["onClick","rightText"]),o.userInfo.email?(l(),r(h,{key:0,class:"item",title:"电子邮箱",rightText:o.userInfo.email},null,8,["rightText"])):w("",!0),s.hasPwd?(l(),r(h,{key:1,class:"item",onClick:o.changePassword,title:"修改密码",link:""},null,8,["onClick"])):w("",!0)])),_:1}),m(g,{class:"mt10"},{default:u((()=>[m(h,{onClick:o.deactivate,title:"注销账号",link:"navigateTo"},null,8,["onClick"])])),_:1}),m(k,{ref:"dialog",type:"dialog"},{default:u((()=>[m(b,{mode:"input",value:o.userInfo.nickname,onConfirm:o.setNickname,inputType:s.setNicknameIng?"nickname":"text",title:"设置昵称",placeholder:"请输入要设置的昵称"},null,8,["value","onConfirm","inputType"])])),_:1},512),m(x,{ref:"bind-mobile-by-sms",onSuccess:o.bindMobileSuccess},null,8,["onSuccess"]),s.showLoginManage?(l(),_(v,{key:0},[o.userInfo._id?(l(),r(C,{key:0,onClick:o.logout},{default:u((()=>[f("退出登录")])),_:1},8,["onClick"])):(l(),r(C,{key:1,onClick:o.login},{default:u((()=>[f("去登录")])),_:1},8,["onClick"]))],64)):w("",!0)])),_:1})}],["__scopeId","data-v-8cf6f419"]]);export{F as default};
