import { IconCircleDashedCheck } from "@tabler/icons-react";
import Parrafos from "../ui/parrafos";

interface PricingTypes {
  id: string;
  price: string;
  title: string;
  isMoreSale: boolean;
  description: string;
  features: string[];
  notFeatures?: string[];
}

export default function PricingCard({ card }: { card: PricingTypes }) {
  return (
    <div className="relative inline-flex shadow-xl shadow-gray-900 w-full max-w-md p-0.5 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400">
      {card.isMoreSale && (
        <div className="absolute w-1/2 h-12 p-2 rounded-t-lg -top-9 text-center font-bold text-lg left-1/4 -z-10  text-gray-950  bg-green-400">
          Mas Vendido
        </div>
      )}
      <article className="bg-gray-900 flex flex-col gap-4 p-6 w-full rounded-lg">
        <p className="text-3xl sm:text-4xl font-bold font-mono text-center">
          {card.price}
        </p>
        <div>
          <h3 className="text-lg text-center">{card.title}</h3>
          <Parrafos>{card.description}</Parrafos>
        </div>
        <ul>
          {card.features.map((feature: string, index) => (
            <li key={index} className="flex items-center gap-2 p-2 text-sm">
              <IconCircleDashedCheck className="text-green-400 w-6" />
              <span className="w-full">{feature}</span>
            </li>
          ))}
          {card.notFeatures &&
            card.notFeatures.map((feature: string, index) => (
              <li
                key={index}
                className="flex items-center gap-2 p-2 text-gray-700 text-sm line-through"
              >
                <IconCircleDashedCheck className="text-gray-700 w-6" />
                <span className="w-full">{feature}</span>
              </li>
            ))}
        </ul>
        <button className="relative hover:opacity-70 transition duration-300 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br to-orange-400 from-pink-500  text-white  focus:ring-4 focus:outline-none focus:ring-pink-800">
          <span className="relative flex items-center gap-2 px-5 py-2.5 transition-all ease-in duration-75 rounded-md">
            Empezar
          </span>
        </button>
      </article>
    </div>
  );
}
