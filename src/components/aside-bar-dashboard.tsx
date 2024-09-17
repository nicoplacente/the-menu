"use client";
import { Button } from "./ui/button";
import { ItemsSideBar } from "@/utils/items-sideBar";

export default function AsideBar() {
  return (
    <aside className="flex justify-center items-center w-auto max-w-56 bg-transparent border-2 rounded-lg p-6">
      <ul>
        {ItemsSideBar.map((item, index) => (
          <Button key={index} txt={item.txt} onclick={item.funcion} />
        ))}
      </ul>
    </aside>
  );
}
