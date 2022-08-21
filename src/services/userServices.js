const Sequelize = require('sequelize');
const { User, Health } = require('../database/models/index');
const encryptPassword = require('../helpers/encryptPassword');
const config = require('../database/config/config');
const status = require('../helpers/httpStatus');
const valid = require('../validations/user');

const sequelize = new Sequelize(config.development);

const getAll = async () => {
  const response = await User.findAll();
  return { result: response, code: status.OK };
};

const getByID = async (userID) => {
  const response = await User.findByPk(userID);
  return { result: response, code: status.OK };
};

const getAllWithHealth = async () => {
  const response = await User.findAll({
    include: [
      { model: Health, as: 'health', attributes: { exclude: ['id'] } },
    ],
  });

  return { result: response, code: status.OK };
};

const getByIdWithHealth = async (userID) => {
  const response = await User.findByPk(userID, {
    include: [
      { model: Health, as: 'health', attributes: { exclude: ['id'] } },
    ],
  });

  return { result: response, code: status.OK };
};

const create = async (payload) => {
  const validation = valid.create(payload);
  if (validation.message) return validation;

  const {
    username, email, passwordNoCrypt,
    firstName, lastName, birthDate,
  } = payload;
  const password = encryptPassword.encrypt(passwordNoCrypt);

  try {
    const transaction = await sequelize.transaction(async (t) => {
      const newHealth = await Health.create({ transaction: t });

      const createUser = await User.create({
        username,
        email,
        password,
        firstName,
        lastName,
        birthDate,
        healthId: newHealth.id,
      }, { transaction: t });

      if (createUser.errors) {
        return { message: 'Email already registered', code: status.BAD_REQUEST };
      }

      return {
        result: {
          username, email, firstName, lastName, birthDate,
        },
        code: status.CREATED,
      };
    });

    return transaction;
  } catch (error) {
    const [errObj] = error.errors;
    if (errObj.message === 'email must be unique') {
      return { message: errObj.message, code: status.INTERNAL };
    }

    return { message: error, code: status.INTERNAL };
  }
};

const editWithPassword = async (payload, userID) => {
  const {
    username, email, passwordNoCrypt,
    firstName, lastName, birthDate,
  } = payload;
  const password = encryptPassword.encrypt(passwordNoCrypt);

  try {
    const transaction = await sequelize.transaction(async (t) => {
      await User.update({
        username,
        email,
        password,
        firstName,
        lastName,
        birthDate,
      }, { where: { id: userID } }, { transaction: t });
      return { result: payload, code: status.CREATED };
    });

    return transaction;
  } catch (error) {
    return { result: error, code: status.INTERNAL };
  }
};

const editWithoutPassword = async (payload, userID) => {
  const {
    username, email, firstName, lastName, birthDate,
  } = payload;

  try {
    const transaction = await sequelize.transaction(async (t) => {
      await User.update({
        username,
        email,
        firstName,
        lastName,
        birthDate,
      }, { where: { id: userID } }, { transaction: t });

      return { result: payload, code: status.CREATED };
    });

    return transaction;
  } catch (error) {
    return { result: error, code: status.INTERNAL };
  }
};

const edit = async (payload, userID) => {
  const validation = valid.create(payload);
  if (validation.message) return validation;

  if (payload.passwordNoCrypt) return editWithPassword(payload, userID);
  return editWithoutPassword(payload, userID);
};

module.exports = {
  getAll,
  getByID,
  getByIdWithHealth,
  getAllWithHealth,
  create,
  edit,
};
