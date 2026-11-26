import z from "zod";

// this way zod takes values as literals - not as string
export const APARTMENT_STATUSES = ["AVAILABLE", "RESERVED", "SOLD"] as const;

export const ApartmentSchema = z.object({
  apartmentNumber: z.string().nonempty(),
  priceOfApartment: z.coerce.number().positive(),
  pricePerMeterSquare: z.coerce.number().positive(),
  status: z.enum(APARTMENT_STATUSES, { message: "wybierz status!" }),
  investmentId: z.string().min(1, "Wybierz inwestycję"),
});

export type ApartmentFormData = z.infer<typeof ApartmentSchema>;
