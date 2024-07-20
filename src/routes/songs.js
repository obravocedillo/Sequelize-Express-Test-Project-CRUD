const express = require("express");
const { songsController } = require("../controllers/songs");

const songsRouter = express.Router();

songsRouter.get("/", songsController.getSongsController);
songsRouter.post("/", songsController.saveSongController);
songsRouter.put("/", songsController.updateSongController);
songsRouter.delete("/", songsController.deleteSongController);

module.exports = songsRouter;
