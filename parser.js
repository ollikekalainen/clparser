/*
-----------------------------------------------------------------------------------------
 parser.js
-----------------------------------------------------------------------------------------
 (c) Olli Kekäläinen


	Initialization

		const parser = new ClParser({
			offset: number,         // default: 2
			optionPrefix: string,   // "/", "-", or "--"", default: "/"
			caseSensitive: boolean  // default: false
		});

	Properties:
		offset              number
		optionPrefix        string
		parameterCount      number
		parameters          array

	Methods:
		option(optionname)  string
		parameter(index)    string
		switch(switchname)  boolean

 


 20190301
-----------------------------------------------------------------------------------------
*/
(() => {

	class ClParser {
		constructor( params = {}) {
			this.offset = typeof params.offset == "number" ? params.offset : 2;
			this.optionPrefix = params.optionPrefix||"/";
			this.caseSensitive = !!params.caseSensitive;
		}

		get offset() {
			return this._offset;
		}

		set offset(offset) {
			if (this._offset !== offset) {
				this._parameters = undefined;
			}
			this._offset = offset;
			return this._offset;
		}

		get optionPrefix() {
			return this._optionPrefix;
		}

		set optionPrefix(prefix) {
			if (prefix=="/"||prefix=="-"||prefix=="--") {
				this._parameters = undefined;
				this._optionPrefix = prefix;
				this._optionPrefixLength = prefix.length;
			}
		}

		switch(name) {
			let i = this.offset;
			name = this._optionPrefix + this._convertCase(name);
			while (i < process.argv.length) {
				if (this._convertCase(process.argv[i++]) == name) {
					return true;
				}
			}
			return false;
		}

		option(name) {
			name = this._optionPrefix + this._convertCase(name) + ":";
			const length = name.length;
			let i = this.offset;
			while (i < process.argv.length) {
				if (this._convertCase(process.argv[i]).substr( 0, length ) == name) {
					return process.argv[i].substr(length);
				}
				i++;
			}
			return undefined;
		}

		parameter(index) {
			return this.parameters[index];
		}

		get parameterCount() {
			return this.parameters.length;
		}

		get parameters() {
			let i = this.offset;
			if (!this._parameters) {
				this._parameters = [];
				while (i < process.argv.length) {
					if (process.argv[i].substr(0,this._optionPrefixLength) !== this._optionPrefix) {
						this._parameters.push(process.argv[i]);
					}
					i++;
				}
			}
			return this._parameters;
		}

		_convertCase(name) {
			return this.caseSensitive ? name : name.toLowerCase();
		}
	}

	module.exports = ClParser;

})();