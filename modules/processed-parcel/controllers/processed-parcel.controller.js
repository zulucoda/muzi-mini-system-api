'use strict';
const { ProcessedParcelModel } = require('../models/processed-parcel.model');

const create = (req, res) => {
  const processedParcel = new ProcessedParcelModel(
    req.body.parcelId,
    req.body.tractorId,
    req.body.dateProcessed,
    req.body.area,
  );
  return processedParcel
    .create()
    .then(data => res.status(201).send(data))
    .catch(error => res.status(400).send(error));
};

const list = (req, res) => {
  const processedParcel = new ProcessedParcelModel();
  return processedParcel
    .getData()
    .then(data => res.status(201).send(data))
    .catch(error => res.status(400).send(error));
};

const search = (req, res) => {
  const processedParcel = new ProcessedParcelModel(
    req.param('parcelId'),
    req.param('tractorId'),
    req.param('dateProcessed'),
    req.param('area'),
    req.param('culture'),
    req.param('dateProcessedTo'),
  );
  return processedParcel
    .searchData()
    .then(data => res.status(201).send(data))
    .catch(error => res.status(400).send(error));
};

module.exports = {
  create,
  list,
  search,
};
