const bcrypt = require('bcrypt');
const status = require('../helpers/httpStatus');

const encrypt = (password) => {
  const SALT_ROUNDS = 10;
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  return encryptedPassword;
};

const check = (password, passwordInDB) => {
  const isMatch = bcrypt.compareSync(password, passwordInDB);
  if (!isMatch) {
    return { message: 'Incorrect Password', code: status.UNAUTHORIZED }
  };

  return {};
};

module.exports = {
  encrypt,
  check,
}
