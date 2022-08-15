const { Registry, User, Schema }  = require('../database/models');
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const status = require('../helpers/httpStatus');
const valid = require('../validations/registry');

const sequelize = new Sequelize(config.development);

const getAll = async () => {
  const response = await Registry.findAll();
  return { result: response, code: status.OK };
};

const getAllWithDetails = async () => {
  const response = await Registry.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password', 'id', 'createdAt', 'updatedAt'] }},
      { model: Schema, as: 'schema', attributes: { exclude: ['id'] } }
    ],
  });

  return { result: response, code: status.OK };
};

const create = async (payload) => {
  const validation = valid.create(payload);
  if (validation.message) return validation;

  const { username, schema, duration, date, rate, note } = payload;

  try {
    const transaction = await sequelize.transaction(async (t) => {
      const findUser = await User.findOne({ where: { username } });
      if (!findUser) {
        return { message: 'User not found', code: status.UNAUTHORIZED };
      }

      const findSchema = await Schema.findOne({ where: { schema } });
      if (!findSchema) {
        return { message: 'Schema not found', code: status.NO_CONTENT };
      } 
  
      await Registry.create({ userId: findUser.id, schemaId: findSchema.id, 
        duration, date, rate, note }, { transaction: t });
  
      return {
        result: { userId: findUser.id, schemaId: findSchema.id,
          duration, date, rate, note },
        code: status.CREATED
      };
    });

    return transaction;
  } catch (error) {
    return { message: error, code: status.INTERNAL };
  }
};

module.exports = {
  getAll,
  getAllWithDetails,
  create,
};
