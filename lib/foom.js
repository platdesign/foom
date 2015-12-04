'use strict';

var Boom = require('boom');

module.exports = Foom;

var codes = {};

function Foom(code, data) {
	var err;

	if(codes[code]) {
		var errDef = codes[code];
		err = Boom.create(errDef.httpCode, errDef.msg, data);
	}

	err.output.payload.code = code;

	return err;
}

Foom.register = function(code, httpCode, msg) {

	if(codes[code]) {
		throw new Error('Error code '+code+' already exists!');
	}

	codes[code] = {
		httpCode: httpCode,
		msg: msg
	};
};

Foom.getAll = function() {
	return codes;
};