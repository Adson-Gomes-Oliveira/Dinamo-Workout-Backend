const JOI = require('joi');
const status = require('../helpers/httpStatus');

const edit = (payload) => {
  if (!(typeof payload === 'object' || Object.values(payload).length >= 1)) {
    return { message: 'Invalid Payload', code: status.BAD_REQUEST };
  }

  const { error } = JOI.object({
    height: JOI.number().required(),
    weight: JOI.number().required(),
    rightArm: JOI.number().required(),
    leftArm: JOI.number().required(),
    rightForearm: JOI.number().required(),
    leftForearm: JOI.number().required(),
    rightLeg: JOI.number().required(),
    leftLeg: JOI.number().required(),
    rightCalf: JOI.number().required(),
    leftCalf: JOI.number().required(),
    waistline: JOI.number().required(),
    chest: JOI.number().required(),
    sholders: JOI.number().required()
  }).validate(payload);

  if (error) {
    return {
      message: error.details[0].message,
      code: status.BAD_REQUEST,
    };
  }

  return {};
}

module.exports = {
  edit
};
