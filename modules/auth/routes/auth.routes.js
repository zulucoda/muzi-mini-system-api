'use strict';

const { signIn, signUp } = require('../controllers/auth.controller');

module.exports = function(app) {
  app.route('/auth').post(signIn);
};
