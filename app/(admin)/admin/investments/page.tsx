import Spinner from "@/components/ui/Spinner";
import { Suspense } from "react";
import InvestmentContent from "./InvestmentContent";

const InvestmentPage = () => {
  return (
    <div>
      <h1>Inwestycje</h1>

      <Suspense fallback={<Spinner />}>
        <InvestmentContent />
      </Suspense>
    </div>
  );
};

export default InvestmentPage;
