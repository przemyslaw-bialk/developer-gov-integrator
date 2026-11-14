import HoverPopup from "@/components/ui/HoverPopup";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

const InvestmentPicker = () => {
  return (
    <div className="p-2">
      <SectionHeader>Rodzaj inwestycji</SectionHeader>
      <div className="flex flex-col gap-1 justify-center items-start mt-6">
        <div className="relative p-1 group hover:bg-primary hover:text-secondary">
          <Link href="/admin/investments/add/multifamily">
            Inwestycje mieszkaniowe wielorodzinne
          </Link>
          <HoverPopup>
            Standardowe budynki mieszkalne (blok, apartamentowiec) z
            wydzielonymi lokalami - wymaga dodania mieszkań!
          </HoverPopup>
        </div>
        <div className="relative p-1 group hover:bg-primary hover:text-secondary">
          <Link href="/admin/investments/add/single-family-housing">
            Osiedle domów jednorodzinnych
          </Link>
          <HoverPopup>
            Kompleksy domów wolnostojących, w zabudowie bliźniaczej, szeregowej
            - wymaga dodania mieszkań!
          </HoverPopup>
        </div>
        <div className="relative p-1 group hover:bg-primary hover:text-secondary">
          <Link href="/admin/investments/add/single-home">
            Pojedynczy dom jednorodzinny
          </Link>
          <HoverPopup>
            Pojedynczy dom wolnostojący lub bliźniak - NIE wymaga dodawania
            mieszkań!
          </HoverPopup>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPicker;
