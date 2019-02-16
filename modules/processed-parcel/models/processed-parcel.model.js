'use strict';
const { ProcessedParcel } = require('../../../db/repository/index');
const db = require('../../../db/repository/index');
const moment = require('moment');

class ProcessedParcelModel {
  constructor(
    parcelId,
    tractorId,
    dateProcessed,
    area,
    culture,
    dateProcessedTo,
  ) {
    this.parcelId = parcelId;
    this.tractorId = tractorId;
    this.dateProcessed = dateProcessed;
    this.area = area;

    this.culture = culture;
    this.dateProcessedTo = dateProcessedTo;
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
  "Parcels".name AS "parcelName",
  "Parcels".culture,
  "ProcessedParcels".id,
  "ProcessedParcels"."parcelId",
  "ProcessedParcels"."tractorId",
  "ProcessedParcels".date,
  "ProcessedParcels".area,
  "ProcessedParcels"."createdAt",
  "ProcessedParcels"."updatedAt",
  "Tractors".name AS "tractorName"
FROM
  public."Parcels",
  public."ProcessedParcels",
  public."Tractors"
WHERE
  "Parcels".id = "ProcessedParcels"."parcelId" AND
  "Tractors".id = "ProcessedParcels"."tractorId";
`);
    if (results && results.length > 1) {
      return results[0];
    }
  }

  async searchData() {
    let searchQuery = '';
    if (this.parcelId) {
      searchQuery += `AND "Parcels".id = ${this.parcelId}`;
    } else if (this.tractorId) {
      searchQuery += ` AND "Tractors".id = ${this.tractorId}`;
    } else if (
      this.dateProcessed &&
      this.dateProcessedTo &&
      moment(this.dateProcessed).isValid() === true &&
      moment(this.dateProcessedTo).isValid() === true
    ) {
      searchQuery += `AND "ProcessedParcels".date BETWEEN '${
        this.dateProcessed
      }' AND '${this.dateProcessedTo}'`;
    } else if (this.area) {
      searchQuery += `AND "ProcessedParcels".area = '${this.area}'`;
    } else if (this.culture) {
      searchQuery += `AND "Parcels".culture LIKE '%${this.culture}%'`;
    }

    const results = await db.sequelize.query(`
SELECT
  "Parcels".id,
  "Parcels".name AS "parcelName",
  "Parcels".culture,
  "ProcessedParcels".id,
  "ProcessedParcels"."parcelId",
  "ProcessedParcels"."tractorId",
  "ProcessedParcels".date,
  "ProcessedParcels".area,
  "ProcessedParcels"."createdAt",
  "ProcessedParcels"."updatedAt",
  "Tractors".name AS "tractorName"
FROM
  public."Parcels",
  public."ProcessedParcels",
  public."Tractors"
WHERE
  "Parcels".id = "ProcessedParcels"."parcelId" AND
  "Tractors".id = "ProcessedParcels"."tractorId" 
  ${searchQuery};
`);
    if (results && results.length > 1) {
      return results[0];
    }
  }
}

module.exports = {
  ProcessedParcelModel,
};
