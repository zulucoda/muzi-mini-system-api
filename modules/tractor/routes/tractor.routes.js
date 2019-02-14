'use strict';

const { create, list } = require('../controllers/tractor.controller');

module.exports = function(app, passport) {
  app
    .route('/tractor')
    .post(passport.authenticate('jwt', { session: false }), create)
    .get(passport.authenticate('jwt', { session: false }), list);
};
