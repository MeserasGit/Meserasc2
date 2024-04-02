import{_ as R,aw as S,u as E,A as d,m as w,n,p as c,q as t,d as e,a1 as y,V as l,X as o,$ as p,ap as h,F as k,Y as I,Z as T,am as B,a3 as _,a4 as f,a5 as O,a0 as P,ax as C,a2 as z}from"./index.9022de34.js";import{Q as N}from"./QToolbarTitle.5ecfa0aa.js";import{Q as U}from"./QToolbar.2a2e526c.js";import{Q as F}from"./QHeader.522a2ada.js";import{Q as j}from"./QInnerLoading.788e47b1.js";import{Q as H}from"./QImg.ad5480e5.js";import{Q as r}from"./QItemLabel.4dae639c.js";import{Q as v}from"./QList.da851dcd.js";import{Q as q}from"./QTab.43d13fc7.js";import{Q as G}from"./QTabs.a2ac70b0.js";import{Q as M,a as D}from"./QTabPanels.2669cc39.js";import{Q as X,a as Y}from"./QStepper.a7881826.js";import{Q as Z}from"./QInfiniteScroll.0e0d2cfe.js";import{Q as J}from"./QMenu.d414cf74.js";import{Q as K}from"./QFooter.864bb069.js";import{Q as W}from"./QPage.a79a1249.js";import{Q as $}from"./QPullToRefresh.dea2c8d3.js";import{C as x}from"./ClosePopup.6b679ccd.js";import{u as ee}from"./AccessStore.4066b28f.js";import"./QResizeObserver.129b050c.js";import"./rtl.b51694b1.js";import"./use-panel.09edc9f3.js";import"./touch.3df10340.js";import"./selection.5d84a74a.js";import"./use-cache.b0833c75.js";import"./QSlideTransition.3f201d8d.js";import"./TouchPan.f449f070.js";import"./format.3e32b8d9.js";const te={name:"ReservationOverview",components:{TableSummary:S(()=>C(()=>import("./TableSummary.cc883ec0.js"),["assets/TableSummary.cc883ec0.js","assets/QSkeleton.5de72ea8.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/swiper.min.86854748.js","assets/swiper.min.b39a1361.css"])),TableBookingList:S(()=>C(()=>import("./TableBookingList.3476d3b6.js"),["assets/TableBookingList.3476d3b6.js","assets/QSpace.fb5f89a7.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QBadge.3c540cd9.js","assets/QItemLabel.4dae639c.js","assets/QList.da851dcd.js","assets/AccessStore.4066b28f.js"])),TableSkeleton:S(()=>C(()=>import("./TableSkeleton.dba5d973.js"),["assets/TableSkeleton.dba5d973.js","assets/QSkeleton.5de72ea8.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QItemLabel.4dae639c.js","assets/QList.da851dcd.js"]))},setup(){const a=E(),i=ee();return{DataStore:a,AccessStore:i}},data(){return{data:[],id:"",loading:!1,loading_update:!1,room_names:[],table_names:[],tab:"details",step:0,loading_summary:!0,data_summary:[],timeline:[],booking_loading:!1,booking_data:[],page:0,is_refresh:void 0,data_done:!1,status:[],customer_data:[]}},created(){this.id=this.$route.query.id,this.getBookingDetails(),this.reservationSummary()},updated(){this.id=this.$route.query.id,this.tab="details",this.getBookingDetails(),this.reservationSummary()},computed:{getData(){return this.data},hasData(){return Object.keys(this.data).length>0}},methods:{refresh(a){this.getBookingDetails(a),this.reservationSummary()},TabChange(a){this.booking_data=[],this.page=0},reservationList(a,i){this.booking_loading=!0,d.fetchDataByTokenPost("CustomerReservationList","id="+this.id+"&page="+a).then(g=>{g.code==1?(this.page=a,this.booking_data.push(g.details.data),this.status=g.details.status_list):g.code==3&&(this.data_done=!0,d.empty(this.$refs.nscroll)||this.$refs.nscroll.stop())}).catch(g=>{this.data_done=!0,d.empty(this.$refs.nscroll)||this.$refs.nscroll.stop()}).then(g=>{i(),this.booking_loading=!1,d.empty(this.is_refresh)||this.is_refresh()})},resetPagination(){this.page=0,this.booking_data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()},getBookingDetails(a){d.empty(a)&&(this.loading=!0),d.fetchDataByTokenPost("getBookingDetails","id="+this.id).then(i=>{this.data=i.details.data,this.room_names=i.details.room_names,this.table_names=i.details.table_names,this.timeline=i.details.timeline,this.customer_data=i.details.customer_data}).catch(i=>{}).then(i=>{this.loading=!1,d.empty(a)||a()})},reservationSummary(){this.loading_summary=!0,d.fetchDataByTokenPost("BookingCustomerSummary","id="+this.id).then(a=>{this.data_summary=a.details.data}).catch(a=>{}).then(a=>{this.loading_summary=!1})},updateStatus(a){d.showLoadingBox("",this.$q),this.loading_update=!0,d.fetchDataByTokenPost("UpdateBookingStatus","id="+this.id+"&status="+a).then(i=>{this.BookingDetails(),d.notify(this.$q.dark.mode?"grey600":"light-green",i.msg,"check_circle",this.$q)}).catch(i=>{d.notify("dark",i,"error",this.$q)}).then(i=>{d.hideLoadingBox(this.$q),this.loading_update=!1})},BookingDetails(){this.$q.loading.show({spinnerSize:30}),d.fetchDataByTokenPost("getBookingDetails","id="+this.id).then(a=>{this.data=a.details.data,this.room_names=a.details.room_names,this.table_names=a.details.table_names,this.timeline=a.details.timeline,this.customer_data=a.details.customer_data}).catch(a=>{}).then(a=>{this.$q.loading.hide()})},confirmDelete(){this.$q.dialog({title:this.$t("Delete Confirmation"),message:this.$t("Are you sure you want to permanently delete the selected item?"),transitionShow:"fade",transitionHide:"fade",cancel:!0,ok:{unelevated:!0,color:"primary",rounded:!1,"text-color":"white",size:"md",label:this.$t("Okay"),"no-caps":!0},cancel:{unelevated:!0,color:"blue",rounded:!1,"text-color":"white",size:"md",label:this.$t("Cancel"),"no-caps":!0}}).onOk(()=>{this.deleteBooking()}).onCancel(()=>{}).onDismiss(()=>{})},deleteBooking(){this.$q.loading.show({spinnerSize:30,spinnerColor:"primary"}),d.fetchDataByTokenPost("deleteBooking","id="+this.id).then(a=>{d.notify("light-green",a.msg,"check_circle",this.$q),this.$router.replace({path:"/table/menu"})}).catch(a=>{}).then(a=>{this.$q.loading.hide()})}}},ae={key:1,class:"text-grey"},se={key:2,class:"border-grey radius28 { q-pa-xs"},oe={key:0,class:"row q-gutter-sm full-width"},le={class:"col"},ie={class:"col"};function re(a,i,g,b,s,u){const V=w("TableSummary"),A=w("TableBookingList"),L=w("TableSkeleton");return n(),c($,{onRefresh:u.refresh},{default:t(()=>[e(F,{class:T({"bg-mydark text-white":a.$q.dark.mode,"bg-white text-dark":!a.$q.dark.mode})},{default:t(()=>[e(U,null,{default:t(()=>[e(y,{onClick:i[0]||(i[0]=m=>a.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:a.$q.dark.mode?"white":"dark"},null,8,["color"]),e(N,{class:"text-weight-bold"},{default:t(()=>[l(o(a.$t("Overview")),1)]),_:1}),b.AccessStore.hasAccess("booking.reservation_delete")?(n(),p(k,{key:0},[u.hasData?(n(),c(y,{key:0,onClick:u.confirmDelete,flat:"",round:"",dense:"",icon:"las la-trash-alt",color:a.$q.dark.mode?"white":"dark"},null,8,["onClick","color"])):h("",!0)],64)):h("",!0)]),_:1}),e(I)]),_:1},8,["class"]),e(W,{class:T([{"bg-mydark text-white":a.$q.dark.mode,"bg-white text-dark":!a.$q.dark.mode,"flex flex-center":!u.hasData&&!s.loading},"q-pa-md"])},{default:t(()=>[s.loading?(n(),c(j,{key:0,showing:!0,color:"primary",size:"md"})):h("",!0),!u.hasData&&!s.loading?(n(),p("div",ae,[B("p",null,o(a.$t("No data available")),1)])):(n(),p(k,{key:2},[u.hasData?(n(),c(v,{key:0},{default:t(()=>[e(_,null,{default:t(()=>[e(f,{avatar:""},{default:t(()=>[e(O,null,{default:t(()=>[e(H,{style:{height:"40px",width:"40px"},src:s.customer_data.avatar,"spinner-size":"sm","spinner-color":"primary"},null,8,["src"])]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(r,null,{default:t(()=>[l(o(s.customer_data.first_name)+" "+o(s.customer_data.last_name),1)]),_:1}),e(r,{caption:""},{default:t(()=>[l(o(a.$t("Phone"))+": "+o(s.customer_data.contact_phone),1)]),_:1}),e(r,{caption:""},{default:t(()=>[l(o(a.$t("Email"))+": "+o(s.customer_data.email_address),1)]),_:1})]),_:1})]),_:1})]),_:1})):h("",!0),u.hasData?(n(),c(V,{key:1,ref:"table_summary",loading:s.loading_summary,data:s.data_summary},null,8,["loading","data"])):h("",!0),u.hasData?(n(),p("div",se,[e(G,{modelValue:s.tab,"onUpdate:modelValue":[i[1]||(i[1]=m=>s.tab=m),u.TabChange],dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":"","no-caps":""},{default:t(()=>[e(q,{name:"details",label:a.$t("Details")},null,8,["label"]),e(q,{name:"customer",label:a.$t("Customer")},null,8,["label"]),e(q,{name:"timeline",label:a.$t("Timeline")},null,8,["label"]),e(q,{name:"reservation",label:a.$t("Reservation")},null,8,["label"])]),_:1},8,["modelValue","onUpdate:modelValue"])])):h("",!0),u.hasData?(n(),c(M,{key:3,modelValue:s.tab,"onUpdate:modelValue":i[3]||(i[3]=m=>s.tab=m)},{default:t(()=>[e(D,{name:"details"},{default:t(()=>[e(v,null,{default:t(()=>[e(_,{class:"q-pa-none"},{default:t(()=>[e(f,null,{default:t(()=>[e(r,{lines:"1"},{default:t(()=>[l(o(a.$t("Reservation ID")),1)]),_:1}),e(r,{caption:""},{default:t(()=>[l(o(s.data.reservation_id),1)]),_:1})]),_:1})]),_:1}),e(_,{class:"q-pa-none"},{default:t(()=>[e(f,null,{default:t(()=>[e(r,{lines:"1"},{default:t(()=>[l(o(a.$t("Guest")),1)]),_:1}),e(r,{caption:""},{default:t(()=>[l(o(s.data.guest_number),1)]),_:1})]),_:1})]),_:1}),e(_,{class:"q-pa-none"},{default:t(()=>[e(f,null,{default:t(()=>[e(r,{lines:"1"},{default:t(()=>[l(o(a.$t("Date/Time")),1)]),_:1}),e(r,{caption:""},{default:t(()=>[l(o(s.data.reservation_date)+" "+o(s.data.reservation_time),1)]),_:1})]),_:1})]),_:1}),e(_,{class:"q-pa-none"},{default:t(()=>[e(f,null,{default:t(()=>[e(r,{lines:"1"},{default:t(()=>[l(o(a.$t("Table/Room")),1)]),_:1}),e(r,{caption:""},{default:t(()=>[s.table_names[s.data.table_id]?(n(),p(k,{key:0},[l(o(s.table_names[s.data.table_id]),1)],64)):h("",!0),l(" / "),s.room_names[s.data.room_id]?(n(),p(k,{key:1},[l(o(s.room_names[s.data.room_id]),1)],64)):h("",!0)]),_:1})]),_:1})]),_:1}),e(_,{class:"q-pa-none"},{default:t(()=>[e(f,null,{default:t(()=>[e(r,{lines:"1"},{default:t(()=>[l(o(a.$t("Date booked")),1)]),_:1}),e(r,{caption:""},{default:t(()=>[l(o(s.data.reservation_datetime),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(D,{name:"customer"},{default:t(()=>[e(v,null,{default:t(()=>[e(_,{class:"q-pa-none"},{default:t(()=>[e(f,null,{default:t(()=>[e(r,{lines:"1"},{default:t(()=>[l(o(a.$t("Name")),1)]),_:1}),e(r,{caption:""},{default:t(()=>[l(o(s.data.full_name),1)]),_:1})]),_:1})]),_:1}),e(_,{class:"q-pa-none"},{default:t(()=>[e(f,null,{default:t(()=>[e(r,{lines:"1"},{default:t(()=>[l(o(a.$t("Email")),1)]),_:1}),e(r,{caption:""},{default:t(()=>[l(o(s.data.email_address),1)]),_:1})]),_:1})]),_:1}),e(_,{class:"q-pa-none"},{default:t(()=>[e(f,null,{default:t(()=>[e(r,{lines:"1"},{default:t(()=>[l(o(a.$t("Phone")),1)]),_:1}),e(r,{caption:""},{default:t(()=>[l(o(s.data.contact_phone),1)]),_:1})]),_:1})]),_:1}),e(_,{class:"q-pa-none"},{default:t(()=>[e(f,null,{default:t(()=>[e(r,{lines:"1"},{default:t(()=>[l(o(a.$t("Special Request")),1)]),_:1}),e(r,{caption:""},{default:t(()=>[l(o(s.data.special_request),1)]),_:1}),s.data.cancellation_reason?(n(),c(r,{key:0,caption:""},{default:t(()=>[l(o(a.$t("CANCELLATION NOTES"))+" = "+o(s.data.cancellation_reason),1)]),_:1})):h("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),e(D,{name:"timeline",class:"no-shadow q-pl-none q-pr-none"},{default:t(()=>[e(X,{modelValue:s.step,"onUpdate:modelValue":i[2]||(i[2]=m=>s.step=m),vertical:"",color:"dark","active-color":"blue","inactive-color":"grey-5",animated:"",class:"no-shadow q-pa-none","active-icon":"done"},{default:t(()=>[(n(!0),p(k,null,P(s.timeline,(m,Q)=>(n(),c(Y,{key:m,name:Q,title:m.content,caption:m.timestamp,done:!1,icon:"fiber_manual_record"},null,8,["name","title","caption"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(D,{name:"reservation",class:"no-shadow q-pl-none q-pr-none"},{default:t(()=>[e(Z,{ref:"nscroll",onLoad:u.reservationList,offset:250},{loading:t(()=>[s.page<=0?(n(),c(L,{key:0,rows:10})):(n(),c(L,{key:1,rows:1}))]),default:t(()=>[e(A,{data:s.booking_data,status:s.status},null,8,["data","status"])]),_:1},8,["onLoad"])]),_:1})]),_:1},8,["modelValue"])):h("",!0)],64)),!s.loading&&u.hasData?(n(),c(K,{key:3,class:T(["bg-whitex q-pl-md q-pr-md q-pt-sm q-pb-sm",{"bg-grey600 text-white":a.$q.dark.mode,"bg-white":!a.$q.dark.mode}])},{default:t(()=>[b.AccessStore.hasAccess("booking.update_status")?(n(),p("div",oe,[B("div",le,[e(y,{class:"full-width radius8",size:"lg",color:"primary","no-caps":"",unelevated:"",to:{path:"/tables/update_reservation",query:{id:s.id}}},{default:t(()=>[l(o(a.$t("Edit")),1)]),_:1},8,["to"])]),B("div",ie,[e(y,{class:"full-width radius8",size:"lg",color:"blue","no-caps":"",unelevated:"",label:b.DataStore.getBookingStatus[s.data.status]?b.DataStore.getBookingStatus[s.data.status]:s.data.status,outline:"",loading:s.loading_update},{default:t(()=>[e(J,null,{default:t(()=>[e(v,{style:{"min-width":"200px"},separator:""},{default:t(()=>[(n(!0),p(k,null,P(b.DataStore.getBookingStatus,(m,Q)=>z((n(),c(_,{key:m,clickable:"",onClick:ne=>u.updateStatus(Q)},{default:t(()=>[e(f,null,{default:t(()=>[l(o(m),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[x]])),128))]),_:1})]),_:1})]),_:1},8,["label","loading"])])])):h("",!0)]),_:1},8,["class"])):h("",!0)]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var Oe=R(te,[["render",re]]);export{Oe as default};
