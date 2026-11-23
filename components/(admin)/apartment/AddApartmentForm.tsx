"use client";
import { addApartmentAction } from "@/actions/apartment.actions";
import {
  APARTMENT_STATUSES,
  ApartmentFormData,
  ApartmentSchema,
} from "@/schemas/apartment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AddApartmentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(ApartmentSchema) });

  const onSubmit = async (data: ApartmentFormData) => {
    const result = await addApartmentAction(data);

    if (result.success) {
      toast.success("dodano!");
      reset();
    } else {
      toast.error(result.message ?? "Nie udalo sie!");
    }
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
