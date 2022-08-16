'use strict';

const SchemasExercises = (sequelize, DataTypes) => {
  const SchemasExercises = sequelize.define('SchemasExercises', {
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

  SchemasExercises.associate = function(models) {
    models.Schema.belongsToMany(models.Exercise, {
      as: 'exercises',
      through: SchemasExercises,
      foreignKey: 'exerciseId',
      otherKey: 'schemaId'
    });
    models.Exercise.belongsToMany(models.Schema, {
      as: 'schemas',
      through: SchemasExercises,
      foreignKey: 'schemaId',
      otherKey: 'exerciseId'
    });
  };

  return SchemasExercises;
}

module.exports = SchemasExercises;
