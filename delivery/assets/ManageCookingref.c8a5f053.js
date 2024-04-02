import{_ as Q,aw as u,u as q,A as i,m as f,n as l,p as d,q as n,d as a,a1 as m,$ as h,V as g,X as p,F as c,ap as D,Y as w,Z as k,am as S,aq as T,ax as _}from"./index.9022de34.js";import{Q as $}from"./QToolbarTitle.5ecfa0aa.js";import{Q as V}from"./QToolbar.2a2e526c.js";import{Q as I}from"./QHeader.522a2ada.js";import{Q as v}from"./QInnerLoading.788e47b1.js";import{Q as A}from"./QSpace.fb5f89a7.js";import{Q as E}from"./QSelect.311841ab.js";import{Q as B}from"./QFooter.864bb069.js";import{Q as P}from"./QForm.a6c6ef66.js";import{Q as x}from"./QPage.a79a1249.js";import{Q as R}from"./QPullToRefresh.dea2c8d3.js";import"./QResizeObserver.129b050c.js";import"./QChip.6eb513c3.js";import"./QItemLabel.4dae639c.js";import"./QMenu.d414cf74.js";import"./selection.5d84a74a.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";import"./TouchPan.f449f070.js";import"./touch.3df10340.js";const z={name:"ManageCookingref",components:{ConfirmDialog:u(()=>_(()=>import("./ConfirmDialog.d3b3cd57.js"),["assets/ConfirmDialog.d3b3cd57.js","assets/QToolbarTitle.5ecfa0aa.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QToolbar.2a2e526c.js"])),ItemTranslation:u(()=>_(()=>import("./ItemTranslation.b0a39d0a.js"),["assets/ItemTranslation.b0a39d0a.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QSpace.fb5f89a7.js","assets/QExpansionItem.ea7db586.js","assets/QItemLabel.4dae639c.js","assets/QSlideTransition.3f201d8d.js","assets/QList.da851dcd.js"]))},data(){return{loading_get:!1,loading:!1,id:0,name:"",status:"publish",fields:[{name:"name",title:this.$t("Enter name"),type:"text"}],data_dialog:{title:this.$t("Delete Confirmation"),subtitle:this.$t("Are you sure you want to permanently delete the selected item?"),cancel:this.$t("Cancel"),confirm:this.$t("Delete")},translation_data:[],translation:[],edit_found:!0}},setup(t){return{DataStore:q()}},computed:{isEdit(){return this.id>0}},created(){this.edit_found=!0,this.id=this.$route.query.id,this.id>0&&this.getData()},methods:{refresh(t){this.getData(t)},getData(t){this.loading_get=!0,i.fetchDataByTokenPost("getCooking","id="+this.id).then(e=>{this.name=e.details.name,this.status=e.details.status,this.translation=e.details.translation}).catch(e=>{this.edit_found=!1,i.notify("dark",e,"error",this.$q)}).then(e=>{this.loading_get=!1,i.empty(t)||t()})},afterInput(t){this.translation_data=t},onSubmit(){this.loading=!0,i.fetchDataByToken("addCooking",{id:this.id,name:this.name,status:this.status.value?this.status.value:this.status,translation_data:this.translation_data}).then(t=>{i.notify("light-green",t.msg,"check_circle",this.$q),this.$router.push("/menu")}).catch(t=>{i.notify("dark",t,"error",this.$q)}).then(t=>{this.loading=!1})},confirmDelete(){this.$refs.confirm_dialog.dialog=!0},afterConfirm(){this.$refs.confirm_dialog.dialog=!1,i.showLoadingBox("",this.$q),i.fetchDataByTokenPost("deleteCooking","id="+this.id).then(t=>{this.$router.push("/menu")}).catch(t=>{i.notify("dark",t,"error",this.$q)}).then(t=>{i.hideLoadingBox(this.$q)})}}},L={class:"q-gutter-md"};function N(t,e,F,y,o,r){const b=f("ItemTranslation"),C=f("ConfirmDialog");return l(),d(R,{onRefresh:r.refresh},{default:n(()=>[a(I,{class:k({"bg-mydark text-white":t.$q.dark.mode,"bg-white text-dark":!t.$q.dark.mode})},{default:n(()=>[a(V,null,{default:n(()=>[a(m,{onClick:e[0]||(e[0]=s=>t.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:t.$q.dark.mode?"white":"dark"},null,8,["color"]),a($,{class:"text-weight-bold"},{default:n(()=>[r.isEdit?(l(),h(c,{key:0},[g(p(t.$t("Edit Cooking Reference")),1)],64)):(l(),h(c,{key:1},[g(p(t.$t("Add Cooking Reference")),1)],64))]),_:1}),r.isEdit&&!o.loading_get?(l(),d(m,{key:0,round:"",color:"mygrey","text-color":"dark",icon:"las la-trash",size:"sm",unelevated:"",onClick:r.confirmDelete},null,8,["onClick"])):D("",!0)]),_:1}),a(w)]),_:1},8,["class"]),a(x,{class:k([{"bg-mydark text-white":t.$q.dark.mode,"bg-white text-dark":!t.$q.dark.mode},"q-pa-md"])},{default:n(()=>[o.loading_get?(l(),d(v,{key:0,showing:!0,color:"primary",size:"md"})):(l(),d(P,{key:1,onSubmit:r.onSubmit},{default:n(()=>[a(A,{class:"q-pa-xs"}),S("div",L,[a(T,{outlined:"",modelValue:o.name,"onUpdate:modelValue":e[1]||(e[1]=s=>o.name=s),label:t.$t("Name"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[s=>s&&s.length>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),a(E,{outlined:"",modelValue:o.status,"onUpdate:modelValue":e[2]||(e[2]=s=>o.status=s),label:t.$t("Status"),color:"grey-5",options:y.DataStore.status_list,"stack-label":"",behavior:"dialog","transition-show":"fade","transition-hide":"fade"},null,8,["modelValue","label","options"]),a(b,{ref:"item_translation",fields:o.fields,update:r.isEdit,data:o.translation,onAfterInput:r.afterInput},null,8,["fields","update","data","onAfterInput"])]),a(B,{class:"q-pl-md q-pr-md q-pb-xs bg-white"},{default:n(()=>[a(m,{type:"submit",color:"primary","text-color":"white",label:t.$t("Submit"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":"",loading:o.loading,disable:!o.edit_found},null,8,["label","loading","disable"])]),_:1})]),_:1},8,["onSubmit"])),a(C,{ref:"confirm_dialog",data:o.data_dialog,onAfterConfirm:r.afterConfirm},null,8,["data","onAfterConfirm"])]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var lt=Q(z,[["render",N]]);export{lt as default};
