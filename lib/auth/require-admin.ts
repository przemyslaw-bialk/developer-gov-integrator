import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const requireAdmin = async () => {
  const { getUser, getPermission } = getKindeServerSession();
  const getUserRole = await getPermission("access:admin");
  const user = await getUser();
  const isAdmin = getUserRole?.isGranted;

  if (!user) {
    redirect("/api/auth/login");
  }

  if (!isAdmin) {
    redirect("/not-allowed");
  }

  return user;
};

export default requireAdmin;
