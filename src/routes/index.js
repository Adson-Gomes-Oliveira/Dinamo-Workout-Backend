const Users = require('./userRoutes');
const SignIn = require('./signInRoutes');
const Exercises = require('./exerciseRoutes');
const Schema = require('./schemaRoutes');
const Health = require('./healthRoutes');
const Records = require('./recordRoutes');

module.exports = {
  Users,
  SignIn,
  Exercises,
  Schema,
  Health,
  Records,
};
