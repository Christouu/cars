import mongoose from "mongoose";

const RegionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Regions", RegionSchema);
