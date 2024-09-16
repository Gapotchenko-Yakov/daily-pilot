import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

const fetchFinances = async () => {
  const res = await fetch("/api/finances");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export interface Finance {
  id: number;
  description: string;
  amount: number;
  type: "INCOME" | "EXPENSE";
  date: string; // ISO 8601 дата
  userId: number;
  createdAt: string; // ISO 8601 дата
}

const FinancePage: FC = () => {
  const {
    data: finances,
    error,
    isLoading,
  } = useQuery({ queryKey: ["finances"], queryFn: fetchFinances });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Financial Transactions</h2>
      <ul>
        {finances.map((finance: Finance) => (
          <li key={finance.id}>
            {finance.description}: ${finance.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinancePage;
