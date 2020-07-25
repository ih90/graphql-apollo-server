'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Skills', [
      { id: 1, name: 'HTML' },
      { id: 2, name: 'CSS'},
      { id: 3, name: 'JS'},
      { id: 4, name: 'React' },
      { id: 5, name: 'Apollo'},
      { id: 6, name: 'Sequalize'},
        { id: 7, name: 'GraphQL'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Skills', null, {});
  }
};
