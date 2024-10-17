import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET() {
  const foundApp = await prisma.app.findMany({ include: { categories: true } });

  return NextResponse.json({
    foundApp,
  });
}
