import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "YourCard",
  description:
    "📱 YourCard es la solución definitiva para llevar tu restaurante al siguiente nivel. Crea una carta digital única, fácil de usar y totalmente personalizable para que refleje la esencia de tu marca.✨ Destaca con lo mejor: Resalta el plato del día, ajusta precios y controla el stock en tiempo real. ¡Todo a tu alcance!🚀 Gestión total: Maneja las reservas y el servicio de delivery desde una sola plataforma, optimizando el tiempo y brindando una experiencia superior a tus clientes.🔗 Códigos QR: Ofrece a tus comensales acceso rápido a tu carta digital con un simple escaneo. Sorpréndelos con una presentación moderna y profesional.🔧 Soporte personalizado: ¿Necesitas cambios únicos? ¡No hay problema! Nuestro equipo está disponible para modificar tu carta según tus necesidades.Haz que tu restaurante se destaque con YourCard. ¡Empieza hoy mismo y genera una impresión inolvidable!👉 YourCard: La carta que transforma tu negocio.",
  icons: { icon: "/yourcard.webp" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed -z-50 h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
        <Header />
        {children}
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
