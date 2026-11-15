import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema(
  {
    // get this from kinde!
    userId: {
      type: String,
      required: true,
    },
    developerName: {
      type: String,
      required: true,
      trim: true,
    },
    legalFormOfBusiness: {
      type: String,
      required: true,
    },
    krsNumber: {
      type: String,
      trim: true,
    },
    ceidgNumber: {
      type: String,
      trim: true,
    },
    vatNumber: {
      type: String,
      trim: true,
      required: true,
    },
    regonNumber: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    developerCity: {
      type: String,
    },
    developerPostalCode: {
      type: String,
    },
    developerStreetName: {
      type: String,
    },
    developerStreetNumber: {
      type: String,
    },
    prospectusUrl: {
      type: String,
    },
    developerProvince: {
      type: String,
      trim: true,
      required: true,
    },
    developerCounty: {
      type: String,
      trim: true,
      required: true,
    },
    developerMunicipality: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Profile ||
  mongoose.model("Profile", profileSchema);
