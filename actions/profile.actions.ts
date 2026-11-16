"use server";

import requireAdmin from "@/lib/auth/require-admin";
import {
  createProfileInfo,
  getUserProfileInfo,
} from "@/services/profile.service";
import { ProfileType } from "@/types/profile.types";
import { revalidatePath } from "next/cache";

export const createProfileInfoAction = async (formData: FormData) => {
  const user = await requireAdmin();
  const userId = user.id;

  const developerName = formData.get("developerName") as string;
  const legalFormOfBusiness = formData.get("legalFormOfBusiness") as string;
  const krsNumber = formData.get("krsNumber") as string;
  const ceidgNumber = formData.get("ceidgNumber") as string;
  const vatNumber = formData.get("vatNumber") as string;
  const regonNumber = formData.get("regonNumber") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const email = formData.get("email") as string;
  const developerCity = formData.get("developerCity") as string;
  const developerPostalCode = formData.get("developerPostalCode") as string;
  const developerStreetName = formData.get("developerStreetName") as string;
  const developerStreetNumber = formData.get("developerStreetNumber") as string;
  const prospectusUrl = formData.get("prospectusUrl") as string;
  const developerProvince = formData.get("developerProvince") as string;
  const developerCounty = formData.get("developerCounty") as string;
  const developerMunicipality = formData.get("developerMunicipality") as string;

  await createProfileInfo({
    userId,
    developerName,
    legalFormOfBusiness,
    krsNumber,
    ceidgNumber,
    vatNumber,
    regonNumber,
    phoneNumber,
    email,
    developerCity,
    developerPostalCode,
    developerStreetName,
    developerStreetNumber,
    prospectusUrl,
    developerProvince,
    developerCounty,
    developerMunicipality,
  });

  revalidatePath("/admin/profile");
};

export const getUserProfileInfoAction =
  async (): Promise<ProfileType | null> => {
    const user = await requireAdmin();

    return await getUserProfileInfo(user.id);
  };
