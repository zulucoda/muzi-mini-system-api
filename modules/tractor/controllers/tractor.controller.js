'use strict';
const { TractorModel } = require('../models/tractor.model');

const create = (req, res) => {
  const tractor = new TractorModel(req.body.name);
  return tractor
    .create()
    .then(data => res.status(201).send(data))
    .catch(error => res.status(400).send(error));
};

const list = (req, res) => {
  const tractor = new TractorModel();
  return tractor
    .getData()
    .then(data => res.status(201).send(data))
    .catch(error => res.status(400).send(error));
};

module.exports = {
  create,
  list,
};
