import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const AuthenticationButtons = () => {
  return (
    <div className="flex gap-2">
      <LoginLink className="bg-primary rounded-sm text-surface px-3 py-1">
        Logowanie
      </LoginLink>
      <RegisterLink className="bg-primary rounded-sm text-surface px-3 py-1">
        Rejestracja
      </RegisterLink>
    </div>
  );
};

export default AuthenticationButtons;
