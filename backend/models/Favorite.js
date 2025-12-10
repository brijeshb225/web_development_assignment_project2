import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  equipmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Equipment" }
});

export default mongoose.model("Favorite", favoriteSchema);
