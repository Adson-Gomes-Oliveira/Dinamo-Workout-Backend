const healthServices = require('../services/healthServices');
const customError = require('../helpers/customError');

const getAll = async (_req, res, next) => {
  try {
    const data = await healthServices.getAll();

    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);    
  }
};

const edit = async (req, res, next) => {
  try {
    const payload = req.body;
    const data = await healthServices.edit(payload, req.user.id);

    if (data.message) {
      const err = customError(data);
      throw err;
    }

    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  edit
};
