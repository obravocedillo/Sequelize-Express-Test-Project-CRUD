const { HTTP_SUCCESS_CODE, HTTPS_ERROR_CODE } = require("../constants/server");
const { artistsService } = require("../services/artists");

const artistsController = {
  getArtistsController: async (req, res, next) => {
    const artists = await artistsService.getAllArtists();

    res.status(HTTP_SUCCESS_CODE).send(artists);
  },
  saveArtistController: async (req, res, next) => {
    const { name } = req.body;

    if (!name) {
      res.status(HTTP_SUCCESS_CODE).send("Artist information is required");
    }

    const savedArtist = await artistsService.saveArtist({ name });

    res.status(HTTP_SUCCESS_CODE).send(savedArtist);
  },
  updateArtistController: async (req, res, next) => {
    const { artistId, artist } = req.body;

    if (!artistId || !artist) {
      res.status(HTTPS_ERROR_CODE).send("Artist information is required");
    }

    const updatedArtist = await artistsService.updateArtist(artistId, artist);

    res.status(HTTP_SUCCESS_CODE).send({ msg: "Success" });
  },
  deleteArtistController: async (req, res, next) => {
    const { name } = req.body;

    if (!name) {
      res.status(HTTPS_ERROR_CODE).send("Artist information is required");
    }

    const deletedArtist = await artistsService.deleteArtist(name);

    res.status(HTTP_SUCCESS_CODE).send({ msg: "Success" });
  },
};

module.exports = { artistsController };
