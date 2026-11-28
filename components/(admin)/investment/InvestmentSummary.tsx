import { ApartmentFormData } from "@/schemas/apartment.schema";

type Props = {
  apartments: ApartmentFormData[];
};

const InvestmentSummary = ({ apartments }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
      <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
        <p className="text-sm text-muted">Wszystkie mieszkania</p>
        <p className="mt-2 text-3xl font-semibold text-text">
          {apartments.length}
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
        <p className="text-sm text-muted">Dostępne</p>
        <p className="mt-2 text-3xl font-semibold text-primary">
          {apartments.filter((a) => a.status === "AVAILABLE").length}
        </p>
      </div>
      <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
        <p className="text-sm text-muted">Zarezerwowane</p>
        <p className="mt-2 text-3xl font-semibold text-primary">
          {apartments.filter((a) => a.status === "RESERVED").length}
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
        <p className="text-sm text-muted">Sprzedane</p>
        <p className="mt-2 text-3xl font-semibold text-muted">
          {apartments.filter((a) => a.status === "SOLD").length}
        </p>
      </div>
    </div>
  );
};

export default InvestmentSummary;
