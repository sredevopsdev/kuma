import{H as l,o as p,j as b,L as x,D as w,co as O,cP as h,i as r,c as $,w as a,a as i,l as e,b as s}from"./index.782e29ff.js";import{O as k}from"./OnboardingNavigation.e9ec643e.js";import{O as y,a as B}from"./OnboardingPage.b82fa34a.js";const S={name:"ServiceBox",props:{active:{type:Boolean,default:!1}},emits:["clicked"],computed:{classes(){return["box",{"box--active":this.active}]}}};function N(n,t,m,u,v,o){return p(),b("div",{"data-testid":"box",class:w(o.classes),onClick:t[0]||(t[0]=d=>n.$emit("clicked"))},[x(n.$slots,"default",{},void 0,!0)],2)}const C=l(S,[["render",N],["__scopeId","data-v-a26d9032"]]),M=""+new URL("new-service-demo.bff0792e.svg",import.meta.url).href,A=""+new URL("new-service-manually.5bec5301.svg",import.meta.url).href,P={name:"AddNewServices",components:{OnboardingNavigation:k,OnboardingHeading:y,OnboardingPage:B,ServiceBox:C},computed:{...O({onboardingMode:"onboarding/getMode"}),nextStep(){return this.mode==="manually"?"onboarding-completed":"onboarding-add-services-code"},mode:{get(){return this.onboardingMode},set(n){this.update(n)}}},methods:{...h({update:"onboarding/UPDATE_MODE"})}},D={class:"h-full w-full flex justify-evenly items-center"},H=e("div",null,[e("img",{src:M}),s(),e("div",{class:"ml-3"},[e("p",{class:"uppercase font-bold tracking-wider"},`
                Demo app
              `),s(),e("p",null,"Counter application")])],-1),E=e("div",{class:"cursor-pointer"},[e("img",{src:A}),s(),e("div",{class:"ml-3"},[e("p",{class:"uppercase font-bold tracking-wider"},`
                Manually
              `),s(),e("p",null,"After this wizard")])],-1);function L(n,t,m,u,v,o){const d=r("OnboardingHeading"),c=r("ServiceBox"),_=r("OnboardingNavigation"),g=r("OnboardingPage");return p(),$(g,null,{header:a(()=>[i(d,{title:"Add services"})]),content:a(()=>[e("div",D,[i(c,{active:o.mode==="demo",class:"cursor-pointer",onClicked:t[0]||(t[0]=f=>n.update("demo"))},{default:a(()=>[H]),_:1},8,["active"]),s(),i(c,{active:o.mode==="manually",class:"cursor-pointer",onClicked:t[1]||(t[1]=f=>n.update("manually"))},{default:a(()=>[E]),_:1},8,["active"])])]),navigation:a(()=>[i(_,{"next-step":o.nextStep,"previous-step":"onboarding-create-mesh"},null,8,["next-step"])]),_:1})}const z=l(P,[["render",L]]);export{z as default};