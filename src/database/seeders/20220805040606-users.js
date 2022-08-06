'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
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
      {
        username: 'johstetic',
        email: 'johsobrancelhas@gmail.com',
        password_hash: 'c4ad7bbc1736af0c67ce557de5f67f8a',
        first_name: 'Joana',
        last_name: 'Santana Gomes',
        birth_date: '2000-03-25',
        active: Sequelize.literal('DEFAULT'),
        created_at: Sequelize.literal('DEFAULT'),
        updated_at: Sequelize.literal('DEFAULT')
      }
    ]);
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.bulkDelete('users', null, {});
  }
};
