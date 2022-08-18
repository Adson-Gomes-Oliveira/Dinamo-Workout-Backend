const { Health, User } = require('../database/models');
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const status = require('../helpers/httpStatus');
const valid = require('../validations/health');

const sequelize = new Sequelize(config.development);

const getAll = async () => {
  const response = await Health.findAll();
  return { result: response, code: status.OK };
};

const edit = async (payload, userID) => {
  const validation = valid.edit(payload);
  if (validation.message) return validation;

  const getHealthID = await User.findByPk(userID);
  const { healthId } = getHealthID;

  try {
    const transaction = await sequelize.transaction(async (t) => {
      await Health.update({
        ...payload, imc: payload.weight / (payload.height * payload.height),
      }, { where: { id: healthId }, transaction: t });

      return { result: payload, code: status.OK };
    });

    return transaction;
  } catch (error) {
    return { result: payload, code: status.OK };
  }
}

module.exports = {
  getAll,
  edit
};
