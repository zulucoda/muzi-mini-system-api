'use strict';
const { Parcel } = require('../../../db/models/index');

module.exports.create = function(req, res) {
  return Parcel.create({
    name: 'Test',
    culture: 'Test',
    area: 100,
  })
    .then(data => res.status(201).send(data))
    .catch(error => res.status(400).send(error));
};
