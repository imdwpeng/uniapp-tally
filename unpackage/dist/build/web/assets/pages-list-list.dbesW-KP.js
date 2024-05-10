import{g as e,r as t,o as i,c as l,w as a,n as o,a as n,b as s,d as c,e as r,F as u,f as d,h as f,t as p,i as h,j as _,k as m,l as g,W as b,m as y,p as v,s as x,q as w,S as k,u as C}from"./index-CSaaSGkr.js";import{_ as S}from"./uni-icons.DZvpz1YP.js";import{r as D}from"./uni-app.es.Csk3S8NK.js";import{_ as T}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{I as z,D as B}from"./Detail.Bnj8KbUp.js";import{_ as F}from"./uni-dateformat.DdMSV8oK.js";import{_ as j,a as P}from"./uni-popup.C0-y-zeJ.js";import{_ as I}from"./uni-popup-dialog.CJQDgQTf.js";import"./uni-grid.C5hr2X6D.js";const O=T({name:"UniFab",emits:["fabClick","trigger"],props:{pattern:{type:Object,default:()=>({})},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:()=>({fabShow:!1,isShow:!1,isAndroidNvue:!1,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#007AFF",iconColor:"#fff",icon:"plusempty"}}),computed:{contentWidth(e){return 55*(this.content.length+1)+15+"px"},contentWidthMin:()=>"55px",boxWidth(){return this.getPosition(3,"horizontal")},boxHeight(){return this.getPosition(3,"vertical")},leftBottom(){return this.getPosition(0,"left","bottom")},rightBottom(){return this.getPosition(0,"right","bottom")},leftTop(){return this.getPosition(0,"left","top")},rightTop(){return this.getPosition(0,"right","top")},flexDirectionStart(){return this.getPosition(1,"vertical","top")},flexDirectionEnd(){return this.getPosition(1,"vertical","bottom")},horizontalLeft(){return this.getPosition(2,"horizontal","left")},horizontalRight(){return this.getPosition(2,"horizontal","right")},nvueBottom:()=>(e().windowBottom,30)},watch:{pattern:{handler(e,t){this.styles=Object.assign({},this.styles,e)},deep:!0}},created(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open(){this.isShow=!0},close(){this.isShow=!1},_onItemClick(e,t){this.isShow&&this.$emit("trigger",{index:e,item:t})},getPosition(e,t,i){return 0===e?this.horizontal===t&&this.vertical===i:1===e?this.direction===t&&this.vertical===i:2===e?this.direction===t&&this.horizontal===i:this.isShow&&this.direction===t?this.contentWidth:this.contentWidthMin}}},[["render",function(e,g,b,y,v,x){const w=h,k=_,C=m,T=D(t("uni-icons"),S);return i(),l(w,{class:"uni-cursor-point"},{default:a((()=>[b.popMenu&&(x.leftBottom||x.rightBottom||x.leftTop||x.rightTop)&&b.content.length>0?(i(),l(w,{key:0,class:o([{"uni-fab--leftBottom":x.leftBottom,"uni-fab--rightBottom":x.rightBottom,"uni-fab--leftTop":x.leftTop,"uni-fab--rightTop":x.rightTop},"uni-fab"]),style:n(x.nvueBottom)},{default:a((()=>[s(w,{class:o([{"uni-fab__content--left":"left"===b.horizontal,"uni-fab__content--right":"right"===b.horizontal,"uni-fab__content--flexDirection":"vertical"===b.direction,"uni-fab__content--flexDirectionStart":x.flexDirectionStart,"uni-fab__content--flexDirectionEnd":x.flexDirectionEnd,"uni-fab__content--other-platform":!v.isAndroidNvue},"uni-fab__content"]),style:n({width:x.boxWidth,height:x.boxHeight,backgroundColor:v.styles.backgroundColor}),elevation:"5"},{default:a((()=>[x.flexDirectionStart||x.horizontalLeft?(i(),l(w,{key:0,class:"uni-fab__item uni-fab__item--first"})):c("",!0),(i(!0),r(u,null,d(b.content,((e,t)=>(i(),l(w,{key:t,class:o([{"uni-fab__item--active":v.isShow},"uni-fab__item"]),onClick:i=>x._onItemClick(t,e)},{default:a((()=>[s(k,{src:e.active?e.selectedIconPath:e.iconPath,class:"uni-fab__item-image",mode:"aspectFit"},null,8,["src"]),s(C,{class:"uni-fab__item-text",style:n({color:e.active?v.styles.selectedColor:v.styles.color})},{default:a((()=>[f(p(e.text),1)])),_:2},1032,["style"])])),_:2},1032,["class","onClick"])))),128)),x.flexDirectionEnd||x.horizontalRight?(i(),l(w,{key:1,class:"uni-fab__item uni-fab__item--first"})):c("",!0)])),_:1},8,["class","style"])])),_:1},8,["class","style"])):c("",!0),s(w,{class:o([{"uni-fab__circle--leftBottom":x.leftBottom,"uni-fab__circle--rightBottom":x.rightBottom,"uni-fab__circle--leftTop":x.leftTop,"uni-fab__circle--rightTop":x.rightTop,"uni-fab__content--other-platform":!v.isAndroidNvue},"uni-fab__circle uni-fab__plus"]),style:n({"background-color":v.styles.buttonColor,bottom:x.nvueBottom}),onClick:x._onClick},{default:a((()=>[s(T,{class:o(["fab-circle-icon",{"uni-fab__plus--active":v.isShow&&b.content.length>0}]),type:v.styles.icon,color:v.styles.iconColor,size:"32"},null,8,["type","color","class"])])),_:1},8,["class","style","onClick"])])),_:1})}],["__scopeId","data-v-5976e2a5"]]),E=T(Object.assign({inheritAttrs:!1},{__name:"Item",props:["data"],emits:["onEdit","onDelete"],setup(e,{emit:n}){const _=n,b=g(null),y=g(),v=g(),x=e=>{if(y.value="",!e)return b.value.close(),void(v.value="");b.value.open(),v.value=e},w=()=>{v.value&&(x(),_("onDelete",v.value))},k=e=>{_("onEdit",e),y.value=""};return(n,_)=>{const g=D(t("uni-dateformat"),F),v=h,C=m,S=D(t("uni-transition"),j),T=D(t("uni-popup-dialog"),I),B=D(t("uni-popup"),P);return i(),r(u,null,[s(v,{class:"time-line-container"},{default:a((()=>[s(v,{class:"time-line-header"},{default:a((()=>[s(g,{class:"time-line-date",date:e.data.date,format:"dd日"},null,8,["date"]),s(v,{class:"time-line-circle"}),s(C,{class:"time-line-total-price"},{default:a((()=>[f(p(e.data.price.toFixed(2)),1)])),_:1})])),_:1}),(i(!0),r(u,null,d(e.data.children,((e,t)=>(i(),l(v,{class:o(["time-line-item",{"time-line-first-item":0===t,"time-line-has-desc":!!e.desc,"time-line-item-income":"income"===e.classify.billType}]),key:e._id},{default:a((()=>[s(z,{class:"time-line-ico",fontSize:"20",type:e.classify.ico,color:e.classify.background,onClick:e=>(e=>{y.value=e===y.value?"":e})(t)},null,8,["type","color","onClick"]),s(S,{"mode-class":["fade","slide-left"],show:y.value===t,style:{position:"absolute",right:"36%",width:"24px",height:"24px"}},{default:a((()=>[s(z,{class:"time-line-ico",fontSize:"24",type:"editor",color:"#0070ff",onClick:t=>k(e)},null,8,["onClick"])])),_:2},1032,["show"]),s(S,{"mode-class":["fade","slide-right"],show:y.value===t,style:{position:"absolute",left:"34%",width:"24px",height:"24px"}},{default:a((()=>[s(z,{class:"time-line-ico",fontSize:"24",type:"delete",color:"#ef0505",onClick:t=>x(e._id)},null,8,["onClick"])])),_:2},1032,["show"]),s(v,{class:"time-line-inner",onClick:t=>k(e)},{default:a((()=>[y.value!==t?(i(),r(u,{key:0},[s(v,{class:"time-line-item-content"},{default:a((()=>[s(C,{class:"time-line-title"},{default:a((()=>[f(p(e.title),1)])),_:2},1024),s(C,{class:"time-line-price"},{default:a((()=>[f(p(e.price.toFixed(2)),1)])),_:2},1024)])),_:2},1024),e.desc?(i(),l(C,{key:0,class:"time-line-item-desc"},{default:a((()=>[f(p(e.desc),1)])),_:2},1024)):c("",!0)],64)):c("",!0)])),_:2},1032,["onClick"])])),_:2},1032,["class"])))),128))])),_:1}),s(B,{ref_key:"deleteRef",ref:b,type:"dialog"},{default:a((()=>[s(T,{type:"info",title:"提示",content:"确认删除？",cancelText:"取消",confirmText:"确定",onConfirm:w})])),_:1},512)],64)}}}),[["__scopeId","data-v-1aecfc3a"]]),M=T({__name:"Total",props:["income","expense"],setup:e=>(t,n)=>{const c=m,r=h;return i(),l(r,{class:"container"},{default:a((()=>[s(r,{class:"income"},{default:a((()=>[s(c,{class:"title"},{default:a((()=>[f("月收入")])),_:1}),s(c,{class:"price"},{default:a((()=>[f(p(e.income.toFixed(2)),1)])),_:1})])),_:1}),s(r,{class:o(["balance",e.income-e.expense>0?"balance-profit":"balance-deficit"])},{default:a((()=>[s(c,{class:"title"},{default:a((()=>[f("月结余")])),_:1}),s(c,{class:"price"},{default:a((()=>[f(p((e.income-e.expense).toFixed(2)),1)])),_:1})])),_:1},8,["class"]),s(r,{class:"expense"},{default:a((()=>[s(c,{class:"title"},{default:a((()=>[f("月支出")])),_:1}),s(c,{class:"price"},{default:a((()=>[f(p(e.expense.toFixed(2)),1)])),_:1})])),_:1})])),_:1})}},[["__scopeId","data-v-391c9bcc"]]),$=T({__name:"SelectData",props:["date"],emits:["onChange"],setup(e,{emit:o}){const n=o,c=e=>{n("onChange",e)};return(o,n)=>{const r=D(t("uni-icons"),S),u=D(t("uni-dateformat"),F),d=h;return i(),l(d,{class:"container"},{default:a((()=>[s(r,{type:"left",size:"30",color:"#fff",class:"icon-arrows",onClick:n[0]||(n[0]=e=>c(-1))}),s(d,{class:"date-box"},{default:a((()=>[s(u,{class:"month",date:e.date,format:"M月"},null,8,["date"]),s(u,{date:e.date,format:"yyyy年"},null,8,["date"])])),_:1}),s(r,{type:"right",size:"30",color:"#fff",class:"icon-arrows",onClick:n[1]||(n[1]=e=>c(1))})])),_:1})}}},[["__scopeId","data-v-65c2d4b6"]]),A=T({__name:"list",setup(e){const o=b.database(),n=o.command;g(null);const f=g(new Date),p=g([]),_=g([]),m=g({}),S=g({income:0,expense:0}),T=g(!1);y((()=>{z(),F({billType:"expense"})}));const z=async()=>{const e=(e=>{const t=e||new Date,i=t.getFullYear(),l=t.getMonth()+1;return new Date(`${i}-${l}-01 00:00:00`).getTime()})(f.value),t=(e=>{const t=e||new Date;let i=t.getFullYear(),l=t.getMonth()+2;13===l&&(i+=1,l="01");const a=new Date(`${i}-${l}-01 00:00:00`).getTime();return new Date(a-1).getTime()})(f.value),i=o.collection("db-bills").where({create_date:n.gte(e).and(n.lte(t)),user_id:v("uni-id-pages-userInfo")._id}).getTemp(),{result:{data:l}}=await o.collection(i,"db-bill-classifies").get();p.value=[],S.value={income:0,expense:0},l.sort(((e,t)=>t.create_date-e.create_date)).forEach((e=>{const{create_date:t,price:i}=e;let l=p.value.length-1;const a=-1!==l?new Date(p.value[l].date).toLocaleDateString():"",o=new Date(t).toLocaleDateString();-1!==l&&a===o||(p.value.push({date:new Date(t).toLocaleDateString(),price:0,children:[]}),l++),p.value[l].children.push({...e,classify:e.classify_id[0]||{}}),p.value[l].price+=i,S.value[e.classify_id[0].billType]+=i}))},F=async({billType:e})=>{const{result:{data:t}}=await o.collection("db-bill-classifies").where({billType:e||"expense",user_id:n.eq(v("uni-id-pages-userInfo")._id).or(n.eq(null))}).get();_.value=[],t.forEach((e=>{(e=>{_.value[_.value.length-1]&&_.value[_.value.length-1].length%24!=0||_.value.push([]),_.value[_.value.length-1].push({...e})})({...e})}))},j=e=>{const t=new Date(f.value);let i=t.getFullYear(),l=t.getMonth()+1;1===l&&-1===e?(i-=1,l=12):12===l&&1===e?(i+=1,l=1):l+=e,f.value=new Date(`${i}/${l}-1`),z()},P=e=>{T.value=!0,w(),m.value=e||{}},I=()=>{x(),T.value=!1,m.value={}},A=e=>{"{}"!==JSON.stringify(m.value)?o.collection("db-bills").doc(e._id).update({price:e.price,title:e.title,desc:e.desc,billType:e.billType,create_date:e.create_date,classify_id:e.classify._id}).then((()=>{I(),z()})):o.collection("db-bills").add({price:e.price,title:e.title,desc:e.desc,billType:e.billType,create_date:e.create_date,classify_id:e.classify._id}).then((()=>{I(),z()}))},W=e=>{o.collection("db-bills").doc(e).remove().then((()=>{z()}))};return(e,o)=>{const n=k,g=D(t("uni-fab"),O),b=h;return i(),r(u,null,[s(b,{class:"pages"},{default:a((()=>[s($,{date:f.value,onOnChange:j},null,8,["date"]),s(M,{income:S.value.income,expense:S.value.expense},null,8,["income","expense"]),s(n,{"scroll-y":"true",class:"content"},{default:a((()=>[(i(!0),r(u,null,d(p.value,(e=>(i(),l(C(E),{data:e,key:e.date,onOnDelete:W,onOnEdit:P},null,8,["data"])))),128))])),_:1}),s(g,{onFabClick:P})])),_:1}),T.value?(i(),l(B,{key:0,visible:T.value,detail:m.value,dataSource:_.value,onOnOk:A,onOnCancel:I,onOnGetClassifyList:F},null,8,["visible","detail","dataSource"])):c("",!0)],64)}}},[["__scopeId","data-v-987a780d"]]);export{A as default};
