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

  let caseKey = caseKeyGenerator();

  switch(caseKey) {

    case (tmpMatchObject = matchNumber(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchString(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchArray(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchFunction(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchDate(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchBoolean(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    case (tmpMatchObject = matchObject(variable, caseKey)) && tmpMatchObject.caseKey:
      catchedTypeId = tmpMatchObject.type;
      break;

    // Handle static values case.
    case (variable += '') && ('NaN' || 'Infinity' || '-Infinity' || 'null' || 'undefined') && (caseKey):
      catchedTypeId = variable;
      break;

    default:
      catchedTypeId = 'notCatchatedType';
      break;
  }

  return catchedTypeId;
}

/**
 * caseKeyGenerator is a generate unic key for each call.
 *
 * @return {string} text generated unic key.
 */
const caseKeyGenerator = () => {
  let text = '';
  let possibleSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 5; i++) {
    text += possibleSymbols.charAt(Math.floor(Math.random() * possibleSymbols.length));
  }

  return text;
}

/**
* Matchers logic part.
*/

const matchString = (variable, caseKey) => {
  let matchObjectModel = new MatchObjectModel(variable, typeof variable);

  if (matchObjectModel.type === 'string') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
}

const matchArray = (variable, caseKey) => {
  let typeId = variable && variable.constructor.name === 'Array' && 'array';
  let matchObjectModel = new MatchObjectModel(variable, typeId);

  if (matchObjectModel.type === 'array') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
}

const matchFunction = (variable, caseKey) => {
  let typeId = variable && variable.constructor.name === 'Function' && 'function';
  let matchObjectModel = new MatchObjectModel(variable, typeId);

  if (matchObjectModel.type === 'function') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
}

const matchDate = (variable, caseKey) => {
  let typeId = variable && variable.constructor.name === 'Date' && 'date';
  let matchObjectModel = new MatchObjectModel(variable, typeId);

  if (matchObjectModel.type === 'date') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
}

const matchBoolean = (variable, caseKey) => {
  let matchObjectModel = new MatchObjectModel(variable, typeof variable);

  if (matchObjectModel.type === 'boolean') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
}

const matchNumber = (variable, caseKey) => {
  let typeId = typeof variable === 'number' && parseInt(variable.toString()) === parseInt(variable.toString()) && 'number';

  if (typeId === 'number') {
    typeId = variable % 1 === 0 ? 'int' : 'float';
  }

  let matchObjectModel = new MatchObjectModel(variable, typeId);

  if (matchObjectModel.type === 'int' || matchObjectModel.type === 'float') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
}

const matchObject = (variable, caseKey) => {
  let typeId = typeof variable === 'object' && variable !== null && 'object';
  let matchObjectModel = new MatchObjectModel(variable, typeId);

  if (matchObjectModel.type === 'object') {
    matchObjectModel.caseKey = caseKey;
  }

  return matchObjectModel;
}

export { typeCatcher }
