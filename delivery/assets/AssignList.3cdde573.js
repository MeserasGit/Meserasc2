import{_ as q,aw as Q,A as n,m as D,n as a,p as f,q as t,d as r,a1 as m,V as p,X as d,Z as _,$ as u,F as v,am as c,aq as S,ap as k,b6 as A,a0 as C,ax as z,a3 as w,a4 as y,a5 as x}from"./index.9022de34.js";import{Q as $}from"./QToolbarTitle.5ecfa0aa.js";import{Q as B}from"./QToolbar.2a2e526c.js";import{Q as T}from"./QHeader.522a2ada.js";import{Q as V}from"./QInnerLoading.788e47b1.js";import{Q as I}from"./QImg.ad5480e5.js";import{Q as g}from"./QItemLabel.4dae639c.js";import{Q as L}from"./QList.da851dcd.js";import{Q as F}from"./QFooter.864bb069.js";import{Q as N}from"./QPage.a79a1249.js";import{Q as P}from"./QPullToRefresh.dea2c8d3.js";import{u as R}from"./DriverStore.9e14cd80.js";import"./QResizeObserver.129b050c.js";import"./TouchPan.f449f070.js";import"./touch.3df10340.js";import"./selection.5d84a74a.js";import"./format.3e32b8d9.js";const Z={name:"AssignList",components:{FilterByZone:Q(()=>z(()=>import("./FilterByZone.f06f5e31.js"),["assets/FilterByZone.f06f5e31.js","assets/QToolbarTitle.5ecfa0aa.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QSpace.fb5f89a7.js","assets/QToolbar.2a2e526c.js","assets/QItemLabel.4dae639c.js","assets/QList.da851dcd.js","assets/QFooter.864bb069.js","assets/QResizeObserver.129b050c.js","assets/DriverStore.9e14cd80.js"]))},data(){return{selected_driver:[],order_uuid:"",loading:!1,zone_id:"",group_selected:"",q:""}},setup(e){return{DriverStore:R()}},created(){this.order_uuid=this.$route.query.order_uuid,this.refresh(null)},computed:{hasSelected(){return Object.keys(this.selected_driver).length>0},hasFilter(){return this.zone_id>0||this.group_selected>0||!n.empty(this.q)}},methods:{refresh(e){e&&(this.q="",this.zone_id="",this.group_selected="",this.DriverStore.is_refresh=!0),this.DriverStore.getAvailableDriver("zone_id="+this.zone_id+"&group_selected="+this.group_selected+"&q="+this.q+"&order_uuid="+this.order_uuid,e)},afterApplyfilter(e,i){this.zone_id=e,this.group_selected=i,this.refresh(null)},applyfilter(){n.empty(this.q)||this.refresh(null)},setSelected(e){this.selected_driver=e.selected?[]:e,e.selected=!e.selected},Assign(){this.loading=!0,n.fetchDataByTokenPost("AssignDriver","driver_id="+this.selected_driver.driver_id+"&order_uuid="+this.order_uuid).then(e=>{n.notify(this.$q.dark.mode?"grey600":"light-green",e.msg,"check_circle",this.$q),this.$router.replace({path:"/orderview",query:{order_uuid:this.order_uuid}})}).catch(e=>{n.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})}}},E={key:0,class:"text-grey"},O={class:"flex flex-center q-gutter-sm q-mb-sm"},j={class:"col"},H={class:"border-grey bg-white radius8"},U={class:"col-1"},X={key:0,class:"flex flex-center",style:{"min-height":"400px"}},G={class:"text-grey"};function J(e,i,K,l,h,o){const b=D("FilterByZone");return a(),f(P,{onRefresh:o.refresh},{default:t(()=>[r(T,{class:_({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode}),reveal:""},{default:t(()=>[r(B,null,{default:t(()=>[r(m,{onClick:i[0]||(i[0]=s=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),r($,{class:"text-weight-bold"},{default:t(()=>[p(d(e.$t("Select a driver to assign")),1)]),_:1})]),_:1})]),_:1},8,["class"]),r(N,{class:_([{"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode,"flex flex-center":!l.DriverStore.hasDrivers},"q-pl-md q-pr-md q-pb-md"])},{default:t(()=>[l.DriverStore.getLoading&&!l.DriverStore.is_refresh?(a(),f(V,{key:0,showing:!0,color:"primary",size:"md","label-class":"dark",class:"transparent"})):(a(),u(v,{key:1},[l.DriverStore.hasDrivers?(a(),u(v,{key:1},[c("div",O,[c("div",j,[c("div",H,[r(S,{modelValue:h.q,"onUpdate:modelValue":i[1]||(i[1]=s=>h.q=s),flat:"",outlined:"",dense:"",label:e.$t("Search driver by name")},{append:t(()=>[r(m,{round:"",dense:"",flat:"",icon:"search",onClick:o.applyfilter},null,8,["onClick"])]),_:1},8,["modelValue","label"])])]),c("div",U,[r(m,{round:"",icon:"filter_list",unelevated:"",color:"primary",size:"sm",onClick:i[2]||(i[2]=s=>this.$refs.filter_zone.modal=!0)})])]),l.DriverStore.hasDriverData?k("",!0):(a(),u("div",X,[c("p",G,d(e.$t("No available drivers")),1)])),r(A,{flat:""},{default:t(()=>[r(L,{separator:""},{default:t(()=>[(a(!0),u(v,null,C(l.DriverStore.getDrivers,s=>(a(),f(w,{key:s,clickable:"",active:s.selected,"active-class":"bg-teal-1 text-grey-8",onClick:M=>o.setSelected(s)},{default:t(()=>[r(y,{avatar:""},{default:t(()=>[r(x,{size:"50px;"},{default:t(()=>[r(I,{src:s.photo_url,sizes:"width:50px; height:50px;"},null,8,["src"])]),_:2},1024)]),_:2},1024),r(y,null,{default:t(()=>[r(g,null,{default:t(()=>[p(d(s.name),1)]),_:2},1024),r(g,{caption:""}),l.DriverStore.getActiveTask[s.driver_id]?(a(),f(g,{key:0,caption:""},{default:t(()=>[p(d(l.DriverStore.getActiveTask[s.driver_id])+" "+d(e.$t("active orders")),1)]),_:2},1024)):k("",!0)]),_:2},1024)]),_:2},1032,["active","onClick"]))),128))]),_:1})]),_:1}),r(F,{class:_(["q-gutter-sm q-pl-md q-pr-md q-pb-sm",{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode}])},{default:t(()=>[r(m,{unelevated:"",color:"primary","no-caps":"",class:"radius8 fit",size:"lg",label:e.$t("Confirm"),loading:h.loading,disable:!o.hasSelected,onClick:o.Assign},null,8,["label","loading","disable","onClick"])]),_:1},8,["class"])],64)):(a(),u("p",E,d(e.$t("No available drivers")),1))],64))]),_:1},8,["class"]),r(b,{ref:"filter_zone",onAfterApplyfilter:o.afterApplyfilter},null,8,["onAfterApplyfilter"])]),_:1},8,["onRefresh"])}var pe=q(Z,[["render",J]]);export{pe as default};
