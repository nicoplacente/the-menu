import { emailOptions, transporter } from "@/components/email/nodemailer";
import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email es obligatorio" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    const secret = process.env.JWT_SECRET || "your_jwt_secret";
    const token = jwt.sign({ id: user.id, email: user.email }, secret, {
      expiresIn: "1h",
    });

    const resetPasswordUrl = `${process.env.URL}?token=${token}`;

    await transporter.sendMail({
      ...emailOptions,
      to: email,
      subject: "Restablecer contraseña",
      text: "this is a text",
      html: `
    <body style="margin: 0; padding: 0; background-color: #020617; color: #fff; font-family: system-ui, sans-serif;">
      <table role="presentation" width="100%" height="70%" style="border-collapse: collapse; table-layout: fixed; width: 100%; height: 70vh; background-color: #020617; text-align: center; padding:20px;">
        <tr>
          <td>
            <span style="position: absolute; width: 100%; height: 4px; left: 0; bottom: 0; background: linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.6), rgba(251, 146, 60, 0.6), transparent);"></span>
            <a href="#">
              <span style="display: inline-flex; border-radius: 9999px; padding: 2px; overflow: hidden; background-image: linear-gradient(to bottom right, #ec4899, #fb923c);">
                <img
                  src="https://pub-2f143895feb44c5784f611cd3ba87034.r2.dev/themenu.png"
                  style="border-radius: 9999px; min-width: 36px; aspect-ratio: 1/1; width: 120px; height: 120px;"
                />
              </span>
            </a>
            <h1 style="text-align: center; font-weight: bold; margin-bottom: 0; color: #fff;">Cambia tu contraseña en TheMenu</h1>
            <p style="opacity: 0.9; margin: 25px 0; color: #fff;">Si has olvidado tu contraseña presiona el siguiente botón para restablecerla</p>
            <a href="${resetPasswordUrl}" style="display: inline-block; background: linear-gradient(90deg, #ec4899, #fb923c); color: #fff; text-decoration: none; text-align: center; padding: 15px 20px; font-size: 14px; font-weight: 500; border-radius: 8px;">Cambiar contraseña</a>
          </td>
        </tr>
      </table>
    </body>
`,
    });

    return NextResponse.json({ message: "Email enviado correctamente" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Error interno del servidor",
        message: "Error al enviar el email",
      },
      { status: 500 }
    );
  }
}
