import Link from "next/link";
import { App } from "@prisma/client";

export default async function RestaurantHeader({ app }: { app: App }) {
  return (
    <header
      className="px-0 py-9 sm:py-12 flex items-center gap-4 justify-center"
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
            className={`size-16 object-cover ${
              app.isImageRounded ? "rounded-full" : "rounded-lg"
            } `}
          />
        )}
        {app.isTitleVisible && (
          <h1
            className="text-center text-3xl font-bold"
            style={{ color: app.textColor }}
          >
            {app.appName}
          </h1>
        )}
      </Link>
    </header>
  );
}
