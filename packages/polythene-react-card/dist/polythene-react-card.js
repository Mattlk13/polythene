!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-react-base"),require("polythene-core-card"),require("polythene-react-icon"),require("polythene-react-list-tile"),require("polythene-react-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core-card","polythene-react-icon","polythene-react-list-tile","polythene-react-shadow"],r):r(e.polythene={},e["polythene-react-base"],e["polythene-core-card"],e["polythene-react-icon"],e["polythene-react-list-tile"],e["polythene-react-shadow"])}(this,function(e,r,t,o,a,n){"use strict";var c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i=r.ViewComponent(c({},t.coreCardActions));i.displayName="CardActions";var l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},p=r.StateComponent(l({},t.coreCardMedia));p.displayName="CardMedia";var d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=r.ViewComponent(d({},t.coreCardPrimary));s.displayName="CardPrimary";var y=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},h=r.ViewComponent(y({},t.coreCard,{createContent:function(e,r){return t.coreCard.createContent(e,y(r,{CardActions:i,CardMedia:p,CardPrimary:s,Icon:o.Icon,ListTile:a.ListTile,Shadow:n.Shadow}))}}));h.theme=t.coreCard.theme,h.displayName="Card",e.Card=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-card.js.map