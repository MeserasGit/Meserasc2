import{_ as v,aw as x,u as C,A as r,m as b,n as a,p as c,q as d,Z as q,b6 as D,d as n,$ as h,am as s,X as i,F as f,a1 as u,ap as p,Y as w,a0 as $,V as y,b7 as A,ax as Q}from"./index.9022de34.js";import{Q as B}from"./QInnerLoading.788e47b1.js";import{Q as O}from"./QChip.6eb513c3.js";import{Q as S}from"./QPage.a79a1249.js";import{u as z}from"./AccessStore.4066b28f.js";const H={name:"MerchantOpenings",components:{ConfirmDialog:x(()=>Q(()=>import("./ConfirmDialog.d3b3cd57.js"),["assets/ConfirmDialog.d3b3cd57.js","assets/QToolbarTitle.5ecfa0aa.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QToolbar.2a2e526c.js"]))},data(){return{loading:!1,data:[],edit:!1,data_to_delete:[]}},setup(e){const t=C(),g=z();return{DataStore:t,AccessStore:g}},created(){this.getOpeningHours()},computed:{hasData(){return Object.keys(this.data).length>0||!r.empty(this.id)},hasData2(){return Object.keys(this.data).length>0}},methods:{refresh(e){this.getOpeningHours(e)},getOpeningHours(e){this.loading=!0,r.fetchDataByTokenPost("getOpeningHours").then(t=>{this.edit=!1,this.data=t.details}).catch(t=>{this.data=[]}).then(t=>{this.loading=!1,r.empty(e)||e()})},confirmDelete(e,t){this.data_to_delete=e,this.data_to_delete.index=t,this.$refs.confirm_dialog.dialog=!0},afterConfirm(){this.$refs.confirm_dialog.dialog=!1,r.showLoadingBox("",this.$q),r.fetchDataByTokenPost("deleteHours","&id="+this.data_to_delete.id).then(e=>{this.data.splice(this.data_to_delete.index,1)}).catch(e=>{r.notify("dark",e,"error",this.$q)}).then(e=>{r.hideLoadingBox(this.$q)})}}},P={class:"row items-center justify-between"},V={class:"text-weight-bold"},L={class:"row items-stretch items-center q-gutter-md"},N={class:"font11 text-grey"},E={class:"col-3"},T={key:1,class:"flex flex-center",style:{"min-height":"calc(30vh)"}},j={class:"full-width text-center"},I={class:"text-weight-bold"},M={class:"text-grey font12 q-mb-none"};function F(e,t,g,_,l,m){const k=b("ConfirmDialog");return a(),c(S,{class:q([{"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode},"q-pr-md q-pl-md"])},{default:d(()=>[l.loading?(a(),c(B,{key:0,showing:!0,color:"primary",size:"md"})):(a(),c(D,{key:1,class:"q-pa-none no-shadow"},{default:d(()=>[n(A,null,{default:d(()=>[m.hasData?(a(),h(f,{key:0},[s("div",P,[s("div",V,i(e.$t("Manage Hours")),1),_.AccessStore.hasAccess("merchant.store_hours_delete")?(a(),h(f,{key:0},[m.hasData2?(a(),c(u,{key:0,label:l.edit?this.$t("Done"):this.$t("Edit"),flat:"","no-caps":"",color:"primary",onClick:t[0]||(t[0]=o=>l.edit=!l.edit)},null,8,["label"])):p("",!0)],64)):p("",!0)]),n(w,{class:"q-mb-lg"}),s("div",L,[(a(!0),h(f,null,$(l.data,o=>(a(),h("div",{class:"col-5 relative-position",key:o},[l.edit?(a(),c(u,{key:0,round:"",color:e.$q.dark.mode?"grey600":"primary","text-color":e.$q.dark.mode?"grey300":"dark",icon:"las la-trash",dense:"",unelevated:"",size:"sm",class:"absolute-top-right z-tap",style:{top:"-10px",right:"-10px"},onClick:Y=>m.confirmDelete(o,e.index)},null,8,["color","text-color","onClick"])):p("",!0),n(u,{color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",class:"line-normal radius8 font13",unelevated:"",style:{"min-height":"70px"},"no-caps":"",to:{path:"/restaurant/update-hours",query:{id:o.id}}},{default:d(()=>[s("div",null,i(o.day),1),s("div",N,i(o.opening_hours),1),n(O,{color:o.status=="open"?"yellow":"red","text-color":o.status=="open"?"dark":"white",size:"sm"},{default:d(()=>[y(i(o.status),1)]),_:2},1032,["color","text-color"])]),_:2},1032,["color","text-color","to"])]))),128)),s("div",E,[n(u,{color:"primary","text-color":"white",class:"line-normal radius8 font13",unelevated:"",style:{"min-height":"70px"},"no-caps":"",to:"/restaurant/add-hours"},{default:d(()=>[y(" + "+i(e.$t("Add")),1)]),_:1})])])],64)):(a(),h("div",T,[s("div",j,[s("div",I,i(e.$t("No available data")),1),s("p",M,i(e.$t("You haven't added your store opening hours")),1),n(u,{flat:"","no-caps":"",label:e.$t("Click here to add"),color:"blue",size:"sm",to:"/restaurant/add-hours"},null,8,["label"])])]))]),_:1})]),_:1})),n(k,{ref:"confirm_dialog",data:_.DataStore.data_dialog,onAfterConfirm:m.afterConfirm},null,8,["data","onAfterConfirm"])]),_:1},8,["class"])}var K=v(H,[["render",F]]);export{K as default};
