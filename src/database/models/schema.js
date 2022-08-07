'use strict';

/**
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} DataTypes
*/

const Schema = (sequelize, DataTypes) => {
  const Schema = sequelize.define('Schema', {
    schema: DataTypes.STRING,
  },{
    tableName: 'schemas',
    underscored: true,
    updatedAt: false,
  });

  return Schema;
}

module.exports = Schema;
