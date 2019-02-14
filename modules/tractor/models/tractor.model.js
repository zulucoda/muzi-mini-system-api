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
}

module.exports = {
  TractorModel,
};
