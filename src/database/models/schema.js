'use strict';

const Schema = (sequelize, DataTypes) => {
  const Schema = sequelize.define('Schema', {
    schema: DataTypes.STRING,
    description: DataTypes.STRING
  },{
    tableName: 'schemas',
    underscored: true,
    timestamps: false
  });

  return Schema;
}

module.exports = Schema;
