const { HTTPS_ERROR_CODE } = require("../constants/main/server");

const handleErrorsMiddleware = (err, req, res, next) => {
  // Default error message
  let errorMessage = "Internal server error please contact support";

  // Check that headers were not already sent, to avoid "Can't set headers after they are sent to the client" error
  if (!res.headersSent) {
    res
      .status(HTTPS_ERROR_CODE)
      .send({ msg: `${errorMessage}: ${err.message}` });
  }

  next();
};

module.exports = {
  handleErrorsMiddleware,
};
