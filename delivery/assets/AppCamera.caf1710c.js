import{bp as h,ax as u}from"./index.9022de34.js";var i;(function(a){a.Prompt="PROMPT",a.Camera="CAMERA",a.Photos="PHOTOS"})(i||(i={}));var m;(function(a){a.Rear="REAR",a.Front="FRONT"})(m||(m={}));var c;(function(a){a.Uri="uri",a.Base64="base64",a.DataUrl="dataUrl"})(c||(c={}));const o=h("Camera",{web:()=>u(()=>import("./web.d0942339.js"),["assets/web.d0942339.js","assets/index.9022de34.js","assets/index.8b19a20e.css"]).then(a=>new a.CameraWeb)});var d;(function(a){a.Documents="DOCUMENTS",a.Data="DATA",a.Library="LIBRARY",a.Cache="CACHE",a.External="EXTERNAL",a.ExternalStorage="EXTERNAL_STORAGE"})(d||(d={}));var l;(function(a){a.UTF8="utf8",a.ASCII="ascii",a.UTF16="utf16"})(l||(l={}));const n=h("Filesystem",{web:()=>u(()=>import("./web.89ebd38c.js"),["assets/web.89ebd38c.js","assets/index.9022de34.js","assets/index.8b19a20e.css"]).then(a=>new a.FilesystemWeb)}),f={async isCameraEnabled(){return await new Promise(function(t,e){o.checkPermissions().then(r=>{switch(r.camera){case"prompt":case"prompt-with-rationale":case"denied":o.requestPermissions().then(s=>{switch(s.camera){case"granted":t("granted");break;default:e("denied");break}}).catch(s=>{e(s)});break;case"granted":t("granted");break}}).catch(r=>{e(r)})})},async isFileAccessEnabled(){return await new Promise(function(t,e){n.checkPermissions().then(r=>{switch(r.publicStorage){case"prompt":case"prompt-with-rationale":case"denied":n.requestPermissions().then(s=>{switch(s.publicStorage){case"granted":t("granted");break;default:e("denied");break}}).catch(s=>{e(s)});break;case"granted":t("granted");break;default:e("denied");break}}).catch(r=>{e(r)})})},async getPhoto(a){let t=i.Prompt;a==2?t=i.Camera:a==3&&(t=i.Photos);const e=await o.getPhoto({quality:90,allowEditing:!1,resultType:c.Uri,width:500,source:t});if(e){const r=await n.readFile({path:e.path});if(r)return{format:e.format,path:e.webPath,data:r.data}}return!1},async ReadFile(a){const t=await n.readFile({path:a});return t||!1}};export{f as A,i as C,l as E,m as a};
