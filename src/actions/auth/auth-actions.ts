"use client";

import { signIn } from "next-auth/react";
interface LoginData {
  email: string;
  password: string;
}

export const LoginAction = async (data: LoginData) => {
  try {
    const { email, password } = data;
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return result;
  } catch (error) {
    console.log("Error en la autenticación:", error);
  }
};
