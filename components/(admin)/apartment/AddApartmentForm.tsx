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

type Props = {
  investments: {
    _id: string;
    name: string;
  }[];
};

const AddApartmentForm = ({ investments }: Props) => {
  console.log(investments);
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
    <div className="w-full mt-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
      >
        <div className="border-b border-border pb-4">
          <h2 className="font-medium text-text">Dane lokalu</h2>
          <p className="mt-1 text-sm text-muted">
            Informacje podstawowe i ceny mieszkania.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="apartmentNumber"
            className="text-sm font-medium text-text"
          >
            Numer mieszkania
          </label>
          <input
            {...register("apartmentNumber")}
            id="apartmentNumber"
            placeholder="np. A12"
            className="rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
          <p className="min-h-5 text-sm text-red-500">
            {errors.apartmentNumber?.message}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="priceOfApartment"
              className="text-sm font-medium text-text"
            >
              Cena mieszkania
            </label>
            <div className="relative">
              <input
                {...register("priceOfApartment", { valueAsNumber: true })}
                id="priceOfApartment"
                type="number"
                step="any"
                placeholder="450000"
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 pr-14 text-sm text-text outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted">
                PLN
              </span>
            </div>
            <p className="min-h-5 text-sm text-red-500">
              {errors.priceOfApartment?.message}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="pricePerMeterSquare"
              className="text-sm font-medium text-text"
            >
              Cena za m²
            </label>
            <div className="relative">
              <input
                {...register("pricePerMeterSquare", { valueAsNumber: true })}
                id="pricePerMeterSquare"
                type="number"
                step="any"
                placeholder="12000"
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 pr-14 text-sm text-text outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted">
                PLN
              </span>
            </div>
            <p className="min-h-5 text-sm text-red-500">
              {errors.pricePerMeterSquare?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="status" className="text-sm font-medium text-text">
            Status mieszkania
          </label>
          <select
            {...register("status")}
            id="status"
            className="cursor-pointer rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          >
            {APARTMENT_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <p className="min-h-5 text-sm text-red-500">
            {errors.status?.message}
          </p>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-xl border border-border px-5 py-3 text-sm font-medium text-text transition hover:bg-surface-secondary"
          >
            Wyczyść
          </button>

          <button
            type="submit"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-hover"
          >
            Dodaj mieszkanie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddApartmentForm;
