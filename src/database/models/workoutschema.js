'use strict';

/**
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} DataTypes
*/

const workoutSchema = (sequelize, DataTypes) => {
  const workoutSchema = sequelize.define('workoutSchema', {
    schema: DataTypes.STRING,
    description: DataTypes.TEXT
  },{
    tableName: 'workout_schemas',
    underscored: true
  });

  return workoutSchema;
}

module.exports = workoutSchema;
