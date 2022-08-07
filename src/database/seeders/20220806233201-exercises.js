'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('exercises', [
      {
        name: 'Supino Reto',
        reps: 10,
        how_to: 'https://www.youtube.com/watch?v=sqOw2Y6uDWQ',
        mode: 'free',
        schema_id: 1,
      },
      {
        name: 'Supino Reto',
        reps: 10,
        how_to: 'https://www.youtube.com/watch?v=l7zxARHb7zI',
        mode: 'machine',
        schema_id: 1,
      },
      {
        name: 'Pec Deck',
        reps: 10,
        how_to: 'https://www.youtube.com/watch?v=Ru9OVOUlp0U',
        mode: 'machine',
        schema_id: 1,
      },
      {
        name: 'Crossover',
        reps: 12,
        how_to: 'https://www.youtube.com/watch?v=HNUji0rHFCs',
        mode: 'machine',
        schema_id: 1,
      }
    ]);
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.bulkDelete('exercises', null, {});
  }
};