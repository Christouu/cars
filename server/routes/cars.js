import express from "express";
import Cars from "../models/Cars.js";
import Regions from "../models/Regions.js";

const router = express.Router();

//create car
router.post("/create", async (req, res) => {
  const car = new Cars({
    brand: req.body.brand,
    region: req.body.region,
  });

  try {
    await car.save();
    res.status(201).json("car created");
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all cars
router.get("/", async (req, res) => {
  try {
    const allCars = await Cars.find({});
    res.status(200).json(allCars);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete car
router.delete("/:id", async (req, res) => {
  try {
    await Cars.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("car deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//create region
router.post("/createRegion", async (req, res) => {
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
router.get("/regions", async (req, res) => {
  try {
    const regions = await Regions.find({});

    res.status(200).json(regions);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
