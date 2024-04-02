import{_ as y,aw as k,A as r,m as b,n as o,$ as f,d as a,q as l,Z as m,F as q,a1 as u,V as Q,X as p,Y as $,p as i,am as n,a9 as w,ap as P,ax as v}from"./index.9022de34.js";import{Q as C}from"./QToolbarTitle.5ecfa0aa.js";import{Q as A}from"./QToolbar.2a2e526c.js";import{Q as D}from"./QHeader.522a2ada.js";import{Q as I}from"./QInnerLoading.788e47b1.js";import{Q as _}from"./QImg.ad5480e5.js";import{Q as F}from"./QFooter.864bb069.js";import{Q as x}from"./QForm.a6c6ef66.js";import{Q as B}from"./QPage.a79a1249.js";import{A as c}from"./AppCamera.caf1710c.js";import"./QResizeObserver.129b050c.js";const S={name:"CreateItemGallery",data(){return{loading:!1,loading_get:!1,upload_enabled:!1,featured_filename:"",featured_url:"",upload_path:"",photo_data:""}},components:{UploaderFile:k(()=>v(()=>import("./UploaderFile.48fb90ea.js"),["assets/UploaderFile.48fb90ea.js","assets/QUploader.49fdd1be.js","assets/index.9022de34.js","assets/index.8b19a20e.css","assets/QCircularProgress.54b08c59.js","assets/format.3e32b8d9.js"]))},created(){this.item_uuid=this.$route.query.item_uuid},computed:{hasPhoto(){return!r.empty(this.featured_filename)},hasData(){return Object.keys(this.photo_data).length>0}},methods:{takePhoto(){this.$q.capacitor?c.isCameraEnabled().then(e=>{c.isFileAccessEnabled().then(s=>{c.getPhoto(1).then(h=>{this.photo_data=h}).catch(h=>{this.photo_data=[]})}).catch(s=>{r.notify("dark",s,"error",this.$q)})}).catch(e=>{r.notify("dark",e,"error",this.$q)}):this.upload_enabled=!this.upload_enabled},onSubmit(){this.loading=!0,r.fetchDataByToken("createGallery",{item_uuid:this.item_uuid,featured_filename:this.featured_filename,upload_path:this.upload_path,file_data:this.hadData()?this.photo_data.data:"",image_type:this.hadData()?this.photo_data.format:""}).then(e=>{r.notify("light-green",e.msg,"check_circle",this.$q),this.$router.replace({path:"/item/gallery",query:{item_uuid:this.item_uuid}})}).catch(e=>{r.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})},afterUploadfile(e){this.featured_filename=e.filename,this.featured_url=e.url_image,this.upload_path=e.upload_path},hadData(){return Object.keys(this.photo_data).length>0}}},U={class:"q-pa-md q-gutter-md"},G={class:"row q-gutter-sm"},T={key:2,class:"col-3 row items-center justify-center bg-mygrey radius8",style:{height:"70px"}},V={class:"col"},z={class:"font12 line-normal"};function E(e,s,h,N,d,t){const g=b("UploaderFile");return o(),f(q,null,[a(D,{class:m({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:l(()=>[a(A,null,{default:l(()=>[a(u,{onClick:s[0]||(s[0]=j=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(C,{class:"text-weight-bold"},{default:l(()=>[Q(p(e.$t("Item Gallery")),1)]),_:1})]),_:1}),a($)]),_:1},8,["class"]),a(B,{class:m({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:l(()=>[d.loading_get?(o(),i(I,{key:0,showing:!0,color:"primary",size:"md"})):(o(),i(x,{key:1,onSubmit:t.onSubmit},{default:l(()=>[n("div",U,[n("div",G,[t.hasData?(o(),i(_,{key:0,src:d.photo_data.path,"spinner-color":"primary","spinner-size":"sm",fit:"cover",style:{height:"70px"},class:"col-3 radius8"},null,8,["src"])):t.hasPhoto?(o(),i(_,{key:1,src:this.featured_url,"spinner-color":"white",fit:"cover",style:{height:"70px"},class:"col-3 radius8"},null,8,["src"])):(o(),f("div",T,[a(w,{name:"las la-image",class:"text-grey",size:"xl"})])),n("div",V,[n("div",z,p(e.$t("Items with quality photos are often more popular. Maximum 2 MB"))+". "+p(e.$t("Accepted types: PNG. JPG")),1),a(u,{label:t.hasPhoto?this.$t("Change Photo"):t.hasData?this.$t("Change Photo"):this.$t("Add Photo"),flat:"",color:"primary","no-caps":"",class:"q-pl-none q-pr-none",onClick:t.takePhoto},null,8,["label","onClick"])]),d.upload_enabled?(o(),i(g,{key:3,ref:"uploader_file",onAfterUploadfile:t.afterUploadfile},null,8,["onAfterUploadfile"])):P("",!0)])]),a(F,{class:m(["q-pl-md q-pr-md q-pb-xs",{"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode}])},{default:l(()=>[a(u,{type:"submit",color:"primary","text-color":"white",label:e.$t("Save"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":"",loading:d.loading},null,8,["label","loading"])]),_:1},8,["class"])]),_:1},8,["onSubmit"]))]),_:1},8,["class"])],64)}var ee=y(S,[["render",E]]);export{ee as default};
