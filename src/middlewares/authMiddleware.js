const JWT = require('../helpers/JSONWebToken');
const customError = require('../helpers/customError');
const status = require('../helpers/httpStatus');

const authMiddleware = (req, _res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      const err = customError({
        message: 'Unauthorized, Token is required',
        code: status.UNAUTHORIZED,
      });

      throw err;
    };
  
    const user = JWT.checkToken(authorization);

    if (user.message) {
      const err = customError({
        message: 'Unauthorized, invalid token!',
        code: status.UNAUTHORIZED,
      });

      throw err;
    }
  
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authMiddleware;
