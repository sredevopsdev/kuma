import{d as L,u as q,q as s,o as T,a as h,w as u,h as c,b as w,g as z,P as k,f as B}from"./index-41121ee3.js";import{S as F}from"./ServiceSummary-cb83dc17.js";import{h as M,j as O,f as Q,_ as R}from"./RouteView.vue_vue_type_script_setup_true_lang-112c8af9.js";import{_ as U}from"./RouteTitle.vue_vue_type_script_setup_true_lang-8b8b4841.js";import{C as j}from"./ContentWrapper-57a2c899.js";import{D as G}from"./DataOverview-055f55b4.js";import{Q as y}from"./QueryParameter-70743f73.js";import"./kongponents.es-3d043985.js";import"./DefinitionListItem-6a6134df.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-7e6fbe81.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-b7d0d630.js";import"./TextWithCopyButton-4c527c49.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-17c45600.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-62319360.js";import"./ErrorBlock-253dc9e7.js";import"./StatusBadge-187997e5.js";import"./TagList-51b6ec2a.js";const ue=L({__name:"ServiceListView",props:{selectedServiceName:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(D){const m=D,p=M(),{t:N}=O(),P=[{label:"Name",key:"entity"},{label:"Type",key:"serviceType"},{label:"Address",key:"addressPort"},{label:"Status",key:"status"},{label:"DP proxies (online / total)",key:"dpProxiesStatus"}],A={title:"No Data",message:"There are no service insights present."},E=q(),v=s(!0),d=s(null),_=s(null),S=s(m.offset),t=s(null),o=s(null),n=s({headers:P,data:[]});b(m.offset);async function b(a){var i;S.value=a,y.set("offset",a>0?a:null),v.value=!0,d.value=null;const e=E.params.mesh,r=k;try{const{items:l,next:f}=await p.getAllServiceInsightsFromMesh({mesh:e},{size:r,offset:a});_.value=f,n.value.data=C(l??[]),await x({name:m.selectedServiceName??((i=n.value.data[0])==null?void 0:i.entity.name),mesh:e})}catch(l){n.value.data=[],t.value=null,o.value=null,l instanceof Error?d.value=l:console.error(l)}finally{v.value=!1}}function C(a){return a.map(e=>{const{serviceType:r="internal",addressPort:i="",status:l="not_available"}=e,f={name:"service-detail-view",params:{mesh:e.mesh,service:e.name}};let g="—";if(e.dataplanes){const{online:V=0,total:$=0}=e.dataplanes;g=`${V} / ${$}`}return{entity:e,detailViewRoute:f,status:l,serviceType:r,dpProxiesStatus:g,addressPort:i}})}async function x({name:a,mesh:e}){a!==void 0?(t.value=await p.getServiceInsight({mesh:e,name:a}),t.value.serviceType==="external"&&(o.value=await p.getExternalServiceByServiceInsightName(e,a)),y.set("service",a)):(t.value=null,o.value=null,y.set("service",null))}return(a,e)=>(T(),h(R,null,{default:u(()=>[c(U,{title:w(N)("services.routes.items.title")},null,8,["title"]),z(),c(Q,null,{default:u(()=>[c(j,null,{content:u(()=>{var r;return[c(G,{"selected-entity-name":(r=t.value)==null?void 0:r.name,"page-size":w(k),error:d.value,"is-loading":v.value,"empty-state":A,"table-data":n.value,"table-data-is-empty":n.value.data.length===0,next:_.value,"page-offset":S.value,onTableAction:x,onLoadData:b},null,8,["selected-entity-name","page-size","error","is-loading","table-data","table-data-is-empty","next","page-offset"])]}),sidebar:u(()=>[t.value!==null?(T(),h(F,{key:0,service:t.value,"external-service":o.value},null,8,["service","external-service"])):B("",!0)]),_:1})]),_:1})]),_:1}))}});export{ue as default};