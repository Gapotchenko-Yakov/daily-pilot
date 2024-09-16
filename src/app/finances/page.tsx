import { FC } from "react";
import { getFinances } from "@/lib/actions/finances.actions";
import { notFound } from "next/navigation";

const FinancePage: FC = async () => {
  const { data: finances, error } = await getFinances();

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!finances) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Financial Transactions</h2>
      <ul>
        {finances.map((finance) => (
          <li key={finance.id}>
            {finance.description}: ${finance.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinancePage;
