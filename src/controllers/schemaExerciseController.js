const schemaExerciseServices = require('../services/schemaExerciseServices');
const customError = require('../helpers/customError');

const getAll = async (_req, res, next) => {
  try {
    const data = await schemaExerciseServices.getAll();

    return res.status(data.code).json(data.result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAll
}
