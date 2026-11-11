import Link from "next/link";
import { Suspense } from "react";
import NavigationAuth from "./NavigationAuth";
import Spinner from "@/components/ui/Spinner";

const Navigation = () => {
  return (
    <nav className="p-2 flex items-center justify-between">
      <Link href="/admin" className="inline-block">
        Panel
      </Link>
      <Suspense fallback={<Spinner />}>
        <NavigationAuth />
      </Suspense>
    </nav>
  );
};

export default Navigation;
