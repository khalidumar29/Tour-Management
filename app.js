const express = require("express");
const cors = require("cors");
const app = express();
const TourRoute = require("./Routes/Tour.route");
/** middleware */
app.use(cors());
app.use(express.json());
/** routes */
app.use("/api/v1/tours", TourRoute);

module.exports = app;
