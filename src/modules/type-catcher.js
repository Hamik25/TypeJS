import { MatchObjectModel } from './match-object-model';

/**
 * typeChecker is a execute logic for catching inputed variable
 * data type by using RegEx matching and JS object hierarchy.
 *
 * @param {any}	variable - this is the parameter variable.
 *
 * @return {number} [id of data type for geting type name by typeMaper].
 */
const typeCatcher = function(variable) {

  let catchedTypeId = '';
  let tmpMatchObject = {};

  switch (variable) {

    case (tmpMatchObject = matchString(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchArray(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchFunction(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchUndefined(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchDate(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

    // TODO
    case (tmpMatchObject = matchBoolean(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

    // TODO
    case (tmpMatchObject = matchNumber(variable)) && tmpMatchObject.value:
      catchedTypeId = tmpMatchObject.type;
      break;

  }

  return catchedTypeId;
}

const matchString = variable => {
  let matchObjectModel = new MatchObjectModel(variable, typeof variable);
  return (matchObjectModel.type === 'string') ? matchObjectModel : false;
}

const matchArray = variable => {
  let typeId = variable && variable.constructor.name === 'Array' && 'array';
  let matchObjectModel = new MatchObjectModel(variable, typeId);
  return (matchObjectModel.type === 'array') ? matchObjectModel : false;
}

const matchFunction = variable => {
  let typeId = variable && variable.constructor.name === 'Function' && 'function';
  let matchObjectModel = new MatchObjectModel(variable, typeId);
  return (matchObjectModel.type === 'function') ? matchObjectModel : false;
}

const matchUndefined = variable => {
  let matchObjectModel = new MatchObjectModel(variable, typeof variable);
  return (matchObjectModel.type === 'undefined') ? matchObjectModel : false;
}

const matchDate = variable => {
  let typeId = variable && variable.constructor.name === 'Date' && 'date';
  let matchObjectModel = new MatchObjectModel(variable, typeId);
  return (matchObjectModel.type === 'date') ? matchObjectModel : false;
}

// TODO implement corect logic for support false.
const matchBoolean = variable => {
  let matchObjectModel = new MatchObjectModel(variable, typeof variable);
  return (matchObjectModel.type === 'boolean') ? matchObjectModel : false;
}

// TODO implement corect logic for support NaN.
const matchNumber = variable => {
  let typeId = parseInt(variable.toString()) === parseInt(variable.toString()) ? 'number' : variable.toString();
  if (typeId === 'number') {
    typeId = variable % 1 === 0 ? 'int' : 'float';
  }
  let matchObjectModel = new MatchObjectModel(variable, typeId);
  return matchObjectModel;
}

export { typeCatcher }

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
