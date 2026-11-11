import { Suspense } from "react";
import AdminLayoutWrapper from "@/components/(admin)/layout/AdminLayoutWrapper";
import Spinner from "@/components/ui/Spinner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <AdminLayoutWrapper>{children}</AdminLayoutWrapper>
    </Suspense>
  );
};

export default Layout;
