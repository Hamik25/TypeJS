/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _Type = __webpack_require__(2);

var _Type2 = _interopRequireDefault(_Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /*
                                                                                                                                                                                                                  *	Here will be writen LICENCE.
                                                                                                                                                                                                                  */

// Imports


;(function () {
	var ENVIRONMENT;
	var LIB_NAME = '_TypeJS';

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
	var typeJS = new _Type2.default(ENVIRONMENT, LIB_NAME);

	/*-----------------------------
 *	Export for a AMD, CommonJS.	*
 *-----------------------------*/
	if (typeof ENVIRONMENT.module !== 'undefined' && typeof ENVIRONMENT.module.exports !== 'undefined') {
		// CommonJS
		ENVIRONMENT.module.exports = typeJS;
	} else {
		if (typeof ENVIRONMENT.define === 'function' && ENVIRONMENT.define.amd) {
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
				return _defineProperty({}, LIB_NAME, typeJS);
			}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser
			ENVIRONMENT[LIB_NAME] = typeJS;
		}
	}
})();

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _enums = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TypeJS = function () {
  function TypeJS(environment, libName) {
    _classCallCheck(this, TypeJS);

    this.env = environment;
    this.libName = libName;
    this.version = '';
  }

  _createClass(TypeJS, [{
    key: 'getType',
    value: function getType(variable) {
      // here need execute logic for geting correct type
      return variable;
    }
  }, {
    key: 'typeChecker',
    value: function typeChecker(variable) {}
  }, {
    key: 'typeMaper',
    value: function typeMaper(type) {
      // maper is a return human readable text type
      return _enums.Types[type];
    }
  }]);

  return TypeJS;
}();

exports.default = TypeJS;

/***/ }),
/* 3 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWFmMDI3NzZiNDA2OWM4ODZmZjkiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL0luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL2VudW1zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkVOVklST05NRU5UIiwiTElCX05BTUUiLCJpc0Jyb3dzZXIiLCJGdW5jdGlvbiIsImlzTm9kZUpTIiwid2luZG93IiwiZ2xvYmFsIiwidHlwZUpTIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmluZSIsImFtZCIsIlR5cGVKUyIsImVudmlyb25tZW50IiwibGliTmFtZSIsImVudiIsInZlcnNpb24iLCJ2YXJpYWJsZSIsInR5cGUiLCJUeXBlcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDeERBOzs7Ozs7a05BTEE7Ozs7QUFJQTs7O0FBR0EsQ0FBRSxhQUFXO0FBQ1osS0FBSUEsV0FBSjtBQUNBLEtBQUlDLFdBQVcsU0FBZjs7QUFFQTs7O0FBR0EsS0FBSUMsWUFBWSxJQUFJQyxRQUFKLENBQWEsMERBQWIsQ0FBaEI7QUFDQSxLQUFJQyxXQUFZLElBQUlELFFBQUosQ0FBYSwwREFBYixDQUFoQjs7QUFFQSxLQUFJRCxXQUFKLEVBQWlCO0FBQ2hCRixnQkFBY0ssTUFBZDtBQUNBLEVBRkQsTUFFTyxJQUFJRCxVQUFKLEVBQWdCO0FBQ3RCSixnQkFBY00sTUFBZDtBQUNBOztBQUVEOzs7QUFHQSxLQUFNQyxTQUFTLG1CQUFXUCxXQUFYLEVBQXdCQyxRQUF4QixDQUFmOztBQUVBOzs7QUFHQSxLQUFJLE9BQU9ELFlBQVlRLE1BQW5CLEtBQThCLFdBQTlCLElBQTZDLE9BQU9SLFlBQVlRLE1BQVosQ0FBbUJDLE9BQTFCLEtBQXNDLFdBQXZGLEVBQW9HO0FBQ25HO0FBQ0FULGNBQVlRLE1BQVosQ0FBbUJDLE9BQW5CLEdBQTZCRixNQUE3QjtBQUNBLEVBSEQsTUFHTztBQUNOLE1BQUksT0FBT1AsWUFBWVUsTUFBbkIsS0FBOEIsVUFBOUIsSUFBNENWLFlBQVlVLE1BQVosQ0FBbUJDLEdBQW5FLEVBQXdFO0FBQ3ZFO0FBQ0FELEdBQUEsaUNBQU8sRUFBUCxtQ0FBVyxZQUFXO0FBQ3JCLCtCQUFVVCxRQUFWLEVBQXFCTSxNQUFyQjtBQUNBLElBRkQ7QUFBQTtBQUlBLEdBTkQsTUFNTztBQUNOO0FBQ0FQLGVBQVlDLFFBQVosSUFBd0JNLE1BQXhCO0FBQ0E7QUFDRDtBQUVELENBeENDLEdBQUQ7O0FBNENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7QUNqRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7Ozs7SUFFTUssTTtBQUVKLGtCQUFZQyxXQUFaLEVBQXlCQyxPQUF6QixFQUFrQztBQUFBOztBQUNoQyxTQUFLQyxHQUFMLEdBQVdGLFdBQVg7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLRSxPQUFMLEdBQWUsRUFBZjtBQUNEOzs7OzRCQUVPQyxRLEVBQVU7QUFDaEI7QUFDQSxhQUFPQSxRQUFQO0FBQ0Q7OztnQ0FFV0EsUSxFQUFVLENBRXJCOzs7OEJBRVNDLEksRUFBTTtBQUNkO0FBQ0EsYUFBTyxhQUFNQSxJQUFOLENBQVA7QUFDRDs7Ozs7O2tCQUdZTixNOzs7Ozs7Ozs7Ozs7QUN6QmYsSUFBTU8sUUFBUTtBQUNaLFlBQVUsUUFERTtBQUVaLFlBQVUsUUFGRTtBQUdaLFNBQU8sS0FISztBQUlaLGNBQVksVUFKQTtBQUtaLGVBQWEsV0FMRDtBQU1aLFlBQVUsUUFORTtBQU9aLFVBQVEsTUFQSTtBQVFaLGVBQWEsV0FSRDtBQVNaLGFBQVcsU0FUQztBQVVaLFdBQVMsT0FWRztBQVdaLGNBQVksVUFYQTtBQVlaLFNBQU8sS0FaSztBQWFaLFdBQVMsT0FiRztBQWNaLFVBQVE7QUFkSSxDQUFkOztRQWlCU0EsSyxHQUFBQSxLIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDlhZjAyNzc2YjQwNjljODg2ZmY5IiwiLypcclxuKlx0SGVyZSB3aWxsIGJlIHdyaXRlbiBMSUNFTkNFLlxyXG4qL1xyXG5cclxuLy8gSW1wb3J0c1xyXG5pbXBvcnQgVHlwZUpTIGZyb20gJy4vVHlwZSc7XHJcblxyXG47KGZ1bmN0aW9uKCkge1xyXG5cdHZhciBFTlZJUk9OTUVOVDtcclxuXHR2YXIgTElCX05BTUUgPSAnX1R5cGVKUyc7XHJcblxyXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Klx0RGV0ZWN0IGVudmlyb25tZW50Llx0KlxyXG5cdCotLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cdHZhciBpc0Jyb3dzZXIgPSBuZXcgRnVuY3Rpb24oXCJ0cnkge3JldHVybiB0aGlzID09PSB3aW5kb3c7fSBjYXRjaChlKSB7IHJldHVybiBmYWxzZTsgfVwiKTtcclxuXHR2YXIgaXNOb2RlSlMgID0gbmV3IEZ1bmN0aW9uKFwidHJ5IHtyZXR1cm4gdGhpcyA9PT0gZ2xvYmFsO30gY2F0Y2goZSkgeyByZXR1cm4gZmFsc2U7IH1cIik7XHJcblxyXG5cdGlmIChpc0Jyb3dzZXIoKSkge1xyXG5cdFx0RU5WSVJPTk1FTlQgPSB3aW5kb3c7XHJcblx0fSBlbHNlIGlmIChpc05vZGVKUygpKSB7XHJcblx0XHRFTlZJUk9OTUVOVCA9IGdsb2JhbDtcclxuXHR9XHJcblxyXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCpcdE5ldyBpbnN0YW5jZSBvZiBsaWJyYXJ5XHQqXHJcblx0Ki0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cdGNvbnN0IHR5cGVKUyA9IG5ldyBUeXBlSlMoRU5WSVJPTk1FTlQsIExJQl9OQU1FKTtcclxuXHJcblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCpcdEV4cG9ydCBmb3IgYSBBTUQsIENvbW1vbkpTLlx0KlxyXG5cdCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblx0aWYgKHR5cGVvZiBFTlZJUk9OTUVOVC5tb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBFTlZJUk9OTUVOVC5tb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHRFTlZJUk9OTUVOVC5tb2R1bGUuZXhwb3J0cyA9IHR5cGVKUztcclxuXHR9IGVsc2Uge1xyXG5cdFx0aWYgKHR5cGVvZiBFTlZJUk9OTUVOVC5kZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgRU5WSVJPTk1FTlQuZGVmaW5lLmFtZCkge1xyXG5cdFx0XHQvLyBBTURcclxuXHRcdFx0ZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4geyBbTElCX05BTUVdOiB0eXBlSlMgfTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gQnJvd3NlclxyXG5cdFx0XHRFTlZJUk9OTUVOVFtMSUJfTkFNRV0gPSB0eXBlSlM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufSgpKTtcclxuXHJcblxyXG5cclxuLy8gaW5pdCgpIHtcclxuLy8gXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5lbnYuQXJyYXkucHJvdG90eXBlLCBbdGhpcy5saWJOYW1lXSwge1xyXG4vLyBcdFx0dmFsdWU6ICdBcnJheScsXHJcbi8vIFx0XHR3cml0YWJsZTogZmFsc2UsXHJcbi8vIFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG4vLyBcdFx0ZW51bWVyYWJsZTogdHJ1ZVxyXG4vLyBcdH0pO1xyXG4vL1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVudi5OdW1iZXIucHJvdG90eXBlLCBbdGhpcy5saWJOYW1lXSwge1xyXG4vLyBcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuLy8gXHRcdGVudW1lcmFibGU6IHRydWUsXHJcbi8vIFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG4vLyBcdFx0XHRyZXR1cm4gcGFyc2VJbnQodGhpcy50b1N0cmluZygpKSA9PT0gcGFyc2VJbnQodGhpcy50b1N0cmluZygpKSA/ICdOdW1iZXInIDogdGhpcy50b1N0cmluZygpO1xyXG4vLyBcdFx0fVxyXG4vLyBcdH0pO1xyXG4vL1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVudi5TdHJpbmcucHJvdG90eXBlLCBbdGhpcy5saWJOYW1lXSwge1xyXG4vLyBcdFx0dmFsdWU6ICdTdHJpbmcnLFxyXG4vLyBcdFx0d3JpdGFibGU6IGZhbHNlLFxyXG4vLyBcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuLy8gXHRcdGVudW1lcmFibGU6IHRydWVcclxuLy8gXHR9KTtcclxuLy9cclxuLy8gXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5lbnYuT2JqZWN0LnByb3RvdHlwZSwgW3RoaXMubGliTmFtZV0sIHtcclxuLy8gXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbi8vIFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG4vLyBcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuLy8gXHRcdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcclxuLy8gXHRcdH1cclxuLy8gXHR9KTtcclxuLy8gfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvSW5kZXguanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVHlwZXMgfSBmcm9tICcuL2VudW1zJ1xyXG5cclxuY2xhc3MgVHlwZUpTIHtcclxuXHJcbiAgY29uc3RydWN0b3IoZW52aXJvbm1lbnQsIGxpYk5hbWUpIHtcclxuICAgIHRoaXMuZW52ID0gZW52aXJvbm1lbnQ7XHJcbiAgICB0aGlzLmxpYk5hbWUgPSBsaWJOYW1lO1xyXG4gICAgdGhpcy52ZXJzaW9uID0gJyc7XHJcbiAgfVxyXG5cclxuICBnZXRUeXBlKHZhcmlhYmxlKSB7XHJcbiAgICAvLyBoZXJlIG5lZWQgZXhlY3V0ZSBsb2dpYyBmb3IgZ2V0aW5nIGNvcnJlY3QgdHlwZVxyXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xyXG4gIH1cclxuXHJcbiAgdHlwZUNoZWNrZXIodmFyaWFibGUpIHtcclxuXHJcbiAgfVxyXG5cclxuICB0eXBlTWFwZXIodHlwZSkge1xyXG4gICAgLy8gbWFwZXIgaXMgYSByZXR1cm4gaHVtYW4gcmVhZGFibGUgdGV4dCB0eXBlXHJcbiAgICByZXR1cm4gVHlwZXNbdHlwZV07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBlSlM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9UeXBlLmpzIiwiY29uc3QgVHlwZXMgPSB7XHJcbiAgJ3N0cmluZyc6ICdTdHJpbmcnLFxyXG4gICdudW1iZXInOiAnTnVtYmVyJyxcclxuICAnTmFOJzogJ05hTicsXHJcbiAgJ0luZmluaXR5JzogJ0luZmluaXR5JyxcclxuICAnLUluZmluaXR5JzogJy1JbmZpbml0eScsXHJcbiAgJ29iamVjdCc6ICdPYmplY3QnLFxyXG4gICdudWxsJzogJ051bGwnLFxyXG4gICd1bmRlZmluZWQnOiAndW5kZWZpbmVkJyxcclxuICAnYm9vbGVhbic6ICdCb29sZWFuJyxcclxuICAnYXJyYXknOiAnQXJyYXknLFxyXG4gICdmdW5jdGlvbic6ICdGdW5jdGlvbicsXHJcbiAgJ2ludCc6ICdJbnQnLFxyXG4gICdmbG9hdCc6ICdGbG9hdCcsXHJcbiAgJ2RhdGUnOiAnRGF0ZSdcclxufVxyXG5cclxuZXhwb3J0IHsgVHlwZXMgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvZW51bXMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9