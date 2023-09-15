const express = require("express");
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

// Testing req.query
app.all("/test", (req, res) => {
  res.send(req.query);
  // localhost:3001/test?name=Pizza
});

// app.all('/api/menu/search', (req, res) => {
//   res.send(req.query);
//  // localhost:3001/api/menu/search?name=Pizza
// });

// app.all('/api/orders/total-sales', (req, res) => {
//   res.send("Hello Orders sales");
// });

const server = app.listen(PORT, () => {
  logger.log(`Server running on port ${PORT}`);
});

module.exports = server;
