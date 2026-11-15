import ProfileForm from "@/components/(admin)/profile/ProfileForm";
import SectionHeader from "@/components/ui/SectionHeader";

const ProfilePage = () => {
  return (
    <div>
      <SectionHeader>Ustawienia Profilu</SectionHeader>
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
