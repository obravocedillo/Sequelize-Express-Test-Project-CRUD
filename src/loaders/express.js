const express = require("express");
const { handleErrorsMiddleware } = require("../middleware/error");

const initializeExpress = (app) => {
  const mainRouter = require("../routes/main");

  app.use(express.json());
  app.use(mainRouter);
  app.use(handleErrorsMiddleware);

  console.log("Express initialized!");

  return app;
};

module.exports = {
  initializeExpress,
};
