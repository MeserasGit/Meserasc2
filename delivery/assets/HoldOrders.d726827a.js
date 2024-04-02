import{Q as f}from"./QToolbarTitle.5ecfa0aa.js";import{Q as c}from"./QSpace.fb5f89a7.js";import{_ as m,u as p,A as l,n as h,p as g,q as s,d as r,b6 as b,Z as q,V as _,X as d,a1 as n,b7 as S,aq as y,am as i,a2 as w,aO as C}from"./index.9022de34.js";import{Q}from"./QToolbar.2a2e526c.js";import{Q as k}from"./QForm.a6c6ef66.js";import{C as v}from"./ClosePopup.6b679ccd.js";import{u as V}from"./CartStore.2adbc30c.js";const D={name:"HoldOrders",setup(){const e=p(),t=V();return{DataStore:e,CartStore:t}},data(){return{loading:!1,dialog:!1,order_reference:""}},methods:{beforeShow(){this.order_reference=l.empty(this.CartStore.getOrderReference)?"":this.CartStore.getOrderReference},onSubmit(){this.loading=!0,l.fetchDataByTokenPost("applyHoldOrder","order_reference="+this.order_reference+"&cart_uuid="+this.DataStore.cart_uuid).then(e=>{this.dialog=!1,l.notify("light-green",e.msg,"check_circle",this.$q),this.DataStore.place_data=[],this.DataStore.cart_uuid="",this.$emit("afterHoldorders")}).catch(e=>{l.notify("red-5",e,"error_outline",this.$q)}).then(e=>{this.loading=!1})}}},$={class:"text-body2 q-ma-none font12"},x={class:"row fit q-gutter-sm"},O={class:"col"},B={class:"col"};function T(e,t,H,P,a,u){return h(),g(C,{modelValue:a.dialog,"onUpdate:modelValue":t[2]||(t[2]=o=>a.dialog=o),class:"rounded-borders-top",onBeforeShow:u.beforeShow,"full-width":"",persistent:""},{default:s(()=>[r(b,null,{default:s(()=>[r(Q,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:s(()=>[r(f,{class:q(["text-darkx text-weight-bold",{"text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}]),style:{overflow:"inherit"}},{default:s(()=>[_(d(e.$t("Hold Order")),1)]),_:1},8,["class"]),r(c),r(n,{onClick:t[0]||(t[0]=o=>a.dialog=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),r(S,null,{default:s(()=>[r(k,{onSubmit:u.onSubmit},{default:s(()=>[r(y,{modelValue:a.order_reference,"onUpdate:modelValue":t[1]||(t[1]=o=>a.order_reference=o),label:e.$t("Order Reference"),"stack-label":"",outlined:"",color:"grey-5",rules:[o=>o&&o.length>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),i("p",$,d(e.$t("The current order will be set on hold. You can retrieve this order from the pending tabs."))+" "+d(e.$t("Providing a reference to it might help you to identify the order more quickly.")),1),r(c,{class:"q-pa-sm"}),i("div",x,[i("div",O,[w(r(n,{label:e.$t("Cancel"),color:"dark","no-caps":"",unelevated:"",class:"fit radius28 q-pl-lg q-pr-lg q-pt-sm q-pb-sm",style:{height:"40px"}},null,8,["label"]),[[v]])]),i("div",B,[r(n,{type:"submit",color:"green","text-color":"white",label:e.$t("Confirm"),unelevated:"",class:"fit radius28 q-pl-lg q-pr-lg q-pt-sm q-pb-sm",style:{height:"40px"},"no-caps":"",loading:a.loading},null,8,["label","loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue","onBeforeShow"])}var X=m(D,[["render",T]]);export{X as default};
