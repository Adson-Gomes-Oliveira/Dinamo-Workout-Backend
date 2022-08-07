const userServices = require('../services/userServices');

const getAll = async (_req, res) => {
  const data = await userServices.getAll();
  return res.status(200).json(data);
};

module.exports = {
  getAll,
};
