import { Types } from './enums'

class TypeJS {

  constructor(environment, libName) {
    this.env = environment;
    this.libName = libName;
    this.version = '';
  }

  getType(variable) {
    // here need execute logic for geting correct type
    return variable;
  }

  typeChecker(variable) {

  }

  typeMaper(type) {
    // maper is a return human readable text type
    return Types[type];
  }
}

export default TypeJS;
