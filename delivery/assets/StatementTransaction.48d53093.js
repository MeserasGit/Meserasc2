import{_ as L,aw as p,u as T,A as u,m as g,n,p as f,q as a,d as t,am as s,X as r,Z as h,a1 as Q,a3 as v,a4 as y,V as _,Y as D,$ as m,a0 as $,F as k,ap as S,ax as b}from"./index.9022de34.js";import{Q as x}from"./QSpace.fb5f89a7.js";import{Q as R}from"./QList.da851dcd.js";import{Q as A}from"./QMenu.d414cf74.js";import{Q as q}from"./QItemLabel.4dae639c.js";import{Q as E}from"./QInfiniteScroll.0e0d2cfe.js";import{Q as I}from"./QPageScroller.ed98b502.js";import{Q as V}from"./QPage.a79a1249.js";import{Q as N}from"./QPullToRefresh.dea2c8d3.js";import"./selection.5d84a74a.js";import"./use-page-sticky.e99d68f4.js";import"./TouchPan.f449f070.js";import"./touch.3df10340.js";import"./format.3e32b8d9.js";const O={name:"OffersList",components:{TableSkeleton:p(()=>b(()=>import("./TableSkeleton.dba5d973.js"),["assets/TableSkeleton.dba5d973.js","assets/QSkeleton.5de72ea8.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QItemLabel.4dae639c.js","assets/QList.da851dcd.js"])),RequestPayout:p(()=>b(()=>import("./RequestPayout.b6cdc2e7.js"),["assets/RequestPayout.b6cdc2e7.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QToolbarTitle.5ecfa0aa.js","assets/QToolbar.2a2e526c.js","assets/QForm.a6c6ef66.js"])),WidgetMerchantBalance:p(()=>b(()=>import("./WidgetMerchantBalance.b9303df0.js"),["assets/WidgetMerchantBalance.b9303df0.js","assets/QCircularProgress.54b08c59.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/format.3e32b8d9.js","assets/DriverStore.9e14cd80.js"]))},setup(){return{DataStore:T()}},data(){return{loading:!1,data:[],page:0,status:[],is_refresh:void 0,handle:void 0}},computed:{hasData(){return Object.keys(this.data).length>0}},methods:{transactionClass(e){switch(e){case"credit":return!0;default:return!1}},transactionSign(e){let i="";switch(e){case"credit":i="+";break;default:i="-";break}return i},refresh(e){this.resetPagination(),this.$refs.merchant.getBalance(),this.is_refresh=e},List(e,i){this.loading=!0,u.fetchDataByTokenPost("transactionHistory","&page="+e).then(c=>{c.code==1?(this.page=e,this.data.push(c.details.data)):c.code==3&&(this.data_done=!0,u.empty(this.$refs.nscroll)||this.$refs.nscroll.stop())}).catch(c=>{this.data_done=!0,u.empty(this.$refs.nscroll)||this.$refs.nscroll.stop()}).then(c=>{i(),this.loading=!1,u.empty(this.is_refresh)||this.is_refresh()})},resetPagination(){this.page=0,this.data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()},showRequestPayout(){this.$refs.request_payout.dialog=!0},afterPayout(){this.refresh()}}},M={class:"row q-gutter-sm items-center"},W={class:"col"},z={class:"text-subtitle1"},F={class:"text-caption text-grey"},Y={class:"col-3"},j={class:"text-caption text-grey line-normal"},H={class:"text-subtitle1"},X={key:0,class:"full-width text-center flex flex-center",style:{"min-height":"calc(40vh)"}},Z={class:"text-grey q-ma-none"};function G(e,i,c,J,d,o){const B=g("WidgetMerchantBalance"),P=g("TableSkeleton"),C=g("RequestPayout");return n(),f(N,{onRefresh:o.refresh},{default:a(()=>[t(V,{class:h([{"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode},"q-pr-md q-pl-md"])},{default:a(()=>[s("div",{class:h(["radius8 bg-whitex q-pa-sm",{"bg-grey600 text-white":e.$q.dark.mode,"bg-white":!e.$q.dark.mode}])},[s("div",M,[s("div",W,[s("div",z,r(e.$t("Earnings")),1),s("div",F,r(e.$t("Your sales, cash in and referral earnings")),1)]),s("div",Y,[s("div",j,r(e.$t("Available Balance")),1),s("div",H,[t(B,{ref:"merchant"},null,512)])])])],2),t(x,{class:"q-pa-sm"}),t(Q,{color:"green",label:e.$t("Create a Transaction"),unelevated:"","no-caps":"",class:"fit","icon-right":"arrow_drop_down",size:"lg"},{default:a(()=>[t(A,{fit:"","auto-close":""},{default:a(()=>[t(R,null,{default:a(()=>[t(v,{clickable:"",onClick:o.showRequestPayout},{default:a(()=>[t(y,null,{default:a(()=>[_(r(e.$t("Request Payout")),1)]),_:1})]),_:1},8,["onClick"]),t(D)]),_:1})]),_:1})]),_:1},8,["label"]),t(x,{class:"q-pa-sm"}),t(E,{ref:"nscroll",onLoad:o.List},{default:a(()=>[t(R,{separator:"",class:h(["bg-whitex",{"bg-grey600 text-white":e.$q.dark.mode,"bg-white":!e.$q.dark.mode}])},{default:a(()=>[(n(!0),m(k,null,$(d.data,w=>(n(),m(k,{key:w},[(n(!0),m(k,null,$(w,l=>(n(),f(v,{key:l,clickable:""},{default:a(()=>[t(y,null,{default:a(()=>[t(q,{caption:""},{default:a(()=>[_(r(l.transaction_date),1)]),_:2},1024),t(q,null,{default:a(()=>[_(r(l.transaction_description),1)]),_:2},1024)]),_:2},1024),t(y,{side:""},{default:a(()=>[t(q,{class:h(["text-right",{"text-green":o.transactionClass(l.transaction_type),"text-red":!o.transactionClass(l.transaction_type)}])},{default:a(()=>[_(r(o.transactionSign(l.transaction_type))+" "+r(l.transaction_amount),1)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024))),128))],64))),128))]),_:1},8,["class"])]),loading:a(()=>[d.page<=0?(n(),f(P,{key:0,rows:10})):d.data.length>1?(n(),f(P,{key:1,rows:1})):S("",!0)]),_:1},8,["onLoad"]),!o.hasData&&!d.loading?(n(),m("div",X,[s("p",Z,r(e.$t("No available data")),1)])):S("",!0),t(C,{ref:"request_payout",onAfterPayout:o.afterPayout},null,8,["onAfterPayout"]),t(I,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:a(()=>[t(Q,{fab:"",icon:"keyboard_arrow_up",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",dense:"",padding:"3px"},null,8,["color","text-color"])]),_:1})]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var fe=L(O,[["render",G]]);export{fe as default};
