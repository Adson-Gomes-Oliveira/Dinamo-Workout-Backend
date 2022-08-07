const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { Exercise, Schema } = require('../database/models/index');

const sequelize = new Sequelize(config.development);

const getAll = async () => {
  const response = await Exercise.findAll();
  return response;
};
const getAllWithSchemas = async () => {
  // Eager Loading
  const response = await Exercise.findAll({
    include: [{ model: Schema, as: 'schema', attributes: {
      exclude: ['id'],
    } }],
  });
  return response;
};
const createWithSchema = async (payload) => {
  const { name, reps, howTo, mode, 
    weightRecord, repsRecord, schema } = payload;
  const t = await sequelize.transaction();

  try {
    const newSchema = await Schema.create(
      { schema },
      { transaction: t },
    );

    await Exercise.create(
      { name, reps, howTo, mode,
        schemaId: newSchema.id, weightRecord, repsRecord },
      { transaction: t },
    );

    await t.commit();

    return true;
  } catch (error) {
    await t.rollback();
    return error;
  }
};

module.exports = {
  getAll,
  getAllWithSchemas,
  createWithSchema,
};
