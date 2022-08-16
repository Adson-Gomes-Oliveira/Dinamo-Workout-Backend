const { Exercise, Schema, SchemasExercises } = require('../database/models/index');
const valid = require('../validations/exercise');
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

const createWithSchema = async (payload) => {
  const { name, reps, howTo, mode,
    weightRecord, repsRecord, schema } = payload;

  try {
    const transaction = await sequelize.transaction(async (t) => {
      const newSchema = await Schema.create({ schema }, { transaction: t });

      const newExercise = await Exercise.create({ name, reps, howTo, mode,
        weightRecord, repsRecord }, { transaction: t });
      
      await SchemasExercises.create({ schemaId: newSchema.id, 
        exerciseId: newExercise.id }, { transaction: t });

      return { result: payload, code: status.CREATED };
    });

    return transaction;
  } catch (error) {
    return { message: error, code: status.INTERNAL };
  };
};

const createWithoutSchema = async (payload, id) => {
  const { name, reps, howTo, mode,
    weightRecord, repsRecord } = payload;
  
  try {
    const transaction = sequelize.transaction(async (t) => {
      const newExercise = await Exercise.create({ name, reps, howTo, mode,
        weightRecord, repsRecord }, { transaction: t });

      await SchemasExercises.create({ schemaId: id,
        exerciseId: newExercise.id }, { transaction: t });

      return { result: payload, code: status.CREATED };
    });

    return transaction;
  } catch (error) {
    return { message: error, code: status.INTERNAL };
  };
};

const create = async (payload) => {
  const validPayload = valid.create(payload);
  if(validPayload.message) return validPayload;

  const { schema } = payload;

  const schemaExists = await Schema.findOne({ where: { schema } });

  if (schemaExists) return createWithoutSchema(payload, schemaExists.id);
  if (!schemaExists) return createWithSchema(payload);
};

module.exports = {
  getAll,
  getAllWithSchemas,
  create
};
