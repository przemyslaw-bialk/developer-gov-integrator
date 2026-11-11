import { redirect } from "next/navigation";
import AdminLayout from "./AdminLayout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const AdminLayoutWrapper = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { getUser, getPermission } = getKindeServerSession();
  const user = await getUser();
  const getUserRole = await getPermission("access:admin");
  const isAdmin = getUserRole?.isGranted;

  if (!isAdmin) {
    redirect("/not-allowed");
  }

  return (
    <AdminLayout firstName={user?.given_name ?? undefined}>
      {children}
    </AdminLayout>
  );
};

export default AdminLayoutWrapper;
