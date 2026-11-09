import Link from "next/link";
import { Suspense } from "react";
import NavigationAuth from "./NavigationAuth";

const Navigation = () => {
  return (
    <nav className="p-2 flex items-center justify-between">
      <Link href="/admin" className="inline-block">
        Panel
      </Link>
      <Suspense fallback={"loading"}>
        <NavigationAuth />
      </Suspense>
    </nav>
  );
};

export default Navigation;
