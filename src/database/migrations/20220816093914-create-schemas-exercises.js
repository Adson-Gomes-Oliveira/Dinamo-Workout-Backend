'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('schemas_exercises', {
      schemaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'schema_id',
        references: {
          model: 'schemas',
          key: 'id'
        }
      },
      exerciseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'exercise_id',
        references: {
          model: 'exercises',
          key: 'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('schemas_exercises');
  }
};