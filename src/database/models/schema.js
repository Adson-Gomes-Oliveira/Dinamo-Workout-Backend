'use strict';

const Schema = (sequelize, DataTypes) => {
  const Schema = sequelize.define('Schema', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    schema: DataTypes.STRING
  },{
    tableName: 'schemas',
    underscored: true,
    timestamps: false
  });

  return Schema;
}

module.exports = Schema;
