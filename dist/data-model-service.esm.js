import isObject from 'lodash.isobject';
import isEmpty from 'lodash.isempty';
import isArray from 'lodash.isarray';
import mapValues from 'lodash.mapvalues';
import getVal from 'lodash.get';
import toPairs from 'lodash.topairs';
import typeOf from 'type-of';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

var classPrivateFieldGet = _classPrivateFieldGet;

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }

  return value;
}

var classPrivateFieldSet = _classPrivateFieldSet;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

var Base=function(){function Base(){classCallCheck(this,Base),defineProperty(this,"parsedData",{});}return createClass(Base,[{key:"getModel",value:function getModel(){return {}}},{key:"parse",value:function parse(){return {}}},{key:"traverse",value:function traverse(){return {}}}]),Base}();

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

function error(){var _ref=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_ref$isPass=_ref.isPass,_ref$msg=_ref.msg,msg=void 0===_ref$msg?"":_ref$msg,_ref$val=_ref.val,val=void 0===_ref$val?"":_ref$val,_ref$expectedType=_ref.expectedType,expectedType=void 0===_ref$expectedType?"":_ref$expectedType,_ref$keyName=_ref.keyName,keyName=void 0===_ref$keyName?"":_ref$keyName,_ref$oneOf=_ref.oneOf,oneOf=void 0===_ref$oneOf?[]:_ref$oneOf;return {isPass:void 0!==_ref$isPass&&_ref$isPass,reason:{msg:msg,property:keyName,value:val||"",type:_typeof_1(val),expected:{type:expectedType,oneOf:oneOf}}}}function checkFn(data,schema){var errors=[],passData=[];return toPairs(schema).some(function(_ref2){var _ref3=slicedToArray(_ref2,2),keyName=_ref3[0],schemaItem=_ref3[1],originVal=data[keyName];if("boolean"===typeOf(schemaItem.required)&&!schemaItem.required)return passData.push(error({isPass:!0,val:originVal,expectedType:schemaItem.type,keyName:keyName,msg:""})),!1;if("undefined"===typeOf(originVal))return errors.push(error({isPass:!1,val:"undefined",expectedType:schemaItem.type,keyName:keyName,msg:"Lose ".concat(keyName)})),!0;if(typeOf(originVal)!==schemaItem.type)return errors.push(error({isPass:!1,val:originVal,expectedType:schemaItem.type,keyName:keyName,msg:"type error"})),!0;var oneOf=schemaItem.oneOf;return isArray(oneOf)&&0<oneOf.length?oneOf.includes(originVal)?(passData.push(error({isPass:!0,val:originVal,expectedType:schemaItem.type,keyName:keyName,msg:""})),!1):(errors.push(error({isPass:!1,val:originVal,expectedType:schemaItem.type,keyName:keyName,msg:"oneOf not found ".concat(originVal),oneOf:oneOf})),!0):(passData.push(error({isPass:!0,val:originVal,expectedType:schemaItem.type,keyName:keyName,msg:""})),!1)}),{errors:errors,passData:passData}}function vaildData(data,schema){if(!data||!schema)return error({isPass:!1,msg:"valid-data require 2 args(data & schema)"});if(!isObject(data))return error({isPass:!1,msg:"args[0] require object"});if(!isObject(schema)||isArray(schema))return error({isPass:!1,msg:"args[1](schema) require object"});if(isEmpty(schema))return error({isPass:!0,msg:"args[1](schema) is empty"});if(isArray(data))return error({isPass:!1,msg:"args[0](data) require object"});var _checkFn=checkFn(data,schema),errors=_checkFn.errors;return 0<errors.length?errors.shift():{isPass:!0,reason:{msg:"",property:"",value:"",type:"",expected:{type:"",oneOf:[]}}}}

function checkModel(data,schema){if(!isObject(data))return {isPass:!1,reason:{msg:"args[0] require object",property:"",value:"",type:"string",expected:{type:"",oneOf:[]}}};var error=null;return Object.keys(data).some(function(key){var result=vaildData(data[key],schema);return !result.isPass&&(error=result,!0)}),error?error:{isPass:!0,reason:{msg:"",property:"",value:"",type:"",expected:{type:"",oneOf:[]}}}}

var typeEnum=["string","number","integer","boolean","object","array","null"];

var modelSchema = {type:{type:"string",description:"\u7C7B\u578B",oneOf:typeEnum,required:!0},description:{type:"string",description:"\u63CF\u8FF0",required:!1},from:{type:"string",description:"\u6570\u636E\u6765\u6E90",required:!0},properties:{type:"object",description:"\u5C5E\u6027",required:!1},default:{type:"function",description:"\u9ED8\u8BA4\u503C",required:!1},required:{type:"boolean",description:"\u662F\u5426\u5FC5\u4F20",required:!1}};

function _classPrivateMethodGet(receiver,privateSet,fn){if(!privateSet.has(receiver))throw new TypeError("attempted to get private field on non-instance");return fn}var DataModel=function(_Base){function DataModel(_model2){var _this;return classCallCheck(this,DataModel),_this=possibleConstructorReturn(this,getPrototypeOf(DataModel).call(this)),_parseNotObject.add(assertThisInitialized(_this)),_formatVal.add(assertThisInitialized(_this)),_getDefult.add(assertThisInitialized(_this)),_parseArray.add(assertThisInitialized(_this)),_deepParse.add(assertThisInitialized(_this)),_parseObject.add(assertThisInitialized(_this)),_setModel.add(assertThisInitialized(_this)),_init.add(assertThisInitialized(_this)),_model.set(assertThisInitialized(_this),{writable:!0,value:{}}),_classPrivateMethodGet(assertThisInitialized(_this),_init,_init2).call(assertThisInitialized(_this),_model2),_this}return inherits(DataModel,_Base),createClass(DataModel,[{key:"getModel",value:function getModel(){return classPrivateFieldGet(this,_model)}},{key:"parse",value:function parse(){var data=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return isObject(data)?isEmpty(data)&&!isArray(data)?_classPrivateMethodGet(this,_parseNotObject,_parseNotObject2).call(this):isArray(data)?_classPrivateMethodGet(this,_parseArray,_parseArray2).call(this,data):_classPrivateMethodGet(this,_parseObject,_parseObject2).call(this,data):(console.error("data require object"),_classPrivateMethodGet(this,_parseNotObject,_parseNotObject2).call(this))}}]),DataModel}(Base),_model=new WeakMap,_init=new WeakSet,_setModel=new WeakSet,_parseObject=new WeakSet,_deepParse=new WeakSet,_parseArray=new WeakSet,_getDefult=new WeakSet,_formatVal=new WeakSet,_parseNotObject=new WeakSet,_init2=function(model){var result=checkModel(model,modelSchema);if(!result.isPass)throw new Error(result);_classPrivateMethodGet(this,_setModel,_setModel2).call(this,model);},_setModel2=function(model){classPrivateFieldSet(this,_model,model);},_parseObject2=function(data){var _this2=this;return mapValues(classPrivateFieldGet(this,_model),function(schema){var firstVal=getVal(data,schema.from,_classPrivateMethodGet(_this2,_getDefult,_getDefult2).call(_this2,schema["default"]));null===firstVal&&(firstVal=_classPrivateMethodGet(_this2,_getDefult,_getDefult2).call(_this2,schema["default"]));var val="";"."===schema.from?val=_classPrivateMethodGet(_this2,_deepParse,_deepParse2).call(_this2,data,schema):(""===firstVal&&(firstVal=_classPrivateMethodGet(_this2,_getDefult,_getDefult2).call(_this2,schema["default"])),val=_classPrivateMethodGet(_this2,_deepParse,_deepParse2).call(_this2,firstVal,schema)),null===val&&(val=_classPrivateMethodGet(_this2,_getDefult,_getDefult2).call(_this2,schema["default"]));var formatVal=_classPrivateMethodGet(_this2,_formatVal,_formatVal2).call(_this2,val,schema.type);return "function"==typeof schema.format&&(formatVal=schema.format(formatVal)),formatVal})},_deepParse2=function(data,schema){if(("object"===schema.type||"array"===schema.type)&&schema.properties){var tmpDataModel=createDataModel(schema.properties);return tmpDataModel.parse(data)}return data},_parseArray2=function(data){var _this3=this;return "undefined"==typeof data[0]?data:["number","boolean","string"].includes(_typeof_1(data[0]))?data:data.map(function(item){return _classPrivateMethodGet(_this3,_parseObject,_parseObject2).call(_this3,item)})},_getDefult2=function(defaultVal){return "function"==typeof defaultVal?defaultVal():"undefined"==typeof defaultVal||null===defaultVal?"":defaultVal},_formatVal2=function(val,expectedType){var valType=_typeof_1(val);return valType===expectedType?val:"number"===expectedType?+val:"string"===expectedType?"".concat(val):"boolean"===expectedType?!!val:val},_parseNotObject2=function(){var _this4=this;return mapValues(classPrivateFieldGet(this,_model),function(item){var val=_classPrivateMethodGet(_this4,_getDefult,_getDefult2).call(_this4,item["default"]);return val})};function createDataModel(){var model=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return new DataModel(model)}

export default DataModel;
export { createDataModel };
//# sourceMappingURL=data-model-service.esm.js.map
