import{d as L,q,r as l,s as z,o as w,c as h,w as u,a as c,u as k,b as B,J as D,g as F}from"./index-ae9fe02d.js";import{S as M}from"./ServiceSummary-c03d0bc2.js";import{u as O,g as Q,f as R,e as U}from"./RouteView.vue_vue_type_script_setup_true_lang-b5eb5713.js";import{_ as G}from"./RouteTitle.vue_vue_type_script_setup_true_lang-ff8a3bd8.js";import{C as J}from"./ContentWrapper-563fc1b8.js";import{D as K}from"./DataOverview-c2e9eccb.js";import{Q as S}from"./QueryParameter-70743f73.js";import"./kongponents.es-d2465199.js";import"./DefinitionListItem-41d0e307.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-f9351757.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-8d0a701f.js";import"./TextWithCopyButton-4600fce9.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-a6039e50.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-0a364a2e.js";import"./ErrorBlock-28357309.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-0cb24ca1.js";import"./toYaml-4e00099e.js";import"./StatusBadge-716bbdd6.js";import"./TagList-37f0ef0c.js";const pe=L({__name:"ServiceListView",props:{selectedServiceName:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(N){const m=N,p=O(),{t:A}=Q(),E=[{label:"Name",key:"entity"},{label:"Type",key:"serviceType"},{label:"Address",key:"addressPort"},{label:"Status",key:"status"},{label:"DP proxies (online / total)",key:"dpProxiesStatus"}],P={title:"No Data",message:"There are no service insights present."},v=q(),d=l(!0),f=l(null),b=l(null),x=l(m.offset),t=l(null),i=l(null),n=l({headers:E,data:[]});z(()=>v.params.mesh,function(){v.name==="services-list-view"&&y(0)}),y(m.offset);async function y(a){var o;x.value=a,S.set("offset",a>0?a:null),d.value=!0,f.value=null;const e=v.params.mesh,r=D;try{const{items:s,next:_}=await p.getAllServiceInsightsFromMesh({mesh:e},{size:r,offset:a});b.value=_,n.value.data=C(s??[]),await g({name:m.selectedServiceName??((o=n.value.data[0])==null?void 0:o.entity.name),mesh:e})}catch(s){n.value.data=[],t.value=null,i.value=null,s instanceof Error?f.value=s:console.error(s)}finally{d.value=!1}}function C(a){return a.map(e=>{const{serviceType:r="internal",addressPort:o="",status:s="not_available"}=e,_={name:"service-detail-view",params:{mesh:e.mesh,service:e.name}};let T="—";if(e.dataplanes){const{online:V=0,total:$=0}=e.dataplanes;T=`${V} / ${$}`}return{entity:e,detailViewRoute:_,status:s,serviceType:r,dpProxiesStatus:T,addressPort:o}})}async function g({name:a,mesh:e}){a!==void 0?(t.value=await p.getServiceInsight({mesh:e,name:a}),t.value.serviceType==="external"&&(i.value=await p.getExternalServiceByServiceInsightName(e,a)),S.set("service",a)):(t.value=null,i.value=null,S.set("service",null))}return(a,e)=>(w(),h(U,null,{default:u(()=>[c(G,{title:k(A)("services.routes.items.title")},null,8,["title"]),B(),c(R,null,{default:u(()=>[c(J,null,{content:u(()=>{var r;return[c(K,{"selected-entity-name":(r=t.value)==null?void 0:r.name,"page-size":k(D),error:f.value,"is-loading":d.value,"empty-state":P,"table-data":n.value,"table-data-is-empty":n.value.data.length===0,next:b.value,"page-offset":x.value,onTableAction:g,onLoadData:y},null,8,["selected-entity-name","page-size","error","is-loading","table-data","table-data-is-empty","next","page-offset"])]}),sidebar:u(()=>[t.value!==null?(w(),h(M,{key:0,service:t.value,"external-service":i.value},null,8,["service","external-service"])):F("",!0)]),_:1})]),_:1})]),_:1}))}});export{pe as default};