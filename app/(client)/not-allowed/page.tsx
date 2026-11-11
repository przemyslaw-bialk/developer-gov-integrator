import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const NotAllowedPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg p-4">
      <div className="flex flex-col items-center gap-6 rounded-xl border border-border bg-surface p-10 text-center shadow-sm">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-text">Brak dostępu!</h1>

          <p className="text-sm text-muted">
            Zaloguj się na konto posiadające uprawnienia administratora.
          </p>
        </div>

        <div className="flex gap-3">
          <LoginLink className="rounded-lg bg-primary px-5 py-2 text-white">
            Zaloguj
          </LoginLink>

          <RegisterLink className="rounded-lg border border-border px-5 py-2 text-text">
            Utwórz konto
          </RegisterLink>
        </div>
      </div>
    </div>
  );
};

export default NotAllowedPage;
