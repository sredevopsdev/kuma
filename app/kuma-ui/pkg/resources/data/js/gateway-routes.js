(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gateway-routes"],{3049:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gateway-routes relative"},[a("DocumentationLink",{attrs:{href:t.docsURL}}),a("div",{staticClass:"mb-4"},[a("KAlert",{attrs:{appearance:"warning"},scopedSlots:t._u([{key:"alertMessage",fn:function(){return[a("p",[a("strong",[t._v("Warning")]),t._v(" This policy is experimental. If you encountered any problem please open an "),a("a",{attrs:{href:"https://github.com/kumahq/kuma/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue")])])]},proxy:!0}])})],1),a("FrameSkeleton",[a("DataOverview",{attrs:{"page-size":t.pageSize,"has-error":t.hasError,"is-loading":t.isLoading,"empty-state":t.empty_state,"table-data":t.tableData,"table-data-is-empty":t.isEmpty,next:t.next},on:{tableAction:t.tableAction,loadData:function(e){return t.loadData(e)}},scopedSlots:t._u([{key:"additionalControls",fn:function(){return[t.$route.query.ns?a("KButton",{staticClass:"back-button",attrs:{appearance:"primary",size:"small",to:{name:"gateway-routes"}}},[a("span",{staticClass:"custom-control-icon"},[t._v(" ← ")]),t._v(" View All ")]):t._e()]},proxy:!0}])},[t._v(" > ")]),!1===t.isEmpty?a("Tabs",{attrs:{"has-error":t.hasError,"is-loading":t.isLoading,tabs:t.tabs,"initial-tab-override":"overview"},scopedSlots:t._u([{key:"tabHeader",fn:function(){return[a("div",[a("h3",[t._v(" Gateway Route: "+t._s(t.entity.name)+" ")])]),a("div",[a("EntityURLControl",{attrs:{name:t.entity.name,mesh:t.entity.mesh}})],1)]},proxy:!0},{key:"overview",fn:function(){return[a("LabelList",[a("div",[a("ul",t._l(t.entity,(function(e,n){return a("li",{key:n},[a("h4",[t._v(t._s(n))]),a("p",[t._v(" "+t._s(e)+" ")])])})),0)])])]},proxy:!0},{key:"affected-dpps",fn:function(){return[a("PolicyConnections",{attrs:{mesh:t.rawEntity.mesh,"policy-name":t.rawEntity.name,"policy-type":"gateway-routes"}})]},proxy:!0},{key:"yaml",fn:function(){return[a("YamlView",{attrs:{lang:"yaml",content:t.rawEntity}})]},proxy:!0}],null,!1,3127797719)}):t._e()],1)],1)},i=[],r=(a("7db0"),a("b0c0"),a("96cf"),a("c964")),s=a("f3f3"),o=a("2f62"),l=a("bc1e"),c=a("1d3a"),u=a("0f82"),y=a("6663"),p=a("1d10"),m=a("2778"),d=a("251b"),h=a("14eb"),f=a("ff9d"),b=a("0ada"),v=a("6524"),w=a("c6ec"),g={name:"GatewayRoutes",metaInfo:{title:"Gateway Routes"},components:{EntityURLControl:y["a"],FrameSkeleton:p["a"],DataOverview:m["a"],Tabs:d["a"],YamlView:f["a"],LabelList:b["a"],PolicyConnections:h["a"],DocumentationLink:v["a"]},data:function(){return{isLoading:!0,isEmpty:!1,hasError:!1,empty_state:{title:"No Data",message:"There are no Gateway Routes present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Name",key:"name"},{label:"Mesh",key:"mesh"},{label:"Type",key:"type"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"},{hash:"#yaml",title:"YAML"}],entity:{},rawData:[],rawEntity:{},pageSize:w["h"],next:null}},computed:Object(s["a"])(Object(s["a"])({},Object(o["c"])({version:"config/getVersion"})),{},{docsURL:function(){return"https://kuma.io/docs/".concat(this.version,"/policies/gateway-route/")}}),watch:{$route:function(t,e){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){this.loadData()},tableAction:function(t){var e=t;this.getEntity(e)},loadData:function(){var t=arguments,e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,i,r,s,o,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:"0",e.isLoading=!0,i=e.$route.query.ns||null,r=e.$route.params.mesh||null,a.prev=4,a.next=7,Object(c["a"])({getSingleEntity:u["a"].getGatewayRoute.bind(u["a"]),getAllEntities:u["a"].getAllGatewayRoutes.bind(u["a"]),getAllEntitiesFromMesh:u["a"].getAllGatewayRoutesFromMesh.bind(u["a"]),mesh:r,query:i,size:e.pageSize,offset:n});case 7:s=a.sent,o=s.data,l=s.next,e.next=l,o.length?(e.isEmpty=!1,e.rawData=o,e.tableData.data=o,e.getEntity({name:o[0].name})):(e.tableData.data=[],e.isEmpty=!0),a.next=19;break;case 14:a.prev=14,a.t0=a["catch"](4),e.hasError=!0,e.isEmpty=!0,console.error(a.t0);case 19:return a.prev=19,e.isLoading=!1,a.finish(19);case 22:case"end":return a.stop()}}),a,null,[[4,14,19,22]])})))()},getEntity:function(t){var e=["type","name","mesh"],a=this.rawData.find((function(e){return e.name===t.name}));this.rawEntity=Object(l["j"])(a),this.entity=Object(l["d"])(a,e)}}},k=g,E=a("2877"),_=Object(E["a"])(k,n,i,!1,null,null,null);e["default"]=_.exports}}]);