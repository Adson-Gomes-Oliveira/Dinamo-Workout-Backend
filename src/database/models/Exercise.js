'use strict';

const Exercise = (sequelize, DataTypes) => {
  const Exercise = sequelize.define({
    name: DataTypes.STRING,
    reps: DataTypes.INTEGER,
    how_to: DataTypes.STRING,
    difficult: DataTypes.STRING
  }, {
    tableName: 'exercises',
    underscored: true
  });

  return Exercise;
};

module.exports = Exercise;
