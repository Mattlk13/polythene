!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-react-base-spinner"),require("polythene-core-ios-spinner"),require("cyano-react"),require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base-spinner","polythene-core-ios-spinner","cyano-react","polythene-core"],n):n((e=e||self).polythene={},e["polythene-react-base-spinner"],e["polythene-core-ios-spinner"],e["cyano-react"],e["polythene-core"])}(this,(function(e,n,r,t,o){"use strict";function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var s="pe-spinner__placeholder",c=t.cast(r._Spinner,{h:t.h,BaseSpinner:n.BaseSpinner}),a=t.cast(o._Conditional,{h:t.h,useState:t.useState,useEffect:t.useEffect});a.displayName="IOSSpinnerToggle";var l=function(e){return t.h(a,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(r,!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},e,{placeholderClassName:s,instance:c}))};l.classes={component:"pe-ios-spinner",blades:"pe-ios-spinner__blades",blade:"pe-ios-spinner__blade"},l.displayName="IOSSpinner",e.IOSSpinner=l,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=polythene-react-ios-spinner.js.map
