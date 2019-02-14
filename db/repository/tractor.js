'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tractor = sequelize.define(
    'Tractor',
    {
      name: DataTypes.STRING,
    },
    {},
  );
  Tractor.associate = function(models) {
    // associations can be defined here
  };
  return Tractor;
};
