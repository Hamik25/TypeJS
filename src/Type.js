import { Types } from './enums'

class TypeJS {

  constructor(environment, libName) {
    this.env = environment;
    this.libName = libName;
    this.version = '';
  }

  getType(variable) {
    // here need execute logic for geting correct type
    let catchedTypeId = typeCatcher(variable);
    return typeMaper(catchedTypeId);
  }

  typeChecker(variable) {
    switch(variable) {
      case expression:

        break;
    }
  }

  typeMaper(type) {
    // maper is a return human readable text type
    return Types[type];
  }
}

export default TypeJS;
