import z from "zod";

export const ProfileSchema = z.object({
  developerName: z.string().min(1, "Nazwa dewelopera jest wymagana"),
  legalFormOfBusiness: z.string().min(1, "Forma działalności jest wymagana"),
  krsNumber: z.string().optional(),
  ceidgNumber: z.string().optional(),
  vatNumber: z.string().min(1, "NIP jest wymagany"),
  regonNumber: z.string().optional(),
  phoneNumber: z.string().min(1, "Numer telefonu jest wymagany"),
  email: z.email("Nieprawidłowy adres email"),
  developerCity: z.string().min(1, "Miasto jest wymagane"),
  developerPostalCode: z.string().min(1, "Kod pocztowy jest wymagany"),
  developerStreetName: z.string().min(1, "Ulica jest wymagana"),
  developerStreetNumber: z.string().min(1, "Numer budynku jest wymagany"),
  prospectusUrl: z.url("Nieprawidłowy adres URL").optional(),
  developerProvince: z.string().min(1, "Województwo jest wymagane"),
  developerCounty: z.string().min(1, "Powiat jest wymagany"),
  developerMunicipality: z.string().min(1, "Gmina jest wymagana"),
});

export type Profile = z.infer<typeof ProfileSchema>;
