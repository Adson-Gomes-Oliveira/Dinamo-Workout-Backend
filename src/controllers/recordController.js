const recordServices = require('../services/recordServices');
const customError = require('../helpers/customError');

const getAll = async (req, res, next) => {
  try {
    const { includes } = req.query;
  
    if (includes === 'true') {
      const data = await recordServices.getAllWithDetails();
      return res.status(data.code).json(data.result);
    }
  
    const data = await recordServices.getAll();
  
    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);
  }
};
const create = async (req, res, next) => {
  try {
    const payload = req.body;
    const data = await recordServices.create(payload);
  
    if (data.message) {
      const err = customError(data);
      throw err;
    };
  
    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create,
};
