'use strict';
const fs = require('fs');
const path = require('path');
const modelsDir = path.join(__dirname, '../../app/models/');
const models = fs.readdirSync(modelsDir);

module.exports.init = server => {
	return new Promise((resolve, reject) => {
		server.register({
		register : require('k7'),
			options : {
				connectionString : 'mongodb://localhost:27017/hapi',
				adapter : require('k7-mongoose'),
				models : [
					path.join(routeDir, '**/*.js')
				],
			}
		}, err => {
			if (err) {
				reject(err);
				return;
			}
			resolve();
		});
	});
};