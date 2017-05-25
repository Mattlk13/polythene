!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-core"),require("mithril"),require("polythene-mithril"),require("polythene-core-css"),require("polythene-core-menu"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","mithril","polythene-mithril","polythene-core-css","polythene-core-menu","polythene-theme"],o):o(e.polythene=e.polythene||{},e["polythene-core"],e.m,e["polythene-mithril"],e["polythene-core-css"],e["polythene-core-menu"],e["polythene-theme"])}(this,function(e,o,t,r,n,i,l){"use strict";function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function d(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}t="default"in t?t.default:t;var c={component:"pe-dialog",actions:"pe-dialog__actions",body:"pe-dialog__body",content:"pe-dialog__content",footer:"pe-dialog__footer",header:"pe-dialog__header",title:"pe-dialog__title",footerHigh:"pe-dialog__footer--high",fullscreen:"pe-dialog--fullscreen",hasBackdrop:"pe-dialog--backdrop",hasBottomOverflow:"pe-dialog--overflow-bottom",hasTopOverflow:"pe-dialog--overflow-top",visible:"pe-dialog--visible",menuContent:i.CoreMenu.classes.content},s=l.vars.rgba,p={border_radius:l.vars.unit_block_border_radius,padding:3*l.vars.grid_unit_component,header_bottom:20,header_height:60,footer_height:52,color_light_content_background:s(l.vars.color_light_background),color_light_title_text:s(l.vars.color_light_foreground,l.vars.blend_light_text_primary),color_light_body_text:s(l.vars.color_light_foreground,l.vars.blend_light_text_regular),color_light_body_border:s(l.vars.color_light_foreground,l.vars.blend_light_border_light),color_light_backdrop_background:"rgba(0, 0, 0, .4)",color_dark_content_background:s(l.vars.color_dark_background),color_dark_title_text:s(l.vars.color_dark_foreground,l.vars.blend_dark_text_primary),color_dark_body_text:s(l.vars.color_dark_foreground,l.vars.blend_dark_text_regular),color_dark_body_border:s(l.vars.color_dark_foreground,l.vars.blend_dark_border_light),color_dark_backdrop_background:"rgba(0, 0, 0, .5)"},u=function(e,o){var t;return[(t={},a(t,e,[n.flex.layoutCenterCenter,{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:l.vars.z_dialog,height:"100%",padding:o.padding+"px 40px",".pe-dialog--fullscreen":{padding:0," .pe-dialog__content":{borderRadius:0,maxWidth:"none",height:"100%",width:"100%"," .pe-dialog__header, .pe-dialog__footer":{display:"none"}," .pe-dialog__body":{padding:0,height:"100%",maxHeight:"calc(100%)",border:"none"}}}," .pe-dialog__header, pe-dialog__body, pe-dialog__header":{zIndex:1}," .pe-dialog__content":[n.flex.layoutVertical,{position:"relative",maxHeight:"100%",minWidth:"280px",maxWidth:7*l.vars.grid_unit_menu+"px",borderRadius:o.border_radius+"px"," > .pe-shadow":{zIndex:-1},".pe-menu__content":{" .pe-dialog__body":{padding:0,border:"none"}}," p":{margin:0}," p + p":{marginTop:"16px"}}]," .pe-dialog__title":{fontSize:l.vars.font_size_title+"px",lineHeight:"24px",fontWeight:l.vars.font_weight_medium,"& + div":{marginTop:"16px"}}," .pe-dialog__header":{padding:[o.padding-4,o.padding,o.header_bottom-4,o.padding].map(function(e){return e+"px"}).join(" "),minHeight:o.header_height+"px"," .pe-dialog__title":[n.mixin.ellipsis(1),{width:"100%"}]}," .pe-dialog__body":[n.flex.selfStretch,{padding:o.padding+"px",overflowY:"auto","-webkit-overflow-scrolling":"touch",borderWidth:"1px",borderStyle:"solid none",borderColor:"transparent",maxHeight:"calc(100vh - "+2*o.padding+"px - "+(o.header_height+o.footer_height)+"px)"}]," .pe-dialog__header + .pe-dialog__body":{paddingTop:0}," .pe-dialog__footer":{padding:"2px 8px",minHeight:o.footer_height+"px",fontSize:0,".pe-dialog__footer--high":{paddingBottom:"8px"}}," .pe-dialog__actions":[n.flex.layoutHorizontal,n.flex.layoutEndJustified,n.flex.layoutWrap,{margin:"0 -4px"," .pe-button":{height:"36px",marginTop:"6px",marginBottom:"6px",padding:0}}]}]),a(t," body.pe-dialog--open",{overflow:"hidden",left:0,"-webkit-overflow-scrolling":"touch",top:0,width:"100%"}),t)]},g=function(e,o,t,r){return[d({},e.map(function(e){return e+o}).join(","),{"&.pe-dialog--backdrop":{backgroundColor:t["color_"+r+"_backdrop_background"]}," .pe-dialog__content":{backgroundColor:t["color_"+r+"_content_background"]}," .pe-dialog__header .pe-dialog__title":{color:t["color_"+r+"_title_text"]}," .pe-dialog__body":{color:t["color_"+r+"_body_text"]},"&.pe-dialog--overflow-top .pe-dialog__body":{borderTopColor:t["color_"+r+"_body_border"]},"&.pe-dialog--overflow-bottom .pe-dialog__body":{borderBottomColor:t["color_"+r+"_body_border"]}})]},_=function(e,o){return[g([".pe-dark-tone",".pe-dark-tone "],e,o,"dark"),g(["",".pe-light-tone",".pe-light-tone "],e,o,"light")]},h=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f=[u,_],b="."+c.component,v=function(e,o){return n.styler.generateStyles([e,b],h({},p,o),f)};n.styler.generateStyles([b],p,f);var m=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y=function(e){var o=e.scrollEl;o&&(e.topOverflow=o.scrollTop>0,e.bottomOverflow=o.scrollHeight-(o.scrollTop+o.getBoundingClientRect().height)>0)},w=function(e){var o=e.footerEl;if(o){var t=window.getComputedStyle(o);o.getBoundingClientRect().height>parseInt(t.minHeight,10)?o.classList.add(c.footerHigh):o.classList.remove(c.footerHigh)}},x=function(e,t){var r=e.instanceId;e.transitioning=!0;var n=t.transitions||e.transitions;return o.show(m({},t,n.show(e.el,t))).then(function(){e.transitioning=!1,e.visible=!0,e.didShow&&e.didShow(r)})},k=function(e,r){var n=e.instanceId;e.transitioning=!0;var i=r.transitions||e.transitions;return o.hide(m({},r,i.hide(e.el,r))).then(function(){C.remove(n),e.transitioning=!1,e.visible=!1,e.didHide&&e.didHide(n),setTimeout(t.redraw,0)})},O=function(e,o){var r=o.content||o.body||o.menu,n=!(o.updateContentOnScroll||!1)&&e.isScrolling;return t("div",{class:c.body,oncreate:function(o){var t=o.dom;return e.scrollEl=t},onbeforeupdate:!n,onscroll:function(){e.isScrolling=!0,y(e),clearTimeout(e.scrollWatchId),e.scrollWatchId=setTimeout(function(){e.isScrolling=!1},150)}},r)},H=function(e,n){var i=function(){y(e),w(e),t.redraw()},l=function(o){n.fullscreen||n.modal||27!==o.which||e.transitioning||(a(),k(e,m({},n,{hideDelay:0})))},a=function(){o.unsubscribe("resize",i),o.unsubscribe("keydown",l)},d=n.element||"form",s=m({},o.filterSupportedAttributes(n,{remove:["style"]}),{class:[c.component,n.fullscreen?c.fullscreen:null,n.backdrop?c.hasBackdrop:null,e.topOverflow||n.borders?c.hasTopOverflow:null,e.bottomOverflow||n.borders?c.hasBottomOverflow:null,e.visible?c.visible:null,"dark"===n.tone?"pe-dark-tone":null,"light"===n.tone?"pe-light-tone":null,n.class].join(" "),oncreate:function(r){var a=r.dom;e.el=a,o.subscribe("resize",i),o.subscribe("keydown",l),y(e),x(e,n).then(function(){y(e),w(e),(e.topOverflow||e.bottomOverflow)&&setTimeout(t.redraw,0)})},onremove:a,onclick:function(o){o.target===e.el&&(n.modal||e.transitioning||k(e,m({},n,{hideDelay:0})))}},n.formOptions?n.formOptions:null),p=O(e,n),u=t("div",{class:[c.content,n.menu?c.menuContent:null].join(" "),style:n.style},[n.fullscreen?null:t(r.Shadow,{z:e.z,animated:!0}),n.fullscreen?null:n.title?t("div",{class:c.header,oncreate:function(o){var t=o.dom;e.headerHeight=t.scrollHeight}},t("div",{class:c.title},n.title)):null,p,n.fullscreen?null:n.footer?t("div",{class:c.footer,oncreate:function(o){var t=o.dom;e.footerHeight=t.scrollHeight,e.footerEl=t,w(e)},onupdate:function(o){var t=o.dom;return e.footerHeight=t.scrollHeight,w(e)}},[t("div",{class:c.actions},n.footer)]):null]);return t(d,s,[n.before,u,n.after])},S={theme:v,oninit:function(e){var o=e.attrs,t=o.opts,r=void 0!==t.z?t.z:3;e.state=m(e.state,o,{z:r,scrollEl:void 0,footerEl:void 0,topOverflow:!1,bottomOverflow:!1,scrollWatchId:0,isScrolling:!1,headerHeight:0,footerHeight:0,el:void 0,visible:!1,transitioning:!1})},view:function(e){var o=e.state,t=e.attrs,r="function"==typeof t.opts?t.opts():t.opts;return t.hide&&!o.transitioning&&k(o,r),H(o,r)}},z={show:function(e,o){return{el:e,showDuration:o.showDuration||.22,showDelay:o.showDelay||0,beforeShow:function(){return e.style.opacity=0},show:function(){return e.style.opacity=1}}},hide:function(e,o){return{el:e,hideDuration:o.hideDuration||.22,hideDelay:o.hideDelay||0,hide:function(){return e.style.opacity=0}}}},C=o.multiple({instance:S,transitions:z,defaultId:"default_dialog",element:".pe-dialog__holder",placeholder:"span.pe-dialog__placeholder",bodyShowClass:"pe-dialog--open"});e.default=C,e.classes=c,e.vars=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-dialog.js.map
