import{av as t,at as e,au as i,o as a,c as h,w as n,C as s,i as d}from"./index-CSaaSGkr.js";import{_ as r}from"./_plugin-vue_export-helper.BCo6x5W8.js";let m;const o=r({name:"UniMatchMedia",props:{width:{type:[Number,String],default:""},minWidth:{type:[Number,String],default:""},maxWidth:{type:[Number,String],default:""},height:{type:[Number,String],default:""},minHeight:{type:[Number,String],default:""},maxHeight:{type:[Number,String],default:""},orientation:{type:String,default:""}},data:()=>({matches:!0}),mounted(){m=t(this),m.observe({width:this.width,maxWidth:this.maxWidth,minWidth:this.minWidth,height:this.height,minHeight:this.minHeight,maxHeight:this.maxHeight,orientation:this.orientation},(t=>{this.matches=t}))},destroyed(){m.disconnect()}},[["render",function(t,r,m,o,u,g){const p=d;return e((a(),h(p,null,{default:n((()=>[s(t.$slots,"default",{},void 0,!0)])),_:3},512)),[[i,u.matches]])}],["__scopeId","data-v-e53eda6d"]]);export{o as _};