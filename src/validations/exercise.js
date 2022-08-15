const JOI = require('joi');
const status = require('../helpers/httpStatus');

const errorObjects = {
  payloadName: { message: 'The name is required', code: status.BAD_REQUEST },
  payloadReps: { message: 'Must be a number ( max 20 )', code: status.BAD_REQUEST },
  payloadHowTo: { message: 'Must be a link', code: status.BAD_REQUEST },
  payloadMode: { message: 'Must be free or machine', code: status.BAD_REQUEST },
  payloadRecord: { message: 'Must be a number', code: status.BAD_REQUEST },
  payloadSchema: { message: 'Must be a string ( max 1 )', code: status.BAD_REQUEST },
};

const payloadRules = {
  validateName: JOI.object({ name: JOI.string().required() }),
  validateReps: JOI.object({ reps: JOI.number().max(20).required() }),
  validateRecord: JOI.object({ 
    weightRecord: JOI.number(),
    repsRecord: JOI.number(),
  }),
  validateSchema: JOI.object({ schema: JOI.string().min(1).max(1).required() }),
};

const validatePayloadStrings = (string) => {
  if (string.includes('https://')
  || string === 'free'
  || string === 'machine') return true;

  return false;
};

const create = (payload) => {
  if (Object.values(payload).length < 1) {
    return errorObjects.payloadName;
  }

  const { name, reps, howTo, mode, weightRecord, repsRecord, schema } = payload;
  const validName = payloadRules.validateName.validate({ name });
  const validReps = payloadRules.validateReps.validate({ reps });
  const validRecord = payloadRules.validateRecord.validate({ 
    weightRecord,
    repsRecord,
  });
  const validSchema = payloadRules.validateSchema.validate({ schema });
  const validHowTo = validatePayloadStrings(howTo);
  const validMode = validatePayloadStrings(mode);

  if (validName.error) return errorObjects.payloadName;
  if (validReps.error) return errorObjects.payloadReps;
  if (validRecord.error) return errorObjects.payloadRecord;
  if (validSchema.error) return errorObjects.payloadSchema;
  if (!validHowTo) return errorObjects.payloadHowTo;
  if (!validMode) return errorObjects.payloadMode;

  return {};
};

module.exports = {
  create,
};
