'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('health', [
      {
        height: 0,
        weight: 0,
        imc: 0,
        right_arm: 0,
        left_arm: 0,
        right_forearm: 0,
        left_forearm: 0,
        left_arm: 0,
        right_leg: 0,
        left_leg: 0,
        right_calf: 0,
        left_calf: 0,
        waistline: 0,
        chest: 0,
        sholders: 0,
      },
      {
        height: 0,
        weight: 0,
        imc: 0,
        right_arm: 0,
        left_arm: 0,
        right_forearm: 0,
        left_forearm: 0,
        left_arm: 0,
        right_leg: 0,
        left_leg: 0,
        right_calf: 0,
        left_calf: 0,
        waistline: 0,
        chest: 0,
        sholders: 0,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('health', null, {});
  }
};
