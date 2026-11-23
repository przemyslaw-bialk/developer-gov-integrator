"use server";

import requireAdmin from "@/lib/auth/require-admin";
import { ApartmentSchema } from "@/schemas/apartment.schema";
import { createApartment } from "@/services/apartment.service";
import { revalidatePath } from "next/cache";
import z from "zod";

export const addApartmentAction = async (data: unknown) => {
  const user = await requireAdmin();

  const validatedData = ApartmentSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      success: false,
      errors: z.flattenError(validatedData.error).fieldErrors,
    };
  }

  try {
    const apartment = await createApartment({
      ...validatedData.data,
      createdBy: user.id,
    });

    revalidatePath("/admin/apartments/");

    return {
      success: true,
      apartmentId: apartment._id.toString(),
    };
  } catch (error) {
    console.error("Failed to create apartment:", error);

    return {
      success: false,
      message: "Nie udało się dodać mieszkania.",
    };
  }
};
