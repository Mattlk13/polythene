!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core-css"),require("polythene-theme"),require("polythene-css-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme","polythene-css-shadow"],n):n((e=e||self).polythene={},e["polythene-core-css"],e["polythene-theme"],e["polythene-css-shadow"])}(this,function(e,n,t,o){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){r(e,n,t[n])})}return e}var c={general_styles:function(){return[{" .pe-dialog__content":{background:"none"}}]}},l=function(e){var t;return r(t={},"color_"+e+"_border",function(t,o){return[n.sel(t,{" .pe-dialog__content":{borderColor:o["color_"+e+"_border"]}})]}),r(t,"color_"+e+"_background",function(t,o){return[n.sel(t,{" .pe-dialog-pane":{backgroundColor:o["color_"+e+"_background"]}})]}),r(t,"color_"+e+"_backdrop_background",function(t,o){return[n.sel(t,{" .pe-dialog__backdrop":{backgroundColor:o["color_"+e+"_backdrop_background"]}})]}),t},d=i({},c,l("light")),u=i({},c,l("dark")),_=n.createColor({varFns:{lightTintFns:d,darkTintFns:u}}),p=function(e,t,o){return n.sel(e,{" .pe-dialog__content":{borderWidth:"".concat(t.border?1:0,"px"),borderStyle:o?"none none none solid":"none solid none none"}})},s=function(e,t){return[p(e,t,!1),p(n.selectorRTL(e),t,!0)]},g=function(e){return function(n,t){var o;return[{".pe-drawer--fixed":(o={},r(o,e?"right":"left",0),r(o,e?"left":"right","auto"),o)},p("".concat(n,".pe-drawer--border"),i({},t,{border:!0}),e)]}},f=g(!1),h=g(!0),b=function(e){return n.sel(e,{".pe-dialog--visible .pe-dialog__backdrop":{opacity:1}})},m=function(e){return"".concat(e,".pe-drawer--anchor-end")},y=function(e,t){return n.sel(e,{":not(.pe-dialog--visible) .pe-dialog__content":{width:"".concat(t.content_width_mini_collapsed,"px")}})},v=function(e,t,o){var i,a;return n.sel(e,{" .pe-dialog__content":(i={maxWidth:"".concat(t.content_max_width,"px")},r(i,o?"right":"left","".concat(-t.content_max_width-15,"px")),r(i,o?"left":"right","auto"),i),".pe-dialog--visible .pe-dialog__content":(a={},r(a,o?"right":"left",0),r(a,o?"left":"right","auto"),a)})},w=function(e,t){return[v(e,t,!1),v(n.selectorRTL(e),t,!0),v(m(e),t,!0),v(m(n.selectorRTL(e)),t,!1)]},k=function(e,t){return n.sel(e,{" .pe-dialog__content":{width:"".concat(t.content_width,"px")}})},x=function(e,t,o){var i,a;return n.sel(e,{" .pe-dialog__content":(i={},r(i,o?"marginRight":"marginLeft","".concat(-t.content_width-15,"px")),r(i,o?"marginLeft":"marginRight","auto"),i),".pe-dialog--visible .pe-dialog__content":(a={width:"".concat(t.content_width,"px")},r(a,o?"marginRight":"marginLeft",0),r(a,o?"marginLeft":"marginRight","auto"),a)})},L=function(e,t){return[x(e,t,!1),x(n.selectorRTL(e),t,!0),x(m(e),t,!0),x(m(n.selectorRTL(e)),t,!1)]},R=function(e,t){return n.sel(e,{" .pe-dialog__content":{position:"absolute",top:0,zIndex:t.z_index},".pe-dialog--visible":{" .pe-dialog__touch":{display:"block"}}})},O=function(e,t){return n.sel(e,{" .pe-dialog__content":{marginLeft:0,marginRight:0}})},j=function(e,t){return n.sel(e,{position:"static",display:"block",padding:0,overflow:"initial"," .pe-dialog__content":{overflow:"visible",maxHeight:"initial",marginLeft:0,marginRight:0}})},S=function(e,t){return n.sel(e,{position:"static"})},T=function(e,t){return n.sel(e,{" .pe-dialog__content":{borderRadius:t.border_radius+"px"}})},z=function(e,t){return n.sel(e,{height:"auto"," .pe-dialog__content":{height:"auto"}})},P=a({general_styles:function(e,o){return[n.sel(e,[f(e,o),{justifyContent:"flex-start",position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:1,height:"100%",minWidth:0,padding:0,opacity:1,flexShrink:0,transitionProperty:"all",":not(.pe-dialog--transition)":{" .pe-dialog__content":{transitionDuration:"0s"}}," .pe-dialog__content":{position:"relative",height:"100%",overflow:"visible",minWidth:0,flexShrink:0}," .pe-dialog-pane__content":{height:"100%",overflowY:"auto",overflowX:"hidden"}," .pe-dialog-pane":{height:"100%",maxHeight:"none",minWidth:0}," .pe-dialog-pane__body":{overflow:"visible",maxHeight:"none",border:"none"},".pe-drawer--fixed":{position:"fixed",top:0,width:"100%",zIndex:t.vars.z_drawer},".pe-drawer--mini":O(e),".pe-drawer--permanent":j(e),".pe-drawer--floating":z(e),".pe-drawer--cover":R(e,o),".pe-drawer--push":S(e)," .pe-dialog__backdrop":{pointerEvents:"none",opacity:0,display:"block"}," .pe-dialog__touch":{display:"none",position:"absolute",top:0,left:0,right:0,bottom:0},".pe-dialog--backdrop":b(e)}]),[n.sel(n.selectorRTL(e),h(e,o))]]},animation_delay:function(e,t){return[n.sel(e,{"&, .pe-dialog__content, .pe-dialog__backdrop":{transitionDelay:t.animation_delay}})]},animation_duration:function(e,t){return[n.sel(e,{"&, .pe-dialog__content, .pe-dialog__backdrop":{transitionDuration:t.animation_duration}})]},animation_timing_function:function(e,t){return[n.sel(e,{"&, .pe-dialog__content, .pe-dialog__backdrop":{transitionTimingFunction:t.animation_timing_function}})]},border_radius:function(e,n){return[T(e,n)]},content_max_width:function(e,n){return[w("".concat(e,".pe-drawer--cover"),n)]},content_width:function(e,n){return[k(e,n),k("".concat(e,".pe-dialog--visible"),n),k("".concat(e,".pe-drawer--permanent"),n),L("".concat(e,".pe-drawer--push"),n)]},content_width_mini_collapsed:function(e,n){return[y("".concat(e,".pe-drawer--mini"),n)]},cover:function(e,n){return n.cover&&[R(e,n),w(e,n)]},backdrop:function(e,n){return[n.backdrop&&b(e)]},border:function(e,n){return[s(e,n)]},mini:function(e,n){return n.mini&&[O(e),y(e,n)]},permanent:function(e,n){return[n.permanent&&j(e)]},floating:function(e,n){return[n.floating&&z(e)]},push:function(e,n){return n.push&&[S(e),L(e,n)]}},o.sharedVarFns),F=n.createLayout({varFns:P}),C=a({backdrop:!1,border:void 0,cover:!1,floating:!1,mini:!1,permanent:!1,push:!1,z_index:t.vars.z_drawer},o.sharedVars),W=a({general_styles:!0,animation_delay:"0s",animation_duration:".260s",animation_timing_function:"ease-in-out",border_radius:0,content_max_width:5*t.vars.increment,content_width:240,content_width_mini_collapsed:t.vars.increment,color_light_backdrop_background:"rgba(0, 0, 0, .4)",color_dark_backdrop_background:"rgba(0, 0, 0, .5)",color_light_background:n.rgba(t.vars.color_light_background),color_dark_background:n.rgba(t.vars.color_dark_background),color_light_border:n.rgba(t.vars.color_light_foreground,t.vars.blend_light_border_light),color_dark_border:n.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_border_light)},C),D=[F,_],q=".".concat("pe-dialog pe-drawer".replace(/ /g,".")),H=n.styler.createAddStyle(q,D,W),I=n.styler.createGetStyle(q,D,W);n.styler.addStyle({selectors:[q],fns:D,vars:W}),e.addStyle=H,e.color=_,e.getStyle=I,e.layout=F,e.vars=W,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-drawer.js.map
