import {
  createProfileInfoAction,
  getUserProfileInfoAction,
} from "@/actions/profile.actions";

import ProfileFormHeader from "./ProfileFormHeader";
import ProfileFormCompanyInfo from "./ProfileFormCompanyInfo";
import ProfileFormContactInfo from "./ProfileFormContactInfo";
import ProfileFormAddress from "./ProfileFormAddress";
import ProfileFormProspectus from "./ProfileFormProspectus";
import ProfileFormFooter from "./ProfileFormFooter";

const ProfileForm = async () => {
  const user = await getUserProfileInfoAction();

  return (
    <form
      action={createProfileInfoAction}
      className="mx-auto w-full space-y-6 "
    >
      <ProfileFormHeader />
      <ProfileFormCompanyInfo user={user} />
      <ProfileFormContactInfo user={user} />
      <ProfileFormAddress user={user} />
      <ProfileFormProspectus user={user} />
      <ProfileFormFooter />
    </form>
  );
};

export default ProfileForm;
