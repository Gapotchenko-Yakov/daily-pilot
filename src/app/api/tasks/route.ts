import prisma from '@/shared/api/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.error();
  }
}
