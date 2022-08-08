'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('health', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      height: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
      },
      height: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
      },
      weight: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
      },
      imc: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
      },
      rightArm: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
        field: 'right_arm',
      },
      leftArm: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
        field: 'left_arm',
      },
      rightForearm: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
        field: 'right_forearm',
      },
      leftForearm: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
        field: 'left_forearm',
      },
      rightLeg: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
        field: 'right_leg',
      },
      leftLeg: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
        field: 'left_leg',
      },
      rightCalf: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
        field: 'right_calf',
      },
      leftCalf: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
        field: 'left_calf',
      },
      waistline: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
      },
      chest: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
      },
      sholders: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: 'CASCADE',
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('health');
  }
};