import z from "zod";

export const InvestmentSchema = z.object({
  name: z.string().min(3, "co najmniej 3 znaki!"),
  price: z.coerce
    .number({ error: "cena musi byc liczbą!" })
    .positive("wieksza od 0!"),
});

export type Investment = z.infer<typeof InvestmentSchema>;
export type InvestmentState = {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    price?: string[];
  };
};
