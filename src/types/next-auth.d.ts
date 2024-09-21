import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string;
      app?: string;
      name?: string;
      phone?: string;
    } & DefaultSession["user"];
  }
  interface User {
    role?: string;
    app?: string;
    name?: string;
    phone?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    app?: string;
    name?: string;
    phone?: string;
  }
}
