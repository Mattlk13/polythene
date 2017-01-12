!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("mithril"),require("polythene-button"),require("polythene-shadow"),require("polythene-core"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-button","polythene-shadow","polythene-core","polythene-css","polythene-theme"],e):e(o.polythene=o.polythene||{},o.m,o["polythene-button"],o["polythene-shadow"],o["polythene-core"],o["polythene-css"],o["polythene-theme"])}(this,function(o,e,t,r,n,a,c){"use strict";e="default"in e?e.default:e;var d=c.vars.rgba,i={color_light_background:"#E0E0E0",color_light_text:d(c.vars.color_light_foreground,c.vars.blend_light_text_primary),color_light_hover_background:"transparent",color_light_focus_background:d(c.vars.color_light_foreground,c.vars.blend_light_background_hover),color_light_active_background:d(c.vars.color_light_foreground,c.vars.blend_light_background_hover),color_light_disabled_background:d(c.vars.color_light_foreground,c.vars.blend_light_background_disabled),color_light_disabled_text:d(c.vars.color_light_foreground,c.vars.blend_light_text_disabled),color_dark_background:d(c.vars.color_primary),color_dark_text:d(c.vars.color_dark_foreground,c.vars.blend_dark_text_primary),color_dark_hover_background:c.vars.color_primary_active,color_dark_focus_background:c.vars.color_primary_active,color_dark_active_background:c.vars.color_primary_dark,color_dark_disabled_background:d(c.vars.color_dark_foreground,c.vars.blend_dark_background_disabled),color_dark_disabled_text:d(c.vars.color_dark_foreground,c.vars.blend_dark_text_disabled)},l=function(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o},_=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o},u=function(o,e,t,r){var n=t["color_"+r+"_border"]||"transparent",a=t["color_"+r+"_active_border"]||n,c=t["color_"+r+"_disabled_border"]||n;return[l({},o+e,{"&, &:link, &:visited":{color:t["color_"+r+"_text"]}," .pe-button__content":{"background-color":t["color_"+r+"_background"],"border-color":n},"&.pe-button--disabled":{color:t["color_"+r+"_disabled_text"]," .pe-button__content":{"background-color":t["color_"+r+"_disabled_background"],"border-color":c}},"&.pe-button--selected":{" .pe-button__content":{"background-color":t["color_"+r+"_active_background"],"border-color":a}," .pe-button__focus":{opacity:1,"background-color":t["color_"+r+"_focus_background"]}},"&.pe-button--focus":{" .pe-button__focus":{opacity:1,"background-color":t["color_"+r+"_focus_background"]}}})]},s=function(o,e,t,r){var n=t["color_"+r+"_border"],a=t["color_"+r+"_border"]||n;return[l({},o+e+":hover",{"&:not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash":{"background-color":t["color_"+r+"_hover_background"],"border-color":a}})]},b=function(o,e){return[u("",o,e,"light"),u(".pe-dark-theme ",o,e,"dark"),s("html.pe-no-touch ",o,e,"light"),s("html.pe-no-touch .pe-dark-theme ",o,e,"dark")]},h=[b],p=".pe-button--raised",v=function(o,e){return a.styler.generateStyles([o,p],_({},i,e),h)};a.styler.generateStyles([p],i,h);var g={component:"pe-button pe-button--text pe-button--raised"},f=5,k=void 0,y=function(){},m=[];n.subscribe(n.touchEndEvent,function(){return y()});var w=function(o,t,r){var n=o.zBase,a=t.increase||1,c=o.z;"down"===r&&5!==n?c=Math.min(c+a,f):"up"===r&&(c=Math.max(c-a,n)),c!==o.z&&(o.z=c,e.redraw())},x=function(o,t){o.inactive=!0,e.redraw(),setTimeout(function(){o.inactive=!1,e.redraw()},1e3*t.inactivate)},E=function(o,e,t){var r=function(o,e,t){"down"===t?m.push({state:o,attrs:e}):"up"===t&&e.inactivate&&!o.inactive&&x(o,e);var r=e.animateOnTap!==!1;r&&!n.isTouch&&w(o,e,t)};k=function(){return r(e,t,"down")},y=function(){m.map(function(o){r(o.state,o.attrs,"up")}),m=[]},o.addEventListener(n.touchStartEvent,k)},z=function(o){o.removeEventListener(n.touchStartEvent,k)},O=function(o){var n=o.attrs,a=o.state,c=o.children.length&&o.children||n.children;return e(t.button,_({},{parentClass:[n.parentClass||g.component].join(" "),animateOnTap:!1,shadowComponent:e(r.shadow,{z:a.z,animated:!0}),children:c},n))},j={theme:v,oninit:function(o){var e=void 0!==o.attrs.z?o.attrs.z:1;o.state={el:void 0,zBase:e,z:e,tapEventsInited:!1}},oncreate:function(o){o.attrs.disabled||o.state.inactive||o.state.tapEventsInited||(o.state.el=o.dom,E(o.dom,o.state,o.attrs),o.state.tapEventsInited=!0)},onremove:function(o){o.state.tapEventsInited&&z(o.dom)},view:O};o.raisedButton=j,o.raisedButtonVars=i,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-raised-button.js.map
