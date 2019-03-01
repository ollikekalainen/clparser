# clparser

Simple command line parser for node


## Usage

#### Initialization

	const parser = new ClParser({
		offset: number, 		// default: 2
		optionPrefix: string, 	// "/", "-", or "--"", default: "/"
		caseSensitive: boolean 	// default: false
	});

#### Properties
	offset 				number
	optionPrefix 		string
	parameterCount		number
	parameters 			array

#### Methods
	option(optionname) 		returns value of the option as string
	parameter(index)		returns value of the parameter as string
	switch(switchname) 		returns boolean indicating the existence of the switch 


