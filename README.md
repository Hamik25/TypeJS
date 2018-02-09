[![Build Status](https://travis-ci.org/Hamik25/TypeJS.svg?branch=master)](https://travis-ci.org/Hamik25/TypeJS)
[![Coverage Status](https://coveralls.io/repos/github/Hamik25/TypeJS/badge.svg)](https://coveralls.io/github/Hamik25/TypeJS)

# TypeJS

TypeJS is lightweight library its give to developer additional functionality for a manipulation (check, validate and using)        JavaScript data types. 
Library support both (AMD, CommonJS)

## Docs

## Version
[![npm version](https://badge.fury.io/js/js-type-helper.svg)](https://badge.fury.io/js/js-type-helper)
[![GitHub version](https://badge.fury.io/gh/Hamik25%2FTypeJS.svg)](https://badge.fury.io/gh/Hamik25%2FTypeJS)

#### CDN
```html
<script type="text/javascript" src="https://cdn.rawgit.com/Hamik25/TypeJS/master/dist/bundle.js"></script>
```

#### NPM
```js
$ npm install js-type-helper
```

#### Yarn
```js
$ yarn add js-type-helper
```

## Code Examples
```js
const str = 'some text';
TypeJS.getType(str) // String

const intNum = 5;
TypeJS.getType(intNum) // Int

const floatNum = 8.469;
TypeJS.getType(floatNum) // Float

const infNum = 8 / 0;
TypeJS.getType(infNum) // Infinity

const negInfNum = -2 / 0;
TypeJS.getType(negInfNum) // -Infinity

const nanNum = 80 / 'some text';
TypeJS.getType(nanNum) // NaN

const obj = {};
TypeJS.getType(obj) // Object

const nul = null;
TypeJS.getType(nul) // Null

const unDef;
TypeJS.getType(unDef) // Undefined

const bool = true;
TypeJS.getType(bool) // Boolean

const arr = [0, 1, 2];
TypeJS.getType(str) // Array

const foo = function() {};
TypeJS.getType(str) // Function

const date = new Date();
TypeJS.getType(str) // Date
```

## License

[MIT](https://github.com/Hamik25/TypeJS/blob/dev/LICENSE)
