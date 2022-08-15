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
    include: [
      { model: Schema, as: 'schemas', attributes: { exclude: ['id'] } }
    ]
  });
  return { result: response, code: status.OK };
};

const create = async (payload) => {
  const validPayload = valid.create(payload);
  if(validPayload.message) return validPayload;

  const { name, reps, howTo, mode,
    weightRecord, repsRecord, schema } = payload;

  try {
    const transaction = await sequelize.transaction(async (t) => {
      const newSchema = await Schema.create({ schema }, { transaction: t });

      await Exercise.create({ name, reps, howTo, mode,
          schemaId: newSchema.id, weightRecord, repsRecord }, { transaction: t });

      return { result: payload, code: status.CREATED };
    });

    return transaction;
  } catch (error) {
    return { message: error, code: status.INTERNAL };
  };
};

module.exports = {
  getAll,
  getAllWithSchemas,
  create
};
