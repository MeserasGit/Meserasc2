import{_ as y,b3 as C,aw as p,u as $,m as i,n as s,p as n,q as t,d as a,ao as _,$ as c,a1 as d,V as v,X as Q,ap as w,F as h,Z as u,ax as f}from"./index.9022de34.js";import{Q as S}from"./QToolbarTitle.5ecfa0aa.js";import{Q as V}from"./QCircularProgress.54b08c59.js";import{Q as D}from"./QBadge.3c540cd9.js";import{Q as P}from"./QToolbar.2a2e526c.js";import{Q as q}from"./QHeader.522a2ada.js";import{Q as T}from"./QDrawer.571f8654.js";import{Q as l}from"./QRouteTab.4d4640a1.js";import{Q as B}from"./QTabs.a2ac70b0.js";import{Q as O}from"./QFooter.864bb069.js";import{Q as A,a as L}from"./QLayout.1ea82326.js";import{u as N}from"./SearchStore.4dfed49a.js";import{u as E}from"./CartStore.2adbc30c.js";import"./format.3e32b8d9.js";import"./QResizeObserver.129b050c.js";import"./TouchPan.f449f070.js";import"./touch.3df10340.js";import"./selection.5d84a74a.js";import"./rtl.b51694b1.js";const F=C({name:"LayoutPos",components:{NotiButton:p(()=>f(()=>import("./NotiButton.3261e248.js"),["assets/NotiButton.3261e248.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QBadge.3c540cd9.js","assets/index.7af6e0f9.js","assets/UserStore.e6e92fbc.js"])),PosCart:p(()=>f(()=>import("./PosCart.f759a4a0.js"),["assets/PosCart.f759a4a0.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QBadge.3c540cd9.js","assets/QSpace.fb5f89a7.js","assets/QBtnToggle.28ce7519.js","assets/QImg.ad5480e5.js","assets/QItemLabel.4dae639c.js","assets/QList.da851dcd.js","assets/QAjaxBar.fee622cb.js","assets/format.3e32b8d9.js","assets/CartStore.2adbc30c.js"]))},setup(){const e=$(),o=N(),m=E();return{DataStore:e,SearchStore:o,CartStore:m}},data(){return{online:!0,tab:"home",loading:!1,path:""}},created(){this.$q.dark.set(this.DataStore.dark_mode),this.path=this.$route.path},updated(){this.path=this.$route.path},methods:{searchPage(){switch(console.log(this.$route.path),this.$route.path){case"/pos/on-hold":this.$router.push("/pos-order/search-on-hold");break;case"/pos/list":this.$router.push("/search");break;default:this.DataStore.search_item="",this.$router.push("/search/food");break}},setOnline(){let e=this.online?"Confirm Going Online":"Confirm Going Offline",o=this.online?this.$t("Are you sure you want to take your business online and start accepting orders again?"):this.$t("Are you sure you want to take your business offline temporarily? This will prevent new orders from coming in. Your current orders will still be processed.");this.$q.dialog({title:this.$t(e),message:o,cancel:!0,persistent:!0,ok:{color:"dark",flat:!0,"no-caps":!0,label:this.$t("Confirm")},cancel:{color:"primary",flat:!0,"no-caps":!0,label:this.$t("Cancel")}}).onOk(()=>{this.DataStore.setStoreAvailable(this.online)}).onCancel(()=>{this.online=!this.online}).onDismiss(()=>{})}}});function R(e,o,m,U,H,z){const b=i("NotiButton"),g=i("PosCart"),k=i("router-view");return s(),n(A,{view:"lHh Lpr lFf"},{default:t(()=>[a(q,{class:u({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode}),reveal:"","reveal-offset":"10"},{default:t(()=>[a(P,null,{default:t(()=>[a(_,{modelValue:e.online,"onUpdate:modelValue":[o[0]||(o[0]=r=>e.online=r),e.setOnline],color:"primary",label:e.$t("Online")},null,8,["modelValue","label","onUpdate:modelValue"]),a(S),e.path=="/pos/create"?(s(),c(h,{key:0},[a(d,{round:"",color:"grey",icon:"search",flat:"",onClick:e.searchPage,class:"q-mr-sm"},null,8,["onClick"]),e.CartStore.cart_loading?(s(),n(V,{key:0,rounded:"",value:61,size:"18px",color:"primary",indeterminate:""})):(s(),n(d,{key:1,dense:"",color:"purple",round:"",icon:"las la-shopping-cart",unelevated:"",onClick:o[1]||(o[1]=r=>e.CartStore.cart_drawer=!e.CartStore.cart_drawer)},{default:t(()=>[e.CartStore.hasData?(s(),n(D,{key:0,color:"red",rounded:"",floating:""},{default:t(()=>[v(Q(e.CartStore.getCartCount),1)]),_:1})):w("",!0)]),_:1}))],64)):(s(),c(h,{key:1},[a(b),a(d,{round:"",color:"grey",icon:"search",flat:"",onClick:e.searchPage},null,8,["onClick"])],64))]),_:1})]),_:1},8,["class"]),a(T,{modelValue:e.CartStore.cart_drawer,"onUpdate:modelValue":o[2]||(o[2]=r=>e.CartStore.cart_drawer=r),side:"right",overlay:"",behavior:"mobile",width:250,dark:""},{default:t(()=>[a(g,{ref:"cart"},null,512)]),_:1},8,["modelValue"]),a(O,{bordered:"",class:"bg-white text-dark modified-footer"},{default:t(()=>[a(B,{modelValue:e.tab,"onUpdate:modelValue":o[3]||(o[3]=r=>e.tab=r),dense:"","indicator-color":"transparent","active-color":"secondary",align:"justify",class:u({"bg-mydark text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode})},{default:t(()=>[a(l,{name:"home",icon:"las la-home",label:e.$t("Home"),"no-caps":"",to:"/dashboard",class:"routertab_small"},null,8,["label"]),a(l,{name:"delivery",icon:"o_delivery_dining",label:e.$t("Delivery"),"no-caps":"",to:"/services/delivery_settings",class:"routertab_small"},null,8,["label"]),a(l,{name:"dynamic_rate",icon:"o_add_location_alt",label:e.$t("Rates"),"no-caps":"",to:"/services/charges_table",class:"routertab_small"},null,8,["label"]),a(l,{name:"pickup",icon:"o_hail",label:e.$t("Pickup"),"no-caps":"",to:"/services/settings_pickup",class:"routertab_small"},null,8,["label"]),a(l,{name:"dinein",icon:"o_dining",label:e.$t("Dinein"),"no-caps":"",to:"/services/settings_dinein",class:"routertab_small"},null,8,["label"])]),_:1},8,["modelValue","class"])]),_:1}),a(L,{class:u({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:t(()=>[a(k)]),_:1},8,["class"])]),_:1})}var ie=y(F,[["render",R]]);export{ie as default};
