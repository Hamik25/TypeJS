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

; /*
  *	Here will be writen LICENCE.
  */

// Imports
(function () {
	var ENVIRONMENT;
	var LIB_NAME = '_TypeJS';

	/*-----------------------
 *	Detect environment.	*
 *-----------------------*/
	var isBrowser = new Function("try {return this === window;} catch(e) { return false; }");
	var isNodeJS = new Function("try {return this === global;} catch(e) { return false; }");

	if (isBrowser()) {
		ENVIRONMENT = window;
	} else if (isNodeJS()) {
		ENVIRONMENT = global;
	}

	(function (env) {

		var typeJS = new _Type2.default(env, LIB_NAME);
		typeJS.init();
	})(ENVIRONMENT);
})();
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _TypeJS = function () {
		function _TypeJS(environment, libName) {
				_classCallCheck(this, _TypeJS);

				this.env = environment;
				this.libName = libName;
		}

		_createClass(_TypeJS, [{
				key: 'init',
				value: function init() {

						Object.defineProperty(this.env.Array.prototype, [this.libName], {
								value: 'Array',
								writable: false,
								configurable: false,
								enumerable: true
						});

						Object.defineProperty(this.env.Number.prototype, [this.libName], {
								configurable: false,
								enumerable: true,
								get: function get() {
										return parseInt(this.toString()) === parseInt(this.toString()) ? 'Number' : this.toString();
								}
						});

						Object.defineProperty(this.env.String.prototype, [this.libName], {
								value: 'String',
								writable: false,
								configurable: false,
								enumerable: true
						});

						Object.defineProperty(this.env.Object.prototype, [this.libName], {
								configurable: false,
								enumerable: true,
								get: function get() {
										return this.constructor.name;
								}
						});
				}
		}]);

		return _TypeJS;
}();

exports.default = _TypeJS;

/***/ })
/******/ ]);