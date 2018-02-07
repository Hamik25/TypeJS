// MIT LICENCE.

// Imports
import TypeJS from './Type';

let pjson = require('../package.json');

let ENVIRONMENT;
let LIB_NAME = 'TypeJS';
let VERSION = pjson.version;

/*---------------------
*	Detect environment.	*
*---------------------*/
let isBrowser = new Function("try {return this === window;} catch(e) { return false; }");
let isNodeJS  = new Function("try {return this === global;} catch(e) { return false; }");

if (isBrowser()) {
	ENVIRONMENT = window;
} else if (isNodeJS()) {
	ENVIRONMENT = global;
}

/*-------------------------
*	New instance of library	*
*-------------------------*/
const typeJS = new TypeJS(ENVIRONMENT, LIB_NAME, VERSION);

module.exports = typeJS;
