import React from "react";

export default function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="bg-black/30 p-6 aspect-[500/150] max-w-full flex flex-col gap-2 rounded shadow-xl justify-center items-start">
      {children}
    </label>
  );
}
