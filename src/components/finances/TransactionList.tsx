import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import prisma from "@/lib/prisma";
import { Transaction, User } from "@prisma/client";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const TransactionsList = async () => {
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
    <section className="section-card">
      <h2 className="h2">Recent Transactions</h2>
      <div className="space-y-4">
        <div className="flex justify-between p-4 border-b border-gray-200 dark:border-gray-600">
          <div>
            <h3 className="text-lg font-medium">Transaction #1</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Date: 2024-09-15
            </p>
          </div>
          <span className="text-green-600 font-bold">$200.00</span>
        </div>
        <div className="flex justify-between p-4 border-b border-gray-200 dark:border-gray-600">
          <div>
            <h3 className="text-lg font-medium">Transaction #2</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Date: 2024-09-14
            </p>
          </div>
          <span className="text-red-600 font-bold">-$50.00</span>
        </div>
      </div>
    </section>
  );
};

export default TransactionsList;
