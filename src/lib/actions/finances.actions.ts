import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getFinances() {
  try {
    const finances = await prisma.finance.findMany();
    return { data: finances, error: null };
  } catch (error) {
    console.error("Error fetching finances:", error);
    return { data: [], error: "Failed to fetch finances" };
  }
}
