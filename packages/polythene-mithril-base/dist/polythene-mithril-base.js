!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("mithril")):"function"==typeof define&&define.amd?define(["exports","mithril"],n):n(e.polythene=e.polythene||{},e.m)}(this,function(e,n){"use strict";var t={class:"class",formaction:"formaction",onblur:"onblur",onclick:"onclick",onfocus:"onfocus",onkeydown:"onkeydown",onkeyup:"onkeyup",onmousedown:"onmousedown",onmouseout:"onmouseout",onmouseover:"onmouseover",onmouseup:"onmouseup",tabindex:"tabindex"},r=n="default"in n?n.default:n,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i=function(e){var n=e.createContent,i=e.createProps,s=e.element,u=e.getInitialState,a=void 0===u?function(){return{}}:u,c=e.onMount,f=void 0===c?function(){}:c,l=e.onUnmount,d=void 0===l?function(){}:l,m=e.state,v=void 0===m?{}:m,p=function(e){return o({},e,e.dom?{dom:e.dom}:null,{updateState:y(e)})},y=function(e){return function(n,t,o){e.state[n]=t,setTimeout(function(){r.redraw(),o&&o()},0)}},b=function(e){return e.state=o(e.state,v,a(e.attrs))};return{view:function(e){var o=p(e);return r(e.attrs.element||s,i(o,{renderer:r,requiresKeys:!1,keys:t}),[e.attrs.before,n(o,{renderer:r,requiresKeys:!1,keys:t}),e.attrs.after])},oninit:function(e){return b(p(e))},oncreate:function(e){return f(p(e))},onremove:function(e){return d(p(e))}}},s=function(e){var n=e.createContent,o=e.createProps,i=e.element,s=e.renderView,u=e.onMount,a=e.onUnmount,c=function(e){return r(e.attrs.element||i,o(e,{renderer:r,requiresKeys:!1,keys:t}),[e.attrs.before,n(e,{renderer:r,requiresKeys:!1,keys:t}),e.attrs.after])};return{view:s||c,oncreate:u,onremove:a}},u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a={oninit:function(e){e.state={visible:e.attrs.permanent||e.attrs.show||!1,transitioning:!1}},view:function(e){var t=e.attrs,r=e.state;return t.permanent||r.transitioning||(t.show?r.visible=!0:t.hide&&(r.visible=!1)),r.visible?n(t.instance,u({},t,{setVisible:function(e){return r.visible=e,n.redraw()},setTransitioning:function(e){return r.transitioning=e,n.redraw()}})):n("span",{className:t.placeholderClassName})}};e.keys=t,e.renderer=r,e.statefulComponent=i,e.viewComponent=s,e.Conditional=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-base.js.map
