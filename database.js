const { Sequelize } = require('sequelize');

const useSQLite = true;

const sequelize = useSQLite
  ? new Sequelize({
      dialect: 'sqlite',
      storage: './database.sqlite',
    })
  : new Sequelize('pizza_db', 'root', 'senha', {
      host: 'localhost',
      dialect: 'mysql',
    });

module.exports = sequelize;