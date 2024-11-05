import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconPhone,
  IconMapPinFilled,
} from "@tabler/icons-react";

export default async function RestaurantFooter({
  appFound,
}: {
  appFound: any;
}) {
  return (
    <footer
      className="p-9"
      style={{ backgroundColor: appFound.primaryColor, color: "#fff" }}
    >
      <div className="flex justify-evenly items-center gap-12 max-w-3xl mx-auto">
        <div className="flex flex-col w-full justify-center items-center gap-2">
          <h3 className="text-3xl text-center">{appFound.appName}</h3>
          <div className="flex items-center justify-center gap-2">
            <a
              className="hover:opacity-75 transition duration-300"
              href={appFound.footer.redes.instagram}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <IconBrandInstagram />
            </a>
            <a
              className="hover:opacity-75 transition duration-300"
              href={appFound.footer.redes.facebook}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <IconBrandFacebook />
            </a>
          </div>
        </div>
        <div className="flex text-xl flex-col gap-2 w-full">
          <p className="flex items-center gap-2">
            <IconMapPinFilled />
            {appFound.footer.hs}
          </p>
          <a
            className="hover:opacity-75 transition duration-300 flex items-center gap-2 w-fit"
            href={`tel:${appFound.footer.contact}`}
          >
            <IconPhone />
            {appFound.footer.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
