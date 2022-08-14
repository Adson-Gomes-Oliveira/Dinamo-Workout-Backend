const status = require('../helpers/httpStatus');

const errorMiddleware = (err, _req, res, _next) => {
  if (err.type) {
    return res.status(err.status).json({
      message: err.message,
      code: err.status,
    });
  }

  return res.status(status.INTERNAL).json({
    name: err.name,
    message: err.message,
    cause: err.cause,
  })
};

module.exports = errorMiddleware;
