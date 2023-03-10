const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

const Professor = sequelize.define('Professor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  disciplina: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  formacao: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize,
  tableName: 'professor',
  timestamps: false,
});

module.exports = Professor;
