!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e=e||self).polythene={},e["polythene-core"])}(this,function(e,t){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var l,a=e[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u={component:"pe-radio-group"};e._RadioGroup=function(e){var l=e.h,a=e.a,i=e.useState,c=e.useEffect,f=e.RadioButton,d=r(e,["h","a","useState","useEffect","RadioButton"]),s=o(i(),2),p=s[0],v=s[1],h=d.content||d.buttons||d.children;c(function(){var e=h.reduce(function(e,t,n){return void 0===t.value&&console.error("Option 'value' not set for radio button"),null!==e?e:void 0!==t.defaultChecked||void 0!==d.defaultCheckedValue&&t.value===d.defaultCheckedValue||void 0!==d.defaultSelectedValue&&t.value===d.defaultSelectedValue?n:e},null);v(e)},[]);var y=n({},t.filterSupportedAttributes(d),d.testId&&{"data-test-id":d.testId},{className:[u.component,"dark"===d.tone?"pe-dark-tone":null,"light"===d.tone?"pe-light-tone":null,d.className||d[a.class]].join(" ")}),b=d.checkedValue,m=h.length?h.map(function(e,t){if(!e)return null;var r=void 0!==e.checked?e.checked:void 0!==b?e.value===b:p===t;return l(f,n({},{name:d.name,key:e.value},d.all,e,{onChange:function(e){var n=e.value;return v(t),d.onChange&&d.onChange({value:n})},checked:r}))}):null,g=[d.before,m,d.after];return l(d.element||"div",y,g)},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-radio-group.js.map
