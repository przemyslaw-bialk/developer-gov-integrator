import requireAdmin from "@/lib/auth/require-admin";
import { getUserInvestments } from "@/services/investment.service";
import { connection } from "next/server";

const ApartmentsPage = async () => {
  await connection();
  const user = await requireAdmin();

  const investments = await getUserInvestments(user.id);
  return (
    <div>
      <h1>Inwestycje</h1>

      {investments.map((investment) => (
        <div key={investment._id.toString()}>
          <p>{investment.name}</p>
          <p>{investment.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ApartmentsPage;
