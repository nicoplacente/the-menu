import Link from "next/link";
import { App } from "@prisma/client";

// export default async function RestaurantHeader({ app }: { app: App }) {
export default async function RestaurantHeader({
  appFound,
}: {
  appFound: any;
}) {
  return (
    <header
      className="h-52 flex items-center gap-4 justify-center relative"
      style={{ backgroundColor: appFound.primaryColor }}
    >
      <Link
        href={`/${appFound.id}`}
        className="flex items-center gap-2 hover:bg-black/10 p-2 transition rounded-lg duration-300 hover:shadow-inner hover:shadow-black/55"
      >
        {appFound.image && (
          <img
            src={appFound.image}
            alt={appFound.appName}
            className="object-cover absolute w-full h-full top-0 left-0 contrast-125 brightness-90 object-center"
          />
        )}
        {appFound.isTitleVisible && (
          <h1
            className="text-center text-4xl z-10 font-thin uppercase"
            style={{ color: appFound.textColor }}
          >
            {appFound.appName}
          </h1>
        )}
      </Link>
    </header>
  );
}
