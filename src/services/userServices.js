const { User, Health } = require('../database/models/index');
const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const getAll = async () => {
  const response = await User.findAll();
  return response;
};
const create= async (payload) => {
  const t = await sequelize.transaction();
  const { username, email, passwordHash, firstName,
    lastName, birthDate } = payload;
  try {
    const newHealth = await Health.create(
      { transaction: t },
    );

    await User.create(
      { username, email, passwordHash, firstName, lastName,
        birthDate, healthId: newHealth.id },
      { transaction: t },
    );

    await t.commit();
    return true;
  } catch (error) {
    await t.rollback();
    return error;
  }
}

module.exports = {
  getAll,
  create,
};
