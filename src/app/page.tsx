import SectionContainer from "@/components/section-container";
import PricingCard from "@/components/pricing-card";
import YourcardInfo from "@/components/yourcard-info";

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
    price: "$500.000",
    isMoreSale: false,
    title: "Plan Básico",
    description: "Pago Único",
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
      "Gestión de delivery",
      "Acceso al soporte para modificaciónes únicas y personalizadas",
    ],
  },
  {
    id: "udwahudaudauu",
    price: "$40.000/mes",
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
      "Gestión de delivery",
      "Acceso al soporte para modificaciónes únicas y personalizadas",
    ],
  },
];

export default function Home() {
  return (
    <main>
      <SectionContainer
        id="planes"
        title="Elegí el plan ideal para vos"
        description="me gusta la mama de tiago y le reviento el culo a la re gorda puta esa"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {pricing.map((card: PricingTypes) => {
            return <PricingCard key={card.id} card={card} />;
          })}
        </div>
      </SectionContainer>

      <SectionContainer
        id="info"
        title="¿Qué es YourCard?"
        description="La solución definitiva para llevar tu restaurante al
          siguiente nivel. "
      >
        <YourcardInfo />
      </SectionContainer>
    </main>
  );
}
