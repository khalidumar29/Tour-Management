const express = require("express");
const cors = require("cors");
const app = express();
/** middleware */
app.use(cors());
app.use(express.json());
/** routes */

/** root route */
app.get("/", (req, res) => {
  res.send("server is running 🏃🏃‍♂️🏃‍♀️");
});
module.exports = app;
