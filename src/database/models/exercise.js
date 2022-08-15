'use strict';

const Exercise = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    name: DataTypes.STRING,
    reps: DataTypes.INTEGER,
    howTo: DataTypes.STRING,
    mode: DataTypes.STRING,
    schemaId: DataTypes.INTEGER,
    weightRecord: DataTypes.INTEGER,
    repsRecord: DataTypes.INTEGER
  }, {
    tableName: 'exercises',
    underscored: true
  });

  Exercise.associate = (models) => {
    Exercise.belongsTo(models.Schema, {
      as: 'schemas',
      foreignKey: 'schemaId'
    });
  };

  return Exercise;
};

module.exports = Exercise;
