# clparser

Simple command line parser for node


## Usage

###As class

#### Initialization

	const clp = require("clparser")
	const parser = new clp.ClParser({
		offset: <number>,           // default: 2
		optionPrefix: <string>,     // "/", "-", or "--"", default: "/"
		caseSensitive: <boolean>    // default: false
	});

#### Properties
	offset 				number
	optionPrefix 		string
	parameterCount		number
	parameters 			array

#### Methods
	option(name) 		Get the value of the named option as string
	parameter(index)	Get	the command line parameter indicated by index as string
	switch(name) 		Returns boolean value that indicates whether the named switch exist


