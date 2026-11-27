import requireAdmin from "@/lib/auth/require-admin";
import { getInvestmentById } from "@/services/investment.service";
import { getInvestmentApartments } from "@/services/apartment.service";

type Props = {
  params: Promise<{ id: string }>;
};

const InvestmentPage = async ({ params }: Props) => {
  const { id } = await params;
  const user = await requireAdmin();

  const investment = await getInvestmentById(id, user.id);

  if (!investment) return <p>Nie znaleziono inwestycji.</p>;

  const apartments = await getInvestmentApartments(investment._id.toString());

  console.log(apartments);

  return (
    <div>
      <h2>{investment.name}</h2>

      {apartments.map((apartment) => (
        <div key={apartment._id.toString()}>
          <p>Numer: {apartment.apartmentNumber}</p>
          <p>Cena: {apartment.priceOfApartment}</p>
          <p>Cena za 1m: {apartment.pricePerMeterSquare}</p>
          <p>Status: {apartment.status}</p>
        </div>
      ))}
    </div>
  );
};

export default InvestmentPage;
