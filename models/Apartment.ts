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
});

export default mongoose.models.Apartment ||
  mongoose.model("Apartment", apartmentSchema);
