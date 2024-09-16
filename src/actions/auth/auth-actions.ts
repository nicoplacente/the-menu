"use client";

import { alerts } from "@/utils/alerts";
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
    alerts("error", "Error en la autenticación");
  }
};

export const LoginGoogleAction = async () => {
  try {
    await signIn("google", {
      callbackUrl: "/",
      redirect: false,
    });
  } catch (error) {
    alerts("error", "Error en la autenticación");
  }
};
