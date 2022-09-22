import express from "express";
import Regions from "../models/Regions.js";

const router = express.Router();

//create region
router.post("/create", async (req, res) => {
  const region = new Regions({
    name: req.body.name,
  });

  try {
    await region.save();
    res.status(201).json("region created");
  } catch (error) {
    res.status(500).json(error);
  }
});

// get regions
router.get("/", async (req, res) => {
  try {
    const regions = await Regions.find({});

    res.status(200).json(regions);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
