'use strict';
const { Tractor } = require('../../../db/repository/index');

class TractorModel {
  constructor(name) {
    this.name = name;
  }

  async create() {
    const result = await Tractor.create({
      name: this.name,
    });

    return result;
  }

  async getData() {
    return await Tractor.findAll();
  }
}

module.exports = {
  TractorModel,
};
