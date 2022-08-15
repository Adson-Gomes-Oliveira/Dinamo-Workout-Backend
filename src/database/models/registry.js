'use strict';

const Registry = (sequelize, DataTypes) => {
  const Registry = sequelize.define('Registry', {
    userId: DataTypes.INTEGER,
    schemaId: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    rate: DataTypes.INTEGER,
    note: DataTypes.TEXT
  },{
    tableName: 'registries',
    underscored: true,
    updatedAt: false
  });

  Registry.associate = (models) => {
    Registry.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });

    Registry.belongsTo(models.Schema, {
      as: 'schema',
      foreignKey: 'schemaId'
    });
  };

  return Registry;
}

module.exports = Registry;
