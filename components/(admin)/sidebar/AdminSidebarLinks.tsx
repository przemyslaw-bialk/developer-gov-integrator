"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { RxHome } from "react-icons/rx";
import LogoutButton from "../logout/LogoutButton";
import AdminSidebarUserGreetings from "./AdminSidebarGreetings";
import Logo from "@/components/ui/Logo";

type Props = {
  onNavigate: () => void;
  firstName?: string;
};

const AdminSidebarLinks = ({ onNavigate, firstName }: Props) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 w-full min-h-screen border-r border-gray-200 bg-surface pb-4 px-2">
      <Logo />
      <AdminSidebarUserGreetings firstName={firstName} />
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
        className={`p-2 hover:bg-primary hover:text-white ${pathname === "/admin/investments" ? "bg-primary text-secondary" : "text-text"}`}
      >
        <Link
          href="/admin/investments"
          className="flex items-center gap-2"
          onClick={onNavigate}
        >
          <BsBuildings />
          <span>Inwestycje</span>
        </Link>
      </div>
      <div
        className={`p-2 hover:bg-primary hover:text-white ${pathname.startsWith("/admin/investments/add") ? "bg-primary text-secondary" : "text-text"}`}
      >
        <Link
          href="/admin/investments/add"
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
