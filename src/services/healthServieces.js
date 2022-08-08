const { Health } = require('../models/health');

const getAll = async () => {
  const response = await Health.findAll();
  return response;
};

module.exports = {
  getAll,
};
