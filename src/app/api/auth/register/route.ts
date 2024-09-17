import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/libs/prisma";
import { error } from "console";

export async function POST(request: any) {
  try {
    const data = await request.json();
    console.log(data);

    const emailExist = await db.user.findUnique({
      where: {
        email: data.email.toLowerCase(),
      },
    });
    console.log(emailExist);
    if (emailExist) {
      return NextResponse.json({ message: "El email ya existe", status: 401 });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await db.user.create({
      data: {
        fullName: data.fullName,
        email: data.email.toLowerCase(),
        password: hashedPassword,
        phone: data.phone,
      },
    });
    console.log(newUser);

    const { password: _, ...user } = newUser;

    return NextResponse.json({ user, status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: (error as Error).message,
      },
      {
        status: 500,
      }
    );
  }
}
