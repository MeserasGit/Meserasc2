import{Q as p}from"./QToolbarTitle.5ecfa0aa.js";import{Q as a}from"./QSpace.fb5f89a7.js";import{_ as f,u as b,n as g,p as y,q as s,d as l,b6 as V,V as v,X as d,a1 as n,b7 as Q,aq as i,am as u,aO as S}from"./index.9022de34.js";import{Q as c}from"./QToolbar.2a2e526c.js";import{Q as h}from"./QSelect.311841ab.js";import{Q as q}from"./QBtnToggle.28ce7519.js";import{Q as w}from"./QFooter.864bb069.js";import{Q as k}from"./QForm.a6c6ef66.js";import{u as D}from"./CartStore.2adbc30c.js";import"./QChip.6eb513c3.js";import"./QItemLabel.4dae639c.js";import"./QMenu.d414cf74.js";import"./selection.5d84a74a.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";import"./QResizeObserver.129b050c.js";const T={name:"DeliveryInformation",data(){return{dialog:!1,loading:!1,formatted_address:"",address1:"",location_name:"",delivery_options:"",delivery_instructions:"",address_label:"Home"}},setup(){const t=D(),o=b();return{CartStore:t,DataStore:o}}},B={class:"text-weight-bold q-mb-sm"},C={class:"border-grey radius8"};function U(t,o,_,m,r,z){return g(),y(S,{modelValue:r.dialog,"onUpdate:modelValue":o[7]||(o[7]=e=>r.dialog=e),class:"rounded-borders-top",onBeforeShow:t.beforeShow,maximized:!0,persistent:"","transition-show":"fade"},{default:s(()=>[l(V,null,{default:s(()=>[l(c,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:s(()=>[l(p,{class:"text-dark text-weight-bold",style:{overflow:"inherit"}},{default:s(()=>[v(d(t.$t("Delivery address")),1)]),_:1}),l(a),l(n,{onClick:o[0]||(o[0]=e=>r.dialog=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),l(Q,null,{default:s(()=>[l(a,{class:"q-pa-sm"}),l(k,{onSubmit:t.onSubmit},{default:s(()=>[l(i,{outlined:"",modelValue:r.formatted_address,"onUpdate:modelValue":o[1]||(o[1]=e=>r.formatted_address=e),label:t.$t("Street name"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[e=>e&&e.length>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),l(i,{outlined:"",modelValue:r.address1,"onUpdate:modelValue":o[2]||(o[2]=e=>r.address1=e),label:t.$t("Street number"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[e=>e&&e.length>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),l(i,{outlined:"",modelValue:r.location_name,"onUpdate:modelValue":o[3]||(o[3]=e=>r.location_name=e),label:t.$t("Aparment, suite or floor"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[e=>e&&e.length>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),l(h,{outlined:"",modelValue:r.delivery_options,"onUpdate:modelValue":o[4]||(o[4]=e=>r.delivery_options=e),options:t.options,label:t.$t("Delivery options")},null,8,["modelValue","options","label"]),l(a,{class:"q-pa-sm"}),l(i,{modelValue:r.delivery_instructions,"onUpdate:modelValue":o[5]||(o[5]=e=>r.delivery_instructions=e),outlined:"",autogrow:"","stack-label":"",label:t.$t("Add delivery instructions"),hint:t.$t("eg. ring the bell after dropoff, leave next to the porch, call upon arrival, etc")},null,8,["modelValue","label","hint"]),l(a,{class:"q-pa-md"}),u("div",B,d(t.$t("Address label")),1),u("div",C,[l(q,{modelValue:r.address_label,"onUpdate:modelValue":o[6]||(o[6]=e=>r.address_label=e),"toggle-color":"green",unelevated:"","no-caps":"",options:m.CartStore.getAddresslabel,spread:"",padding:"10px"},null,8,["modelValue","options"])]),l(a,{class:"q-pa-lg"}),l(w,null,{default:s(()=>[l(n,{type:"submit",color:"primary","text-color":"white",label:t.$t("Save address"),unelevated:"",class:"full-width",size:"lg","no-caps":"",loading:r.loading},null,8,["label","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue","onBeforeShow"])}var R=f(T,[["render",U]]);export{R as default};
