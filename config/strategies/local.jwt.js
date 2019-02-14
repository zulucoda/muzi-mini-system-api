'use strict';
const passportJwt = require('passport-jwt');
const { AuthModel } = require('../../modules/auth/models/auth.model');

const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'ZULUCODA LOVES CODING AND ALFA ROMEOS';

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  const auth = new AuthModel();
  return auth
    .findById({ id: jwt_payload.id })
    .then(user => next(null, user))
    .catch(error => next(error, null));
});

module.exports.jwtOptions = jwtOptions;
module.exports.strategy = strategy;
