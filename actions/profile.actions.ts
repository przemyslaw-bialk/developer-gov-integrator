"use server";

import requireAdmin from "@/lib/auth/require-admin";
import {
  createProfileInfo,
  getUserProfileInfo,
} from "@/services/profile.service";
import { ProfileSchema } from "@/schemas/profile.schema";
import { ProfileType } from "@/types/profile.types";
import { revalidatePath } from "next/cache";

export const createProfileInfoAction = async (formData: FormData) => {
  const user = await requireAdmin();

  const rawData = Object.fromEntries(formData.entries());
  const validatedData = ProfileSchema.safeParse(rawData);

  if (!validatedData.success) {
    console.log(validatedData.error.flatten().fieldErrors);
    return;
  }

  await createProfileInfo({
    userId: user.id,
    ...validatedData.data,
  });

  revalidatePath("/admin/profile");
};

export const getUserProfileInfoAction =
  async (): Promise<ProfileType | null> => {
    const user = await requireAdmin();

    return await getUserProfileInfo(user.id);
  };
