/*
	(c) 2019 Olli Kekäläinen 

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

iface.isSwitch = (name) => {
	ensureInstance();
	return PARSER.switch(name);
};

function ensureInstance() {
	PARSER || (PARSER = new iface.ClParser());
}