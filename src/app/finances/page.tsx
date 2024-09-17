import FinanceCharts from "@/components/finances/FinanceCharts";
import FinanceOverview from "@/components/finances/FinanceOverview";
import TransactionsList from "@/components/finances/TransactionList";
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

const FinancePage = async () => {
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
    <div>
      {/* <!-- Overview Section --> */}
      <FinanceOverview />

      {/* <!-- Charts Section --> */}
      <FinanceCharts />

      {/* <!-- Transaction List --> */}
      <TransactionsList />

      {/* <!-- Filters Section --> */}
    </div>
  );
};

export default FinancePage;
