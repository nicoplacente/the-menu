"use client";
import { useState } from "react";
import AsideBar from "./aside-bar-dashboard";
import { AdminCard } from "./admin-card";
import { CancelSub } from "./cancel-sub";
import { MethodPayment } from "./method-payment";
import { FormDashboard } from "./form-dashboard";
import { Perfil } from "./perfil";
import SectionContainer from "../yourcard-landing/section-container";

export const DynamicComponent = () => {
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
    <SectionContainer>
      <div className="flex">
        <AsideBar onSelect={setSelectedComponent} />
        <div className="flex-grow">{renderComponent()}</div>
      </div>
    </SectionContainer>
  );
};
