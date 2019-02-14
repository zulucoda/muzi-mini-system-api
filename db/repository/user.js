'use strict';
const { hashPassword } = require('../../modules/auth/helpers/authentication');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      salt: DataTypes.STRING,
    },
    {},
  );
  User.associate = function(models) {
    // associations can be defined here
  };

  User.beforeCreate((user, options) => {
    return hashPassword(user.password).then(hashedPw => {
      user.password = hashedPw;
      user.salt = hashedPw;
    });
  });

  return User;
};
