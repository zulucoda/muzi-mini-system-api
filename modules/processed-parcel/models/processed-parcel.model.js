'use strict';
const {
  ProcessedParcel,
  Parcel,
  Tractor,
} = require('../../../db/repository/index');
const db = require('../../../db/repository/index');

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
    const results = await db.sequelize.query(`
SELECT
  "Parcels".id,
  "Parcels".name AS "ParcelName",
  "Parcels".culture,
  "ProcessedParcels".id,
  "ProcessedParcels"."parcelId",
  "ProcessedParcels"."tractorId",
  "ProcessedParcels".date,
  "ProcessedParcels".area,
  "ProcessedParcels"."createdAt",
  "ProcessedParcels"."updatedAt",
  "Tractors".name AS "TractorName"
FROM
  public."Parcels",
  public."ProcessedParcels",
  public."Tractors"
WHERE
  "Parcels".id = "ProcessedParcels"."parcelId" AND
  "Tractors".id = "ProcessedParcels"."parcelId";
`);
    if (results && results.length > 1) {
      return results[0];
    }
  }
}

module.exports = {
  ProcessedParcelModel,
};
