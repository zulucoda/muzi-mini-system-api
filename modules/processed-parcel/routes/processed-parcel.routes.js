'use strict';

const { create, list } = require('../controllers/processed-parcel.controller');

module.exports = function(app, passport) {
  app
    .route('/processed-parcel')
    .post(passport.authenticate('jwt', { session: false }), create)
    .get(passport.authenticate('jwt', { session: false }), list);
};
