"use client";

import { createInvestmentAction } from "@/actions/investment.actions";
import ErrorInfo from "@/components/ui/ErrorInfo";
import { InvestmentState } from "@/schemas/investment.schema";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";

const initialState: InvestmentState = {
  success: false,
  message: "",
  errors: {},
};

const InvestmentForm = () => {
  const [state, formAction, isPending] = useActionState(
    createInvestmentAction,
    initialState,
  );

  const lastHandledStateRef = useRef(initialState);
  useEffect(() => {
    if (!state.message || lastHandledStateRef.current === state) return;
    lastHandledStateRef.current = state;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

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
        {state.errors?.name && <ErrorInfo text={state.errors.name[0]} />}
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
        disabled={isPending}
      >
        {isPending ? "Zapisywanie..." : "Dodaj inwestycję"}
      </button>
    </form>
  );
};

export default InvestmentForm;
