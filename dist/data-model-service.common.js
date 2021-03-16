!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lodash.isobject"),require("lodash.isempty"),require("lodash.isarray"),require("lodash.mapvalues"),require("lodash.get"),require("lodash.topairs"),require("type-of")):"function"==typeof define&&define.amd?define(["exports","lodash.isobject","lodash.isempty","lodash.isarray","lodash.mapvalues","lodash.get","lodash.topairs","type-of"],t):(e=e||self,function(){var r=e["data-model-service"],n=e["data-model-service"]={};t(n,e.isObject,e.isEmpty,e.isArray,e.mapValues,e.getVal,e.toPairs,e.typeOf),n.noConflict=function(){return e["data-model-service"]=r,n}}())}(this,(function(e,t,r,n,o,a,i,s){"use strict";function u(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n,o=o&&o.hasOwnProperty("default")?o.default:o,a=a&&a.hasOwnProperty("default")?a.default:a,i=i&&i.hasOwnProperty("default")?i.default:i,s=s&&s.hasOwnProperty("default")?s.default:s;var l=u((function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(n){return"function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?e.exports=r=function(e){return t(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},r(n)}e.exports=r}));var f=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=function(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e};var d=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e};var y=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t},v=u((function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t})),h=u((function(e){function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,n)}e.exports=t}));var m=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)};var b=function(e,t){var r=t.get(e);if(!r)throw new TypeError("attempted to get private field on non-instance");return r.get?r.get.call(e):r.value};var g=function(e,t,r){var n=t.get(e);if(!n)throw new TypeError("attempted to set private field on non-instance");if(n.set)n.set.call(e,r);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=r}return r};var w=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},P=function(){function e(){f(this,e),w(this,"parsedData",{})}return p(e,[{key:"getModel",value:function(){return{}}},{key:"parse",value:function(){return{}}},{key:"traverse",value:function(){return{}}}]),e}();var O=function(e){if(Array.isArray(e))return e};var x=function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r};var k=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")};var j=function(e,t){return O(e)||x(e,t)||k()};function q(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.isPass,r=e.msg,n=void 0===r?"":r,o=e.val,a=void 0===o?"":o,i=e.expectedType,s=void 0===i?"":i,u=e.keyName,f=void 0===u?"":u,c=e.oneOf,p=void 0===c?[]:c;return{isPass:void 0!==t&&t,reason:{msg:n,property:f,value:a||"",type:l(a),expected:{type:s,oneOf:p}}}}function S(e,o){if(!e||!o)return q({isPass:!1,msg:"valid-data require 2 args(data & schema)"});if(!t(e))return q({isPass:!1,msg:"args[0] require object"});if(!t(o)||n(o))return q({isPass:!1,msg:"args[1](schema) require object"});if(r(o))return q({isPass:!0,msg:"args[1](schema) is empty"});if(n(e))return q({isPass:!1,msg:"args[0](data) require object"});var a=function(e,t){var r=[],o=[];return i(t).some((function(t){var a=j(t,2),i=a[0],u=a[1],l=e[i];if("boolean"===s(u.required)&&!u.required)return o.push(q({isPass:!0,val:l,expectedType:u.type,keyName:i,msg:""})),!1;if("undefined"===s(l))return r.push(q({isPass:!1,val:"undefined",expectedType:u.type,keyName:i,msg:"Lose ".concat(i)})),!0;if(s(l)!==u.type)return r.push(q({isPass:!1,val:l,expectedType:u.type,keyName:i,msg:"type error"})),!0;var f=u.oneOf;return n(f)&&0<f.length?f.includes(l)?(o.push(q({isPass:!0,val:l,expectedType:u.type,keyName:i,msg:""})),!1):(r.push(q({isPass:!1,val:l,expectedType:u.type,keyName:i,msg:"oneOf not found ".concat(l),oneOf:f})),!0):(o.push(q({isPass:!0,val:l,expectedType:u.type,keyName:i,msg:""})),!1)})),{errors:r,passData:o}}(e,o).errors;return 0<a.length?a.shift():{isPass:!0,reason:{msg:"",property:"",value:"",type:"",expected:{type:"",oneOf:[]}}}}var T={type:{type:"string",description:"类型",oneOf:["string","number","integer","boolean","object","array","null"],required:!0},description:{type:"string",description:"描述",required:!1},from:{type:"string",description:"数据来源",required:!0},properties:{type:"object",description:"属性",required:!1},default:{type:"function",description:"默认值",required:!1},required:{type:"boolean",description:"是否必传",required:!1}};function E(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}var _=function(e){function o(e){var t;return f(this,o),t=y(this,v(o).call(this)),L.add(d(t)),I.add(d(t)),V.add(d(t)),D.add(d(t)),A.add(d(t)),C.add(d(t)),M.add(d(t)),N.add(d(t)),W.set(d(t),{writable:!0,value:{}}),E(d(t),N,R).call(d(t),e),t}return m(o,e),p(o,[{key:"getModel",value:function(){return b(this,W)}},{key:"parse",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t(e)?r(e)&&!n(e)?E(this,L,K).call(this):n(e)?E(this,D,G).call(this,e):E(this,C,B).call(this,e):E(this,L,K).call(this)}}]),o}(P),W=new WeakMap,N=new WeakSet,M=new WeakSet,C=new WeakSet,A=new WeakSet,D=new WeakSet,V=new WeakSet,I=new WeakSet,L=new WeakSet,R=function(e){var r=function(e,r){if(!t(e))return{isPass:!1,reason:{msg:"args[0] require object",property:"",value:"",type:"string",expected:{type:"",oneOf:[]}}};var n=null;return Object.keys(e).some((function(t){var o=S(e[t],r);return!o.isPass&&(n=o,!0)})),n||{isPass:!0,reason:{msg:"",property:"",value:"",type:"",expected:{type:"",oneOf:[]}}}}(e,T);if(!r.isPass)throw new Error(r);E(this,M,z).call(this,e)},z=function(e){g(this,W,e)},B=function(e){var t=this;return o(b(this,W),(function(r){var n=a(e,r.from,E(t,V,H).call(t,r.default));if((null===n&&(n=E(t,V,H).call(t,r.default)),"function"==typeof r.stopConvert)&&!0===r.stopConvert(a(e,r.from),e))return E(t,I,J).call(t,n,r.type);var o="";"."===r.from?o=E(t,A,F).call(t,e,r):(""===n&&(n=E(t,V,H).call(t,r.default)),o=E(t,A,F).call(t,n,r)),null===o&&(o=E(t,V,H).call(t,r.default));var i=E(t,I,J).call(t,o,r.type);return"function"==typeof r.format&&(i=r.format(i,e)),i}))},F=function(e,t){return"object"!==t.type&&"array"!==t.type||!t.properties?e:Q(t.properties).parse(e)},G=function(e){var t=this;return void 0===e[0]||["number","boolean","string"].includes(l(e[0]))?e:e.map((function(e){return E(t,C,B).call(t,e)}))},H=function(e){return"function"==typeof e?e():null==e?"":e},J=function(e,t){return l(e)===t?e:"number"===t?+e:"string"===t?"".concat(e):"boolean"===t?!!e:e},K=function(){var e=this;return o(b(this,W),(function(t){return E(e,V,H).call(e,t.default)}))};function Q(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return new _(e)}e.createDataModel=Q,e.default=_,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=data-model-service.common.js.map
