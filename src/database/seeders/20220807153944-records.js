'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('records', [
      {
        user_id: 1,
        schema_id: 2,
        duration: 90,
        rate: 4,
        note: `Foi um bom treino mas pequei um pouco em ir até a falha preciso corrigir.`,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('records', null, {});
  }
};