const JOI = require('joi');
const status = require('../helpers/httpStatus');

const payloadRules = {
  verifyUsername: JOI.object({ username: JOI.string().min(3).required() }),
  verifyEmail: JOI.object({ email: JOI.string().email().required() }),
  verifyPassword: JOI.object({ passwordNoCrypt: JOI.string().min(8).required() }),
  verifyFirstName: JOI.object({ firstName: JOI.string().min(3).required() }),
  verifyLastName: JOI.object({ lastName: JOI.string().min(3).required() }),
  verifyBirthDate: JOI.object({ birthDate: JOI.date().required() })
};

const verifyPayload = (payload) => {
  if (!payload.passwordNoCrypt) {
    const { username, email, firstName, lastName, birthDate } = payload;

    return {
      usernameValid: payloadRules.verifyUsername.validate({ username }),
      emailValid: payloadRules.verifyEmail.validate({ email }),
      firstNameValid: payloadRules.verifyFirstName.validate({ firstName }),
      lastNameValid: payloadRules.verifyLastName.validate({ lastName }),
      birthDateValid: payloadRules.verifyBirthDate.validate({ birthDate })
    }
  }

  const { username, email, passwordNoCrypt, 
    firstName, lastName, birthDate } = payload;

  return {
    usernameValid: payloadRules.verifyUsername.validate({ username }),
    emailValid: payloadRules.verifyEmail.validate({ email }),
    passwordValid: payloadRules.verifyPassword.validate({ passwordNoCrypt }),
    firstNameValid: payloadRules.verifyFirstName.validate({ firstName }),
    lastNameValid: payloadRules.verifyLastName.validate({ lastName }),
    birthDateValid: payloadRules.verifyBirthDate.validate({ birthDate })
  }
};

const create = (payload) => {
  if (!(typeof payload === 'object' || Object.values(payload).length >= 1)) {
    return { message: 'Invalid Payload', code: status.BAD_REQUEST };
  }

  const validation = verifyPayload(payload);

  if (validation.usernameValid.error) {
    return {
      message: validation.usernameValid.error.details[0].message, 
      code: status.BAD_REQUEST
    };
  };
  if (validation.emailValid.error || validation.passwordValid.error) {
    return {
      message: 'Email or Password is invalid', 
      code: status.BAD_REQUEST
    };
  };
  if (validation.firstNameValid.error || validation.lastNameValid.error) {
    return {
      message: 'First Name or Last Name is invalid', 
      code: status.BAD_REQUEST
    };
  };
  if (validation.birthDateValid.error) {
    return {
      message: validation.birthDateValid.error.details[0].message,
      code: status.BAD_REQUEST
    };
  };

  return {};
};

const edit = (payload) => {
  if (!(typeof payload === 'object' || Object.values(payload).length < 1)) {
    return { message: 'Invalid Payload', code: status.BAD_REQUEST };
  }

  const validation = verifyPayload(payload);

  if (validation.usernameValid.error) {
    return {
      message: validation.usernameValid.error.details[0].message, 
      code: status.BAD_REQUEST
    };
  };
  if (validation.emailValid.error) {
    return {
      message: 'Email is invalid', 
      code: status.BAD_REQUEST
    };
  };
  if (payload.passwordNoCrypt) {
    if (validation.passwordValid.error) {
      return {
        message: 'Password is invalid', 
        code: status.BAD_REQUEST
      };
    }
  }
  if (validation.firstNameValid.error || validation.lastNameValid.error) {
    return {
      message: 'First Name or Last Name is invalid', 
      code: status.BAD_REQUEST
    };
  };
  if (validation.birthDateValid.error) {
    return {
      message: validation.birthDateValid.error.details[0].message,
      code: status.BAD_REQUEST
    };
  };

  return {};
};

module.exports = {
  create,
  edit,
};
