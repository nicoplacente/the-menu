import { CARDS } from "@/libs/card-data";
import RestaurantHeader from "@/components/restaurants/restaurant-header";

export async function generateMetadata({
  params,
}: {
  params: { appId: string };
}) {
  const appFound = CARDS.find((card) => card.appId === params.appId);

  if (!appFound) {
    return {
      title: "Carta no encontrada",
    };
  }

  return {
    title: `${appFound.appName}`,
    description: `Descubre la carta de ${appFound.appName}. ¡No puedes perderte estos platos!`,
    icons: { icon: appFound.image ?? "/yourcard.webp" },
  };
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { appId: string };
}) {
  const appFound = CARDS.find((card) => card.appId === params.appId);

  if (!appFound) {
    return (
      <div>
        <h1>Carta no encontrada</h1>
      </div>
    );
  }

  return (
    <div>
      <RestaurantHeader app={appFound} />

      <main>
        <div
          className="fixed h-screen w-full top-0 left-0 -z-10"
          style={{ backgroundColor: appFound.bgColor }}
        ></div>
        {children}
      </main>
    </div>
  );
}
