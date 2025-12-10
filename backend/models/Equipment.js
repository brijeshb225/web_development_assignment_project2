import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
});

export default mongoose.model("Equipment", equipmentSchema);
