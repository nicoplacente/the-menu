import SectionContainer from "@/components/yourcard-landing/section-container";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import prisma from "@/libs/prisma";
import { Category } from "@prisma/client";

interface Params {
  appId: string;
}

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

export default async function UserCard({ params }: { params: Params }) {
  const userCard = params.appId;

  const appFound = await prisma.app.findUnique({
    where: { id: userCard },
    include: { categories: true },
  });

  if (!appFound) {
    return (
      <div className="flex flex-col justify-center h-screen">
        <h2 className="text-white text-center">
          No se encontró ninguna carta con ese nombre
        </h2>
      </div>
    );
  }

  return (
    <SectionContainer className="h-screen">
      <article
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{ color: appFound.textColor }}
      >
        {appFound.categories?.map((category: Category) => (
          <Link
            key={category.id}
            href={`/${appFound.id}/${category.id}`}
            className="flex items-center justify-evenly text-xl text-center font-semibold shadow-xl p-6 rounded-lg hover:opacity-70 hover:-translate-y-2 transition duration-300"
            style={{
              backgroundColor: appFound.primaryColor,
            }}
          >
            {category.name} <IconChevronRight />
          </Link>
        ))}
      </article>
    </SectionContainer>
  );
}
