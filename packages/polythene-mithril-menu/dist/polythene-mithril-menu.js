!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-mithril-base"),require("polythene-core-menu"),require("polythene-mithril-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-menu","polythene-mithril-shadow"],t):t(e.polythene=e.polythene||{},e["polythene-mithril-base"],e["polythene-core-menu"],e["polythene-mithril-shadow"])}(this,function(e,t,n,o){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(e,t){return n.CoreMenu.createProps(e,r(t,{Shadow:o.Shadow}))},a=function(e,t){return n.CoreMenu.createContent(e,r(t,{Shadow:o.Shadow}))},h=t.statefulComponent(r({},n.CoreMenu,{createProps:i,createContent:a})),l={view:function(e){return t.renderer(t.Conditional,r({},{placeholderClassName:n.CoreMenu.classes.placeholder,instance:h},e.attrs))}};l.theme=n.CoreMenu.theme,e.Menu=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-menu.js.map
