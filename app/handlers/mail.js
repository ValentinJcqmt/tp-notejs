'use strict';

module.exports.root = (request, response) => {
    response(null,  {
        result : 'Le serveur mail fonctionne'
    });
};