(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("TypeJS", [], factory);
	else if(typeof exports === 'object')
		exports["TypeJS"] = factory();
	else
		root["TypeJS"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Types = {
  'string': 'String',
  'Infinity': 'Infinity',
  '-Infinity': '-Infinity',
  'NaN': 'NaN',
  'int': 'Int',
  'float': 'Float',
  'object': 'Object',
  'null': 'Null',
  'undefined': 'Undefined',
  'boolean': 'Boolean',
  'array': 'Array',
  'function': 'Function',
  'date': 'Date',
  'notCatchatedType': 'Sorry type is not found'
};

exports.Types = Types;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _Type = __webpack_require__(3);

var _Type2 = _interopRequireDefault(_Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pjson = __webpack_require__(8); // MIT LICENCE.

// Imports


var ENVIRONMENT = void 0;
var LIB_NAME = 'TypeJS';
var VERSION = pjson.version;

/*---------------------
*	Detect environment.	*
*---------------------*/
var isBrowser = new Function("try {return this === window;} catch(e) { return false; }");
var isNodeJS = new Function("try {return this === global;} catch(e) { return false; }");

if (isBrowser()) {
	ENVIRONMENT = window;
} else if (isNodeJS()) {
	ENVIRONMENT = global;
}

/*-------------------------
*	New instance of library	*
*-------------------------*/
var typeJS = new _Type2.default(ENVIRONMENT, LIB_NAME, VERSION);

module.exports = typeJS;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _enums = __webpack_require__(0);

var _modules = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * TypeJS
 */
var TypeJS = function () {

  /**
   * @param {object}	environment - this is the parameter environment.
   * @param {string}	libName - this is the parameter libName.
   */
  function TypeJS(environment, libName, version) {
    _classCallCheck(this, TypeJS);

    this.env = environment;
    this.libName = libName;
    this.version = version;
  }

  /**
   * getType method is a entry point for getting data type.
   *
   * @param {any}	variable - this is the parameter variable.
   *
   * @return {string} [variable data type.]
   */


  _createClass(TypeJS, [{
    key: 'getType',
    value: function getType(variable) {
      // here need execute logic for geting correct type
      var catchedTypeId = (0, _modules.typeCatcher)(variable);
      return (0, _modules.typeMaper)(catchedTypeId);
    }
  }]);

  return TypeJS;
}();

exports.default = TypeJS;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeMaper = exports.typeCatcher = undefined;

var _typeCatcher = __webpack_require__(5);

var _typeMaper = __webpack_require__(7);

exports.typeCatcher = _typeCatcher.typeCatcher;
exports.typeMaper = _typeMaper.typeMaper;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeCatcher = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _matchObjectModel = __webpack_require__(6);

/**
 * typeChecker is a execute logic for catching inputed variable
 * data type by using RegEx matching and JS object hierarchy.
 *
 * @param {any}	variable - this is the parameter variable.
 *
 * @return {number} [id of data type for geting type name by typeMaper].
 */
var typeCatcher = function typeCatcher(variable) {

  var catchedTypeId = '';
  var tmpMatchObject = {};

  var caseKey = caseKeyGenerator();

  switch (caseKey) {

    case (tmpMatchObject = matchNumber(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchString(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchArray(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchFunction(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchDate(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchBoolean(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchObject(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    // Handle static values case.
    case (variable += '') && ('NaN' || 'Infinity' || '-Infinity' || 'null' || 'undefined') && caseKey:
      catchedTypeId = variable;
      break;

    default:
      catchedTypeId = 'notCatchatedType';
      break;
  }

  return catchedTypeId;
};

/**
 * caseKeyGenerator is a generate unic key for each call.
 *
 * @return {string} text generated unic key.
 */
var caseKeyGenerator = function caseKeyGenerator() {
  var text = '';
  var possibleSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < 5; i++) {
    text += possibleSymbols.charAt(Math.floor(Math.random() * possibleSymbols.length));
  }

  return text;
};

/**
* Matchers logic part.
*/

var matchString = function matchString(variable, caseKey) {
  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeof variable === 'undefined' ? 'undefined' : _typeof(variable));

  if (matchObjectModel.type === 'string') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
};

var matchArray = function matchArray(variable, caseKey) {
  var typeId = variable && variable.constructor.name === 'Array' && 'array';
  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeId);

  if (matchObjectModel.type === 'array') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
};

var matchFunction = function matchFunction(variable, caseKey) {
  var typeId = variable && variable.constructor.name === 'Function' && 'function';
  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeId);

  if (matchObjectModel.type === 'function') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
};

var matchDate = function matchDate(variable, caseKey) {
  var typeId = variable && variable.constructor.name === 'Date' && 'date';
  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeId);

  if (matchObjectModel.type === 'date') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
};

var matchBoolean = function matchBoolean(variable, caseKey) {
  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeof variable === 'undefined' ? 'undefined' : _typeof(variable));

  if (matchObjectModel.type === 'boolean') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
};

var matchNumber = function matchNumber(variable, caseKey) {
  var typeId = typeof variable === 'number' && parseInt(variable.toString()) === parseInt(variable.toString()) && 'number';

  if (typeId === 'number') {
    typeId = variable % 1 === 0 ? 'int' : 'float';
  }

  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeId);

  if (matchObjectModel.type === 'int' || matchObjectModel.type === 'float') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
};

var matchObject = function matchObject(variable, caseKey) {
  var typeId = (typeof variable === 'undefined' ? 'undefined' : _typeof(variable)) === 'object' && variable !== null && 'object';
  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeId);

  if (matchObjectModel.type === 'object') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
};

exports.typeCatcher = typeCatcher;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * MatchObjectModel
 *
 */
var MatchObjectModel = function MatchObjectModel(value, type, caseKey) {
  _classCallCheck(this, MatchObjectModel);

  this.value = value;
  this.type = type;
  this.caseKey = caseKey || null;
};

exports.MatchObjectModel = MatchObjectModel;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeMaper = undefined;

var _enums = __webpack_require__(0);

/**
 * typeMaper get data type id and return back string name.
 *
 * @param {number}	typeId - this is the parameter type.
 *
 * @return {string} [maped string by id key].
 */
var typeMaper = function typeMaper(typeId) {
  // maper is a return human readable text type
  return _enums.Types[typeId];
};

exports.typeMaper = typeMaper;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"name":" js-type-helper","version":"0.0.2","description":"description here","main":"./index.js","module":"./src/index.js","scripts":{"build":"cd ./configs && webpack","start":"cd ./configs && webpack --watch","test":"cd ./configs && jest --config jest.config.json","coverage":"cd ./configs && jest --coverage && cat ../coverage/lcov.info | coveralls","docs":"esdoc -c esdoc.json"},"repository":{"type":"git","url":"git+https://github.com/Hamik25/TypeJS.git"},"keywords":[],"author":"Hamik Hambardzumyan","license":"ISC","bugs":{"url":"https://github.com/Hamik25/TypeJS/issues"},"homepage":"https://github.com/Hamik25/TypeJS#readme","devDependencies":{"babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"^6.24.1","coveralls":"^3.0.0","esdoc":"^1.0.4","esdoc-standard-plugin":"^1.0.0","jest":"^22.1.4"}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlMjk2ZjQzMTZkZjMwMmRmOTgwZSIsIndlYnBhY2s6Ly8vLi8uLi9zcmMvZW51bXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL21vZHVsZXMvdHlwZS1jYXRjaGVyLmpzIiwid2VicGFjazovLy8uLy4uL3NyYy9tb2R1bGVzL21hdGNoLW9iamVjdC1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi8uLi9zcmMvbW9kdWxlcy90eXBlLW1hcGVyLmpzIiwid2VicGFjazovLy8uLi9wYWNrYWdlLmpzb24iXSwibmFtZXMiOlsiVHlwZXMiLCJwanNvbiIsInJlcXVpcmUiLCJFTlZJUk9OTUVOVCIsIkxJQl9OQU1FIiwiVkVSU0lPTiIsInZlcnNpb24iLCJpc0Jyb3dzZXIiLCJGdW5jdGlvbiIsImlzTm9kZUpTIiwid2luZG93IiwiZ2xvYmFsIiwidHlwZUpTIiwibW9kdWxlIiwiZXhwb3J0cyIsIlR5cGVKUyIsImVudmlyb25tZW50IiwibGliTmFtZSIsImVudiIsInZhcmlhYmxlIiwiY2F0Y2hlZFR5cGVJZCIsInR5cGVDYXRjaGVyIiwidHlwZU1hcGVyIiwidG1wTWF0Y2hPYmplY3QiLCJjYXNlS2V5IiwiY2FzZUtleUdlbmVyYXRvciIsIm1hdGNoTnVtYmVyIiwidHlwZSIsIm1hdGNoU3RyaW5nIiwibWF0Y2hBcnJheSIsIm1hdGNoRnVuY3Rpb24iLCJtYXRjaERhdGUiLCJtYXRjaEJvb2xlYW4iLCJtYXRjaE9iamVjdCIsInRleHQiLCJwb3NzaWJsZVN5bWJvbHMiLCJpIiwiY2hhckF0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwibWF0Y2hPYmplY3RNb2RlbCIsInR5cGVJZCIsImNvbnN0cnVjdG9yIiwibmFtZSIsInBhcnNlSW50IiwidG9TdHJpbmciLCJNYXRjaE9iamVjdE1vZGVsIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REEsSUFBTUEsUUFBUTtBQUNaLFlBQVUsUUFERTtBQUVaLGNBQVksVUFGQTtBQUdaLGVBQWEsV0FIRDtBQUlaLFNBQU8sS0FKSztBQUtaLFNBQU8sS0FMSztBQU1aLFdBQVMsT0FORztBQU9aLFlBQVUsUUFQRTtBQVFaLFVBQVEsTUFSSTtBQVNaLGVBQWEsV0FURDtBQVVaLGFBQVcsU0FWQztBQVdaLFdBQVMsT0FYRztBQVlaLGNBQVksVUFaQTtBQWFaLFVBQVEsTUFiSTtBQWNaLHNCQUFvQjtBQWRSLENBQWQ7O1FBaUJTQSxLLEdBQUFBLEs7Ozs7Ozs7OztBQ2RUOzs7Ozs7QUFFQSxJQUFJQyxRQUFRLG1CQUFBQyxDQUFRLENBQVIsQ0FBWixDLENBTEE7O0FBRUE7OztBQUtBLElBQUlDLG9CQUFKO0FBQ0EsSUFBSUMsV0FBVyxR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QSxPQUFLSCxPQUFMLEdBQWVBLFdBQVcsSUFBMUI7QUFDRCxDOztRQUdNd0IsZ0IsR0FBQUEsZ0I7Ozs7Ozs7Ozs7Ozs7O0FDYlQ7O0FBRUE7Ozs7Ozs7QUFPQSxJQUFNMUIsWUFBWSxTQUFaQSxTQUFZLENBQVNxQixNQUFULEVBQWlCO0FBQ2pDO0FBQ0EsU0FBTyxhQUFNQSxNQUFOLENBQVA7QUFDRCxDQUhEOztRQUtTckIsUyxHQUFBQSxTOzs7Ozs7QUNkVCxrQkFBa0IscUlBQXFJLHVQQUF1UCxlQUFlLCtEQUErRCxzRUFBc0UsaURBQWlELDBFQUEwRSx5TSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlR5cGVKU1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUeXBlSlNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHlwZUpTXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMjk2ZjQzMTZkZjMwMmRmOTgwZSIsImNvbnN0IFR5cGVzID0ge1xyXG4gICdzdHJpbmcnOiAnU3RyaW5nJyxcclxuICAnSW5maW5pdHknOiAnSW5maW5pdHknLFxyXG4gICctSW5maW5pdHknOiAnLUluZmluaXR5JyxcclxuICAnTmFOJzogJ05hTicsXHJcbiAgJ2ludCc6ICdJbnQnLFxyXG4gICdmbG9hdCc6ICdGbG9hdCcsXHJcbiAgJ29iamVjdCc6ICdPYmplY3QnLFxyXG4gICdudWxsJzogJ051bGwnLFxyXG4gICd1bmRlZmluZWQnOiAnVW5kZWZpbmVkJyxcclxuICAnYm9vbGVhbic6ICdCb29sZWFuJyxcclxuICAnYXJyYXknOiAnQXJyYXknLFxyXG4gICdmdW5jdGlvbic6ICdGdW5jdGlvbicsXHJcbiAgJ2RhdGUnOiAnRGF0ZScsXHJcbiAgJ25vdENhdGNoYXRlZFR5cGUnOiAnU29ycnkgdHlwZSBpcyBub3QgZm91bmQnXHJcbn1cclxuXHJcbmV4cG9ydCB7IFR5cGVzIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vc3JjL2VudW1zL2luZGV4LmpzIiwiLy8gTUlUIExJQ0VOQ0UuXHJcblxyXG4vLyBJbXBvcnRzXHJcbmltcG9ydCBUeXBlSlMgZnJvbSAnLi9UeXBlJztcclxuXHJcbmxldCBwanNvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xyXG5cclxubGV0IEVOVklST05NRU5UO1xyXG5sZXQgTElCX05BTUUgPSAnVHlwZUpTJztcclxubGV0IFZFUlNJT04gPSBwanNvbi52ZXJzaW9uO1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKlx0RGV0ZWN0IGVudmlyb25tZW50Llx0KlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxubGV0IGlzQnJvd3NlciA9IG5ldyBGdW5jdGlvbihcInRyeSB7cmV0dXJuIHRoaXMgPT09IHdpbmRvdzt9IGNhdGNoKGUpIHsgcmV0dXJuIGZhbHNlOyB9XCIpO1xyXG5sZXQgaXNOb2RlSlMgID0gbmV3IEZ1bmN0aW9uKFwidHJ5IHtyZXR1cm4gdGhpcyA9PT0gZ2xvYmFsO30gY2F0Y2goZSkgeyByZXR1cm4gZmFsc2U7IH1cIik7XHJcblxyXG5pZiAoaXNCcm93c2VyKCkpIHtcclxuXHRFTlZJUk9OTUVOVCA9IHdpbmRvdztcclxufSBlbHNlIGlmIChpc05vZGVKUygpKSB7XHJcblx0RU5WSVJPTk1FTlQgPSBnbG9iYWw7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qXHROZXcgaW5zdGFuY2Ugb2YgbGlicmFyeVx0KlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmNvbnN0IHR5cGVKUyA9IG5ldyBUeXBlSlMoRU5WSVJPTk1FTlQsIExJQl9OQU1FLCBWRVJTSU9OKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdHlwZUpTO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvaW5kZXguanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVHlwZXMgfSBmcm9tICcuL2VudW1zJ1xyXG5cclxuaW1wb3J0IHsgdHlwZUNhdGNoZXIsIHR5cGVNYXBlciB9IGZyb20gJy4vbW9kdWxlcydcclxuXHJcbi8qKlxyXG4gKiBUeXBlSlNcclxuICovXHJcbmNsYXNzIFR5cGVKUyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fVx0ZW52aXJvbm1lbnQgLSB0aGlzIGlzIHRoZSBwYXJhbWV0ZXIgZW52aXJvbm1lbnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9XHRsaWJOYW1lIC0gdGhpcyBpcyB0aGUgcGFyYW1ldGVyIGxpYk5hbWUuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZW52aXJvbm1lbnQsIGxpYk5hbWUsIHZlcnNpb24pIHtcclxuICAgIHRoaXMuZW52ID0gZW52aXJvbm1lbnQ7XHJcbiAgICB0aGlzLmxpYk5hbWUgPSBsaWJOYW1lO1xyXG4gICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGdldFR5cGUgbWV0aG9kIGlzIGEgZW50cnkgcG9pbnQgZm9yIGdldHRpbmcgZGF0YSB0eXBlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHthbnl9XHR2YXJpYWJsZSAtIHRoaXMgaXMgdGhlIHBhcmFtZXRlciB2YXJpYWJsZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3N0cmluZ30gW3ZhcmlhYmxlIGRhdGEgdHlwZS5dXHJcbiAgICovXHJcbiAgZ2V0VHlwZSh2YXJpYWJsZSkge1xyXG4gICAgLy8gaGVyZSBuZWVkIGV4ZWN1dGUgbG9naWMgZm9yIGdldGluZyBjb3JyZWN0IHR5cGVcclxuICAgIGxldCBjYXRjaGVkVHlwZUlkID0gdHlwZUNhdGNoZXIodmFyaWFibGUpO1xyXG4gICAgcmV0dXJuIHR5cGVNYXBlcihjYXRjaGVkVHlwZUlkKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHlwZUpTO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvVHlwZS5qcyIsImltcG9ydCB7IHR5cGVDYXRjaGVyIH0gZnJvbSAnLi90eXBlLWNhdGNoZXInO1xyXG5pbXBvcnQgeyB0eXBlTWFwZXIgfSBmcm9tICcuL3R5cGUtbWFwZXInO1xyXG5cclxuZXhwb3J0IHsgdHlwZUNhdGNoZXIsIHR5cGVNYXBlciB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwiaW1wb3J0IHsgTWF0Y2hPYmplY3RNb2RlbCB9IGZyb20gJy4vbWF0Y2gtb2JqZWN0LW1vZGVsJztcclxuXHJcbi8qKlxyXG4gKiB0eXBlQ2hlY2tlciBpcyBhIGV4ZWN1dGUgbG9naWMgZm9yIGNhdGNoaW5nIGlucHV0ZWQgdmFyaWFibGVcclxuICogZGF0YSB0eXBlIGJ5IHVzaW5nIFJlZ0V4IG1hdGNoaW5nIGFuZCBKUyBvYmplY3QgaGllcmFyY2h5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge2FueX1cdHZhcmlhYmxlIC0gdGhpcyBpcyB0aGUgcGFyYW1ldGVyIHZhcmlhYmxlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFtpZCBvZiBkYXRhIHR5cGUgZm9yIGdldGluZyB0eXBlIG5hbWUgYnkgdHlwZU1hcGVyXS5cclxuICovXHJcbmNvbnN0IHR5cGVDYXRjaGVyID0gZnVuY3Rpb24odmFyaWFibGUpIHtcclxuXHJcbiAgbGV0IGNhdGNoZWRUeXBlSWQgPSAnJztcclxuICBsZXQgdG1wTWF0Y2hPYmplY3QgPSB7fTtcclxuXHJcbiAgbGV0IGNhc2VLZXkgPSBjYXNlS2V5R2VuZXJhdG9yKCk7XHJcblxyXG4gIHN3aXRjaChjYXNlS2V5KSB7XHJcblxyXG4gICAgY2FzZSAodG1wTWF0Y2hPYmplY3QgPSBtYXRjaE51bWJlcih2YXJpYWJsZSwgY2FzZUtleSkpICYmIHRtcE1hdGNoT2JqZWN0LmNhc2VLZXk6XHJcbiAgICAgIGNhdGNoZWRUeXBlSWQgPSB0bXBNYXRjaE9iamVjdC50eXBlO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICh0bXBNYXRjaE9iamVjdCA9IG1hdGNoU3RyaW5nKHZhcmlhYmxlLCBjYXNlS2V5KSkgJiYgdG1wTWF0Y2hPYmplY3QuY2FzZUtleTpcclxuICAgICAgY2F0Y2hlZFR5cGVJZCA9IHRtcE1hdGNoT2JqZWN0LnR5cGU7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgKHRtcE1hdGNoT2JqZWN0ID0gbWF0Y2hBcnJheSh2YXJpYWJsZSwgY2FzZUtleSkpICYmIHRtcE1hdGNoT2JqZWN0LmNhc2VLZXk6XHJcbiAgICAgIGNhdGNoZWRUeXBlSWQgPSB0bXBNYXRjaE9iamVjdC50eXBlO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICh0bXBNYXRjaE9iamVjdCA9IG1hdGNoRnVuY3Rpb24odmFyaWFibGUsIGNhc2VLZXkpKSAmJiB0bXBNYXRjaE9iamVjdC5jYXNlS2V5OlxyXG4gICAgICBjYXRjaGVkVHlwZUlkID0gdG1wTWF0Y2hPYmplY3QudHlwZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAodG1wTWF0Y2hPYmplY3QgPSBtYXRjaERhdGUodmFyaWFibGUsIGNhc2VLZXkpKSAmJiB0bXBNYXRjaE9iamVjdC5jYXNlS2V5OlxyXG4gICAgICBjYXRjaGVkVHlwZUlkID0gdG1wTWF0Y2hPYmplY3QudHlwZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAodG1wTWF0Y2hPYmplY3QgPSBtYXRjaEJvb2xlYW4odmFyaWFibGUsIGNhc2VLZXkpKSAmJiB0bXBNYXRjaE9iamVjdC5jYXNlS2V5OlxyXG4gICAgICBjYXRjaGVkVHlwZUlkID0gdG1wTWF0Y2hPYmplY3QudHlwZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAodG1wTWF0Y2hPYmplY3QgPSBtYXRjaE9iamVjdCh2YXJpYWJsZSwgY2FzZUtleSkpICYmIHRtcE1hdGNoT2JqZWN0LmNhc2VLZXk6XHJcbiAgICAgIGNhdGNoZWRUeXBlSWQgPSB0bXBNYXRjaE9iamVjdC50eXBlO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAvLyBIYW5kbGUgc3RhdGljIHZhbHVlcyBjYXNlLlxyXG4gICAgY2FzZSAodmFyaWFibGUgKz0gJycpICYmICgnTmFOJyB8fCAnSW5maW5pdHknIHx8ICctSW5maW5pdHknIHx8ICdudWxsJyB8fCAndW5kZWZpbmVkJykgJiYgKGNhc2VLZXkpOlxyXG4gICAgICBjYXRjaGVkVHlwZUlkID0gdmFyaWFibGU7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNhdGNoZWRUeXBlSWQgPSAnbm90Q2F0Y2hhdGVkVHlwZSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhdGNoZWRUeXBlSWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjYXNlS2V5R2VuZXJhdG9yIGlzIGEgZ2VuZXJhdGUgdW5pYyBrZXkgZm9yIGVhY2ggY2FsbC5cclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSB0ZXh0IGdlbmVyYXRlZCB1bmljIGtleS5cclxuICovXHJcbmNvbnN0IGNhc2VLZXlHZW5lcmF0b3IgPSAoKSA9PiB7XHJcbiAgbGV0IHRleHQgPSAnJztcclxuICBsZXQgcG9zc2libGVTeW1ib2xzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIHRleHQgKz0gcG9zc2libGVTeW1ib2xzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZVN5bWJvbHMubGVuZ3RoKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGV4dDtcclxufVxyXG5cclxuLyoqXHJcbiogTWF0Y2hlcnMgbG9naWMgcGFydC5cclxuKi9cclxuXHJcbmNvbnN0IG1hdGNoU3RyaW5nID0gKHZhcmlhYmxlLCBjYXNlS2V5KSA9PiB7XHJcbiAgbGV0IG1hdGNoT2JqZWN0TW9kZWwgPSBuZXcgTWF0Y2hPYmplY3RNb2RlbCh2YXJpYWJsZSwgdHlwZW9mIHZhcmlhYmxlKTtcclxuXHJcbiAgaWYgKG1hdGNoT2JqZWN0TW9kZWwudHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIG1hdGNoT2JqZWN0TW9kZWwuY2FzZUtleSA9IGNhc2VLZXk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWF0Y2hPYmplY3RNb2RlbDtcclxufVxyXG5cclxuY29uc3QgbWF0Y2hBcnJheSA9ICh2YXJpYWJsZSwgY2FzZUtleSkgPT4ge1xyXG4gIGxldCB0eXBlSWQgPSB2YXJpYWJsZSAmJiB2YXJpYWJsZS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQXJyYXknICYmICdhcnJheSc7XHJcbiAgbGV0IG1hdGNoT2JqZWN0TW9kZWwgPSBuZXcgTWF0Y2hPYmplY3RNb2RlbCh2YXJpYWJsZSwgdHlwZUlkKTtcclxuXHJcbiAgaWYgKG1hdGNoT2JqZWN0TW9kZWwudHlwZSA9PT0gJ2FycmF5Jykge1xyXG4gICAgbWF0Y2hPYmplY3RNb2RlbC5jYXNlS2V5ID0gY2FzZUtleTtcclxuICB9XHJcblxyXG4gIHJldHVybiBtYXRjaE9iamVjdE1vZGVsO1xyXG59XHJcblxyXG5jb25zdCBtYXRjaEZ1bmN0aW9uID0gKHZhcmlhYmxlLCBjYXNlS2V5KSA9PiB7XHJcbiAgbGV0IHR5cGVJZCA9IHZhcmlhYmxlICYmIHZhcmlhYmxlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicgJiYgJ2Z1bmN0aW9uJztcclxuICBsZXQgbWF0Y2hPYmplY3RNb2RlbCA9IG5ldyBNYXRjaE9iamVjdE1vZGVsKHZhcmlhYmxlLCB0eXBlSWQpO1xyXG5cclxuICBpZiAobWF0Y2hPYmplY3RNb2RlbC50eXBlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBtYXRjaE9iamVjdE1vZGVsLmNhc2VLZXkgPSBjYXNlS2V5O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1hdGNoT2JqZWN0TW9kZWw7XHJcbn1cclxuXHJcbmNvbnN0IG1hdGNoRGF0ZSA9ICh2YXJpYWJsZSwgY2FzZUtleSkgPT4ge1xyXG4gIGxldCB0eXBlSWQgPSB2YXJpYWJsZSAmJiB2YXJpYWJsZS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRGF0ZScgJiYgJ2RhdGUnO1xyXG4gIGxldCBtYXRjaE9iamVjdE1vZGVsID0gbmV3IE1hdGNoT2JqZWN0TW9kZWwodmFyaWFibGUsIHR5cGVJZCk7XHJcblxyXG4gIGlmIChtYXRjaE9iamVjdE1vZGVsLnR5cGUgPT09ICdkYXRlJykge1xyXG4gICAgbWF0Y2hPYmplY3RNb2RlbC5jYXNlS2V5ID0gY2FzZUtleTtcclxuICB9XHJcblxyXG4gIHJldHVybiBtYXRjaE9iamVjdE1vZGVsO1xyXG59XHJcblxyXG5jb25zdCBtYXRjaEJvb2xlYW4gPSAodmFyaWFibGUsIGNhc2VLZXkpID0+IHtcclxuICBsZXQgbWF0Y2hPYmplY3RNb2RlbCA9IG5ldyBNYXRjaE9iamVjdE1vZGVsKHZhcmlhYmxlLCB0eXBlb2YgdmFyaWFibGUpO1xyXG5cclxuICBpZiAobWF0Y2hPYmplY3RNb2RlbC50eXBlID09PSAnYm9vbGVhbicpIHtcclxuICAgIG1hdGNoT2JqZWN0TW9kZWwuY2FzZUtleSA9IGNhc2VLZXk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWF0Y2hPYmplY3RNb2RlbDtcclxufVxyXG5cclxuY29uc3QgbWF0Y2hOdW1iZXIgPSAodmFyaWFibGUsIGNhc2VLZXkpID0+IHtcclxuICBsZXQgdHlwZUlkID0gdHlwZW9mIHZhcmlhYmxlID09PSAnbnVtYmVyJyAmJiBwYXJzZUludCh2YXJpYWJsZS50b1N0cmluZygpKSA9PT0gcGFyc2VJbnQodmFyaWFibGUudG9TdHJpbmcoKSkgJiYgJ251bWJlcic7XHJcblxyXG4gIGlmICh0eXBlSWQgPT09ICdudW1iZXInKSB7XHJcbiAgICB0eXBlSWQgPSB2YXJpYWJsZSAlIDEgPT09IDAgPyAnaW50JyA6ICdmbG9hdCc7XHJcbiAgfVxyXG5cclxuICBsZXQgbWF0Y2hPYmplY3RNb2RlbCA9IG5ldyBNYXRjaE9iamVjdE1vZGVsKHZhcmlhYmxlLCB0eXBlSWQpO1xyXG5cclxuICBpZiAobWF0Y2hPYmplY3RNb2RlbC50eXBlID09PSAnaW50JyB8fCBtYXRjaE9iamVjdE1vZGVsLnR5cGUgPT09ICdmbG9hdCcpIHtcclxuICAgIG1hdGNoT2JqZWN0TW9kZWwuY2FzZUtleSA9IGNhc2VLZXk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWF0Y2hPYmplY3RNb2RlbDtcclxufVxyXG5cclxuY29uc3QgbWF0Y2hPYmplY3QgPSAodmFyaWFibGUsIGNhc2VLZXkpID0+IHtcclxuICBsZXQgdHlwZUlkID0gdHlwZW9mIHZhcmlhYmxlID09PSAnb2JqZWN0JyAmJiB2YXJpYWJsZSAhPT0gbnVsbCAmJiAnb2JqZWN0JztcclxuICBsZXQgbWF0Y2hPYmplY3RNb2RlbCA9IG5ldyBNYXRjaE9iamVjdE1vZGVsKHZhcmlhYmxlLCB0eXBlSWQpO1xyXG5cclxuICBpZiAobWF0Y2hPYmplY3RNb2RlbC50eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgbWF0Y2hPYmplY3RNb2RlbC5jYXNlS2V5ID0gY2FzZUtleTtcclxuICB9XHJcblxyXG4gIHJldHVybiBtYXRjaE9iamVjdE1vZGVsO1xyXG59XHJcblxyXG5leHBvcnQgeyB0eXBlQ2F0Y2hlciB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9tb2R1bGVzL3R5cGUtY2F0Y2hlci5qcyIsIlxyXG4vKipcclxuICogTWF0Y2hPYmplY3RNb2RlbFxyXG4gKlxyXG4gKi9cclxuY2xhc3MgTWF0Y2hPYmplY3RNb2RlbCB7XHJcbiAgY29uc3RydWN0b3IodmFsdWUsIHR5cGUsIGNhc2VLZXkpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLmNhc2VLZXkgPSBjYXNlS2V5IHx8IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBNYXRjaE9iamVjdE1vZGVsIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vc3JjL21vZHVsZXMvbWF0Y2gtb2JqZWN0LW1vZGVsLmpzIiwiaW1wb3J0IHsgVHlwZXMgfSBmcm9tICcuLi9lbnVtcydcclxuXHJcbi8qKlxyXG4gKiB0eXBlTWFwZXIgZ2V0IGRhdGEgdHlwZSBpZCBhbmQgcmV0dXJuIGJhY2sgc3RyaW5nIG5hbWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfVx0dHlwZUlkIC0gdGhpcyBpcyB0aGUgcGFyYW1ldGVyIHR5cGUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gW21hcGVkIHN0cmluZyBieSBpZCBrZXldLlxyXG4gKi9cclxuY29uc3QgdHlwZU1hcGVyID0gZnVuY3Rpb24odHlwZUlkKSB7XHJcbiAgLy8gbWFwZXIgaXMgYSByZXR1cm4gaHVtYW4gcmVhZGFibGUgdGV4dCB0eXBlXHJcbiAgcmV0dXJuIFR5cGVzW3R5cGVJZF07XHJcbn1cclxuXHJcbmV4cG9ydCB7IHR5cGVNYXBlciB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9tb2R1bGVzL3R5cGUtbWFwZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm5hbWVcIjpcIiBqcy10eXBlLWhlbHBlclwiLFwidmVyc2lvblwiOlwiMC4wLjJcIixcImRlc2NyaXB0aW9uXCI6XCJkZXNjcmlwdGlvbiBoZXJlXCIsXCJtYWluXCI6XCIuL2luZGV4LmpzXCIsXCJtb2R1bGVcIjpcIi4vc3JjL2luZGV4LmpzXCIsXCJzY3JpcHRzXCI6e1wiYnVpbGRcIjpcImNkIC4vY29uZmlncyAmJiB3ZWJwYWNrXCIsXCJzdGFydFwiOlwiY2QgLi9jb25maWdzICYmIHdlYnBhY2sgLS13YXRjaFwiLFwidGVzdFwiOlwiY2QgLi9jb25maWdzICYmIGplc3QgLS1jb25maWcgamVzdC5jb25maWcuanNvblwiLFwiY292ZXJhZ2VcIjpcImNkIC4vY29uZmlncyAmJiBqZXN0IC0tY292ZXJhZ2UgJiYgY2F0IC4uL2NvdmVyYWdlL2xjb3YuaW5mbyB8IGNvdmVyYWxsc1wiLFwiZG9jc1wiOlwiZXNkb2MgLWMgZXNkb2MuanNvblwifSxcInJlcG9zaXRvcnlcIjp7XCJ0eXBlXCI6XCJnaXRcIixcInVybFwiOlwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9IYW1pazI1L1R5cGVKUy5naXRcIn0sXCJrZXl3b3Jkc1wiOltdLFwiYXV0aG9yXCI6XCJIYW1payBIYW1iYXJkenVteWFuXCIsXCJsaWNlbnNlXCI6XCJJU0NcIixcImJ1Z3NcIjp7XCJ1cmxcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9IYW1pazI1L1R5cGVKUy9pc3N1ZXNcIn0sXCJob21lcGFnZVwiOlwiaHR0cHM6Ly9naXRodWIuY29tL0hhbWlrMjUvVHlwZUpTI3JlYWRtZVwiLFwiZGV2RGVwZW5kZW5jaWVzXCI6e1wiYmFiZWwtY29yZVwiOlwiXjYuMjYuMFwiLFwiYmFiZWwtbG9hZGVyXCI6XCJeNy4xLjJcIixcImJhYmVsLXByZXNldC1lczIwMTVcIjpcIl42LjI0LjFcIixcImJhYmVsLXByZXNldC1zdGFnZS0yXCI6XCJeNi4yNC4xXCIsXCJjb3ZlcmFsbHNcIjpcIl4zLjAuMFwiLFwiZXNkb2NcIjpcIl4xLjAuNFwiLFwiZXNkb2Mtc3RhbmRhcmQtcGx1Z2luXCI6XCJeMS4wLjBcIixcImplc3RcIjpcIl4yMi4xLjRcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcGFja2FnZS5qc29uXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=