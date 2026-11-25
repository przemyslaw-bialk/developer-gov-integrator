import { Suspense } from "react";
import ApartmentsContent from "./ApartmentsContent";
import Spinner from "@/components/ui/Spinner";

const ApartmentsPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <ApartmentsContent />
    </Suspense>
  );
};

export default ApartmentsPage;
