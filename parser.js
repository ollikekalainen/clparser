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
		options             array
		parameterCount      number
		parameters          array
		switches            array

	Methods:
		option(optionname)  string
		parameter(index)    string
		switch(switchname)  boolean

 


 20240327
-----------------------------------------------------------------------------------------
*/

const DEFAULT_OFFSET = 2;
const DEFAULT_PREFIX = "/";
const DEFAULT_CASESENSITIVE = false;

class ClParser {
	#params = {};
	#parameters = [];
	constructor( params = {}) {
		typeof params.offset == "number"
			|| (params.offset = DEFAULT_OFFSET);
		typeof params.optionPrefix == "string"
			|| (params.optionPrefix = DEFAULT_PREFIX);
		typeof params.caseSensitive == "booleanr"
			|| (params.caseSensitive = DEFAULT_CASESENSITIVE);
		this.#params = params;
		this.#parseParameters();
	}

	get offset() {
		return this.#params.offset;
	}

	set offset(offset) {
		if (this.#params.offset !== offset) {
			this.#params.offset = offset;
			this.#parseParameters();
		}
		return this.#params.offset;
	}

	get optionPrefix() {
		return this.#params.optionPrefix;
	}

	set optionPrefix(prefix) {
		if (prefix!==this.#params.optionPrefix && (prefix=="/"||prefix=="-"||prefix=="--")) {
			this.#params.optionPrefix = prefix;
			this.#parseParameters();
		}
		return this.#params.optionPrefix;
	}

	get options() {
		const prefixLength = this.optionPrefix.length;
		const result = [];
		const asObject = (s) => {
			const pos = s.indexOf(":");
			return Object.fromEntries([[ s.substr( 0, pos ), s.substr( pos + 1 )]]);
		};
		let i = this.offset;
		while (i < process.argv.length) {
			let p = process.argv[i++];
			if (p.includes(":") && p.substr( 0, prefixLength ) == this.optionPrefix) {
				result.push( asObject( p.substr( prefixLength )));
			}
		}
		return result;
	}

	get parameterCount() {
		return this.#parameters.length;
	}

	get parameters() {
		return this.#parameters;
	}

	get switches() {
		const prefixLength = this.optionPrefix.length;
		const result = [];
		let i = this.offset;
		while (i < process.argv.length) {
			let name = process.argv[i++];
			if (!name.includes(":") && name.substr( 0, prefixLength ) == this.optionPrefix) {
				result.push(name.substr(prefixLength));
			}
		}
		return result;
	}

	option(name) {
		name = this.optionPrefix + this.#solveCase(name) + ":";
		const length = name.length;
		let i = this.offset;
		while (i < process.argv.length) {
			if (this.#solveCase(process.argv[i]).substr( 0, length ) == name) {
				return process.argv[i].substr(length);
			}
			i++;
		}
		return undefined;
	}

	parameter(index) {
		return this.#parameters[index];
	}


	switch(name) {
		let i = this.offset;
		name = this.optionPrefix + this.#solveCase(name);
		while (i < process.argv.length) {
			if (this.#solveCase(process.argv[i++]) == name) {
				return true;
			}
		}
		return false;
	}

	#parseParameters() {
		const prefix = this.optionPrefix;
		const prefixLength = prefix.length;
		let i = this.offset;
		this.#parameters = [];
		while (i < process.argv.length) {
			if (process.argv[i].substr( 0, prefixLength ) !== prefix) {
				this.#parameters.push(process.argv[i]);
			}
			i++;
		}
	}

	#solveCase(name) {
		return this.caseSensitive ? name : name.toLowerCase();
	}
}

module.exports = ClParser;

