'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      reps: {
        type: Sequelize.INTEGER
      },
      howTo: {
        type: Sequelize.STRING,
        field: 'how_to'
      },
      mode: {
        allowNull: false,
        type: Sequelize.STRING
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
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('exercises');
  }
};