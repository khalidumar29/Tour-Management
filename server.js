const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(port, "is running");
});
mongoose.connect(process.env.DATABASE_URI).then(() => {
  console.log("connected to database");
});

/** root route */
app.get("/", (req, res, next) => {
  try {
    res.send("server is running🏃 🏃‍♂️ 🏃‍♀️");
  } catch (error) {
    next(error);
  }
});
