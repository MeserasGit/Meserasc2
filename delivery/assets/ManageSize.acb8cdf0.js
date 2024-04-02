import{_ as q,aw as f,u as Q,A as s,m as h,n,p as d,q as l,d as a,a1 as m,$ as p,V as g,X as c,F as _,ap as S,Y as C,Z as u,am as D,aq as $,ax as k}from"./index.9022de34.js";import{Q as w}from"./QToolbarTitle.5ecfa0aa.js";import{Q as T}from"./QToolbar.2a2e526c.js";import{Q as V}from"./QHeader.522a2ada.js";import{Q as A}from"./QInnerLoading.788e47b1.js";import{Q as I}from"./QSpace.fb5f89a7.js";import{Q as v}from"./QSelect.311841ab.js";import{Q as E}from"./QFooter.864bb069.js";import{Q as B}from"./QForm.a6c6ef66.js";import{Q as P}from"./QPage.a79a1249.js";import{Q as x}from"./QPullToRefresh.dea2c8d3.js";import"./QResizeObserver.129b050c.js";import"./QChip.6eb513c3.js";import"./QItemLabel.4dae639c.js";import"./QMenu.d414cf74.js";import"./selection.5d84a74a.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";import"./TouchPan.f449f070.js";import"./touch.3df10340.js";const L={name:"ManageAddonCategory",components:{ConfirmDialog:f(()=>k(()=>import("./ConfirmDialog.d3b3cd57.js"),["assets/ConfirmDialog.d3b3cd57.js","assets/QToolbarTitle.5ecfa0aa.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QToolbar.2a2e526c.js"])),ItemTranslation:f(()=>k(()=>import("./ItemTranslation.b0a39d0a.js"),["assets/ItemTranslation.b0a39d0a.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QSpace.fb5f89a7.js","assets/QExpansionItem.ea7db586.js","assets/QItemLabel.4dae639c.js","assets/QSlideTransition.3f201d8d.js","assets/QList.da851dcd.js"]))},data(){return{loading_get:!1,loading:!1,size_id:0,size_name:"",status:"publish",fields:[{name:"name",title:this.$t("Enter name"),type:"text"}],data_dialog:{title:this.$t("Delete Confirmation"),subtitle:this.$t("Are you sure you want to permanently delete the selected item?"),cancel:this.$t("Cancel"),confirm:this.$t("Delete")},translation_data:[],translation:[],edit_found:!0}},setup(e){return{DataStore:Q()}},computed:{isEdit(){return this.size_id>0}},created(){this.edit_found=!0,this.size_id=this.$route.query.size_id,this.size_id>0&&this.getSize()},methods:{refresh(e){this.getSize(e)},getSize(e){this.loading_get=!0,s.fetchDataByTokenPost("getSize","size_id="+this.size_id).then(t=>{this.size_name=t.details.size_name,this.status=t.details.status,this.translation=t.details.translation}).catch(t=>{this.edit_found=!1,s.notify("dark",t,"error",this.$q)}).then(t=>{this.loading_get=!1,s.empty(e)||e()})},afterInput(e){this.translation_data=e},onSubmit(){this.loading=!0,s.fetchDataByToken("addSize",{size_id:this.size_id,size_name:this.size_name,status:this.status.value?this.status.value:this.status,translation_data:this.translation_data}).then(e=>{s.notify(this.$q.dark.mode?"grey600":"light-green",e.msg,"check_circle",this.$q),this.$router.push("/menu")}).catch(e=>{s.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})},confirmDelete(){this.$refs.confirm_dialog.dialog=!0},afterConfirm(){this.$refs.confirm_dialog.dialog=!1,s.showLoadingBox("",this.$q),s.fetchDataByTokenPost("deleteSize","size_id="+this.size_id).then(e=>{this.$router.push("/menu")}).catch(e=>{s.notify("dark",e,"error",this.$q)}).then(e=>{s.hideLoadingBox(this.$q)})}}},N={class:"q-gutter-md"};function R(e,t,F,y,i,o){const z=h("ItemTranslation"),b=h("ConfirmDialog");return n(),d(x,{onRefresh:o.refresh},{default:l(()=>[a(V,{class:u({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:l(()=>[a(T,null,{default:l(()=>[a(m,{onClick:t[0]||(t[0]=r=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(w,{class:"text-weight-bold"},{default:l(()=>[o.isEdit?(n(),p(_,{key:0},[g(c(e.$t("Edit Size")),1)],64)):(n(),p(_,{key:1},[g(c(e.$t("Add Size")),1)],64))]),_:1}),o.isEdit&&!i.loading_get?(n(),d(m,{key:0,round:"",color:"mygrey","text-color":"dark",icon:"las la-trash",size:"sm",unelevated:"",onClick:o.confirmDelete},null,8,["onClick"])):S("",!0)]),_:1}),a(C)]),_:1},8,["class"]),a(P,{class:u([{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode},"q-pa-md"])},{default:l(()=>[i.loading_get?(n(),d(A,{key:0,showing:!0,color:"primary",size:"md"})):(n(),d(B,{key:1,onSubmit:o.onSubmit},{default:l(()=>[a(I,{class:"q-pa-xs"}),D("div",N,[a($,{outlined:"",modelValue:i.size_name,"onUpdate:modelValue":t[1]||(t[1]=r=>i.size_name=r),label:e.$t("Name"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[r=>r&&r.length>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),a(v,{outlined:"",modelValue:i.status,"onUpdate:modelValue":t[2]||(t[2]=r=>i.status=r),label:e.$t("Status"),color:"grey-5",options:y.DataStore.status_list,"stack-label":"",behavior:"dialog","transition-show":"fade","transition-hide":"fade"},null,8,["modelValue","label","options"]),a(z,{ref:"item_translation",fields:i.fields,update:o.isEdit,data:i.translation,onAfterInput:o.afterInput},null,8,["fields","update","data","onAfterInput"])]),a(E,{class:u(["q-pl-md q-pr-md q-pb-xs",{"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode}])},{default:l(()=>[a(m,{type:"submit",color:"primary","text-color":"white",label:e.$t("Submit"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":"",loading:i.loading,disable:!i.edit_found},null,8,["label","loading","disable"])]),_:1},8,["class"])]),_:1},8,["onSubmit"])),a(b,{ref:"confirm_dialog",data:i.data_dialog,onAfterConfirm:o.afterConfirm},null,8,["data","onAfterConfirm"])]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var ne=q(L,[["render",R]]);export{ne as default};
