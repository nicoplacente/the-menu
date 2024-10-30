"use client";
import { IconLogin2, IconUser } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { HeaderButtonNotHover } from "../ui/header-button";

export default function ClientSessionheader() {
  const { data: session } = useSession();

  return (
    <>
      {session?.user ? (
        <Link href="/dashboard" className="-mt-2">
          {session?.user?.image ? (
            <img
              src={session?.user?.image}
              alt="Avatar"
              className="size-16 rounded-full object-cover cursor-pointer"
            />
          ) : (
            <IconUser className="size-16 text-white border-2 rounded-full p-4" />
          )}
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
