'use strict';

const { create, list } = require('../controllers/parcel.controller');

module.exports = function(app, passport) {
  app
    .route('/parcel')
    .post(passport.authenticate('jwt', { session: false }), create)
    .get(passport.authenticate('jwt', { session: false }), list);
};
