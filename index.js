import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongoDB connected successfully");
  })
  .catch((err) => {
    console.log("mongoDB connected failed", err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server is running on port ${process.env.PORT} `);
});
