"use client";

import React from "react";

interface ButtonProps {
  txt: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ txt, onclick }: ButtonProps) {
  return (
    <button
      type="submit"
      className="relative hover:opacity-70 transition duration-300 inline-flex items-center justify-center p-0.5 w-full mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br to-orange-400 from-pink-500  text-white  focus:ring-4 focus:outline-none focus:ring-pink-800"
      aria-label={txt}
      onClick={onclick}
    >
      <span className="relative flex items-center gap-2 px-4 sm:px-5 py-2.5 transition-all ease-in duration-75  rounded-md">
        {txt}
      </span>
    </button>
  );
}
