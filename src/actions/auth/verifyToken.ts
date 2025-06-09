// "use server";
// import jwt from "jsonwebtoken";

// const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

// export const VerifyToken = async (token: string) => {
//   try {
//     const decoded = jwt.verify(token, SECRET_KEY);
//     return {
//       valid: true,
//       expired: false,
//       decoded,
//     };
//   } catch (error: any) {
//     if (error.name === "TokenExpiredError") {
//       return {
//         valid: false,
//         expired: true,
//         message: "Token ha expirado",
//       };
//     } else {
//       return {
//         valid: false,
//         expired: false,
//         message: "Token inválido",
//       };
//     }
//   }
// };
