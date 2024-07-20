const express = require("express");

const { HTTP_SUCCESS_CODE } = require("../constants/main/server");

const songsRouter = require("./songs");
const artistsRouter = require("./artists");

const mainRouter = express.Router();

mainRouter.get("/health", (req, res) => {
  res.status(HTTP_SUCCESS_CODE).send("Working");
});

mainRouter.use("/songs", songsRouter);
mainRouter.use("/artists", artistsRouter);

module.exports = mainRouter;
