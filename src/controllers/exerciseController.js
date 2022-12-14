const exerciseServices = require('../services/exerciseServices');
const customError = require('../helpers/customError');

const getAll = async (_req, res, next) => {
  try {
    const data = await exerciseServices.getAll();

    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const data = await exerciseServices.create(req.body);

    if (data.message) {
      const err = customError(data);
      throw err;
    }

    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);
  };
};

module.exports = {
  getAll,
  create,
};
