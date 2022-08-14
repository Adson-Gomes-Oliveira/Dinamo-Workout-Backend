'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    queryInterface.bulkInsert('schemas', [
      {
        schema: 'A'
      },
      {
        schema: 'B'
      },
      {
        schema: 'C'
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.bulkDelete('schemas', null, {});
  }
};
