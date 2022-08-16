const { SchemaExercise, Schema, Exercise } = require('../database/models');
const status = require('../helpers/httpStatus');

const getAll = async () => {
  const response = await SchemaExercise.findAll({
    include: [
      { model: Schema, as: 'schema', attributes: { exclude: ['id'] } },
      { model: Exercise, as: 'exercise', attributes: { exclude: ['id'] } }
    ],
  });
  return { result: response, code: status.OK };
}

module.exports = {
  getAll
}