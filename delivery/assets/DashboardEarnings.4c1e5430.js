import{Q as c}from"./QSkeleton.5de72ea8.js";import{_ as g,u as w,m as u,n as e,$ as n,d as a,q as s,b7 as y,F as o,am as r,X as i,b6 as S,p,a0 as h,b8 as f}from"./index.9022de34.js";import{Q as b}from"./QSpace.fb5f89a7.js";import{S as k,a as D}from"./swiper.min.86854748.js";const x={name:"DashboardEarnings",props:["is_done"],components:{Swiper:k,SwiperSlide:D},data(){return{}},setup(){return{DataStore:w()}},created(){Object.keys(this.DataStore.earning_summary).length<=0&&this.DataStore.getEarningSummary()},methods:{}},q={class:"no-margin"},v={class:"no-margin text-grey"},B={class:"text-h5 text-primary text-weight-bold"},Q={class:"font12"},V={class:"text-weight-bold"};function E(l,C,P,d,$,F){const m=u("swiper-slide"),_=u("swiper");return e(),n(o,null,[a(S,{class:"q-pa-none no-shadow"},{default:s(()=>[a(y,{class:"q-pa-sm"},{default:s(()=>[d.DataStore.loading_earning?(e(),n(o,{key:0},[a(c,{type:"text",style:{width:"50%"}}),a(c,{type:"text",style:{width:"90%"}}),a(c,{type:"text",style:{width:"40%"}})],64)):(e(),n(o,{key:1},[r("h6",q,i(l.$t("Earnings")),1),r("p",v,i(l.$t("Your sales, cash in and referral earnings")),1),r("div",B,i(d.DataStore.earning_summary.data.balance),1)],64))]),_:1})]),_:1}),a(b,{class:"q-pa-sm"}),d.DataStore.loading_earning?(e(),p(_,{key:0,slidesPerView:2.3,spaceBetween:10,class:"q-mb-md"},{default:s(()=>[(e(),n(o,null,h(3,t=>a(m,{key:t},{default:s(()=>[a(c,{height:"50px",square:""})]),_:2},1024)),64))]),_:1},8,["slidesPerView"])):(e(),p(_,{key:1,slidesPerView:2.3,spaceBetween:10,onSwiper:l.onSwiper,class:"q-mb-md"},{default:s(()=>[(e(!0),n(o,null,h(d.DataStore.earning_summary.sales,t=>(e(),p(m,{key:t},{default:s(()=>[r("div",{class:"text-white q-pa-sm radius8",style:f(`background:${t.color}`)},[r("div",Q,i(t.label),1),r("div",V,i(t.value),1)],4)]),_:2},1024))),128))]),_:1},8,["slidesPerView","onSwiper"]))],64)}var O=g(x,[["render",E]]);export{O as default};
