const userServices = require('../services/userServices');
const customError = require('../helpers/customError');

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

const getByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { include } = req.query;

    if (include === 'true') {
      const data = await userServices.getByIdWithHealth(Number(id));
      return res.status(data.code).json(data.result);
    }

    const data = await userServices.getByID(Number(id));

    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const payload = req.body;
    const data = await userServices.create(payload);

    if (data.message) {
      const err = customError(data);
      throw err;
    }

    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const payload = req.body;
    const data = await userServices.edit(payload, req.user.id);

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
  getByID,
  create,
  edit,
};
