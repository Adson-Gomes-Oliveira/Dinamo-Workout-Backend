const apiError = (errObject) => {
  const err = new Error(errObject.message);
  err.status = errObject.code;
  err.type = 'custom'
  return err;
};

module.exports = apiError;