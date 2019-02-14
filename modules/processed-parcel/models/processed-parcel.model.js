'use strict';
const { ProcessedParcel } = require('../../../db/repository/index');

class ProcessedParcelModel {
  constructor(parcelId, tractorId, dateProcessed, area) {
    this.parcelId = parcelId;
    this.tractorId = tractorId;
    this.dateProcessed = dateProcessed;
    this.area = area;
  }

  async create() {
    const result = await ProcessedParcel.create({
      parcelId: this.parcelId,
      tractorId: this.tractorId,
      date: this.dateProcessed,
      area: this.area,
    });

    return result;
  }

  async getData() {
    return await ProcessedParcel.findAll();
  }
}

module.exports = {
  ProcessedParcelModel,
};
