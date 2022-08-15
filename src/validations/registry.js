const JOI = require('joi');
const status = require('../helpers/httpStatus');

const payloadRules = {
  verifyUsername: JOI.object({ username: JOI.string().min(3).required() }),
  verifySchema : JOI.object({ schema: JOI.string().min(1).max(1).required() }),
  verifyDuration : JOI.object({ duration: JOI.number().min(1).required() }),
  verifyDate : JOI.object({ date: JOI.date().required() }),
  verifyRating : JOI.object({ rating: JOI.number().min(1).required() }),
  verifyDescription : JOI.object({ description: JOI.string().required() }),
}

const verifyPayload = (payload) => {
  const { username, schema, duration, date, rating, description } = payload;

  return {
    usernameValid: payloadRules.verifyUsername.validate({ username }),
    schemaValid: payloadRules.verifySchema.validate({ schema }),
    durationValid: payloadRules.verifyDuration.validate({ duration }),
    dateValid: payloadRules.verifyDate.validate({ date }),
    ratingValid: payloadRules.verifyRating.validate({ rating }),
    descriptionValid: payloadRules.verifyDescription.validate({ description })
  }
}

const create = (payload) => {
  if (!(typeof payload === 'object' || Object.values(payload).length < 1)) {
    return { message: 'Invalid Payload', code: status.BAD_REQUEST };
  }

  const validation = verifyPayload(payload);

  if (validation.usernameValid.error
    || validation.schemaValid.error
    || validation.durationValid.error
    || validation.dateValid.error
    || validation.ratingValid.error
    || validation.descriptionValid.error) {
      return {
        message: 'Some data is invalid or missing',
        code: status.BAD_REQUEST
      };
    }

  return {};
}

module.exports = {
  create,
}
