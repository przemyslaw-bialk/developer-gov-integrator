"use client";
import { ApartmentFormData } from "@/schemas/apartment.schema";
import { useState } from "react";
import ApartmentStatusFilter from "../apartment/ApartmentStatusFilter";

type Props = {
  apartments: ApartmentFormData[];
};

const InvestmentListOfApartments = ({ apartments }: Props) => {
  const statusLabels = {
    AVAILABLE: "Dostępne",
    RESERVED: "Zarezerwowane",
    SOLD: "Sprzedane",
  };

  const [filter, setFilter] = useState("ALL");

  const filteredApartments =
    filter === "ALL"
      ? apartments
      : apartments.filter((a) => a.status === filter);

  return (
    <>
      <ApartmentStatusFilter filter={filter} setFilter={setFilter} />
      <div className="divide-y divide-border">
        {filteredApartments.map((apartment, i) => (
          <div
            key={i}
            className="flex flex-col gap-5 p-6 transition hover:bg-surface-secondary/50 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-semibold text-text">
                Mieszkanie {apartment.apartmentNumber}
              </p>
              <p className="mt-1 text-sm text-muted">
                Cena za m²:{" "}
                {apartment.pricePerMeterSquare.toLocaleString("pl-PL")} zł
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div>
                <p className="text-xs text-muted">Cena mieszkania</p>
                <p className="mt-1 font-semibold text-text">
                  {apartment.priceOfApartment.toLocaleString("pl-PL")} zł
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                  apartment.status === "AVAILABLE"
                    ? "bg-primary/10 text-primary"
                    : apartment.status === "RESERVED"
                      ? "bg-accent/20 text-text"
                      : "bg-surface-secondary text-muted"
                }`}
              >
                {statusLabels[apartment.status]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InvestmentListOfApartments;
