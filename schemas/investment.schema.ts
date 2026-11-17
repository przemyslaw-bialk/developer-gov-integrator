import z from "zod";

export const createInvestmentSchema = z.object({
  name: z.string().trim().min(2, "nazwa inwestycji musi miec minimum 2 znaki!"),

  price: z.coerce
    .number({ error: "cena musi byc liczba!" })
    .positive("wieksza od 0!"),
});

export type CreateInvestmentInput = z.infer<typeof createInvestmentSchema>;
