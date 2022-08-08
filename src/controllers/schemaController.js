const schemaServices = require('../services/schemaServices');

const getAll = async (_req, res) => {
  const data = await schemaServices.getAll();
  res.status(200).json(data);
};

module.exports = {
  getAll,
};
