'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProcessedParcel = sequelize.define(
    'ProcessedParcel',
    {
      date: DataTypes.DATE,
    },
    {},
  );
  ProcessedParcel.associate = function(models) {
    // associations can be defined here
  };
  return ProcessedParcel;
};
