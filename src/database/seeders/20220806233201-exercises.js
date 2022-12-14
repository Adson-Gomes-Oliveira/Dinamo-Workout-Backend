module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('exercises', [
      {
        name: 'Supino Reto',
        reps: 10,
        how_to: 'https://www.youtube.com/watch?v=sqOw2Y6uDWQ',
        mode: 'free',
      },
      {
        name: 'Supino Reto',
        reps: 10,
        how_to: 'https://www.youtube.com/watch?v=l7zxARHb7zI',
        mode: 'machine',
      },
      {
        name: 'Pec Deck',
        reps: 10,
        how_to: 'https://www.youtube.com/watch?v=Ru9OVOUlp0U',
        mode: 'machine',
      },
      {
        name: 'Crossover',
        reps: 12,
        how_to: 'https://www.youtube.com/watch?v=HNUji0rHFCs',
        mode: 'machine',
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('exercises', null, {});
  },
};
