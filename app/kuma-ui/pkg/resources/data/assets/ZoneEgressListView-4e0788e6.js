import{d as T,u as D,r as o,v as x,a2 as A,R as Z,o as y,j as E,i as h,g as w,e as V,L as b,h as L,f as S}from"./index-22019ccf.js";import{_ as B}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-982da89d.js";import{D as I}from"./DataOverview-5e135486.js";import{u as O}from"./index-87f3c686.js";import{Q as d}from"./QueryParameter-70743f73.js";import"./AccordionList-b72f9fb8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DefinitionListItem-3bcada14.js";import"./EnvoyData-b0574c48.js";import"./kongponents.es-026a8750.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-f8ba738d.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-50c0c6a4.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-9e831c88.js";import"./ErrorBlock-53fb1052.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-3308bc65.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-8ea7390a.js";import"./TabsWidget-6f2e6014.js";import"./TextWithCopyButton-d7c15e55.js";import"./TagList-902659ba.js";import"./StatusBadge-11264596.js";const P={class:"zoneegresses"},R={class:"kcard-stack"},q={class:"kcard-border"},C={key:0,class:"kcard-border"},le=T({__name:"ZoneEgressListView",props:{selectedZoneEgressName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(z){const l=z,p=O(),k={title:"No Data",message:"There are no Zone Egresses present."},v=D(),i=o(!0),u=o(null),n=o({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"}],data:[]}),r=o(null),f=o(null),g=o(l.offset);x(()=>v.params.mesh,function(){v.name==="zone-egress-list-view"&&c(0)}),A(function(){c(l.offset)});async function c(e){var a;g.value=e,d.set("offset",e>0?e:null),i.value=!0,u.value=null;const t=b;try{const{items:s,next:m}=await p.getAllZoneEgressOverviews({size:t,offset:e});f.value=m,n.value.data=N(s??[]),await _({name:l.selectedZoneEgressName??((a=n.value.data[0])==null?void 0:a.entity.name)})}catch(s){n.value.data=[],r.value=null,s instanceof Error?u.value=s:console.error(s)}finally{i.value=!1}}function N(e){return e.map(t=>{const{name:a}=t,s={name:"zone-egress-detail-view",params:{zoneEgress:a}},m=Z(t.zoneEgressInsight??{});return{entity:t,detailViewRoute:s,status:m}})}async function _({name:e}){if(e===void 0){r.value=null,d.set("zoneEgress",null);return}try{r.value=await p.getZoneEgressOverview({name:e}),d.set("zoneEgress",e)}catch(t){console.error(t)}}return(e,t)=>{var a;return y(),E("div",P,[h("div",R,[h("div",q,[w(I,{"selected-entity-name":(a=r.value)==null?void 0:a.name,"page-size":V(b),"is-loading":i.value,error:u.value,"empty-state":k,"table-data":n.value,"table-data-is-empty":n.value.data.length===0,next:f.value,"page-offset":g.value,onTableAction:_,onLoadData:c},null,8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])]),L(),r.value!==null?(y(),E("div",C,[w(B,{"zone-egress-overview":r.value},null,8,["zone-egress-overview"])])):S("",!0)])])}}});export{le as default};