'use strict';
const { AuthModel } = require('../models/auth.model');

const signIn = (req, res) => {
  const auth = new AuthModel(req.body.email, req.body.password);
  return auth
    .authenticate()
    .then(token => res.json({ message: 'login success', token }))
    .catch(error =>
      res.status('401').json({ message: 'Unknown user or invalid password' }),
    );
};

module.exports = {
  signIn,
};
