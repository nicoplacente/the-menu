"use client";

import ValidateDynamicPath from "@/libs/validateDynamicPath";

import Image from "next/image";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandDiscordFilled,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

const REDES = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/codeluxe_/",
    icon: IconBrandInstagram,
  },
  {
    name: "Discord",
    link: "https://discord.gg/VATYyRtHZf",
    icon: IconBrandDiscordFilled,
  },
];

export default function Footer() {
  const pathname = usePathname();

  if (!ValidateDynamicPath(pathname)) return null;

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-full p-0.5 overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400">
                <Image
                  src="/themenu.webp"
                  className="rounded-full min-w-9 aspect-square size-9 lg:size-16 hover:opacity-70 transition duration-300 animate-pulse-one"
                  alt="logo"
                  width={500}
                  height={500}
                  priority
                />
              </span>
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                TheMenu
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h4 className="mb-6 text-sm font-semibold  uppercase text-white">
                Contacto
              </h4>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    aria-label="Email"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="mailto:codeluxetech@gmail.com"
                    className="hover:underline text-sm"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://wa.me/2926402409"
                    className="hover:underline text-sm"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-semibold  uppercase text-white">
                Redes
              </h4>
              <ul className="text-gray-400 font-medium">
                {REDES.map((red) => {
                  return (
                    <li key={red.name} className="mb-4">
                      <a
                        aria-label={red.name}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        href={red.link}
                        className="hover:underline text-sm"
                      >
                        {red.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-semibold  uppercase text-white">
                Legal
              </h4>
              <ul className="text-gray-400 font-medium">
                <li>
                  <Link
                    href="/terminos-y-condiciones"
                    className="hover:underline text-sm"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center text-gray-400">
            © 2024{" "}
            <a
              aria-label="Codeluxe"
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://codeluxe.tech"
              className="hover:underline"
            >
              Codeluxe
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {REDES.map((red) => (
              <a
                key={red.name}
                href={red.link}
                aria-label={red.name}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="ml-3 text-gray-500 hover:text-white"
              >
                <red.icon className="size-6 " />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
