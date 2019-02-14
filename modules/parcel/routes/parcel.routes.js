'use strict';

const { create, list } = require('../controllers/parcel.controller');

module.exports = function(app, passport) {
  app
    .route('/parcel')
    .post(create)
    .get(list);
};
