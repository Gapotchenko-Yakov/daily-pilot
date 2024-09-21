import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  try {
    const user = prisma.user.findUnique({ where: { email: params.email } });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.error();
  }
}
