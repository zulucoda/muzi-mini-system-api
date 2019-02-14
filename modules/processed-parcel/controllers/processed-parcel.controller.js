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

module.exports = {
  create,
};
