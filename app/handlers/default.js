'use strict';

module.exports.root = (request, response) => {
    response(null,  {
        result : 'vous êtes connectés'
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
        if(docs)
            return reply(docs);
        if(!docs)
            return reply(404);
    });

};

module.exports.addTemplate = function (request, reply) {
    //reply.view(//La vue d'ajout);
};

module.exports.addUser = function (request, reply) {
    let model = new request.server.db.users();
    model.set({
        "firstName" : request.payload.firstName,
        "lastName" : request.payload.lastName,
        "emailAddress" : request.payload.email,
        "password" : request.payload.pwd
    });
    reply();

};

module.exports.delete = function(request, reply){
    request.server.db.users.find({
        _id : request.params.id
    },(err, docs) => {

        if (err) {
            return reply(Boom.wrap(err, 'Internal MongoDB error'));
        }

        if(docs)
            request.server.db.users.remove({
                _id : request.params.id
            });
        if(!docs)
            return reply(404);

        //Redirect
    });
};

module.exports.edit = function(request, reply){
  request.server.db.users.find({
      _id : request.params.id
  }, (err, docs) => {
      if(err) {
          return reply(Boom.wrap(err, 'Internal MongoDB error'));
      }

      if(docs)
        //Reply view with 'docs'
          return reply(docs);
      if(!docs)
          return reply(404);

  });
};