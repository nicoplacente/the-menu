// import SectionContainer from "@/components/yourcard-landing/section-container";
// import Link from "next/link";
// import { IconChevronRight } from "@tabler/icons-react";
// import prisma from "@/libs/prisma";
// import { Category } from "@prisma/client";
import RestaurantFooter from "@/components/restaurants/restaurant-footer";
import RestaurantHeader from "@/components/restaurants/restaurant-header";
// interface Params {
//   appId: string;
// }

// export const dynamic = "force-dynamic";

// export default async function UserCard({ params }: { params: Params }) {
//   const userCard = params.appId;

//   const appFound = await prisma.app.findUnique({
//     where: { id: userCard },
//     include: { categories: true },
//   });

//   if (!appFound) {
//     return (
//       <div className="flex flex-col justify-center h-screen">
//         <h2 className="text-white text-center">
//           No se encontró ninguna carta con ese nombre
//         </h2>
//       </div>
//     );
//   }

//   return (
//     <main
//       className="h-screen"
//       style={{ backgroundColor: appFound.bgColor, color: appFound.textColor }}
//     >
//       <RestaurantHeader app={appFound} />
//       <SectionContainer>
//         <article
//           className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
//           style={{ color: appFound.textColor }}
//         >
//           {appFound.categories?.map((category: Category) => (
//             <Link
//               key={category.id}
//               href={`/${appFound.id}/${category.id}`}
//               className="flex items-center justify-evenly text-xl text-center font-semibold shadow-xl p-6 rounded-lg hover:opacity-70 hover:-translate-y-2 transition duration-300"
//               style={{
//                 backgroundColor: appFound.primaryColor,
//               }}
//             >
//               {category.name} <IconChevronRight />
//             </Link>
//           ))}
//         </article>
//       </SectionContainer>
//     </main>
//   );
// }

import { Akronim } from "next/font/google";

const akronim = Akronim({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const appFound = {
  id: "prueba",
  primaryColor: "#ce4b09ff",
  bgColor: "#171717",
  image:
    "https://imgs.search.brave.com/4KXih2USYnq7H7J53xLFlnpUDfGoOUbKLFb5s4fZHfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM3LmFscGhhY29k/ZXJzLmNvbS84NTQv/ODU0MTU2LmpwZw",
  textColor: "#000",
  appName: "Tacos Bar",
  isTitleVisible: false,
  footer: {
    hs: "Lunes a Viernes de 13pm a 1am",
    location: "Ameguino 1992, Coronel Suárez",
    redes: {
      instagram: "#",
      facebook: "#",
    },
    contact: "2926402409",
  },
};

const categories = [
  {
    id: "bebidas",
    name: "Bebidas",
    image:
      "https://imgs.search.brave.com/ZhUiE1_M_HkDk6IWfoVdkJZ892rpXN-k_q_7UphUHEU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY2Ru/Lm1pdGllbmRhbnVi/ZS5jb20vc3RvcmVz/Lzk3Mi8yNjkvcHJv/ZHVjdHMvMjAyNDAy/MTBfMTIwNzUzLTlj/ODliNjNlMjljZTFk/YzRiNTE3MDc1OTE3/MTA3MjE2LTEwMC0w/LmpwZw",
    products: [
      {
        id: "coca",
        name: "Coca Cola",
        price: 5000,
      },
      {
        id: "fernet",
        name: "Fernet",
        price: 9000,
      },
    ],
  },
  {
    id: "pizzas",
    name: "Pizzas",
    image:
      "https://imgs.search.brave.com/8KSOwJUW0xPtyGboujoZ7WRGqyCZEbBReMmOsLpZUdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/OTQ2NzAxL3Bob3Rv/L3BpenphLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05N3Jj/MFZJaS1zM21uNHhl/NHhEeTlTLVhKX09o/Ym45MlhhRU1haUlE/X2VZPQ",
    products: [
      {
        id: "coca",
        name: "Coca Cola",
        price: 5000,
      },
      {
        id: "fernet",
        name: "Fernet",
        price: 9000,
      },
    ],
  },
  {
    id: "pizzas",
    name: "Pizzas",
    image:
      "https://imgs.search.brave.com/8KSOwJUW0xPtyGboujoZ7WRGqyCZEbBReMmOsLpZUdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/OTQ2NzAxL3Bob3Rv/L3BpenphLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05N3Jj/MFZJaS1zM21uNHhl/NHhEeTlTLVhKX09o/Ym45MlhhRU1haUlE/X2VZPQ",
    products: [
      {
        id: "coca",
        name: "Coca Cola",
        price: 5000,
      },
      {
        id: "fernet",
        name: "Fernet",
        price: 9000,
      },
    ],
  },
  {
    id: "pizzas",
    name: "Pizzas",
    image:
      "https://imgs.search.brave.com/8KSOwJUW0xPtyGboujoZ7WRGqyCZEbBReMmOsLpZUdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/OTQ2NzAxL3Bob3Rv/L3BpenphLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05N3Jj/MFZJaS1zM21uNHhl/NHhEeTlTLVhKX09o/Ym45MlhhRU1haUlE/X2VZPQ",
    products: [
      {
        id: "coca",
        name: "Coca Cola",
        price: 5000,
      },
      {
        id: "fernet",
        name: "Fernet",
        price: 9000,
      },
    ],
  },
  {
    id: "pizzas",
    name: "Pizzas",
    image:
      "https://imgs.search.brave.com/8KSOwJUW0xPtyGboujoZ7WRGqyCZEbBReMmOsLpZUdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/OTQ2NzAxL3Bob3Rv/L3BpenphLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05N3Jj/MFZJaS1zM21uNHhl/NHhEeTlTLVhKX09o/Ym45MlhhRU1haUlE/X2VZPQ",
    products: [
      {
        id: "coca",
        name: "Coca Cola",
        price: 5000,
      },
      {
        id: "fernet",
        name: "Fernet",
        price: 9000,
      },
    ],
  },
];

function hexToRGBA(hex: string, alpha = 1) {
  const expandedHex =
    hex.length === 4
      ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
      : hex;

  const r = parseInt(expandedHex.slice(1, 3), 16);
  const g = parseInt(expandedHex.slice(3, 5), 16);
  const b = parseInt(expandedHex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Design() {
  return (
    <main
      className={`${akronim.className} flex flex-col restaurant-layout`}
      style={{ backgroundColor: "#171717", color: "#fff" }}
    >
      <RestaurantHeader appFound={appFound} />
      <div className="grid grid-cols-1 px-4 md:grid-cols-3 max-w-5xl xl:max-w-[1500px] w-full mx-auto my-12 gap-4">
        {categories.map((category) => {
          return (
            <article
              key={category.id}
              style={{
                boxShadow: `0px 2px 12px ${hexToRGBA(
                  appFound.primaryColor,
                  0.3
                )}`,
              }}
              className="relative flex justify-center items-end cursor-pointer aspect-[300/150] group size-full rounded-sm overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute object-cover size-full object-center group-hover:scale-110 transition duration-300"
              />
              <h4 className="font-thin bg-black/20 w-full p-2 contrast-125 backdrop-blur-sm z-10 text-2xl text-center">
                {category.name}
              </h4>
            </article>
          );
        })}
      </div>
      <RestaurantFooter appFound={appFound}></RestaurantFooter>
    </main>
  );
}
