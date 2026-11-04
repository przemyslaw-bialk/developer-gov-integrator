import AdminSidebarLinks from "@/components/(admin)/sidebar/AdminSidebarLinks";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1800px] bg-bg">
      <div className="flex">
        <AdminSidebarLinks />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
