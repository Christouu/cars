import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import carRouter from "./routes/cars.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB CONNECTED"))
  .catch((e) => console.error(e));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cars", carRouter);

app.listen(process.env.PORT || 5001, () => {
  console.log("Server is running on port 5001");
});
