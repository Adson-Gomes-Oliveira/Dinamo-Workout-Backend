'use strict';

const SchemaExercise = (sequelize, DataTypes) => {
  const SchemaExercise = sequelize.define('SchemaExercise', {},
  {
    timestamps: false,
    tableName: 'schemas_exercises',
    underscored: true
  });

  SchemaExercise.associate = (models) => {
    models.Schema.belongsToMany(models.Exercise, {
      as: 'exercises',
      through: SchemaExercise,
      foreignKey: 'schema_id',
      otherKey: 'exercise_id'
    });
    models.Exercise.belongsToMany(models.Schema, {
      as: 'schemas',
      through: SchemaExercise,
      foreignKey: 'exercise_id',
      otherKey: 'schema_id'
    });
  };

  return SchemaExercise;
}

module.exports = SchemaExercise;
