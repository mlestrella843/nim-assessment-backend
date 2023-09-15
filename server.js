const express = require('express');
require("dotenv").config();
const cors = require("cors");
const getLogger = require("./logger");
const apiRouter = require("./routes/apiRouter");

const { PORT } = process.env;
const logger = getLogger("server");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

//Testing req.query
app.all('/test', (req, res) => {
  res.send(req.query);
})

// app.all('/api/menu/search', (req, res) => {
//   res.send(req.query);
// })

const server = app.listen(PORT, () => {
  logger.log(`Server running on port ${PORT}`);
});

module.exports = server;
