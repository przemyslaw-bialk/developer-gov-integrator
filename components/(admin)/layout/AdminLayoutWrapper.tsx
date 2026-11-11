import AdminLayout from "./AdminLayout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const AdminLayoutWrapper = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log("Kinde user:", user);

  return (
    <AdminLayout firstName={user?.given_name ?? undefined}>
      {children}
    </AdminLayout>
  );
};

export default AdminLayoutWrapper;
