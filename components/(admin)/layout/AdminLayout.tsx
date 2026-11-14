"use client";

import AdminSidebarLinks from "@/components/(admin)/sidebar/AdminSidebarLinks";
import { useState } from "react";

const AdminLayout = ({
  children,
  firstName,
}: {
  children: React.ReactNode;
  firstName?: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="mx-auto min-h-screen w-full max-w-[1800px] bg-bg">
      <div className="flex items-start">
        <div
          className={`${isMenuOpen ? "block" : "hidden"} md:block w-full md:w-64`}
        >
          <AdminSidebarLinks
            firstName={firstName}
            onNavigate={() => {
              if (window.innerWidth < 768) {
                setIsMenuOpen(false);
              }
            }}
          />
        </div>

        {!isMenuOpen && (
          <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            MENU
          </button>
        )}

        <main
          className={`${isMenuOpen ? "hidden" : "block"} md:block flex-1 min-w-0`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
