'use strict';

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY,
    healthId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    tableName: 'users',
    underscored: true
  });

  User.associate = (models) => {
    User.belongsTo(models.Health, {
      as: 'health',
      foreignKey: 'healthId'
    });
  };

  return User;
};

module.exports = User;