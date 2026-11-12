import requireAdmin from "@/lib/auth/require-admin";
import AdminLayout from "./AdminLayout";

const AdminLayoutWrapper = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await requireAdmin();

  return (
    <AdminLayout firstName={user?.given_name ?? undefined}>
      {children}
    </AdminLayout>
  );
};

export default AdminLayoutWrapper;
