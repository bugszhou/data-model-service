(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, (function () {
    var current = global['data-model-service'];
    var exports = global['data-model-service'] = factory();
    exports.noConflict = function () { global['data-model-service'] = current; return exports; };
  }()));
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  var DataModel=function DataModel(){classCallCheck(this,DataModel);};

  return DataModel;

}));
//# sourceMappingURL=data-model-service.js.map
