!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-css-material-design-spinner"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-css-material-design-spinner","polythene-core-css","polythene-theme"],r):r((e=e||self).polythene={},e["polythene-css-material-design-spinner"],e["polythene-core-css"],e["polythene-theme"])}(this,(function(e,r,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s={general_styles:function(e){return[t.sel(e,{" .pe-md-progress-spinner__circle":{borderColor:"currentcolor"}})]}},i=function(e){return o=function(r,n){return[t.sel(r,{color:n["color_"+e]})]},(n="color_"+e)in(r={})?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,r;var r,n,o},l=o({},s,i("light")),a=o({},s,i("dark")),p=t.createColor({varFns:{lightTintFns:l,darkTintFns:a},superColor:r.color}),c={general_styles:function(e){return[t.sel(e,{position:"relative"," .pe-md-progress-spinner__animation":{position:"absolute",width:"100%",height:"100%"}," .pe-md-progress-spinner__circle":{position:"absolute",boxSizing:"border-box",width:"100%",height:"100%",borderStyle:"solid",borderRadius:"50%"}," .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right":{transform:"rotate(0)",clip:"rect(0, 0, 0, 0)"}})]},progress_animation_duration:function(e,r){return[t.sel(e,{" .pe-md-progress-spinner__animation":{animationDuration:r.progress_animation_duration}})]}},u=t.createLayout({varFns:c,superLayout:r.layout}),d={general_styles:!0,progress_animation_duration:".8s",color_light:t.rgba(n.vars.color_primary),color_dark:t.rgba(n.vars.color_primary)},y=[u,p],g=".".concat("pe-md-progress-spinner"),_=t.styler.createAddStyle(g,y,d),f=t.styler.createGetStyle(g,y,d);e.addGeneralStyleToHead=function(){return t.styler.addStyle({selectors:[g],fns:y,vars:d})},e.addStyle=_,e.color=p,e.getStyle=f,e.layout=u,e.vars=d,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-css-material-design-progress-spinner.js.map
