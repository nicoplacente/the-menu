"use client";
import React from "react";
import { Button } from "../ui/button";
import { ItemsSideBar } from "@/utils/items-sideBar";
import LogoutButton from "../ui/logout-button";
import { useSession } from "next-auth/react";

interface AsideBarProps {
  onSelect: (item: string) => void;
}

const AsideBar: React.FC<AsideBarProps> = ({ onSelect }) => {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <aside className="flex flex-col max-w-52 w-full border-2 p-6">
      <ul>
        {ItemsSideBar.map((item, index) => {
          if (session?.user?.provider && item.txt === "Administrar Perfil") {
            return null;
          }
          return (
            <Button
              key={index}
              txt={item.txt}
              onclick={() => onSelect(item.txt)}
            />
          );
        })}
      </ul>
      <LogoutButton />
    </aside>
  );
};

export default AsideBar;
