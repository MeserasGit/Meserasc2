import{s as u,bh as n,de as i,c as b,w as m}from"./index.9022de34.js";import{u as c,a as l,b as T}from"./QTabs.a2ac70b0.js";var R=u({name:"QRouteTab",props:{...n,...c},emits:l,setup(e,{slots:s,emit:t}){const a=i({useDisableForRouterLinkProps:!1}),{renderTab:o,$tabs:r}=T(e,s,t,{exact:b(()=>e.exact),...a});return m(()=>`${e.name} | ${e.exact} | ${(a.resolvedLink.value||{}).href}`,()=>{r.verifyRouteModel()}),()=>o(a.linkTag.value,a.linkAttrs.value)}});export{R as Q};
