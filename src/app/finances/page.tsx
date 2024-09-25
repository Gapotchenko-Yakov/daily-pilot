import FinanceCharts from "@/components/finances/FinanceCharts";
import FinanceFilters from "@/components/finances/FinanceFilters";
import FinanceOverview from "@/components/finances/FinanceOverview";
import TransactionsList from "@/components/finances/TransactionList";

import { Transaction, User } from "@prisma/client";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const FinancePage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve("data"), 500);
  });

  const transactionsRes = await fetch(`${baseUrl}/api/transactions`, {
    cache: "no-store",
  });

  if (!transactionsRes.ok) {
    throw new Error("Failed to fetch transactions");
  }
  const transactions: Transaction[] = await transactionsRes.json();

  const usersRes = await fetch(`${baseUrl}/api/users`, { cache: "no-store" });
  if (!usersRes.ok) {
    throw new Error("Failed to fetch users");
  }
  const users: User[] = await usersRes.json();

  return (
    <div>
      <FinanceOverview />

      <FinanceCharts />

      <TransactionsList />

      <FinanceFilters />
    </div>
  );
};

export default FinancePage;
