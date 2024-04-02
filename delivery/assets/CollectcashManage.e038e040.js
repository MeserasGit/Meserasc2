import{_ as f,A as a,n as s,$ as h,d as o,q as i,Z as d,F as g,a1 as n,V as b,X as k,Y as y,p as m,aq as u}from"./index.9022de34.js";import{Q}from"./QToolbarTitle.5ecfa0aa.js";import{Q as v}from"./QToolbar.2a2e526c.js";import{Q as $}from"./QHeader.522a2ada.js";import{Q as q}from"./QInnerLoading.788e47b1.js";import{Q as S}from"./QSelect.311841ab.js";import{Q as _}from"./QFooter.864bb069.js";import{Q as w}from"./QForm.a6c6ef66.js";import{Q as V}from"./QPage.a79a1249.js";import{u as C}from"./DriverStore.9e14cd80.js";import"./QResizeObserver.129b050c.js";import"./QChip.6eb513c3.js";import"./QItemLabel.4dae639c.js";import"./QMenu.d414cf74.js";import"./selection.5d84a74a.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";const D={name:"CollectcashManage",components:{},data(){return{id:"",data:[],loading:!1,driver_id:"",amount_collected:0,reference_id:""}},setup(e){return{DriverStore:C()}},mounted(){this.DriverStore.DriverList()},computed:{isEdit(){return!a.empty(this.id)},hasData(){return Object.keys(this.data).length>0}},methods:{formSubmit(){let e={id:this.id,driver_id:this.driver_id,amount_collected:this.amount_collected,reference_id:this.reference_id};a.showLoadingBox("",this.$q),a.fetchDataByTokenPost(a.empty(this.id)?"AddCollectCash":"UpdateCollectCash",e).then(t=>{a.notify("light-green",t.msg,"check_circle",this.$q),this.$router.replace({path:"/delivery-management/collect-cash"})}).catch(t=>{a.notify("red-5",t,"error_outline",this.$q)}).then(t=>{a.hideLoadingBox(this.$q)})}}};function B(e,t,T,p,l,c){return s(),h(g,null,[o($,{class:d({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:i(()=>[o(v,null,{default:i(()=>[o(n,{onClick:t[0]||(t[0]=r=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),o(Q,{class:"text-weight-bold"},{default:i(()=>[b(k(e.$t("Collect Cash")),1)]),_:1})]),_:1}),o(y)]),_:1},8,["class"]),o(V,{class:d([{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode},"q-pa-md"])},{default:i(()=>[l.loading?(s(),m(q,{key:0,showing:!0,color:"primary",size:"md"})):(s(),m(w,{key:1,onSubmit:c.formSubmit},{default:i(()=>[o(S,{modelValue:l.driver_id,"onUpdate:modelValue":t[1]||(t[1]=r=>l.driver_id=r),label:e.$t("Select Driver"),options:p.DriverStore.getDriverList,"stack-label":"",behavior:"dialog",outlined:"",color:"grey-5","emit-value":"","map-options":"",rules:[r=>r&&r>0||this.$t("This field is required")]},null,8,["modelValue","label","options","rules"]),o(u,{modelValue:l.amount_collected,"onUpdate:modelValue":t[2]||(t[2]=r=>l.amount_collected=r),type:"number",step:"any",label:e.$t("Amount"),"stack-label":"",outlined:"",color:"grey-5",rules:[r=>r&&r>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),o(u,{modelValue:l.reference_id,"onUpdate:modelValue":t[3]||(t[3]=r=>l.reference_id=r),label:e.$t("Reference"),"stack-label":"",outlined:"",autogrow:"",color:"grey-5"},null,8,["modelValue","label"]),o(_,null,{default:i(()=>[o(n,{type:"submit",color:"primary","text-color":"white",label:e.$t("Save"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":""},null,8,["label"])]),_:1})]),_:1},8,["onSubmit"]))]),_:1},8,["class"])],64)}var Z=f(D,[["render",B]]);export{Z as default};
