const clp = require("../clparser");
const parser = new clp.ClParser({ offset: 2 });

function test1() {
	console.log("------------------------------------------------");
	console.log("parameters:");
	console.log("------------------------------------------------");
	console.log(parser.parameters);
	console.log("");
	console.log("------------------------------------------------");
	console.log("parameter 0:");
	console.log("------------------------------------------------");
	console.log(parser.parameter(0));
	console.log("");
	console.log("------------------------------------------------");
	console.log("number of parameters:");
	console.log("------------------------------------------------");
	console.log(parser.parameterCount);
	console.log("");
	console.log("------------------------------------------------");
	console.log("is switch /p:");
	console.log("------------------------------------------------");
	console.log(parser.switch("p"));
	console.log("");
	console.log("------------------------------------------------");
	console.log("option 'name':");
	console.log("------------------------------------------------");
	console.log(parser.option("name"));
	console.log("");
	console.log("------------------------------------------------");
	console.log("options:");
	console.log("------------------------------------------------");
	console.log(parser.options);
	console.log("");
	console.log("------------------------------------------------");
	console.log("switches:");
	console.log("------------------------------------------------");
	console.log(parser.switches);
	console.log("");
	console.log("");
}

function test2() {
	console.log("------------------------------------------------");
	console.log("parameters:");
	console.log("------------------------------------------------");
	console.log(clp.getParameters());
	console.log("");
	console.log("------------------------------------------------");
	console.log("parameter 0:");
	console.log("------------------------------------------------");
	console.log(clp.getParameter(0));
	console.log("");
	console.log("------------------------------------------------");
	console.log("number of parameters:");
	console.log("------------------------------------------------");
	console.log(clp.getParameterCount());
	console.log("");
	console.log("------------------------------------------------");
	console.log("is switch /p:");
	console.log("------------------------------------------------");
	console.log(clp.isSwitch("p"));
	console.log("");
	console.log("------------------------------------------------");
	console.log("option 'name':");
	console.log("------------------------------------------------");
	console.log(clp.getOption("name"));
	console.log("");
	console.log("------------------------------------------------");
	console.log("options:");
	console.log("------------------------------------------------");
	console.log(clp.getOptions());
	console.log("");
	console.log("------------------------------------------------");
	console.log("switches:");
	console.log("------------------------------------------------");
	console.log(clp.getSwitches());
	console.log("");
}

clp.getOption("func") == "2" ? test2() : test1();