import mongoose, { Schema } from "mongoose";

const investmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  apartments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Apartment",
    },
  ],
});

export default mongoose.models.Investment ||
  mongoose.model("Investment", investmentSchema);
