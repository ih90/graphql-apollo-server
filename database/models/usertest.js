'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserTest = sequelize.define('UserTest', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserTest;
};