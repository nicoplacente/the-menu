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
      style={{ backgroundColor: appFound.primaryColor }}
      className="relative"
    >
      <Link
        href={`/${appFound.id}`}
        className="flex items-center gap-2 w-full h-auto hover:bg-black/10 transition rounded-lg duration-300 hover:shadow-inner hover:shadow-black/55"
      >
        {appFound.image && (
          <img
            src={appFound.image}
            alt={appFound.appName}
            className="w-full object-cover lg:object-cover contrast-125 brightness-90 max-h-80 xl:max-h-[500px] h-auto"
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
