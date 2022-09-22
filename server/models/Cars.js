import mongoose from "mongoose";

const CarsSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      maxLength: 20,
    },
    region: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cars", CarsSchema);
