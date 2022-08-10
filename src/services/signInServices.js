const { User } = require('../database/models');
const JWT = require('../helpers/JSONWebToken');
const encrypt = require('../helpers/encryptPassword');
const status = require('../helpers/httpStatus');

const signIn = async (user) => {
  const { email, password } = user;

  const findUser = await User.findOne({ where: { email } });
  const { dataValues } = findUser;

  const validatePassword = encrypt.check(password, dataValues.password);
  if (validatePassword.message) return validatePassword;

  const { password: _, ...noPasswordUser  } = findUser.dataValues;

  const token = JWT.createToken(noPasswordUser);
  return { result: token, code: status.OK };
};

module.exports = {
  signIn,
}
