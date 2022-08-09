const exerciseServices = require('../services/exerciseServices');
const customError = require('../helpers/customError');

const getAll = async (req, res) => {
  const { include } = req.query;

  if (include === 'true') {
    const data = await exerciseServices.getAllWithSchemas();
    return res.status(data.code).json(data.result);
  }

  const data = await exerciseServices.getAll();
  return res.status(data.code).json(data.result);
};
const createWithSchema = async (req, res, next) => {
  try {
    const data = await exerciseServices.createWithSchema(req.body);

    if (data.message) {
      const err = customError(data);
      throw err;
    };

    res.status(data.code).json(data.result);
  } catch (error) {
    next(error);
  };
};

module.exports = {
  getAll,
  createWithSchema,
}
