"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

// this way zod takes values as literals - not as string
const APARTMENT_STATUSES = ["AVAILABLE", "RESERVED", "SOLD"] as const;

const ApartmentSchema = z.object({
  apartmentNumber: z.string().nonempty().uppercase(),
  priceOfApartment: z.coerce.number().positive(),
  pricePerMeterSquare: z.coerce.number().positive(),
  status: z.enum(APARTMENT_STATUSES, { message: "wybierz status!" }),
});
type ApartmentFormData = z.infer<typeof ApartmentSchema>;

const AddApartmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(ApartmentSchema) });

  const onSubmit = (data: ApartmentFormData) => {
    console.log(data);
  };

  return (
    <div>
      <p>add apartment</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("apartmentNumber")} />
        <p>{errors.apartmentNumber?.message}</p>
        <input
          {...register("priceOfApartment", { valueAsNumber: true })}
          type="number"
        />
        <p>{errors.priceOfApartment?.message}</p>
        <input {...register("pricePerMeterSquare", { valueAsNumber: true })} />
        <p>{errors.pricePerMeterSquare?.message}</p>
        <select {...register("status")}>
          {APARTMENT_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <p>{errors.status?.message}</p>
        <button type="submit">dodaj mieszkanie</button>
      </form>
    </div>
  );
};

export default AddApartmentForm;
