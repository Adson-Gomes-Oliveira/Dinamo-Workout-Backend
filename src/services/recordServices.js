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
    include: [{
      model: User, as: 'user', attributes: { 
        exclude: ['password', 'id', 'createdAt', 'updatedAt'] 
      },
    }, {
      model: Schema, as: 'schema', attributes: { 
        exclude: ['id'] 
      },
    }],
  });

  return { result: response, code: status.OK };
};
const create = async (payload) => {
  const { username, schema, duration, rate, note } = payload;
  const t = await sequelize.transaction();

  try {
    const findUser = await User.findOne(
      { where: { username } },
      { transaction: t },
    );
    const findSchema = await Schema.findOne(
      { where: { schema } },
      { transaction: t },
    );

    await Record.create(
      { userId: findUser.id, schemaId: findSchema.id, duration, rate, note },
      { transaction: t },
    );

    await t.commit();

    return {
      result: {
        userId: findUser.id,
        schemaId: findSchema.id,
        duration,
        rate,
        note
      },
      code: status.CREATED,
    };
  } catch (error) {
    await t.rollBack();
    return { message: error, code: status.INTERNAL };
  }
};

module.exports = {
  getAll,
  getAllWithDetails,
  create,
};
