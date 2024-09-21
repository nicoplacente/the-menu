import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import db from "@/libs/prisma";
import bcrypt from "bcryptjs";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        const userFound = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (!userFound) throw new Error("Usuario no encontrado");
        const matchPassword = credentials?.password
          ? await bcrypt.compare(credentials.password, userFound.password)
          : false;
        if (!matchPassword) throw new Error("Contraseña incorrecta");
        return {
          id: userFound.id,
          name: userFound.fullName,
          email: userFound.email,
          message: "completado",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt({ token, user }: any) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }: any) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  // events: {
  //   async linkAccount({ user }) {
  //     await db.user.update({
  //       where: { id: user.id },
  //       data: {
  //         emailVerified: new Date(),
  //       },
  //     });
  //   },
  // },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
