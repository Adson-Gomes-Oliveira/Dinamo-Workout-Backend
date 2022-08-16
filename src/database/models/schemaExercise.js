'use strict';

const SchemaExercise = (sequelize, DataTypes) => {
  const SchemaExercise = sequelize.define('SchemaExercise', {
    schemaId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    exerciseId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    timestamps: false,
    tableName: 'schemas_exercises',
    underscored: true
  });

  SchemaExercise.associate = function(models) {
    models.Schema.belongsToMany(models.Exercise, {
      as: 'exercises',
      through: SchemaExercise,
      foreignKey: 'exerciseId',
      otherKey: 'schemaId'
    });
    models.Exercise.belongsToMany(models.Schema, {
      as: 'schemas',
      through: SchemaExercise,
      foreignKey: 'schemaId',
      otherKey: 'exerciseId'
    });
  };

  return SchemaExercise;
}

module.exports = SchemaExercise;
