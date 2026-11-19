"use server";

import requireAdmin from "@/lib/auth/require-admin";
import { InvestmentSchema, InvestmentState } from "@/schemas/investment.schema";
import {
  createInvestment,
  deleteInvestment,
} from "@/services/investment.service";
import { revalidatePath } from "next/cache";
import z from "zod";

export const createInvestmentAction = async (
  prevState: InvestmentState,
  formData: FormData,
): Promise<InvestmentState> => {
  const user = await requireAdmin();

  const validatedFields = InvestmentSchema.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "popraw błędy w formularzu!",
      errors: z.flattenError(validatedFields.error).fieldErrors,
    };
  }

  const { name, price } = validatedFields.data;

  try {
    await createInvestment({ name, price, userId: user.id });
    revalidatePath("/admin/investments");

    return {
      success: true,
      message: "inwestycja dodana!",
    };
  } catch (error) {
    return {
      success: false,
      message: "Wystąpił błąd podczas zapisywania do bazy.",
    };
  }
};

export const deleteInvestmentAction = async (investmentId: string) => {
  const user = await requireAdmin();

  const deletedInvestment = await deleteInvestment(investmentId, user.id);

  if (!deletedInvestment) {
    throw new Error("Nie znaleziono inwestycji lub brak uprawnień...");
  }

  revalidatePath("/admin/investments");
};
