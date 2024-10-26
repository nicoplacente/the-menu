import Link from "next/link";
import { App } from "@prisma/client";

// export default async function RestaurantHeader({ app }: { app: App }) {
export default async function RestaurantHeader({ app }: { app: any }) {
  return (
    <header
      className="h-52 flex items-center gap-4 justify-center relative"
      style={{ backgroundColor: app.primaryColor }}
    >
      <Link
        href={`/${app.id}`}
        className="flex items-center gap-2 hover:bg-black/10 p-2 transition rounded-lg duration-300 hover:shadow-inner hover:shadow-black/55"
      >
        {app.image && (
          <img
            src={app.image}
            alt={app.appName}
            className="object-cover absolute w-full h-full top-0 left-0 contrast-125 brightness-90 object-center"
          />
        )}
        {app.isTitleVisible && (
          <h1
            className="text-center text-4xl z-10 font-thin uppercase"
            style={{ color: app.textColor }}
          >
            {app.appName}
          </h1>
        )}
      </Link>
    </header>
  );
}
