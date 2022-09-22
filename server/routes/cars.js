import express from "express";
import Cars from "../models/Cars.js";

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

export default router;
