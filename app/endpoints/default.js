'use strict';

const handler = require('../handlers/default');

exports.register = (server, options, next) => {
    server.route([
        {
            method : 'GET',
            path   : '/',
            config : {
                description : 'Base route',
                notes       : 'Route par défaut du projet',
                tags        : [ 'api' ],
                handler     : handler.root
            }
        },
        {
            method : 'POST',
            path   : '/register',
            config : {
                description : 'User register route',
                notes       : 'Inscription d\'un utilisateur',
                tags        : [ 'api' ],
                handler     : handler.register
            }
        }
    ]);
    next();
};

exports.register.attributes = {
    name : 'default-routes'
};