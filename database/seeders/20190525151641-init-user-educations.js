'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserEducations', [
      {
        userId: 3,
        institution: 'Babeș-Bolyai University Cluj Napoca - Computer Science',
        description: 'Details regarding what I learned there',
        startDate: '2009-09-01',
        endDate: '2012-09-01'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserEducations', null, {});
  }
};
