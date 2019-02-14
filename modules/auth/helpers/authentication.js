/**
 * NOTE: THIS IS JUST FOR PROTOTYPE NOT TO BE USED IN PRODUCTION
 * Normally you use bcrypt or crypto to hash password
 * @param {string} password
 * @returns {Promise} hash,
 */
const hashPassword = password => {
  return new Promise((resolve, reject) => {
    try {
      resolve(Buffer.from(password).toString('base64'));
    } catch (error) {
      reject('error hashing password');
    }
  });
};

/**
 * NOTE: THIS IS JUST FOR PROTOTYPE NOT TO BE USED IN PRODUCTION
 * Normally you use bcrypt or crypto to hash password
 * @param {string} password
 * @param {string} hash
 */
const comparePasswordAndHash = (password, hash) => {
  return Buffer.from(password).toString('base64') == hash;
};

module.exports = {
  hashPassword,
  comparePasswordAndHash,
};
