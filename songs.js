const { song } = require("../models/song");

const songsService = {
  getAllSongs: async () => {
    const songs = await song.findAll({ include: "artist" });

    return songs;
  },

  saveSong: async (songInformation) => {
    const newSong = await song.create(songInformation);

    return newSong;
  },

  updateSong: async (songId, songInformation) => {
    const updatedSong = await song.update(
      { ...songInformation },
      {
        where: {
          id: songId,
        },
      },
    );

    return updatedSong;
  },

  deleteSong: async (name) => {
    const deletedSong = await song.destroy({
      where: {
        name,
      },
    });

    return deletedSong;
  },
};

module.exports = {
  songsService,
};
