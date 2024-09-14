import Link from "next/link";

export function HeaderButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-pink-800"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {children}
      </span>
    </Link>
  );
}

export function HeaderButtonNotHover({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="relative hover:opacity-70 transition duration-300 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br to-orange-400 from-pink-500  text-white  focus:ring-4 focus:outline-none focus:ring-pink-800"
    >
      <span className="relative flex items-center gap-2 px-4 sm:px-5 py-2.5 transition-all ease-in duration-75  rounded-md">
        {children}
      </span>
    </Link>
  );
}
