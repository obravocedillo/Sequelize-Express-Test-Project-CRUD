const { initializeExpress } = require("./express");
const { initializeSequelize, getSequelize } = require("./sequelize");

// Port that will be uses to listen to requests
const port = process.env.PORT || 3015;

const initializeApp = async (app) => {
  // Initialize sequelize
  await initializeSequelize();

  // Initialize express
  const initializedApp = initializeExpress(app);

  // Create sequelize tables
  const sequelize = getSequelize();
  await sequelize.sync();

  console.log("Database synched");

  initializedApp.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });

  return app;
};

module.exports = {
  initializeApp,
};
