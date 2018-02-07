import { Types } from './enums'

import { typeCatcher, typeMaper } from './modules'

/**
 * TypeJS
 */
class TypeJS {

  /**
   * @param {object}	environment - this is the parameter environment.
   * @param {string}	libName - this is the parameter libName.
   */
  constructor(environment, libName, version) {
    this.env = environment;
    this.libName = libName;
    this.version = version;
  }

  /**
   * getType method is a entry point for getting data type.
   *
   * @param {any}	variable - this is the parameter variable.
   *
   * @return {string} [variable data type.]
   */
  getType(variable) {
    // here need execute logic for geting correct type
    let catchedTypeId = typeCatcher(variable);
    return typeMaper(catchedTypeId);
  }

}


export default TypeJS;
