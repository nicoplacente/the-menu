"use client";

import RestaurantHeader from "@/components/restaurants/restaurant-header";
import { App, Category } from "@prisma/client";
import { useEffect, useState } from "react";

interface AppWithCategories extends App {
  categories: Category[];
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { appId: string };
}) {
  const [appFound, setAppFound] = useState<AppWithCategories | null>(null);

  useEffect(() => {
    const getApps = async () => {
      const response = await fetch("/api/get-users-app");
      const data = await response.json();

      const filteredApp = data.foundApp.find(
        (app: App) => app.id === params.appId
      );
      setAppFound(filteredApp);
    };

    getApps();
  }, []);

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
