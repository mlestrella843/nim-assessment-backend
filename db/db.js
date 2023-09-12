const mongoose = require("mongoose");
const getLogger = require("../logger");

const logger = getLogger("db");

const { MONGO_URI, DB_NAME } = process.env;
const connectionString = MONGO_URI || "mongodb://localhost:27018/restaurant";
mongoose
  .connect(`${connectionString}/${DB_NAME}?retryWrites=true&w=majority`)
  .then(() => {
    logger.log("Connected to MongoDB");
  })
  .catch((error) => logger.error(error.message));

module.exports = mongoose;
