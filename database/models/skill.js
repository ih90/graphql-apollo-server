'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // ...
      }
    }
  });
  return Skill;
};
