const userServices = require('../services/userServices');

const getAll = async (req, res, next) => {
  try {
    const { include } = req.query;
  
    if (include === 'true') {
      const data = await userServices.getAllWithHealth();
      return res.status(data.code).json(data.result);
    }
  
    const data = await userServices.getAll();
  
    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);
  }
};
const create = async (req, res, next) => {
  try {
    const payload = req.body;
    const data = await userServices.create(payload);
  
    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create,
};
