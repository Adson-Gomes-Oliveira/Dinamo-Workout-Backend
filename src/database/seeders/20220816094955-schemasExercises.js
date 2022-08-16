'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('schemas_exercises', [
      {
        schemaId: 1,
        exerciseId: 1
      },
      {
        schemaId: 1,
        exerciseId: 2
      },
      {
        schemaId: 1,
        exerciseId: 3
      },
      {
        schemaId: 2,
        exerciseId: 1
      }
    ], { timestamps: false });
},
  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('schemas_exercises', null, {});
  }
};
