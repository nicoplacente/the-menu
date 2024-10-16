import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./prisma";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";
export default {
  providers: [
    Google,
    Credentials({
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email as string,
          },
        });
        if (!user) {
          throw new Error("Usuario no encontrado");
        }
        const validPassword = await bcrypt.compare(
          credentials?.password as string,
          user.password as string
        );
        if (!validPassword) {
          throw new Error("Contraseña incorrecta");
        }
        return {
          id: user.id,
          name: user.name as string,
          email: user.email,
          image: user.image,
          phone: user.phone as string,
        };
      },
    }),
  ],
} satisfies NextAuthConfig;
