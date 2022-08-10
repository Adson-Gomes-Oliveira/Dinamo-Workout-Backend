const { Exercise, Schema } = require('../database/models/index');
const valid = require('../validations/exerciseValidate');
const status = require('../helpers/httpStatus');
const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const getAll = async () => {
  const response = await Exercise.findAll();
  return { result: response, code: status.OK };
};
const getAllWithSchemas = async () => {
  const response = await Exercise.findAll({
    include: [{
      model: Schema, as: 'schema', attributes: { exclude: ['id'] },
    }],
  });
  return { result: response, code: status.OK };
};
const createWithSchema = async (payload) => {
  if(Object.keys(payload).length < 1) {
    return { message: 'Payload is empty', code: status.INVALID_ENTITY };
  };

  const validPayload = valid.create(payload);
  if(validPayload.message) return validPayload;

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

    return { result: payload, code: status.CREATED };
  } catch (error) {
    return { result: error, code: status.INTERNAL };
  };
};

module.exports = {
  getAll,
  getAllWithSchemas,
  createWithSchema,
};
