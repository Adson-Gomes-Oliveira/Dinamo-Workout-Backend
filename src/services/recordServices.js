const { Record, User, Schema }  = require('../database/models');
const status = require('../helpers/httpStatus');

const getAll = async () => {
  const response = await Record.findAll();

  return { result: response, code: status.OK };
};

const getAllWithDetails = async () => {
  const response = await Record.findAll({
    include: [{
      model: User, as: 'user', attributes: { exclude: ['id'] },
      model: Schema, as: 'schema', attributes: { exclude: ['id'] },
    }],
  });

  return { result: response, code: status.OK };
};

const create = async (payload) => {
  const { username, schema, duration, rate, note } = payload;
};

module.exports = {
  getAll,
  getAllWithDetails,
};
