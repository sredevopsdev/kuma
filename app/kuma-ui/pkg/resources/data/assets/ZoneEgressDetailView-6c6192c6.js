import{d as w,u as k,s as l,w as f,o as s,a as o,b as _,i as m,e as p,h as z,l as h,f as E}from"./index-64044ff8.js";import{_ as b}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-17627844.js";import{j as y,f as $,k as x,g as B,_ as V}from"./RouteView.vue_vue_type_script_setup_true_lang-75502ce3.js";import{_ as N}from"./RouteTitle.vue_vue_type_script_setup_true_lang-6fc4ecf7.js";import{_ as A}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-1498d403.js";import{E as C}from"./ErrorBlock-1b305fff.js";import{_ as D}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-bc768187.js";import"./DefinitionListItem-5b6870d7.js";import"./EnvoyData-e9ed071c.js";import"./kongponents.es-b630df1e.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-574d3e26.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-160dd899.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-138b8209.js";import"./TabsWidget-02d82c31.js";import"./QueryParameter-70743f73.js";import"./TextWithCopyButton-59749fea.js";const O={class:"zone-details"},T={key:3,class:"kcard-border"},X=w({__name:"ZoneEgressDetailView",setup(Z){const d=y(),e=k(),v=$(),{t:u}=x(),a=l(null),n=l(!0),r=l(null);f(()=>e.params.mesh,function(){e.name==="zone-egress-detail-view"&&i()}),f(()=>e.params.name,function(){e.name==="zone-egress-detail-view"&&i()}),g();function g(){v.dispatch("updatePageTitle",e.params.zoneEgress),i()}async function i(){n.value=!0,r.value=null;const c=e.params.zoneEgress;try{a.value=await d.getZoneEgressOverview({name:c})}catch(t){a.value=null,t instanceof Error?r.value=t:console.error(t)}finally{n.value=!1}}return(c,t)=>(s(),o(V,null,{default:_(()=>[m(N,{title:p(u)("zone-egresses.routes.item.title")},null,8,["title"]),z(),m(B,{breadcrumbs:[{to:{name:"zone-egress-list-view"},text:p(u)("zone-egresses.routes.item.breadcrumbs")}]},{default:_(()=>[h("div",O,[n.value?(s(),o(D,{key:0})):r.value!==null?(s(),o(C,{key:1,error:r.value},null,8,["error"])):a.value===null?(s(),o(A,{key:2})):(s(),E("div",T,[m(b,{"zone-egress-overview":a.value},null,8,["zone-egress-overview"])]))])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{X as default};