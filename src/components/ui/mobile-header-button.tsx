"use client";
import { useState } from "react";

import MobileNav from "./mobile-nav";

export default function MobileHeaderButton() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleOpenNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  return (
    <>
      <button
        onClick={handleOpenNav}
        className="hamburger block lg:hidden hover:opacity-70 transition duration-300 active:bg-gray-900/55 rounded-lg p-2"
        aria-label="Toggle Navigation"
      >
        <svg
          className={isOpenNav ? "open-nav-animation" : ""}
          viewBox="0 0 32 32"
        >
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </button>
      {isOpenNav && <MobileNav />}
    </>
  );
}
