require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = (user) => {
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: '15m',
    algorithm: 'HS256',
  });

  return token;
};

const checkToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createToken,
  checkToken,
}
