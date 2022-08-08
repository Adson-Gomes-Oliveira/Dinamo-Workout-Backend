const userServices = require('../services/userServices');

const getAll = async (_req, res) => {
  const data = await userServices.getAll();
  return res.status(200).json(data);
};
const create = async (req, res) => {
  const payload = req.body;
  
  const data = await userServices.create(payload);
  return res.status(200).json(data);
}
module.exports = {
  getAll,
  create,
};
