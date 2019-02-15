'use strict';

const {
  create,
  list,
  search,
} = require('../controllers/processed-parcel.controller');

module.exports = function(app, passport) {
  app
    .route('/processed-parcel')
    .post(passport.authenticate('jwt', { session: false }), create)
    .get(passport.authenticate('jwt', { session: false }), list);

  app
    .route('/processed-parcel/search')
    .get(passport.authenticate('jwt', { session: false }), search);
};
