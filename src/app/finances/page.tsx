import { FC } from "react";
import { Finance } from "@prisma/client";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const FinancePage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve("data"), 2000);
  });

  const res = await fetch(`${baseUrl}/api/finances`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch finances");
  }
  const finances: Finance[] = await res.json();

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
