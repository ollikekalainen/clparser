/* 
-----------------------------------------------------------------------------------------
 index.js
-----------------------------------------------------------------------------------------
 (c) Olli Kekäläinen




 Rev 1.0.1
 ----------
 
	

 Rev 1.0.2
 ----------

 - Added a new option property to the ClParser class and a corresponding getOptions() 
 function to the clparser function interface.
 - Added a new switches property to the ClParser class and a corresponding getSwitches() 
 function to the clparser function interface.

 	



 20240327
-----------------------------------------------------------------------------------------
*/

const iface = {};
let PARSER;

module.exports = iface;

iface.ClParser = require("./parser");

iface.setPreferences = (params) => {
	ensureInstance();
	typeof params.optionPrefix == "string" && (PARSER.optionPrefix = params.optionPrefix);
	typeof params.caseSensitive == "boolean" && (PARSER.caseSensitive = params.caseSensitive);
	typeof params.offset == "number" && (PARSER.offset = params.offset);
};

iface.getParameterCount = () => {
	ensureInstance();
	return PARSER.parameterCount;
};

iface.getParameter = (index) => {
	ensureInstance();
	return PARSER.parameter(index);
};

iface.getParameters = () => {
	ensureInstance();
	return PARSER.parameters;
};

iface.getOption = (name) => {
	ensureInstance();
	return PARSER.option(name);
};

iface.getOptions = () => {
	ensureInstance();
	return PARSER.options;
};

iface.getSwitches = () => {
	ensureInstance();
	return PARSER.switches;
};

iface.isSwitch = (name) => {
	ensureInstance();
	return PARSER.switch(name);
};

function ensureInstance() {
	PARSER || (PARSER = new iface.ClParser());
}