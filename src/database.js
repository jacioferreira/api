const Sequelize = require('sequelize');

const sequelize = new Sequelize('atividadePwii', 'aluno.ifal', 'aluno.ifal', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
