import Link from "next/link";
import { IconLogin2 } from "@tabler/icons-react";
import { HeaderButton, HeaderButtonNotHover } from "./ui/header-button";
import Image from "next/image";
import MobileHeaderButton from "./ui/mobile-header-button";

export default function Header() {
  return (
    <header className="flex sticky top-0 z-50 items-center justify-between py-4 px-6 bg-black/20 backdrop-blur">
      <span className="absolute w-full h-1 left-0 bottom-0 bg-[linear-gradient(90deg,transparent,#ec489999,#fb923c99,transparent)]"></span>
      <Link href="/">
        <span className="inline-flex rounded-full p-0.5 overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400">
          <Image
            src="/yourcard.webp"
            className="rounded-full min-w-9 aspect-square size-9 lg:size-16 hover:opacity-70 transition duration-300 animate-pulse-one"
            alt="logo"
            width={650}
            height={422}
            priority
          />
        </span>
      </Link>

      <nav className="flex items-center gap-4 sm:gap-9 lg:gap-12">
        <MobileHeaderButton />
        <ul className="hidden lg:flex items-center gap-4 sm:gap-9 lg:gap-12">
          <HeaderButton href="#">Crea tu carta</HeaderButton>
          <HeaderButton href="#planes">Plan de Pago</HeaderButton>
          <HeaderButton href="#info">¿Qué es YourCard?</HeaderButton>
        </ul>
        <HeaderButtonNotHover href="/login">
          Iniciar Sesión
          <span className="hidden sm:block">
            <IconLogin2 />
          </span>
        </HeaderButtonNotHover>
      </nav>
    </header>
  );
}
