import { Types } from '../enums'

/**
 * typeMaper get data type id and return back string name.
 *
 * @param {number}	typeId - this is the parameter type.
 *
 * @return {string} [maped string by id key].
 */
const typeMaper = function(typeId) {
  // maper is a return human readable text type
  return Types[typeId];
}

export { typeMaper }
