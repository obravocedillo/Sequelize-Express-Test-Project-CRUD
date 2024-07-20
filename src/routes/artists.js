const express = require("express");
const { artistsController } = require("../controllers/artists");

const artistsRouter = express.Router();

artistsRouter.get("/", artistsController.getArtistsController);
artistsRouter.post("/", artistsController.saveArtistController);
artistsRouter.put("/", artistsController.updateArtistController);
artistsRouter.delete("/", artistsController.deleteArtistController);

module.exports = artistsRouter;
