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
            method : 'GET',
            path : '/users',
            config : {
                description : 'Get all users in db',
                tags : ['api'],
                handler : handler.getUsers
            }
        },
        {
            method : 'GET',
            path : '/user/{id}',
            config : {
                description : 'Get a specific user',
                tags : ['api'],
                handler : handler.getUser
            }
        },
        {
            method : 'GET',
            path : '/edit/{id}',
            config : {
                description : 'something route',
                notes : 'oui',
                tags : ['api'],
                handler : handler.edit
            }
        },
        {
            method : 'GET',
            path : '/add',
            config : {
                description : 'something route',
                notes : 'oui',
                tags : ['api'],
                handler : handler.addTemplate
            }
        },
        {
            method : 'POST',
            path : '/add',
            config : {
                description : 'something route',
                notes : 'oui',
                tags : ['api'],
                handler : handler.addUser
            }
        },
        {
            method : 'POST',
            path : '/delete/{id}',
            config : {
                description : 'Delete a user',
                notes : 'oui',
                tags : ['api'],
                handler : handler.delete
            }
        }
    ]);
    next();
};

exports.register.attributes = {
    name : 'default-routes'
};