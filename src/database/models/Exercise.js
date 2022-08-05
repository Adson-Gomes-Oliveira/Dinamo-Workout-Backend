'use strict';

const Exercise = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    name: DataTypes.STRING,
    reps: DataTypes.INTEGER,
    how_to: DataTypes.STRING,
    mode: DataTypes.STRING
  }, {
    tableName: 'exercises',
    underscored: true
  });

  return Exercise;
};

module.exports = Exercise;
