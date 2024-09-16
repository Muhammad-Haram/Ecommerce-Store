const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://expobird:QodBZdVCvze1il0m@ecommerce.yg12r.mongodb.net/"
  )
  .then(() => {
    console.log("mongoDB connected successfully");
  })
  .catch((err) => {
    console.log("mongoDB connected failed", err);
  });

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
