require('dotenv');
const { User } = require('../database/models');
const jwt = require('../helpers/JSONWebToken');
const encrypt = require('../helpers/encryptPassword');

const generateToken = (user) => {
  const { email, password } = user;
  const findUser = await User.findOne({ where: { email } }) ;

  encrypt.check(password, findUser.password);
  const { password: _, ...noPasswordUser  } = findUser;

  const token = jwt.createToken(noPasswordUser.dataValues);
  return token;
}

const verifyToken = (token) => {
  
}
