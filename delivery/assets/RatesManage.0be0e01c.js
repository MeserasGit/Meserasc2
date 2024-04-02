import{_ as b,u as _,A as a,n,$ as d,d as l,q as r,Z as p,F as u,a1 as h,V as c,X as f,Y as k,p as g,am as y,aq as o}from"./index.9022de34.js";import{Q as V}from"./QToolbarTitle.5ecfa0aa.js";import{Q as q}from"./QToolbar.2a2e526c.js";import{Q}from"./QHeader.522a2ada.js";import{Q as $}from"./QInnerLoading.788e47b1.js";import{Q as D}from"./QSelect.311841ab.js";import{Q as w}from"./QSpace.fb5f89a7.js";import{Q as S}from"./QFooter.864bb069.js";import{Q as T}from"./QForm.a6c6ef66.js";import{Q as v}from"./QPage.a79a1249.js";import"./QResizeObserver.129b050c.js";import"./QChip.6eb513c3.js";import"./QItemLabel.4dae639c.js";import"./QMenu.d414cf74.js";import"./selection.5d84a74a.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";const B={name:"ReviewManage",components:{},data(){return{id:"",data:[],loading:!1,shipping_type:"standard",distance_from:0,distance_to:0,distance_price:0,estimation:"",minimum_order:0,maximum_order:0,shipping_list:[{value:"standard",label:this.$t("Standard")},{value:"priority",label:this.$t("Priority")},{value:"no_rush",label:this.$t("No rush")}]}},setup(){return{DataStore:_()}},mounted(){this.id=this.$route.query.id,a.empty(this.id)||this.getData()},computed:{isEdit(){return!a.empty(this.id)},hasData(){return Object.keys(this.data).length>0},CheckData(){return!a.empty(this.id)&&Object.keys(this.data).length<=0}},methods:{getData(){this.loading=!0,a.fetchDataByTokenPost("getDynamicRates","id="+this.id).then(e=>{this.data=e.details,this.shipping_type=e.details.shipping_type,this.distance_from=e.details.distance_from,this.distance_to=e.details.distance_to,this.distance_price=e.details.distance_price,this.estimation=e.details.estimation,this.minimum_order=e.details.minimum_order,this.maximum_order=e.details.maximum_order}).catch(e=>{a.notify("red-5",e,"error_outline",this.$q)}).then(e=>{this.loading=!1})},formSubmit(){let e={id:this.id,shipping_type:this.shipping_type,distance_from:this.distance_from,distance_to:this.distance_to,distance_price:this.distance_price,estimation:this.estimation,minimum_order:this.minimum_order,maximum_order:this.maximum_order};a.showLoadingBox("",this.$q),a.fetchDataByTokenPost(a.empty(this.id)?"AddDynamicRates":"UpdateDynamicRates",e).then(i=>{a.notify("light-green",i.msg,"check_circle",this.$q),this.$router.replace({path:"/services/charges_table"})}).catch(i=>{a.notify("red-5",i,"error_outline",this.$q)}).then(i=>{a.hideLoadingBox(this.$q)})}}},U={class:"row q-gutter-x-sm"},x={class:"row q-gutter-x-sm"};function C(e,i,R,P,s,m){return n(),d(u,null,[l(Q,{class:p({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:r(()=>[l(q,null,{default:r(()=>[l(h,{onClick:i[0]||(i[0]=t=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),l(V,{class:"text-weight-bold"},{default:r(()=>[m.isEdit?(n(),d(u,{key:0},[c(f(e.$t("Update Charges Rates")),1)],64)):(n(),d(u,{key:1},[c(f(e.$t("Add Charges Rates")),1)],64))]),_:1})]),_:1}),l(k)]),_:1},8,["class"]),l(v,{class:p([{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode},"q-pa-md"])},{default:r(()=>[s.loading?(n(),g($,{key:0,showing:!0,color:"primary",size:"md"})):(n(),g(T,{key:1,onSubmit:m.formSubmit},{default:r(()=>[l(D,{modelValue:s.shipping_type,"onUpdate:modelValue":i[1]||(i[1]=t=>s.shipping_type=t),label:e.$t("Shipping Type"),options:s.shipping_list,"stack-label":"",behavior:"dialog",outlined:"",color:"grey-5","emit-value":"","map-options":"",rules:[t=>t&&t.length>0||this.$t("This field is required")]},null,8,["modelValue","label","options","rules"]),y("div",U,[l(o,{modelValue:s.distance_from,"onUpdate:modelValue":i[2]||(i[2]=t=>s.distance_from=t),type:"number",step:"any",label:e.$t("From"),"stack-label":"",outlined:"",color:"grey-5",rules:[t=>t&&t>0||this.$t("This field is required")],class:"col"},null,8,["modelValue","label","rules"]),l(o,{modelValue:s.distance_to,"onUpdate:modelValue":i[3]||(i[3]=t=>s.distance_to=t),type:"number",step:"any",label:e.$t("To"),"stack-label":"",outlined:"",color:"grey-5",rules:[t=>t&&t>0||this.$t("This field is required")],class:"col"},null,8,["modelValue","label","rules"])]),l(o,{modelValue:s.distance_price,"onUpdate:modelValue":i[4]||(i[4]=t=>s.distance_price=t),type:"number",step:"any",label:e.$t("Price"),"stack-label":"",outlined:"",color:"grey-5",rules:[t=>t&&t>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),l(o,{modelValue:s.estimation,"onUpdate:modelValue":i[5]||(i[5]=t=>s.estimation=t),label:e.$t("Delivery estimation"),"stack-label":"",outlined:"",color:"grey-5",rules:[t=>t&&t.length>0||this.$t("This field is required")],hint:e.$t("in minutes example 10-20mins"),mask:"##-##"},null,8,["modelValue","label","rules","hint"]),l(w,{class:"q-pa-sm"}),y("div",x,[l(o,{modelValue:s.minimum_order,"onUpdate:modelValue":i[6]||(i[6]=t=>s.minimum_order=t),type:"number",step:"any",label:e.$t("Minimum Order"),"stack-label":"",outlined:"",color:"grey-5",class:"col"},null,8,["modelValue","label"]),l(o,{modelValue:s.maximum_order,"onUpdate:modelValue":i[7]||(i[7]=t=>s.maximum_order=t),type:"number",step:"any",label:e.$t("Maximum Order"),"stack-label":"",outlined:"",color:"grey-5",class:"col"},null,8,["modelValue","label"])]),l(S,null,{default:r(()=>[l(h,{type:"submit",color:"primary","text-color":"white",label:e.$t("Save"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":"",disable:m.CheckData},null,8,["label","disable"])]),_:1})]),_:1},8,["onSubmit"]))]),_:1},8,["class"])],64)}var W=b(B,[["render",C]]);export{W as default};
