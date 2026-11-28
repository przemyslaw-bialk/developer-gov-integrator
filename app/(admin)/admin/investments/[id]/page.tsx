import requireAdmin from "@/lib/auth/require-admin";
import { getInvestmentById } from "@/services/investment.service";
import { getInvestmentApartments } from "@/services/apartment.service";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionSubtittle from "@/components/ui/SectionSubtittle";
import InvestmentSummary from "@/components/(admin)/investment/InvestmentSummary";
import InvestmentListOfApartments from "@/components/(admin)/investment/InvestmentListOfApartments";

type Props = {
  params: Promise<{ id: string }>;
};

const InvestmentPage = async ({ params }: Props) => {
  const { id } = await params;
  const user = await requireAdmin();

  const investment = await getInvestmentById(id, user.id);

  if (!investment) return <p>Nie znaleziono inwestycji.</p>;

  const apartments = await getInvestmentApartments(investment._id.toString());

  return (
    <div className="space-y-8">
      <div>
        <SectionHeader>{investment.name}</SectionHeader>
        <SectionSubtittle>
          Zarządzaj mieszkaniami przypisanymi do tej inwestycji.
        </SectionSubtittle>
      </div>
      <InvestmentSummary apartments={apartments} />
      <section className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
        <div className="border-b border-border p-6">
          <h2 className="font-medium text-text">Mieszkania</h2>
          <p className="mt-1 text-sm text-muted">
            Lista lokali przypisanych do inwestycji.
          </p>
        </div>

        {apartments.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <p className="font-medium text-text">
              Brak mieszkań w tej inwestycji
            </p>
            <p className="mt-1 text-sm text-muted">
              Dodaj pierwsze mieszkanie, aby pojawiło się na liście.
            </p>
          </div>
        ) : (
          <InvestmentListOfApartments apartments={apartments} />
        )}
      </section>
    </div>
  );
};

export default InvestmentPage;
