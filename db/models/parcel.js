'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parcel = sequelize.define(
    'Parcel',
    {
      name: DataTypes.STRING,
      culture: DataTypes.STRING,
      area: DataTypes.INTEGER,
    },
    {},
  );
  Parcel.associate = function(models) {
    // associations can be defined here
  };
  return Parcel;
};
