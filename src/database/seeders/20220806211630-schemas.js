module.exports = {
  async up(queryInterface) {
    queryInterface.bulkInsert('schemas', [
      {
        schema: 'A',
        description: `Treinar 3 vezes por semana.
        Segunda: Peito, biceps, ombro;
        Quarta: Costas, triceps, antebracos;
        Sexta: Pernas;`,
      },
      {
        schema: 'B',
        description: `Treinar 5 vezes por semana.
        Segunda: Peito, biceps;;
        Terça: Costas, Triceps;
        Quarta: Perna, Ombro;
        Quinta: Peito, Biceps;
        Sexta: Costas, Triceps;`,
      },
      {
        schema: 'C',
        description: '',
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('schemas', null, {});
  },
};
