'use strict';

const { create } = require('../controllers/tractor.controller');

module.exports = function(app, passport) {
  app.route('/tractor').post(create);
};
