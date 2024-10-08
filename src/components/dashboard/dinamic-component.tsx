"use client";
import { useState } from "react";
import AsideBar from "./aside-bar-dashboard";
import { AdminCard } from "./admin-card";
import { CancelSub } from "./cancel-sub";
import { MethodPayment } from "./method-payment";
import { FormDashboard } from "./form-dashboard";
import { Perfil } from "./perfil";
export const DynamicComponent: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>("Perfil");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Administrar Perfil":
        return <FormDashboard />;
      case "Administrar Carta":
        return <AdminCard />;
      case "Administrar Metodos de pago":
        return <MethodPayment />;
      case "Cancelar Subscripcion":
        return <CancelSub />;
      default:
        return <Perfil />;
    }
  };
  return (
    <section className="flex justify-between p-4">
      <AsideBar onSelect={setSelectedComponent} />
      <div className="flex-grow">{renderComponent()}</div>
    </section>
  );
};
