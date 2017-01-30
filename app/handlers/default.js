'use strict';

module.exports.root = (request, response) => {
    response(null,  {
        result : 'vous êtes connectés'
    });
};

module.exports.something = (request, response) => {
    response(null,  {

        result : {key : 'value'}
    });
};

module.exports.getUsers = function (request, reply) {
    request.server.db.users.find((err, docs) => {

        if (err) {
            return reply(Boom.wrap(err, 'Internal MongoDB error'));
        }

        reply(docs);
    });

};

module.exports.getUser = function (request, reply) {

    request.server.db.users.find({
        _id : request.params.id
    },(err, docs) => {

        if (err) {
            return reply(Boom.wrap(err, 'Internal MongoDB error'));
        }

        reply(docs);
    });

};

module.exports.addTemplate = function (request, reply) {
};

module.exports.addUser = function (request, reply) {
    console.log(request.payload);
    let model = new request.server.db.users();
    model.set({
        "firstName" : request.payload.firstName,
        "lastName" : request.payload.lastName,
        "emailAddress" : request.payload.email,
        "password" : request.payload.pwd
    });
    reply();

};
