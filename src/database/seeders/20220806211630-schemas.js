'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('schemas', [
      {
        schema: 'A',
        created_at: Sequelize.literal('DEFAULT'),
      },
      {
        schema: 'B',
        created_at: Sequelize.literal('DEFAULT'),
      },
      {
        schema: 'C',
        created_at: Sequelize.literal('DEFAULT'),
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.bulkDelete('schemas', null, {});
  }
};
