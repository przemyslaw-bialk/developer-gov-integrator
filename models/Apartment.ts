import mongoose, { Schema } from "mongoose";

const apartmentSchema = new Schema({
  apartmentNumber: {
    type: String,
  },
  priceOfApartment: {
    type: Number,
  },
  pricePerMeterSquare: {
    type: Number,
  },
  dateOfNewPrice: {
    type: String,
  },
  status: {
    enum: ["AVAILABLE", "RESERVED", "SOLD"],
  },
  createdBy: {
    type: String,
  },
  investmentId: {
    type: Schema.Types.ObjectId,
    ref: "Investment",
  },
});

export default mongoose.models.Apartment ||
  mongoose.model("Apartment", apartmentSchema);
