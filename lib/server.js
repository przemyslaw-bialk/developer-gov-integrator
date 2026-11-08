import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Brak MONGODB_URI w .env.local");
}

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB connected");

    return mongoose;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default dbConnect;
