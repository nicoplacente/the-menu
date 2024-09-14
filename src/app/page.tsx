import SectionContainer from "@/components/section-container";
import PricingCard from "@/components/pricing-card";

interface PricingTypes {
  price: string;
  isMoreSale: boolean;
  title: string;
  description: string;
  features: string[];
}

const pricing = [
  {
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
            return <PricingCard card={card} />;
          })}
        </div>
      </SectionContainer>

      <SectionContainer
        id="info"
        title="¿Qué es YourCard?"
        description="📱 YourCard es la solución definitiva para llevar tu restaurante al
          siguiente nivel. Crea una carta digital única, fácil de usar y
          totalmente personalizable para que refleje la esencia de tu marca. ✨
          Destaca con lo mejor: Resalta el plato del día, ajusta precios y
          controla el stock en tiempo real. ¡Todo a tu alcance! 🚀 Gestión
          total: Maneja las reservas y el servicio de delivery desde una sola
          plataforma, optimizando el tiempo y brindando una experiencia superior
          a tus clientes. 🔗 Códigos QR: Ofrece a tus comensales acceso rápido a
          tu carta digital con un simple escaneo. Sorpréndelos con una
          presentación moderna y profesional. 🔧 Soporte personalizado:
          ¿Necesitas cambios únicos? ¡No hay problema! Nuestro equipo está
          disponible para modificar tu carta según tus necesidades. Haz que tu
          restaurante se destaque con YourCard. ¡Empieza hoy mismo y genera una
          impresión inolvidable! 👉 YourCard: La carta que transforma tu
          negocio."
      >
        <></>
      </SectionContainer>
    </main>
  );
}
