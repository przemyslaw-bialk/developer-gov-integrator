import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import AuthenticationButtons from "../authentication/AuthenticationButtons";

const NavigationAuth = async () => {
  const { isAuthenticated } = getKindeServerSession();

  const isUserAuthenticated = await isAuthenticated();

  return <>{isUserAuthenticated ? <p>logout</p> : <AuthenticationButtons />}</>;
};

export default NavigationAuth;
