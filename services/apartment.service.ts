import connectDB from "@/lib/server";
import Apartment from "@/models/Apartment";
import { ApartmentFormData } from "@/schemas/apartment.schema";

type ApartmentDataWithUserId = ApartmentFormData & {
  createdBy: string;
};

export const createApartment = async (data: ApartmentDataWithUserId) => {
  await connectDB();

  const apartment = await Apartment.create(data);

  return apartment;
};

export const getInvestmentApartments = async (investmentId: string) => {
  await connectDB();

  return await Apartment.find({ investmentId }).lean();
};
