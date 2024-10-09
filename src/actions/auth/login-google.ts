"use client";

import { alerts } from "@/utils/alerts";
import { signIn } from "next-auth/react";

export const LoginGoogleAction = async () => {
  try {
    const result = await signIn("google", { callbackUrl: "/dashboard" });
    return result;
  } catch (error) {
    alerts("error", "Error en la autenticación");
  }
};
