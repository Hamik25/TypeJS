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
  'NaN': 'NaN',
  'Infinity': 'Infinity',
  '-Infinity': '-Infinity',
  'object': 'Object',
  'null': 'Null',
  'undefined': 'undefined',
  'boolean': 'Boolean',
  'array': 'Array',
  'function': 'Function',
  'int': 'Int',
  'float': 'Float',
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

var pjson = __webpack_require__(7); // MIT LICENCE.

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

var _typeMaper = __webpack_require__(6);

exports.typeCatcher = _typeCatcher.typeCatcher;
exports.typeMaper = _typeMaper.typeMaper;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * typeChecker is a execute logic for catching inputed variable
 * data type by using RegEx matching and JS object hierarchy.
 *
 * @param {any}	variable - this is the parameter variable.
 *
 * @return {number} [id of data type for geting type name by typeMaper].
 */
var typeCatcher = function typeCatcher(variable) {
  return variable;
};

exports.typeCatcher = typeCatcher;

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = {"name":" js-type-helper","version":"0.0.1","description":"description here","main":"./index.js","module":"./src/index.js","scripts":{"build":"cd ./configs && webpack","start":"cd ./configs && webpack --watch","test":"cd ./configs && jest --config jest.config.json","coverage":"cd ./configs && jest --coverage && cat ../coverage/lcov.info | coveralls","docs":"esdoc -c .esdoc.json"},"repository":{"type":"git","url":"git+https://github.com/Hamik25/TypeJS.git"},"keywords":[],"author":"Hamik Hambardzumyan","license":"ISC","bugs":{"url":"https://github.com/Hamik25/TypeJS/issues"},"homepage":"https://github.com/Hamik25/TypeJS#readme","devDependencies":{"babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"^6.24.1","coveralls":"^3.0.0","esdoc":"^1.0.4","esdoc-standard-plugin":"^1.0.0","jest":"^22.1.4"}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMzZiODUyMzI4OTE3MmMxMmExMCIsIndlYnBhY2s6Ly8vLi8uLi9zcmMvZW51bXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL21vZHVsZXMvdHlwZS1jYXRjaGVyLmpzIiwid2VicGFjazovLy8uLy4uL3NyYy9tb2R1bGVzL3R5cGUtbWFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3BhY2thZ2UuanNvbiJdLCJuYW1lcyI6WyJUeXBlcyIsInBqc29uIiwicmVxdWlyZSIsIkVOVklST05NRU5UIiwiTElCX05BTUUiLCJWRVJTSU9OIiwidmVyc2lvbiIsImlzQnJvd3NlciIsIkZ1bmN0aW9uIiwiaXNOb2RlSlMiLCJ3aW5kb3ciLCJnbG9iYWwiLCJ0eXBlSlMiLCJtb2R1bGUiLCJleHBvcnRzIiwiVHlwZUpTIiwiZW52aXJvbm1lbnQiLCJsaWJOYW1lIiwiZW52IiwidmFyaWFibGUiLCJjYXRjaGVkVHlwZUlkIiwidHlwZUNhdGNoZXIiLCJ0eXBlTWFwZXIiLCJ0eXBlSWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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ZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiVHlwZUpTXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlR5cGVKU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUeXBlSlNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAzNmI4NTIzMjg5MTcyYzEyYTEwIiwiY29uc3QgVHlwZXMgPSB7XHJcbiAgJ3N0cmluZyc6ICdTdHJpbmcnLFxyXG4gICdudW1iZXInOiAnTnVtYmVyJyxcclxuICAnTmFOJzogJ05hTicsXHJcbiAgJ0luZmluaXR5JzogJ0luZmluaXR5JyxcclxuICAnLUluZmluaXR5JzogJy1JbmZpbml0eScsXHJcbiAgJ29iamVjdCc6ICdPYmplY3QnLFxyXG4gICdudWxsJzogJ051bGwnLFxyXG4gICd1bmRlZmluZWQnOiAndW5kZWZpbmVkJyxcclxuICAnYm9vbGVhbic6ICdCb29sZWFuJyxcclxuICAnYXJyYXknOiAnQXJyYXknLFxyXG4gICdmdW5jdGlvbic6ICdGdW5jdGlvbicsXHJcbiAgJ2ludCc6ICdJbnQnLFxyXG4gICdmbG9hdCc6ICdGbG9hdCcsXHJcbiAgJ2RhdGUnOiAnRGF0ZSdcclxufVxyXG5cclxuZXhwb3J0IHsgVHlwZXMgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvZW51bXMvaW5kZXguanMiLCIvLyBNSVQgTElDRU5DRS5cclxuXHJcbi8vIEltcG9ydHNcclxuaW1wb3J0IFR5cGVKUyBmcm9tICcuL1R5cGUnO1xyXG5cclxubGV0IHBqc29uID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJyk7XHJcblxyXG5sZXQgRU5WSVJPTk1FTlQ7XHJcbmxldCBMSUJfTkFNRSA9ICdUeXBlSlMnO1xyXG5sZXQgVkVSU0lPTiA9IHBqc29uLnZlcnNpb247XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qXHREZXRlY3QgZW52aXJvbm1lbnQuXHQqXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5sZXQgaXNCcm93c2VyID0gbmV3IEZ1bmN0aW9uKFwidHJ5IHtyZXR1cm4gdGhpcyA9PT0gd2luZG93O30gY2F0Y2goZSkgeyByZXR1cm4gZmFsc2U7IH1cIik7XHJcbmxldCBpc05vZGVKUyAgPSBuZXcgRnVuY3Rpb24oXCJ0cnkge3JldHVybiB0aGlzID09PSBnbG9iYWw7fSBjYXRjaChlKSB7IHJldHVybiBmYWxzZTsgfVwiKTtcclxuXHJcbmlmIChpc0Jyb3dzZXIoKSkge1xyXG5cdEVOVklST05NRU5UID0gd2luZG93O1xyXG59IGVsc2UgaWYgKGlzTm9kZUpTKCkpIHtcclxuXHRFTlZJUk9OTUVOVCA9IGdsb2JhbDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbipcdE5ldyBpbnN0YW5jZSBvZiBsaWJyYXJ5XHQqXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuY29uc3QgdHlwZUpTID0gbmV3IFR5cGVKUyhFTlZJUk9OTUVOVCwgTElCX05BTUUsIFZFUlNJT04pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0eXBlSlM7XHJcblxyXG4vLyBpbml0KCkge1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVudi5BcnJheS5wcm90b3R5cGUsIFt0aGlzLmxpYk5hbWVdLCB7XHJcbi8vIFx0XHR2YWx1ZTogJ0FycmF5JyxcclxuLy8gXHRcdHdyaXRhYmxlOiBmYWxzZSxcclxuLy8gXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbi8vIFx0XHRlbnVtZXJhYmxlOiB0cnVlXHJcbi8vIFx0fSk7XHJcbi8vXHJcbi8vIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuZW52Lk51bWJlci5wcm90b3R5cGUsIFt0aGlzLmxpYk5hbWVdLCB7XHJcbi8vIFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG4vLyBcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuLy8gXHRcdGdldDogZnVuY3Rpb24oKSB7XHJcbi8vIFx0XHRcdHJldHVybiBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCkpID09PSBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCkpID8gJ051bWJlcicgOiB0aGlzLnRvU3RyaW5nKCk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0fSk7XHJcbi8vXHJcbi8vIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuZW52LlN0cmluZy5wcm90b3R5cGUsIFt0aGlzLmxpYk5hbWVdLCB7XHJcbi8vIFx0XHR2YWx1ZTogJ1N0cmluZycsXHJcbi8vIFx0XHR3cml0YWJsZTogZmFsc2UsXHJcbi8vIFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG4vLyBcdFx0ZW51bWVyYWJsZTogdHJ1ZVxyXG4vLyBcdH0pO1xyXG4vL1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVudi5PYmplY3QucHJvdG90eXBlLCBbdGhpcy5saWJOYW1lXSwge1xyXG4vLyBcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuLy8gXHRcdGVudW1lcmFibGU6IHRydWUsXHJcbi8vIFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG4vLyBcdFx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4vLyBcdFx0fVxyXG4vLyBcdH0pO1xyXG4vLyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9pbmRleC5qcyIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBUeXBlcyB9IGZyb20gJy4vZW51bXMnXHJcblxyXG5pbXBvcnQgeyB0eXBlQ2F0Y2hlciwgdHlwZU1hcGVyIH0gZnJvbSAnLi9tb2R1bGVzJ1xyXG5cclxuLyoqXHJcbiAqIFR5cGVKU1xyXG4gKi9cclxuY2xhc3MgVHlwZUpTIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtvYmplY3R9XHRlbnZpcm9ubWVudCAtIHRoaXMgaXMgdGhlIHBhcmFtZXRlciBlbnZpcm9ubWVudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ31cdGxpYk5hbWUgLSB0aGlzIGlzIHRoZSBwYXJhbWV0ZXIgbGliTmFtZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbnZpcm9ubWVudCwgbGliTmFtZSwgdmVyc2lvbikge1xyXG4gICAgdGhpcy5lbnYgPSBlbnZpcm9ubWVudDtcclxuICAgIHRoaXMubGliTmFtZSA9IGxpYk5hbWU7XHJcbiAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZ2V0VHlwZSBtZXRob2QgaXMgYSBlbnRyeSBwb2ludCBmb3IgZ2V0dGluZyBkYXRhIHR5cGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2FueX1cdHZhcmlhYmxlIC0gdGhpcyBpcyB0aGUgcGFyYW1ldGVyIHZhcmlhYmxlLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7c3RyaW5nfSBbdmFyaWFibGUgZGF0YSB0eXBlLl1cclxuICAgKi9cclxuICBnZXRUeXBlKHZhcmlhYmxlKSB7XHJcbiAgICAvLyBoZXJlIG5lZWQgZXhlY3V0ZSBsb2dpYyBmb3IgZ2V0aW5nIGNvcnJlY3QgdHlwZVxyXG4gICAgbGV0IGNhdGNoZWRUeXBlSWQgPSB0eXBlQ2F0Y2hlcih2YXJpYWJsZSk7XHJcbiAgICByZXR1cm4gdHlwZU1hcGVyKGNhdGNoZWRUeXBlSWQpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBlSlM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9UeXBlLmpzIiwiaW1wb3J0IHsgdHlwZUNhdGNoZXIgfSBmcm9tICcuL3R5cGUtY2F0Y2hlcic7XHJcbmltcG9ydCB7IHR5cGVNYXBlciB9IGZyb20gJy4vdHlwZS1tYXBlcic7XHJcblxyXG5leHBvcnQgeyB0eXBlQ2F0Y2hlciwgdHlwZU1hcGVyIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vc3JjL21vZHVsZXMvaW5kZXguanMiLCIvKipcclxuICogdHlwZUNoZWNrZXIgaXMgYSBleGVjdXRlIGxvZ2ljIGZvciBjYXRjaGluZyBpbnB1dGVkIHZhcmlhYmxlXHJcbiAqIGRhdGEgdHlwZSBieSB1c2luZyBSZWdFeCBtYXRjaGluZyBhbmQgSlMgb2JqZWN0IGhpZXJhcmNoeS5cclxuICpcclxuICogQHBhcmFtIHthbnl9XHR2YXJpYWJsZSAtIHRoaXMgaXMgdGhlIHBhcmFtZXRlciB2YXJpYWJsZS5cclxuICpcclxuICogQHJldHVybiB7bnVtYmVyfSBbaWQgb2YgZGF0YSB0eXBlIGZvciBnZXRpbmcgdHlwZSBuYW1lIGJ5IHR5cGVNYXBlcl0uXHJcbiAqL1xyXG5jb25zdCB0eXBlQ2F0Y2hlciA9IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XHJcbiAgcmV0dXJuIHZhcmlhYmxlO1xyXG59XHJcblxyXG5leHBvcnQgeyB0eXBlQ2F0Y2hlciB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9tb2R1bGVzL3R5cGUtY2F0Y2hlci5qcyIsImltcG9ydCB7IFR5cGVzIH0gZnJvbSAnLi4vZW51bXMnXHJcblxyXG4vKipcclxuICogdHlwZU1hcGVyIGdldCBkYXRhIHR5cGUgaWQgYW5kIHJldHVybiBiYWNrIHN0cmluZyBuYW1lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn1cdHR5cGVJZCAtIHRoaXMgaXMgdGhlIHBhcmFtZXRlciB0eXBlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFttYXBlZCBzdHJpbmcgYnkgaWQga2V5XS5cclxuICovXHJcbmNvbnN0IHR5cGVNYXBlciA9IGZ1bmN0aW9uKHR5cGVJZCkge1xyXG4gIC8vIG1hcGVyIGlzIGEgcmV0dXJuIGh1bWFuIHJlYWRhYmxlIHRleHQgdHlwZVxyXG4gIHJldHVybiBUeXBlc1t0eXBlSWRdO1xyXG59XHJcblxyXG5leHBvcnQgeyB0eXBlTWFwZXIgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvbW9kdWxlcy90eXBlLW1hcGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJuYW1lXCI6XCIganMtdHlwZS1oZWxwZXJcIixcInZlcnNpb25cIjpcIjAuMC4xXCIsXCJkZXNjcmlwdGlvblwiOlwiZGVzY3JpcHRpb24gaGVyZVwiLFwibWFpblwiOlwiLi9pbmRleC5qc1wiLFwibW9kdWxlXCI6XCIuL3NyYy9pbmRleC5qc1wiLFwic2NyaXB0c1wiOntcImJ1aWxkXCI6XCJjZCAuL2NvbmZpZ3MgJiYgd2VicGFja1wiLFwic3RhcnRcIjpcImNkIC4vY29uZmlncyAmJiB3ZWJwYWNrIC0td2F0Y2hcIixcInRlc3RcIjpcImNkIC4vY29uZmlncyAmJiBqZXN0IC0tY29uZmlnIGplc3QuY29uZmlnLmpzb25cIixcImNvdmVyYWdlXCI6XCJjZCAuL2NvbmZpZ3MgJiYgamVzdCAtLWNvdmVyYWdlICYmIGNhdCAuLi9jb3ZlcmFnZS9sY292LmluZm8gfCBjb3ZlcmFsbHNcIixcImRvY3NcIjpcImVzZG9jIC1jIC5lc2RvYy5qc29uXCJ9LFwicmVwb3NpdG9yeVwiOntcInR5cGVcIjpcImdpdFwiLFwidXJsXCI6XCJnaXQraHR0cHM6Ly9naXRodWIuY29tL0hhbWlrMjUvVHlwZUpTLmdpdFwifSxcImtleXdvcmRzXCI6W10sXCJhdXRob3JcIjpcIkhhbWlrIEhhbWJhcmR6dW15YW5cIixcImxpY2Vuc2VcIjpcIklTQ1wiLFwiYnVnc1wiOntcInVybFwiOlwiaHR0cHM6Ly9naXRodWIuY29tL0hhbWlrMjUvVHlwZUpTL2lzc3Vlc1wifSxcImhvbWVwYWdlXCI6XCJodHRwczovL2dpdGh1Yi5jb20vSGFtaWsyNS9UeXBlSlMjcmVhZG1lXCIsXCJkZXZEZXBlbmRlbmNpZXNcIjp7XCJiYWJlbC1jb3JlXCI6XCJeNi4yNi4wXCIsXCJiYWJlbC1sb2FkZXJcIjpcIl43LjEuMlwiLFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOlwiXjYuMjQuMVwiLFwiYmFiZWwtcHJlc2V0LXN0YWdlLTJcIjpcIl42LjI0LjFcIixcImNvdmVyYWxsc1wiOlwiXjMuMC4wXCIsXCJlc2RvY1wiOlwiXjEuMC40XCIsXCJlc2RvYy1zdGFuZGFyZC1wbHVnaW5cIjpcIl4xLjAuMFwiLFwiamVzdFwiOlwiXjIyLjEuNFwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wYWNrYWdlLmpzb25cbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==