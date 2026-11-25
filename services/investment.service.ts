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
  await connectDB();

  const investments = await Investment.find({ userId }).select("name").lean();

  return investments.map((investment) => ({
    _id: investment._id.toString(),
    name: investment.name,
  }));
};

export const deleteInvestment = async (
  investmentId: string,
  userId: string,
) => {
  await dbConnect();

  return Investment.findOneAndDelete({
    _id: investmentId,
    userId,
  });
};
