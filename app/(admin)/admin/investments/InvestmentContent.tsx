import { deleteInvestmentAction } from "@/actions/investment.actions";
import requireAdmin from "@/lib/auth/require-admin";
import { getUserInvestments } from "@/services/investment.service";
import Link from "next/link";

const InvestmentContent = async () => {
  const user = await requireAdmin();
  const investments = await getUserInvestments(user.id);

  return (
    <div>
      {investments.map((investment) => (
        <div key={investment._id.toString()}>
          <p>{investment.name}</p>
          <p>{investment.price}</p>
          <Link href={`/admin/investments/${investment._id}`}>
            Zobacz inwestycję
          </Link>
          <form
            action={deleteInvestmentAction.bind(
              null,
              investment._id.toString(),
            )}
          >
            <button type="submit">Usuń</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default InvestmentContent;
