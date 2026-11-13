import Spinner from "@/components/ui/Spinner";
import { Suspense } from "react";
import ApartmentsContent from "./ApartmentsContent";

const ApartmentsPage = () => {
  return (
    <div>
      <h1>Inwestycje</h1>

      <Suspense fallback={<Spinner />}>
        <ApartmentsContent />
      </Suspense>
    </div>
  );
};

export default ApartmentsPage;
