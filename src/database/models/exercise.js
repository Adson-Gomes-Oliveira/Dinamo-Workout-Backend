'use strict';

const Exercise = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    reps: DataTypes.INTEGER,
    howTo: DataTypes.STRING,
    mode: DataTypes.STRING,
    weightRecord: DataTypes.INTEGER,
    repsRecord: DataTypes.INTEGER
  }, {
    tableName: 'exercises',
    underscored: true
  });

  return Exercise;
};

module.exports = Exercise;
