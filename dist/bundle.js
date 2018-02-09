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
  if (typeId === 'number') {
    typeId = variable % 1 === 0 ? 'int' : 'float';
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZDA3N2Y3ZGExYjY1MjczYTc1NSIsIndlYnBhY2s6Ly8vLi8uLi9zcmMvZW51bXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL21vZHVsZXMvdHlwZS1jYXRjaGVyLmpzIiwid2VicGFjazovLy8uLy4uL3NyYy9tb2R1bGVzL21hdGNoLW9iamVjdC1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi8uLi9zcmMvbW9kdWxlcy90eXBlLW1hcGVyLmpzIiwid2VicGFjazovLy8uLi9wYWNrYWdlLmpzb24iXSwibmFtZXMiOlsiVHlwZXMiLCJwanNvbiIsInJlcXVpcmUiLCJFTlZJUk9OTUVOVCIsIkxJQl9OQU1FIiwiVkVSU0lPTiIsInZlcnNpb24iLCJpc0Jyb3dzZXIiLCJGdW5jdGlvbiIsImlzTm9kZUpTIiwid2luZG93IiwiZ2xvYmFsIiwidHlwZUpTIiwibW9kdWxlIiwiZXhwb3J0cyIsIlR5cGVKUyIsImVudmlyb25tZW50IiwibGliTmFtZSIsImVudiIsInZhcmlhYmxlIiwiY2F0Y2hlZFR5cGVJZCIsInR5cGVDYXRjaGVyIiwidHlwZU1hcGVyIiwidG1wTWF0Y2hPYmplY3QiLCJtYXRjaFN0cmluZyIsInZhbHVlIiwidHlwZSIsIm1hdGNoQXJyYXkiLCJtYXRjaEZ1bmN0aW9uIiwibWF0Y2hVbmRlZmluZWQiLCJtYXRjaERhdGUiLCJtYXRjaEJvb2xlYW4iLCJtYXRjaE51bWJlciIsIm1hdGNoT2JqZWN0TW9kZWwiLCJ0eXBlSWQiLCJjb25zdHJ1Y3RvciIs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QTBFLHlNIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiVHlwZUpTXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlR5cGVKU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUeXBlSlNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZkMDc3ZjdkYTFiNjUyNzNhNzU1IiwiY29uc3QgVHlwZXMgPSB7XHJcbiAgJ3N0cmluZyc6ICdTdHJpbmcnLFxyXG4gICdudW1iZXInOiAnTnVtYmVyJyxcclxuICAnSW5maW5pdHknOiAnSW5maW5pdHknLFxyXG4gICctSW5maW5pdHknOiAnLUluZmluaXR5JyxcclxuICAnTmFOJzogJ05hTicsXHJcbiAgJ2ludCc6ICdJbnQnLFxyXG4gICdmbG9hdCc6ICdGbG9hdCcsXHJcbiAgJ29iamVjdCc6ICdPYmplY3QnLFxyXG4gICdudWxsJzogJ051bGwnLFxyXG4gICd1bmRlZmluZWQnOiAnVW5kZWZpbmVkJyxcclxuICAnYm9vbGVhbic6ICdCb29sZWFuJyxcclxuICAnYXJyYXknOiAnQXJyYXknLFxyXG4gICdmdW5jdGlvbic6ICdGdW5jdGlvbicsXHJcbiAgJ2RhdGUnOiAnRGF0ZSdcclxufVxyXG5cclxuZXhwb3J0IHsgVHlwZXMgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvZW51bXMvaW5kZXguanMiLCIvLyBNSVQgTElDRU5DRS5cclxuXHJcbi8vIEltcG9ydHNcclxuaW1wb3J0IFR5cGVKUyBmcm9tICcuL1R5cGUnO1xyXG5cclxubGV0IHBqc29uID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJyk7XHJcblxyXG5sZXQgRU5WSVJPTk1FTlQ7XHJcbmxldCBMSUJfTkFNRSA9ICdUeXBlSlMnO1xyXG5sZXQgVkVSU0lPTiA9IHBqc29uLnZlcnNpb247XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qXHREZXRlY3QgZW52aXJvbm1lbnQuXHQqXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5sZXQgaXNCcm93c2VyID0gbmV3IEZ1bmN0aW9uKFwidHJ5IHtyZXR1cm4gdGhpcyA9PT0gd2luZG93O30gY2F0Y2goZSkgeyByZXR1cm4gZmFsc2U7IH1cIik7XHJcbmxldCBpc05vZGVKUyAgPSBuZXcgRnVuY3Rpb24oXCJ0cnkge3JldHVybiB0aGlzID09PSBnbG9iYWw7fSBjYXRjaChlKSB7IHJldHVybiBmYWxzZTsgfVwiKTtcclxuXHJcbmlmIChpc0Jyb3dzZXIoKSkge1xyXG5cdEVOVklST05NRU5UID0gd2luZG93O1xyXG59IGVsc2UgaWYgKGlzTm9kZUpTKCkpIHtcclxuXHRFTlZJUk9OTUVOVCA9IGdsb2JhbDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbipcdE5ldyBpbnN0YW5jZSBvZiBsaWJyYXJ5XHQqXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuY29uc3QgdHlwZUpTID0gbmV3IFR5cGVKUyhFTlZJUk9OTUVOVCwgTElCX05BTUUsIFZFUlNJT04pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0eXBlSlM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9pbmRleC5qcyIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBUeXBlcyB9IGZyb20gJy4vZW51bXMnXHJcblxyXG5pbXBvcnQgeyB0eXBlQ2F0Y2hlciwgdHlwZU1hcGVyIH0gZnJvbSAnLi9tb2R1bGVzJ1xyXG5cclxuLyoqXHJcbiAqIFR5cGVKU1xyXG4gKi9cclxuY2xhc3MgVHlwZUpTIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtvYmplY3R9XHRlbnZpcm9ubWVudCAtIHRoaXMgaXMgdGhlIHBhcmFtZXRlciBlbnZpcm9ubWVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ31cdGxpYk5hbWUgLSB0aGlzIGlzIHRoZSBwYXJhbWV0ZXIgbGliTmFtZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbnZpcm9ubWVudCwgbGliTmFtZSwgdmVyc2lvbikge1xyXG4gICAgdGhpcy5lbnYgPSBlbnZpcm9ubWVudDtcclxuICAgIHRoaXMubGliTmFtZSA9IGxpYk5hbWU7XHJcbiAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZ2V0VHlwZSBtZXRob2QgaXMgYSBlbnRyeSBwb2ludCBmb3IgZ2V0dGluZyBkYXRhIHR5cGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2FueX1cdHZhcmlhYmxlIC0gdGhpcyBpcyB0aGUgcGFyYW1ldGVyIHZhcmlhYmxlLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7c3RyaW5nfSBbdmFyaWFibGUgZGF0YSB0eXBlLl1cclxuICAgKi9cclxuICBnZXRUeXBlKHZhcmlhYmxlKSB7XHJcbiAgICAvLyBoZXJlIG5lZWQgZXhlY3V0ZSBsb2dpYyBmb3IgZ2V0aW5nIGNvcnJlY3QgdHlwZVxyXG4gICAgbGV0IGNhdGNoZWRUeXBlSWQgPSB0eXBlQ2F0Y2hlcih2YXJpYWJsZSk7XHJcbiAgICByZXR1cm4gdHlwZU1hcGVyKGNhdGNoZWRUeXBlSWQpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBlSlM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9UeXBlLmpzIiwiaW1wb3J0IHsgdHlwZUNhdGNoZXIgfSBmcm9tICcuL3R5cGUtY2F0Y2hlcic7XHJcbmltcG9ydCB7IHR5cGVNYXBlciB9IGZyb20gJy4vdHlwZS1tYXBlcic7XHJcblxyXG5leHBvcnQgeyB0eXBlQ2F0Y2hlciwgdHlwZU1hcGVyIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJpbXBvcnQgeyBNYXRjaE9iamVjdE1vZGVsIH0gZnJvbSAnLi9tYXRjaC1vYmplY3QtbW9kZWwnO1xyXG5cclxuLyoqXHJcbiAqIHR5cGVDaGVja2VyIGlzIGEgZXhlY3V0ZSBsb2dpYyBmb3IgY2F0Y2hpbmcgaW5wdXRlZCB2YXJpYWJsZVxyXG4gKiBkYXRhIHR5cGUgYnkgdXNpbmcgUmVnRXggbWF0Y2hpbmcgYW5kIEpTIG9iamVjdCBoaWVyYXJjaHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7YW55fVx0dmFyaWFibGUgLSB0aGlzIGlzIHRoZSBwYXJhbWV0ZXIgdmFyaWFibGUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge251bWJlcn0gW2lkIG9mIGRhdGEgdHlwZSBmb3IgZ2V0aW5nIHR5cGUgbmFtZSBieSB0eXBlTWFwZXJdLlxyXG4gKi9cclxuY29uc3QgdHlwZUNhdGNoZXIgPSBmdW5jdGlvbih2YXJpYWJsZSkge1xyXG5cclxuICBsZXQgY2F0Y2hlZFR5cGVJZCA9ICcnO1xyXG4gIGxldCB0bXBNYXRjaE9iamVjdCA9IHt9O1xyXG5cclxuICBzd2l0Y2ggKHZhcmlhYmxlKSB7XHJcblxyXG4gICAgY2FzZSAodG1wTWF0Y2hPYmplY3QgPSBtYXRjaFN0cmluZyh2YXJpYWJsZSkpICYmIHRtcE1hdGNoT2JqZWN0LnZhbHVlOlxyXG4gICAgICBjYXRjaGVkVHlwZUlkID0gdG1wTWF0Y2hPYmplY3QudHlwZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAodG1wTWF0Y2hPYmplY3QgPSBtYXRjaEFycmF5KHZhcmlhYmxlKSkgJiYgdG1wTWF0Y2hPYmplY3QudmFsdWU6XHJcbiAgICAgIGNhdGNoZWRUeXBlSWQgPSB0bXBNYXRjaE9iamVjdC50eXBlO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICh0bXBNYXRjaE9iamVjdCA9IG1hdGNoRnVuY3Rpb24odmFyaWFibGUpKSAmJiB0bXBNYXRjaE9iamVjdC52YWx1ZTpcclxuICAgICAgY2F0Y2hlZFR5cGVJZCA9IHRtcE1hdGNoT2JqZWN0LnR5cGU7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgKHRtcE1hdGNoT2JqZWN0ID0gbWF0Y2hVbmRlZmluZWQodmFyaWFibGUpKSAmJiB0bXBNYXRjaE9iamVjdC52YWx1ZTpcclxuICAgICAgY2F0Y2hlZFR5cGVJZCA9IHRtcE1hdGNoT2JqZWN0LnR5cGU7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgKHRtcE1hdGNoT2JqZWN0ID0gbWF0Y2hEYXRlKHZhcmlhYmxlKSkgJiYgdG1wTWF0Y2hPYmplY3QudmFsdWU6XHJcbiAgICAgIGNhdGNoZWRUeXBlSWQgPSB0bXBNYXRjaE9iamVjdC50eXBlO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAvLyBUT0RPXHJcbiAgICBjYXNlICh0bXBNYXRjaE9iamVjdCA9IG1hdGNoQm9vbGVhbih2YXJpYWJsZSkpICYmIHRtcE1hdGNoT2JqZWN0LnZhbHVlOlxyXG4gICAgICBjYXRjaGVkVHlwZUlkID0gdG1wTWF0Y2hPYmplY3QudHlwZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgLy8gVE9ET1xyXG4gICAgY2FzZSAodG1wTWF0Y2hPYmplY3QgPSBtYXRjaE51bWJlcih2YXJpYWJsZSkpICYmIHRtcE1hdGNoT2JqZWN0LnZhbHVlOlxyXG4gICAgICBjYXRjaGVkVHlwZUlkID0gdG1wTWF0Y2hPYmplY3QudHlwZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhdGNoZWRUeXBlSWQ7XHJcbn1cclxuXHJcbmNvbnN0IG1hdGNoU3RyaW5nID0gdmFyaWFibGUgPT4ge1xyXG4gIGxldCBtYXRjaE9iamVjdE1vZGVsID0gbmV3IE1hdGNoT2JqZWN0TW9kZWwodmFyaWFibGUsIHR5cGVvZiB2YXJpYWJsZSk7XHJcbiAgcmV0dXJuIChtYXRjaE9iamVjdE1vZGVsLnR5cGUgPT09ICdzdHJpbmcnKSA/IG1hdGNoT2JqZWN0TW9kZWwgOiBmYWxzZTtcclxufVxyXG5cclxuY29uc3QgbWF0Y2hBcnJheSA9IHZhcmlhYmxlID0+IHtcclxuICBsZXQgdHlwZUlkID0gdmFyaWFibGUgJiYgdmFyaWFibGUuY29uc3RydWN0b3IubmFtZSA9PT0gJ0FycmF5JyAmJiAnYXJyYXknO1xyXG4gIGxldCBtYXRjaE9iamVjdE1vZGVsID0gbmV3IE1hdGNoT2JqZWN0TW9kZWwodmFyaWFibGUsIHR5cGVJZCk7XHJcbiAgcmV0dXJuIChtYXRjaE9iamVjdE1vZGVsLnR5cGUgPT09ICdhcnJheScpID8gbWF0Y2hPYmplY3RNb2RlbCA6IGZhbHNlO1xyXG59XHJcblxyXG5jb25zdCBtYXRjaEZ1bmN0aW9uID0gdmFyaWFibGUgPT4ge1xyXG4gIGxldCB0eXBlSWQgPSB2YXJpYWJsZSAmJiB2YXJpYWJsZS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nICYmICdmdW5jdGlvbic7XHJcbiAgbGV0IG1hdGNoT2JqZWN0TW9kZWwgPSBuZXcgTWF0Y2hPYmplY3RNb2RlbCh2YXJpYWJsZSwgdHlwZUlkKTtcclxuICByZXR1cm4gKG1hdGNoT2JqZWN0TW9kZWwudHlwZSA9PT0gJ2Z1bmN0aW9uJykgPyBtYXRjaE9iamVjdE1vZGVsIDogZmFsc2U7XHJcbn1cclxuXHJcbmNvbnN0IG1hdGNoVW5kZWZpbmVkID0gdmFyaWFibGUgPT4ge1xyXG4gIGxldCBtYXRjaE9iamVjdE1vZGVsID0gbmV3IE1hdGNoT2JqZWN0TW9kZWwodmFyaWFibGUsIHR5cGVvZiB2YXJpYWJsZSk7XHJcbiAgcmV0dXJuIChtYXRjaE9iamVjdE1vZGVsLnR5cGUgPT09ICd1bmRlZmluZWQnKSA/IG1hdGNoT2JqZWN0TW9kZWwgOiBmYWxzZTtcclxufVxyXG5cclxuY29uc3QgbWF0Y2hEYXRlID0gdmFyaWFibGUgPT4ge1xyXG4gIGxldCB0eXBlSWQgPSB2YXJpYWJsZSAmJiB2YXJpYWJsZS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRGF0ZScgJiYgJ2RhdGUnO1xyXG4gIGxldCBtYXRjaE9iamVjdE1vZGVsID0gbmV3IE1hdGNoT2JqZWN0TW9kZWwodmFyaWFibGUsIHR5cGVJZCk7XHJcbiAgcmV0dXJuIChtYXRjaE9iamVjdE1vZGVsLnR5cGUgPT09ICdkYXRlJykgPyBtYXRjaE9iamVjdE1vZGVsIDogZmFsc2U7XHJcbn1cclxuXHJcbi8vIFRPRE8gaW1wbGVtZW50IGNvcmVjdCBsb2dpYyBmb3Igc3VwcG9ydCBmYWxzZS5cclxuY29uc3QgbWF0Y2hCb29sZWFuID0gdmFyaWFibGUgPT4ge1xyXG4gIGxldCBtYXRjaE9iamVjdE1vZGVsID0gbmV3IE1hdGNoT2JqZWN0TW9kZWwodmFyaWFibGUsIHR5cGVvZiB2YXJpYWJsZSk7XHJcbiAgcmV0dXJuIChtYXRjaE9iamVjdE1vZGVsLnR5cGUgPT09ICdib29sZWFuJykgPyBtYXRjaE9iamVjdE1vZGVsIDogZmFsc2U7XHJcbn1cclxuXHJcbi8vIFRPRE8gaW1wbGVtZW50IGNvcmVjdCBsb2dpYyBmb3Igc3VwcG9ydCBOYU4uXHJcbmNvbnN0IG1hdGNoTnVtYmVyID0gdmFyaWFibGUgPT4ge1xyXG4gIGxldCB0eXBlSWQgPSBwYXJzZUludCh2YXJpYWJsZS50b1N0cmluZygpKSA9PT0gcGFyc2VJbnQodmFyaWFibGUudG9TdHJpbmcoKSkgPyAnbnVtYmVyJyA6IHZhcmlhYmxlLnRvU3RyaW5nKCk7XHJcbiAgaWYgKHR5cGVJZCA9PT0gJ251bWJlcicpIHtcclxuICAgIHR5cGVJZCA9IHZhcmlhYmxlICUgMSA9PT0gMCA/ICdpbnQnIDogJ2Zsb2F0JztcclxuICB9XHJcbiAgbGV0IG1hdGNoT2JqZWN0TW9kZWwgPSBuZXcgTWF0Y2hPYmplY3RNb2RlbCh2YXJpYWJsZSwgdHlwZUlkKTtcclxuICByZXR1cm4gbWF0Y2hPYmplY3RNb2RlbDtcclxufVxyXG5cclxuZXhwb3J0IHsgdHlwZUNhdGNoZXIgfVxyXG5cclxuLy8gaW5pdCgpIHtcclxuLy8gXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5lbnYuQXJyYXkucHJvdG90eXBlLCBbdGhpcy5saWJOYW1lXSwge1xyXG4vLyBcdFx0dmFsdWU6ICdBcnJheScsXHJcbi8vIFx0XHR3cml0YWJsZTogZmFsc2UsXHJcbi8vIFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG4vLyBcdFx0ZW51bWVyYWJsZTogdHJ1ZVxyXG4vLyBcdH0pO1xyXG4vL1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVudi5OdW1iZXIucHJvdG90eXBlLCBbdGhpcy5saWJOYW1lXSwge1xyXG4vLyBcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuLy8gXHRcdGVudW1lcmFibGU6IHRydWUsXHJcbi8vIFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG4vLyBcdFx0XHRyZXR1cm4gcGFyc2VJbnQodGhpcy50b1N0cmluZygpKSA9PT0gcGFyc2VJbnQodGhpcy50b1N0cmluZygpKSA/ICdOdW1iZXInIDogdGhpcy50b1N0cmluZygpO1xyXG4vLyBcdFx0fVxyXG4vLyBcdH0pO1xyXG4vL1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVudi5TdHJpbmcucHJvdG90eXBlLCBbdGhpcy5saWJOYW1lXSwge1xyXG4vLyBcdFx0dmFsdWU6ICdTdHJpbmcnLFxyXG4vLyBcdFx0d3JpdGFibGU6IGZhbHNlLFxyXG4vLyBcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuLy8gXHRcdGVudW1lcmFibGU6IHRydWVcclxuLy8gXHR9KTtcclxuLy9cclxuLy8gXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5lbnYuT2JqZWN0LnByb3RvdHlwZSwgW3RoaXMubGliTmFtZV0sIHtcclxuLy8gXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbi8vIFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG4vLyBcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuLy8gXHRcdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuLy8gXHRcdH1cclxuLy8gXHR9KTtcclxuLy8gfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvbW9kdWxlcy90eXBlLWNhdGNoZXIuanMiLCJcclxuLyoqXHJcbiAqIE1hdGNoT2JqZWN0TW9kZWxcclxuICpcclxuICovXHJcbmNsYXNzIE1hdGNoT2JqZWN0TW9kZWwge1xyXG4gIGNvbnN0cnVjdG9yKHZhbHVlLCB0eXBlKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTWF0Y2hPYmplY3RNb2RlbCB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9tb2R1bGVzL21hdGNoLW9iamVjdC1tb2RlbC5qcyIsImltcG9ydCB7IFR5cGVzIH0gZnJvbSAnLi4vZW51bXMnXHJcblxyXG4vKipcclxuICogdHlwZU1hcGVyIGdldCBkYXRhIHR5cGUgaWQgYW5kIHJldHVybiBiYWNrIHN0cmluZyBuYW1lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn1cdHR5cGVJZCAtIHRoaXMgaXMgdGhlIHBhcmFtZXRlciB0eXBlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFttYXBlZCBzdHJpbmcgYnkgaWQga2V5XS5cclxuICovXHJcbmNvbnN0IHR5cGVNYXBlciA9IGZ1bmN0aW9uKHR5cGVJZCkge1xyXG4gIC8vIG1hcGVyIGlzIGEgcmV0dXJuIGh1bWFuIHJlYWRhYmxlIHRleHQgdHlwZVxyXG4gIHJldHVybiBUeXBlc1t0eXBlSWRdO1xyXG59XHJcblxyXG5leHBvcnQgeyB0eXBlTWFwZXIgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvbW9kdWxlcy90eXBlLW1hcGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJuYW1lXCI6XCIganMtdHlwZS1oZWxwZXJcIixcInZlcnNpb25cIjpcIjAuMC4xXCIsXCJkZXNjcmlwdGlvblwiOlwiZGVzY3JpcHRpb24gaGVyZVwiLFwibWFpblwiOlwiLi9pbmRleC5qc1wiLFwibW9kdWxlXCI6XCIuL3NyYy9pbmRleC5qc1wiLFwic2NyaXB0c1wiOntcImJ1aWxkXCI6XCJjZCAuL2NvbmZpZ3MgJiYgd2VicGFja1wiLFwic3RhcnRcIjpcImNkIC4vY29uZmlncyAmJiB3ZWJwYWNrIC0td2F0Y2hcIixcInRlc3RcIjpcImNkIC4vY29uZmlncyAmJiBqZXN0IC0tY29uZmlnIGplc3QuY29uZmlnLmpzb25cIixcImNvdmVyYWdlXCI6XCJjZCAuL2NvbmZpZ3MgJiYgamVzdCAtLWNvdmVyYWdlICYmIGNhdCAuLi9jb3ZlcmFnZS9sY292LmluZm8gfCBjb3ZlcmFsbHNcIixcImRvY3NcIjpcImVzZG9jIC1jIGVzZG9jLmpzb25cIn0sXCJyZXBvc2l0b3J5XCI6e1widHlwZVwiOlwiZ2l0XCIsXCJ1cmxcIjpcImdpdCtodHRwczovL2dpdGh1Yi5jb20vSGFtaWsyNS9UeXBlSlMuZ2l0XCJ9LFwia2V5d29yZHNcIjpbXSxcImF1dGhvclwiOlwiSGFtaWsgSGFtYmFyZHp1bXlhblwiLFwibGljZW5zZVwiOlwiSVNDXCIsXCJidWdzXCI6e1widXJsXCI6XCJodHRwczovL2dpdGh1Yi5jb20vSGFtaWsyNS9UeXBlSlMvaXNzdWVzXCJ9LFwiaG9tZXBhZ2VcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9IYW1pazI1L1R5cGVKUyNyZWFkbWVcIixcImRldkRlcGVuZGVuY2llc1wiOntcImJhYmVsLWNvcmVcIjpcIl42LjI2LjBcIixcImJhYmVsLWxvYWRlclwiOlwiXjcuMS4yXCIsXCJiYWJlbC1wcmVzZXQtZXMyMDE1XCI6XCJeNi4yNC4xXCIsXCJiYWJlbC1wcmVzZXQtc3RhZ2UtMlwiOlwiXjYuMjQuMVwiLFwiY292ZXJhbGxzXCI6XCJeMy4wLjBcIixcImVzZG9jXCI6XCJeMS4wLjRcIixcImVzZG9jLXN0YW5kYXJkLXBsdWdpblwiOlwiXjEuMC4wXCIsXCJqZXN0XCI6XCJeMjIuMS40XCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3BhY2thZ2UuanNvblxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9