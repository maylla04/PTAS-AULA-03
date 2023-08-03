const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "postgres://qwcznejt:UZU7YMC61GC0e7F9xyLYdy_AhEgLLx75@silly.db.elephantsql.com/qwcznejt", {
  define: {
    timetamps: true,
    underscored: true,
  },
});

try {
  sequelize.authenticate();
  console.log('Conectado com o ElephantSQL!');
} catch (error) {
  console.error('Anteção, a conexão falhou!:', error);
}

module.exports = { Sequelize, sequelize };