const healthServices = require('../services/healthServices');

const getAll = async (_req, res) => {
  const data = await healthServices.getAll();
  res.status(200).json(data);
};

module.exports = {
  getAll,
};
