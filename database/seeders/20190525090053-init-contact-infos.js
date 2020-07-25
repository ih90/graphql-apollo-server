'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ContactInfos', [
      {
        id: 1,
        email: 'contact@moduscreate.com',
        phone: '+40-0786-887-444',
        address: 'Str. Mihai Veliciu, no. 17',
        city: 'Cluj Napoca',
        countryId: 153,
        website: 'https://moduscreate.com/',
        avatarUrl: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        about: 'Digital transformation company ...'
      },
      {
        id: 2,
        email: 'horatiu.istovan@moduscreate.com',
        phone: '+4071234567',
        address: 'Somewhere in Cluj',
        city: 'Cluj Napoca',
        countryId: 153,
        website: 'www.linkedin.com/in/horatiu-istovan',
        avatarUrl: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        about: 'Passionate developer @Modus Create.'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ContactInfos', null, {});
  }
};
