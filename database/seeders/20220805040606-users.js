'use strict';

module.exports = {
  
/**
* @param {import('sequelize').Sequelize} Sequelize
* @param {import('sequelize').queryInterface} queryInterface
*/

  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('users', [
      {
        username: 'root',
        email: 'adsonpersonalemail@gmail.com',
        password_hash: '',
        first_name: 'Adson',
        last_name: 'Gomes Oliveira',
        birth_date: '2000-10-10',
        active: Sequelize.literal('DEFAULT'),
        created_at: Sequelize.literal('DEFAULT'),
        updated_at: Sequelize.literal('DEFAULT')
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('users', null, {});
  }
};
