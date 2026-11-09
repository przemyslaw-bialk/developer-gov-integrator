import Link from "next/link";
import AuthenticationButtons from "../authentication/AuthenticationButtons";

const Navigation = () => {
  return (
    <nav className="p-2 flex items-center justify-between">
      <Link href="/admin" className="inline-block">
        Panel
      </Link>
      <AuthenticationButtons />
    </nav>
  );
};

export default Navigation;
