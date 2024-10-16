import RestaurantHeader from "@/components/restaurants/restaurant-header";
import prisma from "@/libs/prisma";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { appId: string };
}) {
  const appFound = await prisma.app.findUnique({ where: { id: params.appId } });

  if (!appFound) {
    return {
      title: "Carta no encontrada",
    };
  }

  return {
    title: `${appFound.appName}`,
    description: `Descubre la carta de ${appFound.appName}. ¡No puedes perderte estos platos!`,
    icons: { icon: appFound.image ?? "/themenu.png" },
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { appId: string };
}) {
  const appFound = await prisma.app.findUnique({
    where: { id: params.appId },
    include: { categories: true },
  });

  if (!appFound) {
    return (
      <div className="grid place-content-center h-screen">
        <h1 className="text-white">Carta no encontrada</h1>
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
