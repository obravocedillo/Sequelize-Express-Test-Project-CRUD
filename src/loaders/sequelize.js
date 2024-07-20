const { Sequelize } = require("sequelize");

var sequelize;

const initializeSequelize = async () => {
  sequelize = new Sequelize({
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });

  await sequelize.authenticate();

  console.log("Sequelize initialized!");
};

const getSequelize = () => {
  return sequelize;
};

module.exports = {
  initializeSequelize,
  getSequelize,
};
