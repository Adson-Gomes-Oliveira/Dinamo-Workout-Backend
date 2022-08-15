const loginServices = require('../services/loginServices');
const customError = require('../helpers/customError');

const signIn = async (req, res, next) => {
  try {
    const token = await loginServices.login(req.body);

    if (token.message) {
      const err = customError(token);
      throw err;
    };

    return res.status(token.code).json(token.result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signIn,
};
