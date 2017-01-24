'use strict';

module.exports.root = (request, response) => {
    response(null,  {
        result : 'vous êtes connectés'
    });
};

module.exports.register = (request, response) => {
    response(null,  {

        result : request
    });
};