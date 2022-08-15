const registryServices = require('../services/registryServices');
const customError = require('../helpers/customError');

const getAll = async (req, res, next) => {
  try {
    const { include } = req.query;
  
    if (include === 'true') {
      const data = await registryServices.getAllWithDetails();
      return res.status(data.code).json(data.result);
    }
  
    const data = await registryServices.getAll();
  
    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);
  }
};
const create = async (req, res, next) => {
  try {
    const payload = req.body;
    const data = await registryServices.create(payload);
  
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
