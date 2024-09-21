"use client";

import { IconLogin2 } from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { HeaderButtonNotHover } from "../ui/header-button";
import { Button } from "../ui/button";

export default function ClientSessionheader() {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <div className="flex items-center m-2 gap-4 p-2 ">
          <div>
            <Link href="/dashboard">
              <img
                src={session?.user?.image ?? "/default-avatar.png"}
                alt="Avatar"
                className="size-14 rounded-full object-cover cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Button
              txt="Logout"
              onclick={async () => {
                await signOut({
                  callbackUrl: "/",
                });
              }}
            />
          </div>
        </div>
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
