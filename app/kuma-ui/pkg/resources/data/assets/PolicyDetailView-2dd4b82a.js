import{d as r,u as i,c as s,o as c,b as n,f as l}from"./index-a4fb3e6d.js";import{_ as u}from"./PolicyDetails.vue_vue_type_script_setup_true_lang-193de65a.js";import{u as y}from"./store-a62ac939.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-036f6f0b.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-ea440da3.js";import"./kongponents.es-af129dfe.js";import"./ErrorBlock-984fd14e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-aae7801c.js";import"./index-7848fac5.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-17fd4305.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-ef11f61a.js";import"./TextWithCopyButton-f986f099.js";import"./toYaml-4e00099e.js";import"./TabsWidget-d501eaef.js";import"./datadogLogEvents-302eea7b.js";import"./QueryParameter-70743f73.js";const $=r({__name:"PolicyDetailView",props:{mesh:{},policyPath:{},policyName:{}},setup(p){const t=p,a=i(),o=y(),e=s(()=>o.state.policyTypesByPath[t.policyPath]);m();function m(){o.dispatch("updatePageTitle",a.params.policy)}return(h,f)=>e.value?(c(),n(u,{key:0,name:t.policyName,mesh:t.mesh,path:t.policyPath,type:e.value.name},null,8,["name","mesh","path","type"])):l("",!0)}});export{$ as default};