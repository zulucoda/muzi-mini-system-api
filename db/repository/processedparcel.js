'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProcessedParcel = sequelize.define(
    'ProcessedParcel',
    {
      date: DataTypes.DATE,
      area: DataTypes.INTEGER,
    },
    {},
  );
  ProcessedParcel.associate = function(models) {
    // associations can be defined here
  };
  return ProcessedParcel;
};
