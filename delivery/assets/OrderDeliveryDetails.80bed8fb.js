import{Q as y}from"./QToolbarTitle.5ecfa0aa.js";import{Q as f}from"./QSpace.fb5f89a7.js";import{_ as b,n as o,p as c,q as s,d as l,b6 as h,Z as u,V as g,X as t,a1 as q,am as d,$ as i,F as _,a0 as v,aO as w}from"./index.9022de34.js";import{Q}from"./QToolbar.2a2e526c.js";import{Q as x,a as k}from"./QTimeline.c77a0e67.js";const V={name:"OrderDeliveryDetails",props:["data","order_status","progress"],data(){return{dialog:!1}},setup(){return{}}},D={class:"q-pl-md q-pr-md q-pb-sm"},T={class:"text-weight-bold"},B={class:"timeline-modified q-pl-sm"},C={key:1},S={key:1},H={class:"text-grey"};function N(r,n,a,O,m,z){return o(),c(w,{onShow:r.show,onHide:r.hide,modelValue:m.dialog,"onUpdate:modelValue":n[1]||(n[1]=e=>m.dialog=e),position:"bottom"},{default:s(()=>[l(h,{class:"rounded-borders-top"},{default:s(()=>[l(Q,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:s(()=>[l(y,{class:u(["text-weight-bold",{"text-white":r.$q.dark.mode,"text-dark":!r.$q.dark.mode}]),style:{"text-overflow":"initial"}},{default:s(()=>[g(t(r.$t("History")),1)]),_:1},8,["class"]),l(f),l(q,{onClick:n[0]||(n[0]=e=>m.dialog=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),d("div",D,[d("div",{class:u(["q-pa-sm text-white radius8",{"bg-red":a.progress.order_progress==0,"bg-green":a.progress.order_progress==4,"bg-blue":a.progress.order_progress>0}])},[d("div",T,t(a.progress.order_status),1),d("div",null,t(a.progress.order_status_details),1)],2),d("div",B,[l(x,{color:r.$q.dark.mode?"grey600":"primary"},{default:s(()=>[(o(!0),i(_,null,v(a.data,(e,p)=>(o(),i(_,{key:e},[p==0?(o(),c(k,{key:0,icon:"check"},{title:s(()=>[g(t(e.created_at),1)]),subtitle:s(()=>[a.order_status[e.status]?(o(),i("span",{key:0,class:u({"text-white":r.$q.dark.mode,"text-dark":!r.$q.dark.mode})},t(a.order_status[e.status]),3)):(o(),i("span",C,t(e.status),1))]),default:s(()=>[d("div",null,t(e.remarks),1)]),_:2},1024)):(o(),c(k,{key:1,color:"mygrey"},{title:s(()=>[g(t(e.created_at),1)]),subtitle:s(()=>[a.order_status[e.status]?(o(),i("span",{key:0,class:u({"text-white":r.$q.dark.mode,"text-dark":!r.$q.dark.mode})},t(a.order_status[e.status]),3)):(o(),i("span",S,t(e.status),1))]),default:s(()=>[d("div",H,t(e.remarks),1)]),_:2},1024))],64))),128))]),_:1},8,["color"])])])]),_:1})]),_:1},8,["onShow","onHide","modelValue"])}var Z=b(V,[["render",N]]);export{Z as default};
