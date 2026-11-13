"use server";

import requireAdmin from "@/lib/auth/require-admin";
import {
  createInvestment,
  deleteInvestment,
} from "@/services/investment.service";
import { revalidatePath } from "next/cache";

export const createInvestmentAction = async (formData: FormData) => {
  const user = await requireAdmin();

  const name = formData.get("name") as string;
  const price = formData.get("price");
  const parsedPrice = Number(price);

  await createInvestment({ name, price: parsedPrice, userId: user.id });

  revalidatePath("/admin/investments");
};

export const deleteInvestmentAction = async (investmentId: string) => {
  const user = await requireAdmin();

  const deletedInvestment = await deleteInvestment(investmentId, user.id);

  if (!deletedInvestment) {
    throw new Error("Nie znaleziono inwestycji lub brak uprawnień.");
  }

  revalidatePath("/admin/investments");
};
