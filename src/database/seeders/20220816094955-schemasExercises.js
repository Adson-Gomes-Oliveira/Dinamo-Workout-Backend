'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('schemas_exercises', [
      {
        schema_id: 1,
        exercise_id: 1
      },
      {
        schema_id: 1,
        exercise_id: 2
      },
      {
        schema_id: 1,
        exercise_id: 3
      },
      {
        schema_id: 2,
        exercise_id: 4
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('schemas_exercises', null, {});
  }
};
