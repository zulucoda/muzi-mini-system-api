'use strict';
const { ParcelModel } = require('../models/parcel.model');

const create = (req, res) => {
  const parcel = new ParcelModel(
    req.body.name,
    req.body.culture,
    req.body.area,
  );
  return parcel
    .create()
    .then(data => res.status(201).send(data))
    .catch(error => res.status(400).send(error));
};

const list = (req, res) => {
  const parcel = new ParcelModel();
  return parcel
    .getData()
    .then(data => res.status(201).send(data))
    .catch(error => res.status(400).send(error));
};

module.exports = {
  create,
  list,
};
