import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: params.email },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.error();
  }
}

export const dynamic = "force-dynamic"; // defaults to auto
