const { artist } = require("../models/artist");

const artistsService = {
  getAllArtists: async () => {
    const artists = await artist.findAll({ include: "songs" });

    return artists;
  },

  saveArtist: async (artistInformation) => {
    const newArtist = await artist.create(artistInformation);

    return newArtist;
  },

  updateArtist: async (artistId, artistInformation) => {
    const updatedArtist = await artist.update(
      { ...artistInformation },
      {
        where: {
          id: artistId,
        },
      },
    );

    return updatedArtist;
  },

  deleteArtist: async (name) => {
    const deletedArtist = await artist.destroy({
      where: {
        name,
      },
    });

    return deletedArtist;
  },
};

module.exports = {
  artistsService,
};
