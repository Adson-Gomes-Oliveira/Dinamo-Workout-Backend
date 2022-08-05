'use strict';

module.exports = {

/**
* @param {import('sequelize').Sequelize} Sequelize
* @param {import('sequelize').queryInterface} queryInterface
*/

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('workout_schemas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      schema: {
        allowNull: false,
        type: Sequelize.STRING
      },
      exerciseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        field: 'exercise_id',
        references: {
          model: 'exercise',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: 'CASCADE',
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('workout_schemas');
  }
};