'use strict';
const Sequelize = require('sequelize');
const DB_POOL_CONFIG = {
  max: 5,
  min: 0,
  idle: 10000
};

let sequelize = null;


function initSequelize(app) {
  if (!sequelize) {
    let config = app.get('config');
    sequelize = new Sequelize(
      config.mysql.database,
      config.mysql.username,
      config.mysql.password, {
        host: config.mysql.host,
        dialect: 'mysql',
        pool: DB_POOL_CONFIG,
    });

    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
  }

  if (app) {
    app.set('sequelize', sequelize);
  }

  return sequelize;
}

module.exports.init = initSequelize;