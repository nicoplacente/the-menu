import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string;
      app?: Array;
      name?: string;
      phone?: string;
      provider?: string;
      accounts?: Array;
    } & DefaultSession["user"];
  }
  interface User {
    role?: string;
    app?: Array;
    name?: string;
    phone?: string;
    provider?: string;
    accounts?: Array;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    app?: Array;
    name?: string;
    phone?: string;
    provider?: string;
    accounts?: Array;
  }
}
