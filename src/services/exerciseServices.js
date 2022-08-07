const { Exercise, Schema } = require('../database/models/index');

const getAll = async () => {
  const response = await Exercise.findAll();
  return response;
};
const getAllWithSchemas = async () => {
  // Eager Loading
  const response = await Exercise.findAll({
    include: [{ model: Schema, as: 'schema', attributes: {
      exclude: ['id'],
    } }],
  });
  return response;
};

module.exports = {
  getAll,
  getAllWithSchemas,
};
