import{_ as V,aw as k,ax as q,u as C,A as u,m as w,n as m,p as g,q as i,d as r,b6 as T,Z as _,V as D,X as h,a1 as f,b7 as P,am as a,ap as b,$ as v,aq as c,F as Q,Y as U,d9 as x,aO as F}from"./index.9022de34.js";import{Q as O}from"./QToolbarTitle.5ecfa0aa.js";import{Q as p}from"./QSpace.fb5f89a7.js";import{Q as N}from"./QToolbar.2a2e526c.js";import{Q as B}from"./QBtnToggle.28ce7519.js";import{Q as d}from"./QSelect.311841ab.js";import{Q as z}from"./QForm.a6c6ef66.js";import{u as R}from"./CartStore.2adbc30c.js";import"./QChip.6eb513c3.js";import"./QItemLabel.4dae639c.js";import"./QMenu.d414cf74.js";import"./selection.5d84a74a.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";const A={name:"PosCreatePayment",props:["total"],components:{NumberFormat:k(()=>q(()=>import("./NumberFormat.48673e79.js"),["assets/NumberFormat.48673e79.js","assets/index.9022de34.js","assets/index.8b19a20e.css"]))},data(){return{loading:!1,dialog:!1,whento_deliver:"now",delivery_date:"",delivery_time:"",order_status:"",receive_amount:0,payment_code:"",payment_reference:"",order_notes:"",pay_left:0,change:0,room_id:"",table_id:"",guest_number:1}},setup(){const o=R(),t=C();return{CartStore:o,DataStore:t}},watch:{total(o,t){this.receive_amount=o},receive_amount(o,t){this.pay_left=parseFloat(this.total)-parseFloat(o),this.pay_left<=0&&(this.pay_left=0),this.change=parseFloat(o)-parseFloat(this.total),this.change<=0&&(this.change=0)},CartStore:{immediate:!0,deep:!0,handler(o,t){o.pos_loading||Object.keys(o.pos_attributes).length>0&&(this.order_status=o.pos_attributes.order_status,this.payment_code=o.pos_attributes.default_payment)}}},computed:{getTimelist(){return Object.keys(this.CartStore.pos_attributes).length>0&&this.CartStore.pos_attributes.opening_hours.time_ranges[this.delivery_date]?this.CartStore.pos_attributes.opening_hours.time_ranges[this.delivery_date]:[]},getTableList(){return Object.keys(this.CartStore.pos_attributes).length>0&&this.CartStore.pos_attributes.table_list[this.room_id]?this.CartStore.pos_attributes.table_list[this.room_id]:[]},hasValidPayment(){return!(u.empty(this.DataStore.cart_transaction_type)||this.receive_amount<=0||u.empty(this.payment_code)||this.pay_left.toFixed(2)>0)}},methods:{afterSelectRoom(){this.table_id=""},afterSelectDate(){this.delivery_time=""},onSubmit(){this.$q.loading.show({spinnerSize:30,spinnerColor:"primary"}),this.loading=!0;let o=this.DataStore.place_data?this.DataStore.place_data.place_id:"";u.fetchDataByTokenPost("submitPOSOrder",{place_id:o,place_data:this.DataStore.place_data,cart_uuid:this.DataStore.cart_uuid,whento_deliver:this.whento_deliver,transaction_type:this.DataStore.cart_transaction_type,delivery_date:this.delivery_date,delivery_time:this.delivery_time,order_status:this.order_status,receive_amount:this.receive_amount,payment_code:this.payment_code,payment_reference:this.payment_reference,order_notes:this.order_notes,order_change:this.change,guest_number:this.guest_number,room_id:this.room_id,table_id:this.table_id}).then(t=>{this.$emit("afterPlaceorder"),this.DataStore.place_data=[],this.DataStore.cart_uuid="",u.notify("light-green",t.msg,"check_circle",this.$q),this.$router.push({path:"/orderview",query:{order_uuid:t.details.order_uuid}})}).catch(t=>{u.notify("red-5",t,"error_outline",this.$q)}).then(t=>{this.loading=!1,this.$q.loading.hide()})}}},L={class:"row q-gutter-sm"},j={class:"text-subtitle2"},E={class:"text-caption"},I={class:"text-subtitle2"},M={class:"text-caption"},G={class:"text-subtitle2"},X={class:"text-caption"},Y={class:"border-grey radius8"},Z={key:0,class:"q-gutter-y-smx"},H={class:"q-gutter-y-md"};function J(o,t,S,s,l,n){const y=w("NumberFormat");return m(),g(F,{modelValue:l.dialog,"onUpdate:modelValue":t[12]||(t[12]=e=>l.dialog=e),class:"rounded-borders-top",onBeforeShow:o.beforeShow,maximized:!0,persistent:"","transition-show":"fade"},{default:i(()=>[r(T,null,{default:i(()=>[r(z,{onSubmit:n.onSubmit},{default:i(()=>[r(N,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:i(()=>[r(O,{class:_(["text-darkx text-weight-bold",{"text-white":o.$q.dark.mode,"text-dark":!o.$q.dark.mode}]),style:{overflow:"inherit"}},{default:i(()=>[D(h(o.$t("Create Payment")),1)]),_:1},8,["class"]),r(p),r(f,{onClick:t[0]||(t[0]=e=>l.dialog=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),r(P,{style:{"max-height":"80vh"},class:"scroll"},{default:i(()=>[a("div",L,[a("div",{class:_(["col border-grey rounded-borders q-pa-sm text-center",{"bg-grey600 text-white":o.$q.dark.mode}])},[a("div",j,h(o.$t("Total Due")),1),a("div",E,[r(y,{amount:S.total},null,8,["amount"])])],2),a("div",{class:_(["col border-grey rounded-borders q-pa-sm text-center",{"bg-grey600 text-white":o.$q.dark.mode}])},[a("div",I,h(o.$t("Pay Left")),1),a("div",M,[r(y,{amount:l.pay_left},null,8,["amount"])])],2),a("div",{class:_(["col border-grey rounded-borders q-pa-sm text-center",{"bg-grey600 text-white":o.$q.dark.mode}])},[a("div",G,h(o.$t("Change")),1),a("div",X,[r(y,{amount:l.change},null,8,["amount"])])],2)]),r(p,{class:"q-pa-xs"}),a("div",Y,[s.CartStore.getPreferedTime?(m(),g(B,{key:0,modelValue:l.whento_deliver,"onUpdate:modelValue":t[1]||(t[1]=e=>l.whento_deliver=e),"toggle-color":"green",unelevated:"","no-caps":"",options:s.CartStore.getPreferedTime,spread:""},null,8,["modelValue","options"])):b("",!0)]),r(p,{class:"q-pa-xs"}),l.whento_deliver=="schedule"?(m(),v("div",Z,[s.CartStore.getOpeningDates?(m(),g(d,{key:0,outlined:"",modelValue:l.delivery_date,"onUpdate:modelValue":[t[2]||(t[2]=e=>l.delivery_date=e),n.afterSelectDate],options:s.CartStore.getOpeningDates,label:o.$t("Date"),"emit-value":"","stack-label":"",rules:[e=>e&&e.length>0||this.$t("This field is required")],"map-options":""},null,8,["modelValue","options","label","rules","onUpdate:modelValue"])):b("",!0),r(d,{outlined:"",modelValue:l.delivery_time,"onUpdate:modelValue":t[3]||(t[3]=e=>l.delivery_time=e),options:n.getTimelist,label:o.$t("Time"),"option-value":"start_time","option-label":"pretty_time","stack-label":"","emit-value":"",rules:[e=>e&&e.length>0||this.$t("This field is required")],"map-options":""},null,8,["modelValue","options","label","rules"])])):b("",!0),r(p,{class:"q-pa-xs"}),r(d,{outlined:"",modelValue:l.order_status,"onUpdate:modelValue":t[4]||(t[4]=e=>l.order_status=e),label:o.$t("Order status"),options:s.CartStore.getOrderStatus,"stack-label":"",rules:[e=>e&&e.length>0||this.$t("This field is required")],"emit-value":"","map-options":""},null,8,["modelValue","label","options","rules"]),r(d,{outlined:"",modelValue:l.payment_code,"onUpdate:modelValue":t[5]||(t[5]=e=>l.payment_code=e),label:o.$t("Payment Method"),options:s.CartStore.getPaymentMethod,"option-value":"payment_code","option-label":"payment_name","stack-label":"",rules:[e=>e&&e.length>0||this.$t("This field is required")],"emit-value":"","map-options":""},null,8,["modelValue","label","options","rules"]),r(c,{outlined:"",modelValue:l.receive_amount,"onUpdate:modelValue":t[6]||(t[6]=e=>l.receive_amount=e),label:o.$t("Receive amount"),mask:"#.##","fill-mask":"0","reverse-fill-mask":"","lazy-rules":"",rules:[e=>e>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),s.DataStore.cart_transaction_type=="dinein"?(m(),v(Q,{key:1},[r(c,{outlined:"",modelValue:l.guest_number,"onUpdate:modelValue":t[7]||(t[7]=e=>l.guest_number=e),modelModifiers:{number:!0},mask:"#############",label:o.$t("Guest"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[e=>e>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),r(d,{outlined:"",modelValue:l.room_id,"onUpdate:modelValue":[t[8]||(t[8]=e=>l.room_id=e),n.afterSelectRoom],label:o.$t("Room Name"),options:s.CartStore.getRoomList,"stack-label":"",rules:[e=>e&&e.length>0||this.$t("This field is required")],"emit-value":"","map-options":""},null,8,["modelValue","label","options","rules","onUpdate:modelValue"]),r(d,{outlined:"",modelValue:l.table_id,"onUpdate:modelValue":t[9]||(t[9]=e=>l.table_id=e),label:o.$t("Table Name"),options:n.getTableList,"stack-label":"",rules:[e=>e&&e.length>0||this.$t("This field is required")],"emit-value":"","map-options":""},null,8,["modelValue","label","options","rules"])],64)):b("",!0),a("div",H,[r(c,{outlined:"",modelValue:l.payment_reference,"onUpdate:modelValue":t[10]||(t[10]=e=>l.payment_reference=e),label:o.$t("Payment Reference number"),"stack-label":"",color:"grey-5"},null,8,["modelValue","label"]),r(c,{outlined:"",modelValue:l.order_notes,"onUpdate:modelValue":t[11]||(t[11]=e=>l.order_notes=e),label:o.$t("Add order notes"),"stack-label":"",color:"grey-5",autogrow:""},null,8,["modelValue","label"])]),r(p,{class:"q-pa-md"})]),_:1}),r(U),r(x,null,{default:i(()=>[r(f,{type:"submit",color:"primary","text-color":"white",label:o.$t("Pay Now"),unelevated:"",class:"full-width",size:"lg","no-caps":"",loading:l.loading,disable:!n.hasValidPayment},null,8,["label","loading","disable"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue","onBeforeShow"])}var me=V(A,[["render",J]]);export{me as default};
