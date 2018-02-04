class _TypeJS {

  constructor(environment, libName) {
    this.env = environment;
    this.libName = libName;
  }

  init() {

    Object.defineProperty(this.env.Array.prototype, [this.libName], {
			value: 'Array',
			writable: false,
			configurable: false,
			enumerable: true
		});

		Object.defineProperty(this.env.Number.prototype, [this.libName], {
			configurable: false,
			enumerable: true,
			get: function() {
				return parseInt(this.toString()) === parseInt(this.toString()) ? 'Number' : this.toString();
			}
		});

		Object.defineProperty(this.env.String.prototype, [this.libName], {
			value: 'String',
			writable: false,
			configurable: false,
			enumerable: true
		});

		Object.defineProperty(this.env.Object.prototype, [this.libName], {
			configurable: false,
			enumerable: true,
			get: function() {
				return this.constructor.name;
			}
		});
  }
}

export default _TypeJS;
