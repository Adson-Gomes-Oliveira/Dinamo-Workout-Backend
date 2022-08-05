const { User } = require('../../database/models/index');

const getAll = async () => {
  const response = await User.findAll();
  return response;
};

module.exports = {
  getAll,
};
