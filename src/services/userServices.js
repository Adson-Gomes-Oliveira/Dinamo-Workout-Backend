const { User, Health } = require('../database/models/index');
const encryptPassword = require ('../helpers/encryptPassword');
const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const getAll = async () => {
  const response = await User.findAll();
  return response;
};
const getAllWithHealth = async () => {
  // Eager Loading
  const response = await User.findAll({
    include: [{ model: Health, as: 'health', attributes: {
      exclude: ['id'],
    } }],
  });
  return response;
};
const create = async (payload) => {
  const t = await sequelize.transaction();
  const { username, email, passwordNoCrypt, 
    firstName, lastName, birthDate } = payload;
  
  try {
    const newHealth = await Health.create({ transaction: t });

    const password = encryptPassword.encrypt(passwordNoCrypt);
    await User.create(
      { username, email, password, firstName,
        lastName, birthDate, healthId: newHealth.id },
      { transaction: t },
    );

    await t.commit();

    return true;
  } catch (error) {
    console.log(error);
    await t.rollback();
    return error;
  }
}

module.exports = {
  getAll,
  getAllWithHealth,
  create,
};
