const { User, Health } = require('../database/models/index');
const encryptPassword = require ('../helpers/encryptPassword');
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const status = require('../helpers/httpStatus');
const valid = require('../validations/user');

const sequelize = new Sequelize(config.development);

const getAll = async () => {
  const response = await User.findAll();
  return { result: response, code: status.OK };
};

const getAllWithHealth = async () => {
  const response = await User.findAll({
    include: [
      { model: Health, as: 'health', attributes: { exclude: ['id'] } }
    ],
  });

  return { result: response, code: status.OK };
};

const create = async (payload) => {
  const validation = valid.create(payload);
  if (validation.message) return validation;

  const { username, email, passwordNoCrypt, 
    firstName, lastName, birthDate } = payload;
  const password = encryptPassword.encrypt(passwordNoCrypt);

  try {
    const transaction = await sequelize.transaction(async (t) => {
      const newHealth = await Health.create({ transaction: t });
  
      const createUser = await User.create({ username, email, password, firstName,
          lastName, birthDate, healthId: newHealth.id }, { transaction: t });

      if (createUser.errors) {
        return { message: 'Email already registered', code: status.BAD_REQUEST };
      }

      return {
        result: { username, email, firstName, lastName, birthDate },
        code: status.CREATED,
      };
    });

    return transaction;
  } catch (error) {
    const [ errObj ] = error.errors;
    if (errObj.message === 'email must be unique') {
      return { message: errObj.message, code: status.INTERNAL };
    }

    return { message: error, code: status.INTERNAL };
  }
};

module.exports = {
  getAll,
  getAllWithHealth,
  create,
};
