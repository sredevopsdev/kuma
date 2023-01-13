import{d as P,cv as h,bP as s,g as A,h as b,c8 as x,o as I,i as S,u as k}from"./index.0a811bc4.js";import{Q as d}from"./DataOverview.caf545ad.js";import{D as C}from"./DataPlaneList.966949d2.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.f6f964d3.js";import"./ErrorBlock.cbbbb7ee.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.cab88be1.js";import"./StatusBadge.2bc5ab95.js";import"./TagList.73d98f2e.js";import"./ContentWrapper.536a72db.js";import"./YamlView.vue_vue_type_script_setup_true_lang.695271f0.js";import"./index.58caa11d.js";import"./CodeBlock.vue_vue_type_style_index_0_lang.92596654.js";import"./_commonjsHelpers.f037b798.js";const W=P({__name:"DataPlaneListView",props:{selectedDppName:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0},isGatewayView:{type:Boolean,required:!1,default:!1}},setup(v){const t=v,w=50,y={name:{description:"filter by name or parts of a name"},service:{description:"filter by \u201Ckuma.io/service\u201D value"},tag:{description:"filter by tags (e.g. \u201Ctag: version:2\u201D)"},zone:{description:"filter by \u201Ckuma.io/zone\u201D value"}},g={protocol:{description:"filter by \u201Ckuma.io/protocol\u201D value"}},_={},i=h(),l=s([]),u=s(!0),f=s(null),o=s(null),m=s(t.offset),D=A(()=>({...y,...t.isGatewayView?_:g}));b(()=>i.params.mesh,function(){i.name!=="data-plane-list-view"&&i.name!=="gateway-list-view"||p(0)});function E(){const a=d.get("filterFields"),r=a!==null?JSON.parse(a):{};p(t.offset,r)}E();async function p(a,r={}){m.value=a,d.set("offset",a>0?a:null),u.value=!0;const c=i.params.mesh,n=F(r,w,a,t.isGatewayView);try{const{items:e,next:L}=await x.getAllDataplaneOverviewsFromMesh({mesh:c},n);Array.isArray(e)&&e.length>0?(l.value=e,o.value=L):(l.value=[],o.value=null)}catch(e){e instanceof Error?f.value=e:console.error(e),l.value=[],o.value=null}finally{u.value=!1}}function F(a,r,c,n){const e={...a,size:r,offset:c};return n&&(!("gateway"in e)||e.gateway==="false")?e.gateway="true":n||(e.gateway="false"),e}return(a,r)=>(I(),S(C,{"data-plane-overviews":l.value,"is-loading":u.value,error:f.value,"next-url":o.value,"page-offset":m.value,"selected-dpp-name":t.selectedDppName,"is-gateway-view":t.isGatewayView,"dpp-filter-fields":k(D),onLoadData:p},null,8,["data-plane-overviews","is-loading","error","next-url","page-offset","selected-dpp-name","is-gateway-view","dpp-filter-fields"]))}});export{W as default};