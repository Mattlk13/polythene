!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e=e||self).polythene={},e["polythene-core"])}(this,function(e,t){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i={component:"pe-menu",panel:"pe-menu__panel",content:"pe-menu__content",placeholder:"pe-menu__placeholder",backdrop:"pe-menu__backdrop",floating:"pe-menu--floating",origin:"pe-menu--origin",permanent:"pe-menu--permanent",showBackdrop:"pe-menu--backdrop",visible:"pe-menu--visible",width_auto:"pe-menu--width-auto",width_n:"pe-menu--width-",isTopMenu:"pe-menu--top-menu",listTile:"pe-list-tile",selectedListTile:"pe-list-tile--selected"},a={isVisible:!1,isTransitioning:!1,isHiding:!1};e._Menu=function(e){var l=e.h,s=e.a,u=e.useReducer,c=e.useState,p=e.useEffect,f=e.useRef,d=e.getRef,h=e.Shadow,g=o(e,["h","a","useReducer","useState","useEffect","useRef","getRef","Shadow"]),y=r(u(t.transitionStateReducer,a),2)[1],m=r(c(),2),v=m[0],b=m[1],w=r(c(!!g.permanent),2)[1],S=f(),k=f(),x=function(){O(),R()},E=function(e){var t=e.isShow,o=e.hideDelay,r=void 0===o?g.hideDelay:o;return{dispatchTransitionState:y,setIsVisible:w,props:n({},g,{hideDelay:r}),isShow:t,beforeTransition:t?function(){return x()}:null,domElements:{el:S.current,showClassElement:v},showClass:i.visible}},O=function(){if(!t.isServer&&g.target){var e=S.current,o=k.current,r=document.querySelector(g.target);if(r&&e){var a=t.stylePropCompare({element:e,prop:"position",equals:"fixed"});if(a&&!g.topMenu&&!t.stylePropCompare({element:v,pseudoSelector:":before",prop:"content",contains:'"'.concat("top_menu",'"')}))return n(e.style,{}),void e.offsetHeight;var l=e.parentNode.getBoundingClientRect(),s=r.getBoundingClientRect(),u=void 0!==g.offsetH?g.offsetH:void 0!==g.offset?g.offset:0,c=void 0!==g.offsetV?g.offsetV:"79%",p=-1!==u.toString().indexOf("%")?Math.round(.01*parseFloat(u)*s.width):Math.round(parseFloat(u)),f=-1!==c.toString().indexOf("%")?Math.round(.01*parseFloat(c)*s.height):Math.round(parseFloat(c)),d=g.origin||"top",h=d.split(/\W+/).reduce(function(e,t){return e[t]=!0,e},{}),y=o.querySelectorAll("."+i.listTile)[0];if(g.reposition){var m=o.querySelector("."+i.selectedListTile);if(y&&m){var b=y.getBoundingClientRect(),w=m.getBoundingClientRect();f=b.top-w.top}var x=(m||y).getBoundingClientRect(),E=r.getBoundingClientRect().height-x.height;f+=Math.abs(E)/2}else g.origin&&!a&&(h.top?f+=s.top-l.top:h.bottom&&(f+=s.top-l.bottom));if(g.height){var O=y?y.clientHeight:48;if("max"===g.height){var R=f,T=O;e.style.height="calc(100% - ".concat(R+T,"px)")}else{var _=/^\d+$/.test(g.height.toString())?"".concat(g.height,"px"):g.height;e.style.height=_}}var D=e.style.transitionDuration;e.style.transitionDuration="0ms",e.parentNode&&!a&&(h.right?e.style.right=s.right-l.right+p+"px":e.style.left=s.left-l.left+p+"px",h.bottom?e.style.bottom=f+"px":e.style.top=f+"px",e.style.transformOrigin=d.split(/\W+/).join(" ")),e.offsetHeight,e.style.transitionDuration=D}}},R=function(){if(!t.isServer&&g.scrollTarget){var e=document.querySelector(g.scrollTarget);e&&(k.current.scrollTop=e.offsetTop)}},T=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).hideDelay;return t.transitionComponent(E({isShow:!1,hideDelay:e}))};p(function(){if(v){S.current=v.querySelector(".".concat(i.panel)),n(S.current.style,g.style),k.current=v.querySelector(".".concat(i.content));var e=function(e){"Escape"!==e.key&&"Esc"!==e.key||T({hideDelay:0})},o=function(e){e.target!==S.current&&T()};return g.permanent||(t.subscribe("resize",x),t.subscribe("keydown",e),setTimeout(function(){t.pointerEndDownEvent.forEach(function(e){return document.addEventListener(e,o)}),t.transitionComponent(E({isShow:!0}))},0)),function(){g.permanent||(t.unsubscribe("resize",x),t.unsubscribe("keydown",e),t.pointerEndDownEvent.forEach(function(e){return document.removeEventListener(e,o)}))}}},[v]);var _,D,C=g.type||"floating",M=n({},t.filterSupportedAttributes(g,{remove:["style"]}),g.testId&&{"data-test-id":g.testId},d(function(e){return e&&!v&&(b(e),g.getRef&&g.getRef(e))}),{className:[i.component,g.permanent?i.permanent:null,g.origin?i.origin:null,g.backdrop?i.showBackdrop:null,g.topMenu?i.isTopMenu:null,"floating"!==C||g.permanent?null:i.floating,g.width||g.size?(D=g.width||g.size,_=D<1.5?1.5:D,i.width_n+_.toString().replace(".","-")):null,"dark"===g.tone?"pe-dark-tone":null,"light"===g.tone?"pe-light-tone":null,g.className||g[s.class]].join(" ")}),j=void 0!==g.shadowDepth?g.shadowDepth:1,q=[l("div",{key:"backdrop",className:i.backdrop}),l("div",{className:i.panel,key:"panel"},[l(h,{shadowDepth:j,animated:!0,key:"shadow"}),l("div",{className:i.content,key:"content"},g.content||g.children)])],B=[g.before,q,g.after];return l(g.element||"div",M,B)},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-menu.js.map
