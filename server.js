'use strict';

const manifest = require('./config/manifest');
const mongojs = require('mongojs');
const Vision = require('vision');
const Inert = require('inert');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const Handlebars = require('handlebars');

manifest.init().then(server => {

    server.start(err => {
        if (err) {
            throw err;
        }

        console.log(`Server running at: ${server.info.uri}`);
    });

    server.db = mongojs('hapi-rest-mongo', ['users']);

    server.register([
        Inert,
        Vision,
        {
            'register': HapiSwagger,
            'options': options
        }], (err) => {
        server.start( (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Server running at:', server.info.uri);
            }
        });
    });
    ;
}).catch(err => {
    throw err;
});

