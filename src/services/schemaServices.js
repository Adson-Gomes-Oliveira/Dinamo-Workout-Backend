const { Schema, Exercise } = require('../database/models');
const status = require('../helpers/httpStatus');

const getAll = async () => {
  const response = await Schema.findAll({
    include: [
      { model: Exercise, as: 'exercises', attributes: { exclude: ['id'] } }
    ]

  });
  return { result: response, code: status.OK };
};

module.exports = {
  getAll,
};
