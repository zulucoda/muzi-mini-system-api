'use strict';
const { User } = require('../../../db/repository/index');
const { comparePasswordAndHash } = require('../helpers/authentication');
const jwt = require('jsonwebtoken');
const localJwtStrategy = require('../../../config/strategies/local.jwt');

class AuthModel {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  async authenticate() {
    // find where email belongs to user
    const user = await User.findAll({
      where: {
        email: this.email,
      },
    });

    // if user exist
    if (user && user.length > 0) {
      // check password
      if (comparePasswordAndHash(this.password, user[0].salt)) {
        // generate jwt token
        const jwtPayload = { id: user[0].id };
        const token = jwt.sign(
          jwtPayload,
          localJwtStrategy.jwtOptions.secretOrKey,
        );

        return token;
      }
    }

    throw new Error('Unknown user or invalid password');
  }

  async findById(payload) {
    return await User.findAll({
      where: {
        id: payload.id,
      },
    });
  }
}

module.exports = {
  AuthModel,
};
