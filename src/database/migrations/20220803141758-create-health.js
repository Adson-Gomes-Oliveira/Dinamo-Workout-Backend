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
      },
      height: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
      },
      weight: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
      },
      imc: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
      },
      rightArm: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        field: 'right_arm',
      },
      leftArm: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        field: 'left_arm',
      },
      rightForearm: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        field: 'right_forearm',
      },
      leftForearm: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        field: 'left_forearm',
      },
      rightLeg: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        field: 'right_leg',
      },
      leftLeg: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        field: 'left_leg',
      },
      rightCalf: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        field: 'right_calf',
      },
      leftCalf: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
        field: 'left_calf',
      },
      waistline: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
      },
      chest: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
      },
      sholders: {
        allowNull: false,
        type: Sequelize.FLOAT(4, 2),
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