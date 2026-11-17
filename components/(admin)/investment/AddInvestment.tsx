"use client";
import {
  ActionState,
  createInvestmentAction,
} from "@/actions/investment.actions";
import { useActionState } from "react";

const initialState: ActionState = {};

const InvestmentForm = () => {
  const [state, formAction, isPending] = useActionState(
    createInvestmentAction,
    initialState,
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name">Nazwa inwestycji</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border p-2"
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>
        )}
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
        {state.errors?.price && (
          <p className="mt-1 text-sm text-red-500">{state.errors.price[0]}</p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-lg bg-primary px-4 py-2 text-white"
      >
        {isPending ? "Dodawanie..." : "Dodaj inwestycję"}
      </button>
      {state.success && (
        <p className="text-sm text-green-600">Inwestycja została dodana!</p>
      )}
    </form>
  );
};

export default InvestmentForm;
