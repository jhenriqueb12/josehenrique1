const { DataTypes } = require('sequelize');
const db = require('../database');

const Pizza = db.define('Pizza', {
  nome: { type: DataTypes.STRING, allowNull: false },
  preco: { type: DataTypes.FLOAT, allowNull: false },
  ingredientes: { type: DataTypes.TEXT, allowNull: true },
});

module.exports = Pizza;