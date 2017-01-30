'use strict';

const Joi = require('joi');

module.exports = Joi.object({
    firstName       : Joi.string().required(),
    lastName        : Joi.string().required(),
    emailAddress    : Joi.string().email().required(),
    password        : Joi.string().required()
});