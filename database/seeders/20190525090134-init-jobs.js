'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Jobs', [
      { id: 1, name: 'Senior Frontend Engineer (ReactJS)', description: 'We\'re hiring! Start your career as a UI developer', isAvailable: true, companyId: 1 },
      { id: 2, name: 'Full stack developer', description: 'Looking for a passionate full stack developer', isAvailable: true, companyId: 1 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jobs', null, {});
  }
};
