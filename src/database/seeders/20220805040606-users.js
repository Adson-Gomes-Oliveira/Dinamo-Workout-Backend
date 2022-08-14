'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'root',
        email: 'adsonpersonalemail@gmail.com',
        password: '$2b$10$p.oy.V2j1I9JksmDKExLGez0zesoXmO7ygeC1CSEqsklETbTjaXFO',
        first_name: 'Adson',
        last_name: 'Gomes Oliveira',
        birth_date: '2000-10-10',
        health_id: 1
      },
      {
        username: 'johstetic',
        email: 'johsobrancelhas@gmail.com',
        password: '$2b$10$lng2f0H8/dp9UiuuFnxnDOKfsxvUb0PIvWSNZlaoekiFdrDkDlfAa',
        first_name: 'Joana',
        last_name: 'Santana Gomes',
        birth_date: '2001-02-24',
        health_id: 2
      }
    ]);
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.bulkDelete('users', null, {});
  }
};
