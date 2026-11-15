import dbConnect from "@/lib/server";
import Profile from "@/models/Profile";

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

  const profileData = await Profile.create(data);

  return profileData;
};
