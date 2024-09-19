"use client";
import { signOut } from "next-auth/react";
import { Button } from "./button";

const LogoutButton: React.FC = () => {
  return (
    <Button
      txt={"Cerrar Sesion"}
      onclick={async () => {
        await signOut({
          callbackUrl: "/",
        });
      }}
    />
  );
};
export default LogoutButton;
