const { User } = require('../database/models');
const JWT = require('../helpers/JSONWebToken');
const encrypt = require('../helpers/encryptPassword');
const status = require('../helpers/httpStatus');

const login = async (user) => {
  const { email, password } = user;

  const findUser = await User.findOne({ where: { email } });
  if (!findUser) {
    return { message: 'User not found', code: status.UNAUTHORIZED };
  }

  const { dataValues } = findUser;

  const validatePassword = encrypt.check(password, dataValues.password);
  if (validatePassword.message) return validatePassword;

  const { password: _, ...noPasswordUser  } = findUser.dataValues;

  const token = JWT.createToken(noPasswordUser);
  return { result: token, code: status.OK };
};

module.exports = {
  login,
}
