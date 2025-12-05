const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("inventario", "postgres", "TU_PASSWORD", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
