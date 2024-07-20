const { HTTP_SUCCESS_CODE, HTTPS_ERROR_CODE } = require("../constants/server");
const { songsService } = require("../services/songs");

const songsController = {
  getSongsController: async (req, res, next) => {
    const songs = await songsService.getAllSongs();

    res.status(HTTP_SUCCESS_CODE).send(songs);
  },
  saveSongController: async (req, res, next) => {
    const { name, description, artisId } = req.body;

    if (!name) {
      res.status(HTTPS_ERROR_CODE).send("Song information is required");
    }

    const savedSong = await songsService.saveSong({
      name,
      description,
      artisId,
    });

    res.status(HTTP_SUCCESS_CODE).send(savedSong);
  },
  updateSongController: async (req, res, next) => {
    const { songId, song } = req.body;

    if (!songId || !song) {
      res.status(HTTPS_ERROR_CODE).send("Song information is required");
    }

    const updatedSong = await songsService.updateSong(songId, song);

    res.status(HTTP_SUCCESS_CODE).send({ msg: "Success" });
  },
  deleteSongController: async (req, res, next) => {
    const { name } = req.body;

    if (!name) {
      res.status(HTTPS_ERROR_CODE).send("Song information is required");
    }

    const deletedSong = await songsService.deleteSong(name);

    res.status(HTTP_SUCCESS_CODE).send({ msg: "Success" });
  },
};

module.exports = { songsController };
