module.exports = {
  async up(queryInterface) {
    queryInterface.bulkInsert('registries', [
      {
        user_id: 1,
        schema_id: 2,
        duration: 90,
        date: '2020-08-07',
        rate: 4,
        note: 'Foi um bom treino mas pequei um pouco em ir até a falha preciso corrigir.',
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('registries', null, {});
  },
};
