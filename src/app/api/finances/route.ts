import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const finances = await prisma.finance.findMany();
    return NextResponse.json(finances);
  } catch (error) {
    return NextResponse.error();
  }
}
