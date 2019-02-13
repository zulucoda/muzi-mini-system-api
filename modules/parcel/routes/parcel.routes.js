'use strict';

const parcelController = require('../controllers/parcel.controller');

module.exports = function(app, passport) {
  app.route('/parcel').post(parcelController.create);
};
