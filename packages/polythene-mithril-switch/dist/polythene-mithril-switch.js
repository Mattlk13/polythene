!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-switch"),require("cyano-mithril"),require("polythene-mithril-shadow"),require("polythene-mithril-icon-button"),require("polythene-core-selection-control")):"function"==typeof define&&define.amd?define(["exports","polythene-core-switch","cyano-mithril","polythene-mithril-shadow","polythene-mithril-icon-button","polythene-core-selection-control"],t):t((e=e||self).polythene={},e["polythene-core-switch"],e["cyano-mithril"],e["polythene-mithril-shadow"],e["polythene-mithril-icon-button"],e["polythene-core-selection-control"])}(this,(function(e,t,o,i,n,l){"use strict";var r=o.cast(t._ViewControl,{h:o.h,a:o.a,Shadow:i.Shadow,IconButton:n.IconButton});r.displayName="ViewControl";var c=o.cast(l._SelectionControl,{h:o.h,a:o.a,useState:o.useState,useEffect:o.useEffect,ViewControl:r});c.displayName="SelectionControl";var h=o.cast(t._Switch,{h:o.h,a:o.a,SelectionControl:c});h.displayName="Switch",e.Switch=h,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-mithril-switch.js.map
