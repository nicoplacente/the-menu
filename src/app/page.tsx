import PricingCard from "@/components/yourcard-landing/pricing-card";
import SectionContainer from "@/components/yourcard-landing/section-container";
import YourcardInfo from "@/components/yourcard-landing/yourcard-info";

interface PricingTypes {
  id: string;
  price: string;
  isMoreSale: boolean;
  title: string;
  description: string;
  features: string[];
}

const pricing = [
  {
    id: "dyuhduawhdwau",
    price: "$30.000/mes",
    isMoreSale: false,
    title: "Plan Básico",
    description: "Todo en una sola app",
    features: [
      "Mejora tu restaurante",
      "Crea tu carta digital única",
      "Gestiona precios y el stock",
      "Facil de usar y personalizar",
      "Genera una buena impresion",
      "Obtendrás un código QR con acceso directo a la carta",
    ],
    notFeatures: [
      "Destaca el plato del día",
      "Gestión de reservas",
      "Acceso al soporte para modificaciónes únicas y personalizadas",
    ],
  },
  {
    id: "udwahudaudauu",
    price: "$50.000/mes",
    isMoreSale: true,
    title: "Plan Pro",
    description: "Todo en una sola app",
    features: [
      "Mejora tu restaurante",
      "Crea tu carta digital única",
      "Gestiona precios y el stock",
      "Facil de usar y personalizar",
      "Genera una buena impresion",
      "Obtendrás un código QR con acceso directo a la carta",
      "Destaca el plato del día",
      "Gestión de reservas",
      "Acceso al soporte para modificaciónes únicas y personalizadas",
    ],
  },
];

export default function Home() {
  return (
    <main>
      <span className="text-xs md:text-sm absolute text-white/70 right-4 font-semibold">
        +50 bares y restaurantes usando TheMenu
      </span>
      <SectionContainer
        className="text-white"
        id="planes"
        title="TheMenu"
        description="Elegí el plan ideal para vos"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12">
          {pricing.map((card: PricingTypes) => {
            return <PricingCard key={card.id} card={card} />;
          })}
        </div>
      </SectionContainer>

      <SectionContainer
        className="text-white"
        id="info"
        title="¿Qué es TheMenu?"
        description="La solución definitiva para llevar tu restaurante al
          siguiente nivel. "
      >
        <YourcardInfo />
        {/* <iframe
          className="w-3/4 min-h-[1080px]"
          src="http://localhost:3000/prueba"
          frameborder="0"
        ></iframe>
        <iframe
          className="w-96 min-h-[700px]"
          src="http://localhost:3000/prueba"
          frameborder="0"
        ></iframe> */}
      </SectionContainer>
    </main>
  );
}
