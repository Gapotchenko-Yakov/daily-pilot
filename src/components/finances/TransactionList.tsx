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
import { Finance, User } from "@prisma/client";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const TransactionsList = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve("data"), 2000);
  });

  const financesRes = await fetch(`${baseUrl}/api/finances`, {
    cache: "no-store",
  });
  if (!financesRes.ok) {
    throw new Error("Failed to fetch finances");
  }
  const finances: Finance[] = await financesRes.json();

  const usersRes = await fetch(`${baseUrl}/api/users`, { cache: "no-store" });
  if (!usersRes.ok) {
    throw new Error("Failed to fetch users");
  }
  const users: User[] = await usersRes.json();

  return (
    <section className="bg-white dark:bg-gray-700 dark:text-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
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
