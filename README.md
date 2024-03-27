# clparser

Simple command line parser for node


## Installation

	npm install clparser


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
	parser.offset               Number, default: 2
	parser.optionPrefix         String, "/", "-", or "--", default: "/"
	parser.parameterCount       Number of parameters (readonly, no options or switches)
	parser.options              Array of objects [{ option<1>: value }, ..., { option<n>: value }] (readonly). 
	                            Does not follow the caseSensitive option.
	parser.parameters           Array (readonly, no options or switches)
	parser.switches             Array of strings [ switch<1>, ..., switch<n> ] (readonly).
                                Does not follow the caseSensitive option.

  


#### Methods
	parser.option(name)         Get the value of the named option
	parser.parameter(index)     Get the command line parameter indicated by index
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
	parser.getOption(name)      Returns the value of the named option.
	parser.getOptions()         Returns an array of option objects
	                            [{ option<1>: value }, ..., { option<n>: value }] (readonly). 
                                Does not follow the caseSensitive option.
	parser.getParameter(index)  Returns the command line parameter indicated by index.
	parser.getParameterCount()  Returns the number of parameters (no options or switches).
	parser.getParameters()      Returns parameters as array (no options or switches).
	parser.isSwitch(name)       Returns a boolean value that indicates whether the named switch exist.
	parser.getSwitches()        Return an array of strings [ switch<1>, ..., switch<n> ] (readonly).
                                Does not follow the caseSensitive option.



## Example
	
	>
	>node test.js /command:copy source.txt "target 42.txt" /silent /i /tries:3
    >

    const clp = require("clparser");
	const parser = new clp.ClParser({ offset: 2 });
	console.log(parser.option("command"))  -> "copy"
    console.log(parser.options)            -> [{ command: "copy", tries:"3" }]
	console.log(parser.parameterCount)     -> 2
	console.log(parser.parameters)         -> ["source.txt","target.txt"]
	console.log(parser.parameter(0))       -> "source.txt"
	console.log(parser.parameter(1))       -> "target 42.txt"
	console.log(parser.switch("silent"))   -> true
    console.log(parser.switches)           -> ["silent","i"]


