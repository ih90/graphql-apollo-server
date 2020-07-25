'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ContactInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      countryId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
          // Using references you create a reference to another table, without adding any constraints, or associations.
          // Which means that is just a way of signaling the database that this table has a reference to another.
        references: {
          model: "Countries",
          key: "id"
        }
      },
      website: {
        type: Sequelize.STRING
      },
      avatarUrl: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ContactInfos');
  }
};
