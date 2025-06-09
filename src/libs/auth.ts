// import NextAuth from "next-auth";
// import authConfig from "./auth.config";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "./prisma";

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   ...authConfig,
//   session: {
//     strategy: "jwt",
//     maxAge: 60 * 60,
//     updateAge: 10,
//   },
//   callbacks: {
//     jwt: async ({ token, user }) => {
//       if (token) {
//         const dbUser = await prisma.user.findUnique({
//           where: { id: user ? (user.id as string) : (token.id as string) },
//           include: {
//             accounts: true,
//             app: {
//               include: {
//                 categories: {
//                   include: {
//                     subcategories: true,
//                   },
//                 },
//               },
//             },
//           },
//         });
//         token.id = dbUser?.id;
//         token.name = dbUser?.name as string;
//         token.phone = dbUser?.phone as string;
//         token.provider = dbUser?.accounts?.[0]?.provider;
//         token.accounts = dbUser?.accounts;
//         token.app = dbUser?.app;
//       }

//       return token;
//     },

//     session({ session, token }) {
//       session.user.id = token.id as string;
//       session.user.name = token.name;
//       session.user.phone = token.phone;
//       session.user.provider = token.provider;
//       session.user.accounts = token.accounts;
//       session.user.app = token.app;
//       return session;
//     },
//   },

//   events: {
//     async linkAccount({ user }) {
//       await prisma.user.update({
//         where: { id: user.id },
//         data: {
//           emailVerified: new Date(),
//         },
//       });
//     },
//   },
//   pages: {
//     signIn: "/auth/login",
//   },
// });
