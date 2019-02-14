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
    Parcel.belongsToMany(models.Tractor, {
      through: 'ProcessedParcel',
      foreignKey: 'parcelId',
    });
  };
  return Parcel;
};
