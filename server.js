'use strict';

const manifest = require('./config/manifest');
const mongojs = require('mongojs');
const Vision = require('vision');
const Handlebars = require('handlebars');

manifest.init().then(server => {
    server.start(err => {
        if (err) {
            throw err;
        }

        console.log(`Server running at: ${server.info.uri}`);
    });

    server.register(Vision, function (err) {
        if (err) {
            console.log('Cannot register vision')
        }

        // configure template support
        server.views({
            engines: {
                html: Handlebars
            },
            path: __dirname + '/app/views',
            layout: true
        })
    });

    server.db = mongojs('hapi-rest-mongo', ['users']);
}).catch(err => {
    throw err;
});

