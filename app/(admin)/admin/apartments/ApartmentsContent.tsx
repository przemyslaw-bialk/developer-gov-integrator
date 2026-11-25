import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import AddApartmentForm from "@/components/(admin)/apartment/AddApartmentForm";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionSubtittle from "@/components/ui/SectionSubtittle";
import { getUserInvestments } from "@/services/investment.service";

const ApartmentsContent = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return null;

  const investments = await getUserInvestments(user.id);

  return (
    <div>
      <SectionHeader>Mieszkania</SectionHeader>
      <SectionSubtittle>Zarządzanie mieszkaniami</SectionSubtittle>
      <AddApartmentForm investments={investments} />
    </div>
  );
};

export default ApartmentsContent;
