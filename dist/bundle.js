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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * typeChecker is a execute logic for catching inputed variable
 * data type by using RegEx matching and JS object hierarchy.
 *
 * @param {any}	variable - this is the parameter variable.
 *
 * @return {number} [id of data type for geting type name by typeMaper].
 */
var typeCatcher = function typeCatcher(variable) {
  return typeof variable === "undefined" ? "undefined" : _typeof(variable);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NTMxNDI3OTU3YzQ0Mzk5NjgzYSIsIndlYnBhY2s6Ly8vLi8uLi9zcmMvZW51bXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL21vZHVsZXMvdHlwZS1jYXRjaGVyLmpzIiwid2VicGFjazovLy8uLy4uL3NyYy9tb2R1bGVzL3R5cGUtbWFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3BhY2thZ2UuanNvbiJdLCJuYW1lcyI6WyJUeXBlcyIsInBqc29uIiwicmVxdWlyZSIsIkVOVklST05NRU5UIiwiTElCX05BTUUiLCJWRVJTSU9OIiwidmVyc2lvbiIsImlzQnJvd3NlciIsIkZ1bmN0aW9uIiwiaXNOb2RlSlMiLCJ3aW5kb3ciLCJnbG9iYWwiLCJ0eXBlSlMiLCJtb2R1bGUiLCJleHBvcnRzIiwiVHlwZUpTIiwiZW52aXJvbm1lbnQiLCJsaWJOYW1lIiwiZW52IiwidmFyaWFibGUiLCJjYXRjaGVkVHlwZUlkIiwidHlwZUNhdGNoZXIiLCJ0eXBlTWFwZXIiLCJ0eXBlSWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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aURBQWlELDBFQUEwRSx5TSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlR5cGVKU1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUeXBlSlNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHlwZUpTXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NTMxNDI3OTU3YzQ0Mzk5NjgzYSIsImNvbnN0IFR5cGVzID0ge1xyXG4gICdzdHJpbmcnOiAnU3RyaW5nJyxcclxuICAnbnVtYmVyJzogJ051bWJlcicsXHJcbiAgJ05hTic6ICdOYU4nLFxyXG4gICdJbmZpbml0eSc6ICdJbmZpbml0eScsXHJcbiAgJy1JbmZpbml0eSc6ICctSW5maW5pdHknLFxyXG4gICdvYmplY3QnOiAnT2JqZWN0JyxcclxuICAnbnVsbCc6ICdOdWxsJyxcclxuICAndW5kZWZpbmVkJzogJ3VuZGVmaW5lZCcsXHJcbiAgJ2Jvb2xlYW4nOiAnQm9vbGVhbicsXHJcbiAgJ2FycmF5JzogJ0FycmF5JyxcclxuICAnZnVuY3Rpb24nOiAnRnVuY3Rpb24nLFxyXG4gICdpbnQnOiAnSW50JyxcclxuICAnZmxvYXQnOiAnRmxvYXQnLFxyXG4gICdkYXRlJzogJ0RhdGUnXHJcbn1cclxuXHJcbmV4cG9ydCB7IFR5cGVzIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vLi4vc3JjL2VudW1zL2luZGV4LmpzIiwiLy8gTUlUIExJQ0VOQ0UuXHJcblxyXG4vLyBJbXBvcnRzXHJcbmltcG9ydCBUeXBlSlMgZnJvbSAnLi9UeXBlJztcclxuXHJcbmxldCBwanNvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xyXG5cclxubGV0IEVOVklST05NRU5UO1xyXG5sZXQgTElCX05BTUUgPSAnVHlwZUpTJztcclxubGV0IFZFUlNJT04gPSBwanNvbi52ZXJzaW9uO1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKlx0RGV0ZWN0IGVudmlyb25tZW50Llx0KlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxubGV0IGlzQnJvd3NlciA9IG5ldyBGdW5jdGlvbihcInRyeSB7cmV0dXJuIHRoaXMgPT09IHdpbmRvdzt9IGNhdGNoKGUpIHsgcmV0dXJuIGZhbHNlOyB9XCIpO1xyXG5sZXQgaXNOb2RlSlMgID0gbmV3IEZ1bmN0aW9uKFwidHJ5IHtyZXR1cm4gdGhpcyA9PT0gZ2xvYmFsO30gY2F0Y2goZSkgeyByZXR1cm4gZmFsc2U7IH1cIik7XHJcblxyXG5pZiAoaXNCcm93c2VyKCkpIHtcclxuXHRFTlZJUk9OTUVOVCA9IHdpbmRvdztcclxufSBlbHNlIGlmIChpc05vZGVKUygpKSB7XHJcblx0RU5WSVJPTk1FTlQgPSBnbG9iYWw7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qXHROZXcgaW5zdGFuY2Ugb2YgbGlicmFyeVx0KlxyXG4qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmNvbnN0IHR5cGVKUyA9IG5ldyBUeXBlSlMoRU5WSVJPTk1FTlQsIExJQl9OQU1FLCBWRVJTSU9OKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdHlwZUpTO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvaW5kZXguanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVHlwZXMgfSBmcm9tICcuL2VudW1zJ1xyXG5cclxuaW1wb3J0IHsgdHlwZUNhdGNoZXIsIHR5cGVNYXBlciB9IGZyb20gJy4vbW9kdWxlcydcclxuXHJcbi8qKlxyXG4gKiBUeXBlSlNcclxuICovXHJcbmNsYXNzIFR5cGVKUyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fVx0ZW52aXJvbm1lbnQgLSB0aGlzIGlzIHRoZSBwYXJhbWV0ZXIgZW52aXJvbm1lbnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9XHRsaWJOYW1lIC0gdGhpcyBpcyB0aGUgcGFyYW1ldGVyIGxpYk5hbWUuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZW52aXJvbm1lbnQsIGxpYk5hbWUsIHZlcnNpb24pIHtcclxuICAgIHRoaXMuZW52ID0gZW52aXJvbm1lbnQ7XHJcbiAgICB0aGlzLmxpYk5hbWUgPSBsaWJOYW1lO1xyXG4gICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGdldFR5cGUgbWV0aG9kIGlzIGEgZW50cnkgcG9pbnQgZm9yIGdldHRpbmcgZGF0YSB0eXBlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHthbnl9XHR2YXJpYWJsZSAtIHRoaXMgaXMgdGhlIHBhcmFtZXRlciB2YXJpYWJsZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge3N0cmluZ30gW3ZhcmlhYmxlIGRhdGEgdHlwZS5dXHJcbiAgICovXHJcbiAgZ2V0VHlwZSh2YXJpYWJsZSkge1xyXG4gICAgLy8gaGVyZSBuZWVkIGV4ZWN1dGUgbG9naWMgZm9yIGdldGluZyBjb3JyZWN0IHR5cGVcclxuICAgIGxldCBjYXRjaGVkVHlwZUlkID0gdHlwZUNhdGNoZXIodmFyaWFibGUpO1xyXG4gICAgcmV0dXJuIHR5cGVNYXBlcihjYXRjaGVkVHlwZUlkKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHlwZUpTO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvVHlwZS5qcyIsImltcG9ydCB7IHR5cGVDYXRjaGVyIH0gZnJvbSAnLi90eXBlLWNhdGNoZXInO1xyXG5pbXBvcnQgeyB0eXBlTWFwZXIgfSBmcm9tICcuL3R5cGUtbWFwZXInO1xyXG5cclxuZXhwb3J0IHsgdHlwZUNhdGNoZXIsIHR5cGVNYXBlciB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwiLyoqXHJcbiAqIHR5cGVDaGVja2VyIGlzIGEgZXhlY3V0ZSBsb2dpYyBmb3IgY2F0Y2hpbmcgaW5wdXRlZCB2YXJpYWJsZVxyXG4gKiBkYXRhIHR5cGUgYnkgdXNpbmcgUmVnRXggbWF0Y2hpbmcgYW5kIEpTIG9iamVjdCBoaWVyYXJjaHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7YW55fVx0dmFyaWFibGUgLSB0aGlzIGlzIHRoZSBwYXJhbWV0ZXIgdmFyaWFibGUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge251bWJlcn0gW2lkIG9mIGRhdGEgdHlwZSBmb3IgZ2V0aW5nIHR5cGUgbmFtZSBieSB0eXBlTWFwZXJdLlxyXG4gKi9cclxuY29uc3QgdHlwZUNhdGNoZXIgPSBmdW5jdGlvbih2YXJpYWJsZSkge1xyXG4gIHJldHVybiB0eXBlb2YodmFyaWFibGUpO1xyXG59XHJcblxyXG5leHBvcnQgeyB0eXBlQ2F0Y2hlciB9XHJcblxyXG4vLyBpbml0KCkge1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVudi5BcnJheS5wcm90b3R5cGUsIFt0aGlzLmxpYk5hbWVdLCB7XHJcbi8vIFx0XHR2YWx1ZTogJ0FycmF5JyxcclxuLy8gXHRcdHdyaXRhYmxlOiBmYWxzZSxcclxuLy8gXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbi8vIFx0XHRlbnVtZXJhYmxlOiB0cnVlXHJcbi8vIFx0fSk7XHJcbi8vXHJcbi8vIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuZW52Lk51bWJlci5wcm90b3R5cGUsIFt0aGlzLmxpYk5hbWVdLCB7XHJcbi8vIFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG4vLyBcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuLy8gXHRcdGdldDogZnVuY3Rpb24oKSB7XHJcbi8vIFx0XHRcdHJldHVybiBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCkpID09PSBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCkpID8gJ051bWJlcicgOiB0aGlzLnRvU3RyaW5nKCk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0fSk7XHJcbi8vXHJcbi8vIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuZW52LlN0cmluZy5wcm90b3R5cGUsIFt0aGlzLmxpYk5hbWVdLCB7XHJcbi8vIFx0XHR2YWx1ZTogJ1N0cmluZycsXHJcbi8vIFx0XHR3cml0YWJsZTogZmFsc2UsXHJcbi8vIFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG4vLyBcdFx0ZW51bWVyYWJsZTogdHJ1ZVxyXG4vLyBcdH0pO1xyXG4vL1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVudi5PYmplY3QucHJvdG90eXBlLCBbdGhpcy5saWJOYW1lXSwge1xyXG4vLyBcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuLy8gXHRcdGVudW1lcmFibGU6IHRydWUsXHJcbi8vIFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG4vLyBcdFx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4vLyBcdFx0fVxyXG4vLyBcdH0pO1xyXG4vLyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9tb2R1bGVzL3R5cGUtY2F0Y2hlci5qcyIsImltcG9ydCB7IFR5cGVzIH0gZnJvbSAnLi4vZW51bXMnXHJcblxyXG4vKipcclxuICogdHlwZU1hcGVyIGdldCBkYXRhIHR5cGUgaWQgYW5kIHJldHVybiBiYWNrIHN0cmluZyBuYW1lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn1cdHR5cGVJZCAtIHRoaXMgaXMgdGhlIHBhcmFtZXRlciB0eXBlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFttYXBlZCBzdHJpbmcgYnkgaWQga2V5XS5cclxuICovXHJcbmNvbnN0IHR5cGVNYXBlciA9IGZ1bmN0aW9uKHR5cGVJZCkge1xyXG4gIC8vIG1hcGVyIGlzIGEgcmV0dXJuIGh1bWFuIHJlYWRhYmxlIHRleHQgdHlwZVxyXG4gIHJldHVybiBUeXBlc1t0eXBlSWRdO1xyXG59XHJcblxyXG5leHBvcnQgeyB0eXBlTWFwZXIgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvbW9kdWxlcy90eXBlLW1hcGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJuYW1lXCI6XCIganMtdHlwZS1oZWxwZXJcIixcInZlcnNpb25cIjpcIjAuMC4xXCIsXCJkZXNjcmlwdGlvblwiOlwiZGVzY3JpcHRpb24gaGVyZVwiLFwibWFpblwiOlwiLi9pbmRleC5qc1wiLFwibW9kdWxlXCI6XCIuL3NyYy9pbmRleC5qc1wiLFwic2NyaXB0c1wiOntcImJ1aWxkXCI6XCJjZCAuL2NvbmZpZ3MgJiYgd2VicGFja1wiLFwic3RhcnRcIjpcImNkIC4vY29uZmlncyAmJiB3ZWJwYWNrIC0td2F0Y2hcIixcInRlc3RcIjpcImNkIC4vY29uZmlncyAmJiBqZXN0IC0tY29uZmlnIGplc3QuY29uZmlnLmpzb25cIixcImNvdmVyYWdlXCI6XCJjZCAuL2NvbmZpZ3MgJiYgamVzdCAtLWNvdmVyYWdlICYmIGNhdCAuLi9jb3ZlcmFnZS9sY292LmluZm8gfCBjb3ZlcmFsbHNcIixcImRvY3NcIjpcImVzZG9jIC1jIC5lc2RvYy5qc29uXCJ9LFwicmVwb3NpdG9yeVwiOntcInR5cGVcIjpcImdpdFwiLFwidXJsXCI6XCJnaXQraHR0cHM6Ly9naXRodWIuY29tL0hhbWlrMjUvVHlwZUpTLmdpdFwifSxcImtleXdvcmRzXCI6W10sXCJhdXRob3JcIjpcIkhhbWlrIEhhbWJhcmR6dW15YW5cIixcImxpY2Vuc2VcIjpcIklTQ1wiLFwiYnVnc1wiOntcInVybFwiOlwiaHR0cHM6Ly9naXRodWIuY29tL0hhbWlrMjUvVHlwZUpTL2lzc3Vlc1wifSxcImhvbWVwYWdlXCI6XCJodHRwczovL2dpdGh1Yi5jb20vSGFtaWsyNS9UeXBlSlMjcmVhZG1lXCIsXCJkZXZEZXBlbmRlbmNpZXNcIjp7XCJiYWJlbC1jb3JlXCI6XCJeNi4yNi4wXCIsXCJiYWJlbC1sb2FkZXJcIjpcIl43LjEuMlwiLFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOlwiXjYuMjQuMVwiLFwiYmFiZWwtcHJlc2V0LXN0YWdlLTJcIjpcIl42LjI0LjFcIixcImNvdmVyYWxsc1wiOlwiXjMuMC4wXCIsXCJlc2RvY1wiOlwiXjEuMC40XCIsXCJlc2RvYy1zdGFuZGFyZC1wbHVnaW5cIjpcIl4xLjAuMFwiLFwiamVzdFwiOlwiXjIyLjEuNFwifX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9wYWNrYWdlLmpzb25cbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==