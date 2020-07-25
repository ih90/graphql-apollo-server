'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserWorkExperiences', [
      {
        userId: 3,
        institution: 'Modus Create - Front end developer',
        description: 'Details regarding my job position',
        startDate: '2018-06-13',
        endDate: '2099-09-01'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserWorkExperiences', null, {});
  }
};
