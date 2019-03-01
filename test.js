const clp = require("../clparser");
const parser = new clp.ClParser({ offset: 2 });

function test1() {
	console.log(parser.parameters);
	console.log(parser.parameter(0));
	console.log(parser.parameterCount);
	console.log(parser.switch("p"));
	console.log(parser.option("name"));
}

function test2() {
	console.log(clp.getParameters());
	console.log(clp.getParameter(0));
	console.log(clp.getParameterCount());
	console.log(clp.isSwitch("p"));
	console.log(clp.getOption("name"));
}

clp.getOption("func") == "2" ? test2() : test1();