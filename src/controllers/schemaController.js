const schemaServices = require('../services/schemaServices');

const getAll = async (_req, res, next) => {
  try {
    const data = await schemaServices.getAll();

    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
