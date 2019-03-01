# clparser

Simple command line parser for node


## Usage

### Class interface

#### Initialization

	const clp = require("clparser");
	const parser = new clp.ClParser({
		offset: <number>,           // default: 2
		optionPrefix: <string>,     // "/", "-", or "--", default: "/"
		caseSensitive: <boolean>    // default: false
	});

#### Properties
	parser.offset               number, default: 2
	parser.optionPrefix         string, "/", "-", or "--", default: "/"
	parser.parameterCount       number
	parser.parameters           array (readonly)

#### Methods
	parser.option(name)         Get the value of the named option as string
	parser.parameter(index)     Get the command line parameter indicated by index as string
	parser.switch(name)         Returns boolean value that indicates whether the named switch exist



### Function interface

#### Initialization

	const clp = require("clparser");
	clp.setPreferences({
		offset: <number>,           // default: 2
		optionPrefix: <string>,     // "/", "-", or "--", default: "/"
		caseSensitive: <boolean>    // default: false
	});

#### Functions

	parser.getOption(name)      Get the value of the named option as string
	parser.getParameter(index)  Get the command line parameter indicated by index as string
	parser.getParameterCount()  number
	parser.getParameters()      array
	parser.getSwitch(name)      Returns boolean value that indicates whether the named switch exist


## Example
	
	>node test.js /command:sort source.txt target.txt /silent 
    .
    const clp = require("clparser");
	const parser = new clp.ClParser({ offset: 2 });
	console.log(parser.option("command"))  -> sort
	console.log(parser.parameterCount)     -> 2
	console.log(parser.parameter(0))       -> source.txt
	console.log(parser.parameter(1))       -> target.txt
	console.log(parser.switch("silent"))   -> true
	