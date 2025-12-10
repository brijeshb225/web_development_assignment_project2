import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  equipmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Equipment" },
  userName: String,  // simplified for beginners
  text: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Review", reviewSchema);
