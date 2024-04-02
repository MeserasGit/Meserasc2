import{_ as b,aw as $,A as h,m as w,n as r,p as c,q as e,d as t,a1 as x,V as i,X as s,Y as q,Z as k,$ as u,a0 as Q,F as _,ap as y,am as v,ax as L,a3 as P,a4 as T}from"./index.9022de34.js";import{Q as B}from"./QToolbarTitle.5ecfa0aa.js";import{Q as S}from"./QToolbar.2a2e526c.js";import{Q as C}from"./QHeader.522a2ada.js";import{Q as m}from"./QItemLabel.4dae639c.js";import{Q as D}from"./QList.da851dcd.js";import{Q as I}from"./QInfiniteScroll.0e0d2cfe.js";import{Q as O}from"./QPage.a79a1249.js";import{Q as V}from"./QPullToRefresh.dea2c8d3.js";import"./QResizeObserver.129b050c.js";import"./TouchPan.f449f070.js";import"./touch.3df10340.js";import"./selection.5d84a74a.js";import"./format.3e32b8d9.js";const N={name:"OrderTipsTransactions",components:{TableSkeleton:$(()=>L(()=>import("./TableSkeleton.dba5d973.js"),["assets/TableSkeleton.dba5d973.js","assets/QSkeleton.5de72ea8.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QItemLabel.4dae639c.js","assets/QList.da851dcd.js"]))},data(){return{loading:!1,id:"",data:[],page:0,is_refresh:void 0}},computed:{hasBalance(){return Object.keys(this.balance_data).length>0},hasData(){return Object.keys(this.data).length>0}},created(){this.id=this.$route.query.id},methods:{refresh(a){this.is_refresh=a,this.resetPagination()},List(a,d){this.loading=!0,h.fetchDataByTokenPost("driverTipsTransaction","&page="+a+"&id="+this.id).then(o=>{o.code==1?(this.page=a,this.data.push(o.details.data)):o.code==3&&(this.data_done=!0,h.empty(this.$refs.nscroll)||this.$refs.nscroll.stop())}).catch(o=>{this.data_done=!0,h.empty(this.$refs.nscroll)||this.$refs.nscroll.stop()}).then(o=>{d(),this.loading=!1,h.empty(this.is_refresh)||this.is_refresh()})},resetPagination(){this.page=0,this.data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()}}},A={key:0,class:"full-width text-center flex flex-center"},R={class:"text-grey q-ma-none"};function E(a,d,o,j,n,f){const g=w("TableSkeleton");return r(),c(V,{onRefresh:f.refresh},{default:e(()=>[t(C,{class:k({"bg-mydark text-white":a.$q.dark.mode,"bg-white text-dark":!a.$q.dark.mode})},{default:e(()=>[t(S,null,{default:e(()=>[t(x,{onClick:d[0]||(d[0]=p=>a.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:a.$q.dark.mode?"white":"dark"},null,8,["color"]),t(B,{class:"text-weight-bold"},{default:e(()=>[i(s(a.$t("Order Tips")),1)]),_:1})]),_:1}),t(q)]),_:1},8,["class"]),t(O,{class:k({"bg-mydark text-white":a.$q.dark.mode,"bg-white text-dark":!a.$q.dark.mode,"flex flex-center":!f.hasData&&!n.loading})},{default:e(()=>[t(I,{ref:"nscroll",onLoad:f.List,offset:250},{default:e(()=>[t(D,{separator:""},{default:e(()=>[(r(!0),u(_,null,Q(n.data,p=>(r(),u(_,{key:p},[(r(!0),u(_,null,Q(p,l=>(r(),c(P,{key:l},{default:e(()=>[t(T,null,{default:e(()=>[t(m,{caption:""},{default:e(()=>[i(s(l.transaction_date),1)]),_:2},1024),t(m,null,{default:e(()=>[i("#"+s(l.order_id)+" - "+s(l.restaurant_name),1)]),_:2},1024),t(m,null,{default:e(()=>[i(s(l.customer_name),1)]),_:2},1024)]),_:2},1024),t(T,{side:""},{default:e(()=>[t(m,{class:"text-right text-green"},{default:e(()=>[i(s(l.total),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))],64))),128))]),_:1})]),loading:e(()=>[n.page<=0?(r(),c(g,{key:0,rows:10})):n.data.length>1?(r(),c(g,{key:1,rows:1})):y("",!0)]),_:1},8,["onLoad"]),!f.hasData&&!n.loading?(r(),u("div",A,[v("p",R,s(a.$t("No available data")),1)])):y("",!0)]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var ae=b(N,[["render",E]]);export{ae as default};
