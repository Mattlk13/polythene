!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-mithril-base"),require("polythene-core-card"),require("polythene-mithril-icon"),require("polythene-mithril-list-tile"),require("polythene-mithril-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-card","polythene-mithril-icon","polythene-mithril-list-tile","polythene-mithril-shadow"],r):r(e.polythene={},e["polythene-mithril-base"],e["polythene-core-card"],e["polythene-mithril-icon"],e["polythene-mithril-list-tile"],e["polythene-mithril-shadow"])}(this,function(e,r,t,o,i,n){"use strict";var a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},l=r.ViewComponent(a({},t.coreCardActions));l.displayName="CardActions";var c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},h=r.StateComponent(c({},t.coreCardMedia));h.displayName="CardMedia";var p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},d=r.ViewComponent(p({},t.coreCardPrimary));d.displayName="CardPrimary";var s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},y=r.ViewComponent(s({},t.coreCard,{createContent:function(e,r){return t.coreCard.createContent(e,s(r,{CardActions:l,CardMedia:h,CardPrimary:d,Icon:o.Icon,ListTile:i.ListTile,Shadow:n.Shadow}))}}));y.theme=t.coreCard.theme,y.displayName="Card",e.Card=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-card.js.map