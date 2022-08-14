'use strict';

const Schema = (sequelize, DataTypes) => {
  const Schema = sequelize.define('Schema', {
    schema: DataTypes.STRING
  },{
    tableName: 'schemas',
    underscored: true,
    updatedAt: false
  });

  Schema.associate = (models) => {
    Schema.hasMany(models.Exercise, {
      as: 'schema',
      foreignKey: 'schema_id'
    });
  };

  return Schema;
}

module.exports = Schema;
