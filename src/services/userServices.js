const { User, Health } = require('../database/models/index');
const encryptPassword = require ('../helpers/encryptPassword');
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const status = require('../helpers/httpStatus');

const sequelize = new Sequelize(config.development);

const getAll = async () => {
  const response = await User.findAll();

  return response;
};

const getAllWithHealth = async () => {
  const response = await User.findAll({
    include: [
      { model: Health, as: 'health', attributes: { exclude: ['id'] } }
    ],
  });

  return response;
};

const create = async (payload) => {
  // Miss Validation

  const { username, email, passwordNoCrypt, 
    firstName, lastName, birthDate } = payload;
  
  try {
    const transaction = await sequelize.transaction(async (t) => {
      const newHealth = await Health.create({ transaction: t });
  
      const password = encryptPassword.encrypt(passwordNoCrypt);
      await User.create({ username, email, password, firstName,
          lastName, birthDate, healthId: newHealth.id }, { transaction: t });

      return {
        result: { username, email, firstName, lastName, birthDate },
        code: status.CREATED,
      };
    });

    return transaction;
  } catch (error) {
    return { message: error, code: status.INTERNAL };
  }
};

module.exports = {
  getAll,
  getAllWithHealth,
  create,
};
