import AddApartmentForm from "@/components/(admin)/apartment/AddApartmentForm";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionSubtittle from "@/components/ui/SectionSubtittle";

const ApartmentsPage = () => {
  return (
    <div>
      <SectionHeader>Mieszkania</SectionHeader>
      <SectionSubtittle>Zarządzanie mieszkaniami</SectionSubtittle>
      <AddApartmentForm />
    </div>
  );
};

export default ApartmentsPage;
