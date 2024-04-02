import{_ as b,A as l,m as y,n as s,p as i,q as r,d as a,a1 as k,V as S,X as m,Y as q,Z as n,$ as g,am as p,F as M,ap as $}from"./index.9022de34.js";import{Q}from"./QToolbarTitle.5ecfa0aa.js";import{Q as v}from"./QToolbar.2a2e526c.js";import{Q as C}from"./QHeader.522a2ada.js";import{Q as w}from"./QInnerLoading.788e47b1.js";import{Q as A}from"./QFooter.864bb069.js";import{Q as T}from"./QPage.a79a1249.js";import{Q as V}from"./QPullToRefresh.dea2c8d3.js";import{u as B}from"./MenuStore.3c045915.js";import{d as N}from"./vuedraggable.umd.2dd4f3c9.js";import"./QResizeObserver.129b050c.js";import"./TouchPan.f449f070.js";import"./touch.3df10340.js";import"./selection.5d84a74a.js";import"./format.3e32b8d9.js";import"./vue.runtime.esm-bundler.61a80ba4.js";const z={name:"AddonCategorySort",components:{draggable:N},setup(){return{MenuStore:B()}},data(){return{data:[],loading:!1,enabled:!0,category:[]}},created(){this.MenuStore.geStoreAddonMenu()},methods:{refresh(e){this.MenuStore.geStoreAddonMenu(e)},submit(){this.loading=!0;let e=[];Object.keys(this.MenuStore.addon).length>0&&Object.entries(this.MenuStore.addon).forEach(([o,u])=>{e.push(u.subcat_id)}),l.fetchDataByToken("SortAddonCategory",{addoncategory:e}).then(o=>{l.notify(this.$q.dark.mode?"grey600":"light-green",o.msg,"check_circle",this.$q)}).catch(o=>{l.notify("dark",o,"error",this.$q)}).then(o=>{this.loading=!1})}}},D={key:1},E=["innerHTML"];function F(e,o,u,t,h,f){const c=y("draggable");return s(),i(V,{onRefresh:f.refresh},{default:r(()=>[a(C,{class:n({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:r(()=>[a(v,null,{default:r(()=>[a(k,{onClick:o[0]||(o[0]=d=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(Q,{class:"text-weight-bold"},{default:r(()=>[S(m(e.$t("Sort Adddon Category")),1)]),_:1})]),_:1}),a(q)]),_:1},8,["class"]),a(T,{class:n([{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode},"q-pa-md"])},{default:r(()=>[t.MenuStore.loading_addon?(s(),i(w,{key:0,showing:!0,color:"primary",size:"md"})):(s(),g(M,{key:1},[t.MenuStore.hasAddon?(s(),g("p",{key:0,class:n({"text-grey300":e.$q.dark.mode,"text-dark":!e.$q.dark.mode})},m(e.$t("Drag the list to sort")),3)):(s(),g("div",D,m(e.$t("No available data")),1)),a(c,{modelValue:t.MenuStore.addon,"onUpdate:modelValue":o[1]||(o[1]=d=>t.MenuStore.addon=d),"item-key":"value",class:"list-group","ghost-class":"ghost",move:e.checkMove,onStart:o[2]||(o[2]=d=>e.dragging=!0),onEnd:o[3]||(o[3]=d=>e.dragging=!1)},{item:r(({element:d})=>[p("div",{class:n(["list-group-item q-pa-sm cursor-pointer q-mb-sm",{"bg-grey600 ":e.$q.dark.mode,"border-grey":!e.$q.dark.mode}])},[p("span",{innerHTML:d.subcategory_name},null,8,E)],2)]),_:1},8,["modelValue","move"])],64)),t.MenuStore.hasAddon?(s(),i(A,{key:2,class:n(["q-pl-md q-pr-md q-pb-xs",{"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode}])},{default:r(()=>[a(k,{onClick:f.submit,color:"primary","text-color":"white",label:e.$t("Save"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":"",loading:h.loading,disable:!t.MenuStore.hasAddonCategory},null,8,["onClick","label","loading","disable"])]),_:1},8,["class"])):$("",!0)]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var x=b(z,[["render",F]]);export{x as default};
