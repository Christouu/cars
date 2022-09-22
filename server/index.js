import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import carRouter from "./routes/cars.js";

mongoose
  .connect(
    "mongodb+srv://admin2:arenabg12345@cluster0.lnbg7.mongodb.net/cars?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB CONNECTED"))
  .catch((e) => console.error(e));

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cars", carRouter);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
