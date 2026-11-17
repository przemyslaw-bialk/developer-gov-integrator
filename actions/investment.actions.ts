"use server";

import requireAdmin from "@/lib/auth/require-admin";
import { createInvestmentSchema } from "@/schemas/investment.schema";
import {
  createInvestment,
  deleteInvestment,
} from "@/services/investment.service";
import { revalidatePath } from "next/cache";

export type ActionState = {
  errors?: {
    name?: string[];
    price?: string[];
  };
  success?: boolean;
};

export const createInvestmentAction = async (
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  const user = await requireAdmin();

  const validated = createInvestmentSchema.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
  });

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      success: false,
    };
  }

  await createInvestment({
    name: validated.data.name,
    price: validated.data.price,
    userId: user.id,
  });

  revalidatePath("/admin/investments");
  return { success: true };
};

export const deleteInvestmentAction = async (investmentId: string) => {
  const user = await requireAdmin();

  const deletedInvestment = await deleteInvestment(investmentId, user.id);

  if (!deletedInvestment) {
    throw new Error("Nie znaleziono inwestycji lub brak uprawnień.");
  }

  revalidatePath("/admin/investments");
};
