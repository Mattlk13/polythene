!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-css-base-spinner"),require("polythene-core-css"),require("polythene-core"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-css-base-spinner","polythene-core-css","polythene-core","polythene-theme"],t):t((e=e||self).polythene={},e["polythene-css-base-spinner"],e["polythene-core-css"],e["polythene-core"],e["polythene-theme"])}(this,(function(e,t,r,n,o){"use strict";function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s={general_styles:function(e){return[r.sel(e,{" .pe-ios-spinner__blade":{background:"currentcolor"}})]}},l=function(e){return i({},"color_"+e,(function(t,n){return[r.sel(t,{color:n["color_"+e]})]}))},c=a({},s,l("light")),p=a({},s,l("dark")),u=r.createColor({varFns:{lightTintFns:c,darkTintFns:p},superColor:t.color}),d=function(e){return[0,1,2,3,4,5,6,7,8,9,10,11].map((function(t){var r=-1/12*t*n.styleDurationToMs(e.rotation_animation_duration);return i({}," .pe-ios-spinner__blade:nth-of-type("+(t+1)+")",{transform:"rotate("+(360-30*t)+"deg) translate3d(0,-140%,0)",animation:"iosSpinnerFade "+e.rotation_animation_duration+" "+r+"ms linear infinite"})}))},y={general_styles:function(e){return[r.sel(e,{" .pe-ios-spinner__blades":{transform:"translate3d(0,0,0)",position:"relative",width:"100%",height:"100%"}," .pe-ios-spinner__blade":{position:"absolute",width:"9%",height:"28%",left:"45.5%",top:"36%",opacity:0,borderRadius:"50px"},"@keyframes iosSpinnerFade":{" 0%":{opacity:.64}," 100%":{opacity:.035}}})]},rotation_animation_duration:function(e,t){return[r.sel(e,{" .pe-ios-spinner__blades":[d(t)]})]}},f=r.createLayout({varFns:y,superLayout:t.layout}),h={general_styles:!0,rotation_animation_duration:"1s",color_light:r.rgba(o.vars.color_light_foreground),color_dark:r.rgba(o.vars.color_dark_foreground)},_=[f,u],b=".".concat("pe-ios-spinner"),g=r.styler.createAddStyle(b,_,h),m=r.styler.createGetStyle(b,_,h);e.addGeneralStyleToHead=function(){return r.styler.addStyle({selectors:[b],fns:_,vars:h})},e.addStyle=g,e.color=u,e.getStyle=m,e.layout=f,e.vars=h,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-css-ios-spinner.js.map
