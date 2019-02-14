'use strict';

const { create } = require('../controllers/parcel.controller');

module.exports = function(app, passport) {
  app.route('/parcel').post(create);
};
