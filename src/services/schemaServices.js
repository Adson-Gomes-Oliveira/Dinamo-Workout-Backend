const { Schema } = require('../database/models');

const getAll = async () => {
  const response = await Schema.findAll();
  return response;
};

module.exports = {
  getAll,
};
