/*
*	Here will be writen LICENCE.
*/

// Imports
import _TypeJS from './Type';

;(function() {
	var ENVIRONMENT;
	var LIB_NAME = '_TypeJS';

	/*-----------------------
	*	Detect environment.	*
	*-----------------------*/
	var isBrowser = new Function("try {return this === window;} catch(e) { return false; }");
	var isNodeJS  = new Function("try {return this === global;} catch(e) { return false; }");

	if (isBrowser()) {
		ENVIRONMENT = window;
	} else if (isNodeJS()) {
		ENVIRONMENT = global;
	}	

	(function(env) {

		const typeJS = new _TypeJS(env, LIB_NAME);
		typeJS.init();

	})(ENVIRONMENT);
}());
