const mongoose = require("mongoose");
require("dotenv").config();
//const { connectToServer } = require("./utils/DBConnect");
const app = require("./app");
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(port, "is running");
});
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log("connected to database");
});
