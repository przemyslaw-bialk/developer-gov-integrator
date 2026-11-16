import ProfileForm from "@/components/(admin)/profile/ProfileForm";
import Spinner from "@/components/ui/Spinner";
import { Suspense } from "react";

const ProfilePage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <ProfileForm />
    </Suspense>
  );
};

export default ProfilePage;
