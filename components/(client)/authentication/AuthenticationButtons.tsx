import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const AuthenticationButtons = () => {
  return (
    <div className="flex gap-2">
      <LoginLink className="">Logowanie</LoginLink>
      <RegisterLink>Rejestracja</RegisterLink>
    </div>
  );
};

export default AuthenticationButtons;
