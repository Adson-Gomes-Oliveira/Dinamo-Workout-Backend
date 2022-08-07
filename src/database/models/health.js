'use strict';

/**
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} DataTypes
*/

const Health = (sequelize, DataTypes) => {
  const Health = sequelize.define('Health', {
    height: DataTypes.FLOAT(4, 2),
    weight: DataTypes.FLOAT(4, 2),
    imc: DataTypes.FLOAT(4, 2),
    rightArm: DataTypes.FLOAT(4, 2),
    leftArm: DataTypes.FLOAT(4, 2),
    rightForearm: DataTypes.FLOAT(4, 2),
    leftForearm: DataTypes.FLOAT(4, 2),
    leftArm: DataTypes.FLOAT(4, 2),
    rightLeg: DataTypes.FLOAT(4, 2),
    leftLeg: DataTypes.FLOAT(4, 2),
    rightCalf: DataTypes.FLOAT(4, 2),
    leftCalf: DataTypes.FLOAT(4, 2),
    waistline: DataTypes.FLOAT(4, 2),
    chest: DataTypes.FLOAT(4, 2),
    sholders: DataTypes.FLOAT(4, 2),
  }, {
    tableName: 'health',
    underscored: true,
  });

  return Health;
};

module.exports = Health;
