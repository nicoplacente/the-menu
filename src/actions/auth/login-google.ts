"use client";

import { alerts } from "@/utils/alerts";
import { signIn } from "next-auth/react";

export const LoginGoogleAction = async () => {
  try {
    await signIn("google");
  } catch (error) {
    alerts("error", "Error en la autenticación");
  }
};
