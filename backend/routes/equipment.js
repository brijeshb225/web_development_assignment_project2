import express from "express";
import Equipment from "../models/Equipment.js";
import Review from "../models/Review.js";

const router = express.Router();

// Get all equipment
router.get("/", async (req, res) => {
  const { q } = req.query;
  try {
    const equipments = await Equipment.find(
      q ? { name: { $regex: q, $options: "i" } } : {}
    );
    res.json(equipments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get equipment by ID with reviews
router.get("/:id", async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    const reviews = await Review.find({ equipmentId: req.params.id });
    res.json({ equipment, reviews });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Post a review (no auth)
router.post("/:id/reviews", async (req, res) => {
  const { userName, text, rating } = req.body;
  try {
    const review = new Review({
      equipmentId: req.params.id,
      userName,
      text,
      rating
    });
    await review.save();
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
