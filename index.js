/*
*	Here will be writen LICENCE.
*/
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
		
		Object.defineProperty(ENVIRONMENT.Array.prototype, [LIB_NAME], {
			value: 'Array',
			writable: false,
			configurable: false,
			enumerable: true
		});

		Object.defineProperty(ENVIRONMENT.Number.prototype, [LIB_NAME], {
			configurable: false,
			enumerable: true,
			get: function() {
				return this.toString();
			}
		});

		Object.defineProperty(ENVIRONMENT.String.prototype, [LIB_NAME], {
			value: 'String',
			writable: false,
			configurable: false,
			enumerable: true
		});

	})(ENVIRONMENT);
}());