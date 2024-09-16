import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const finances = await prisma.finance.findMany();
    return NextResponse.json(finances);
  } catch (error) {
    return NextResponse.error();
  }
}
