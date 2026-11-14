import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { CgLogOut } from "react-icons/cg";

type Props = {
  className?: string;
};

const LogoutButton = ({ className }: Props) => {
  return (
    <div className="flex items-center gap-2 p-2 mt-auto">
      <CgLogOut />
      <LogoutLink className={`${className} w-full`}>Log out</LogoutLink>
    </div>
  );
};

export default LogoutButton;
