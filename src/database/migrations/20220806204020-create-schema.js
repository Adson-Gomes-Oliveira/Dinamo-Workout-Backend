'use strict';

module.exports = {

/**
* @param {import('sequelize').Sequelize} Sequelize
* @param {import('sequelize').queryInterface} queryInterface
*/

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('schemas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      schema: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('schemas');
  }
};