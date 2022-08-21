module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'root',
        email: 'adsonpersonalemail@gmail.com',
        password: '$2b$10$p.oy.V2j1I9JksmDKExLGez0zesoXmO7ygeC1CSEqsklETbTjaXFO',
        first_name: 'Adson',
        last_name: 'Gomes Oliveira',
        birth_date: '2000-10-10',
        health_id: 1,
        rule: 'admin',
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('users', null, {});
  },
};
