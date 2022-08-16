const Users = require('./userRoutes');
const Login = require('./loginRoutes');
const Exercises = require('./exerciseRoutes');
const Schema = require('./schemaRoutes');
const Health = require('./healthRoutes');
const Registry = require('./registryRoutes');
const SchemaExercise = require('./schemaExerciseRoutes');

module.exports = {
  Users,
  Login,
  Exercises,
  Schema,
  Health,
  Registry,
  SchemaExercise
};
