'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE'
      },
      schemaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'schema_id',
        references: {
          model: 'schemas',
          key: 'id',
        },
        onDelete: 'CASCADE'
      },
      duration: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      rate: {
        type: Sequelize.INTEGER
      },
      note: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('records');
  }
};