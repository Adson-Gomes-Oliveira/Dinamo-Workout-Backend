const healthServices = require('../services/healthServices');

const getAll = async (_req, res, next) => {
  try {
    const data = await healthServices.getAll();

    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);    
  }
};

module.exports = {
  getAll,
};
