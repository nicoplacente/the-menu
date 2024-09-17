"use client";

import { IconLogin2, IconUserCircle } from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { HeaderButtonNotHover } from "./ui/header-button";

export default function ClientSessionheader() {
  const { data: session } = useSession();
  return (
    <>
      {" "}
      {session?.user ? (
        <Link href="/dashboard" className="-mt-2">
          <img
            src={session?.user?.image ?? "/default-avatar.png"}
            alt="Avatar"
            className="size-16 rounded-full object-cover cursor-pointer"
          />
        </Link>
      ) : (
        <HeaderButtonNotHover href="/auth/login">
          Iniciar Sesión
          <span className="hidden sm:block">
            <IconLogin2 />
          </span>
        </HeaderButtonNotHover>
      )}
    </>
  );
}
