import{Q as d}from"./QInnerLoading.788e47b1.js";import{Q as h}from"./QSelect.311841ab.js";import{_ as c,A as i,n,p as m,q as l,Z as p,b6 as u,d as r,aq as _,a1 as f,b7 as g}from"./index.9022de34.js";import{Q as k}from"./QSpace.fb5f89a7.js";import{Q as b}from"./QForm.a6c6ef66.js";import{Q as q}from"./QPage.a79a1249.js";import"./QChip.6eb513c3.js";import"./QItemLabel.4dae639c.js";import"./QMenu.d414cf74.js";import"./selection.5d84a74a.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";const y={name:"TimeZone",data(){return{loading:!1,merchant_timezone:"",merchant_time_picker_interval:"",timelist:[]}},created(){this.getTimezonedata()},methods:{getTimezonedata(){this.loading=!0,i.fetchDataByTokenPost("getTimezonedata").then(e=>{this.merchant_timezone=e.details.merchant_timezone,this.merchant_time_picker_interval=e.details.merchant_time_picker_interval,this.timelist=e.details.timelist}).catch(e=>{i.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})},onSubmit(){i.showLoadingBox("",this.$q),i.fetchDataByToken("saveTimezonedata",{merchant_timezone:this.merchant_timezone,merchant_time_picker_interval:this.merchant_time_picker_interval}).then(e=>{i.notify("light-green",e.msg,"check_circle",this.$q)}).catch(e=>{i.notify("dark",e,"error",this.$q)}).then(e=>{i.hideLoadingBox(this.$q)})}}};function z(e,o,Q,v,a,s){return n(),m(q,{class:p([{"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode},"q-pr-md q-pl-md"])},{default:l(()=>[a.loading?(n(),m(d,{key:0,showing:!0,color:"primary",size:"md"})):(n(),m(u,{key:1,class:"q-pa-none no-shadow"},{default:l(()=>[r(g,null,{default:l(()=>[r(b,{onSubmit:s.onSubmit},{default:l(()=>[r(h,{modelValue:a.merchant_timezone,"onUpdate:modelValue":o[0]||(o[0]=t=>a.merchant_timezone=t),options:a.timelist,label:e.$t("Set Your Time Zone"),"stack-label":"",behavior:"dialog",outlined:"",color:"grey-5","emit-value":"","map-options":"",rules:[t=>t&&t.length>0||this.$t("This field is required")]},null,8,["modelValue","options","label","rules"]),r(_,{outlined:"",modelValue:a.merchant_time_picker_interval,"onUpdate:modelValue":o[1]||(o[1]=t=>a.merchant_time_picker_interval=t),label:e.$t("Time interval"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[t=>t&&t.length>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),r(k,{class:"q-pa-sm"}),r(f,{type:"submit",color:"primary","text-color":"white",label:e.$t("Save"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":""},null,8,["label"])]),_:1},8,["onSubmit"])]),_:1})]),_:1}))]),_:1},8,["class"])}var A=c(y,[["render",z]]);export{A as default};
