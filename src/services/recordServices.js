const { Record, User, Schema }  = require('../database/models');
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const status = require('../helpers/httpStatus');

const sequelize = new Sequelize(config.development);

const getAll = async () => {
  const response = await Record.findAll();

  return { result: response, code: status.OK };
};

const getAllWithDetails = async () => {
  const response = await Record.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password', 'id', 'createdAt', 'updatedAt'] }},
      { model: Schema, as: 'schema', attributes: { exclude: ['id'] } }
    ],
  });

  return { result: response, code: status.OK };
};

const create = async (payload) => {
  // Miss Validation

  const { username, schema, duration, rate, note } = payload;

  try {
    const transaction = await sequelize.transaction(async (t) => {
      const findUser = await User.findOne({ where: { username } });
      const findSchema = await Schema.findOne({ where: { schema } });
  
      await Record.create({ userId: findUser.id, schemaId: findSchema.id, 
        duration, rate, note }, { transaction: t });
  
      return {
        result: { userId: findUser.id, schemaId: findSchema.id, duration, rate, note },
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
