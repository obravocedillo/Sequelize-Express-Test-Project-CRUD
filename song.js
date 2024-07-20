const { DataTypes } = require("Sequelize");

const { getSequelize } = require("../loaders/sequelize");

const sequelize = getSequelize();

const song = sequelize.define(
  "song",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    artistId: {
      type: DataTypes.INTEGER,
    },
  },
  {},
);

module.exports = {
  song,
};
