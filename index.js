require("dotenv-flow").config();
require("express-async-errors");

const express = require("express");

const { initializeApp } = require("./src/loaders");

const app = express();

initializeApp(app).catch((err) => {
  console.log(err);
  process.exit(1);
});
