const exerciseServices = require('../services/exerciseServices');

const getAll = async (req, res) => {
  const { include } = req.query;
  console.log(include);
  if (include === 'true') {
    console.log('entrei no eager');
    // Eager Loading
    const data = await exerciseServices.getAllWithSchemas();
    return res.status(200).json(data);
  }
  console.log('Vim pro lazy');
  // Lazy Loading
  const data = await exerciseServices.getAll();
  return res.status(200).json(data);
};

module.exports = {
  getAll,
}
