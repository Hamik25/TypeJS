// MIT LICENCE.


// Imports
import TypeJS from './Type';

;(function() {
	var ENVIRONMENT;
	var LIB_NAME = 'TypeJS';

	/*---------------------
	*	Detect environment.	*
	*---------------------*/
	var isBrowser = new Function("try {return this === window;} catch(e) { return false; }");
	var isNodeJS  = new Function("try {return this === global;} catch(e) { return false; }");

	if (isBrowser()) {
		ENVIRONMENT = window;
	} else if (isNodeJS()) {
		ENVIRONMENT = global;
	}

	/*-------------------------
	*	New instance of library	*
	*-------------------------*/
	const typeJS = new TypeJS(ENVIRONMENT, LIB_NAME);

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

}());



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
