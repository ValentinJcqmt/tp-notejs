'use strict';

const handler = require('../handlers/mail');

exports.register = (server, options, next) => {
    server.route([
        {
            method : 'POST',
            path   : '/',
            config : {
                description : 'Base route',
                notes       : 'Route par défaut du truc de mail',
                tags        : [ 'mail' ],
                handler     : handler.root
            }
        }
    ]);
    next();
};

exports.register.attributes = {
    name : 'mail-routes'
};