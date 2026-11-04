"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";

const AdminSidebarLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 w-full sm:w-1/6 border-r border-gray-200 min-h-screen bg-surface">
      <div
        className={`p-2   ${
          pathname === "/admin" ? "bg-primary" : "hover:bg-primary text-surface"
        }`}
      >
        <Link href="/admin" className="flex items-center gap-2">
          <LuLayoutDashboard />
          <span>Pulpit</span>
        </Link>
      </div>
      <div
        className={`p-2 text-surface ${
          pathname === "/admin/apartments"
            ? "bg-primary"
            : "hover:bg-primary text-surface"
        }`}
      >
        <Link href="/admin/apartments" className="flex items-center gap-2">
          <LuLayoutDashboard />
          <span>Inwestycje</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebarLinks;
