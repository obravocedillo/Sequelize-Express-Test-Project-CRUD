const { DataTypes, HasMany } = require("Sequelize");

const { getSequelize } = require("../loaders/sequelize");
const { song } = require("./song");

const sequelize = getSequelize();

const artist = sequelize.define("artist", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

song.belongsTo(artist, { as: "artist" });
artist.hasMany(song, { as: "songs" });

module.exports = {
  artist,
};
