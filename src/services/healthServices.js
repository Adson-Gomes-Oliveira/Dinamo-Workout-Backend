const { Health } = require('../database/models');

const getAll = async () => {
  const response = await Health.findAll();
  return response;
};

module.exports = {
  getAll,
};
