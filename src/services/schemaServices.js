const { Schema } = require('../database/models');
const status = require('../helpers/httpStatus');

const getAll = async () => {
  const response = await Schema.findAll();
  return { result: response, code: status.OK };
};

module.exports = {
  getAll,
};
