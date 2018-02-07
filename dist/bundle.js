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
/* WEBPACK VAR INJECTION */(function(global) {

var _Type = __webpack_require__(2);

var _Type2 = _interopRequireDefault(_Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

; // MIT LICENCE.


// Imports
(function () {
	var ENVIRONMENT;
	var LIB_NAME = 'TypeJS';

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
	// if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	// 	// CommonJS
	// 	module.exports = typeJS;
	// } else {
	// 	if (typeof define === 'function' && define.amd) {
	// 		// AMD
	// 		define([], function() {
	// 			return typeJS;
	// 		});
	//
	// 	} else {
	// 		// Browser
	// 		ENVIRONMENT[LIB_NAME] = typeJS;
	// 	}
	// }
	ENVIRONMENT[LIB_NAME] = typeJS;
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
      var catchedTypeId = typeCatcher(variable);
      return typeMaper(catchedTypeId);
    }
  }, {
    key: 'typeChecker',
    value: function typeChecker(variable) {
      switch (variable) {
        case expression:

          break;
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDI0NzhmY2ZhNGY2MDAzMWY1OWQiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL0luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vLi4vc3JjL2VudW1zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkVOVklST05NRU5UIiwiTElCX05BTUUiLCJpc0Jyb3dzZXIiLCJGdW5jdGlvbiIsImlzTm9kZUpTIiwid2luZG93IiwiZ2xvYmFsIiwidHlwZUpTIiwiVHlwZUpTIiwiZW52aXJvbm1lbnQiLCJsaWJOYW1lIiwiZW52IiwidmVyc2lvbiIsInZhcmlhYmxlIiwiY2F0Y2hlZFR5cGVJZCIsInR5cGVDYXRjaGVyIiwidHlwZU1hcGVyIiwiZXhwcmVzc2lvbiIsInR5cGUiLCJUeXBlcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDekRBOzs7Ozs7QUFFQSxDLENBTkE7OztBQUdBO0FBR0UsYUFBVztBQUNaLEtBQUlBLFdBQUo7QUFDQSxLQUFJQyxXQUFXLFFBQWY7O0FBRUE7OztBQUdBLEtBQUlDLFlBQVksSUFBSUMsUUFBSixDQUFhLDBEQUFiLENBQWhCO0FBQ0EsS0FBSUMsV0FBWSxJQUFJRCxRQUFKLENBQWEsMERBQWIsQ0FBaEI7O0FBRUEsS0FBSUQsV0FBSixFQUFpQjtBQUNoQkYsZ0JBQWNLLE1BQWQ7QUFDQSxFQUZELE1BRU8sSUFBSUQsVUFBSixFQUFnQjtBQUN0QkosZ0JBQWNNLE1BQWQ7QUFDQTs7QUFFRDs7O0FBR0EsS0FBTUMsU0FBUyxtQkFBV1AsV0FBWCxFQUF3QkMsUUFBeEIsQ0FBZjs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FELGFBQVlDLFFBQVosSUFBd0JNLE1BQXhCO0FBRUEsQ0F6Q0MsR0FBRDs7QUE2Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7OztBQ2pGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTs7OztJQUVNQyxNO0FBRUosa0JBQVlDLFdBQVosRUFBeUJDLE9BQXpCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtDLEdBQUwsR0FBV0YsV0FBWDtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtFLE9BQUwsR0FBZSxFQUFmO0FBQ0Q7Ozs7NEJBRU9DLFEsRUFBVTtBQUNoQjtBQUNBLFVBQUlDLGdCQUFnQkMsWUFBWUYsUUFBWixDQUFwQjtBQUNBLGFBQU9HLFVBQVVGLGFBQVYsQ0FBUDtBQUNEOzs7Z0NBRVdELFEsRUFBVTtBQUNwQixjQUFPQSxRQUFQO0FBQ0UsYUFBS0ksVUFBTDs7QUFFRTtBQUhKO0FBS0Q7Ozs4QkFFU0MsSSxFQUFNO0FBQ2Q7QUFDQSxhQUFPLGFBQU1BLElBQU4sQ0FBUDtBQUNEOzs7Ozs7a0JBR1lWLE07Ozs7Ozs7Ozs7OztBQzlCZixJQUFNVyxRQUFRO0FBQ1osWUFBVSxRQURFO0FBRVosWUFBVSxRQUZFO0FBR1osU0FBTyxLQUhLO0FBSVosY0FBWSxVQUpBO0FBS1osZUFBYSxXQUxEO0FBTVosWUFBVSxRQU5FO0FBT1osVUFBUSxNQVBJO0FBUVosZUFBYSxXQVJEO0FBU1osYUFBVyxTQVRDO0FBVVosV0FBUyxPQVZHO0FBV1osY0FBWSxVQVhBO0FBWVosU0FBTyxLQVpLO0FBYVosV0FBUyxPQWJHO0FBY1osVUFBUTtBQWRJLENBQWQ7O1FBaUJTQSxLLEdBQUFBLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDI0NzhmY2ZhNGY2MDAzMWY1OWQiLCIvLyBNSVQgTElDRU5DRS5cclxuXHJcblxyXG4vLyBJbXBvcnRzXHJcbmltcG9ydCBUeXBlSlMgZnJvbSAnLi9UeXBlJztcclxuXHJcbjsoZnVuY3Rpb24oKSB7XHJcblx0dmFyIEVOVklST05NRU5UO1xyXG5cdHZhciBMSUJfTkFNRSA9ICdUeXBlSlMnO1xyXG5cclxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCpcdERldGVjdCBlbnZpcm9ubWVudC5cdCpcclxuXHQqLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHR2YXIgaXNCcm93c2VyID0gbmV3IEZ1bmN0aW9uKFwidHJ5IHtyZXR1cm4gdGhpcyA9PT0gd2luZG93O30gY2F0Y2goZSkgeyByZXR1cm4gZmFsc2U7IH1cIik7XHJcblx0dmFyIGlzTm9kZUpTICA9IG5ldyBGdW5jdGlvbihcInRyeSB7cmV0dXJuIHRoaXMgPT09IGdsb2JhbDt9IGNhdGNoKGUpIHsgcmV0dXJuIGZhbHNlOyB9XCIpO1xyXG5cclxuXHRpZiAoaXNCcm93c2VyKCkpIHtcclxuXHRcdEVOVklST05NRU5UID0gd2luZG93O1xyXG5cdH0gZWxzZSBpZiAoaXNOb2RlSlMoKSkge1xyXG5cdFx0RU5WSVJPTk1FTlQgPSBnbG9iYWw7XHJcblx0fVxyXG5cclxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQqXHROZXcgaW5zdGFuY2Ugb2YgbGlicmFyeVx0KlxyXG5cdCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHRjb25zdCB0eXBlSlMgPSBuZXcgVHlwZUpTKEVOVklST05NRU5ULCBMSUJfTkFNRSk7XHJcblxyXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQqXHRFeHBvcnQgZm9yIGEgQU1ELCBDb21tb25KUy5cdCpcclxuXHQqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cdC8vIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0Ly8gXHQvLyBDb21tb25KU1xyXG5cdC8vIFx0bW9kdWxlLmV4cG9ydHMgPSB0eXBlSlM7XHJcblx0Ly8gfSBlbHNlIHtcclxuXHQvLyBcdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHQvLyBcdFx0Ly8gQU1EXHJcblx0Ly8gXHRcdGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XHJcblx0Ly8gXHRcdFx0cmV0dXJuIHR5cGVKUztcclxuXHQvLyBcdFx0fSk7XHJcbiAgLy9cclxuXHQvLyBcdH0gZWxzZSB7XHJcblx0Ly8gXHRcdC8vIEJyb3dzZXJcclxuXHQvLyBcdFx0RU5WSVJPTk1FTlRbTElCX05BTUVdID0gdHlwZUpTO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHRFTlZJUk9OTUVOVFtMSUJfTkFNRV0gPSB0eXBlSlM7XHJcblxyXG59KCkpO1xyXG5cclxuXHJcblxyXG4vLyBpbml0KCkge1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVudi5BcnJheS5wcm90b3R5cGUsIFt0aGlzLmxpYk5hbWVdLCB7XHJcbi8vIFx0XHR2YWx1ZTogJ0FycmF5JyxcclxuLy8gXHRcdHdyaXRhYmxlOiBmYWxzZSxcclxuLy8gXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbi8vIFx0XHRlbnVtZXJhYmxlOiB0cnVlXHJcbi8vIFx0fSk7XHJcbi8vXHJcbi8vIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuZW52Lk51bWJlci5wcm90b3R5cGUsIFt0aGlzLmxpYk5hbWVdLCB7XHJcbi8vIFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG4vLyBcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuLy8gXHRcdGdldDogZnVuY3Rpb24oKSB7XHJcbi8vIFx0XHRcdHJldHVybiBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCkpID09PSBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCkpID8gJ051bWJlcicgOiB0aGlzLnRvU3RyaW5nKCk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0fSk7XHJcbi8vXHJcbi8vIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuZW52LlN0cmluZy5wcm90b3R5cGUsIFt0aGlzLmxpYk5hbWVdLCB7XHJcbi8vIFx0XHR2YWx1ZTogJ1N0cmluZycsXHJcbi8vIFx0XHR3cml0YWJsZTogZmFsc2UsXHJcbi8vIFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG4vLyBcdFx0ZW51bWVyYWJsZTogdHJ1ZVxyXG4vLyBcdH0pO1xyXG4vL1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVudi5PYmplY3QucHJvdG90eXBlLCBbdGhpcy5saWJOYW1lXSwge1xyXG4vLyBcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuLy8gXHRcdGVudW1lcmFibGU6IHRydWUsXHJcbi8vIFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG4vLyBcdFx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4vLyBcdFx0fVxyXG4vLyBcdH0pO1xyXG4vLyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9JbmRleC5qcyIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBUeXBlcyB9IGZyb20gJy4vZW51bXMnXHJcblxyXG5jbGFzcyBUeXBlSlMge1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbnZpcm9ubWVudCwgbGliTmFtZSkge1xyXG4gICAgdGhpcy5lbnYgPSBlbnZpcm9ubWVudDtcclxuICAgIHRoaXMubGliTmFtZSA9IGxpYk5hbWU7XHJcbiAgICB0aGlzLnZlcnNpb24gPSAnJztcclxuICB9XHJcblxyXG4gIGdldFR5cGUodmFyaWFibGUpIHtcclxuICAgIC8vIGhlcmUgbmVlZCBleGVjdXRlIGxvZ2ljIGZvciBnZXRpbmcgY29ycmVjdCB0eXBlXHJcbiAgICBsZXQgY2F0Y2hlZFR5cGVJZCA9IHR5cGVDYXRjaGVyKHZhcmlhYmxlKTtcclxuICAgIHJldHVybiB0eXBlTWFwZXIoY2F0Y2hlZFR5cGVJZCk7XHJcbiAgfVxyXG5cclxuICB0eXBlQ2hlY2tlcih2YXJpYWJsZSkge1xyXG4gICAgc3dpdGNoKHZhcmlhYmxlKSB7XHJcbiAgICAgIGNhc2UgZXhwcmVzc2lvbjpcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0eXBlTWFwZXIodHlwZSkge1xyXG4gICAgLy8gbWFwZXIgaXMgYSByZXR1cm4gaHVtYW4gcmVhZGFibGUgdGV4dCB0eXBlXHJcbiAgICByZXR1cm4gVHlwZXNbdHlwZV07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBlSlM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLy4uL3NyYy9UeXBlLmpzIiwiY29uc3QgVHlwZXMgPSB7XHJcbiAgJ3N0cmluZyc6ICdTdHJpbmcnLFxyXG4gICdudW1iZXInOiAnTnVtYmVyJyxcclxuICAnTmFOJzogJ05hTicsXHJcbiAgJ0luZmluaXR5JzogJ0luZmluaXR5JyxcclxuICAnLUluZmluaXR5JzogJy1JbmZpbml0eScsXHJcbiAgJ29iamVjdCc6ICdPYmplY3QnLFxyXG4gICdudWxsJzogJ051bGwnLFxyXG4gICd1bmRlZmluZWQnOiAndW5kZWZpbmVkJyxcclxuICAnYm9vbGVhbic6ICdCb29sZWFuJyxcclxuICAnYXJyYXknOiAnQXJyYXknLFxyXG4gICdmdW5jdGlvbic6ICdGdW5jdGlvbicsXHJcbiAgJ2ludCc6ICdJbnQnLFxyXG4gICdmbG9hdCc6ICdGbG9hdCcsXHJcbiAgJ2RhdGUnOiAnRGF0ZSdcclxufVxyXG5cclxuZXhwb3J0IHsgVHlwZXMgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi8uLi9zcmMvZW51bXMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9