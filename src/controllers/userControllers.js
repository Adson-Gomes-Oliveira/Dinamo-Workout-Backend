const userServices = require('../services/userServices');

const getAll = async (req, res) => {
  const { include } = req.query;

  if (include === 'true') {
    const data = await userServices.getAllWithHealth();
    return res.status(200).json(data);
  }

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
