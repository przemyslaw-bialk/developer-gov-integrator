import { deleteInvestmentAction } from "@/actions/investment.actions";
import requireAdmin from "@/lib/auth/require-admin";
import { getUserInvestments } from "@/services/investment.service";

const InvestmentContent = async () => {
  const user = await requireAdmin();
  const investments = await getUserInvestments(user.id);

  return (
    <div>
      {investments.map((investment) => (
        <div key={investment._id.toString()}>
          <p>{investment.name}</p>
          <p>{investment.price}</p>
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
