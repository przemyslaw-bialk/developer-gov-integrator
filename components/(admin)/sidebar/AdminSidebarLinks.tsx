"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { RxHome } from "react-icons/rx";
import LogoutButton from "../logout/LogoutButton";

type Props = {
  onNavigate: () => void;
};

const AdminSidebarLinks = ({ onNavigate }: Props) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 w-full min-h-screen border-r border-gray-200 bg-surface">
      <div className="p-2 hover:bg-primary hover:text-white">
        <Link href="/" className="flex items-center gap-2" onClick={onNavigate}>
          <RxHome />
          <span>Home</span>
        </Link>
      </div>
      <div
        className={`p-2 hover:bg-primary hover:text-white ${pathname === "/admin" ? "bg-primary text-secondary" : "text-text"}`}
      >
        <Link
          href="/admin"
          className="flex items-center gap-2"
          onClick={onNavigate}
        >
          <LuLayoutDashboard />
          <span>Pulpit</span>
        </Link>
      </div>
      <div
        className={`p-2 hover:bg-primary hover:text-white ${pathname === "/admin/apartments" ? "bg-primary text-secondary" : "text-text"}`}
      >
        <Link
          href="/admin/apartments"
          className="flex items-center gap-2"
          onClick={onNavigate}
        >
          <BsBuildings />
          <span>Inwestycje</span>
        </Link>
      </div>
      <div
        className={`p-2 hover:bg-primary hover:text-white ${pathname === "/admin/apartments/add" ? "bg-primary text-secondary" : "text-text"}`}
      >
        <Link
          href="/admin/apartments/add"
          className="flex items-center gap-2"
          onClick={onNavigate}
        >
          <MdOutlineLibraryAdd />
          <span>Dodaj</span>
        </Link>
      </div>
      <LogoutButton />
    </div>
  );
};

export default AdminSidebarLinks;
