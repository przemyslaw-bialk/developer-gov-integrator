import dbConnect from "@/lib/server";
import connectDB from "@/lib/server";
import Investment from "@/models/Investment";

type InvestmentData = {
  name: string;
  price: number;
  userId: string;
};

export const createInvestment = async (data: InvestmentData) => {
  await connectDB();

  const investment = await Investment.create(data);

  return investment;
};

export const getUserInvestments = async (userId: string) => {
  await dbConnect();

  return Investment.find({ userId });
};
