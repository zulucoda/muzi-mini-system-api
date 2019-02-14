'use strict';

const { create, list } = require('../controllers/tractor.controller');

module.exports = function(app, passport) {
  app
    .route('/tractor')
    .post(create)
    .get(list);
};
