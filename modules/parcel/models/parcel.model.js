'use strict';
const { Parcel } = require('../../../db/repository/index');

class ParcelModel {
  constructor(name, culture, area) {
    this.name = name;
    this.culture = culture;
    this.area = area;
  }

  async create() {
    const result = await Parcel.create({
      name: this.name,
      culture: this.culture,
      area: this.area,
    });

    return result;
  }
}

module.exports = {
  ParcelModel,
};
