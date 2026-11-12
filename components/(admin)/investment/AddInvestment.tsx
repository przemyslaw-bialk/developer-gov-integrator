import { createInvestmentAction } from "@/actions/investment.actions";

const InvestmentForm = () => {
  return (
    <form action={createInvestmentAction} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name">Nazwa inwestycji</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border p-2"
        />
      </div>

      <div>
        <label htmlFor="price">Cena</label>
        <input
          id="price"
          name="price"
          type="number"
          min="0.01"
          step="0.01"
          required
          className="w-full rounded-lg border p-2"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-primary px-4 py-2 text-white"
      >
        Dodaj inwestycję
      </button>
    </form>
  );
};

export default InvestmentForm;
