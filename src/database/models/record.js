'use strict';

/**
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} DataTypes
*/

const Record = (sequelize, DataTypes) => {
  const Record = sequelize.define('Record', {
    userId: DataTypes.INTEGER,
    schemaId: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    rate: DataTypes.INTEGER,
    note: DataTypes.TEXT,
  },{
    tableName: 'records',
    underscored: true,
    updatedAt: false,
  });

  Record.associate = (models) => {
    Record.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  Record.associate = (models) => {
    Record.belongsTo(models.Schema, {
      as: 'schema',
      foreignKey: 'schemaId',
    });
  };

  return Record;
}

module.exports = Record;
