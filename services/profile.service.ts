import dbConnect from "@/lib/server";
import Profile from "@/models/Profile";
import { ProfileType } from "@/types/profile.types";

export type ProfileData = {
  userId: string;
  developerName: string;
  legalFormOfBusiness: string;
  krsNumber?: string;
  ceidgNumber?: string;
  vatNumber: string;
  regonNumber?: string;
  phoneNumber: string;
  email: string;
  developerCity?: string;
  developerPostalCode?: string;
  developerStreetName?: string;
  developerStreetNumber?: string;
  prospectusUrl?: string;
  developerProvince: string;
  developerCounty: string;
  developerMunicipality: string;
};

export const createProfileInfo = async (data: ProfileData) => {
  await dbConnect();

  const profileData = await Profile.findOneAndUpdate(
    { userId: data.userId },
    data,
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    },
  );

  return profileData;
};

export const getUserProfileInfo = async (
  userId: string,
): Promise<ProfileType | null> => {
  await dbConnect();

  const profile = await Profile.findOne({ userId }).lean();

  return profile;
};
