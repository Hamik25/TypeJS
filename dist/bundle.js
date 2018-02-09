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
  'number': 'Number',
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
  'date': 'Date'
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

  switch (variable) {

    case (tmpMatchObject = matchString(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchArray(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchFunction(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchUndefined(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchDate(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

    // TODO
    case (tmpMatchObject = matchBoolean(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

    // TODO
    case (tmpMatchObject = matchNumber(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

  }

  return catchedTypeId;
};

var matchString = function matchString(variable) {
  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeof variable === 'undefined' ? 'undefined' : _typeof(variable));
  return matchObjectModel.type === 'string' ? matchObjectModel : false;
};

var matchArray = function matchArray(variable) {
  var typeId = variable && variable.constructor.name === 'Array' && 'array';
  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeId);
  return matchObjectModel.type === 'array' ? matchObjectModel : false;
};

var matchFunction = function matchFunction(variable) {
  var typeId = variable && variable.constructor.name === 'Function' && 'function';
  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeId);
  return matchObjectModel.type === 'function' ? matchObjectModel : false;
};

var matchUndefined = function matchUndefined(variable) {
  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeof variable === 'undefined' ? 'undefined' : _typeof(variable));
  return matchObjectModel.type === 'undefined' ? matchObjectModel : false;
};

var matchDate = function matchDate(variable) {
  var typeId = variable && variable.constructor.name === 'Date' && 'date';
  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeId);
  return matchObjectModel.type === 'date' ? matchObjectModel : false;
};

// TODO implement corect logic for support false.
var matchBoolean = function matchBoolean(variable) {
  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeof variable === 'undefined' ? 'undefined' : _typeof(variable));
  return matchObjectModel.type === 'boolean' ? matchObjectModel : false;
};

// TODO implement corect logic for support NaN.
var matchNumber = function matchNumber(variable) {
  var typeId = parseInt(variable.toString()) === parseInt(variable.toString()) ? 'number' : variable.toString();
  var matchObjectModel = new _matchObjectModel.MatchObjectModel(variable, typeId);
  return matchObjectModel;
};

exports.typeCatcher = typeCatcher;

// init() {
// 	Object.defineProperty(this.env.Array.prototype, [this.libName], {
// 		value: 'Array',
// 		writable: false,
// 		configurable: false,
// 		enumerable: true
// 	});
//
// 	Object.defineProperty(this.env.Number.prototype, [this.libName], {
// 		configurable: false,
// 		enumerable: true,
// 		get: function() {
// 			return parseInt(this.toString()) === parseInt(this.toString()) ? 'Number' : this.toString();
// 		}
// 	});
//
// 	Object.defineProperty(this.env.String.prototype, [this.libName], {
// 		value: 'String',
// 		writable: false,
// 		configurable: false,
// 		enumerable: true
// 	});
//
// 	Object.defineProperty(this.env.Object.prototype, [this.libName], {
// 		configurable: false,
// 		enumerable: true,
// 		get: function() {
// 			return this.constructor.name;
// 		}
// 	});
// }

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
var MatchObjectModel = function MatchObjectModel(value, type) {
  _classCallCheck(this, MatchObjectModel);

  this.value = value;
  this.type = type;
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

module.exports = {"name":" js-type-helper","version":"0.0.1","description":"description here","main":"./index.js","module":"./src/index.js","scripts":{"build":"cd ./configs && webpack","start":"cd ./configs && webpack --watch","test":"cd ./configs && jest --config jest.config.json","coverage":"cd ./configs && jest --coverage && cat ../coverage/lcov.info | coveralls","docs":"esdoc -c esdoc.json"},"repository":{"type":"git","url":"git+https://github.com/Hamik25/TypeJS.git"},"keywords":[],"author":"Hamik Hambardzumyan","license":"ISC","bugs":{"url":"https://github.com/Hamik25/TypeJS/issues"},"homepage":"https://github.com/Hamik25/TypeJS#readme","devDependencies":{"babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"^6.24.1","coveralls":"^3.0.0","esdoc":"^1.0.4","esdoc-standard-plugin":"^1.0.0","jest":"^22.1.4"}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiYzIwNTYyMGI2M2FjZTNkOGZiOCIsIndlYnBhY2s6Ly8vLi8uLi9zcmMvZW51bXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL21vZHVsZXMvdHlwZS1jYXRjaGVyLmpzIiwid2VicGFjazovLy8uLy4uL3NyYy9tb2R1bGVzL21hdGNoLW9iamVjdC1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi8uLi9zcmMvbW9kdWxlcy90eXBlLW1hcGVyLmpzIiwid2VicGFjazovLy8uLi9wYWNrYWdlLmpzb24iXSwibmFtZXMiOlsiVHlwZXMiLCJwanNvbiIsInJlcXVpcmUiLCJFTlZJUk9OTUVOVCIsIkxJQl9OQU1FIiwiVkVSU0lPTiIsInZlcnNpb24iLCJpc0Jyb3dzZXIiLCJGdW5jdGlvbiIsImlzTm9kZUpTIiwid2luZG93IiwiZ2xvYmFsIiwidHlwZUpTIiwibW9kdWxlIiwiZXhwb3J0cyIsIlR5cGVKUyIsImVudmlyb25tZW50IiwibGliTmFtZSIsImVudiIsInZhcmlhYmxlIiwiY2F0Y2hlZFR5cGVJZCIsInR5cGVDYXRjaGVyIiwidHlwZU1hcGVyIiwidG1wTWF0Y2hPYmplY3QiLCJtYXRjaFN0cmluZyIsInZhbHVlIiwidHlwZSIsIm1hdGNoQXJyYXkiLCJtYXRjaEZ1bmN0aW9uIiwibWF0Y2hVbmRlZmluZWQiLCJtYXRjaERhdGUiLCJtYXRjaEJvb2xlYW4iLCJtYXRjaE51bWJlciIsIm1hdGNoT2JqZWN0TW9kZWwiLCJ0eXBlSWQiLCJjb25zdHJ1Y3RvciIs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akIsS0FBMEIsU0FBM0IsR0FBd0NPLGdCQUF4QyxHQUEyRCxLQUFsRTtBQUNELENBSEQ7O0FBS0E7QUFDQSxJQUFNRCxjQUFjLFNBQWRBLFdBQWMsV0FBWTtBQUM5QixNQUFJRSxTQUFTRyxTQUFTbEIsU0FBU21CLFFBQVQsRUFBVCxNQUFrQ0QsU0FBU2xCLFNBQVNtQixRQUFULEVBQVQsQ0FBbEMsR0FBa0UsUUFBbEUsR0FBNkVuQixTQUFTbUIsUUFBVCxFQUExRjtBQUNBLE1BQUlMLG1CQUFtQix1Q0FBcUJkLFFBQXJCLEVBQStCZSxNQUEvQixDQUF2QjtBQUNBLFNBQU9ELGdCQUFQO0FBQ0QsQ0FKRDs7UUFNU1osVyxHQUFBQSxXOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7Ozs7OztBQzVIQTs7OztJQUlNa0IsZ0IsR0FDSiwwQkFBWWQsS0FBWixFQUFtQkMsSUFBbkIsRUFBeUI7QUFBQTs7QUFDdkIsT0FBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0QsQzs7UUFHTWEsZ0IsR0FBQUEsZ0I7Ozs7Ozs7Ozs7Ozs7O0FDWlQ7O0FBRUE7Ozs7Ozs7QUFPQSxJQUFNakIsWUFBWSxTQUFaQSxTQUFZLENBQVNZLE1BQVQsRUFBaUI7QUFDakM7QUFDQSxTQUFPLGFBQU1BLE1BQU4sQ0FBUDtBQUNELENBSEQ7O1FBS1NaLFMsR0FBQUEsUzs7Ozs7O0FDZFQsa0JBQWtCLHFJQUFxSSx1UEFBdVAsZUFBZSwrREFBK0Qsc0VBQXNFLGlEQUFpRCwwRUFBMEUseU0iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJUeXBlSlNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVHlwZUpTXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlR5cGVKU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmMyMDU2MjBiNjNhY2UzZDhmYjgiLCJjb25zdCBUeXBlcyA9IHtcclxuICAnc3RyaW5nJzogJ1N0cmluZycsXHJcbiAgJ251bWJlcic6ICdOdW1iZXInLFxyXG4gICdJbmZpbml0eSc6ICdJbmZpbml0eScsXHJcbiAgJy1JbmZpbml0eSc6ICctSW5maW5pdHknLFxyXG4gICdOYU4nOiAnTmFOJyxcclxuICAnaW50JzogJ0ludCcsXHJcbiAgJ2Zsb2F0JzogJ0Zsb2F0JyxcclxuICAnb2JqZWN0JzogJ09iamVjdCcsXHJcbiAgJ251bGwnOiAnTnVsbCcsXHJcbiAgJ3VuZGVmaW5lZCc6ICdVbmRlZmluZWQnLFxyXG4gICdib29sZWFuJzogJ0Jvb2xlYW4nLFxyXG4gICdhcnJheSc6ICdBcnJheScsXHJcbiAgJ2Z1bmN0aW9uJzogJ0Z1bmN0aW9uJyxcclxuICAnZGF0ZSc6ICdEYXRlJ1xyXG59XHJcblxyXG5leHBvcnQgeyBUeXBlcyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9lbnVtcy9pbmRleC5qcyIsIi8vIE1JVCBMSUNFTkNFLlxyXG5cclxuLy8gSW1wb3J0c1xyXG5pbXBvcnQgVHlwZUpTIGZyb20gJy4vVHlwZSc7XHJcblxyXG5sZXQgcGpzb24gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKTtcclxuXHJcbmxldCBFTlZJUk9OTUVOVDtcclxubGV0IExJQl9OQU1FID0gJ1R5cGVKUyc7XHJcbmxldCBWRVJTSU9OID0gcGpzb24udmVyc2lvbjtcclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbipcdERldGVjdCBlbnZpcm9ubWVudC5cdCpcclxuKi0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmxldCBpc0Jyb3dzZXIgPSBuZXcgRnVuY3Rpb24oXCJ0cnkge3JldHVybiB0aGlzID09PSB3aW5kb3c7fSBjYXRjaChlKSB7IHJldHVybiBmYWxzZTsgfVwiKTtcclxubGV0IGlzTm9kZUpTICA9IG5ldyBGdW5jdGlvbihcInRyeSB7cmV0dXJuIHRoaXMgPT09IGdsb2JhbDt9IGNhdGNoKGUpIHsgcmV0dXJuIGZhbHNlOyB9XCIpO1xyXG5cclxuaWYgKGlzQnJvd3NlcigpKSB7XHJcblx0RU5WSVJPTk1FTlQgPSB3aW5kb3c7XHJcbn0gZWxzZSBpZiAoaXNOb2RlSlMoKSkge1xyXG5cdEVOVklST05NRU5UID0gZ2xvYmFsO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKlx0TmV3IGluc3RhbmNlIG9mIGxpYnJhcnlcdCpcclxuKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5jb25zdCB0eXBlSlMgPSBuZXcgVHlwZUpTKEVOVklST05NRU5ULCBMSUJfTkFNRSwgVkVSU0lPTik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVKUztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vc3JjL2luZGV4LmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFR5cGVzIH0gZnJvbSAnLi9lbnVtcydcclxuXHJcbmltcG9ydCB7IHR5cGVDYXRjaGVyLCB0eXBlTWFwZXIgfSBmcm9tICcuL21vZHVsZXMnXHJcblxyXG4vKipcclxuICogVHlwZUpTXHJcbiAqL1xyXG5jbGFzcyBUeXBlSlMge1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge29iamVjdH1cdGVudmlyb25tZW50IC0gdGhpcyBpcyB0aGUgcGFyYW1ldGVyIGVudmlyb25tZW50LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfVx0bGliTmFtZSAtIHRoaXMgaXMgdGhlIHBhcmFtZXRlciBsaWJOYW1lLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVudmlyb25tZW50LCBsaWJOYW1lLCB2ZXJzaW9uKSB7XHJcbiAgICB0aGlzLmVudiA9IGVudmlyb25tZW50O1xyXG4gICAgdGhpcy5saWJOYW1lID0gbGliTmFtZTtcclxuICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBnZXRUeXBlIG1ldGhvZCBpcyBhIGVudHJ5IHBvaW50IGZvciBnZXR0aW5nIGRhdGEgdHlwZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7YW55fVx0dmFyaWFibGUgLSB0aGlzIGlzIHRoZSBwYXJhbWV0ZXIgdmFyaWFibGUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFt2YXJpYWJsZSBkYXRhIHR5cGUuXVxyXG4gICAqL1xyXG4gIGdldFR5cGUodmFyaWFibGUpIHtcclxuICAgIC8vIGhlcmUgbmVlZCBleGVjdXRlIGxvZ2ljIGZvciBnZXRpbmcgY29ycmVjdCB0eXBlXHJcbiAgICBsZXQgY2F0Y2hlZFR5cGVJZCA9IHR5cGVDYXRjaGVyKHZhcmlhYmxlKTtcclxuICAgIHJldHVybiB0eXBlTWFwZXIoY2F0Y2hlZFR5cGVJZCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR5cGVKUztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vc3JjL1R5cGUuanMiLCJpbXBvcnQgeyB0eXBlQ2F0Y2hlciB9IGZyb20gJy4vdHlwZS1jYXRjaGVyJztcclxuaW1wb3J0IHsgdHlwZU1hcGVyIH0gZnJvbSAnLi90eXBlLW1hcGVyJztcclxuXHJcbmV4cG9ydCB7IHR5cGVDYXRjaGVyLCB0eXBlTWFwZXIgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvbW9kdWxlcy9pbmRleC5qcyIsImltcG9ydCB7IE1hdGNoT2JqZWN0TW9kZWwgfSBmcm9tICcuL21hdGNoLW9iamVjdC1tb2RlbCc7XHJcblxyXG4vKipcclxuICogdHlwZUNoZWNrZXIgaXMgYSBleGVjdXRlIGxvZ2ljIGZvciBjYXRjaGluZyBpbnB1dGVkIHZhcmlhYmxlXHJcbiAqIGRhdGEgdHlwZSBieSB1c2luZyBSZWdFeCBtYXRjaGluZyBhbmQgSlMgb2JqZWN0IGhpZXJhcmNoeS5cclxuICpcclxuICogQHBhcmFtIHthbnl9XHR2YXJpYWJsZSAtIHRoaXMgaXMgdGhlIHBhcmFtZXRlciB2YXJpYWJsZS5cclxuICpcclxuICogQHJldHVybiB7bnVtYmVyfSBbaWQgb2YgZGF0YSB0eXBlIGZvciBnZXRpbmcgdHlwZSBuYW1lIGJ5IHR5cGVNYXBlcl0uXHJcbiAqL1xyXG5jb25zdCB0eXBlQ2F0Y2hlciA9IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XHJcblxyXG4gIGxldCBjYXRjaGVkVHlwZUlkID0gJyc7XHJcbiAgbGV0IHRtcE1hdGNoT2JqZWN0ID0ge307XHJcblxyXG4gIHN3aXRjaCAodmFyaWFibGUpIHtcclxuXHJcbiAgICBjYXNlICh0bXBNYXRjaE9iamVjdCA9IG1hdGNoU3RyaW5nKHZhcmlhYmxlKSkgJiYgdG1wTWF0Y2hPYmplY3QudmFsdWU6XHJcbiAgICAgIGNhdGNoZWRUeXBlSWQgPSB0bXBNYXRjaE9iamVjdC50eXBlO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICh0bXBNYXRjaE9iamVjdCA9IG1hdGNoQXJyYXkodmFyaWFibGUpKSAmJiB0bXBNYXRjaE9iamVjdC52YWx1ZTpcclxuICAgICAgY2F0Y2hlZFR5cGVJZCA9IHRtcE1hdGNoT2JqZWN0LnR5cGU7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgKHRtcE1hdGNoT2JqZWN0ID0gbWF0Y2hGdW5jdGlvbih2YXJpYWJsZSkpICYmIHRtcE1hdGNoT2JqZWN0LnZhbHVlOlxyXG4gICAgICBjYXRjaGVkVHlwZUlkID0gdG1wTWF0Y2hPYmplY3QudHlwZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAodG1wTWF0Y2hPYmplY3QgPSBtYXRjaFVuZGVmaW5lZCh2YXJpYWJsZSkpICYmIHRtcE1hdGNoT2JqZWN0LnZhbHVlOlxyXG4gICAgICBjYXRjaGVkVHlwZUlkID0gdG1wTWF0Y2hPYmplY3QudHlwZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAodG1wTWF0Y2hPYmplY3QgPSBtYXRjaERhdGUodmFyaWFibGUpKSAmJiB0bXBNYXRjaE9iamVjdC52YWx1ZTpcclxuICAgICAgY2F0Y2hlZFR5cGVJZCA9IHRtcE1hdGNoT2JqZWN0LnR5cGU7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIC8vIFRPRE9cclxuICAgIGNhc2UgKHRtcE1hdGNoT2JqZWN0ID0gbWF0Y2hCb29sZWFuKHZhcmlhYmxlKSkgJiYgdG1wTWF0Y2hPYmplY3QudmFsdWU6XHJcbiAgICAgIGNhdGNoZWRUeXBlSWQgPSB0bXBNYXRjaE9iamVjdC50eXBlO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAvLyBUT0RPXHJcbiAgICBjYXNlICh0bXBNYXRjaE9iamVjdCA9IG1hdGNoTnVtYmVyKHZhcmlhYmxlKSkgJiYgdG1wTWF0Y2hPYmplY3QudmFsdWU6XHJcbiAgICAgIGNhdGNoZWRUeXBlSWQgPSB0bXBNYXRjaE9iamVjdC50eXBlO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2F0Y2hlZFR5cGVJZDtcclxufVxyXG5cclxuY29uc3QgbWF0Y2hTdHJpbmcgPSB2YXJpYWJsZSA9PiB7XHJcbiAgbGV0IG1hdGNoT2JqZWN0TW9kZWwgPSBuZXcgTWF0Y2hPYmplY3RNb2RlbCh2YXJpYWJsZSwgdHlwZW9mIHZhcmlhYmxlKTtcclxuICByZXR1cm4gKG1hdGNoT2JqZWN0TW9kZWwudHlwZSA9PT0gJ3N0cmluZycpID8gbWF0Y2hPYmplY3RNb2RlbCA6IGZhbHNlO1xyXG59XHJcblxyXG5jb25zdCBtYXRjaEFycmF5ID0gdmFyaWFibGUgPT4ge1xyXG4gIGxldCB0eXBlSWQgPSB2YXJpYWJsZSAmJiB2YXJpYWJsZS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQXJyYXknICYmICdhcnJheSc7XHJcbiAgbGV0IG1hdGNoT2JqZWN0TW9kZWwgPSBuZXcgTWF0Y2hPYmplY3RNb2RlbCh2YXJpYWJsZSwgdHlwZUlkKTtcclxuICByZXR1cm4gKG1hdGNoT2JqZWN0TW9kZWwudHlwZSA9PT0gJ2FycmF5JykgPyBtYXRjaE9iamVjdE1vZGVsIDogZmFsc2U7XHJcbn1cclxuXHJcbmNvbnN0IG1hdGNoRnVuY3Rpb24gPSB2YXJpYWJsZSA9PiB7XHJcbiAgbGV0IHR5cGVJZCA9IHZhcmlhYmxlICYmIHZhcmlhYmxlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicgJiYgJ2Z1bmN0aW9uJztcclxuICBsZXQgbWF0Y2hPYmplY3RNb2RlbCA9IG5ldyBNYXRjaE9iamVjdE1vZGVsKHZhcmlhYmxlLCB0eXBlSWQpO1xyXG4gIHJldHVybiAobWF0Y2hPYmplY3RNb2RlbC50eXBlID09PSAnZnVuY3Rpb24nKSA/IG1hdGNoT2JqZWN0TW9kZWwgOiBmYWxzZTtcclxufVxyXG5cclxuY29uc3QgbWF0Y2hVbmRlZmluZWQgPSB2YXJpYWJsZSA9PiB7XHJcbiAgbGV0IG1hdGNoT2JqZWN0TW9kZWwgPSBuZXcgTWF0Y2hPYmplY3RNb2RlbCh2YXJpYWJsZSwgdHlwZW9mIHZhcmlhYmxlKTtcclxuICByZXR1cm4gKG1hdGNoT2JqZWN0TW9kZWwudHlwZSA9PT0gJ3VuZGVmaW5lZCcpID8gbWF0Y2hPYmplY3RNb2RlbCA6IGZhbHNlO1xyXG59XHJcblxyXG5jb25zdCBtYXRjaERhdGUgPSB2YXJpYWJsZSA9PiB7XHJcbiAgbGV0IHR5cGVJZCA9IHZhcmlhYmxlICYmIHZhcmlhYmxlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdEYXRlJyAmJiAnZGF0ZSc7XHJcbiAgbGV0IG1hdGNoT2JqZWN0TW9kZWwgPSBuZXcgTWF0Y2hPYmplY3RNb2RlbCh2YXJpYWJsZSwgdHlwZUlkKTtcclxuICByZXR1cm4gKG1hdGNoT2JqZWN0TW9kZWwudHlwZSA9PT0gJ2RhdGUnKSA/IG1hdGNoT2JqZWN0TW9kZWwgOiBmYWxzZTtcclxufVxyXG5cclxuLy8gVE9ETyBpbXBsZW1lbnQgY29yZWN0IGxvZ2ljIGZvciBzdXBwb3J0IGZhbHNlLlxyXG5jb25zdCBtYXRjaEJvb2xlYW4gPSB2YXJpYWJsZSA9PiB7XHJcbiAgbGV0IG1hdGNoT2JqZWN0TW9kZWwgPSBuZXcgTWF0Y2hPYmplY3RNb2RlbCh2YXJpYWJsZSwgdHlwZW9mIHZhcmlhYmxlKTtcclxuICByZXR1cm4gKG1hdGNoT2JqZWN0TW9kZWwudHlwZSA9PT0gJ2Jvb2xlYW4nKSA/IG1hdGNoT2JqZWN0TW9kZWwgOiBmYWxzZTtcclxufVxyXG5cclxuLy8gVE9ETyBpbXBsZW1lbnQgY29yZWN0IGxvZ2ljIGZvciBzdXBwb3J0IE5hTi5cclxuY29uc3QgbWF0Y2hOdW1iZXIgPSB2YXJpYWJsZSA9PiB7XHJcbiAgbGV0IHR5cGVJZCA9IHBhcnNlSW50KHZhcmlhYmxlLnRvU3RyaW5nKCkpID09PSBwYXJzZUludCh2YXJpYWJsZS50b1N0cmluZygpKSA/ICdudW1iZXInIDogdmFyaWFibGUudG9TdHJpbmcoKTtcclxuICBsZXQgbWF0Y2hPYmplY3RNb2RlbCA9IG5ldyBNYXRjaE9iamVjdE1vZGVsKHZhcmlhYmxlLCB0eXBlSWQpO1xyXG4gIHJldHVybiBtYXRjaE9iamVjdE1vZGVsO1xyXG59XHJcblxyXG5leHBvcnQgeyB0eXBlQ2F0Y2hlciB9XHJcblxyXG4vLyBpbml0KCkge1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVudi5BcnJheS5wcm90b3R5cGUsIFt0aGlzLmxpYk5hbWVdLCB7XHJcbi8vIFx0XHR2YWx1ZTogJ0FycmF5JyxcclxuLy8gXHRcdHdyaXRhYmxlOiBmYWxzZSxcclxuLy8gXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbi8vIFx0XHRlbnVtZXJhYmxlOiB0cnVlXHJcbi8vIFx0fSk7XHJcbi8vXHJcbi8vIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuZW52Lk51bWJlci5wcm90b3R5cGUsIFt0aGlzLmxpYk5hbWVdLCB7XHJcbi8vIFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG4vLyBcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuLy8gXHRcdGdldDogZnVuY3Rpb24oKSB7XHJcbi8vIFx0XHRcdHJldHVybiBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCkpID09PSBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCkpID8gJ051bWJlcicgOiB0aGlzLnRvU3RyaW5nKCk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0fSk7XHJcbi8vXHJcbi8vIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuZW52LlN0cmluZy5wcm90b3R5cGUsIFt0aGlzLmxpYk5hbWVdLCB7XHJcbi8vIFx0XHR2YWx1ZTogJ1N0cmluZycsXHJcbi8vIFx0XHR3cml0YWJsZTogZmFsc2UsXHJcbi8vIFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG4vLyBcdFx0ZW51bWVyYWJsZTogdHJ1ZVxyXG4vLyBcdH0pO1xyXG4vL1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVudi5PYmplY3QucHJvdG90eXBlLCBbdGhpcy5saWJOYW1lXSwge1xyXG4vLyBcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuLy8gXHRcdGVudW1lcmFibGU6IHRydWUsXHJcbi8vIFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG4vLyBcdFx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4vLyBcdFx0fVxyXG4vLyBcdH0pO1xyXG4vLyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9tb2R1bGVzL3R5cGUtY2F0Y2hlci5qcyIsIlxyXG4vKipcclxuICogTWF0Y2hPYmplY3RNb2RlbFxyXG4gKlxyXG4gKi9cclxuY2xhc3MgTWF0Y2hPYmplY3RNb2RlbCB7XHJcbiAgY29uc3RydWN0b3IodmFsdWUsIHR5cGUpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBNYXRjaE9iamVjdE1vZGVsIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vc3JjL21vZHVsZXMvbWF0Y2gtb2JqZWN0LW1vZGVsLmpzIiwiaW1wb3J0IHsgVHlwZXMgfSBmcm9tICcuLi9lbnVtcydcclxuXHJcbi8qKlxyXG4gKiB0eXBlTWFwZXIgZ2V0IGRhdGEgdHlwZSBpZCBhbmQgcmV0dXJuIGJhY2sgc3RyaW5nIG5hbWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfVx0dHlwZUlkIC0gdGhpcyBpcyB0aGUgcGFyYW1ldGVyIHR5cGUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gW21hcGVkIHN0cmluZyBieSBpZCBrZXldLlxyXG4gKi9cclxuY29uc3QgdHlwZU1hcGVyID0gZnVuY3Rpb24odHlwZUlkKSB7XHJcbiAgLy8gbWFwZXIgaXMgYSByZXR1cm4gaHVtYW4gcmVhZGFibGUgdGV4dCB0eXBlXHJcbiAgcmV0dXJuIFR5cGVzW3R5cGVJZF07XHJcbn1cclxuXHJcbmV4cG9ydCB7IHR5cGVNYXBlciB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9tb2R1bGVzL3R5cGUtbWFwZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm5hbWVcIjpcIiBqcy10eXBlLWhlbHBlclwiLFwidmVyc2lvblwiOlwiMC4wLjFcIixcImRlc2NyaXB0aW9uXCI6XCJkZXNjcmlwdGlvbiBoZXJlXCIsXCJtYWluXCI6XCIuL2luZGV4LmpzXCIsXCJtb2R1bGVcIjpcIi4vc3JjL2luZGV4LmpzXCIsXCJzY3JpcHRzXCI6e1wiYnVpbGRcIjpcImNkIC4vY29uZmlncyAmJiB3ZWJwYWNrXCIsXCJzdGFydFwiOlwiY2QgLi9jb25maWdzICYmIHdlYnBhY2sgLS13YXRjaFwiLFwidGVzdFwiOlwiY2QgLi9jb25maWdzICYmIGplc3QgLS1jb25maWcgamVzdC5jb25maWcuanNvblwiLFwiY292ZXJhZ2VcIjpcImNkIC4vY29uZmlncyAmJiBqZXN0IC0tY292ZXJhZ2UgJiYgY2F0IC4uL2NvdmVyYWdlL2xjb3YuaW5mbyB8IGNvdmVyYWxsc1wiLFwiZG9jc1wiOlwiZXNkb2MgLWMgZXNkb2MuanNvblwifSxcInJlcG9zaXRvcnlcIjp7XCJ0eXBlXCI6XCJnaXRcIixcInVybFwiOlwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9IYW1pazI1L1R5cGVKUy5naXRcIn0sXCJrZXl3b3Jkc1wiOltdLFwiYXV0aG9yXCI6XCJIYW1payBIYW1iYXJkenVteWFuXCIsXCJsaWNlbnNlXCI6XCJJU0NcIixcImJ1Z3NcIjp7XCJ1cmxcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9IYW1pazI1L1R5cGVKUy9pc3N1ZXNcIn0sXCJob21lcGFnZVwiOlwiaHR0cHM6Ly9naXRodWIuY29tL0hhbWlrMjUvVHlwZUpTI3JlYWRtZVwiLFwiZGV2RGVwZW5kZW5jaWVzXCI6e1wiYmFiZWwtY29yZVwiOlwiXjYuMjYuMFwiLFwiYmFiZWwtbG9hZGVyXCI6XCJeNy4xLjJcIixcImJhYmVsLXByZXNldC1lczIwMTVcIjpcIl42LjI0LjFcIixcImJhYmVsLXByZXNldC1zdGFnZS0yXCI6XCJeNi4yNC4xXCIsXCJjb3ZlcmFsbHNcIjpcIl4zLjAuMFwiLFwiZXNkb2NcIjpcIl4xLjAuNFwiLFwiZXNkb2Mtc3RhbmRhcmQtcGx1Z2luXCI6XCJeMS4wLjBcIixcImplc3RcIjpcIl4yMi4xLjRcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcGFja2FnZS5qc29uXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=