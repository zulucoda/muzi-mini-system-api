'use strict';
const { Parcel } = require('../../../db/repository/index');

class ParcelModel {
  constructor(name, culture, area) {
    this.name = name;
    this.culture = culture;
    this.area = area;
  }

  async create() {
    return await Parcel.create({
      name: this.name,
      culture: this.culture,
      area: this.area,
    });
  }

  async getData() {
    return await Parcel.findAll();
  }
}

module.exports = {
  ParcelModel,
};
