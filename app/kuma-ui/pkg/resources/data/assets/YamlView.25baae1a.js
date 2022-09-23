import{_ as K,q as V,G as j,H as w,J as x,k as L,o as l,f,b as y,w as o,d as s,e as C,r as c,D as Y,E as O,h}from"./index.2f6d90b0.js";import{j as B}from"./index.58caa11d.js";import{C as P,_ as T}from"./CodeBlock.45d0fc63.js";import{_ as I,E as N}from"./ErrorBlock.65239dfd.js";const S={name:"YamlView",components:{CodeBlock:P,EmptyBlock:I,ErrorBlock:N,LoadingBlock:T,KButton:V,KClipboardProvider:j,KPop:w,KTabs:x},props:{content:{type:Object,default:null},isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},data(){return{tabs:[{hash:"#universal",title:"Universal"},{hash:"#kubernetes",title:"Kubernetes"}]}},computed:{...L({environment:"config/getEnvironment"}),activeTab:{get(){const e=this.environment;return{hash:`#${e}`,nohash:e}},set(e){return{hash:`#${e}`,nohash:e}}},yamlContent(){const e=this.content,i=()=>{const a={},m=Object.assign({},this.content),{name:t,mesh:b,type:k}=m,p=()=>{const n=Object.assign({},this.content);return delete n.type,delete n.mesh,delete n.name,n&&Object.entries(n).length>0?n:!1};if(a.apiVersion="kuma.io/v1alpha1",a.kind=k,b!==void 0&&(a.mesh=m.mesh),t!=null&&t.includes(".")){const n=t.split("."),_=n.pop(),u=n.join(".");a.metadata={name:u,namespace:_}}else a.metadata={name:t};return p()&&(a.spec=p()),a};return{universal:B(e),kubernetes:B(i())}}}},g=e=>(Y("data-v-b5a261cd"),e=e(),O(),e),U={class:"yaml-view"},z={key:3,class:"yaml-view-content"},A=C(" Copy Universal YAML "),G=g(()=>h("div",null,[h("p",null,"Entity copied to clipboard!")],-1)),M=C(" Copy Kubernetes YAML "),q=g(()=>h("div",null,[h("p",null,"Entity copied to clipboard!")],-1));function D(e,i,d,a,m,t){const b=c("LoadingBlock"),k=c("ErrorBlock"),p=c("EmptyBlock"),n=c("KButton"),_=c("KPop"),u=c("KClipboardProvider"),v=c("CodeBlock"),E=c("KTabs");return l(),f("div",U,[d.isLoading?(l(),y(b,{key:0})):d.hasError?(l(),y(k,{key:1})):d.isEmpty?(l(),y(p,{key:2})):(l(),f("div",z,[(l(),y(E,{key:e.environment,modelValue:t.activeTab.hash,"onUpdate:modelValue":i[0]||(i[0]=r=>t.activeTab.hash=r),tabs:m.tabs},{universal:o(()=>[s(u,null,{default:o(({copyToClipboard:r})=>[s(_,{placement:"bottom"},{content:o(()=>[G]),default:o(()=>[s(n,{class:"copy-button",appearance:"primary",size:"small",onClick:()=>{r(t.yamlContent.universal)}},{default:o(()=>[A]),_:2},1032,["onClick"])]),_:2},1024)]),_:1}),s(v,{language:"yaml",code:t.yamlContent.universal},null,8,["code"])]),kubernetes:o(()=>[s(u,null,{default:o(({copyToClipboard:r})=>[s(_,{placement:"bottom"},{content:o(()=>[q]),default:o(()=>[s(n,{class:"copy-button",appearance:"primary",size:"small",onClick:()=>{r(t.yamlContent.kubernetes)}},{default:o(()=>[M]),_:2},1032,["onClick"])]),_:2},1024)]),_:1}),s(v,{language:"yaml",code:t.yamlContent.kubernetes},null,8,["code"])]),_:1},8,["modelValue","tabs"]))]))])}const R=K(S,[["render",D],["__scopeId","data-v-b5a261cd"]]);export{R as Y};