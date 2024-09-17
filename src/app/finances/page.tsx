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
      <h2>Financial Transactions</h2>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Users</SelectLabel>
            {users.map((user) => (
              <SelectItem value={user.id.toString()}>{user.name}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
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
