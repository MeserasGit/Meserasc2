import{_ as w,u as D,A as d,n as m,$ as k,d as l,q as o,aO as U,F as V,Z as g,a1 as f,V as Q,X as b,Y as C,p as y,am as r,ao as p,a0 as I,b6 as j,b7 as S,a2 as O,a3 as h,a4 as n,ay as B,d9 as R}from"./index.9022de34.js";import{Q as $}from"./QToolbarTitle.5ecfa0aa.js";import{Q as F}from"./QToolbar.2a2e526c.js";import{Q as z}from"./QHeader.522a2ada.js";import{Q as P}from"./QInnerLoading.788e47b1.js";import{Q as c}from"./QSelect.311841ab.js";import{Q as q}from"./QList.da851dcd.js";import{Q as A}from"./QSpace.fb5f89a7.js";import{Q as E}from"./QFooter.864bb069.js";import{Q as T}from"./QForm.a6c6ef66.js";import{Q as N}from"./QPage.a79a1249.js";import{Q as L}from"./QPullToRefresh.dea2c8d3.js";import{C as x}from"./ClosePopup.6b679ccd.js";import"./QResizeObserver.129b050c.js";import"./QChip.6eb513c3.js";import"./QItemLabel.4dae639c.js";import"./QMenu.d414cf74.js";import"./selection.5d84a74a.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";import"./TouchPan.f449f070.js";import"./touch.3df10340.js";const H={name:"ItemAvailability",data(){return{modal:!1,available:!1,not_for_sale:!1,available_at_specific:!1,item_uuid:"",loading_get:!1,loading:!1,available_days:[],availability_data:[],open_all:!1,start_all:"",to_all:""}},setup(e){return{DataStore:D()}},watch:{DataStore:{immediate:!0,deep:!0,handler(e,a){this.available_days=[],e.loading||Object.entries(e.day_week).forEach(([v,s])=>{this.available_days.push({label:s.label,value:s.value,checked:!1,start:"",end:""})})}},availability_data(e,a){Object.keys(this.available_days).length>0&&Object.entries(this.available_days).forEach(([v,s])=>{Object.keys(e.day).length>0&&(s.checked=e.day.includes(s.value)===!0),Object.keys(e.start).length>0&&(s.start=d.empty(e.start[s.value])?"":e.start[s.value]),Object.keys(e.end).length>0&&(s.end=d.empty(e.end[s.value])?"":e.end[s.value])})}},created(){this.item_uuid=this.$route.query.item_uuid,d.empty(this.item_uuid)||this.getItem()},methods:{refresh(e){d.empty(this.item_uuid)?e():this.getItem(e)},getItem(e){this.loading_get=!0,d.fetchDataByTokenPost("getItem","id="+this.item_uuid).then(a=>{this.available=a.details.available,this.not_for_sale=a.details.not_for_sale,this.available_at_specific=a.details.available_at_specific,this.availability_data=a.details.availability_data}).catch(a=>{d.notify("dark",a,"error",this.$q)}).then(a=>{this.loading_get=!1,d.empty(e)||e()})},onSubmit(){this.loading=!0,d.fetchDataByToken("saveAvailability",{item_uuid:this.item_uuid,available:this.available,not_for_sale:this.not_for_sale,available_at_specific:this.available_at_specific,available_days:this.available_days}).then(e=>{d.notify("light-green",e.msg,"check_circle",this.$q)}).catch(e=>{d.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})},SetAvailability(){console.log("SetAvailability"),console.log(this.open_all),console.log(this.start_all),console.log(this.to_all),Object.keys(this.available_days).length>0&&Object.entries(this.available_days).forEach(([e,a])=>{console.log(a),a.checked=this.open_all,a.start=this.start_all,a.end=this.to_all}),this.modal=!1}}},X={class:"q-pa-md q-gutter-md"},Y={class:"flex justify-end"},Z={class:"text-capitalize font11"},G={class:"text-h6"};function J(e,a,v,s,i,_){return m(),k(V,null,[l(L,{onRefresh:_.refresh},{default:o(()=>[l(z,{class:g({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:o(()=>[l(F,null,{default:o(()=>[l(f,{onClick:a[0]||(a[0]=t=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),l($,{class:"text-weight-bold"},{default:o(()=>[Q(b(e.$t("Item Availability")),1)]),_:1})]),_:1}),l(C)]),_:1},8,["class"]),l(N,{class:g({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:o(()=>[i.loading_get?(m(),y(P,{key:0,showing:!0,color:"primary",size:"md"})):(m(),y(T,{key:1,onSubmit:_.onSubmit},{default:o(()=>[r("div",X,[r("div",null,[l(p,{modelValue:i.available,"onUpdate:modelValue":a[1]||(a[1]=t=>i.available=t),label:e.$t("Available"),dense:""},null,8,["modelValue","label"])]),r("div",null,[l(p,{modelValue:i.not_for_sale,"onUpdate:modelValue":a[2]||(a[2]=t=>i.not_for_sale=t),label:e.$t("Not for sale"),dense:""},null,8,["modelValue","label"])]),r("div",null,[l(p,{modelValue:i.available_at_specific,"onUpdate:modelValue":a[3]||(a[3]=t=>i.available_at_specific=t),label:e.$t("Available at specified times"),dense:""},null,8,["modelValue","label"])]),r("div",Y,[l(f,{onClick:a[4]||(a[4]=t=>i.modal=!i.modal),flat:"",color:"primary",label:"Set Availability","no-caps":""})])]),l(q,null,{default:o(()=>[(m(!0),k(V,null,I(i.available_days,t=>(m(),y(h,{key:t,class:"q-pl-xs"},{default:o(()=>[l(n,{avatar:"",class:"text-center flex flex-center"},{default:o(()=>[r("div",Z,b(t.label),1),l(p,{modelValue:t.checked,"onUpdate:modelValue":u=>t.checked=u,color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(n,null,{default:o(()=>[l(c,{outlined:"",modelValue:t.start,"onUpdate:modelValue":u=>t.start=u,label:e.$t("From"),color:"grey-5","stack-label":"",behavior:"dialog","transition-show":"fade","transition-hide":"fade",options:s.DataStore.getTimeRange,"emit-value":"","map-options":"",dense:"",class:"font12"},null,8,["modelValue","onUpdate:modelValue","label","options"])]),_:2},1024),l(n,null,{default:o(()=>[l(c,{outlined:"",modelValue:t.end,"onUpdate:modelValue":u=>t.end=u,label:e.$t("To"),color:"grey-5","stack-label":"",behavior:"dialog","transition-show":"fade","transition-hide":"fade",options:s.DataStore.getTimeRange,"emit-value":"","map-options":"",dense:"",class:"font12"},null,8,["modelValue","onUpdate:modelValue","label","options"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),l(A,{class:"q-pa-md"}),l(E,{class:g(["q-pl-md q-pr-md q-pb-xs bg-whitex",{"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode}])},{default:o(()=>[l(f,{type:"submit",color:"primary","text-color":"white",label:e.$t("Save"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":"",loading:i.loading},null,8,["label","loading"])]),_:1},8,["class"])]),_:1},8,["onSubmit"]))]),_:1},8,["class"])]),_:1},8,["onRefresh"]),l(U,{modelValue:i.modal,"onUpdate:modelValue":a[8]||(a[8]=t=>i.modal=t),"full-width":""},{default:o(()=>[l(j,null,{default:o(()=>[l(T,{onSubmit:_.SetAvailability},{default:o(()=>[l(S,{class:"row items-center q-pb-none"},{default:o(()=>[r("div",G,b(e.$t("Set Availability")),1),l(A),O(l(f,{icon:"close",flat:"",round:"",dense:""},null,512),[[x]])]),_:1}),l(S,null,{default:o(()=>[l(q,{dense:""},{default:o(()=>[l(h,{tag:"label"},{default:o(()=>[l(n,{avatar:""},{default:o(()=>[l(B,{modelValue:i.open_all,"onUpdate:modelValue":a[5]||(a[5]=t=>i.open_all=t)},null,8,["modelValue"])]),_:1}),l(n,null,{default:o(()=>[Q(b(e.$t("Check All")),1)]),_:1})]),_:1}),l(h,null,{default:o(()=>[l(n,null,{default:o(()=>[l(c,{outlined:"",modelValue:i.start_all,"onUpdate:modelValue":a[6]||(a[6]=t=>i.start_all=t),label:e.$t("From"),color:"grey-5","stack-label":"",behavior:"dialog","transition-show":"fade","transition-hide":"fade",options:s.DataStore.getTimeRange,"emit-value":"","map-options":"",rules:[t=>t&&t.length>0||this.$t("This field is required")]},null,8,["modelValue","label","options","rules"])]),_:1})]),_:1}),l(h,null,{default:o(()=>[l(n,null,{default:o(()=>[l(c,{outlined:"",modelValue:i.to_all,"onUpdate:modelValue":a[7]||(a[7]=t=>i.to_all=t),label:e.$t("To"),color:"grey-5","stack-label":"",behavior:"dialog","transition-show":"fade","transition-hide":"fade",options:s.DataStore.getTimeRange,"emit-value":"","map-options":"",rules:[t=>t&&t.length>0||this.$t("This field is required")]},null,8,["modelValue","label","options","rules"])]),_:1})]),_:1})]),_:1})]),_:1}),l(R,{class:"q-pa-none"},{default:o(()=>[l(f,{type:"submit",color:"primary","text-color":"white",label:e.$t("Apply"),unelevated:"",class:"full-width",size:"lg","no-caps":""},null,8,["label"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])],64)}var ye=w(H,[["render",J]]);export{ye as default};
